import {parse} from 'parse5';
import type {PageData,SiteData} from '../types.mjs';
import type {Locale,LocaleBundle} from './types.mjs';
import {pageHash} from './fields.mjs';
import {normalizeText,schemaStrings,translationKey,translationPositions} from './inventory.mjs';
import {localizedPath,localizeInternalHref,siteOrigin} from './routes.mjs';
import {renderPage} from '../templates/page.mjs';
import {escapePlainText} from '../templates/document.mjs';
import {chineseRuntimeConfig} from './runtime.mjs';
import {applyCustomerPaths} from '../navigation/customer-paths.mjs';

export function requiredTranslations(page:PageData,site:SiteData):readonly {key:string;source:string}[]{
 const entries=new Map(translationPositions(renderPage(page,site)).map(p=>[p.key,p.source]));
 for(const source of schemaStrings(page.seo.jsonLd))entries.set(translationKey(source),source);
 return [...entries].map(([key,source])=>({key,source}));
}
interface Edit {start:number;end:number;value:string}
function applyEdits(html:string,edits:Edit[]):string{
 let last=html.length;
 for(const edit of edits.sort((a,b)=>b.start-a.start)){
  if(edit.end>last)throw new Error('Overlapping locale edits');
  html=html.slice(0,edit.start)+edit.value+html.slice(edit.end);last=edit.start;
 }return html;
}
function readText(node:any):string{return node.nodeName==='#text'?node.value:(node.childNodes??[]).map(readText).join('');}
function allNodes(node:any):any[]{return [node,...(node.childNodes??[]).flatMap(allNodes)];}
function attr(node:any,name:string):string|undefined{return node.attrs?.find((a:any)=>a.name===name)?.value;}
function absoluteResource(value:string):string{
 return /^(?:[a-z][\w+.-]*:|\/|#)/i.test(value)?value:'/'+value.replace(/^\.\//,'');
}
const style='<style data-locale-style>.site-nav .language-switch{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:8px 12px;border:1px solid currentColor;border-radius:var(--field-radius,14px);white-space:nowrap;font-weight:700}.language-switch:hover{background:var(--field-light,#edf5f7)}.language-switch:focus-visible{outline:3px solid var(--field-yellow,#f3b63f);outline-offset:3px}html[lang="zh-Hans"] body{font-family:Arial,"Microsoft YaHei","PingFang SC",sans-serif}html[lang="zh-Hans"] .eyebrow{letter-spacing:.04em}</style>';
const switchScript='<script data-locale-switch>(()=>{const a=document.querySelector(".language-switch");if(!a)return;const refresh=()=>{const u=new URL(a.getAttribute("href"),location.href);u.search=location.search;u.hash=location.hash;a.setAttribute("href",u.pathname+u.search+u.hash)};refresh();addEventListener("hashchange",refresh);a.addEventListener("click",refresh)})();</script>';

/** Build-time, plain-text localization. No user draft or provider calls at runtime. */
export function renderLocalizedPage(page:PageData,site:SiteData,options:{locale:Locale;bundle?:LocaleBundle;preview:boolean}):string{
 const {locale,bundle}=options,files=site.pages.map(p=>p.file);
 let html=renderPage(page,site);
 const translate=(source:string):string=>{
  if(!/[A-Za-z]/.test(source))return source;
  const translated=bundle?.values[translationKey(source)];
  if(typeof translated!=='string'||!translated.trim()||translated.includes('{{ppp:'))throw new Error(`Missing translation: ${page.file}:${translationKey(source)}`);
  return translated;
 };
 if(locale==='zh-Hans'){
  if(!bundle||bundle.locale!==locale||bundle.baseHash!==pageHash(page))throw new Error(`Stale locale bundle: ${page.file}`);
  for(const entry of requiredTranslations(page,site))translate(entry.source);
  const edits=translationPositions(html).map(p=>{
   const raw=html.slice(p.start,p.end),value=escapePlainText(translate(p.source));
   // Preserve whitespace joining linked text fragments; Chinese copy itself is plain text.
   return {start:p.start,end:p.end,value:p.attribute?value:(raw.match(/^\s*/)?.[0]??'')+value+(raw.match(/\s*$/)?.[0]??'')};
  });
  for(const node of allNodes(parse(html,{sourceCodeLocationInfo:true})))if(node.tagName==='option'&&attr(node,'value')===undefined&&node.sourceCodeLocation?.startTag){
   const at=node.sourceCodeLocation.startTag.endOffset-1;
   edits.push({start:at,end:at,value:` value="${escapePlainText(readText(node))}"`});
  }
  html=applyEdits(html,edits);
  const doc:any=parse(html,{sourceCodeLocationInfo:true}),nodes=allNodes(doc),urlEdits:Edit[]=[];
  const faqs=nodes.filter(n=>n.tagName==='details').map(n=>{
   const summary=n.childNodes.find((c:any)=>c.tagName==='summary');
   return {question:normalizeText(readText(summary)),answer:normalizeText(n.childNodes.filter((c:any)=>c!==summary).map(readText).join(''))};
  });
  function localSchema(value:any,key='',parentType=''):any{
   if(Array.isArray(value))return value.map(v=>localSchema(v,key,parentType));
   if(value&&typeof value==='object'){
    const type=value['@type']??parentType;
    if(type==='FAQPage')return {...value,'@id':siteOrigin+localizedPath(page.file,locale)+'#faq',url:siteOrigin+localizedPath(page.file,locale),inLanguage:locale,mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))};
    return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,localSchema(v,k,type)]));
   }
   if(typeof value!=='string')return value;
   if(key==='inLanguage')return locale;
   if(['name','description','headline','articleBody','text','caption','serviceType'].includes(key)&&/[A-Za-z]/.test(value)&&!/^https?:/.test(value))return translate(value);
   if(['url','@id','item','mainEntityOfPage'].includes(key)&&value.startsWith(siteOrigin)&&!value.endsWith('#business')){
    if(parentType==='LocalBusiness')return value;
    const rewritten=localizeInternalHref(value,locale,files);return rewritten.startsWith('/')?siteOrigin+rewritten:rewritten;
   }return value;
  }
  for(const node of nodes){
   const loc=node.sourceCodeLocation;
   if(node.tagName==='script'&&attr(node,'type')==='application/ld+json'&&loc?.startTag&&loc?.endTag){
    const value=localSchema(JSON.parse(readText(node)));
    urlEdits.push({start:loc.startTag.endOffset,end:loc.endTag.startOffset,value:JSON.stringify(value).replace(/</g,'\\u003c')});continue;
   }
   for(const a of node.attrs??[]){
    let value=a.value;
    if(a.name==='lang'&&node.tagName==='html')value=locale;
    else if(a.name==='href'){
     value=localizeInternalHref(value,locale,files);
     if(value===a.value&&node.tagName==='link'&&attr(node,'rel')!=='canonical')value=absoluteResource(value);
     if(node.tagName==='link'&&attr(node,'rel')==='canonical')value=siteOrigin+localizedPath(page.file,locale);
    }else if(['src','poster','data-background-image'].includes(a.name)){
     value=absoluteResource(value);
     if(a.name==='src'&&node.tagName==='script'&&/^\/(?:contact-form|contact-prefill|navigation|site|suburb-search)\.js(?:\?|$)/.test(value))value=value.split('?')[0]+'?locale=zh-v1';
    }
    else if(['srcset','data-background-srcset'].includes(a.name))value=value.split(',').map((part:string)=>part.trim().replace(/^\S+/,absoluteResource)).join(', ');
    else if(a.name==='style')value=value.replace(/url\((["']?)([^)"']+)\1\)/g,(_m:string,q:string,path:string)=>`url(${q}${absoluteResource(path)}${q})`);
    else if(node.tagName==='meta'&&a.name==='content'){
     if(['og:url','twitter:url'].includes(attr(node,'property')??attr(node,'name')??''))value=siteOrigin+localizedPath(page.file,locale);
     if(attr(node,'property')==='og:locale')value='zh_CN';
    }
    if(value!==a.value&&loc?.attrs?.[a.name]){
     const al=loc.attrs[a.name];urlEdits.push({start:al.startOffset,end:al.endOffset,value:`${a.name}="${escapePlainText(value)}"`});
    }
   }
  }
  html=applyEdits(html,urlEdits);
 }
 const english=siteOrigin+localizedPath(page.file,'en-AU'),chinese=siteOrigin+localizedPath(page.file,'zh-Hans');
 const tags=`<link data-locale-alternate rel="alternate" hreflang="en-AU" href="${english}"><link data-locale-alternate rel="alternate" hreflang="zh-Hans" href="${chinese}"><link data-locale-alternate rel="alternate" hreflang="x-default" href="${english}">`;
 const target=locale==='en-AU'?'zh-Hans':'en-AU',label=locale==='en-AU'?'中文':'English';
 const entry=`<li data-locale-entry><a class="language-switch" href="${localizedPath(page.file,target)}" lang="${target}" hreflang="${target}" aria-label="${locale==='en-AU'?'切换到中文':'Switch to English'}">${label}</a></li>`;
 html=html.replace('</head>',tags+style+(locale==='zh-Hans'?chineseRuntimeConfig():'')+'</head>');
 html=html.replace(/(<nav\b[^>]*class="site-nav"[\s\S]*?)(<\/ul>\s*<\/nav>)/,`$1${entry}$2`);
 if(!html.includes('data-locale-entry'))throw new Error('Missing language navigation owner');
 return applyCustomerPaths(html.replace('</body>',switchScript+'</body>'),page.file,locale);
}
