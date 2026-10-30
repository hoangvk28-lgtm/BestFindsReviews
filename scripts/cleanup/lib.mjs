// Shared helpers for the product-copy cleanup (streaming, one file at a time).
export const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/u;
export const SKELETON = /on the strength of|Buyers who care about|On setup, expect/;
export const FILLER_CON = /^Confirm current specs/;

export function extractProducts(src) {
  const start = src.indexOf("export const products");
  if (start < 0) return null;
  const open = src.indexOf("[", src.indexOf("=", start));
  // products block ends at the first line that is exactly "];"
  const end = src.indexOf("\n];", open);
  if (end < 0) return null;
  const text = src.slice(open, end + 2);
  let arr;
  try { arr = new Function(`return ${text}`)(); } catch { return null; }
  return { open, end: end + 3, arr };
}

export function issues(p) {
  const out = new Set();
  const strs = [p.name, p.description, p.bestFor, ...(p.pros ?? []), ...(p.cons ?? []), ...(p.specs ?? []),
    ...(p.specList ?? []).flatMap((s) => [s.label, s.value])].filter(Boolean);
  for (const s of strs) {
    if (EMOJI.test(s)) out.add("emoji");
    if (/[【】]/.test(s)) out.add("bracket");
    if (/：/.test(s)) out.add("fullwidth-colon");
    if (/^\s*[:：]/.test(s)) out.add("leading-colon");
    if (/[—–]/.test(s)) out.add("dash");
    if (/\b(our(?! Place)|we offer|you'll love)\b/i.test(s) && s !== p.description) out.add("seller-voice");
  }
  if (SKELETON.test(p.description ?? "")) out.add("skeleton-desc");
  for (const s of [...(p.pros ?? []), ...(p.cons ?? [])]) {
    if (s.length > 100) out.add("long-bullet");
    if (!/[.!?)"%]$/.test(s) && /\b(a|an|the|of|to|for|and|with|per|by|in|or|up|your|\d+)$/i.test(s)) out.add("truncated-bullet");
    if (/^[A-Z][A-Za-z &'-]{2,40}:\s/.test(s)) out.add("label-prefix");
  }
  if ((p.cons ?? []).filter((c) => !FILLER_CON.test(c)).length === 0) out.add("filler-cons-only");
  return [...out];
}
