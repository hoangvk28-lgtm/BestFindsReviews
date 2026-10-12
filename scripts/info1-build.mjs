// Converts the WordPress-ready senior info guides (scripts/info1/index.json + meta.json)
// into data/guides/<slug>.ts modules with kind = "info", then registers them in the
// dynamic registry and data/guides.ts. Usage: node scripts/info1-build.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const I = resolve(ROOT, "scripts/info1");
const index = JSON.parse(readFileSync(resolve(I, "index.json"), "utf-8"));
const meta = JSON.parse(readFileSync(resolve(I, "meta.json"), "utf-8"));
const registry = readFileSync(resolve(ROOT, "data/guides.ts"), "utf-8");
const existing = new Set(readdirSync(resolve(ROOT, "data/guides")).map((f) => f.replace(/\.ts$/, "")));
const titles = Object.fromEntries([...registry.matchAll(/title: "([^"]+)",\s*\n\s*slug: "([^"]+)"/g)].map((m) => [m[2], m[1]]));
const today = new Date().toISOString().slice(0, 10);
const built = [], report = { unlinked: 0, linked: 0, imgsDropped: 0, noImage: [] };

for (const a of index) {
  const m = meta[a.slug];
  if (!m) { console.log("no meta", a.slug); continue; }
  const raw = readFileSync(resolve(ROOT, "..", "Roo-Code-main/bestfindsreviews", a.file), "utf-8");
  let html = (raw.match(/<article>([\s\S]*)<\/article>/) || [, raw])[1];
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, "").replace(/<p><strong>Suggested slug:<\/strong>[\s\S]*?<\/p>/, "");
  // Drop rate-limited Unsplash download images (figure blocks)
  html = html.replace(/<figure>(?:(?!<\/figure>)[\s\S])*unsplash\.com\/photos(?:(?!<\/figure>)[\s\S])*<\/figure>/g, () => { report.imgsDropped++; return ""; });
  // Internal links: /slug/ -> /guide/slug when it exists, otherwise keep the text only
  const related = [];
  html = html.replace(/<a([^>]*)href="\/([^"\/#?]+)\/?"([^>]*)>([\s\S]*?)<\/a>/g, (all, pre, slug, post, text) => {
    if (existing.has(slug)) {
      report.linked++;
      if (!related.some((r) => r.href === `/guide/${slug}`)) related.push({ title: titles[slug] || text.replace(/<[^>]+>/g, ""), href: `/guide/${slug}` });
      return `<a href="/guide/${slug}">${text}</a>`;
    }
    report.unlinked++;
    return text;
  });
  // External links: never pass link equity, open in new tab
  html = html.replace(/<a([^>]*)href="(https?:\/\/[^"]+)"[^>]*>/g, (all, pre, url) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">`);
  html = html.replace(/\s*—\s*/g, ", ").replace(/–/g, "-").replace(/\n{2,}/g, "\n").trim();
  const img = (html.match(/<img[^>]*src="([^"]+)"/) || [])[1];
  if (!img) report.noImage.push(a.slug);
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const mod = {
    kind: "info", guideSlug: a.slug, guideTitle: a.title, metaTitle: m.metaTitle, metaDescription: m.metaDescription,
    mainKeyword: a.slug.replace(/-(guide|guides)$/, "").replace(/-/g, " "), categorySlug: "",
    heroImage: img ? img.replace(/&amp;/g, "&") : "/og-default.png", lastUpdated: today, readTime: `${Math.max(8, Math.round(words / 220))} min`,
    html, relatedGuides: related.slice(0, 4),
  };
  const ts = Object.entries(mod).map(([k, v]) => `export const ${k} = ${JSON.stringify(v)}${k === "kind" ? " as const" : ""};`).join("\n") + "\n";
  writeFileSync(resolve(ROOT, "data/guides", `${a.slug}.ts`), ts);
  if (!registry.includes(`slug: "${a.slug}"`)) built.push(a.slug);
}
if (built.length) {
  execFileSync("node", ["scripts/register-dynamic-guide.mjs", ...built], { cwd: ROOT, stdio: "ignore" });
  execFileSync("node", ["scripts/register-new-guides.mjs", ...built], { cwd: ROOT, stdio: "ignore" });
}
console.log(`written ${index.length}, newly registered ${built.length}`, JSON.stringify({ ...report, noImage: report.noImage.length }));
