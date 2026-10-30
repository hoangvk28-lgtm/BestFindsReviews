import fs from "fs";
export const R={};
export const add=(file,id,name,bestFor,d1,d2,d3,pros,cons,off)=>{
 (R[file]??={})[id]={name,bestFor,description:[d1,d2,d3].join("\n\n"),pros,cons};
 if(off){const p="offtopic-2b.json";const o=JSON.parse(fs.readFileSync(p));o.push({file,id,reason:off});fs.writeFileSync(p,JSON.stringify(o,null,1));}
};
export const save=()=>fs.writeFileSync("rw-2b.json",JSON.stringify(R,null,1));
