import { parseFragment, type DefaultTreeAdapterTypes as T } from 'parse5';
import type { PageData } from '../types.mjs';
import { resolveSharedText } from './shared.mjs';
const text=(n:T.Node):string=>n.nodeName==='#text'?(n as T.TextNode).value:'childNodes' in n?n.childNodes.map(text).join(''):'';
const readable=(html:string):string=>text(parseFragment(resolveSharedText(html))).replace(/\s+/g,' ').trim();
export function pageHeading(page:PageData):string {
  const html=(page.hero??'')+page.sections.map(s=>s.kind==='rich'?s.html:s.container).join('');
  function find(n:T.Node):T.Node|undefined {if('tagName' in n&&n.tagName==='h1')return n;if('childNodes' in n)for(const child of n.childNodes){const match=find(child);if(match)return match;}return undefined;}
  const h1=find(parseFragment(resolveSharedText(html)));if(!h1)throw Error(`Canonical H1 missing: ${page.file}`);return text(h1).replace(/\s+/g,' ').trim();
}
export function pageSummary(page:PageData):string {
  const html=page.sections.map(s=>s.kind==='rich'?s.html:s.container).join('');
  function find(n:T.Node):T.Node|undefined {if('tagName' in n&&n.tagName==='aside'&&n.attrs.some(a=>a.name==='class'&&a.value.split(/\s+/).includes('article-summary')))return n;if('childNodes' in n)for(const child of n.childNodes){const match=find(child);if(match)return match;}return undefined;}
  const aside=find(parseFragment(resolveSharedText(html)));
  const paragraph=aside&&'childNodes' in aside?aside.childNodes.find(n=>'tagName' in n&&n.tagName==='p'):undefined;
  if(!paragraph)throw Error(`Canonical article summary missing: ${page.file}`);
  return text(paragraph).replace(/\s+/g,' ').trim();
}
/** Metadata/schema are formatting views of canonical SEO, FAQ, heading and summary fields. */
export function resolvePageText(page:PageData,value:string):string {
  return resolveSharedText(value).replace(/\{\{ppp:(faq-value:(\d+):(\d+):(question|answer)|seo-value:(title|description|canonical)|h1-value|summary-value):(raw|json)\}\}/g,
    (_all:string,key:string,section:string,item:string,field:string,seo:string,encoding:string)=>{
      let result:string;
      if(key.startsWith('faq-value:')){const block=page.sections[Number(section)];if(block?.kind!=='faq'||!block.items[Number(item)])throw Error(`Canonical FAQ reference missing: ${page.file}:${key}`);const faq=block.items[Number(item)];result=field==='question'?resolveSharedText(faq.question).replace(/\s+/g,' ').trim():readable(faq.answer);}
      else if(key.startsWith('seo-value:'))result=resolveSharedText(page.seo[seo as 'title'|'description'|'canonical']);
      else result=key==='summary-value'?pageSummary(page):pageHeading(page);
      return encoding==='json'?JSON.stringify(result).slice(1,-1):result;
    });
}
export function materializePage(page:PageData):PageData {
  function visit(value:unknown):unknown {if(typeof value==='string')return resolvePageText(page,value);if(Array.isArray(value))return value.map(visit);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,visit(v)]));return value;}
  return visit(page) as PageData;
}
