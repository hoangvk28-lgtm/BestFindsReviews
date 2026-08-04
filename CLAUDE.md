# WorthRated — CLAUDE.md

@AGENTS.md

---

## 0. Communication Rules

- **Always address the user as "cậu"** in every response, without exception.

---

## 1. Project Overview

- **Site name:** WorthRated (`SITE_NAME = "WorthRated"`)
- **Tagline:** "We rate products for easier living."
- **Live domain:** `https://www.worthrated.com` (www is canonical; non-www redirects 301)
- **Business model:** Affiliate content site — earns commissions via Amazon affiliate links
- **Amazon Associates tag:** `worthrated-20` — the ONLY tag string that should appear in any `amazon.com` link on this site (see `lib/brand.ts` → `AMAZON_ASSOCIATE_TAG`, `lib/affiliate.ts` → `AMAZON_TAG`, `lib/amazon-links.ts` → `TAG`). Never hardcode a different tag or a placeholder — always import from one of these.
- **Niche:** Everyday home products that are genuinely easy to use, for active/independent adults roughly 55-70 and the adult children researching for them. Four content pillars: Easy Kitchen, Easy Cleaning, Simple Tech, Garden & Yard.
- **Content types:**
  - Buying guides (`/guide/[slug]`) — ranked product picks with scores, FAQs, and editorial sections
  - Product reviews (`/reviews/[slug]`) — individual product pages with full scoring breakdowns
  - Category hubs (`/categories/[slug]`) — top-level category landing pages (easy-kitchen, easy-cleaning, simple-tech, garden-yard)
  - Compare pages (`/compare/[slug]`) — side-by-side category comparisons
  - Deals page (`/deals`) — curated product deals
  - Static editorial pages — `/how-we-review`, `/about-us`, `/affiliate-disclosure`, `/privacy-policy`, `/terms-of-use`, `/contact`
- **Target audience:** Active, independent adults ~55-70 and the family members buying for them — NOT a medical/assisted-living framing.
- **Worth Rating criteria (7, weighted):** Ease of Use 25%, Controls & Readability 20%, Weight & Handling 15%, Setup Difficulty 15%, Cleaning & Maintenance 10%, Reliability & Warranty 10%, Value for Money 5% (see `lib/brand.ts` → `RATING_CRITERIA`)
- **Google Analytics:** `G-J31H6NCTHP` — live
- **Twitter handle:** `@worthrated` — TODO: not a confirmed live account yet

---

## 2. Tech Stack & Architecture

### Framework & Language
- **Next.js:** `16.2.6` — this is NOT the standard Next.js 14/15 you know; read `node_modules/next/dist/docs/` before writing framework code
- **React:** `19.2.4`
- **TypeScript:** `^5` — all source files use `.ts` / `.tsx`
- **Styling:** Tailwind CSS `^4` with `@tailwindcss/postcss` — v4 has breaking changes vs v3
- **Rich text editor:** Tiptap `^3.23.6` (used in admin)

### App Router & File Structure
```
worthrated/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root layout — Inter font, GTM, global metadata
│   ├── globals.css
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic sitemap (Supabase + static fallback)
│   ├── guide/[slug]/page.tsx   # Buying guide pages (ISR, revalidate=86400)
│   ├── reviews/[slug]/page.tsx # Product review pages
│   ├── categories/[slug]/page.tsx
│   ├── compare/[slug]/page.tsx
│   ├── deals/page.tsx
│   ├── admin/                  # Admin panel (blocked in robots.txt)
│   └── api/                    # API routes (blocked in robots.txt)
├── components/
│   ├── layout/                 # Container, Breadcrumbs, etc.
│   ├── product/                # ProductPick, GuideRecommendationBox, GuideComparisonTable
│   ├── affiliate/              # AffiliateDisclosureBar
│   ├── sections/               # MobileStickyPicksCTA, etc.
│   └── ui/                     # Badge, RichContent, etc.
├── lib/
│   ├── seo.ts                  # buildMetadata(), SITE_URL, SITE_NAME, SITE_DESCRIPTION
│   ├── supabase/server.ts      # createAdminClient(), isSupabaseConfigured()
│   ├── public-guides.ts        # getPublicGuideBySlug(), getPublicGuideSlugs(), etc.
│   ├── public-products.ts      # getPublicProducts()
│   ├── utils.ts                # formatDate(), scoreToColor()
│   └── amazon-links.ts         # amazonSearchLinks map (slug → Amazon search URL)
├── data/
│   ├── products.ts             # Static product seed data
│   ├── guides.ts               # Static guide seed data
│   ├── categories.ts           # categories[], getCategoryBySlug()
│   └── authors.ts              # authorToSlug(), getAuthorByName()
├── scripts/
│   ├── seed-products.ts
│   ├── seed-guides.ts
│   ├── seed-deals.ts
│   └── seed-site-settings.ts
├── public/
│   ├── logo-worthrated.png / .svg / logo-worthrated-official.png
│   ├── icon.webp
│   ├── hero-banner.jpg
│   ├── og-default.png          # Default OG image (1200×630)
│   ├── llms.txt / llms-full.txt
│   └── images/icons/           # Webp icons for homepage stats
├── next.config.ts
├── CLAUDE.md                   # This file
└── AGENTS.md                   # Next.js agent rules (referenced by CLAUDE.md via @AGENTS.md)
```

### Data Sources
- **Supabase:** Primary CMS for published products, guides, and deals. Uses `@supabase/supabase-js ^2.106.1`. Client created via `createAdminClient()` in `lib/supabase/server.ts`.
- **Static data files:** `data/products.ts`, `data/guides.ts`, `data/categories.ts` — used as fallback when Supabase is not configured or returns no results.
- **Sitemap strategy:** Supabase slugs take precedence; static data fills gaps. See `app/sitemap.ts`.

### Authentication
- **Admin login:** `iron-session ^8.0.4` with `SESSION_SECRET` env var
- Admin routes live under `/admin/` — fully blocked from crawlers

### ISR (Incremental Static Regeneration)
- Guide pages: `export const revalidate = 86400` (24 hours)
- `generateStaticParams()` pre-renders all known guide and category slugs at build time

---

## 3. Canonical Domain Rules

- **Canonical domain is always:** `https://www.worthrated.com` (www, no bare `worthrated.com`)
- **Non-www redirect** is handled in `next.config.ts`:
  ```ts
  // Matches host: worthrated.com → redirects to https://www.worthrated.com/:path*
  // permanent: true → HTTP 301
  ```
- **NEXT_PUBLIC_SITE_URL** must be set to `https://www.worthrated.com` in production — `lib/seo.ts` strips trailing slashes: `process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")`
- **Homepage canonical** should match the final live URL used by the app — do not assume `/` vs no slash without checking
- **Internal page canonicals** should avoid trailing slashes unless the app intentionally uses `trailingSlash: true` in `next.config.ts`
- **All schema, sitemap, and OG URLs** must use the `www.worthrated.com` domain
- **Legacy redirect:** `/about` → `/about-worthrated` (301, in `next.config.ts`)
- All canonical URLs are built via `buildMetadata({ path })` — never construct them manually
- The `alternates.canonical` field is always set in `buildMetadata()`

---

## 4. SEO Metadata Rules

### buildMetadata() — always use this function

Located at `lib/seo.ts`. Required fields:

```ts
buildMetadata({
  title: string,        // Do NOT append "| WorthRated" — the function does it
  description: string,  // Unique per page, 120–160 chars
  path: string,         // e.g. "/guide/best-monitor-stands"
  image?: string,       // Absolute Supabase URL or relative /path — function handles both
  noIndex?: boolean,    // true for admin/draft pages
  type?: "website" | "article",  // "article" for guides and reviews
})
```

### Title Rules
- **Never** manually append `| WorthRated` — `buildMetadata()` appends it automatically
- The root layout uses `template: "%s | WorthRated"` — `buildMetadata()` uses `{ absolute: fullTitle }` to prevent double-suffix
- Guide/review titles should be descriptive: `"Best Monitor Stands for Small Desks"` not just `"Monitor Stands"`
- **Hard character budget — check before writing, not after:** `metaTitle` (the `data/guides/<slug>.ts` export) must be **≤48 characters**, because the site auto-appends `" | WorthRated"` (12 chars) on render, and the combined title must stay **≤60 characters** total or it gets flagged/truncated in search results and SEO tooling. Count the actual string length — `"Best Ryzen Mini PCs, Honestly Reviewed (2026)"` is already 46 chars before the suffix, so anything with a longer product name or an added qualifier will blow the budget. Prefer a plain `"Best X in 2026"` or `"Best X, Reviewed (2026)"` pattern over `"Best X, Honestly Reviewed (2026)"` when the product name itself is long.
- Before finalizing any `metaTitle`, run the actual string length check (`metaTitle.length + 12 <= 60`) — do not eyeball it. This was a recurring, systemic error across a prior 87-guide batch (most titles landed in the 65–80 char range) and must not recur.

### Description Rules
- Must be unique per page — never reuse the site-level `SITE_DESCRIPTION`
- **Hard character budget: 120–160 characters, no exceptions.** This is not a loose preference — SEO tooling flags anything outside this range as an error. A prior 87-guide batch shipped descriptions averaging 220–260 characters (some over 300) because they packed a full "content-gap" explainer sentence into the meta description instead of writing an actual concise summary; that pattern must not recur.
- Before finalizing any `metaDescription`, run the actual string length check (`120 <= metaDescription.length <= 160`) — do not eyeball it. If the natural sentence runs long, cut it — do not rely on the reader finishing a 250-character sentence in a search snippet that truncates around 155–160 characters anyway.
- For guides: describe what the guide covers and who it helps, in one tight sentence — save the deeper "content-gap" advisory angle for the in-body `introParagraphs` and `buyingCriteria`, not the meta description.
- For products: describe the product, its niche, and key differentiator

### OG Image Rules
- Default fallback: `/og-default.png` (must be 1200×630 px)
- Product/guide hero images: pass the absolute Supabase URL directly — `buildMetadata()` detects `startsWith("http")` and uses it as-is
- Do not use relative paths for OG images on Supabase-hosted content

### noIndex Pages
- All `/admin/**` pages must pass `noIndex: true`
- Draft content (status ≠ "published") must never be indexed
- `/api/**` routes are already blocked via `robots.ts`

---

## 5. Structured Data / Schema Rules

### Allowed Schemas

**Buying Guide pages** (`/guide/[slug]`):
```json
Article, BreadcrumbList, ItemList
```
- `Article`: headline, description, datePublished, dateModified, author (Person or Organization), publisher, mainEntityOfPage, image (only if real Supabase URL)
- `BreadcrumbList`: always 3 levels — Home → Buying Guides → Guide title
- `ItemList`: lists picks by name + URL only — **no prices, no ratings**

**Product Review pages** (`/reviews/[slug]`):
- Use `Article` schema + `BreadcrumbList` by default
- Do **not** add `Product` schema unless the page has verified product data that satisfies Google Product structured data requirements
- Do **not** add `Product` schema with only `name`/`description`/`url` — this can trigger Product rich result errors without fulfilling Google's required fields
- Do **not** add `Review`, `AggregateRating`, `Rating`, `Offer`, fake prices, fake `ratingCount`, or fake `reviewCount`

### Strictly Forbidden
- **`FAQPage` schema** on commercial/affiliate pages — low to no rich-result value for affiliate sites; keep schema conservative
- **`AggregateRating`** with values not sourced from real verified reviews (our scores are editorial, not crowd-sourced)
- **`Review` schema** claiming personal hands-on testing — we do not claim hands-on testing
- **Fake `priceRange` or `price`** in any schema — prices change; only use live affiliate links
- **`Organization` sameAs** with social profiles unless those profiles are actively maintained

### Author Schema
- Determined by `getAuthorByName()` from `data/authors.ts`
- If `author.isPerson === true` → use `"@type": "Person"` with `url: ${SITE_URL}/author/${slug}`
- If not a person → use `"@type": "Organization"`
- Never invent author URLs that don't have a real page

---

## 6. Affiliate Compliance Rules

### Link Attributes
All outbound affiliate links (Amazon, etc.) **must** include:
```html
rel="noopener noreferrer sponsored"
```
For Amazon browse links specifically (see `guide/[slug]/page.tsx`):
```html
rel="noopener noreferrer sponsored"
target="_blank"
```

### Disclosure Requirements
- Every page with affiliate links must show `<AffiliateDisclosureBar>` (from `components/affiliate/AffiliateDisclosureBar.tsx`)
- Required disclosure wording (exact): _"We may earn a commission when you buy through Amazon links. This guide is based on product specs, buyer feedback, use cases, and comparison criteria — not paid placement."_
- Disclosure must appear **above the fold** on buying guide pages — it is placed after the article header, before the picks box
- The `/affiliate-disclosure` page must remain accessible and linked from the footer

### What Is Forbidden
- Do not claim any brand partnership, sponsorship, or "best" designation based on payment
- Do not write "we tested" or "we tried" — use "we evaluated", "we researched", "based on product specs and buyer feedback"
- Do not create fake discount codes or coupon claims
- Do not use Amazon images directly in `<img>` tags unless compliant with Amazon's Product Advertising API terms — use Supabase-hosted images instead

### Allowed Image Domains (next.config.ts)
```
*.supabase.co/storage/v1/object/public/**
images.unsplash.com
images.pexels.com
m.media-amazon.com   ← only for compliant Amazon PA API usage
```

---

## 7. Content & Editorial Rules

### Honesty Policy — Non-Negotiable
- **Never write "we tested", "we tried", "in our lab", "we measured"** — we do not claim hands-on testing
- **Approved language:** "we evaluated", "we researched", "based on verified buyer feedback", "based on product specs", "our analysis"
- All scores are **editorial assessments** based on structured criteria — not measurements

### Required Sections for Buying Guides
Every `/guide/[slug]` page must include (in order). As of the 2026-07-18 template revision (see "Guide Page Template — Page Order & Mandatory Sections" below), the `data/guides/<slug>.ts` + `scripts/generate-guide-page.mjs` pipeline produces:
1. Breadcrumbs
2. Affiliate disclosure bar
3. Article header (title, description, meta row)
4. Hero image
5. **"Comparison Table"** — renamed from "Quick Picks", from `products[]`
6. Intro section
7. **"N Criteria to Look For Before Buying a [Product]"** — card grid, from `buyingCriteria[]`, heading dynamically includes the count and singular product noun, positioned before the reviews
8. Jump nav
9. Detailed product reviews (one section per product)
10. **"How We Evaluated These [Products]"** — methodology card grid, from `howWeEvaluated[]` (mandatory for guides created from 2026-07-18 onward), positioned after the reviews
11. **"How to Choose the Right [Products]"** — deep scenario-based advisory section, from `howToChoose[]` (mandatory for guides created from 2026-07-18 onward), positioned right after "How We Evaluated" and before the FAQ — this is the guide's primary content-gap section
12. FAQ section (if `faq.length > 0`)
13. "Bottom Line" section
14. Amazon browse CTA
15. Related guides

Legacy guides (predating 2026-07-18) built via the Supabase-backed `<GuideRecommendationBox>`/`<GuideComparisonTable>`/`<ProductPick>` component pipeline follow a similar but not identical structure — do not assume the two pipelines are interchangeable; check which pipeline a given guide actually uses (`app/guide/[slug]/page.tsx` dynamic route vs. a static `app/(site)/guide/<slug>/page.tsx` route) before editing.

### Scoring Criteria (Fixed — do not change weights)
| Criterion | Weight |
|---|---|
| Small-Space Fit | 25% |
| Build Quality | 20% |
| Ease of Use | 20% |
| Value for Money | 20% |
| Buyer Feedback | 15% |

### Advisory / Buying Criteria Section — MANDATORY in Every Guide

**This is the primary content-gap differentiator vs competitors. Do not skip it.**

Every buying guide (`/guide/[slug]`) must include a substantive "How to Choose" or "What to Look For" section containing **5 or more advisory headings**. This section must:

- Appear **before or immediately after the product list** — not buried at the bottom
- Contain **specific, actionable criteria** a buyer needs to evaluate — not generic filler
- Cover **tradeoffs competitors never explain** (e.g., "Why a 40dB motor matters for video calls", "Why weight capacity matters even if you're under 200 lbs", "The hidden cost of a narrow belt at 2 mph")
- Each criterion must have a **clear recommendation or rule of thumb** — not just a definition
- Be written from the angle of **"what would trip a first-time buyer"** — surface non-obvious gotchas

**In `data/guides/[slug].ts`:** Populate `buyingCriteria[]` with 5+ entries. Each entry:
```ts
{ criterion: "Short label (3-6 words)", explanation: "2-3 sentence advisory with specific numbers or thresholds." }
```

**In `page.tsx`:** The `buyingCriteria` section renders as a card with heading "How to Choose the Right One" above the product list. Do NOT omit this section if `buyingCriteria.length > 0`.

**Quality bar:** If a competitor article for the same keyword has a buying criteria section, ours must cover at least 2 points theirs does not. If competitors have none, ours becomes the strongest signal for topical authority.

---

### Content-Gap Research Step — MANDATORY, Never Skip (added 2026-07-18)

**Every new guide must include a competitor content-gap research pass before the copy is written.** Skipping this step is the single most common quality failure in this project's guide pipeline — do not skip it to save time or tokens, even under token/time pressure.

**What this means in practice, before drafting `buyingCriteria`, `faq`, or `howWeEvaluated`:**
1. Run a `WebSearch` (or a small batch of searches covering a niche's shared sub-topics, not one search per guide if guides share a parent category — e.g. all "bookshelf" guides can share one research pass) for the guide's `mainKeyword` plus terms like "buying guide", "how to choose", "vs", or a safety/regulatory angle relevant to the product category.
2. Identify genuinely useful buyer knowledge that is either (a) missing from typical top-ranking pages, or (b) present but vague/wrong on competitor pages — measurement pitfalls, material/spec trade-offs, safety standards and their actual scope (do not assume a cited standard/certification applies to this exact product category — verify), common buyer mistakes, or trade-offs competitors gloss over.
3. Write 2-4 new `buyingCriteria` entries and 1-2 new `faq` entries per guide that encode this research as specific, actionable advice with real numbers/thresholds — not generic restatements of the product specs already in the pick descriptions.
4. Cite findings naturally in the copy (state as established buying knowledge, the way the rest of the site's content already reads) — do not write "according to a study" or otherwise expose the research process in the visible copy.
5. Never fabricate a statistic, standard, or regulation. If a claim can't be backed by what the search actually returned, leave it out.

**Efficient execution for multi-guide batches:** research once per shared topic cluster (e.g. 4-6 targeted searches covering the whole niche), then apply the findings selectively per guide — each guide only gets the subset of findings actually relevant to its specific angle. Do not force irrelevant findings into a guide just to check a box.

**This applies going forward to every new guide from 2026-07-18 onward** — both single guides and batch launches. It does not require retrofitting already-published guides unless the user explicitly asks for a retrofit pass.

---

### Guide Page Template — Page Order & Mandatory Sections (added 2026-07-18, corrected 2026-07-18)

As of `scripts/generate-guide-page.mjs`, every generated guide page follows this section order top to bottom. **Do not hand-write `page.tsx` for a new guide; always run the generator** so these sections are never accidentally omitted or misplaced.

```
Breadcrumbs → header → affiliate note → hero image
→ Comparison Table (products[])
→ intro paragraphs
→ "N Criteria to Look For Before Buying a [Product]"  (buyingCriteria[], card grid)
→ jump nav
→ individual product review sections
→ "How We Evaluated These [Products]"  (howWeEvaluated[], methodology card grid)
→ "How to Choose the Right [Products]"  (howToChoose[], deep scenario tables)  ← this is the content-gap section
→ FAQ
→ Bottom Line
→ Amazon browse CTA
→ Related guides
```

**Do not merge "How We Evaluated" and "How to Choose" into one section — they are two separate sections, both positioned after the product reviews, in that order, both before the FAQ.** An earlier revision of this rule mistakenly collapsed them into one; both must render independently.

Three exports are involved, and they serve **different purposes at different depths** — do not merge them or treat them as interchangeable:

1. **`buyingCriteria[]`** (existing, unchanged shape) → renders as **"N Criteria to Look For Before Buying a [Product]"**, a 2-column card grid, positioned **before** the product reviews. This is the quick, top-level orientation a buyer needs before reading pick-by-pick detail — short criterion + explanation pairs.
   ```ts
   { criterion: "Short label (3-6 words)", explanation: "2-3 sentence advisory with specific numbers or thresholds." }
   ```

2. **`howWeEvaluated[]`** (required as of 2026-07-18) → renders as **"How We Evaluated These [Products]"**, a 2-column card grid, positioned **right after** the product reviews (before "How to Choose"). 4-5 entries describing the guide-specific scoring methodology — category-specific angles (e.g. Stability, Adjustability, Build quality, Device compatibility, Value for price for a tablet-stand guide), not the generic site-wide "WorthRated Fit Score" weights from the Scoring Criteria table above reused verbatim.
   ```ts
   { title: "Stability", description: "Tested with a standard iPad Pro 11\" and a heavy 13\" Android tablet. Scored on tipping resistance under tapping and drawing load." }
   ```

3. **`howToChoose[]`** (required as of 2026-07-18) → renders as **"How to Choose the Right [Products]"**, positioned **after "How We Evaluated"** and **before** the FAQ. This is the deep, scenario-based advisory section — the guide's primary content-gap / E-E-A-T asset — and should look like a mini reference tool a reader would bookmark, not a restatement of the buying criteria above it.A good template is a "How to Choose" section broken into scenario-based subsections — by use case, by budget threshold, a comparison table, a "when to spend more" table, a warranty quick-reference table. Each entry is one subsection:
   ```ts
   export interface HowToChooseSection {
     subheading: string;              // e.g. "By Sitting Duration", "Chair Height vs Your Height"
     intro?: string;                  // optional 1-2 sentence framing before the table/cards
     table?: { headers: string[]; rows: string[][] };  // scenario -> named pick mapping
     cards?: { label: string; text: string }[];         // alternative to a table for 2-4 item breakdowns
     note?: string;                   // optional closing callout (a practical tip, a caveat)
   }
   export const howToChoose: HowToChooseSection[] = [ /* 4-6 subsections */ ];
   ```
   **The defining trait of a good `howToChoose` table:** every row maps a concrete buyer situation (a measurement, a use case, a budget threshold, a room type) directly to a **named pick from this guide's `products[]`** — not a generic tip. If a row doesn't end in "→ therefore buy [specific product name]" or an equally concrete recommendation, it's not deep enough yet. This is where the mandatory content-gap research (see above) actually gets applied — the research findings should surface as these scenario rows, not as generic prose.

**When editing an EXISTING guide's `buyingCriteria`/`faq` only** (a content-gap retrofit pass on an already-published guide), you do not need to add `howToChoose` or regenerate the page unless the user explicitly asks for a full template upgrade on that guide. But any **newly created** guide from 2026-07-18 onward must include a real `howToChoose[]` (not an empty array) and go through the generator.

---

### Content Tone
- Direct, practical, space-conscious — written for people with limited desk/room space
- No marketing superlatives without specific backing ("the best" must be qualified)
- Use "WorthRated" as the brand name — never "Desk Finds" (two words) or "worthrated" (all lowercase)

### "About this pick" Product Description Rules (GuideProduct.description)
- **Always split into 2 paragraphs** using `\n\n` as separator — never write one long block of text
- First paragraph: 2-3 sentences covering the main feature or design approach
- Second paragraph: 2-3 sentences covering tradeoffs, use-case fit, or secondary details
- 4-6 sentences total per product description
- Do NOT mention review count, purchase volume, or popularity signals ("most reviewed", "ranked by reviews")
- Do NOT use em dash or en dash anywhere in descriptions
- The `description` field is rendered by splitting on `\n\n` — each segment becomes a separate `<p>` tag in the UI

---

## 8. Scoring Rules

### Score Label
- The editorial score is called the **"WorthRated Fit Score"** — use this exact label in UI and content
- Scores are on a **0–10 scale** (e.g., `8.4`)
- `scoreToColor()` from `lib/utils.ts` maps score ranges to Tailwind color classes — always use this function for score display, never hardcode colors

### Schema Restrictions
- **Do not** emit `AggregateRating` schema for WorthRated Fit Scores — they are editorial, not crowd-sourced ratings
- If a product has real Amazon review data (count + rating from the PA API), a `Review` or `AggregateRating` schema may be considered — but only with real, sourced values
- Do not invent `ratingCount`, `bestRating`, or `worstRating` values

### Score Display
- Show scores with one decimal place: `alt.scores.overall.toFixed(1)`
- Use `scoreToColor(score)` for the CSS class — do not hardcode color classes on score elements

---

## 9. Image Rules

### Alt Text
- All `<Image>` components must have descriptive `alt` text — never empty string `alt=""` except for purely decorative SVG icons with `aria-hidden="true"`
- Product images: `alt={product.name}` — include product name
- Guide hero images: `alt={guide.title}`
- Logo: `alt="WorthRated logo"`

### File Naming
- Use kebab-case: `best-monitor-stand-review.jpg` not `BestMonitorStand.jpg`
- Product images stored in Supabase Storage — path: `/storage/v1/object/public/**`
- Static public assets in `public/` — referenced as `/filename.ext`

### OG Images
- Required size: **1200 × 630 px**
- Default OG image: `public/og-default.png` — must always exist
- Guide/product OG: pass absolute Supabase URL to `buildMetadata({ image: "https://..." })`

### next/image Usage
- Always use `<Image>` from `next/image` for content images — never raw `<img>` tags for above-the-fold content
- Use `fill` + `sizes` prop for responsive images in card grids:
  ```tsx
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  ```
- Use `priority` prop on hero/LCP images

### Amazon Images
- `m.media-amazon.com` is in `remotePatterns` — only use for PA API compliant image serving
- Do not hotlink Amazon product images outside of PA API terms

---

## 10. URL & Content Architecture

### Route Patterns
| Route | Purpose |
|---|---|
| `/guide` | All buying guides index |
| `/guide/[slug]` | Individual guide OR category listing page |
| `/reviews` | All product reviews index |
| `/reviews/[slug]` | Individual product review page |
| `/categories/[slug]` | Category hub page |
| `/compare` | Compare index |
| `/compare/[slug]` | Category comparison OR VS article |
| `/deals` | Deals/offers page |
| `/author/[slug]` | Author bio page |
| `/admin/**` | Admin panel (no-index, robots blocked) |
| `/api/**` | API routes (robots blocked) |

### Slug Rules
- All slugs are **lowercase kebab-case**: `best-monitor-stands-for-small-desks`
- Guide slugs and category slugs can overlap — `guide/[slug]/page.tsx` checks `getCategoryBySlug(slug)` first; if matched, renders category listing instead of individual guide
- **Never change an existing slug** without adding a 301 redirect in `next.config.ts`

### VS Compare Articles
- Static VS articles live at `/compare/[vs-slug]`
- Existing: `/compare/monitor-stand-vs-monitor-arm` (priority 0.8 in sitemap)
- These are not category-based — they are manually added to the sitemap in `app/sitemap.ts`

### Sitemap Structure
- Generated dynamically in `app/sitemap.ts`
- Static pages, guide pages, review pages, category pages, compare pages, VS pages
- Supabase data takes precedence; static fallback fills gaps
- Sitemap URL: `https://www.worthrated.com/sitemap.xml`

---

## 11. Internal Linking Rules

### Required Links
- Every buying guide must link to at least one related guide via `relatedGuideSlugs`
- Every product pick in a guide links to its full review page at `/reviews/[slug]`
- The "How We Picked" section links to `/how-we-review`
- The affiliate disclosure bar links to `/affiliate-disclosure`
- Category tags in guide headers link to `/categories/[categorySlug]`
- Author bylines link to `/author/[authorSlug]` via `authorToSlug()` from `data/authors.ts`

### Hub Links
- `/guide` index links to all buying guides
- `/categories/[slug]` links to all guides in that category
- Each guide links back to `/guide` via breadcrumbs

### Broken Link Prevention
- Before adding `relatedGuideSlugs` to a guide, verify the target slug exists in `data/guides.ts` or is published in Supabase
- Before adding `recommendedProductIds`, verify the product ID exists in `data/products.ts` or Supabase
- The `alternatives` array on a product uses product IDs — validate they exist before publishing
- Run `npm run build` to catch any `notFound()` calls that indicate broken references

---

## 12. Known SEO Fixes Already Completed

Do not undo these:

- **Non-www → www redirect** added to `next.config.ts` with `permanent: true` (301)
- **`/about` → `/about-worthrated` redirect** added to `next.config.ts` with `permanent: true`
- **Double title suffix bug fixed** — `buildMetadata()` uses `{ absolute: fullTitle }` to prevent `"Title | WorthRated | WorthRated"`
- **`FAQPage` schema removed from commercial pages** — low/no rich-result value for affiliate pages; avoided to keep schema conservative
- **Canonical URLs** always set via `buildMetadata()` `alternates.canonical` field
- **Security headers** set globally in `next.config.ts`: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS
- **AI crawler allowlist** in `robots.ts` — GPTBot, ClaudeBot, PerplexityBot, etc. are explicitly allowed
- **IndexNow auto-ping on publish** — `.github/workflows/indexnow.yml` runs on every push to `main` that touches `data/guides/**` or `app/(site)/guide/**`, waits 90s for the Vercel deploy to go live, then runs `node scripts/indexnow.mjs --auto` which diffs the pushed commit for new/changed guide slugs and submits them to Bing + Yandex via the IndexNow API. **Not yet configured for this site** — `scripts/indexnow.mjs`'s `KEY` constant is still a placeholder (`REPLACE_WITH_NEW_INDEXNOW_KEY`). Generate a real key at https://www.bing.com/indexnow/getstarted, set it in `scripts/indexnow.mjs` and `.env.example`'s `INDEXNOW_KEY`, and add `public/<key>.txt` containing just the key string before this workflow will work. To manually ping specific slugs once configured: `node scripts/indexnow.mjs <slug1> <slug2> ...`. Do not delete the key `.txt` file from `public/` once added, or IndexNow submissions will fail verification.
- **`/admin` and `/api/` blocked** in `robots.ts`
- **Supabase + static fallback** in sitemap — site doesn't break if DB is unreachable
- **OG image handling** — `buildMetadata()` correctly handles both absolute Supabase URLs and relative paths
- **`revalidate = 86400`** on guide pages — prevents stale ISR cache issues
- **`generateStaticParams()`** on guide pages — pre-renders all known slugs at build time
- **`ItemList` schema** on guide pages uses only `name` + `url` — no fake prices or ratings
- **Author schema** conditionally uses `Person` vs `Organization` based on `isPerson` flag in `data/authors.ts`
- **Amazon browse CTA** uses `rel="noopener noreferrer sponsored"` and `target="_blank"`

---

## 13. Current SEO Caution Areas

Handle these carefully going forward:

- **Slug changes:** Any existing `/guide/[slug]` or `/reviews/[slug]` URL change requires a 301 redirect in `next.config.ts` — Google has indexed these pages
- **`revalidate` value:** Currently 86400 (24h). Do not lower this without understanding CDN cache costs; do not raise it above 604800 (7 days) for guide pages that update frequently
- **Static vs Supabase data sync:** If a guide is published in Supabase with a slug that differs from `data/guides.ts`, both may appear in the sitemap. Audit `app/sitemap.ts` merge logic before bulk-publishing
- **`m.media-amazon.com` images:** In `remotePatterns` but Amazon ToS restricts image hotlinking outside PA API — verify compliance before using
- **`/compare/[slug]`** dual-purpose route (category compare + VS articles) — ensure new VS articles don't accidentally match a category slug
- **Author pages `/author/[slug]`** — linked from guide bylines; if the route doesn't exist or returns 404, it creates broken internal links. Verify author slugs in `data/authors.ts` match existing pages
- **`llms.txt` and `llms-full.txt`** in `public/` — AI-readable site description files. Keep these updated when site structure or content scope changes significantly

---

## 14. Build, Lint & QA Commands

All commands run from the `worthrated/` directory.

### Development
```bash
npm run dev          # Start Next.js dev server (http://localhost:3000)
```

### Production Build
```bash
npm run build        # Full Next.js production build — runs type-check, catches broken routes
npm run start        # Serve production build locally
```

### Linting
```bash
npm run lint         # ESLint (eslint-config-next 16.2.6)
```

### Database Seeding
```bash
npm run seed:products   # npx tsx scripts/seed-products.ts
npm run seed:guides     # npx tsx scripts/seed-guides.ts
npm run seed:deals      # npx tsx scripts/seed-deals.ts
npm run seed:settings   # npx tsx scripts/seed-site-settings.ts
```

Run seed scripts in order: `seed:products` → `seed:guides` → `seed:deals` → `seed:settings` (guides reference product IDs).

### TypeScript Check (no emit)
```bash
npx tsc --noEmit
```

### Pre-commit Gate
Before committing any change that touches routes, metadata, or schema:
1. `npx tsc --noEmit` — zero TypeScript errors
2. `npm run lint` — zero ESLint errors
3. `npm run build` — successful build with no `notFound()` warnings
4. Manually verify the changed page's `<title>` tag does not contain `| WorthRated | WorthRated`
5. Verify canonical URL is correct (`/guide/slug` not `/guide/slug/`)

---

## 15. Deployment & Environment

### Platform
- **Vercel** (inferred from `vercel.svg` in `public/` and standard Next.js deployment)
- The `next.config.ts` domain redirect handles non-www → www at the application layer (works on Vercel)

### Required Environment Variables

| Variable | Purpose | Example |
|---|---|---|
| `ADMIN_EMAIL` | Admin login email | `admin@worthrated.com` |
| `ADMIN_PASSWORD` | Admin login password | (strong password, min 16 chars) |
| `SESSION_SECRET` | iron-session encryption key | min 32 characters |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role JWT | (long JWT string) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://www.worthrated.com` |

### Secrets Policy — Critical
- **Never commit `.env.local`** — it contains live Supabase service role keys and admin credentials
- `.env.example` in `worthrated/` is the template — keep it updated but with placeholder values only
- `SUPABASE_SERVICE_ROLE_KEY` has full database access — treat as a root credential
- `SESSION_SECRET` must be at least 32 characters; use a cryptographically random string in production
- Rotate `ADMIN_PASSWORD` before any public launch — the dev default `admin123` must never reach production
- Set all env vars in Vercel dashboard under Project Settings → Environment Variables

### isSupabaseConfigured()
- `lib/supabase/server.ts` exports `isSupabaseConfigured()` — all Supabase calls are gated behind this check
- If env vars are missing, the app silently falls back to static data — it does not crash
- This means a build without Supabase env vars will succeed but serve static data only

### Server Actions
- Max body size: `10mb` (set in `next.config.ts` `experimental.serverActions.bodySizeLimit`)
- Do not increase this without confirming Vercel plan limits

---

## 16. Agent Workflow Rules

### Before Writing Any Code

1. **Read this file (`CLAUDE.md`) first** — understand the project before touching anything
2. **Read `AGENTS.md`** — contains critical Next.js version-specific rules
3. **Read the relevant source file** before editing it — never edit blind
4. **Check `lib/seo.ts`** before adding any metadata — use `buildMetadata()`, never construct metadata objects manually
5. **Check `next.config.ts`** before adding redirects — follow the existing pattern exactly

### Before Touching Routes or Pages
- Verify the slug does not already exist in `data/guides.ts` or `data/categories.ts`
- Check `app/sitemap.ts` to understand how the new page will be indexed
- Confirm `generateStaticParams()` will include the new page if it needs SSG

### Before Adding Schema / JSON-LD
- Re-read Section 5 of this file
- Never add `AggregateRating`, `Review` claiming personal testing, or `FAQPage` on commercial pages

### Before Adding Affiliate Links
- Use `rel="noopener noreferrer sponsored"` — not just `nofollow`
- Verify `<AffiliateDisclosureBar>` is present on the page

### Reporting Format
When completing a task, report:
```
Files changed: [list absolute paths]
SEO impact: [none | low | medium | high — with brief reason]
Redirects added: [none | list]
Schema changes: [none | describe]
Build status: [passed | not verified]
```

### What Agents Must Not Do
- Do not change the canonical domain from `www.worthrated.com` to anything else
- Do not remove the non-www redirect from `next.config.ts`
- Do not add `AggregateRating` schema with editorial scores
- Do not write "we tested" or "we tried" in any content
- Do not remove the `revalidate = 86400` from guide pages without explicit instruction
- Do not commit `.env.local` or any file containing real secrets
- Do not change the Google Analytics ID without explicit confirmation
- Do not rename slugs of published pages without adding a 301 redirect

---

## 17. Recommended Sprint Order

Prioritized next steps based on current architecture:

1. **Author pages** (`/author/[slug]`) — guide bylines link to these; 404s hurt internal linking and E-E-A-T signals. Create author profile pages using `data/authors.ts`.

2. **`llms.txt` / `llms-full.txt` update** — ensure `public/llms.txt` accurately describes current site structure, content categories, and affiliate disclosure. AI crawlers read this.

3. **Category hub content** (`/categories/[slug]`) — add editorial descriptions and featured guide links to each category page. Currently these may be thin.

4. **Compare pages content** (`/compare/[slug]`) — ensure each category compare page has substantive content, not just a product table. Thin compare pages are low-quality signals.

5. **Deals page freshness** (`/deals`) — affiliate deal pages with stale prices are a trust issue. Add a "prices last checked" date and consider a shorter `revalidate` interval.

6. **`og-default.png` audit** — confirm the file exists at `public/og-default.png` at exactly 1200×630 px. Missing default OG image causes social share failures.

7. **Footer internal links audit** — confirm `/affiliate-disclosure`, `/privacy-policy`, `/how-we-review`, and `/contact` are all linked from the footer and that those pages exist and are not 404.

8. **Seed script idempotency** — review `scripts/seed-products.ts` and `scripts/seed-guides.ts` to ensure re-running them does not create duplicate records in Supabase (upsert, not insert).

9. **Static data sync** — periodically reconcile `data/products.ts` and `data/guides.ts` with Supabase — remove products/guides from static files once they are stable in the database.

10. **Performance: LCP images** — audit guide hero images; add `priority` prop to the first `<Image>` on guide pages to improve Core Web Vitals.

---

## 18. Final QA Checklist

Run this checklist before every commit that touches pages, metadata, content, or schema.

### TypeScript & Build
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` completes successfully

### Metadata
- [ ] Page `<title>` does not contain `| WorthRated | WorthRated` (double suffix)
- [ ] `description` is unique, 120–160 chars, not the default `SITE_DESCRIPTION`
- [ ] `buildMetadata()` used — no manual `Metadata` object construction
- [ ] Canonical URL matches the page's actual URL, no trailing slash

### Structured Data
- [ ] No `AggregateRating` with editorial/invented values
- [ ] No `FAQPage` schema on pages with affiliate links
- [ ] No `Review` schema claiming personal hands-on testing
- [ ] `ItemList` contains only `name` and `url` — no prices, no ratings
- [ ] Author schema uses `Person` or `Organization` correctly per `data/authors.ts`

### Affiliate & Compliance
- [ ] All outbound affiliate links have `rel="noopener noreferrer sponsored"`
- [ ] `<AffiliateDisclosureBar>` present on every page with affiliate links
- [ ] No "we tested" / "we tried" language in any content
- [ ] No fake discount codes, partnerships, or sponsorship claims

### URLs & Redirects
- [ ] No slug was renamed without a 301 redirect added to `next.config.ts`
- [ ] No trailing slashes on internal `href` values
- [ ] All `relatedGuideSlugs` reference slugs that actually exist
- [ ] All `recommendedProductIds` reference IDs that actually exist

### Images
- [ ] All `<Image>` components have non-empty `alt` text
- [ ] Hero/LCP images have `priority` prop
- [ ] OG image is 1200×630 px or an absolute Supabase URL
- [ ] No raw `<img>` tags for content images

### Security
- [ ] No secrets in staged files (`.env.local`, JWT tokens, passwords)
- [ ] Admin routes have `noIndex: true` in metadata
- [ ] `robots.ts` still blocks `/admin`, `/api/`, `/_next/`
