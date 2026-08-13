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

const { getItems } = await import("../lib/creators-api.ts");

const asinsFile = process.argv[2];
const outFile = process.argv[3];
const asins = JSON.parse(readFileSync(asinsFile, "utf-8"));

console.log(`Fetching ${asins.length} ASINs...`);

const results = [];
const failed = [];

for (let i = 0; i < asins.length; i += 10) {
  const batch = asins.slice(i, i + 10);
  try {
    const items = await getItems(batch);
    results.push(...items);
    const gotAsins = new Set(items.map(it => it.asin));
    for (const a of batch) {
      if (!gotAsins.has(a)) failed.push(a);
    }
  } catch (e) {
    console.log(`Batch [${batch.join(",")}] failed: ${e.message}. Retrying individually...`);
    for (const a of batch) {
      try {
        const single = await getItems([a]);
        if (single.length) results.push(...single);
        else failed.push(a);
      } catch (e2) {
        console.log(`  ${a} failed: ${e2.message}`);
        failed.push(a);
      }
      await new Promise(r => setTimeout(r, 200));
    }
  }
  if (i + 10 < asins.length) await new Promise(r => setTimeout(r, 300));
}

console.log(`Got ${results.length} items. Failed: ${failed.length}`);
if (failed.length) console.log(`FAILED ASINS: ${failed.join(", ")}`);

writeFileSync(outFile, JSON.stringify(results, null, 2));
writeFileSync(outFile.replace(/\.json$/, ".failed.json"), JSON.stringify(failed, null, 2));
console.log(`Wrote ${outFile}`);
