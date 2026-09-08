import { searchItems } from "../lib/creators-api";
import fs from "fs";

const queries = process.argv.slice(2);

async function main() {
  const out: Record<string, any> = {};
  for (const q of queries) {
    try {
      const res = await searchItems(q, { itemCount: 10 });
      out[q] = res;
    } catch (e: any) {
      out[q] = { error: String(e) };
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  fs.writeFileSync("/tmp/wr_scratch/out.json", JSON.stringify(out, null, 2));
  console.log("done");
}
main();
