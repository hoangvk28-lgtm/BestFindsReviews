#!/bin/bash
# One-shot Sonnet writer for batch14: bash scripts/batch14-write.sh <id>
# Builds a single-guide brief, sends WRITER rules + brief + group research in ONE headless call (no tools,
# no thinking, minimal system prompt, run outside the repo so CLAUDE.md is not loaded), validates, saves the JSON.
# Retries once on unparseable output; fixes out-of-range meta lengths with a tiny follow-up call.
cd "$(dirname "$0")/.." || exit 1
R=$(pwd)
id=$1
BATCH=batch14 PRIOR_DESC=1 node scripts/batch9-spec.mjs brief $id $id >/dev/null || exit 1
b=scripts/batch14/briefs/$id-$id.md
[ -s $b ] || { echo "$id: no brief (content exists or no pool)"; exit 0; }
slug=$(head -1 $b | awk '{print $3}')
group=$(node -e "const r=require('./scripts/batch14-plan.json').find(x=>x.id==$id);console.log(r.group)")
SYS="You are a senior editor at WorthRated, an Amazon affiliate buying-guide site. You write original, specific, honest guide content as strict, valid JSON."
ask() { (cd /tmp && MAX_THINKING_TOKENS=0 claude -p --model sonnet --output-format json --tools "" --setting-sources "" --system-prompt "$SYS" <<<"$1"); }
prompt="$(sed -n '/^## Output/,/^## Workflow/p' scripts/batch14/WRITER.md | sed '$d')

## Research notes for this product group
$(cat scripts/batch14/research/$group.md)

## Brief
$(cat $b)

Respond with ONLY the JSON object for this guide (or {\"skip\": \"reason\"}). IMPORTANT FORMAT OVERRIDE: write each product \"description\" as a JSON array of exactly 3 paragraph strings, e.g. \"description\": [\"p1\", \"p2\", \"p3\"]. Never put a raw line break inside a string. Escape inner double quotes (write inches as 12-inch, not 12\"). No prose, no code fences."
for try in 1 2; do
  out=$(ask "$prompt")
  echo "$out" > scripts/batch14/log/$slug.$try.json
  node -e '
const fs=require("fs");const o=JSON.parse(fs.readFileSync(0,"utf8"));let t=o.result.trim();
let r="",q=false,e=false;for(const ch of t.slice(t.indexOf("{"),t.lastIndexOf("}")+1)){if(q){if(e){e=false}else if(ch=="\\"){e=true}else if(ch=="\""){q=false}else if(ch=="\n"){r+="\\n";continue}else if(ch=="\r"||ch=="\t"){r+=" ";continue}}else if(ch=="\""){q=true}r+=ch}
const c=JSON.parse(r);for(const p of c.products||[])if(Array.isArray(p.description))p.description=p.description.join("\n\n");
fs.writeFileSync(process.argv[1],JSON.stringify(c,null,1));
const u=o.usage||{};fs.appendFileSync(process.argv[3],[process.argv[2],c.skip?"skip":"ok",(u.input_tokens||0)+(u.cache_read_input_tokens||0)+(u.cache_creation_input_tokens||0),u.output_tokens,o.total_cost_usd].join("\t")+"\n");
' scripts/batch14/content/$slug.json $slug scripts/batch14/log/_usage.tsv <<<"$out" 2>/dev/null && break
  [ $try = 2 ] && { echo "$slug: FAILED to parse"; exit 1; }
done
# meta length / banned-character repair
fix=$(node -e '
const c=require(process.argv[1]);if(c.skip){console.log("");process.exit()}
const bad=[];if(c.metaTitle.length>48)bad.push("metaTitle must be at most 48 characters (now "+c.metaTitle.length+")");
if(c.metaDescription.length<120||c.metaDescription.length>160)bad.push("metaDescription must be 120 to 160 characters (now "+c.metaDescription.length+")");
if(bad.length)console.log(JSON.stringify({guideTitle:c.guideTitle,metaTitle:c.metaTitle,metaDescription:c.metaDescription})+"\n"+bad.join("; "));' "$R/scripts/batch14/content/$slug.json")
if [ -n "$fix" ]; then
  f=$(ask "Rewrite these meta fields to satisfy the limits, keeping the meaning. No dashes, no dollar figures. $fix
Return ONLY {\"metaTitle\": \"...\", \"metaDescription\": \"...\"}. Count characters carefully.")
  node -e '
const fs=require("fs");const o=JSON.parse(fs.readFileSync(0,"utf8"));const t=o.result;const m=JSON.parse(t.slice(t.indexOf("{"),t.lastIndexOf("}")+1));
const p=process.argv[1];const c=JSON.parse(fs.readFileSync(p,"utf8"));
if(m.metaTitle&&m.metaTitle.length<=48)c.metaTitle=m.metaTitle;if(m.metaDescription&&m.metaDescription.length>=120&&m.metaDescription.length<=160)c.metaDescription=m.metaDescription;
fs.writeFileSync(p,JSON.stringify(c,null,1));' "$R/scripts/batch14/content/$slug.json" <<<"$f" 2>/dev/null
fi
node -e '
const c=require(process.argv[1]);if(c.skip){console.log(process.argv[2]+": skip "+c.skip);process.exit()}
const s=JSON.stringify(c);const w=[];if(/[–—【】]/.test(s))w.push("dash/bracket");if(/\$\d/.test(s.replace(c.guideTitle,"").replace(c.metaTitle,"")))w.push("price");
if(c.metaTitle.length>48||c.metaDescription.length<120||c.metaDescription.length>160)w.push("meta "+c.metaTitle.length+"/"+c.metaDescription.length);
if(!/\(2026\)/.test(c.guideTitle))w.push("no (2026)");if(c.faq.length<5||c.howToChoose.length<5||c.buyingCriteria.length<5)w.push("sections");
console.log(process.argv[2]+": ok "+c.products.length+" picks"+(w.length?" WARN "+w.join(","):""));' "$R/scripts/batch14/content/$slug.json" $slug
