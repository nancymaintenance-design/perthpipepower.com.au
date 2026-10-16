/** Read-only review of provider drafts. Never executes model-supplied content. */
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const root=resolve('.superpowers/sdd/2026-10-16-bilingual-local-editor/translations');
const inventory=JSON.parse(readFileSync(resolve(root,'inventory.json'),'utf8')) as {key:string;source:string}[];
const source=new Map(inventory.map(r=>[r.key,r.source]));
const start=Number(process.argv[2]??1),end=Number(process.argv[3]??start);
for(let n=start;n<=end;n++){
 const id=String(n).padStart(3,'0'),file=resolve(root,`result-${id}.json`);if(!existsSync(file))continue;
 const response=JSON.parse(readFileSync(file,'utf8'));
 const content=response.content.trim().replace(/^```(?:json)?\s*/,'').replace(/\s*```$/,'');
 const values=JSON.parse(content) as Record<string,string>;
 console.log(`BATCH ${id}`);
 for(const [key,value] of Object.entries(values)){
  const english=source.get(key);if(!english)throw new Error('Unknown provider key');
  console.log(`${key} EN: ${english}\nZH: ${value}`);
 }
}
