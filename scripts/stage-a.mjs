// Stage A of the best-guide pipeline (zero LLM tokens), adapted from HardcastlesRV/smartspace-picks.
// Usage: node scripts/stage-a.mjs <plan.json> <out-dir>
// plan.json: { clusters: { "<cluster>": { q: ["{kw}", "{kw} for seniors", ...], must: "regex", ban: "regex" } },
//              guides: [{ slug, cluster, keyword, maxPrice?, minPrice?, req?: "regex", queries?: [...] }] }
// For each guide: searches Amazon via the Creators API (cached on disk), filters off-topic items and the price
// window, picks 6 brand-diverse products spread across price, prefers ASINs not used elsewhere on the site, and
// attaches any prior WorthRated description of a reused ASIN so the writer can adapt it instead of starting cold.
// Writes <out-dir>/<slug>.json (compact fact sheet) and <out-dir>/_summary.tsv.
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const [planFile, outDir] = process.argv.slice(2);
if (!planFile || !outDir) { console.error("usage: node scripts/stage-a.mjs <plan.json> <out-dir>"); process.exit(1); }
mkdirSync(outDir, { recursive: true });
const CACHE = process.env.QCACHE || resolve(outDir, "..", "qcache");
mkdirSync(CACHE, { recursive: true });
for (const l of readFileSync(".env.local", "utf8").split("\n")) { const i = l.indexOf("="); if (i > 0 && !process.env[l.slice(0, i)]) process.env[l.slice(0, i)] = l.slice(i + 1).trim().replace(/^["'](.*)["']$/, "$1"); }
const M = "www.amazon.com", TAG = process.env.AMAZON_PAAPI_PARTNER_TAG;
let tok = null;
async function token() {
  if (tok) return tok;
  const r = await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) });
  tok = (await r.json()).access_token;
  if (!tok) { console.error("token failed (check AMAZON_PAAPI_* lengths in .env.local)"); process.exit(1); }
  return tok;
}

let apiCalls = 0;
async function search(q) {
  const f = resolve(CACHE, Buffer.from(q.toLowerCase()).toString("hex").slice(0, 120) + ".json");
  if (existsSync(f)) return JSON.parse(readFileSync(f, "utf8"));
  let items = [];
  for (let t = 0; t < 3; t++) {
    const r = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${await token()}`, "x-marketplace": M }, body: JSON.stringify({ keywords: q, marketplace: M, partnerTag: TAG, itemCount: 10, resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
    const d = await r.json().catch(() => ({}));
    if (r.ok) { items = (d.searchResult?.items || []).map((i) => ({ asin: i.asin, title: i.itemInfo?.title?.displayValue, brand: i.itemInfo?.byLineInfo?.brand?.displayValue, price: i.offersV2?.listings?.[0]?.price?.money?.amount ?? null, img: i.images?.primary?.large?.url, features: i.itemInfo?.features?.displayValues || [] })); break; }
    if (r.status === 401) tok = null;
    await new Promise((s) => setTimeout(s, 2000));
  }
  apiCalls++;
  writeFileSync(f, JSON.stringify(items));
  await new Promise((s) => setTimeout(s, 1100));
  return items;
}

// ASIN usage across the site + prior descriptions (both compact and JSON-style guide files).
const usedIn = {}, prior = {};
const reUrl = /"?amazonUrl"?: "https:\/\/www\.amazon\.com\/dp\/([A-Z0-9]{10})[^"]*"((?:(?!amazonUrl)[\s\S]){0,4000}?)"?description"?: "((?:[^"\\]|\\.)*)"/g;
for (const f of readdirSync("data/guides")) {
  if (!f.endsWith(".ts")) continue;
  const src = readFileSync("data/guides/" + f, "utf8"), g = f.replace(/\.ts$/, "");
  for (const m of src.matchAll(/\/dp\/([A-Z0-9]{10})/g)) (usedIn[m[1]] ??= new Set()).add(g);
  for (const m of src.matchAll(reUrl)) { try { prior[m[1]] ??= { guide: g, text: JSON.parse('"' + m[3] + '"').slice(0, 1200) }; } catch {} }
}

const plan = JSON.parse(readFileSync(planFile, "utf8"));
const taken = {}; // asin -> count of guides in this run
const summary = ["slug\tstatus\tpicks\tfiltered\tfresh\treused\tminPrice\tmaxPrice"];
for (const g of plan.guides) {
  const cfg = plan.clusters[g.cluster];
  if (!cfg) { console.error("no cluster cfg: " + g.cluster); continue; }
  const kw = g.keyword.replace(/^best /, "");
  const qs = [...new Set((g.queries || cfg.q).map((q) => q.replaceAll("{kw}", kw)))];
  const raw = [];
  for (const q of qs) raw.push(...(await search(q)));
  const seen = new Set(), must = new RegExp(cfg.must, "i"), ban = cfg.ban ? new RegExp(cfg.ban, "i") : null, req = g.req ? new RegExp(g.req, "i") : null;
  let c = raw.filter((i) => i.asin && i.title && i.price != null && !seen.has(i.asin) && seen.add(i.asin));
  c = c.filter((i) => must.test(i.title) && !(ban && ban.test(i.title)));
  if (req) c = c.filter((i) => req.test(i.title + " " + i.features.join(" ")));
  if (g.maxPrice) c = c.filter((i) => i.price <= g.maxPrice);
  if (g.minPrice) c = c.filter((i) => i.price > g.minPrice);
  // order: unused on site and unused in this run first, then reused-with-prior (cheap to write), then the rest
  const score = (i) => (usedIn[i.asin] ? (prior[i.asin] ? 1 : 2) : 0) + (taken[i.asin] || 0) * 3;
  const pool = [...c].sort((a, b) => score(a) - score(b) || a.price - b.price);
  const picks = [], bc = {}, cap = g.brand ? 6 : 2;
  const byPrice = [...pool].sort((a, b) => a.price - b.price);
  // first pass: spread across price bands with brand cap 2
  const bands = 6;
  for (let k = 0; k < bands && picks.length < 6; k++) {
    const band = byPrice.slice(Math.floor((k * byPrice.length) / bands), Math.floor(((k + 1) * byPrice.length) / bands));
    const it = band.sort((a, b) => score(a) - score(b))[0];
    if (!it || picks.includes(it)) continue;
    const b = (it.brand || "x").toLowerCase();
    if ((bc[b] || 0) >= cap) continue;
    bc[b] = (bc[b] || 0) + 1; picks.push(it);
  }
  for (const it of pool) { if (picks.length >= 6) break; const b = (it.brand || "x").toLowerCase(); if (!picks.includes(it) && (bc[b] || 0) < cap) { picks.push(it); bc[b] = (bc[b] || 0) + 1; } }
  picks.sort((a, b) => b.price - a.price);
  picks.forEach((p) => (taken[p.asin] = (taken[p.asin] || 0) + 1));
  const prices = picks.map((p) => p.price);
  const out = {
    slug: g.slug, cluster: g.cluster, keyword: g.keyword, maxPrice: g.maxPrice ?? null,
    status: picks.length >= 5 ? "ok" : "THIN", candidatesAfterFilter: c.length,
    picks: picks.map((p) => ({ asin: p.asin, brand: p.brand, price: p.price, img: p.img, title: p.title.slice(0, 180), features: p.features.slice(0, 5).map((f) => f.replace(/\s+/g, " ").slice(0, 220)), usedIn: usedIn[p.asin] ? [...usedIn[p.asin]].slice(0, 3) : [], ...(prior[p.asin] ? { prior: prior[p.asin] } : {}) })),
  };
  writeFileSync(resolve(outDir, g.slug + ".json"), JSON.stringify(out, null, 1));
  const reused = out.picks.filter((p) => p.usedIn.length).length;
  summary.push([g.slug, out.status, picks.length, c.length, picks.length - reused, reused, prices.length ? Math.min(...prices) : "", prices.length ? Math.max(...prices) : ""].join("\t"));
  console.log(`${out.status.padEnd(4)} ${g.slug} picks=${picks.length} filtered=${c.length} reused=${reused} api=${apiCalls}`);
}
writeFileSync(resolve(outDir, "_summary.tsv"), summary.join("\n") + "\n");
console.log(`done. new API calls: ${apiCalls}`);
