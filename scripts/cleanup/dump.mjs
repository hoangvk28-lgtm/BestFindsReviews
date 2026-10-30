// Print compact product data for rewriting. Usage: node scripts/cleanup/dump.mjs <file.ts> [...]
import fs from "node:fs";
import { extractProducts } from "./lib.mjs";
for (const f of process.argv.slice(2)) {
  const src = fs.readFileSync(`data/guides/${f}`, "utf8");
  const title = (src.match(/guideTitle = "([^"]+)"/) || [])[1];
  const ex = extractProducts(src);
  console.log(JSON.stringify({ file: f, title, products: ex.arr.map(({ id, rank, badge, name, specs, specList, description, bestFor, pros, cons }) =>
    ({ id, rank, badge, name, specs, specList, description, bestFor, pros, cons })) }));
}
