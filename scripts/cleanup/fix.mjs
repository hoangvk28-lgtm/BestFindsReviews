// Mechanical, idempotent cleanup of products[] copy in data/guides/*.ts.
// Usage: node scripts/cleanup/fix.mjs [--dry] [file.ts ...]   (no files = every dirty file in audit.json)
import fs from "node:fs";
import { extractProducts, issues, EMOJI } from "./lib.mjs";

const EMOJI_G = new RegExp(EMOJI.source, "gu");
const dry = process.argv.includes("--dry");
let targets = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!targets.length) targets = Object.keys(JSON.parse(fs.readFileSync("scripts/cleanup/audit.json", "utf8")).files);

function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }

function cleanText(s) {
  if (typeof s !== "string") return s;
  let t = s.replace(EMOJI_G, "")
    .replace(/【[^】]*】\s*/g, "").replace(/【[^】]*$/, "").replace(/[【】]/g, "")
    .replace(/\[[A-Z][^\]]{0,40}\]\s*/g, "")
    .replace(/：/g, ": ")
    .replace(/(\d)\s*[–—]\s*(\d)/g, "$1 to $2")
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/([.!?])\s*:\s*/g, "$1 ")
    .replace(/(^|\s):\s+/g, "$1")
    .replace(/\s+,/g, ",").replace(/,\s*,/g, ",").replace(/\s{2,}/g, " ").trim();
  return t.replace(/^[,:;\s]+/, "");
}

function cleanBullet(s) {
  let t = cleanText(s).replace(/^[A-Z][A-Za-z0-9 &'/+-]{2,45}:\s+/, "");
  t = cap(t);
  const truncated = !/[.!?)"%]$/.test(t) && /\b(a|an|the|of|to|for|and|with|per|by|in|or|up|your|\d+)$/i.test(t);
  if (truncated) {
    // keep the text up to the last complete clause if what remains is still meaningful
    const cut = t.lastIndexOf(",");
    t = cut > 30 ? t.slice(0, cut) : "";
  }
  if (t.length > 100) {
    const cut = t.slice(0, 95).lastIndexOf(",");
    t = cut > 40 ? t.slice(0, cut) : "";
  }
  if (/\b(our(?! Place)|we offer|you'll love)\b/i.test(t)) t = "";
  return t.replace(/[,;:\s]+$/, "");
}

function cleanName(s) {
  let t = cleanText(s).replace(/,\s*$/, "");
  if (t.length > 75) t = t.slice(0, 75).replace(/\s+\S*$/, "").replace(/[,(&\s-]+$/, "");
  return t;
}

let changed = 0;
for (const f of targets) {
  const path = f.includes("/") ? f : `data/guides/${f}`;
  const src = fs.readFileSync(path, "utf8");
  const ex = extractProducts(src);
  if (!ex) continue;
  const out = ex.arr.map((p) => {
    const q = { ...p };
    q.name = cleanName(p.name);
    for (const k of ["description", "bestFor"]) if (q[k]) q[k] = cleanText(q[k]);
    for (const k of ["pros", "cons"]) {
      if (!Array.isArray(q[k])) continue;
      const seen = new Set();
      q[k] = q[k].map(cleanBullet).filter((b) => b && b.length >= 12 && !seen.has(b.toLowerCase()) && seen.add(b.toLowerCase()));
    }
    if (Array.isArray(q.specs)) q.specs = q.specs.map(cleanText).filter((c) => c && c.length <= 40 && !/[,:]$/.test(c));
    if (Array.isArray(q.specList)) q.specList = q.specList.map((x) => ({ label: cleanText(x.label), value: cleanText(x.value) })).filter((x) => x.label && x.value && x.value.length <= 40);
    return q;
  });
  const body = "[\n" + out.map((p) => "  " + JSON.stringify(p) + ",").join("\n") + "\n];";
  const next = src.slice(0, ex.open) + body + src.slice(ex.end);
  if (next !== src) {
    changed++;
    if (dry) {
      const before = ex.arr.flatMap(issues), after = out.flatMap(issues);
      console.log(f, "before:", [...new Set(before)].join(","), "| after:", [...new Set(after)].join(","));
    } else fs.writeFileSync(path, next);
  }
}
console.log(dry ? "would change" : "changed", changed, "of", targets.length);
