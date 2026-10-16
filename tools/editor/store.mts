import {mkdir,readFile,writeFile,rename,readdir,unlink} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {randomUUID} from 'node:crypto';
import {expectedPageFiles} from '../../site/content/pages.mjs';
export interface DraftRevision {pageId:string;revision:number;baseHash:string;changes:Record<string,string>;updatedAt:string;state:'draft'|'needs-translation'|'needs-review'|'approved'}
export class EditorError extends Error {constructor(public status:number,message:string){super(message);}}
export function assertPageId(pageId:string):void{if(!expectedPageFiles.includes(pageId))throw new EditorError(400,'页面未登记');}
const queues=new Map<string,Promise<unknown>>();
export async function readDraft(root:string,pageId:string):Promise<DraftRevision|null>{
 assertPageId(pageId);try{return JSON.parse(await readFile(join(root,pageId+'.json'),'utf8')) as DraftRevision;}
 catch(error){if((error as NodeJS.ErrnoException).code==='ENOENT')return null;throw error;}
}
export async function saveDraft(root:string,input:{pageId:string;expectedRevision:number;baseHash:string;changes:Record<string,string>}):Promise<DraftRevision>{
 assertPageId(input.pageId);
 if(!Number.isSafeInteger(input.expectedRevision)||input.expectedRevision<0||typeof input.baseHash!=='string'||!input.changes||Array.isArray(input.changes)||Object.values(input.changes).some(v=>typeof v!=='string'||v.length>20000))throw new EditorError(400,'草稿格式无效');
 const key=resolve(root,input.pageId),prior=queues.get(key)??Promise.resolve();
 const operation=prior.catch(()=>{}).then(async()=>{
  const old=await readDraft(root,input.pageId);if((old?.revision??0)!==input.expectedRevision)throw new EditorError(409,'草稿已在其他窗口更新，请保留当前文字后重新载入');
  const draft:DraftRevision={pageId:input.pageId,revision:input.expectedRevision+1,baseHash:input.baseHash,changes:input.changes,updatedAt:new Date().toISOString(),state:'needs-translation'};
  await mkdir(root,{recursive:true});const history=join(root,'history',input.pageId);await mkdir(history,{recursive:true});
  const temporary=join(root,`.${randomUUID()}.tmp`);await writeFile(temporary,JSON.stringify(draft,null,2),{flag:'wx'});
  await writeFile(join(history,`${draft.revision}.json`),JSON.stringify(draft,null,2),{flag:'wx'});
  await rename(temporary,join(root,input.pageId+'.json'));
  const entries=(await readdir(history)).filter(n=>/^\d+\.json$/.test(n)).sort((a,b)=>parseInt(b)-parseInt(a));
  await Promise.all(entries.slice(20).map(n=>unlink(join(history,n))));return draft;
 });queues.set(key,operation);try{return await operation;}finally{if(queues.get(key)===operation)queues.delete(key);}
}
