// Fill missing budget tiers for product groups that already have 1-3 "under $N" guides.
// 1) find bases with <4 tiers, 2) search Creators API for live prices, 3) pick missing tiers on a
// standard ladder, 4) build pools of items priced at or under each new tier.
// Writes scripts/batch13-plan.json and scripts/batch13/pool/<slug>.json. Usage: node scripts/batch13-fetch.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { isRelevant } from "./batch9-relevance.mjs";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const l of readFileSync(resolve(ROOT, ".env.local"), "utf-8").split(/\r?\n/)) { const e = l.indexOf("="); if (e > 0 && !l.startsWith("#")) process.env[l.slice(0, e).trim()] ??= l.slice(e + 1).trim(); }
const OUT = resolve(ROOT, "scripts/batch13/pool"); mkdirSync(OUT, { recursive: true });
const LADDER = [20, 25, 30, 50, 75, 100, 150, 200, 300, 500, 1000, 1500, 2000];
const price = (p) => parseFloat(String(p || "").replace(/[^0-9.]/g, "")) || 0;
const slugs = readdirSync(resolve(ROOT, "data/guides")).map((f) => f.replace(/\.ts$/, ""));
const exists = new Set(slugs);
const bases = {};
for (const s of slugs) { const m = s.match(/^best-(.+?)-under-(\d+)$/); if (m) (bases[m[1]] ||= new Set()).add(+m[2]); }
const tok = await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json();
async function search(q) {
  const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok.access_token}`, "x-marketplace": "www.amazon.com" },
    body: JSON.stringify({ keywords: q, marketplace: "www.amazon.com", partnerTag: "worthrated-20", itemCount: 10, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
  const d = await r.json().catch(() => ({})); await new Promise((x) => setTimeout(x, 1100));
  return (d.searchResult?.items || []).filter((i) => i.images?.primary?.large?.url).map((i) => ({ asin: i.asin, title: i.itemInfo?.title?.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue || "", price: i.offersV2?.listings?.[0]?.price?.money?.displayAmount || "", img: i.images.primary.large.url, features: (i.itemInfo?.features?.displayValues || []).slice(0, 5) }));
}
const plan = []; const today = new Date().toISOString().slice(0, 10); let id = 1;
for (const [base, have] of Object.entries(bases)) {
  if (have.size >= 4) continue;
  const seed = base.replace(/-/g, " ").replace(/s$/, "");
  const m = new Map();
  for (const q of [seed, `budget ${seed}`, `best ${seed}`]) for (const it of await search(q)) if (!m.has(it.asin)) m.set(it.asin, it);
  const items = [...m.values()].filter((it) => price(it.price) > 0 && isRelevant(it.title, seed));
  const ps = items.map((it) => price(it.price)).sort((a, b) => a - b);
  if (ps.length < 8) { console.log("thin", base, ps.length); continue; }
  const lo = ps[Math.floor(ps.length * 0.25)], hi = ps[Math.floor(ps.length * 0.9)];
  const cands = LADDER.filter((t) => t >= lo && t <= hi * 1.1 && !have.has(t));
  let added = 0;
  for (const t of cands) {
    if (have.size + added >= 4) break;
    const slug = `best-${base}-under-${t}`; if (exists.has(slug)) continue;
    const pool = items.filter((it) => price(it.price) <= t).slice(0, 14);
    if (pool.length < 6) continue;
    const name = base.replace(/-/g, " ");
    const row = { id: id++, seed, slug, keyword: `best ${name} under ${t}`, title: `Best ${name.replace(/\b\w/g, (x) => x.toUpperCase())} Under $${t}`, tier: t };
    plan.push(row); added++;
    writeFileSync(resolve(OUT, `${slug}.json`), JSON.stringify({ ...row, fetchedAt: today, relevantCount: pool.length, items: pool }, null, 1));
    console.log(row.id, slug, pool.length);
  }
}
writeFileSync(resolve(ROOT, "scripts/batch13-plan.json"), JSON.stringify(plan, null, 1));
console.log("plan", plan.length);
