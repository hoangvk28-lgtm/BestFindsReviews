// Adds shared extra searches to every pool whose seed matches a pattern. Usage: node scripts/batch9-topup.mjs "<seedRegex>" "q1" "q2" ...
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { loadArticles } from "./batch9-fetch.mjs";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const l of readFileSync(resolve(ROOT, ".env.local"), "utf-8").split(/\r?\n/)) { const e = l.indexOf("="); if (e > 0 && !l.startsWith("#")) process.env[l.slice(0, e).trim()] ??= l.slice(e + 1).trim(); }
const [re, ...qs] = process.argv.slice(2);
const tok = await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json();
const extra = [];
for (const q of qs) {
  const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok.access_token}`, "x-marketplace": "www.amazon.com" },
    body: JSON.stringify({ keywords: q, marketplace: "www.amazon.com", partnerTag: "worthrated-20", itemCount: 5, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
  const d = await r.json().catch(() => ({}));
  for (const i of d.searchResult?.items || []) if (i.images?.primary?.large?.url) extra.push({ asin: i.asin, title: i.itemInfo?.title?.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue || "", price: i.offersV2?.listings?.[0]?.price?.money?.displayAmount || "", img: i.images.primary.large.url, features: (i.itemInfo?.features?.displayValues || []).slice(0, 5) });
  await new Promise((r) => setTimeout(r, 1100));
}
for (const a of loadArticles().filter((x) => (re.startsWith("slug:") ? x.slug === re.slice(5) : new RegExp(re, "i").test(x.seed)))) {
  const f = resolve(ROOT, `scripts/${process.env.BATCH || "batch9"}/pool`, `${a.slug}.json`); const p = JSON.parse(readFileSync(f, "utf-8"));
  const seen = new Set(p.items.map((x) => x.asin));
  const add = extra.filter((x) => !seen.has(x.asin) && seen.add(x.asin));
  p.items = [...p.items.slice(0, 10), ...add].slice(0, 16); writeFileSync(f, JSON.stringify(p, null, 1));
  console.log(a.id, a.slug, "+" + add.length);
}
