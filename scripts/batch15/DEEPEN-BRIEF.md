# Batch 14 deepen pass (quality repair)

The articles in `scripts/batch14/content/` were written too thin. Your job: bring each assigned article up to the depth bar in `scripts/batch9/WRITER-BRIEF.md` (read that file once first; its Hard rules and Depth bar are binding).

## Per article, in order
1. `node scripts/batch14-audit.mjs <slug>` to see what fails.
2. Read `scripts/batch14/content/<slug>.json` (the current article), `scripts/batch14/pool/<slug>.json` (product data: `items[i]` matches each product's `i`; it is your ONLY product fact source), and the seed's note in `scripts/batch14/research/` (once per seed, reuse across articles).
3. Rewrite the failing parts in place and save the full JSON with Write. Keep what is already good, keep slugs, `i` values and badges unless a fix needs them changed.
4. Re-run the audit. Repeat until it prints PASS, then move on.

## What the fixes must look like
- **words < 2900**: add real substance, never filler. The usual gaps are product descriptions, buyingCriteria, faq and howToChoose tables.
- **thinDesc**: every product description is exactly 3 paragraphs separated by `\n\n`, 8-10 sentences total. P1 design and real specs from the pool features. P2 tradeoffs and who it fits. P3 ownership reality (assembly, cleaning, refilling, storage, weight, weather, controls) plus one comparison naming a sibling pick with real numbers.
- **products < 5**: if the pool has more true matches (same product type, not accessories or duplicates), add picks to reach 5-6, fully written. If it truly does not, leave it and note it in your final reply.
- **criteria**: 6 entries, each 4-5 sentences, thresholds plus at least one sentence naming real picks and their real numbers.
- **faq**: 6-7 entries, each answer 3-4 sentences, using research-note gotchas (safety, maintenance, misconceptions, choose-between).
- **h2c / eval**: 6 howToChoose subsections in the WRITER-BRIEF order, each row naming an exact pick; 5 howWeEvaluated entries.
- Every new sentence must be specific to this article's angle (for example a cardinals feeder talks perch size and safflower, a gazebo heater talks clearance to fabric). Do not paste the same paragraph into several articles: the build rejects duplicated paragraphs across all batches.
- Budget articles: never state prices or dollar figures outside guideTitle/metaTitle.

## Final reply
Only: slugs now PASS, slugs still failing with the reason. No summaries.
