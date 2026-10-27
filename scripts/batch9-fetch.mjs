// Stage A for Batch 9: Creators API search per CSV row -> scripts/batch9/pool/<slug>.json
// Usage: node scripts/batch9-fetch.mjs [fromId] [toId]   (skips slugs already fetched)
// Prints only one status line per article to keep session output small.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const line of readFileSync(resolve(ROOT, ".env.local"), "utf-8").split(/\r?\n/)) {
  const t = line.trim(); if (!t || t.startsWith("#")) continue;
  const eq = t.indexOf("="); if (eq > 0 && !process.env[t.slice(0, eq)]) process.env[t.slice(0, eq)] = t.slice(eq + 1).trim();
}
const { AMAZON_PAAPI_ACCESS_KEY: id, AMAZON_PAAPI_SECRET_KEY: secret, AMAZON_PAAPI_PARTNER_TAG: tag } = process.env;
const MARKETPLACE = "www.amazon.com";

export function parseCsv(text) {
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}
export function loadArticles() {
  if (process.env.BATCH === "batch20") {
    // new kw ver 2 25.10 (batch20): mobility and daily-living aids, best + under-budget ladder guides
    const SAFETY = /bed assist rail|transfer board|quad cane|rollator|walking cane/;
    return JSON.parse(readFileSync(resolve(ROOT, "scripts/batch20-plan.json"), "utf-8")).map((r) => ({ id: r.id, cluster: r.seed, seed: r.seed, title: r.title, slug: r.slug, keyword: r.keyword, supporting: "", type: "Best", status: "", tier: r.tier,
      query: r.tier ? r.title.replace(/^Best\s+/, "").replace(/\s+Under \$\d+$/, "") : r.keyword,
      niche: r.tier ? "Budget" : "Mobility & Daily Living",
      why: [r.tier ? `BUDGET GUIDE: every product listed is currently priced at or under $${r.tier}. Frame value-for-money tradeoffs at this budget, compare with what spending more would add, but never state prices or dollar figures in the text (the title is fine).` : `Angle: "${r.keyword}". Picks must clearly match this angle.`,
        SAFETY.test(r.seed) ? "SAFETY-SENSITIVE: be conservative, cite stated weight limits and fit requirements, advise confirming fit and use with a clinician or physical therapist, never imply medical benefit (bed rails: mention entrapment-gap risk)." : ""].filter(Boolean).join(" "), note: "" }));
  }
  if (process.env.BATCH === "batch16") {
    // Keyword new 25.10: arthritis-friendly kitchen tools, best + under-budget ladder guides
    return JSON.parse(readFileSync(resolve(ROOT, "scripts/batch16-plan.json"), "utf-8")).map((r) => ({ id: r.id, cluster: r.seed, seed: r.seed, title: r.title, slug: r.slug, keyword: r.keyword, supporting: "", type: "Best", status: "", tier: r.tier,
      query: r.tier ? r.title.replace(/^Best\s+/, "").replace(/\s+Under \$\d+$/, "") : r.keyword,
      niche: r.tier ? "Budget" : "Easy Kitchen",
      why: r.tier ? `BUDGET GUIDE: every product listed is currently priced at or under $${r.tier}. Frame value-for-money tradeoffs at this budget, compare with what spending more would add, but never state prices or dollar figures in the text (the title is fine).` : `Angle: "${r.keyword}". Picks must clearly match this angle; grip comfort for arthritic or weak hands is a plus where relevant. Not a medical framing.`, note: "" }));
  }
  if (process.env.BATCH === "batch15") {
    // Keyword 23.10 outdoor/garden batch: best + under-budget ladder guides
    return JSON.parse(readFileSync(resolve(ROOT, "scripts/batch15-plan.json"), "utf-8")).map((r) => ({ id: r.id, cluster: r.seed, seed: r.seed, title: r.title, slug: r.slug, keyword: r.keyword, supporting: "", type: "Best", status: "", tier: r.tier,
      query: r.tier ? r.title.replace(/^Best\s+/, "").replace(/\s+Under \$\d+$/, "") : r.keyword,
      niche: r.tier ? "Budget" : "Home & Garden",
      why: r.tier ? `BUDGET GUIDE: every product listed is currently priced at or under $${r.tier}. Frame value-for-money tradeoffs at this budget, compare with what spending more would add, but never state prices or dollar figures in the text (the title is fine).` : `Angle: "${r.keyword}". Picks must clearly match this angle; seniors-friendly ease of use is a plus where relevant.`, note: "" }));
  }
  if (process.env.BATCH === "batch14") {
    // Keyword senior 22.11 batch: niche + budget guides, product pools from scripts/stage-a.mjs
    return JSON.parse(readFileSync(resolve(ROOT, "scripts/batch14-plan.json"), "utf-8")).map((r) => ({ id: r.id, cluster: r.pillar, seed: r.seed, title: r.title, slug: r.slug, keyword: r.keyword, supporting: r.supporting || "", type: "Best", status: "", niche: r.type === "budget" ? "Budget" : r.group, why: r.type === "budget" ? `BUDGET GUIDE: every product listed is currently priced at or under $${r.tier}. Frame value-for-money tradeoffs at this budget, compare with what spending more would add, but never state prices or dollar figures in the text (the title is fine).` : `Niche angle: ${r.keyword.replace(/^best /, "")}. Every pick must genuinely fit this angle; senior relevance: ${r.rel}.`, note: "" }));
  }
  if (process.env.BATCH === "batch13") {
    return JSON.parse(readFileSync(resolve(ROOT, "scripts/batch13-plan.json"), "utf-8")).map((r) => ({ id: r.id, cluster: "", seed: r.seed, title: r.title, slug: r.slug, keyword: r.keyword, supporting: "", type: "Best", status: "", niche: "Budget", why: `BUDGET GUIDE: every product listed is currently priced at or under $${r.tier}. Frame value-for-money tradeoffs at this budget, compare with what spending more would add, but never state prices or dollar figures in the text (the title is fine).`, note: "" }));
  }
  if (process.env.BATCH === "batch12") {
    return JSON.parse(readFileSync(resolve(ROOT, "scripts/batch12-plan.json"), "utf-8")).map((r) => ({ id: r.id, cluster: "", seed: r.seed, title: r.title, slug: r.slug, keyword: r.keyword, supporting: "", type: "Best", status: "", niche: "Budget", why: `BUDGET GUIDE: every product listed is currently priced at or under $${r.tier}. Frame value-for-money tradeoffs at this budget, compare with what spending more would add, but never state prices or dollar figures in the text (the title is fine).`, note: "" }));
  }
  if (process.env.BATCH === "batch11") {
    const rows = parseCsv(readFileSync(resolve(ROOT, "seniors_best_batch2_mobility_accessibility_deep_audit.csv"), "utf-8").replace(/^\uFEFF/, ""));
    return rows.slice(1).filter((r) => /^\d+$/.test(r[0])).map((r) => ({ id: Number(r[0]), cluster: "", seed: r[6], title: r[4].replace(/\s*\(2026\)$/, ""), slug: r[16].replace(/^\/|\/$/g, ""), keyword: r[5], supporting: [r[10], r[11]].filter(Boolean).join(" | "), type: /\bvs\b/i.test(r[4]) ? "Comparison" : "Best", status: r[23], niche: r[2], why: [r[17], r[18] === "High" ? "SAFETY-CRITICAL topic: be conservative." : ""].filter(Boolean).join(" "), note: r[21] }));
  }
  if (process.env.BATCH === "batch10") {
    const rows = parseCsv(readFileSync(resolve(ROOT, "seniors_best_kitchen_keyword_plan_second_audit_251.csv"), "utf-8").replace(/^﻿/, ""));
    return rows.slice(1).filter((r) => /^\d+$/.test(r[0])).map((r) => ({ id: Number(r[0]), cluster: "Easy Kitchen", seed: r[5], title: r[3].replace(/\s*\(2026\)$/, ""), slug: r[15].replace(/^\/|\/$/g, ""), keyword: r[4], supporting: [r[9], r[10]].filter(Boolean).join(" | "), type: /\bvs\b/i.test(r[3]) ? "Comparison" : "Best", status: r[20], niche: r[2], why: r[16], note: r[19] }));
  }
  const rows = parseCsv(readFileSync(resolve(ROOT, "WorthRated Keyword - Batch 9 - All Articles.csv"), "utf-8"));
  return rows.slice(3).filter((r) => r[0] && /^\d+$/.test(r[0])).map((r) => ({
    id: Number(r[0]), cluster: r[1], seed: r[2], title: r[3], slug: r[4].replace(/^\/|\/$/g, ""),
    keyword: r[5], supporting: r[6], type: r[14], status: r[18], niche: r[19], why: r[20], note: r[21],
  }));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  if (!id || !secret || !tag) throw new Error("Missing AMAZON_PAAPI_* in .env.local");
  const [from = 1, to = 9999] = process.argv.slice(2).map(Number);
  const dir = resolve(ROOT, `scripts/${process.env.BATCH || "batch9"}/pool`); mkdirSync(dir, { recursive: true });
  const tok = await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ grant_type: "client_credentials", client_id: id, client_secret: secret, scope: "creatorsapi::default" }) })).json();
  if (!tok.access_token) throw new Error("Token failed");
  for (const a of loadArticles().filter((x) => x.id >= from && x.id <= to)) {
    const out = resolve(dir, `${a.slug}.json`);
    if (existsSync(out)) continue;
    const query = a.query || (a.type === "Comparison" ? a.seed : a.keyword);
    let items = [];
    for (let attempt = 0; attempt < 3 && !items.length; attempt++) {
      const res = await fetch("https://creatorsapi.amazon/catalog/v1/searchItems", { method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok.access_token}`, "x-marketplace": MARKETPLACE },
        body: JSON.stringify({ keywords: query, marketplace: MARKETPLACE, partnerTag: tag, itemCount: 10,
          resources: ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price"] }) });
      const data = await res.json().catch(() => ({}));
      items = data.searchResult?.items || data.itemsResult?.items || [];
      if (!items.length) await new Promise((r) => setTimeout(r, 3000));
    }
    const picks = items.map((i) => ({ asin: i.asin || i.itemId, title: i.itemInfo?.title?.displayValue,
      brand: i.itemInfo?.byLineInfo?.brand?.displayValue || i.itemInfo?.byLineInfo?.manufacturer?.displayValue || "",
      price: i.offersV2?.listings?.[0]?.price?.money?.displayAmount || "", img: i.images?.primary?.large?.url || "",
      features: (i.itemInfo?.features?.displayValues || []).slice(0, 5) }))
      .filter((p) => p.asin && p.title && p.img)
      .filter((p) => !a.tier || ((x) => x > 0 && x <= a.tier)(parseFloat(String(p.price).replace(/[^0-9.]/g, ""))));
    writeFileSync(out, JSON.stringify({ ...a, query, fetchedAt: new Date().toISOString().slice(0, 10), items: picks }, null, 1));
    console.log(`${a.id} ${a.slug} ${picks.length}`);
    await new Promise((r) => setTimeout(r, 1100));
  }
}
