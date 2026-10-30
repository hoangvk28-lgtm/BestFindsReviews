import {execSync} from "node:child_process";
const o=execSync("node scripts/cleanup/dump.mjs "+process.argv.slice(2).join(" "),{maxBuffer:1e8}).toString();
const i=o.indexOf('{"file"');
for(const l of o.slice(i).split("\n")){ if(!l.startsWith('{"file"'))continue; const j=JSON.parse(l); console.log("## "+j.file+" | "+j.title); for(const p of j.products) console.log(`- ${p.id} [${p.badge}] ${p.name} | specs:${p.specs.join("; ")} | pros:${p.pros.join(" / ")}`);}
