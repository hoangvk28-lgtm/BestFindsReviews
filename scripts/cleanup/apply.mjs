// Apply rewritten copy. Usage: node scripts/cleanup/apply.mjs <rewrites.json>
// rewrites.json: { "<file.ts>": { "<productId>": { name?, description?, bestFor?, pros?, cons? } } }
import fs from "node:fs";
import { extractProducts, issues } from "./lib.mjs";
const rw = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const bad = /[—–【】：]|\b(we tested|we tried)\b|\$\d|\b\d(\.\d)? stars?\b|\b[\d,]+ reviews\b/i;
for (const [f, byId] of Object.entries(rw)) {
  const path = `data/guides/${f}`;
  const src = fs.readFileSync(path, "utf8");
  const ex = extractProducts(src);
  const seller = /\b(our(?! Place)|we offer|you'll love)\b/i;
  const out = ex.arr.map((p) => {
    const q = { ...p, ...(byId[p.id] ?? {}) };
    if (Array.isArray(q.specs)) q.specs = q.specs.filter((s) => !seller.test(s));
    if (Array.isArray(q.specList)) q.specList = q.specList.filter((s) => !seller.test(s.value));
    return q;
  });
  const errs = [];
  for (const p of out) {
    for (const s of [p.name, p.description, p.bestFor, ...p.pros, ...p.cons]) if (bad.test(s)) errs.push(`${p.id}: banned text: ${s.slice(0, 60)}`);
    if (byId[p.id]?.description) {
      const n = (p.description.match(/[.!?](\s|$)/g) || []).length;
      if (n < 8) errs.push(`${p.id}: description has ${n} sentences, need 8-10`);
      const sents = p.description.split(/(?<=[.!?])\s+/).filter(Boolean);
      const shortS = sents.filter((x) => x.split(/\s+/).length < 7);
      if (shortS.length) errs.push(`${p.id}: filler-short sentences: ${shortS.slice(0, 2).join(" | ")}`);
      const words = p.description.split(/\s+/).length;
      if (words < 170) errs.push(`${p.id}: description only ${words} words, need 170+`);
    }
    const left = issues(p).filter((i) => i !== "seller-voice" || byId[p.id]);
    if (byId[p.id] && left.length) errs.push(`${p.id}: ${left.join(",")}`);
  }
  if (errs.length) { console.log("SKIP", f, errs); continue; }
  const body = "[\n" + out.map((p) => "  " + JSON.stringify(p) + ",").join("\n") + "\n];";
  fs.writeFileSync(path, src.slice(0, ex.open) + body + src.slice(ex.end));
  console.log("OK", f);
}
