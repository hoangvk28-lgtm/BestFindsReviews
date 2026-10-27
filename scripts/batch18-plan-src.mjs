// Batch 18 plan source (keyword best 27.10 exports: bathroom safety, toilet aids, shower heads, transfer benches, commodes).
// Usage: node scripts/batch18-plan-src.mjs  -> writes scripts/batch18-plan.json, skips slugs already in data/guides
import { writeFileSync, existsSync } from "fs";
const PILLAR = {}; // existing bathroom-safety guides use no category hub (categorySlug "")
const P = {
 "grab bar": [
  ["best-grab-bars","best grab bar","Best Grab Bars"],
  ["best-grab-bars-for-seniors","bathroom grab bar for elderly","Best Grab Bars for Seniors"],
  ["best-shower-grab-bars","grab bar for shower wall","Best Shower Grab Bars"],
  ["best-suction-cup-grab-bars","suction cup grab bar for shower","Best Suction Cup Grab Bars"],
  ["best-folding-grab-bars","folding grab bar for toilet","Best Folding Grab Bars"],
  ["best-stainless-steel-grab-bars","stainless steel grab bar","Best Stainless Steel Grab Bars"],
  ["best-knurled-grab-bars","knurled chrome grab bar","Best Knurled Grab Bars"],
  ["best-chrome-grab-bars","chrome grab bar for shower","Best Chrome Grab Bars"],
  ["best-black-grab-bars","matte black grab bar","Best Black Grab Bars"],
  ["best-grab-bars-with-toilet-paper-holders","grab bar with toilet paper holder","Best Grab Bars With Paper Holders"],
  ["best-grab-bars-with-towel-racks","grab bar with towel rack","Best Grab Bars With Towel Racks"],
  ["best-grab-bars-with-shelves","grab bar with shelf","Best Grab Bars With Shelves"],
  ["best-bed-grab-bars","bed grab bar for elderly","Best Bed Grab Bars"],
  ["best-toilet-grab-bars","grab bar for toilet","Best Toilet Grab Bars"],
  ["best-angled-grab-bars","angled grab bar","Best Angled Grab Bars"],
  ["best-24-inch-grab-bars","24 inch grab bar","Best 24 Inch Grab Bars"],
  ["best-12-inch-grab-bars","12 inch grab bar","Best 12 Inch Grab Bars"],
  ["best-moen-grab-bars","moen grab bar","Best Moen Grab Bars"],
 ],
 "bathtub safety rail": [
  ["best-bathtub-safety-rails","best bathtub safety rail","Best Bathtub Safety Rails"],
  ["best-bathtub-safety-rails-for-seniors","bathtub safety rails for seniors","Best Bathtub Safety Rails for Seniors"],
  ["best-adjustable-bathtub-safety-rails","adjustable height bathtub safety rail","Best Adjustable Tub Safety Rails"],
 ],
 "handheld shower head": [
  ["best-handheld-shower-heads","best handheld shower head","Best Handheld Shower Heads"],
  ["best-handheld-shower-heads-for-seniors","handheld shower head for elderly","Best Handheld Shower Heads for Seniors"],
  ["best-high-pressure-handheld-shower-heads","high pressure handheld shower head","Best High Pressure Handheld Showers"],
  ["best-filtered-handheld-shower-heads","filtered handheld shower head","Best Filtered Handheld Shower Heads"],
  ["best-handheld-shower-heads-for-low-water-pressure","handheld shower head for low water pressure","Best Handheld Showers for Low Pressure"],
  ["best-handheld-shower-heads-with-extra-long-hoses","handheld shower head extra long hose","Best Handheld Showers With Long Hoses"],
  ["best-handheld-shower-heads-with-on-off-switches","handheld shower head with on off switch","Best Handheld Showers With Pause Switch"],
  ["best-handheld-shower-heads-with-slide-bars","handheld shower head with slide bar","Best Handheld Showers With Slide Bars"],
  ["best-rain-and-handheld-shower-head-combos","rain shower head and handheld combo","Best Rain and Handheld Shower Combos"],
  ["best-all-metal-handheld-shower-heads","all metal handheld shower head","Best All Metal Handheld Shower Heads"],
  ["best-matte-black-handheld-shower-heads","matte black handheld shower head","Best Black Handheld Shower Heads"],
  ["best-brushed-nickel-handheld-shower-heads","brushed nickel handheld shower head","Best Brushed Nickel Handheld Showers"],
  ["best-handheld-shower-heads-for-bathtubs","handheld shower head for bathtub","Best Handheld Shower Heads for Tubs"],
  ["best-handheld-shower-heads-for-hard-water","handheld shower head filter for hard water","Best Handheld Showers for Hard Water"],
  ["best-handheld-shower-heads-with-jet-spray","handheld shower head with jet spray","Best Handheld Showers With Jet Spray"],
  ["best-handheld-shower-head-holders","adjustable handheld shower head holder","Best Handheld Shower Head Holders"],
  ["best-handheld-shower-heads-for-rv","rv handheld shower head","Best Handheld Shower Heads for RVs"],
  ["best-moen-handheld-shower-heads","moen handheld shower head","Best Moen Handheld Shower Heads"],
  ["best-delta-handheld-shower-heads","delta handheld shower head","Best Delta Handheld Shower Heads"],
 ],
 "non slip shower mat": [
  ["best-non-slip-shower-mats","best non slip shower mat","Best Non Slip Shower Mats"],
  ["best-non-slip-shower-mats-for-seniors","non slip shower mat for elderly","Best Non Slip Shower Mats for Seniors"],
  ["best-non-slip-shower-mats-without-suction-cups","non slip shower mat without suction cups","Best Shower Mats Without Suction Cups"],
  ["best-non-slip-shower-mats-for-textured-floors","non slip shower mat for textured surface","Best Shower Mats for Textured Floors"],
  ["best-extra-long-non-slip-bath-mats","extra long non slip bath mat","Best Extra Long Non Slip Bath Mats"],
  ["best-large-non-slip-shower-mats","extra large non slip shower mat","Best Large Non Slip Shower Mats"],
  ["best-machine-washable-shower-mats","machine washable non slip shower mat","Best Machine Washable Shower Mats"],
  ["best-shower-mats-with-drain-holes","non slip shower mat with drain hole","Best Shower Mats With Drain Holes"],
  ["best-mildew-resistant-bath-mats","non slip bath mat mildew resistant","Best Mildew Resistant Bath Mats"],
  ["best-rubber-shower-mats","rubber non slip shower mat","Best Rubber Shower Mats"],
  ["best-square-shower-mats","square non slip shower mat","Best Square Shower Mats"],
  ["best-padded-shower-mats","padded non slip shower mat","Best Padded Shower Mats"],
  ["best-non-slip-bathtub-mats","non slip bathtub mat","Best Non Slip Bathtub Mats"],
 ],
 "raised toilet seat": [
  ["best-raised-toilet-seats","best raised toilet seat","Best Raised Toilet Seats"],
  ["best-raised-toilet-seats-for-seniors","raised toilet seat for elderly","Best Raised Toilet Seats for Seniors"],
  ["best-raised-toilet-seats-with-handles","raised toilet seat with handles","Best Raised Toilet Seats With Handles"],
  ["best-raised-toilet-seats-after-hip-replacement","raised toilet seat for hip replacement","Best Toilet Seats After Hip Surgery"],
  ["best-raised-toilet-seats-after-knee-replacement","raised toilet seat for knee replacement","Best Toilet Seats After Knee Surgery"],
  ["best-locking-raised-toilet-seats","locking raised toilet seat","Best Locking Raised Toilet Seats"],
  ["best-elongated-raised-toilet-seats","elongated raised toilet seat","Best Elongated Raised Toilet Seats"],
  ["best-bariatric-raised-toilet-seats","bariatric raised toilet seat","Best Bariatric Raised Toilet Seats"],
  ["best-raised-toilet-seats-with-lids","raised toilet seat with lid","Best Raised Toilet Seats With Lids"],
  ["best-padded-raised-toilet-seats","padded raised toilet seat","Best Padded Raised Toilet Seats"],
  ["best-hinged-raised-toilet-seats","hinged raised toilet seat","Best Hinged Raised Toilet Seats"],
  ["best-portable-raised-toilet-seats","portable raised toilet seat for travel","Best Portable Raised Toilet Seats"],
  ["best-adjustable-raised-toilet-seats","adjustable height raised toilet seat","Best Adjustable Raised Toilet Seats"],
 ],
 "toilet seat riser": [
  ["best-toilet-seat-risers","best toilet seat riser","Best Toilet Seat Risers"],
  ["best-toilet-seat-risers-with-handles","toilet seat riser with handles","Best Toilet Seat Risers With Handles"],
  ["best-toilet-seat-risers-for-seniors","toilet seat riser for seniors","Best Toilet Seat Risers for Seniors"],
  ["best-bariatric-toilet-seat-risers","bariatric toilet seat riser","Best Bariatric Toilet Seat Risers"],
  ["best-toilet-seat-risers-without-arms","toilet seat riser no arms","Best Toilet Seat Risers Without Arms"],
  ["best-2-inch-toilet-seat-risers","2 inch toilet seat riser","Best 2 Inch Toilet Seat Risers"],
  ["best-4-inch-toilet-seat-risers","4 inch toilet seat riser","Best 4 Inch Toilet Seat Risers"],
  ["best-5-inch-toilet-seat-risers","5 inch toilet seat riser","Best 5 Inch Toilet Seat Risers"],
  ["best-round-toilet-seat-risers","round toilet seat riser","Best Round Toilet Seat Risers"],
  ["best-bolt-down-toilet-seat-risers","toilet seat riser bolt on","Best Bolt-Down Toilet Seat Risers"],
 ],
 "toilet safety rails": [
  ["best-toilet-safety-rails","best toilet safety rails","Best Toilet Safety Rails"],
  ["best-toilet-safety-rails-for-seniors","toilet safety rails for elderly","Best Toilet Safety Rails for Seniors"],
  ["best-adjustable-toilet-safety-rails","adjustable toilet safety rails","Best Adjustable Toilet Safety Rails"],
  ["best-free-standing-toilet-safety-frames","free standing toilet safety frame","Best Free Standing Toilet Frames"],
  ["best-heavy-duty-toilet-safety-rails","heavy duty toilet safety rails","Best Heavy Duty Toilet Safety Rails"],
  ["best-folding-toilet-safety-rails","folding toilet safety rails","Best Folding Toilet Safety Rails"],
  ["best-toilet-safety-rails-with-padded-arms","toilet safety rails padded arms","Best Padded Toilet Safety Rails"],
  ["best-bolt-on-toilet-safety-rails","toilet safety rails mount to toilet bolts","Best Bolt-On Toilet Safety Rails"],
 ],
 "transfer bench": [
  ["best-transfer-benches","best tub transfer bench","Best Tub Transfer Benches"],
  ["best-sliding-transfer-benches","sliding transfer bench for bathtub","Best Sliding Transfer Benches"],
  ["best-transfer-benches-for-seniors","bathtub transfer bench for seniors","Best Transfer Benches for Seniors"],
  ["best-bariatric-transfer-benches","bariatric tub transfer bench","Best Bariatric Transfer Benches"],
  ["best-padded-transfer-benches","padded transfer bench","Best Padded Transfer Benches"],
  ["best-folding-transfer-benches","folding tub transfer bench","Best Folding Transfer Benches"],
  ["best-swivel-transfer-benches","swivel sliding transfer bench","Best Swivel Transfer Benches"],
  ["best-transfer-benches-with-commode-openings","transfer bench with cut out","Best Transfer Benches With Cutouts"],
  ["best-adjustable-transfer-benches","adjustable transfer bench","Best Adjustable Transfer Benches"],
  ["best-heavy-duty-transfer-benches","heavy duty transfer bench","Best Heavy Duty Transfer Benches"],
 ],
 "bedside commode": [
  ["best-bedside-commodes","best bedside commode","Best Bedside Commodes"],
  ["best-bedside-commodes-for-seniors","best bedside commode for elderly","Best Bedside Commodes for Seniors"],
  ["best-3-in-1-bedside-commodes","best 3 in 1 bedside commode","Best 3 in 1 Bedside Commodes"],
  ["best-drop-arm-bedside-commodes","best drop arm bedside commode","Best Drop Arm Bedside Commodes"],
  ["best-bariatric-bedside-commodes","best bariatric bedside commode","Best Bariatric Bedside Commodes"],
  ["best-folding-bedside-commodes","best folding bedside commode","Best Folding Bedside Commodes"],
  ["best-padded-bedside-commodes","bedside commode with padded seat","Best Padded Bedside Commodes"],
  ["best-bedside-commode-liners","best bedside commode liners","Best Bedside Commode Liners"],
 ],
 "bath lift": [
  ["best-bath-lifts","best bath lift","Best Bath Lifts"],
  ["best-bath-lifts-for-seniors","best bath lift for elderly","Best Bath Lifts for Seniors"],
  ["best-electric-bath-lift-chairs","best electric bath lift chair","Best Electric Bath Lift Chairs"],
 ],
};
const TIERS = [
  ["grab bar", "Grab Bars", [20, 30, 50]],
  ["handheld shower head", "Handheld Shower Heads", [25, 50, 100]],
  ["non slip shower mat", "Non Slip Shower Mats", [15, 25]],
  ["raised toilet seat", "Raised Toilet Seats", [50, 100]],
  ["toilet safety rails", "Toilet Safety Rails", [50, 100]],
  ["transfer bench", "Transfer Benches", [100, 150]],
  ["bedside commode", "Bedside Commodes", [75, 100]],
];
for (const [seed, noun, tiers] of TIERS) for (const t of tiers) {
  const base = noun.toLowerCase().replace(/ /g, "-");
  (P[seed] ||= []).push([`best-${base}-under-${t}`, `best ${noun.toLowerCase()} under ${t}`, `Best ${noun} Under $${t}`, t]);
}
const out = []; let id = 1; const dup = [];
for (const [seed, rows] of Object.entries(P)) for (const [slug, keyword, title, tier] of rows) {
  if (existsSync(new URL(`../data/guides/${slug}.ts`, import.meta.url))) { dup.push(slug); continue; }
  out.push({ id: id++, seed, pillar: PILLAR[seed] || "", slug, keyword, title, ...(tier ? { tier } : {}) });
}
writeFileSync(new URL("./batch18-plan.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`plan: ${out.length} (budget ${out.filter((r) => r.tier).length}); skipped existing: ${dup.join(", ") || "none"}`);
const long = out.filter((r) => (r.title + " (2026)").length > 48).map((r) => `${r.title} (${(r.title + " (2026)").length})`);
console.log(`metaTitle over 48 with (2026): ${long.length}${long.length ? " -> " + long.join(" | ") : ""}`);
