# Sibling overlap check: python3 scripts/batch17-sim.py <slug> -> max 5-gram overlap of crit/faq/eval/h2c vs every other batch17 article (should be < 0.08)
import json,re,sys,glob,os
def txt(o): return {'crit':' '.join(c['explanation'] for c in o['buyingCriteria']),'faq':' '.join(q['a'] for q in o['faq']),'eval':' '.join(e['description'] for e in o['howWeEvaluated']),'h2c':json.dumps(o['howToChoose'])}
def grams(s): w=re.findall(r'[a-z0-9]+',s.lower()); return {' '.join(w[i:i+5]) for i in range(len(w)-4)}
me=sys.argv[1]; a={k:grams(v) for k,v in txt(json.load(open(f'scripts/batch17/content/{me}.json'))).items()}
worst={}
for f in glob.glob('scripts/batch17/content/*.json'):
    s=os.path.basename(f)[:-5]
    if s==me: continue
    o=json.load(open(f))
    if 'skip' in o: continue
    for k,v in txt(o).items():
        b=grams(v); r=len(a[k]&b)/max(1,min(len(a[k]),len(b)))
        if r>worst.get(k,(0,''))[0]: worst[k]=(round(r,2),s)
print(me, worst)
