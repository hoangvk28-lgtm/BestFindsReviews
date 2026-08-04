/**
 * Runs automatically after every production build on Vercel (see package.json
 * "postbuild"). Pings IndexNow (Bing + Yandex) with the site's full current
 * URL list so new/changed pages get picked up without waiting for the daily
 * cron (app/api/cron/ping-indexnow/route.ts still runs as a daily safety net).
 *
 * Skips silently on local `npm run build` and on Vercel preview builds —
 * only fires for production deploys, so dev/PR builds never spam IndexNow.
 */
import { readFileSync } from "fs";
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

const urlList = [
  SITE_URL,
  `${SITE_URL}/guide`,
  `${SITE_URL}/compare`,
  `${SITE_URL}/deals`,
  `${SITE_URL}/categories`,
  ...guideSlugs.map((s) => `${SITE_URL}/guide/${s}`),
  ...categorySlugs.map((s) => `${SITE_URL}/categories/${s}`),
];

console.log(`[indexnow-postbuild] Pinging IndexNow with ${urlList.length} URLs...`);

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
