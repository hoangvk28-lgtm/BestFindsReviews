// Usage: node scripts/cleanup/audit.mjs  -> scripts/cleanup/audit.json + summary
import fs from "node:fs";
import { extractProducts, issues } from "./lib.mjs";
const dir = "data/guides";
const byIssue = {}; const files = {}; let scanned = 0, unparsed = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith(".ts")) continue;
  const src = fs.readFileSync(`${dir}/${f}`, "utf8");
  if (!src.includes("export const products")) continue;
  scanned++;
  const ex = extractProducts(src);
  if (!ex) { unparsed.push(f); continue; }
  const set = new Set();
  for (const p of ex.arr) for (const i of issues(p)) set.add(i);
  if (/[—–]/.test(src.replace(/\/\/.*$/gm, ""))) set.add("dash-anywhere");
  if (set.size) { files[f] = [...set]; for (const i of set) byIssue[i] = (byIssue[i] ?? 0) + 1; }
}
fs.writeFileSync("scripts/cleanup/audit.json", JSON.stringify({ scanned, unparsed, byIssue, files }, null, 1));
console.log({ scanned, unparsed: unparsed.length, dirty: Object.keys(files).length, byIssue });
