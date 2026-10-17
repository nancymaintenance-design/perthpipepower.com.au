import {readFile,mkdir,writeFile,rename,rmdir} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {randomUUID} from 'node:crypto';
import {hash} from '../../site/localization/fields.mjs';
import {loadSiteData} from '../../site/content/pages.mjs';
import {editorContent,checkedChanges,normalizeDraftChanges} from './content.mjs';
import {assertPageId,readDraft,EditorError} from './store.mjs';
export interface EnglishProposal {pageId:string;chineseRevision:number;chineseHash:string;englishChanges:Record<string,string>;state:'needs-review'|'approved'}
export const proposalHash=(p:EnglishProposal)=>hash(JSON.stringify({pageId:p.pageId,chineseRevision:p.chineseRevision,chineseHash:p.chineseHash,englishChanges:Object.fromEntries(Object.entries(p.englishChanges).sort(([a],[b])=>a.localeCompare(b,'en')))}));
const proposalPath=(root:string,id:string)=>join(root,'proposals',id+'.json');
const site=loadSiteData();
export async function readEnglishProposal(root:string,pageId:string):Promise<EnglishProposal|null>{assertPageId(pageId);try{return JSON.parse(await readFile(proposalPath(root,pageId),'utf8'));}catch(e){if((e as NodeJS.ErrnoException).code==='ENOENT')return null;throw e;}}
export async function exportChanges(root:string,pageId:string){
 assertPageId(pageId);const page=site.pages.find(p=>p.file===pageId)!,model=editorContent(page,site),draft=await readDraft(root,pageId);
 const changes=checkedChanges(model,draft),chineseHash=hash(JSON.stringify({baseHash:model.baseHash,changes})),proposal=await readEnglishProposal(root,pageId);
 const valid=proposal&&draft&&proposal.chineseRevision===draft.revision&&proposal.chineseHash===chineseHash;
 return {pageId,draft,chineseHash,baseHash:model.baseHash,state:!draft?'published':valid?proposal.state:'needs-translation',proposal:valid?proposal:null,proposalHash:valid?proposalHash(proposal):null,changes:model.fields.filter(f=>changes[f.id]!==undefined).map(f=>({fieldId:f.id,source:f.value,chineseBefore:f.publishedValue,chineseAfter:changes[f.id],englishBefore:f.value,englishAfter:valid?proposal.englishChanges[f.id]??f.value:null}))};
}
const pending=new Map<string,Promise<unknown>>();
async function withProposalLock<T>(root:string,pageId:string,action:()=>Promise<T>):Promise<T>{
 const directory=join(root,'proposals');await mkdir(directory,{recursive:true});const lock=join(directory,'.'+pageId+'.lock');
 try{await mkdir(lock);}catch(e){if((e as NodeJS.ErrnoException).code==='EEXIST')throw new EditorError(409,'英文提案正在更新，请稍后重试；持续出现时通知助手核对');throw e;}
 try{return await action();}finally{await rmdir(lock);}
}
async function writeProposal(root:string,proposal:EnglishProposal){
 const directory=join(root,'proposals');await mkdir(directory,{recursive:true});const temp=join(directory,'.'+randomUUID()+'.tmp');await writeFile(temp,JSON.stringify(proposal,null,2),{flag:'wx'});await rename(temp,proposalPath(root,proposal.pageId));
}
export async function saveEnglishProposal(root:string,input:EnglishProposal):Promise<void>{
 assertPageId(input.pageId);const key=resolve(root,input.pageId),old=pending.get(key)??Promise.resolve();
 const run=old.catch(()=>{}).then(()=>withProposalLock(root,input.pageId,async()=>{
  const current=await exportChanges(root,input.pageId);if(!current.draft||input.chineseRevision!==current.draft.revision||input.chineseHash!==current.chineseHash)throw new EditorError(409,'中文修订已变化，请重新同步英文');
  const model=editorContent(site.pages.find(p=>p.file===input.pageId)!,site),englishChanges=normalizeDraftChanges(model,input.englishChanges);
  if(Object.keys(englishChanges).sort().join()!==current.changes.map(c=>c.fieldId).sort().join())throw new EditorError(400,'英文提案必须覆盖本次全部中文变更，不得改写其他字段');
  await writeProposal(root,{pageId:input.pageId,chineseRevision:input.chineseRevision,chineseHash:input.chineseHash,englishChanges,state:'needs-review'});
  const latest=await exportChanges(root,input.pageId);if(latest.state!=='needs-review')throw new EditorError(409,'中文修订已变化，请重新同步英文');
 }));pending.set(key,run);try{await run;}finally{if(pending.get(key)===run)pending.delete(key);}
}
export async function approveProposal(root:string,pageId:string,chineseRevision:number,expectedProposalHash:string):Promise<void>{
 assertPageId(pageId);const key=resolve(root,pageId),old=pending.get(key)??Promise.resolve();
 const run=old.catch(()=>{}).then(()=>withProposalLock(root,pageId,async()=>{
  const current=await exportChanges(root,pageId);if(!current.draft||current.draft.revision!==chineseRevision||!current.proposal)throw new EditorError(409,'中文修订与英文提案不一致，请重新同步');
  if(!expectedProposalHash||current.proposalHash!==expectedProposalHash)throw new EditorError(409,'英文提案已变化，请重新载入并审阅后确认');
  await writeProposal(root,{...current.proposal,state:'approved'});
  const latest=await exportChanges(root,pageId);if(latest.state!=='approved'||latest.draft?.revision!==chineseRevision||latest.proposalHash!==expectedProposalHash)throw new EditorError(409,'中文修订或英文提案已变化，审批无效');
 }));pending.set(key,run);try{await run;}finally{if(pending.get(key)===run)pending.delete(key);}
}
