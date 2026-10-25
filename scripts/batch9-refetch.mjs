// Relevance filter + top-up search for batch9 pools (no model tokens).
// Usage: node scripts/batch9-refetch.mjs <fromId> <toId>
// For each pool: marks items whose title lacks the seed's core noun tokens as off-topic; if fewer than 5 relevant
// items remain, runs extra Creators API searches (title phrasing, keyword + seed) and merges new ASINs.
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { loadArticles } from "./batch9-fetch.mjs";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const line of readFileSync(resolve(ROOT, ".env.local"), "utf-8").split(/\r?\n/)) {
  const t = line.trim(); if (!t || t.startsWith("#")) continue;
  const eq = t.indexOf("="); if (eq > 0 && !process.env[t.slice(0, eq)]) process.env[t.slice(0, eq)] = t.slice(eq + 1).trim();
}
const { AMAZON_PAAPI_ACCESS_KEY: id, AMAZON_PAAPI_SECRET_KEY: secret } = process.env;
const tag = "worthrated-20", M = "www.amazon.com";
const STOP = new Set(["best", "for", "with", "and", "the", "top", "rated", "portable", "small", "home", "cheap", "good"]);
export const coreTokens = (seed) => seed.toLowerCase().split(/\W+/).filter((t) => t.length > 2 && !STOP.has(t)).map((t) => t.replace(/s$/, ""));
export const isRelevant = (title, seed) => { const t = (title || "").toLowerCase(); const c = coreTokens(seed); return c.filter((x) => t.includes(x)).length >= Math.min(2, c.length); };

const [from, to] = process.argv.slice(2).map(Number);
const tok = await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ grant_type: "client_credentials", client_id: id, client_secret: secret, scope: "creatorsapi::default" }) })).json();
async function search(q) {
  const res = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok.access_token}`, "x-marketplace": M },
    body: JSON.stringify({ keywords: q, marketplace: M, partnerTag: tag, itemCount: 10,
      resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
  const d = await res.json().catch(() => ({}));
  await new Promise((r) => setTimeout(r, 1100));
  return (d.searchResult?.items || []).map((i) => ({ asin: i.asin, title: i.itemInfo?.title?.displayValue,
    brand: i.itemInfo?.byLineInfo?.brand?.displayValue || "", price: i.offersV2?.listings?.[0]?.price?.money?.displayAmount || "",
    img: i.images?.primary?.large?.url || "", features: (i.itemInfo?.features?.displayValues || []).slice(0, 5) })).filter((p) => p.asin && p.title && p.img);
}
for (const a of loadArticles().filter((x) => x.id >= from && x.id <= to)) {
  const f = resolve(ROOT, `scripts/${process.env.BATCH || "batch9"}/pool`, `${a.slug}.json`);
  const p = JSON.parse(readFileSync(f, "utf-8"));
  const relevant = () => p.items.filter((it) => isRelevant(it.title, a.seed)).length;
  if (relevant() < 6 && !p.refetched) {
    for (const q of [a.title.replace(/^best\s+/i, ""), `${a.keyword} ${a.seed}`]) {
      const seen = new Set(p.items.map((x) => x.asin));
      const inBudget = (it) => { const x = parseFloat(String(it.price).replace(/[^0-9.]/g, "")); return !a.tier || (x > 0 && x <= a.tier); };
      for (const it of await search(q)) if (!seen.has(it.asin) && inBudget(it)) p.items.push(it);
      if (relevant() >= 6) break;
    }
    p.refetched = true;
  }
  p.items = [...p.items.filter((it) => isRelevant(it.title, a.seed)), ...p.items.filter((it) => !isRelevant(it.title, a.seed))].slice(0, 12);
  p.relevantCount = relevant();
  writeFileSync(f, JSON.stringify(p, null, 1));
  console.log(`${a.id} ${a.slug} relevant=${p.relevantCount}`);
}
