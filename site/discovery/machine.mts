import {parse} from 'parse5';
import type {SiteData} from '../types.mjs';
import {siteOrigin} from '../localization/routes.mjs';

export const feedPaths = ['feed.json','feed.xml','zh/feed.json','zh/feed.xml'] as const;
const nodes = (n:any):any[] => [n,...(n.childNodes??[]).flatMap(nodes)];
const attr = (n:any,key:string):string|undefined => n.attrs?.find((a:any)=>a.name===key)?.value;
const text = (n:any):string => n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const clean = (value:string):string => value.replace(/\s+/g,' ').trim();
const escape = (value:string):string => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
interface PageRecord {
 file:string;html:string;url:string;title:string;summary:string;body:string;topics:string[];
 scripts:{start:number;end:number;value:any}[];entities:any[];
}
function readPage(file:string,html:string):PageRecord {
 const all=nodes(parse(html,{sourceCodeLocationInfo:true})),main=all.find(n=>n.tagName==='main');
 if(!main)throw new Error(`Missing main content: ${file}`);
 const blocks:{tag:string;value:string}[]=[];
 function visit(n:any):void {
  if(['aside','form','nav','script','style','template','button','input','select','textarea'].includes(n.tagName)||attr(n,'hidden')!==undefined||attr(n,'aria-hidden')==='true')return;
  if(/^h[1-3]$/.test(n.tagName)||['p','summary','figcaption'].includes(n.tagName)||n.tagName==='li'&&!nodes(n).some(c=>c!==n&&['p','li'].includes(c.tagName))){
   const value=clean(text(n));if(value)blocks.push({tag:n.tagName,value});return;
  }
  (n.childNodes??[]).forEach(visit);
 }
 visit(main);
 const start=blocks.findIndex(b=>b.tag==='h1');
 if(start<0)throw new Error(`Missing page heading: ${file}`);
 const content=blocks.slice(start),title=content[0].value;
 const summary=content.find(b=>b.tag==='p')?.value??title;
 const headings=content.filter(b=>/^h[1-3]$/.test(b.tag)).map(b=>b.value);
 // Only exact visible headings: no synthetic location variants or keyword list.
 const topics=[...new Set(headings.filter((h,i)=>i===0||!/(?:book|request|quote|assessment|safety|guidance|service choices|frequently|cost|price|预约|报价|评估|安全|指南|费用|价格|请求|常见问题)/i.test(h)))].slice(0,6);
 const scripts=all.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').map(n=>({
  start:n.sourceCodeLocation.startTag.endOffset,end:n.sourceCodeLocation.endTag.startOffset,value:JSON.parse(text(n))
 }));
 const entities=scripts.flatMap(s=>s.value['@graph']??(Array.isArray(s.value)?s.value:[s.value]));
 const url=attr(all.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href');
 if(!url||new URL(url).origin!==siteOrigin)throw new Error(`Invalid feed canonical: ${file}`);
 return {file,html,url,title,summary,body:content.map(b=>b.value).join('\n\n'),topics,scripts,entities};
}
function enrich(record:PageRecord,company:PageRecord,catalog:PageRecord[],prefix:string):string {
 const service=record.entities.find(n=>n['@type']==='Service');
 const article=record.entities.find(n=>['Article','BlogPosting','NewsArticle'].includes(n['@type']));
 for(const n of record.entities){
  if(n['@type']==='LocalBusiness'&&n['@id']===siteOrigin+'/#business'){
   n.description??=company.summary;
   if(record.file===prefix+'index.html'||record.file===prefix+'about.html')n.hasOfferCatalog??={
    '@type':'OfferCatalog',name:record.title,itemListElement:catalog.map(p=>({'@type':'Offer',itemOffered:{'@id':p.entities.find(e=>e['@type']==='Service')['@id']}}))
   };
  }
  if(n['@type']==='WebPage'){
   n.keywords??=record.topics;
   if(service||article)n.mainEntity??={'@id':(service??article)['@id']};
  }
  if(['Article','BlogPosting','NewsArticle'].includes(n['@type']))n.keywords??=record.topics;
  if(n['@type']==='Service')n.category??=record.title;
 }
 let html=record.html;
 for(const s of [...record.scripts].reverse())html=html.slice(0,s.start)+JSON.stringify(s.value,null,2).replace(/</g,'\\u003c')+html.slice(s.end);
 const base=siteOrigin+'/'+prefix;
 const links=`<link data-content-feed rel="alternate" type="application/rss+xml" href="${base}feed.xml"><link data-content-feed rel="alternate" type="application/feed+json" href="${base}feed.json">`;
 return html.replace('</head>',links+'</head>');
}
/** Build-time projection of already-rendered public content. No clock, network or drafts. */
export function addMachineDiscovery(input:ReadonlyMap<string,string>,site:SiteData):ReadonlyMap<string,string>{
 const output=new Map(input);
 for(const prefix of ['','zh/']){
  if(!output.has(prefix+'index.html'))continue;
  const records=site.pages.filter(p=>p.file!=='privacy.html').map(p=>readPage(prefix+p.file,output.get(prefix+p.file)!));
  const company=records.find(p=>p.file===prefix+'about.html')!,home=records.find(p=>p.file===prefix+'index.html')!;
  const catalog=records.filter(p=>p.entities.some(n=>n['@type']==='Service'));
  const base=siteOrigin+'/'+prefix,language=prefix?'zh-Hans':'en-AU';
  for(const record of records)output.set(record.file,enrich(record,company,catalog,prefix));
  const items=records.map(p=>({id:p.url,url:p.url,title:p.title,summary:p.summary,content_text:p.body,tags:p.topics}));
  const feed={version:'https://jsonfeed.org/version/1.1',title:home.title,home_page_url:base,feed_url:base+'feed.json',description:company.summary,language,items};
  output.set(prefix+'feed.json',JSON.stringify(feed,null,2)+'\n');
  const rss=items.map(i=>`<item><title>${escape(i.title)}</title><link>${escape(i.url)}</link><guid isPermaLink="true">${escape(i.id)}</guid><description>${escape(i.summary)}</description>${i.tags.map(t=>`<category>${escape(t)}</category>`).join('')}<content:encoded>${escape(i.content_text.split('\n\n').map(p=>'<p>'+escape(p)+'</p>').join('\n'))}</content:encoded></item>`).join('\n');
  output.set(prefix+'feed.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>${escape(home.title)}</title><link>${base}</link><description>${escape(company.summary)}</description><language>${language}</language><atom:link href="${base}feed.xml" rel="self" type="application/rss+xml"/>\n${rss}\n</channel></rss>\n`);
 }
 return new Map([...output].sort(([a],[b])=>a.localeCompare(b,'en')));
}
