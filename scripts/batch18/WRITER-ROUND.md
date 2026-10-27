# Batch 18 writer round (WorthRated)

Read `scripts/batch9/WRITER-BRIEF.md` first; its Output format, Depth bar and Hard rules are binding, with these batch18 paths:
- briefs: `scripts/batch18/briefs/<range>.md` (your range is given in the task)
- research notes: `scripts/batch18/research/<seed-slug>.md`. Reuse if present. If missing for a seed, create it first from 2-4 WebSearch queries (how to choose, key specs and thresholds, common buyer mistakes, safety/compatibility gotchas). Real facts only.
- output: `scripts/batch18/content/<slug>.json`; skip any slug whose content file already exists.
- audit: after each article run `node scripts/batch18-audit.mjs <slug>` and fix until PASS (or justified skip).

Extra rules:
- Every pick must truly match the article's angle (e.g. brand articles only that brand; "4G"/"unlocked"/"with SOS" only when the listing shows it; carrier articles only phones the listing says work on that carrier). Skip accessories, cases, chargers, replacement parts. If fewer than 4 true matches exist, write {"skip": "reason"}.
- Budget (Under $N) articles: items are already within the cap; never state prices or dollar figures.
- No medical claims (hearing loss, dementia, reflux, etc.): frame as ease of use and comfort; one FAQ may suggest asking a doctor or audiologist where relevant.
- Bathroom safety: state weight capacity, heights and fit (round vs elongated bowl, tub wall width) only as the listing gives them. Suction grab bars are balance aids, not load-bearing supports: say so plainly. Never promise fall prevention. Mounted grab bars need studs or rated anchors; say when a pick needs drilling.
- Avoid overlap with existing site guides on shower chairs and bathtub grab bars: different angles and wording.
- Every description paragraph must be original prose: the build rejects paragraphs duplicated across any article in any batch.
- Do not edit files outside scripts/batch18/content and scripts/batch18/research. Do not run git.

Final reply: only slugs written (PASS), slugs skipped with reason, research notes created.

## No generators (binding)
Write every article by hand with the Write tool. Never write or run a Python/JS script that assembles article prose from templates or sentence banks: it produces sibling articles with shared criteria/FAQ wording (the user treats this as thin, templated content). Sibling articles (same seed, budget ladders) must not share sentences beyond product names and specs: different angles, examples and gotchas per article.
After the audit passes, also run `python3 scripts/batch18-sim.py <slug>`: every value must be below 0.20 (5-gram overlap with any other batch18 article). If not, rewrite the overlapping section in fresh words.
