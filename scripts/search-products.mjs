import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

function loadDotEnvLocal() {
  try {
    const content = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx <= 0) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const raw = trimmed.slice(eqIdx + 1).trim();
      const val = raw.replace(/^["'](.*)["']$/, "$1");
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch {}
}
loadDotEnvLocal();

const { searchItems } = await import("../lib/creators-api.ts");

const keywords = process.argv[2];
const outFile = process.argv[3];
const itemCount = Number(process.argv[4]) || 10;

if (!keywords || !outFile) {
  console.log("Usage: node scripts/search-products.mjs \"<keywords>\" <outFile.json> [itemCount]");
  process.exit(1);
}

console.log(`Searching: "${keywords}"...`);
try {
  const items = await searchItems(keywords, { itemCount });
  console.log(`Got ${items.length} items.`);
  for (const it of items) {
    console.log(`  ${it.asin}  ${it.itemInfo?.title?.displayValue ?? "(no title)"}`);
  }
  writeFileSync(outFile, JSON.stringify(items, null, 2));
  console.log(`Wrote ${outFile}`);
} catch (e) {
  console.log(`Search failed: ${e.message}`);
  process.exit(1);
}
