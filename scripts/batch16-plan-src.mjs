// Batch 16 plan source (Keyword new 25.10 exports: arthritis-friendly kitchen tools).
// Usage: node scripts/batch16-plan-src.mjs  -> writes scripts/batch16-plan.json, skips slugs already in data/guides
import { writeFileSync, existsSync } from "fs";
const P = {
 "vegetable peeler": [
  ["best-vegetable-peelers","best vegetable peeler","Best Vegetable Peelers"],
  ["best-easy-grip-vegetable-peelers","easy grip vegetable peeler","Best Easy-Grip Vegetable Peelers"],
  ["best-vegetable-peelers-for-arthritis","vegetable peeler for arthritis","Best Vegetable Peelers for Arthritis"],
  ["best-vegetable-peelers-for-seniors","easy to use vegetable peeler","Best Vegetable Peelers for Seniors"],
  ["best-y-peelers","y peeler vegetables","Best Y Peelers"],
  ["best-swivel-vegetable-peelers","swivel vegetable peeler","Best Swivel Vegetable Peelers"],
  ["best-julienne-peelers","julienne peeler","Best Julienne Peelers"],
  ["best-finger-grip-vegetable-peelers","finger grip vegetable peeler","Best Finger-Grip Vegetable Peelers"],
  ["best-electric-potato-peelers","electric potato peeler","Best Electric Potato Peelers"],
  ["best-vegetable-peelers-with-replaceable-blades","vegetable peeler with replaceable blades","Best Peelers With Replaceable Blades"],
 ],
 "adaptive cutting board": [
  ["best-adaptive-cutting-boards","best adaptive cutting board","Best Adaptive Cutting Boards"],
  ["best-one-handed-cutting-boards","best one handed cutting board","Best One-Handed Cutting Boards"],
  ["best-adaptive-cutting-boards-with-spikes","adaptive cutting board with spikes","Best Adaptive Cutting Boards With Spikes"],
  ["best-non-slip-cutting-boards","non slip cutting board","Best Non-Slip Cutting Boards"],
  ["best-rocker-knives","rocker knife","Best Rocker Knives"],
 ],
 "can opener": [
  ["best-manual-can-openers","easiest manual can opener","Best Manual Can Openers"],
  ["best-easy-grip-can-openers","easy grip can opener","Best Easy-Grip Can Openers"],
  ["best-can-openers-for-arthritis","can openers for arthritic hands","Best Can Openers for Arthritis"],
  ["best-can-openers-for-seniors","can openers for seniors with arthritis","Best Can Openers for Seniors"],
  ["best-smooth-edge-can-openers","smooth edge can opener","Best Smooth-Edge Can Openers"],
  ["best-can-and-jar-opener-combos","automatic can and jar opener","Best Can and Jar Opener Combos"],
  ["best-can-openers-for-pet-food-cans","automatic can opener cat food","Best Can Openers for Pet Food Cans"],
 ],
 "bottle opener": [
  ["best-twist-cap-bottle-openers","twist cap bottle opener for arthritis","Best Twist-Cap Bottle Openers"],
  ["best-medicine-bottle-openers","medicine bottle opener for arthritis","Best Medicine Bottle Openers"],
 ],
 "easy grip utensils": [
 ],
 "electric knife": [
  ["best-electric-knives","best electric knife","Best Electric Knives"],
  ["best-cordless-electric-knives","best cordless electric knife","Best Cordless Electric Knives"],
  ["best-electric-knives-for-bread","electric knife bread","Best Electric Knives for Bread"],
  ["best-electric-knives-for-meat","best electric knife for cutting meat","Best Electric Knives for Meat"],
  ["best-electric-fillet-knives","electric fillet knife","Best Electric Fillet Knives"],
  ["best-electric-knives-for-seniors","electric knife for arthritis","Best Electric Knives for Seniors"],
  ["best-electric-knife-sets","cuisinart electric knife set","Best Electric Knife Sets"],
  ["best-electric-knife-and-scissor-sharpeners","electric knife and scissor sharpener","Best Knife and Scissor Sharpeners"],
 ],
 "lightweight dinnerware": [
  ["best-lightweight-dinnerware-for-arthritis","best lightweight dinnerware for arthritis","Best Lightweight Dinnerware for Arthritis"],
  ["best-lightweight-plates-and-bowls","lightweight plates and bowls set","Best Lightweight Plates and Bowls"],
  ["best-lightweight-ceramic-dinnerware","lightweight ceramic dinnerware set","Best Lightweight Ceramic Dinnerware"],
  ["best-lightweight-camping-dinnerware","lightweight camping dinnerware","Best Lightweight Camping Dinnerware"],
 ],
};
// Budget ladders: [seed, plural noun for title/slug, tiers]. Existing tiers are skipped automatically.
const TIERS = [
  ["vegetable peeler", "Vegetable Peelers", [10, 15, 20, 25, 30]],
  ["adaptive cutting board", "Adaptive Cutting Boards", [25, 30, 40, 50, 75]],
  ["can opener", "Manual Can Openers", [10, 15, 20, 25, 30]],
  ["can opener", "Electric Can Openers", [20, 25, 30, 40, 50]],
  ["electric knife", "Electric Knife Sharpeners", [30, 50, 75, 100, 150]],
  ["electric knife", "Electric Knife", [30, 40, 50, 75, 100]],
  ["jar opener", "Jar Openers", [15, 20, 25, 30, 40]],
  ["lightweight dinnerware", "Lightweight Dinnerware", [40, 60, 80, 100, 150]],
];
for (const [seed, noun, tiers] of TIERS) for (const t of tiers) {
  const base = noun.toLowerCase().replace(/ /g, "-");
  (P[seed] ||= []).push([`best-${base}-under-${t}`, `best ${noun.toLowerCase()} under ${t}`, `Best ${noun} Under $${t}`, t]);
}
const out = []; let id = 1; const dup = [];
for (const [seed, rows] of Object.entries(P)) for (const [slug, keyword, title, tier] of rows) {
  if (existsSync(new URL(`../data/guides/${slug}.ts`, import.meta.url))) { dup.push(slug); continue; }
  out.push({ id: id++, seed, slug, keyword, title, ...(tier ? { tier } : {}) });
}
writeFileSync(new URL("./batch16-plan.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`plan: ${out.length} (budget ${out.filter((r) => r.tier).length}); skipped existing: ${dup.join(", ") || "none"}`);
// metaTitle = title + " (2026)" must be <= 48 chars (site appends " | <brand>")
const long = out.filter((r) => (r.title + " (2026)").length > 48).map((r) => `${r.title} (${(r.title + " (2026)").length})`);
console.log(`metaTitle over 48 with (2026): ${long.length}${long.length ? " -> " + long.join(" | ") : ""}`);
