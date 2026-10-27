// Batch 17 plan source ("new kw ver 2 25.10" exports: mobility and daily-living aids).
// Usage: node scripts/batch20-plan-src.mjs  -> writes scripts/batch20-plan.json, skips slugs already in data/guides
// Safety-sensitive seeds (bed rail, transfer board, quad cane, rollator) get a conservative angle in batch9-fetch.mjs.
import { writeFileSync, existsSync } from "fs";
const P = {
 "rollator walker": [
  ["best-rollator-walkers","best rollator walker","Best Rollator Walkers"],
  ["best-rollator-walkers-with-seats","best rollator walker with seat","Best Rollator Walkers With Seats"],
  ["best-lightweight-rollator-walkers","lightweight folding rollator walker with seat","Best Lightweight Rollator Walkers"],
  ["best-upright-rollator-walkers","upright rollator walker","Best Upright Rollator Walkers"],
  ["best-all-terrain-rollator-walkers","all terrain rollator walker","Best All-Terrain Rollator Walkers"],
  ["best-bariatric-rollator-walkers","bariatric rollator walker with seat","Best Bariatric Rollator Walkers"],
  ["best-rollator-walkers-for-tall-people","best rollator walker for tall person","Best Rollators for Tall People"],
  ["best-rollator-transport-chair-combos","rollator walker and wheelchair in one","Best Rollator Transport Chair Combos"],
  ["best-three-wheel-rollator-walkers","3 wheel rollator walker","Best Three-Wheel Rollator Walkers"],
  ["best-rollator-walkers-for-seniors","rollator walker for seniors","Best Rollator Walkers for Seniors"],
 ],
 "walker accessories": [
  ["best-walker-bags","best walker bag","Best Walker Bags"],
  ["best-rollator-walker-bags","rollator walker bag attachment","Best Rollator Walker Bags"],
  ["best-walker-trays","best walker tray","Best Walker Trays"],
  ["best-walker-tray-tables","walker tray table","Best Walker Tray Tables"],
  ["best-walker-cup-holders","walker cup holder","Best Walker Cup Holders"],
  ["best-walker-baskets","walker basket","Best Walker Baskets"],
 ],
 "walking cane": [
  ["best-walking-canes","best walking cane","Best Walking Canes"],
  ["best-walking-canes-for-balance","best walking cane for balance","Best Walking Canes for Balance"],
  ["best-walking-canes-for-women","walking canes for women","Best Walking Canes for Women"],
  ["best-walking-canes-for-men","walking canes for men","Best Walking Canes for Men"],
  ["best-walking-canes-for-seniors","best walking cane for seniors","Best Walking Canes for Seniors"],
  ["best-self-standing-walking-canes","self standing walking cane","Best Self-Standing Walking Canes"],
  ["best-wooden-walking-canes","wooden walking cane","Best Wooden Walking Canes"],
  ["best-carbon-fiber-walking-canes","carbon fiber walking cane","Best Carbon Fiber Walking Canes"],
  ["best-walking-canes-with-seats","best walking cane with seat","Best Walking Canes With Seats"],
  ["best-offset-handle-walking-canes","offset handle cane","Best Offset-Handle Walking Canes"],
  ["best-cane-tips","walking cane bottoms","Best Cane Tips"],
 ],
 "quad cane": [
  ["best-quad-canes","best quad cane","Best Quad Canes"],
  ["best-small-base-quad-canes","quad cane small base","Best Small-Base Quad Canes"],
  ["best-large-base-quad-canes","wide base quad cane","Best Large-Base Quad Canes"],
  ["best-bariatric-quad-canes","bariatric quad cane","Best Bariatric Quad Canes"],
  ["best-quad-canes-for-seniors","best quad cane for seniors","Best Quad Canes for Seniors"],
 ],
 "bed assist rail": [
  ["best-bed-assist-rails","best bed assist rail","Best Bed Assist Rails"],
  ["best-bed-rails-for-seniors","bed rails for seniors","Best Bed Rails for Seniors"],
  ["best-adjustable-bed-assist-rails","adjustable bed assist rail","Best Adjustable Bed Assist Rails"],
  ["best-bed-assist-rails-with-lights","bed assist rail with light","Best Bed Assist Rails With Lights"],
  ["best-bed-canes","bed cane assist rail","Best Bed Canes"],
  ["best-bed-assist-rails-for-adjustable-beds","bed assist rail for adjustable bed","Best Assist Rails for Adjustable Beds"],
  ["best-bed-rails-for-king-and-queen-beds","bed rails for queen size bed","Best Bed Rails for Queen and King Beds"],
 ],
 "couch assist handle": [
  ["best-couch-assist-handles","couch assist handle","Best Couch Assist Handles"],
  ["best-chair-standing-aids","chair lift assist","Best Chair Standing Aids"],
 ],
 "seat lift cushion": [
  ["best-seat-lift-cushions","seat lift cushion","Best Seat Lift Cushions"],
  ["best-electric-seat-lift-cushions","electric seat lift cushion","Best Electric Seat Lift Cushions"],
  ["best-seat-riser-cushions","seat riser cushion for elderly","Best Seat Riser Cushions"],
  ["best-car-seat-lift-cushions","car seat lift cushion","Best Car Seat Lift Cushions"],
 ],
 "transfer board": [
  ["best-transfer-boards","transfer board","Best Transfer Boards"],
  ["best-sliding-transfer-boards","sliding transfer board","Best Sliding Transfer Boards"],
  ["best-transfer-boards-for-car","transfer board for wheelchair to car","Best Transfer Boards for Cars"],
  ["best-bariatric-transfer-boards","bariatric transfer board","Best Bariatric Transfer Boards"],
  ["best-bath-transfer-boards","bath transfer board","Best Bath Transfer Boards"],
 ],
 "dressing aid": [
  ["best-dressing-sticks","best dressing stick","Best Dressing Sticks"],
  ["best-button-hooks","best button hook","Best Button Hooks"],
  ["best-button-hooks-for-arthritis","best button hook for arthritic hands","Best Button Hooks for Arthritis"],
  ["best-long-handled-shoe-horns","best long handle shoe horn","Best Long-Handled Shoe Horns"],
  ["best-extra-long-shoe-horns-for-seniors","extra long handled shoe horn for seniors","Best Extra-Long Shoe Horns for Seniors"],
  ["best-dressing-aid-kits","dressing stick and sock aid","Best Dressing Aid Kits"],
  ["best-zipper-pulls-for-arthritis","button hook and zipper pull","Best Zipper Pulls for Arthritis"],
 ],
 "adaptive dining": [
  ["best-divided-plates-for-adults","divided plates for adults","Best Divided Plates for Adults"],
  ["best-divided-plates-with-lids","divided plates with lids for adults","Best Divided Plates With Lids"],
  ["best-ceramic-divided-plates","ceramic divided plate","Best Ceramic Divided Plates"],
  ["best-stainless-steel-divided-plates","stainless steel divided plate","Best Stainless Steel Divided Plates"],
  ["best-plate-guards","adaptive plate guard","Best Plate Guards"],
  ["best-scoop-plates","scoop plate","Best Scoop Plates"],
  ["best-suction-plates-for-adults","suction plate for adults","Best Suction Plates for Adults"],
  ["best-two-handled-cups-for-adults","two handled cup for adults","Best Two-Handled Cups for Adults"],
  ["best-two-handled-mugs","two handle coffee mug","Best Two-Handled Mugs"],
  ["best-easy-grip-mugs","easy grip mugs for arthritis","Best Easy-Grip Mugs"],
  ["best-easy-grip-cups-for-seniors","easy grip cups for seniors","Best Easy-Grip Cups for Seniors"],
  ["best-unbreakable-plates-and-bowls","unbreakable plates and bowls set","Best Unbreakable Plates and Bowls"],
  ["best-melamine-dinnerware","melamine dinnerware","Best Melamine Dinnerware"],
 ],
 "lightweight kettle": [
  ["best-lightweight-kettles","best lightweight kettle","Best Lightweight Kettles"],
  ["best-lightweight-kettles-for-elderly","best lightweight kettle for elderly","Best Lightweight Kettles for Seniors"],
  ["best-lightweight-camping-kettles","lightweight kettle camping","Best Lightweight Camping Kettles"],
 ],
 "hot water dispenser": [
  ["best-instant-hot-water-dispensers","instant hot water dispenser","Best Instant Hot Water Dispensers"],
  ["best-hot-and-cold-water-dispensers","cold and hot water dispenser","Best Hot and Cold Water Dispensers"],
 ],
};
// Budget ladders: [seed, plural noun for title/slug, tiers]. Existing slugs are skipped automatically.
const TIERS = [
  ["rollator walker", "Rollator Walkers", [75, 100, 150, 200, 300]],
  ["walker accessories", "Walker Bags", [15, 20, 25, 30]],
  ["walker accessories", "Walker Trays", [25, 30, 40, 50]],
  ["walking cane", "Walking Canes", [20, 25, 30, 40, 50]],
  ["quad cane", "Quad Canes", [25, 30, 40, 50]],
  ["bed assist rail", "Bed Assist Rails", [40, 50, 75, 100, 150]],
  ["seat lift cushion", "Seat Lift Cushions", [30, 50, 75, 100, 200]],
  ["transfer board", "Transfer Boards", [30, 50, 75, 100]],
  ["dressing aid", "Long Shoe Horns", [10, 15, 20, 25]],
  ["adaptive dining", "Divided Plates", [15, 20, 25, 30]],
  ["lightweight kettle", "Lightweight Kettles", [25, 30, 40, 50]],
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
writeFileSync(new URL("./batch20-plan.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`plan: ${out.length} (budget ${out.filter((r) => r.tier).length}); skipped existing: ${dup.join(", ") || "none"}`);
const long = out.filter((r) => (r.title + " (2026)").length > 48).map((r) => `${r.title} (${(r.title + " (2026)").length})`);
console.log(`metaTitle over 48 with (2026): ${long.length}${long.length ? " -> " + long.join(" | ") : ""}`);
