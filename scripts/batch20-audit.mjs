// Depth audit for batch20 content vs WRITER-BRIEF depth bar.
// Usage: node scripts/batch20-audit.mjs [--list] [--queue]   |   node scripts/batch20-audit.mjs <slug>  (prints PASS or the issues)
import { readFileSync, readdirSync, writeFileSync } from "fs";
const D = "scripts/batch20/content/";
const sent = (s) => (s.match(/[.!?](\s|$)/g) || []).length;
const one = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : null;
const rows = [];
for (const f of one ? [one + ".json"] : readdirSync(D)) {
  const o = JSON.parse(readFileSync(D + f, "utf-8")); if (o.skip) { rows.push({ f, skip: o.skip }); continue; }
  const words = JSON.stringify(o).split(/\s+/).length;
  const iss = [];
  if (words < 2900) iss.push(`words ${words}`);
  if (o.products.length < 5) iss.push(`products ${o.products.length}`);
  const badDesc = o.products.filter((p) => p.description.split(/\n\n/).length !== 3 || sent(p.description) < 8).length;
  if (badDesc) iss.push(`thinDesc ${badDesc}`);
  const thinPros = o.products.filter((p) => (p.pros || []).length < 4 || (p.cons || []).length < 2).length;
  if (thinPros) iss.push(`pros/cons ${thinPros}`);
  if ((o.buyingCriteria || []).length < 6 || o.buyingCriteria.some((c) => sent(c.explanation) < 4)) iss.push("criteria");
  if ((o.howWeEvaluated || []).length < 5) iss.push("eval");
  if ((o.howToChoose || []).length < 6) iss.push(`h2c ${(o.howToChoose || []).length}`);
  if ((o.faq || []).length < 6 || o.faq.some((q) => sent(q.a) < 3)) iss.push("faq");
  rows.push({ f, words, iss });
}
if (one) { const r = rows[0]; console.log(r.skip ? "SKIP " + r.skip : r.iss.length ? "FAIL " + r.iss.join(", ") : "PASS"); process.exit(0); }
const bad = rows.filter((r) => r.iss?.length);
console.log(`total ${rows.length}, ok ${rows.length - bad.length - rows.filter((r) => r.skip).length}, weak ${bad.length}, skipped ${rows.filter((r) => r.skip).length}`);
const c = {}; for (const r of bad) for (const i of r.iss) { const k = i.split(" ")[0]; c[k] = (c[k] || 0) + 1; } console.log(c);
if (process.argv.includes("--list")) for (const r of bad) console.log(r.f.replace(".json", ""), "|", r.iss.join(", "));
if (process.argv.includes("--queue")) writeFileSync("scripts/batch20/deepen-queue.txt", bad.map((r) => r.f.replace(".json", "")).join("\n") + "\n");
