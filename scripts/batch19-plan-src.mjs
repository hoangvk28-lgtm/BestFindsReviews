// Batch 19 plan source: budget-only gap fill for batches 14, 17, 18 (seeds with few or no "Under $N" guides).
// Usage: node scripts/batch19-plan-src.mjs  -> writes scripts/batch19-plan.json, skips slugs already in data/guides
import { writeFileSync, existsSync } from "fs";
const PILLAR = { "garden kneeler": "Garden & Yard", "retractable hose reel": "Garden & Yard", "lightweight garden hose": "Garden & Yard", "wireless tv headphones": "Simple Tech", "pill dispenser": "Simple Tech" };
const TIERS = [
  ["grab bar", "Grab Bars", [20, 30, 75]],
  ["non slip shower mat", "Non Slip Shower Mats", [15, 20, 30, 40]],
  ["raised toilet seat", "Raised Toilet Seats", [50, 75, 150]],
  ["toilet seat riser", "Toilet Seat Risers", [40, 60, 100]],
  ["toilet safety rails", "Toilet Safety Rails", [75, 150]],
  ["bedside commode", "Bedside Commodes", [75, 150]],
  ["transfer bench", "Transfer Benches", [200]],
  ["bathtub safety rail", "Bathtub Safety Rails", [50, 100]],
  ["garden kneeler", "Garden Kneelers", [30, 50, 75]],
  ["retractable hose reel", "Retractable Hose Reels", [50, 100, 150]],
  ["lightweight garden hose", "Lightweight Garden Hoses", [25, 40, 60]],
  ["wireless tv headphones", "Wireless TV Headphones", [50, 100]],
  ["pill dispenser", "Pill Dispensers", [25, 50]],
];
const out = []; let id = 1; const dup = [];
for (const [seed, noun, tiers] of TIERS) for (const t of tiers) {
  const slug = `best-${noun.toLowerCase().replace(/ /g, "-")}-under-${t}`;
  if (existsSync(new URL(`../data/guides/${slug}.ts`, import.meta.url))) { dup.push(slug); continue; }
  out.push({ id: id++, seed, pillar: PILLAR[seed] || "", slug, keyword: `best ${noun.toLowerCase()} under ${t}`, title: `Best ${noun} Under $${t}`, tier: t });
}
writeFileSync(new URL("./batch19-plan.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`plan: ${out.length}; skipped existing: ${dup.join(", ") || "none"}`);
const long = out.filter((r) => (r.title + " (2026)").length > 48).map((r) => r.title);
console.log(`metaTitle over 48 with (2026): ${long.length} ${long.join(" | ")}`);
