// Batch 22 plan source ("kw 29.10" exports: kitchen, garden, reading and daily-living aids).
// Usage: node scripts/batch22-plan-src.mjs  -> writes scripts/batch22-plan.json, skips slugs already in data/guides
// Off-intent keywords dropped (book covers, guitar keys, shopping cart apps, baby cart covers, smoke carts, faucet valves).
import { writeFileSync, existsSync } from "fs";
const P = {
 "kitchen scissors": [
  ["best-kitchen-scissors","best kitchen scissors","Best Kitchen Scissors"],
  ["best-kitchen-scissors-for-cutting-meat","kitchen scissors for cutting meat","Best Kitchen Scissors for Meat"],
  ["best-poultry-shears","poultry shears for cutting chicken bones","Best Poultry Shears"],
  ["best-take-apart-kitchen-scissors","kitchen scissors that come apart","Best Take-Apart Kitchen Scissors"],
  ["best-heavy-duty-kitchen-shears","heavy duty kitchen shears","Best Heavy-Duty Kitchen Shears"],
  ["best-kitchen-scissors-for-arthritic-hands","kitchen scissors for arthritic hands","Best Kitchen Scissors for Arthritis"],
  ["best-dishwasher-safe-kitchen-scissors","dishwasher safe kitchen scissors","Best Dishwasher-Safe Kitchen Scissors"],
  ["best-herb-scissors","herb scissors multi blade","Best Herb Scissors"],
 ],
 "adaptive scissors": [
  ["best-adaptive-scissors","best adaptive scissors","Best Adaptive Scissors"],
  ["best-adaptive-scissors-for-adults","adaptive scissors for adults","Best Adaptive Scissors for Adults"],
  ["best-loop-scissors","loop scissors self opening","Best Loop Scissors"],
  ["best-table-top-scissors","table top scissors with base","Best Table-Top Scissors"],
  ["best-spring-loaded-scissors","best spring loaded scissors","Best Spring-Loaded Scissors"],
  ["best-spring-loaded-scissors-for-arthritis","spring loaded scissors for arthritis","Best Spring Scissors for Arthritis"],
  ["best-spring-loaded-fabric-scissors","spring loaded fabric scissors","Best Spring-Loaded Fabric Scissors"],
  ["best-rag-quilting-scissors","spring loaded scissors for rag quilting","Best Rag Quilting Scissors"],
 ],
 "book holder": [
  ["best-book-holders","best book holders","Best Book Holders"],
  ["best-book-holders-for-reading-in-bed","book holder for reading in bed","Best Book Holders for Reading in Bed"],
  ["best-hands-free-book-holders","hands free book holder","Best Hands-Free Book Holders"],
  ["best-lap-book-holders","lap book holder pillow","Best Lap Book Holders"],
  ["best-book-page-holders","book page holder thumb","Best Book Page Holders"],
  ["best-book-holders-for-elderly","book holder for elderly","Best Book Holders for Seniors"],
  ["best-book-stands","best book stands","Best Book Stands"],
  ["best-book-stands-for-desks","book stand for desk","Best Book Stands for Desks"],
  ["best-book-stands-for-textbooks","book stand for heavy textbooks law school","Best Book Stands for Textbooks"],
  ["best-cookbook-stands","cookbook stand","Best Cookbook Stands"],
  ["best-adjustable-book-stands","adjustable book stand","Best Adjustable Book Stands"],
  ["best-book-display-stands","book display stand","Best Book Display Stands"],
  ["best-comic-book-stands","comic book display stand","Best Comic Book Stands"],
 ],
 "door knob grip": [
  ["best-door-knob-grips","door knob grips","Best Door Knob Grips"],
  ["best-door-knob-grips-for-arthritis","door knob grips for arthritis","Best Door Knob Grips for Arthritis"],
  ["best-lever-door-handle-converters","door knob to lever converter","Best Door Knob Lever Converters"],
  ["best-door-knobs-for-elderly","lever door handles for elderly","Best Door Handles for Seniors"],
  ["best-door-knob-safety-covers","door knob safety covers","Best Door Knob Safety Covers"],
 ],
 "key turner": [
  ["best-key-turners","key turner aid","Best Key Turners"],
  ["best-key-turners-for-arthritis","key holder turner for arthritis","Best Key Turners for Arthritis"],
 ],
 "faucet handle adapter": [
  ["best-faucet-handle-adapters","faucet handle adapter lever","Best Faucet Handle Adapters"],
  ["best-faucet-turners-for-arthritis","faucet tap turner arthritis","Best Faucet Turners for Arthritis"],
 ],
 "kettle tipper": [
  ["best-kettle-tippers","kettle tipper","Best Kettle Tippers"],
  ["best-tipping-kettles","kettle tipper electric kettle elderly","Best Tipping Kettles"],
  ["best-tipping-kettles-for-elderly","tipping kettle for elderly","Best Tipping Kettles for Seniors"],
  ["best-small-electric-tea-kettles","small electric tea kettle","Best Small Electric Tea Kettles"],
 ],
 "dustpan and brush": [
  ["best-dustpan-and-brush-sets","dustpan and brush set","Best Dustpan and Brush Sets"],
  ["best-dustpan-and-broom-sets","dustpan and broom set","Best Dustpan and Broom Sets"],
  ["best-long-handled-dustpan-and-brush-sets","long handled dustpan and brush set","Best Long-Handled Dustpan Sets"],
  ["best-mini-dustpan-and-brush-sets","mini dustpan and brush set","Best Mini Dustpan and Brush Sets"],
 ],
 "food storage container": [
  ["best-food-storage-containers","best food storage containers","Best Food Storage Containers"],
  ["best-glass-food-storage-containers","glass food storage containers","Best Glass Food Storage Containers"],
  ["best-airtight-food-storage-containers","airtight food storage containers","Best Airtight Food Containers"],
  ["best-pantry-storage-containers","airtight pantry storage containers dry goods","Best Pantry Storage Containers"],
  ["best-meal-prep-containers","meal prep containers","Best Meal Prep Containers"],
  ["best-freezer-food-storage-containers","freezer food storage containers","Best Freezer Storage Containers"],
  ["best-food-containers-for-leftovers","food storage containers for leftovers","Best Containers for Leftovers"],
  ["best-stainless-steel-food-containers","stainless steel food storage containers","Best Stainless Steel Food Containers"],
  ["best-cereal-storage-containers","cereal storage containers","Best Cereal Storage Containers"],
  ["best-easy-open-food-containers","easy open food storage containers arthritis","Best Easy-Open Food Containers"],
  ["best-plastic-free-food-storage-containers","non toxic plastic free food storage containers","Best Plastic-Free Food Containers"],
 ],
 "salad spinner": [
  ["best-salad-spinners","best salad spinners","Best Salad Spinners"],
  ["best-large-salad-spinners","large salad spinner","Best Large Salad Spinners"],
  ["best-stainless-steel-salad-spinners","stainless steel salad spinner","Best Stainless Steel Salad Spinners"],
  ["best-small-salad-spinners","small salad spinner herbs","Best Small Salad Spinners"],
  ["best-electric-salad-spinners","electric salad spinner","Best Electric Salad Spinners"],
  ["best-salad-spinners-for-arthritis","one handed pump salad spinner","Best Salad Spinners for Arthritis"],
 ],
 "garden hose connector": [
  ["best-garden-hose-connectors","garden hose connectors","Best Garden Hose Connectors"],
  ["best-garden-hose-quick-connectors","garden hose quick connect","Best Garden Hose Quick Connectors"],
  ["best-brass-garden-hose-connectors","brass garden hose quick connector","Best Brass Hose Connectors"],
  ["best-garden-hose-y-connectors","garden hose y splitter","Best Garden Hose Y Connectors"],
  ["best-garden-hose-repair-kits","garden hose repair kit mender","Best Garden Hose Repair Kits"],
  ["best-garden-hose-swivel-connectors","garden hose swivel connector","Best Garden Hose Swivel Connectors"],
 ],
 "lopper": [
  ["best-loppers","best loppers","Best Loppers"],
  ["best-bypass-loppers","bypass loppers","Best Bypass Loppers"],
  ["best-anvil-loppers","anvil loppers","Best Anvil Loppers"],
  ["best-loppers-for-thick-branches","loppers for thick branches","Best Loppers for Thick Branches"],
  ["best-telescopic-loppers","extendable telescopic loppers","Best Telescopic Loppers"],
  ["best-compound-action-loppers","compound action loppers","Best Compound-Action Loppers"],
  ["best-loppers-for-arthritic-hands","lightweight loppers for arthritic hands","Best Loppers for Arthritis"],
  ["best-cordless-loppers","cordless battery loppers","Best Cordless Loppers"],
 ],
 "plant caddy": [
  ["best-plant-caddies","plant caddy with wheels","Best Plant Caddies"],
  ["best-heavy-duty-plant-caddies","heavy duty plant caddy locking wheels","Best Heavy-Duty Plant Caddies"],
 ],
 "shopping cart": [
  ["best-shopping-carts","folding shopping cart with wheels","Best Shopping Carts"],
  ["best-shopping-carts-for-seniors","shopping cart for seniors","Best Shopping Carts for Seniors"],
  ["best-stair-climbing-shopping-carts","stair climbing shopping cart","Best Stair-Climbing Shopping Carts"],
  ["best-collapsible-shopping-carts","collapsible shopping cart","Best Collapsible Shopping Carts"],
  ["best-heavy-duty-shopping-carts","heavy duty folding shopping cart","Best Heavy-Duty Shopping Carts"],
  ["best-shopping-trolley-bags","shopping trolley bag with wheels","Best Shopping Trolley Bags"],
 ],
 "wireless tv speaker": [
  ["best-wireless-tv-speakers","wireless tv speakers","Best Wireless TV Speakers"],
  ["best-wireless-tv-speakers-for-seniors","wireless tv speaker for seniors","Best Wireless TV Speakers for Seniors"],
  ["best-wireless-tv-speakers-for-hearing-impaired","tv speaker for hearing impaired","Best TV Speakers for Hearing Loss"],
  ["best-wireless-tv-speakers-for-bedroom","wireless speakers for bedroom tv","Best Wireless TV Speakers for Bedrooms"],
  ["best-wireless-surround-sound-speakers","wireless surround sound speakers for tv","Best Wireless Surround Speakers"],
 ],
};
// Budget ladders from pool price spread (p25..p75 per seed). Appended after ids 1-90 so existing briefs keep their ids.
const TIERS = [
  ["kitchen scissors", "Kitchen Scissors", [10, 15, 20, 30]],
  ["kitchen scissors", "Poultry Shears", [15, 20, 30]],
  ["adaptive scissors", "Adaptive Scissors", [15, 20, 30]],
  ["adaptive scissors", "Spring-Loaded Scissors", [10, 15, 20]],
  ["book holder", "Book Holders", [15, 20, 30, 50]],
  ["book holder", "Book Stands", [20, 30, 50]],
  ["door knob grip", "Door Knob Grips", [10, 15, 20]],
  ["faucet handle adapter", "Faucet Handle Adapters", [15, 20]],
  ["key turner", "Key Turners", [15]],
  ["kettle tipper", "Kettle Tippers", [20, 30]],
  ["dustpan and brush", "Dustpan and Brush Sets", [15, 20, 30]],
  ["food storage container", "Food Storage Containers", [20, 30, 40, 50]],
  ["food storage container", "Glass Food Containers", [30, 50]],
  ["salad spinner", "Salad Spinners", [25, 30, 40, 50]],
  ["garden hose connector", "Garden Hose Connectors", [10, 15, 20]],
  ["lopper", "Loppers", [30, 40, 50, 75, 100]],
  ["plant caddy", "Plant Caddies", [25, 30, 40]],
  ["shopping cart", "Shopping Carts", [40, 50, 75, 100, 150]],
];
const B = {};
for (const [seed, noun, tiers] of TIERS) for (const t of tiers) {
  const base = noun.toLowerCase().replace(/ /g, "-");
  (B[seed] ||= []).push([`best-${base}-under-${t}`, `best ${noun.toLowerCase()} under ${t}`, `Best ${noun} Under $${t}`, t]);
}
const out = []; let id = 1; const dup = [];
for (const [seed, rows] of [...Object.entries(P), ...Object.entries(B)]) for (const [slug, keyword, title, tier] of rows) {
  if (existsSync(new URL(`../data/guides/${slug}.ts`, import.meta.url))) { dup.push(slug); continue; }
  out.push({ id: id++, seed, slug, keyword, title, ...(tier ? { tier } : {}) });
}
writeFileSync(new URL("./batch22-plan.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`plan: ${out.length}; skipped existing: ${dup.join(", ") || "none"}`);
const long = out.filter((r) => (r.title + " (2026)").length > 48).map((r) => `${r.title} (${(r.title + " (2026)").length})`);
console.log(`metaTitle over 48 with (2026): ${long.length}${long.length ? " -> " + long.join(" | ") : ""}`);
