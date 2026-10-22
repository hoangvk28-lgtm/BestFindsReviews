# Batch 14 writer instructions (WorthRated, Keyword senior 22.11)

Repo: /home/admin1/Downloads/AGENT/projects/BestFindsReviews. You write guide CONTENT JSON only; a script assembles the page.

## Inputs
- Your brief file (path given in your task): one `## <id> <slug>` block per guide with keyword, angle, and the candidate products `[i] title | brand` + features (+ "known specs" from an existing WorthRated guide when the ASIN was reviewed before: adapt those facts, never copy sentences).
- Research notes: `scripts/batch14/research/<group>.md`. If the file for your guide's product group does not exist yet, create it FIRST: run 3-5 WebSearch queries (e.g. "<product> buying guide", "how to choose <product>", "<product> for seniors", a safety/standard angle) and write 8-15 bullet findings with concrete numbers/thresholds that typical top pages miss or get vague. Never invent stats; only what searches returned. Reuse the file for every guide in that group.
- Do NOT read CLAUDE.md, other content files, or example guides: everything you need is in this file and your brief.
- Research notes are prepared in advance; do NOT run WebSearch unless the group's file is missing.
- "price rank" in the brief is for the By Budget table and relative wording only (never state prices).

## Output
For each guide write `scripts/batch14/content/<slug>.json`:
```
{ "guideTitle": "6 Best <Products> <Modifier> (2026)",          // must contain "(2026)"; use actual product count
  "metaTitle": "...",            // <= 48 chars, COUNT IT
  "metaDescription": "...",      // 120-160 chars, COUNT IT
  "introParagraphs": [3 paragraphs, naming real picks + spec spread],
  "products": [ { "i": <index from brief>, "badge", "name" (clean short product name), "specs": [3-4 short chips],
                  "specList": [{label,value} x3-4], "description": "p1\n\np2\n\np3", "bestFor", "pros": [3-4], "cons": [2-3] } ],
  "buyingCriteria": [6 x {criterion, explanation}],
  "howWeEvaluated": [5 x {title, description}],
  "howToChoose": [6 sections, see below],
  "faq": [6-7 x {q, a}] }
```
If fewer than 5 brief products genuinely fit the angle (wrong category, accessory, off-niche), write `{"skip": "<reason>"}` instead. Use 5 or 6 products; drop misfits rather than forcing them. Order by your editorial ranking (rank 1 = Best Overall).

## Depth bar (non-negotiable; from CLAUDE.md)
- description: exactly 3 paragraphs, 8-10 sentences total, original editor voice. P1 design/main feature, P2 tradeoffs + who it fits, P3 ownership reality (setup, cleaning, storage) + a comparison naming a sibling pick and a real spec. Every description unique; never reuse a paragraph between guides.
- pros/cons: short clauses ~60-90 chars, no "Label:" prefixes, no raw Amazon copy, at least one real tradeoff in cons.
- buyingCriteria explanations: 4+ sentences, each with a named pick + real number/spec from the brief, plus a research-backed rule of thumb.
- howWeEvaluated: category-specific, 3-4 sentences each, at least one naming the strongest vs most basic pick.
- howToChoose, 6 sections: (1) By <primary attribute> table scenario->named pick, (2) By Budget table using relative tiers ("lowest-cost pick", "mid-range", "premium") -> named pick, never dollar figures, (3) <Option A> vs <Option B> cards naming which picks fall in each + one-line recommendation, (4) secondary decision axis table, (5) "For <common senior use case> Specifically" cards: "Look for" + "In this comparison", (6) When to Spend More cards: "Spend more if" / "Save if", tied to named products. Every row names a product from this guide.
- faq: 6-7 entries, 2-4 sentence answers, spread: choose-between question, budget, maintenance/durability, misconception, category-specific gaps from research.
- Audience: active adults ~55-70 and adult children buying for them. Practical, not medical/assisted-living framing.

## Hard bans (the build script rejects these)
- No em dash or en dash anywhere. No `【` `】`.
- No dollar figures or "$" in text (title of budget guides excepted: "Under $30").
- No star ratings or review counts; qualitative only ("well reviewed").
- Never "we tested / we tried / we measured / in our lab". Use "we evaluated", "based on product specs and buyer feedback".
- No invented specs: only what brief titles/features/known specs state.

## Workflow
Process the guides in your brief in order. Write each file with the Write tool, then run
`node -e "const c=require('./scripts/batch14/content/<slug>.json');console.log(c.metaTitle.length,c.metaDescription.length)"` to check lengths and fix if out of range. Final reply: one line per guide `<slug>: ok|skip(<reason>)`.

## Minimum sentence counts (checked automatically, EVERY entry, not on average)
- every buyingCriteria explanation: 4+ sentences
- every howWeEvaluated description: 3+ sentences
- every faq answer: 3+ sentences
Short entries are the most common defect in this batch; count before writing each file.
- Duplicate listings of the same product (same brand/design, different ASIN or color) count as ONE pick: keep the better listing, never include both.
