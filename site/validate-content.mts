import { isDeepStrictEqual } from 'node:util';
import type { Difference } from './baseline.mjs';
import type { SiteData, PageData, LayoutData } from './types.mjs';
import { expectedPageFiles } from './content/pages.mjs';
import { headers, footers } from './content/layouts.mjs';

const record=(v:unknown):v is Record<string,unknown> => !!v&&typeof v==='object'&&!Array.isArray(v);
const strings=(v:unknown):v is Record<string,string> => record(v)&&Object.values(v).every(x=>typeof x==='string');
const kinds=new Set(['home','serviceHub','service','region','directory','article','contentHub','about','contact','faq','privacy']);
const seoKeys=new Set(['title','description','canonical','robots','social','jsonLd']);
const artifacts=new Set(['sitemap.xml','robots.txt','llms.txt','ai-content.json','feed.xml','rss.xml','atom.xml']);
const token=(name:string):string=>`{{ppp:${name}}}`;
const count=(value:string,needle:string):number=>value.split(needle).length-1;
export function isSafePublicPath(file:unknown):file is string {
  return typeof file==='string'&&file.length>0&&file.split('/').every(part=>/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(part)&&!part.includes('..'))&&!file.includes('%')&&!file.includes('\\');
}
export function validateSiteData(site:SiteData):Difference[] {
  const differences:Difference[]=[];
  const fail=(file:string,field:string,expected:unknown,actual:unknown):void=>{differences.push({file,field,expected,actual});};
  if(!record(site)||!Array.isArray(site.pages)||!record(site.layouts)||!Array.isArray(site.assets)||!strings(site.artifacts)){
    fail('site','shape','pages, layouts, assets and artifacts',site);return differences;
  }
  const seen=new Set<string>();
  for(const page of site.pages as readonly unknown[]){
    if(!record(page)||typeof page.file!=='string'){fail('site','page','named page record',page);continue;}
    const file=page.file;
    if(!isSafePublicPath(file)||!/^[a-z0-9-]+\.html$/.test(file))fail(file,'file','safe lowercase root HTML route',file);
    const folded=file.toLowerCase();if(seen.has(folded))fail(file,'duplicate','unique route ignoring case',file);seen.add(folded);
    if(!expectedPageFiles.includes(file))fail(file,'unexpected','registered candidate page',file);
    if(typeof page.kind!=='string'||!kinds.has(page.kind))fail(file,'kind','supported PageKind',page.kind);
    if(typeof page.layoutId!=='string'||!Object.hasOwn(site.layouts,page.layoutId))fail(file,'layoutId','existing layout reference',page.layoutId);
    if(!strings(page.mainAttributes)||!(page.hero===null||typeof page.hero==='string')||!Array.isArray(page.sections)||!Array.isArray(page.breadcrumbs)||!(page.breadcrumbContainer===null||typeof page.breadcrumbContainer==='string')){
      fail(file,'content.shape','typed attributes, hero, sections and breadcrumbs',page);continue;
    }
    if(page.chromeBindings!==undefined&&!strings(page.chromeBindings)){fail(file,'chromeBindings','plain string bindings',page.chromeBindings);continue;}
    for(const key of Object.keys(page.mainAttributes))if(!/^[a-zA-Z_:][a-zA-Z0-9_:.-]*$/.test(key))fail(file,'mainAttributes.name','valid attribute name',key);
    if(!record(page.seo)||typeof page.seo.title!=='string'||!page.seo.title||typeof page.seo.description!=='string'||!page.seo.description||typeof page.seo.canonical!=='string'||!(page.seo.robots===null||typeof page.seo.robots==='string')||!Array.isArray(page.seo.social)||!Array.isArray(page.seo.jsonLd)){
      fail(file,'seo.shape','complete typed SEO fields',page.seo);continue;
    }
    const seo=page.seo;
    try{const url=new URL(seo.canonical as string);if(url.origin!=='https://perthpipepower.com.au'||url.username||url.password||url.search||url.hash||url.pathname!==(file==='index.html'?'/':`/${file}`))fail(file,'canonical','matching route on https://perthpipepower.com.au',seo.canonical);}
    catch{fail(file,'canonical','absolute approved canonical URL',seo.canonical);}
    for(const item of seo.social as unknown[])if(!record(item)||!['name','property'].includes(String(item.attribute))||typeof item.key!=='string'||!/^(og:|twitter:)/.test(item.key)||typeof item.value!=='string')fail(file,'social','typed social metadata',item);
    for(const item of seo.jsonLd as unknown[]){
      try{if((!record(item)&&!Array.isArray(item))||!isDeepStrictEqual(JSON.parse(JSON.stringify(item)),item))fail(file,'jsonLd','JSON object or array without lossy values',item);}
      catch{fail(file,'jsonLd','serializable JSON object or array',item);}
    }
    if(seo.jsonLdSource!==undefined){
      if(!Array.isArray(seo.jsonLdSource)||seo.jsonLdSource.length!==(seo.jsonLd as unknown[]).length)fail(file,'jsonLdSource','same count as jsonLd',seo.jsonLdSource);
      else for(const [i,source]of seo.jsonLdSource.entries()){
        try{if(typeof source!=='string'||!isDeepStrictEqual(JSON.parse(source),(seo.jsonLd as unknown[])[i]))fail(file,`jsonLdSource.${i}`,'formatting-only companion of jsonLd',source);}
        catch{fail(file,`jsonLdSource.${i}`,'valid JSON source',source);}
      }
    }
    const content:string[]=[];const ids=new Set<string>();
    if(typeof page.hero==='string'){content.push(page.hero);checkTokens(page.hero,new Set(['breadcrumbs']));}
    for(const section of page.sections){
      if(!record(section)||typeof section.id!=='string'||!section.id||ids.has(section.id)){fail(file,'sections','unique named sections',section);continue;}
      ids.add(section.id);
      if(section.kind==='rich'&&typeof section.html==='string'){content.push(section.html);checkTokens(section.html,new Set(['breadcrumbs']));}
      else if(section.kind==='faq'&&typeof section.container==='string'&&Array.isArray(section.items)){
        content.push(section.container);
        for(const [i,item]of section.items.entries()){
          if(!record(item)||typeof item.question!=='string'||typeof item.answer!=='string'){fail(file,'faq','typed question and trusted answer',item);continue;}
          for(const key of ['question','answer'])if(count(section.container,token(`faq:${i}:${key}`))!==1)fail(file,'faq.slot','one slot per FAQ field',`${section.id}:${i}:${key}`);
        }
        const actual=[...section.container.matchAll(/\{\{ppp:faq:[^}]+\}\}/g)].length;
        if(actual!==section.items.length*2)fail(file,'faq.slots',section.items.length*2,actual);
        checkTokens(section.container,new Set(['breadcrumbs',...section.items.flatMap((_,i)=>[`faq:${i}:question`,`faq:${i}:answer`])]));
      }else fail(file,'section.shape','rich or FAQ section',section);
    }
    for(const value of content)if(/<\/?(?:html|body|head)\b/i.test(value))fail(file,'content.document','section fragment only','document wrapper');
    for(const [i,crumb]of page.breadcrumbs.entries()){
      if(!record(crumb)||typeof crumb.label!=='string'||!(crumb.href===null||typeof crumb.href==='string')){fail(file,'breadcrumbs','typed label and href',crumb);continue;}
      if(typeof page.breadcrumbContainer!=='string'||count(page.breadcrumbContainer,token(`breadcrumb:${i}:label`))!==1)fail(file,'breadcrumb.slot','one label slot',i);
      if(crumb.href!==null&&(typeof page.breadcrumbContainer!=='string'||count(page.breadcrumbContainer,token(`breadcrumb:${i}:href`))!==1))fail(file,'breadcrumb.slot','one href slot',i);
    }
    if(page.breadcrumbContainer!==null){if(count(content.join(''),token('breadcrumbs'))!==1)fail(file,'breadcrumbs.placement','one explicit content placement',content.join('').match(/\{\{ppp:breadcrumbs\}\}/g)?.length??0);}
    else if(page.breadcrumbs.length)fail(file,'breadcrumbs.container','container for items',null);
    if(typeof page.breadcrumbContainer==='string')checkTokens(page.breadcrumbContainer,new Set(page.breadcrumbs.flatMap((crumb,i)=>record(crumb)&&crumb.href!==null?[`breadcrumb:${i}:label`,`breadcrumb:${i}:href`]:[`breadcrumb:${i}:label`])));
    if(file==='privacy.html'&&!/noindex/i.test(String(seo.robots)))fail(file,'robots','privacy remains noindex',seo.robots);
    if(typeof page.layoutId==='string'&&record(site.layouts[page.layoutId]))validateReferences(page as unknown as PageData,site.layouts[page.layoutId]);
    function checkTokens(value:string,allowed:Set<string>):void {
      for(const match of value.matchAll(/\{\{ppp:([^}]+)\}\}/g))if(!allowed.has(match[1]))fail(file,'content.token','declared structured slot',match[1]);
    }
  }
  for(const file of expectedPageFiles)if(!seen.has(file))fail(file,'missing','registered candidate page',null);
  const usedLayouts=new Set(site.pages.filter(p=>record(p)&&typeof p.layoutId==='string').map(p=>p.layoutId));
  for(const [id,layout]of Object.entries(site.layouts)){
    if(!record(layout)||!['documentOpen','bodyOpen','headerId','footerId','beforeMain','afterMain','documentClose'].every(k=>typeof layout[k]==='string')||!Array.isArray(layout.headSlots)||!Array.isArray(layout.scripts)||!layout.scripts.every(s=>typeof s==='string')){fail(id,'layout.shape','typed LayoutData',layout);continue;}
    if(!Object.hasOwn(headers,layout.headerId as string))fail(id,'headerId','existing shared header',layout.headerId);
    if(!Object.hasOwn(footers,layout.footerId as string))fail(id,'footerId','existing shared footer',layout.footerId);
    if(!usedLayouts.has(id))fail(id,'layout.unused','layout referenced by a page',id);
    if(/<(?:header|footer|nav)\b/i.test(String(layout.beforeMain)+String(layout.afterMain)))fail(id,'layout.chrome','chrome only in registries','embedded chrome');
    for(const slot of layout.headSlots){
      if(!record(slot)){fail(id,'headSlot','typed slot',slot);continue;}
      if(slot.kind==='seo'&&typeof slot.key==='string'&&seoKeys.has(slot.key))continue;
      if(slot.kind==='static'&&typeof slot.html==='string'){
        if(/<title\b|<[^>]+(?:name|property)\s*=\s*["'](?:description|robots|og:|twitter:)|<[^>]+rel\s*=\s*["']canonical|application\/ld\+json/i.test(slot.html))fail(id,'headSlot.static','SEO only through SeoData','duplicated metadata');
      }else fail(id,'headSlot','valid SEO or static slot',slot);
    }
  }
  const outputs=new Set<string>(seen);
  for(const asset of site.assets){
    if(!isSafePublicPath(asset))fail(String(asset),'asset.path','safe relative public path',asset);
    const key=String(asset).toLowerCase();if(outputs.has(key))fail(String(asset),'asset.duplicate','unique output path',asset);outputs.add(key);
  }
  for(const file of Object.keys(site.artifacts)){
    if(!isSafePublicPath(file)||!artifacts.has(file))fail(file,'artifact.path','known public artifact',file);
    if(outputs.has(file.toLowerCase()))fail(file,'artifact.duplicate','unique output path',file);outputs.add(file.toLowerCase());
  }
  return differences;

  function validateReferences(page:PageData,layout:LayoutData):void {
    if(!Array.isArray(layout.headSlots))return;
    const counts:Record<string,number>={};for(const slot of layout.headSlots)if(record(slot)&&slot.kind==='seo'&&typeof slot.key==='string')counts[slot.key]=(counts[slot.key]??0)+1;
    for(const [key,expected]of Object.entries({title:1,description:1,canonical:1,robots:page.seo.robots===null?0:1,social:page.seo.social.length,jsonLd:page.seo.jsonLd.length}))if((counts[key]??0)!==expected)fail(page.file,`headSlots.${key}`,expected,counts[key]??0);
    const slots={...headers[layout.headerId]?.slots,...footers[layout.footerId]?.slots};
    const bindings=page.chromeBindings??{};
    for(const key of Object.keys(slots))if(typeof bindings[key]!=='string')fail(page.file,'chrome.missingBinding',key,bindings[key]);
    for(const key of Object.keys(bindings))if(!Object.hasOwn(slots,key))fail(page.file,'chrome.unusedBinding','referenced slot',key);
    for(const template of [headers[layout.headerId],footers[layout.footerId]])if(template){
      for(const [key,kind]of Object.entries(template.slots))if(!['text','attribute'].includes(kind)||count(template.html,token(key))!==1)fail(page.file,'chrome.slot','one typed text or attribute slot',key);
      if([...template.html.matchAll(/\{\{ppp:[^}]+\}\}/g)].length!==Object.keys(template.slots).length)fail(page.file,'chrome.tokens','no undeclared tokens',template.html);
    }
  }
}
