/**
 * Runs automatically after every production build on Vercel (see package.json
 * "postbuild"). Pings IndexNow (Bing + Yandex) with only the URLs that
 * actually changed in this deploy, so new/changed pages get picked up
 * without waiting for the daily cron (app/api/cron/ping-indexnow/route.ts
 * still runs as a daily safety net over the full URL list).
 *
 * Skips silently on local `npm run build` and on Vercel preview builds —
 * only fires for production deploys, so dev/PR builds never spam IndexNow.
 */
import { readFileSync } from "fs";
import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const IS_VERCEL_PRODUCTION = process.env.VERCEL_ENV === "production";

if (!IS_VERCEL_PRODUCTION) {
  console.log("[indexnow-postbuild] Skipping — not a Vercel production build.");
  process.exit(0);
}

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.worthrated.com").replace(/\/$/, "");
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (!INDEXNOW_KEY) {
  console.warn("[indexnow-postbuild] INDEXNOW_KEY not set — skipping ping.");
  process.exit(0);
}

// Pull slugs straight out of the source files with a light regex rather than
// importing the .ts modules (this script runs as plain Node after the Next.js
// build, no ts-node/register available).
function extractSlugs(filePath, pattern) {
  const content = readFileSync(filePath, "utf8");
  const matches = [...content.matchAll(pattern)];
  return [...new Set(matches.map((m) => m[1]))];
}

const guideSlugs = extractSlugs(resolve(ROOT, "data/guides.ts"), /slug:\s*"([^"]+)"/g);
const categorySlugs = extractSlugs(resolve(ROOT, "data/categories.ts"), /slug:\s*"([^"]+)"/g);

const fullUrlList = [
  SITE_URL,
  `${SITE_URL}/guide`,
  `${SITE_URL}/compare`,
  `${SITE_URL}/deals`,
  `${SITE_URL}/categories`,
  ...guideSlugs.map((s) => `${SITE_URL}/guide/${s}`),
  ...categorySlugs.map((s) => `${SITE_URL}/categories/${s}`),
];

// Try to scope the ping down to only what changed since the previous commit.
// Falls back to the full URL list (previous behavior) whenever the diff
// can't be computed — e.g. shallow clone with no parent commit, or a change
// to data/guides.ts / data/categories.ts itself (slug list changed, safest
// to resubmit the lot rather than guess which entries are new).
function computeChangedUrlList() {
  let changedFiles;
  try {
    changedFiles = execSync("git diff --name-only HEAD~1 HEAD", {
      cwd: ROOT,
      encoding: "utf8",
    })
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
  } catch (err) {
    console.warn("[indexnow-postbuild] git diff unavailable, falling back to full URL list:", err.message);
    return fullUrlList;
  }

  if (changedFiles.length === 0) {
    return [];
  }

  if (changedFiles.includes("data/guides.ts") || changedFiles.includes("data/categories.ts")) {
    console.log("[indexnow-postbuild] guides.ts/categories.ts changed — falling back to full URL list.");
    return fullUrlList;
  }

  const changedSlugs = new Set();
  for (const f of changedFiles) {
    const m = f.match(/^data\/guides\/([^/]+)\.ts$/) || f.match(/^app\/\(site\)\/guide\/([^/]+)\/page\.tsx$/);
    if (m) changedSlugs.add(m[1]);
  }

  const changedCategorySlugs = new Set();
  for (const f of changedFiles) {
    const m = f.match(/^app\/\(site\)\/categories\/([^/]+)\/page\.tsx$/);
    if (m) changedCategorySlugs.add(m[1]);
  }

  const coreFilesChanged = changedFiles.some((f) =>
    ["app/(site)/page.tsx", "app/(site)/guide/page.tsx", "app/(site)/compare/page.tsx", "app/(site)/deals/page.tsx", "app/(site)/categories/page.tsx"].includes(f)
  );

  const urls = [];
  if (coreFilesChanged) {
    urls.push(SITE_URL, `${SITE_URL}/guide`, `${SITE_URL}/compare`, `${SITE_URL}/deals`, `${SITE_URL}/categories`);
  }
  for (const s of changedSlugs) urls.push(`${SITE_URL}/guide/${s}`);
  for (const s of changedCategorySlugs) urls.push(`${SITE_URL}/categories/${s}`);

  return urls;
}

const urlList = computeChangedUrlList();

if (urlList.length === 0) {
  console.log("[indexnow-postbuild] No relevant URL changes detected — skipping ping.");
  process.exit(0);
}

console.log(`[indexnow-postbuild] Pinging IndexNow with ${urlList.length} URLs (of ${fullUrlList.length} total)...`);

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });
  console.log(`[indexnow-postbuild] IndexNow responded HTTP ${res.status}`);
} catch (err) {
  // Never fail the build over a ping error — log and move on.
  console.warn("[indexnow-postbuild] Ping failed (non-fatal):", err.message);
}
