import {parse} from 'parse5';
import {loadApprovedLocales} from '../../site/localization/approved.mjs';
import {collectEditableFields,hash,pageHash} from '../../site/localization/fields.mjs';
import {translationPositions,translationKey,normalizeText} from '../../site/localization/inventory.mjs';
import {renderLocalizedPage} from '../../site/localization/render.mjs';
import {renderPage} from '../../site/templates/page.mjs';
import {escapePlainText} from '../../site/templates/document.mjs';
import type {PageData,SiteData} from '../../site/types.mjs';
import type {LocaleBundle,Locale} from '../../site/localization/types.mjs';
import {EditorError} from './store.mjs';
export interface EditorField {id:string;key:string;value:string;publishedValue:string;kind:string;sourcePath:string;locked:boolean;shared:boolean}
export interface EditorContent {pageId:string;baseHash:string;legacyHash:string;fields:EditorField[];aliases:Record<string,string>;bundle:LocaleBundle}
const nodes=(n:any):any[]=>[n,...(n.childNodes??[]).flatMap(nodes)];
const text=(n:any):string=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const attr=(n:any,name:string)=>n.attrs?.find((a:any)=>a.name===name)?.value;
const protectedCopy=/(?:0413|61413477667|@|\bABN\b|\bACN\b|\bAUD\b|\$\s*\d|St Georges|09:00|21:00|\b000\b|13 13 75|13 13 51|ELLIS SERVICES GROUP PTY LTD)/i;
const cache=new WeakMap<PageData,EditorContent>();
const localeCache=new WeakMap<SiteData,ReturnType<typeof loadApprovedLocales>>();
export function editorContent(page:PageData,site:SiteData):EditorContent{
 const cached=cache.get(page);if(cached)return cached;
 let bundles=localeCache.get(site);if(!bundles){bundles=loadApprovedLocales('',site);localeCache.set(site,bundles);}const bundle=bundles.find(b=>b.pageId===page.file)!;
 const html=renderPage(page,site),legacy=collectEditableFields(page,site),all=nodes(parse(html,{sourceCodeLocationInfo:true}));
 const shared=all.filter(n=>['header','footer'].includes(n.tagName)).map(n=>n.sourceCodeLocation).filter(Boolean);
 const positions=translationPositions(html),keys=[...new Set(positions.map(p=>p.key))],aliases:Record<string,string>={};
 const fields=keys.map(key=>{
  const ps=positions.filter(p=>p.key===key),source=ps[0].source;
  const old=legacy.find(f=>translationKey(f.value)===key),isShared=ps.some(p=>shared.some(r=>p.start>=r.startOffset&&p.end<=r.endOffset));
  const id=old?.id??`copy:${key}`;
  for(const f of legacy.filter(f=>translationKey(f.value)===key))aliases[f.id]=id;
  aliases[`copy:${key}`]=id;
  return {id,key,value:source,publishedValue:bundle.values[key]??source,kind:old?.kind??(ps[0].attribute?'alt':'text'),sourcePath:old?.sourcePath??`copy:${key}`,locked:isShared||protectedCopy.test(source),shared:isShared};
 });
 const result={pageId:page.file,baseHash:hash(html+JSON.stringify(bundle)),legacyHash:pageHash(page),fields,aliases,bundle};cache.set(page,result);return result;
}
export function normalizeDraftChanges(model:EditorContent,input:unknown):Record<string,string>{
 if(!input||typeof input!=='object'||Array.isArray(input))throw new EditorError(400,'草稿字段格式无效');
 const out:Record<string,string>={};
 for(const [id,value] of Object.entries(input)){
  const field=model.fields.find(f=>f.id===(model.aliases[id]??id));
  if(!field)throw new EditorError(400,'字段已失效，请重新载入并核对');
  if(field.locked)throw new EditorError(400,'共享文案或业务事实字段已锁定');
  if(typeof value!=='string'||!value.trim()||value.length>20000)throw new EditorError(400,'中文字段不能为空或超过20000字');
  if(out[field.id]!==undefined&&out[field.id]!==value)throw new EditorError(409,'同一文字有冲突修改，请人工核对');
  out[field.id]=value;
 }return out;
}
export function checkedChanges(model:EditorContent,draft:{baseHash:string;changes:Record<string,string>}|null):Record<string,string>{
 if(!draft)return {};
 if(![model.baseHash,model.legacyHash].includes(draft.baseHash))throw new EditorError(409,'页面或中文基线已更新，旧草稿需要人工核对');
 const excluded=new Set(legacyReview(model,draft).map(f=>f.id));
 return normalizeDraftChanges(model,Object.fromEntries(Object.entries(draft.changes).filter(([id])=>!excluded.has(id))));
}
export function legacyReview(model:EditorContent,draft:{baseHash:string;changes:Record<string,string>}|null):{id:string;source:string;chinese:string}[]{
 if(!draft||draft.baseHash!==model.legacyHash)return [];
 return Object.entries(draft.changes).flatMap(([id,chinese])=>{const field=model.fields.find(f=>f.id===model.aliases[id]);return field?.shared&&field.locked&&id.startsWith(model.pageId+':')?[{id,source:field.value,chinese}]:[];});
}
export function renderEditorContent(page:PageData,site:SiteData,draft:{baseHash:string;changes:Record<string,string>}|null,locale:Locale,englishChanges:Record<string,string>={},editable=false):string{
 const model=editorContent(page,site),changes=locale==='zh-Hans'?checkedChanges(model,draft):normalizeDraftChanges(model,englishChanges);
 const values={...model.bundle.values};for(const f of model.fields)if(changes[f.id]!==undefined)values[f.key]=changes[f.id];
 let html=renderLocalizedPage(page,site,{locale,bundle:locale==='zh-Hans'?{...model.bundle,values}:undefined,preview:true});
 if(locale==='en-AU'&&Object.keys(changes).length){
  const dictionary=new Map(model.fields.filter(f=>changes[f.id]!==undefined).map(f=>[f.key,changes[f.id]]));
  for(const p of translationPositions(html).reverse())if(dictionary.has(p.key)){const raw=html.slice(p.start,p.end),value=escapePlainText(dictionary.get(p.key)!);html=html.slice(0,p.start)+(p.attribute?value:(raw.match(/^\s*/)?.[0]??'')+value+(raw.match(/\s*$/)?.[0]??''))+html.slice(p.end);}
  const faqs=nodes(parse(html)).filter(n=>n.tagName==='details').map(n=>{const summary=n.childNodes.find((c:any)=>c.tagName==='summary');return {'@type':'Question',name:normalizeText(text(summary)),acceptedAnswer:{'@type':'Answer',text:normalizeText(n.childNodes.filter((c:any)=>c!==summary).map(text).join(''))}};});
  html=html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g,(_m,a,b,c)=>{
   const rewrite=(v:any,k=''):any=>v&&typeof v==='object'&&v['@type']==='FAQPage'?{...v,mainEntity:faqs}:typeof v==='string'&&['name','description','headline','text','caption','serviceType'].includes(k)?dictionary.get(translationKey(v))??v:Array.isArray(v)?v.map(x=>rewrite(x,k)):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([key,value])=>[key,rewrite(value,key)])):v;
   return a+JSON.stringify(rewrite(JSON.parse(b))).replace(/</g,'\\u003c')+c;
  });
 }
 if(editable){
  const byValue=new Map(model.fields.filter(f=>!f.locked).map(f=>[normalizeText(changes[f.id]??(locale==='zh-Hans'?f.publishedValue:f.value)),f.id]));
  const edits:{start:number;end:number;value:string}[]=[];
  function walk(n:any,blocked=false){const skip=blocked||['head','script','style','svg','iframe','noscript'].includes(n.tagName);if(n.nodeName==='#text'&&!skip&&n.sourceCodeLocation){const id=byValue.get(normalizeText(n.value));if(id){const l=n.sourceCodeLocation;edits.push({start:l.startOffset,end:l.endOffset,value:`<span data-editor-field="${escapePlainText(id)}" tabindex="0" role="button" aria-label="编辑中文">${escapePlainText(n.value)}</span>`});}}for(const child of n.childNodes??[])walk(child,skip);}
  walk(parse(html,{sourceCodeLocationInfo:true}));for(const e of edits.reverse())html=html.slice(0,e.start)+e.value+html.slice(e.end);
 }return html;
}
