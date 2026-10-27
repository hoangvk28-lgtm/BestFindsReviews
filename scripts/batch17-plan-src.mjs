// Batch 17 plan source (keyword 26.10 exports: senior phones, bed wedges, night lights, magnifying lamps, TV audio, garden).
// Usage: node scripts/batch17-plan-src.mjs  -> writes scripts/batch17-plan.json, skips slugs already in data/guides
import { writeFileSync, existsSync } from "fs";
// seed -> pillar (category hub)
const PILLAR = {
  "motion sensor night light": "Simple Tech", "magnifying lamp": "Simple Tech",
  "flip phone": "Simple Tech", "amplified phone": "Simple Tech", "big button phone": "Simple Tech",
  "wireless tv headphones": "Simple Tech", "digital day clock": "Simple Tech", "garden kneeler": "Garden & Yard",
  "retractable hose reel": "Garden & Yard", "lightweight garden hose": "Garden & Yard",
};
const P = {
 "bed wedge pillow": [
  ["best-bed-wedge-pillows","best bed wedge pillow","Best Bed Wedge Pillows"],
  ["best-bed-wedge-pillows-for-seniors","bed wedge pillow for elderly","Best Bed Wedge Pillows for Seniors"],
  ["best-bed-wedge-pillows-for-acid-reflux","bed wedge pillow for acid reflux","Best Bed Wedge Pillows for Acid Reflux"],
  ["best-bed-wedge-pillows-after-surgery","bed wedge pillow after surgery","Best Bed Wedge Pillows After Surgery"],
  ["best-memory-foam-bed-wedge-pillows","memory foam bed wedge pillow","Best Memory Foam Wedge Pillows"],
  ["best-adjustable-bed-wedge-pillows","adjustable bed wedge pillow","Best Adjustable Bed Wedge Pillows"],
  ["best-bed-wedge-pillow-sets","bed wedge pillow set","Best Bed Wedge Pillow Sets"],
  ["best-orthopedic-bed-wedge-pillows","orthopedic bed wedge pillow","Best Orthopedic Bed Wedge Pillows"],
  ["best-bed-wedge-pillows-for-sitting-up","bed wedge pillow for sitting up in bed","Best Wedge Pillows for Sitting Up"],
  ["best-leg-elevation-wedge-pillows","leg elevation wedge pillow","Best Leg Elevation Wedge Pillows"],
  ["best-headboard-gap-wedge-pillows","headboard gap filler wedge pillow","Best Headboard Gap Wedge Pillows"],
  ["best-bed-wedge-pillows-for-snoring","bed wedge pillow for snoring","Best Bed Wedge Pillows for Snoring"],
  ["best-cooling-bed-wedge-pillows","cooling gel bed wedge pillow","Best Cooling Bed Wedge Pillows"],
  ["best-inflatable-wedge-pillows","inflatable wedge pillow","Best Inflatable Wedge Pillows"],
  ["best-king-size-bed-wedge-pillows","king size bed wedge pillow","Best King Size Bed Wedge Pillows"],
  ["best-7-inch-bed-wedge-pillows","7.5 inch bed wedge pillow","Best 7 Inch Bed Wedge Pillows"],
  ["best-12-inch-bed-wedge-pillows","12 inch bed wedge pillow","Best 12 Inch Bed Wedge Pillows"],
 ],
 "motion sensor night light": [
  ["best-plug-in-motion-sensor-night-lights","plug in motion sensor night light","Best Plug-In Motion Night Lights"],
  ["best-rechargeable-motion-sensor-night-lights","rechargeable motion sensor night light","Best Rechargeable Motion Night Lights"],
  ["best-battery-operated-motion-sensor-night-lights","battery operated motion sensor night light","Best Battery Motion Night Lights"],
  ["best-motion-sensor-night-lights-for-seniors","motion sensor night light for elderly","Best Motion Night Lights for Seniors"],
  ["best-motion-sensor-night-lights-for-hallways","motion sensor night light hallway","Best Motion Night Lights for Hallways"],
  ["best-motion-sensor-night-lights-for-bathrooms","motion sensor night light bathroom","Best Motion Night Lights for Bathrooms"],
  ["best-motion-sensor-stair-lights","motion sensor stair lights indoor","Best Motion Sensor Stair Lights"],
  ["best-motion-sensor-under-cabinet-lights","motion sensor under cabinet light","Best Motion Under Cabinet Lights"],
  ["best-motion-sensor-closet-lights","motion sensor closet light","Best Motion Sensor Closet Lights"],
  ["best-motion-sensor-toilet-night-lights","motion sensor toilet night light","Best Motion Sensor Toilet Lights"],
  ["best-motion-sensor-bed-lights","motion activated under bed light","Best Motion Sensor Under-Bed Lights"],
  ["best-magnetic-motion-sensor-lights","magnetic motion sensor light","Best Magnetic Motion Sensor Lights"],
  ["best-motion-sensor-night-lights-with-dusk-to-dawn","dusk to dawn night light plug in","Best Dusk-to-Dawn Night Lights"],
  ["best-ge-motion-sensor-night-lights","ge motion sensor night light","Best GE Motion Sensor Night Lights"],
 ],
 "magnifying lamp": [
  ["best-magnifying-lamps","best magnifying lamp","Best Magnifying Lamps"],
  ["best-magnifying-lamps-for-seniors","magnifying lamp for elderly reading","Best Magnifying Lamps for Seniors"],
  ["best-magnifying-floor-lamps","magnifying floor lamp","Best Magnifying Floor Lamps"],
  ["best-magnifying-desk-lamps","magnifying desk lamp","Best Magnifying Desk Lamps"],
  ["best-clamp-on-magnifying-lamps","clamp on magnifying lamp","Best Clamp-On Magnifying Lamps"],
  ["best-daylight-magnifying-lamps","daylight magnifying lamp","Best Daylight Magnifying Lamps"],
  ["best-magnifying-lamps-for-crafts","magnifying lamp for crafts","Best Magnifying Lamps for Crafts"],
  ["best-magnifying-lamps-for-sewing","magnifying lamp for sewing","Best Magnifying Lamps for Sewing"],
  ["best-magnifying-lamps-for-reading","magnifying lamp for reading","Best Magnifying Lamps for Reading"],
  ["best-magnifying-lamps-for-estheticians","magnifying lamp for esthetician","Best Esthetician Magnifying Lamps"],
  ["best-5-diopter-magnifying-lamps","5 diopter magnifying lamp","Best 5 Diopter Magnifying Lamps"],
  ["best-rechargeable-magnifying-lamps","rechargeable magnifying lamp","Best Rechargeable Magnifying Lamps"],
  ["best-magnifying-lamps-for-painting-miniatures","magnifying lamp for miniature painting","Best Magnifying Lamps for Miniatures"],
 ],
 "flip phone": [
  ["best-flip-phones","best flip phone","Best Flip Phones"],
  ["best-unlocked-flip-phones","unlocked flip phone","Best Unlocked Flip Phones"],
  ["best-4g-flip-phones","4g flip phone","Best 4G Flip Phones"],
  ["best-flip-phones-with-big-buttons","flip phone with big buttons","Best Flip Phones With Big Buttons"],
  ["best-flip-phones-for-hearing-impaired-users","flip phone for hearing impaired","Best Flip Phones for Hearing Loss"],
  ["best-flip-phones-with-cameras","flip phone with camera","Best Flip Phones With Cameras"],
  ["best-flip-phones-with-sos-buttons","flip phone with sos button","Best Flip Phones With SOS Buttons"],
  ["best-flip-phones-with-whatsapp","flip phone with whatsapp","Best Flip Phones With WhatsApp"],
  ["best-flip-phones-for-verizon","verizon flip phone","Best Flip Phones for Verizon"],
  ["best-flip-phones-for-t-mobile","t mobile flip phone","Best Flip Phones for T-Mobile"],
  ["best-flip-phones-with-charging-docks","flip phone with charging dock","Best Flip Phones With Charging Docks"],
  ["best-nokia-flip-phones","nokia flip phone","Best Nokia Flip Phones"],
  ["best-flip-phones-for-kids","flip phone for kids","Best Flip Phones for Kids"],
 ],
 "amplified phone": [
  ["best-amplified-phones","best amplified phone","Best Amplified Phones"],
  ["best-amplified-phones-for-seniors","amplified phone for seniors","Best Amplified Phones for Seniors"],
  ["best-amplified-cordless-phones","amplified cordless phone","Best Amplified Cordless Phones"],
  ["best-amplified-corded-phones","amplified corded phone","Best Amplified Corded Phones"],
  ["best-amplified-cell-phones","amplified cell phone for hearing impaired","Best Amplified Cell Phones"],
  ["best-amplified-phones-with-answering-machines","amplified phone with answering machine","Best Amplified Phones With Answering"],
  ["best-amplified-phones-with-photo-buttons","amplified phone with picture buttons","Best Amplified Photo Button Phones"],
  ["best-amplified-phones-with-loud-ringers","amplified phone with loud ringer","Best Amplified Phones With Loud Ringers"],
  ["best-clarity-amplified-phones","clarity amplified phone","Best Clarity Amplified Phones"],
  ["best-panasonic-amplified-phones","panasonic amplified phone","Best Panasonic Amplified Phones"],
  ["best-geemarc-amplified-phones","geemarc amplified phone","Best Geemarc Amplified Phones"],
  ["best-amplified-speakerphones","amplified speakerphone for hearing impaired","Best Amplified Speakerphones"],
 ],
 "big button phone": [
  ["best-big-button-phones","best big button phone","Best Big Button Phones"],
  ["best-big-button-phones-for-seniors","big button phone for elderly","Best Big Button Phones for Seniors"],
  ["best-big-button-mobile-phones","big button mobile phone","Best Big Button Mobile Phones"],
  ["best-4g-big-button-phones","4g big button phone","Best 4G Big Button Phones"],
  ["best-big-button-phones-for-visually-impaired-users","big button phone for visually impaired","Best Big Button Phones for Low Vision"],
  ["best-big-button-phones-with-answering-machines","big button phone with answering machine","Best Big Button Answering Machine Phones"],
  ["best-big-button-corded-phones","big button corded phone","Best Big Button Corded Phones"],
  ["best-large-button-phones","large button phone","Best Large Button Phones"],
  ["best-large-button-phones-for-seniors","large button phone for seniors","Best Large Button Phones for Seniors"],
  ["best-large-button-cordless-phones","large button cordless phone","Best Large Button Cordless Phones"],
  ["best-large-button-cell-phones","large button cell phone","Best Large Button Cell Phones"],
  ["best-large-button-landline-phones","large button landline phone","Best Large Button Landline Phones"],
 ],
 "wireless tv headphones": [
  ["best-wireless-tv-headphones-for-seniors","wireless tv headphones for elderly","Best Wireless TV Headphones for Seniors"],
  ["best-wireless-tv-headphones-for-hearing-impaired","wireless tv headphones for hearing impaired","Best Wireless TV Headphones, Hearing Loss"],
  ["best-bluetooth-tv-headphones-with-transmitters","bluetooth tv headphones with transmitter","Best Bluetooth TV Headphone Sets"],
  ["best-wireless-tv-headphones-for-smart-tvs","wireless headphones for smart tv","Best Wireless Headphones for Smart TVs"],
  ["best-sennheiser-tv-headphones","sennheiser rs wireless tv headphones","Best Sennheiser TV Headphones"],
  ["best-under-chin-tv-headphones","under chin wireless tv headphones","Best Under-Chin TV Headphones"],
  ["best-rf-wireless-tv-headphones","rf wireless tv headphones","Best RF Wireless TV Headphones"],
  ["best-wireless-tv-headphones-for-2-people","wireless tv headphones for two people","Best Wireless TV Headphones for 2"],
  ["best-wireless-tv-earbuds","wireless earbuds for tv","Best Wireless Earbuds for TV"],
  ["best-wireless-tv-headphones-for-vizio-tvs","wireless headphones for vizio tv","Best Wireless Headphones for Vizio TVs"],
  ["best-avantree-tv-headphones","avantree wireless tv headphones","Best Avantree TV Headphones"],
 ],
 "digital day clock": [
  ["best-digital-calendar-clocks","digital calendar clock","Best Digital Calendar Clocks"],
  ["best-digital-calendar-clocks-for-dementia","calendar clock for dementia","Best Calendar Clocks for Dementia"],
  ["best-digital-day-clocks-with-alarms","digital day clock with alarm","Best Digital Day Clocks With Alarms"],
  ["best-8-inch-digital-day-clocks","8 inch digital day clock","Best 8 Inch Digital Day Clocks"],
  ["best-digital-day-clocks-with-medication-reminders","digital calendar clock with medication reminders","Best Day Clocks With Medicine Reminders"],
 ],
 "garden kneeler": [
  ["best-garden-kneeling-pads","garden kneeling pad","Best Garden Kneeling Pads"],
  ["best-garden-kneelers-with-wheels","garden kneeler with wheels","Best Garden Kneelers With Wheels"],
  ["best-foam-garden-kneelers","foam garden kneeler","Best Foam Garden Kneelers"],
 ],
 "retractable hose reel": [
  ["best-retractable-air-hose-reels","retractable air hose reel","Best Retractable Air Hose Reels"],
  ["best-ground-mounted-retractable-hose-reels","ground mount retractable hose reel","Best Ground Mount Hose Reels"],
 ],
 "lightweight garden hose": [
  ["best-lightweight-100-foot-garden-hoses","lightweight 100 ft garden hose","Best Lightweight 100 Ft Garden Hoses"],
  ["best-lightweight-kink-free-garden-hoses","lightweight kink free garden hose","Best Lightweight Kink-Free Hoses"],
 ],
};
// Budget ladders: [seed, plural noun for title/slug, tiers]. Existing tiers are skipped automatically.
const TIERS = [
  ["bed wedge pillow", "Bed Wedge Pillows", [30, 40, 50, 75, 100]],
  ["motion sensor night light", "Motion Sensor Night Lights", [15, 20, 25, 30]],
  ["magnifying lamp", "Magnifying Lamps", [30, 50, 75, 100, 150]],
  ["flip phone", "Flip Phones", [50, 75, 100, 150]],
  ["amplified phone", "Amplified Phones", [40, 60, 80, 100]],
  ["big button phone", "Big Button Phones", [30, 40, 50, 75]],
  ["wireless tv headphones", "Wireless TV Headphones", [30, 40, 50, 150, 200]],
  ["digital day clock", "Digital Calendar Clocks", [30, 40, 50]],
];
for (const [seed, noun, tiers] of TIERS) for (const t of tiers) {
  const base = noun.toLowerCase().replace(/ /g, "-");
  (P[seed] ||= []).push([`best-${base}-under-${t}`, `best ${noun.toLowerCase()} under ${t}`, `Best ${noun} Under $${t}`, t]);
}
const out = []; let id = 1; const dup = [];
for (const [seed, rows] of Object.entries(P)) for (const [slug, keyword, title, tier] of rows) {
  if (existsSync(new URL(`../data/guides/${slug}.ts`, import.meta.url))) { dup.push(slug); continue; }
  out.push({ id: id++, seed, pillar: PILLAR[seed], slug, keyword, title, ...(tier ? { tier } : {}) });
}
writeFileSync(new URL("./batch17-plan.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`plan: ${out.length} (budget ${out.filter((r) => r.tier).length}); skipped existing: ${dup.join(", ") || "none"}`);
// metaTitle = title + " (2026)" must be <= 48 chars (site appends " | <brand>")
const long = out.filter((r) => (r.title + " (2026)").length > 48).map((r) => `${r.title} (${(r.title + " (2026)").length})`);
console.log(`metaTitle over 48 with (2026): ${long.length}${long.length ? " -> " + long.join(" | ") : ""}`);
