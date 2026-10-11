# Batch 9 writer instructions (WorthRated)

Site: WorthRated. Everyday home products that are genuinely easy to use, for active, independent adults ~55-70 and the adult children buying for them (not a medical framing). Brand name "WorthRated".

## Inputs
- `scripts/batch9/briefs/<range>.md`: per article, the keyword data plus a numbered Amazon product list `[i]` (title, brand, feature bullets). This is your ONLY product data source.
- Quality reference: `data/guides/best-shark-robot-vacuums.ts`. Read it ONCE per run, only to calibrate depth and tone. Do not copy its sentences.
- Research notes: `scripts/batch9/research/<seed-keyword-slug>.md`. If a note exists for the article's Seed, reuse it. If none exists, run 1-3 WebSearch queries for the seed (buying guide, how to choose, common mistakes, safety), then write the note (10-20 bullet findings, real facts only). One note per Seed, shared by all its articles.

## Output
For each article write `scripts/batch9/content/<slug>.json` with the Write tool. Finish one article completely before starting the next. Do not read other repo files.

```json
{
 "guideTitle": "N Best <Topic> in 2026",
 "metaTitle": "<= 48 chars (site appends ' | WorthRated')",
 "metaDescription": "120-160 chars, count it",
 "introParagraphs": ["3-4 sentences", "3-4 sentences", "2-3 sentences"],
 "products": [{
   "i": 0, "badge": "Best Overall", "name": "Brand + model, <= 60 chars",
   "specs": ["3-5 short spec chips, <= 6 words each, real facts from the brief"],
   "specList": [{"label": "Wattage", "value": "1050W"}],
   "description": "para1\n\npara2\n\npara3",
   "bestFor": "one sentence",
   "pros": ["4 short specific clauses, 40-90 chars, never padded with filler like \"in everyday use\""], "cons": ["2-3 short specific clauses, 40-90 chars"] }],
 "buyingCriteria": [{"criterion": "3-6 word label", "explanation": "..."}],
 "howWeEvaluated": [{"title": "...", "description": "..."}],
 "howToChoose": [{"subheading": "...", "intro": "...", "table": {"headers": [], "rows": [[]]}, "cards": [{"label": "", "text": ""}], "note": "..."}],
 "faq": [{"q": "...", "a": "..."}]
}
```

## Depth bar (mandatory, this is what the user checks)
- **products**: 5-6 picks chosen by `i` (brand-named articles may use 4 if exactly 4 distinct true matches exist). Skip off-topic items (accessories, wrong product type, duplicate listings). Distinct badges.
- **description**: exactly 3 paragraphs, 8-10 sentences total. P1: design and main features with real specs. P2: tradeoffs and who it fits. P3: ownership reality (setup, refills, storage, cleaning, weight, cord, controls) plus at least one comparison naming a sibling pick by name and number, for example "at 1500W it outputs more than the Comforday at 1050W".
- **buyingCriteria**: 6 entries. Each explanation 4-5 sentences: why it matters, what to look for with thresholds, and at least one sentence naming real picks from this lineup with their real numbers.
- **howWeEvaluated**: 5 entries, each 3-4 sentences, category-specific. At least one entry names the lineup positioning (which pick leads on which spec).
- **howToChoose**: 6 subsections in this order, every row and card naming an exact pick `name`:
  1. "By <primary attribute>", a table mapping situation to pick to reason (4-5 rows).
  2. "By Budget", a table with relative tiers (entry, mid, premium). No dollar figures.
  3. "<Option A> vs <Option B>", 2 cards. Each card explains the real mechanism and lists which picks fall on that side, then a one-line who-should-pick-which note.
  4. A secondary decision axis specific to the category, as a table.
  5. "For <common use case> Specifically", 2 cards: "Look for" and "In this comparison".
  6. "When to Spend More", a table with headers ["Spend more if", "Save if"], reasons tied to named picks.
- **faq**: 6-7 entries, each answer 3-4 sentences. Cover choose-between, budget, maintenance and durability, a common misconception, and category-specific gotchas from research.
- **Length target**: each article should land around 3,000 words of content (2,900 minimum).
- **Self-check before writing each file**: pick 3 sentences from buyingCriteria and howToChoose. Each must contain a real product name and a real number. If not, rewrite.

## Hard rules
- No prices or dollar figures anywhere. No star ratings, review counts or popularity claims.
- Never write "we tested", "we tried", "we measured" or "in our lab". Use "we evaluated", "based on product specs and buyer feedback".
- No em dash or en dash. No 【】 brackets, ALL-CAPS lead-ins or pasted bullet text. Rewrite everything in your own reviewer voice.
- Never invent a spec that is not in the brief. If a number is unknown, do not state one.
- If the brief lacks true matches (for example brand-named keywords with no products from that brand), do not pad with other products. Write `{"skip": "reason"}` as the file content instead.
- Valid JSON with escaped quotes.
- Final reply: only the slugs written, slugs skipped with reasons, and the research notes created. No summaries.
