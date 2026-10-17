// Budget ("under $N") guide sourcing. For each row in scripts/batch12-plan.json:
// reuse items already fetched for the same seed (batch9-11 pools), add Creators API
// searches, and keep only items whose current listing price is at or under the tier.
// Writes scripts/batch12/pool/<slug>.json. Usage: node scripts/batch12-fetch.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { isRelevant } from "./batch9-relevance.mjs";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const l of readFileSync(resolve(ROOT, ".env.local"), "utf-8").split(/\r?\n/)) { const e = l.indexOf("="); if (e > 0 && !l.startsWith("#")) process.env[l.slice(0, e).trim()] ??= l.slice(e + 1).trim(); }
const plan = JSON.parse(readFileSync(resolve(ROOT, "scripts/batch12-plan.json"), "utf-8"));
const OUT = resolve(ROOT, "scripts/batch12/pool"); mkdirSync(OUT, { recursive: true });
const price = (p) => parseFloat(String(p || "").replace(/[^0-9.]/g, "")) || 0;

// Items already fetched per seed
const bySeed = {};
for (const b of ["batch9", "batch10", "batch11"]) {
  const d = resolve(ROOT, "scripts", b, "pool"); if (!existsSync(d)) continue;
  for (const f of readdirSync(d)) { const p = JSON.parse(readFileSync(resolve(d, f), "utf-8")); const s = (p.seed || "").toLowerCase(); (bySeed[s] ||= new Map()); for (const it of p.items) bySeed[s].set(it.asin, it); }
}
const tok = await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json();
async function search(q) {
  const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok.access_token}`, "x-marketplace": "www.amazon.com" },
    body: JSON.stringify({ keywords: q, marketplace: "www.amazon.com", partnerTag: "worthrated-20", itemCount: 10, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
  const d = await r.json().catch(() => ({})); await new Promise((x) => setTimeout(x, 1100));
  return (d.searchResult?.items || []).filter((i) => i.images?.primary?.large?.url).map((i) => ({ asin: i.asin, title: i.itemInfo?.title?.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue || "", price: i.offersV2?.listings?.[0]?.price?.money?.displayAmount || "", img: i.images.primary.large.url, features: (i.itemInfo?.features?.displayValues || []).slice(0, 5) }));
}
const today = new Date().toISOString().slice(0, 10);
for (const a of plan) {
  const f = resolve(OUT, `${a.slug}.json`); if (existsSync(f)) continue;
  const m = new Map(bySeed[a.seed] || []);
  for (const q of [a.seed, `${a.seed} under ${a.tier} dollars`, `budget ${a.seed}`]) for (const it of await search(q)) if (!m.has(it.asin)) m.set(it.asin, it);
  const items = [...m.values()].filter((it) => { const p = price(it.price); return p > 0 && p <= a.tier && isRelevant(it.title, a.seed); }).slice(0, 14);
  writeFileSync(f, JSON.stringify({ ...a, fetchedAt: today, relevantCount: items.length, items }, null, 1));
  console.log(a.id, a.slug, items.length);
}
