// Batch 9 helpers (WorthRated). Product data comes from scripts/batch9/pool/<slug>.json (Creators API, stage A).
//   node scripts/batch9-spec.mjs brief <fromId> <toId>  -> scripts/batch9/briefs/<from>-<to>.md (compact writer input)
//   node scripts/batch9-spec.mjs build <fromId> <toId>  -> spec JSON -> build-guide.mjs -> register-dynamic-guide -> register-new-guides
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import { loadArticles } from "./batch9-fetch.mjs";
import { isRelevant } from "./batch9-relevance.mjs";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const B = resolve(ROOT, `scripts/${process.env.BATCH || "batch9"}`);
const TAG = "worthrated-20";
const CAT = { "Easy Cleaning": "easy-cleaning", "Simple Tech": "simple-tech", "Garden & Yard": "garden-yard", "Easy Kitchen": "easy-kitchen" };
const [cmd, from, to] = process.argv.slice(2);
const all = loadArticles();
const range = all.filter((a) => a.id >= Number(from) && a.id <= Number(to));
const pool = (slug) => JSON.parse(readFileSync(resolve(B, "pool", `${slug}.json`), "utf-8"));
const clip = (s, n) => (s && s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "..." : s || "");

if (cmd === "brief") {
  const prior = new Map();
  for (const f of readdirSync(resolve(ROOT, "data/guides"))) { const t = readFileSync(resolve(ROOT, "data/guides", f), "utf-8"); for (const m of t.matchAll(/dp\/([A-Z0-9]{10})[^\n]*?specs: \[([^\]]*)\]/g)) if (!prior.has(m[1]) && m[2].length > 10) { const line = t.slice(m.index, t.indexOf("\n", m.index)); const pc = (k) => ((line.match(new RegExp(k + ": \\[([^\\]]*)\\]")) || [])[1] || "").replace(/"/g, "").slice(0, 300); prior.set(m[1], m[2].replace(/"/g, "").slice(0, 200) + (pc("pros") ? " | prior pros: " + pc("pros") : "") + (pc("cons") ? " | prior cons: " + pc("cons") : "") + (process.env.PRIOR_DESC ? ((d) => d ? " | prior overview: " + d.slice(0, 600) : "")(((line.match(/description: "((?:[^"\\]|\\.)*)"/) || [])[1] || "").split("\\n\\n")[0]) : "")); } }
  mkdirSync(resolve(B, "briefs"), { recursive: true });
  let md = "";
  for (const a of range) {
    if (existsSync(resolve(B, "content", `${a.slug}.json`))) continue;
    const p = pool(a.slug);
    md += `\n## ${a.id} ${a.slug}\nCluster: ${a.cluster} | Seed: ${a.seed} | Title: ${a.title} | KW: ${a.keyword} | Type: ${a.type}\nSupporting: ${clip(a.supporting, 220)}\nAngle: ${clip(a.why, 200)} ${clip(a.note, 200)}\n`;
    const rel = p.items.filter((it) => isRelevant(it.title, a.seed)).length;
    let shown = 0;
    p.items.forEach((it, i) => {
      if (shown >= Number(process.env.MAXITEMS || 10)) return;
      if (!process.env.NOFILTER && p.relevantCount !== undefined && rel >= 5 && !isRelevant(it.title, a.seed)) return;
      shown++;
      md += `[${i}] ${clip(it.title, 120)} | brand: ${it.brand || "-"}\n${prior.has(it.asin) ? `   known specs (from an existing guide): ${prior.get(it.asin)}\n` : ""}${it.features.slice(0, 3).map((f) => "   - " + clip(f, 150)).join("\n")}\n`;
    });
  }
  const out = resolve(B, "briefs", `${from}-${to}.md`);
  writeFileSync(out, md.trim() + "\n");
  console.log(`brief ${from}-${to}: ${md.length} chars`);
}

if (cmd === "build") {
  const registry = readFileSync(resolve(ROOT, "data/guides.ts"), "utf-8");
  const existing = [...registry.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
  const titles = Object.fromEntries([...registry.matchAll(/title: "([^"]+)",\s*\n\s*slug: "([^"]+)"/g)].map((m) => [m[2], m[1]]));
  const built = [], errs = [];
  const paraSeen = new Map();
  // Compare against every batch's content, not just the current one, so text copied from older guides is caught too
  for (const dir of readdirSync(resolve(ROOT, "scripts")).filter((d) => /^batch\d+$/.test(d) && existsSync(resolve(ROOT, "scripts", d, "content")))) {
    const cdir = resolve(ROOT, "scripts", dir, "content");
    for (const f of readdirSync(cdir)) { try { const o = JSON.parse(readFileSync(resolve(cdir, f), "utf-8")); if (!o.skip && !(resolve(cdir) === resolve(B, "content") && range.some((r) => r.slug + ".json" === f))) for (const p of o.products) for (const para of p.description.split(/\n\n/)) paraSeen.set(para, dir + "/" + f); } catch {} }
  }
  mkdirSync(resolve(B, "specs"), { recursive: true });
  for (const a of range) {
    const cf = resolve(B, "content", `${a.slug}.json`);
    if (!existsSync(cf)) { errs.push(`${a.slug}: no content`); continue; }
    let c; try { c = JSON.parse(readFileSync(cf, "utf-8")); } catch { errs.push(`${a.slug}: bad json`); continue; }
    if (c.skip) { errs.push(`${a.slug}: SKIPPED ${c.skip}`); continue; }
    const p = pool(a.slug);
    const products = c.products.map((k, r) => {
      const it = p.items[k.i];
      return { id: `${a.slug.replace(/^best-/, "").slice(0, 40)}-${r + 1}`, rank: r + 1, badge: k.badge, name: k.name,
        amazonUrl: `https://www.amazon.com/dp/${it.asin}?tag=${TAG}`, imageUrl: it.img, price: it.price || "",
        specs: k.specs, specList: k.specList || [], description: k.description, bestFor: k.bestFor, pros: k.pros, cons: k.cons };
    });
    const toks = a.keyword.toLowerCase().split(/\W+/).filter((t) => t.length > 3);
    const related = existing.filter((s) => s !== a.slug)
      .map((s) => [s, toks.filter((t) => s.includes(t)).length]).filter((x) => x[1] > 0)
      .sort((x, y) => y[1] - x[1]).slice(0, 4).map(([s]) => ({ title: titles[s] || s, href: `/guide/${s}` }));
    let dupN = 0; for (const k of c.products) for (const para of k.description.split(/\n\n/)) { if (paraSeen.has(para)) dupN++; else paraSeen.set(para, a.slug); }
    if (dupN) { errs.push(`${a.slug}: ${dupN} duplicated description paragraphs, NOT BUILT`); continue; }
    const text = JSON.stringify(c);
    const words = text.split(/\s+/).length;
    if (c.metaTitle.length > 48) errs.push(`${a.slug}: metaTitle ${c.metaTitle.length}`);
    if (c.metaDescription.length < 120 || c.metaDescription.length > 160) errs.push(`${a.slug}: metaDesc ${c.metaDescription.length}`);
    if (/[–—【】]/.test(text)) errs.push(`${a.slug}: dash/bracket`);
    if (/\$\d/.test(text)) errs.push(`${a.slug}: price in text`);
    if (/\bwe (tested|tried|measured)\b|in our lab/i.test(text)) errs.push(`${a.slug}: tested-claim`);
    if (c.faq.length < 5 || c.howToChoose.length < 5 || c.buyingCriteria.length < 5) errs.push(`${a.slug}: section count`);
    const spec = { guideSlug: a.slug, guideTitle: c.guideTitle, metaTitle: c.metaTitle, metaDescription: c.metaDescription,
      mainKeyword: a.keyword, categorySlug: CAT[a.cluster] || "", lastUpdated: p.fetchedAt, readTime: `${Math.max(10, Math.round(words / 220))} min`,
      heroImage: products[0].imageUrl, introParagraphs: c.introParagraphs, products, buyingCriteria: c.buyingCriteria,
      howWeEvaluated: c.howWeEvaluated, howToChoose: c.howToChoose, faq: c.faq, relatedGuides: related };
    const sp = resolve(B, "specs", `${a.slug}.json`);
    writeFileSync(sp, JSON.stringify(spec));
    execFileSync("node", ["scripts/build-guide.mjs", sp], { cwd: ROOT });
    built.push(a.slug);
    console.log(`${a.id} ${a.slug} ~${words} words`);
  }
  const fresh = built.filter((s) => !existing.includes(s));
  if (fresh.length) {
    execFileSync("node", ["scripts/register-dynamic-guide.mjs", ...fresh], { cwd: ROOT, stdio: "ignore" });
    execFileSync("node", ["scripts/register-new-guides.mjs", ...fresh], { cwd: ROOT, stdio: "ignore" });
  }
  console.log(`built+registered ${built.length}`);
  if (errs.length) console.log("WARN\n" + errs.join("\n"));
}
