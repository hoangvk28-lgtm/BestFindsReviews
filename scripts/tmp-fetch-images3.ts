import { getItemsBatched } from "../lib/creators-api";
import fs from "fs";
const asins = fs.readFileSync("/tmp/wr_scratch/asin_trimmers.txt", "utf-8").trim().split("\n");
async function main() {
  const results = await getItemsBatched(asins);
  const map: Record<string, string> = {};
  for (const item of results) {
    const url = item?.images?.primary?.large?.url;
    if (item?.asin && url) map[item.asin] = url;
  }
  fs.writeFileSync("/tmp/wr_scratch/asin_image_map3.json", JSON.stringify(map, null, 2));
  console.log("done", Object.keys(map).length, "of", asins.length);
}
main().catch(e => { console.error(e); process.exit(1); });
