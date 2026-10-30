import fs from "fs";
const rw=JSON.parse(fs.readFileSync("rw-2b.json"));const pc=JSON.parse(fs.readFileSync(process.argv[2]));
for(const f in pc)for(const id in pc[f]){const [p,c]=pc[f][id];Object.assign(rw[f][id],{pros:p,cons:c});}
fs.writeFileSync("rw-2b.json",JSON.stringify(rw,null,1));
