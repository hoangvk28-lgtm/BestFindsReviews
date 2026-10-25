// Top up thin batch15 budget pools (<4 items) with extra price-filtered searches.
// Usage: node scripts/batch15-topup.mjs   (prints one line per topped-up pool)
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const l of readFileSync(resolve(ROOT, ".env.local"), "utf-8").split(/\r?\n/)) { const e = l.indexOf("="); if (e > 0 && !l.startsWith("#")) process.env[l.slice(0, e).trim()] ??= l.slice(e + 1).trim(); }
const DIR = resolve(ROOT, "scripts/batch15/pool");
const price = (p) => parseFloat(String(p || "").replace(/[^0-9.]/g, "")) || 0;
const tok = await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json();
async function search(q) {
  const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok.access_token}`, "x-marketplace": "www.amazon.com" },
    body: JSON.stringify({ keywords: q, marketplace: "www.amazon.com", partnerTag: process.env.AMAZON_PAAPI_PARTNER_TAG, itemCount: 10, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
  const d = await r.json().catch(() => ({})); await new Promise((x) => setTimeout(x, 1100));
  return (d.searchResult?.items || []).filter((i) => i.images?.primary?.large?.url && i.itemInfo?.title?.displayValue).map((i) => ({ asin: i.asin, title: i.itemInfo.title.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue || "", price: i.offersV2?.listings?.[0]?.price?.money?.displayAmount || "", img: i.images.primary.large.url, features: (i.itemInfo?.features?.displayValues || []).slice(0, 5) }));
}
for (const f of readdirSync(DIR)) {
  const p = JSON.parse(readFileSync(resolve(DIR, f), "utf-8"));
  if (!p.tier || p.items.length >= 4) continue;
  const have = new Set(p.items.map((i) => i.asin)); const before = p.items.length;
  for (const q of [`cheap ${p.seed}`, `budget ${p.seed}`, `small ${p.seed}`, `${p.seed} under ${p.tier} dollars`]) {
    for (const it of await search(q)) { const x = price(it.price); if (x > 0 && x <= p.tier && !have.has(it.asin)) { have.add(it.asin); p.items.push(it); } }
    if (p.items.length >= 6) break;
  }
  writeFileSync(resolve(DIR, f), JSON.stringify(p, null, 1));
  console.log(`${p.slug} ${before} -> ${p.items.length}`);
}
