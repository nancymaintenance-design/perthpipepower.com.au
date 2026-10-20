import {parse} from 'parse5';
import {siteOrigin,localizedPath} from '../localization/routes.mjs';
import type {Locale} from '../localization/types.mjs';
import type {SiteData} from '../types.mjs';
import {escapePlainText as esc} from '../templates/document.mjs';

interface Route {parent:string|null;owner:string|null;group:string;label:readonly [string,string];reason:string}
const r=(parent:string|null,owner:string|null,group:string,en:string,zh:string,reason='Existing service scope, published content and navigation'):Route=>({parent,owner,group,label:[en,zh],reason});
// Explicit editorial relationships, not pathname or keyword inference.
export const customerRoutes:Readonly<Record<string,Route>>={
 'index.html':r(null,'index.html','city','Home','首页','Keep the existing city-wide homepage role'),
 'plumbing.html':r('index.html','plumbing.html','plumbing','Plumbing repairs','管道维修'),
 'electrical.html':r('index.html','electrical.html','electrical','Electrical repairs','电气维修','Confirmed electrical repairs query owner'),
 'property-management.html':r('index.html','property-management.html','property','Property maintenance','物业维护','Confirmed property-management drainage owner'),
 'blocked-drains-perth.html':r('plumbing.html','blocked-drains-perth.html','drainage','Blocked drains','排水管疏通','Confirmed blocked drain and drain repair query owner'),
 'water-leak-detection-perth.html':r('plumbing.html','water-leak-detection-perth.html','leaks','Water leak detection','漏水检测','Confirmed leak detection query owner'),
 'burst-pipe-repair-perth.html':r('plumbing.html','burst-pipe-repair-perth.html','leaks','Burst pipe repairs','爆管维修','Confirmed burst-pipe query owner'),
 'hot-water-problems-perth.html':r('plumbing.html','hot-water-problems-perth.html','hot-water','Hot-water repairs','热水维修','Confirmed hot-water repair and replacement owner'),
 'tap-mixer-repairs-perth.html':r('plumbing.html','tap-mixer-repairs-perth.html','fixtures','Tap and mixer repairs','水龙头维修'),
 'toilet-repairs-perth.html':r('plumbing.html','toilet-repairs-perth.html','fixtures','Toilet repairs','马桶维修'),
 'fixtures-appliances-perth.html':r('plumbing.html','fixtures-appliances-perth.html','fixtures','Fixtures and appliance connections','配件及电器连接','Confirmed leaking-sink/fixture service owner'),
 'dishwasher-installation-perth.html':r('plumbing.html','dishwasher-installation-perth.html','fixtures','Dishwasher installation','洗碗机安装'),
 'toilet-installation-perth.html':r('plumbing.html','toilet-installation-perth.html','fixtures','Toilet installation','马桶安装'),
 'shower-plumbing-repairs-perth.html':r('plumbing.html','shower-plumbing-repairs-perth.html','leaks','Shower plumbing repairs','淋浴管道维修'),
 'water-pressure-perth.html':r('plumbing.html','water-pressure-perth.html','plumbing','Water pressure and water hammer','水压与水锤'),
 'emergency-plumber-perth.html':r('plumbing.html','emergency-plumber-perth.html','plumbing','Emergency plumbing','紧急管道维修'),
 'power-faults-perth.html':r('electrical.html','power-faults-perth.html','electrical','Electrical fault finding','电气故障排查'),
 'safety-switch-tripping-perth.html':r('electrical.html','safety-switch-tripping-perth.html','electrical','Safety-switch repairs','安全开关维修'),
 'lighting-installation-perth.html':r('electrical.html','lighting-installation-perth.html','electrical','Lighting installation and repairs','照明安装与维修'),
 'power-points-perth.html':r('electrical.html','power-points-perth.html','electrical','Power point repairs and installation','插座维修与安装'),
 'lighting-power-points-perth.html':r('electrical.html','electrical.html','electrical','Lighting and power point overview','照明与插座服务概览','Retain overview; dedicated lighting and outlet owners are unchanged'),
 'smoke-alarm-maintenance-perth.html':r('electrical.html','smoke-alarm-maintenance-perth.html','electrical','Smoke alarm maintenance','烟雾报警器维护'),
 'renewables-smart-home-perth.html':r('electrical.html','renewables-smart-home-perth.html','electrical','Smart home electrical work','智能家居电气工程'),
 'ceiling-fans-perth.html':r('electrical.html','ceiling-fans-perth.html','electrical','Ceiling fans','吊扇安装与维修'),
 'exhaust-fans-perth.html':r('electrical.html','exhaust-fans-perth.html','electrical','Exhaust fans','排气扇更换'),
 'switchboard-upgrades-perth.html':r('electrical.html','switchboard-upgrades-perth.html','electrical','Switchboard repairs and upgrades','配电箱维修与升级'),
 'rcd-testing-perth.html':r('electrical.html','rcd-testing-perth.html','electrical','RCD testing','RCD 检测'),
 'emergency-electrician-perth.html':r('electrical.html','emergency-electrician-perth.html','electrical','Emergency electrical repairs','紧急电气维修'),
 'insights-reporting-a-plumbing-leak.html':r('water-leak-detection-perth.html','water-leak-detection-perth.html','leaks','Reporting a plumbing leak','如何报告管道漏水','The guide explains leak investigation, access and repair'),
 'insights-safety-switch-keeps-tripping.html':r('safety-switch-tripping-perth.html','safety-switch-tripping-perth.html','electrical','When a safety switch keeps tripping','安全开关反复跳闸','Single safety-switch fault-reporting guide'),
 'insights-hot-water-plumbing-or-electrical.html':r('hot-water-problems-perth.html','hot-water-problems-perth.html','hot-water','Understanding hot-water faults','了解热水故障','Single hot-water topic, including plumbing and electrical components'),
 'insights-tenant-property-manager-maintenance-handover.html':r('property-management.html','property-management.html','property','Tenant and property manager handover','租客与物业经理的维修交接','Managed-property work orders, access and approvals'),
 'service-areas.html':r('index.html',null,'areas','Service areas','服务区域'),
 'perth-cbd-inner-suburbs.html':r('service-areas.html',null,'areas','CBD and Inner Perth','市中心及内城区'),
 'northern-suburbs.html':r('service-areas.html',null,'areas','Northern Suburbs','北部地区'),
 'southern-suburbs.html':r('service-areas.html',null,'areas','Southern Suburbs','南部地区'),
 'eastern-suburbs.html':r('service-areas.html',null,'areas','Eastern Suburbs','东部地区'),
 'western-suburbs.html':r('service-areas.html',null,'areas','Western Suburbs','西部地区'),
 'perth-hills-swan-valley.html':r('service-areas.html',null,'areas','Perth Hills and Swan Valley','珀斯山区与天鹅谷'),
 'insights.html':r('index.html',null,'guides','Repair guides','维修指南'),
 'news.html':r('index.html',null,'news','News','新闻'),
 'news-clearer-property-maintenance-enquiry.html':r('news.html','property-management.html','property','Property maintenance enquiries','物业维修咨询','Keep real news collection; link to property maintenance in context'),
 'news-keeping-access-information-together.html':r('news.html','property-management.html','property','Access details for repair visits','维修上门的入场信息','Multi-service news keeps its genuine collection'),
 'news-useful-property-work-order.html':r('news.html','property-management.html','property','Preparing a repair work order','准备维修工单','Multi-service work-order news keeps its genuine collection'),
 'about.html':r('index.html',null,'company','About us','关于我们'),
 'contact.html':r('index.html',null,'contact','Contact us','联系我们'),
 'faq.html':r('index.html',null,'guides','Frequently asked questions','常见问题'),
 'privacy.html':r('index.html',null,'company','Privacy policy','隐私政策')
};
export function customerTrail(file:string,registry:Readonly<Record<string,Route>>=customerRoutes):string[]{
 const result:string[]=[];let current:string|null=file;
 while(current!==null){if(!registry[current]||result.includes(current))throw Error('Invalid or cyclic customer parent: '+current);result.unshift(current);current=registry[current].parent;}
 return result;
}
export function validateCustomerRoutes(site:SiteData,registry:Readonly<Record<string,Route>>=customerRoutes):void{
 const pages=new Map(site.pages.map(p=>[p.file,p]));
 if(pages.size!==Object.keys(registry).length)throw Error('Customer route coverage mismatch');
 for(const [file,route]of Object.entries(registry)){
  if(!pages.has(file))throw Error('Unregistered customer route: '+file);
  for(const target of customerTrail(file,registry).slice(0,-1))if(pages.get(target)?.seo.robots?.includes('noindex'))throw Error('Nonindexable customer parent: '+target);
  if(route.owner&&(!pages.has(route.owner)||!['home','service','serviceHub'].includes(pages.get(route.owner)!.kind)))throw Error('Invalid commercial service: '+file);
 }
}
const nodes=(n:any):any[]=>[n,...(n.childNodes??[]).flatMap(nodes)],attr=(n:any,k:string):string|undefined=>n.attrs?.find((a:any)=>a.name===k)?.value;
const text=(n:any):string=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const label=(file:string,locale:Locale)=>customerRoutes[file].label[locale==='en-AU'?0:1];
const url=(file:string,locale:Locale)=>siteOrigin+localizedPath(file,locale);
const style=`<style data-customer-path-style>.customer-breadcrumb{font-size:.9rem;margin:0;padding:0;max-width:100%}.customer-breadcrumb ol{display:flex;flex-wrap:wrap;gap:.25rem 0;list-style:none;margin:0;padding:0}.customer-breadcrumb li{display:inline;min-width:0;overflow-wrap:anywhere}.customer-breadcrumb li+li:before{content:"";display:inline-block;width:.35em;height:.35em;border-top:1px solid;border-right:1px solid;transform:rotate(45deg);margin:0 .65em;opacity:.65}.customer-breadcrumb a{display:inline-block;padding:.25rem 0;text-underline-offset:.2em}.customer-breadcrumb a:focus-visible,.customer-next a:focus-visible{outline:3px solid var(--field-yellow);outline-offset:3px}.customer-next{margin:1rem 0;line-height:1.65;max-width:100%;overflow-wrap:anywhere}.customer-next ul{display:flex;flex-wrap:wrap;gap:.4rem 1.2rem;list-style:none;padding:0;margin:.35rem 0}.customer-next strong{font-size:1rem}.customer-next a{display:inline-block;padding:.2rem 0;text-underline-offset:.2em}.customer-next a:hover{text-decoration-thickness:2px}</style>`;
/** Bounded initial-HTML projection: no canonical, title, content or layout rewrites. */
export function applyCustomerPaths(html:string,file:string,locale:Locale):string{
 if(file==='privacy.html')return html; // Noindex legal page is not a commercial hierarchy target.
 const route=customerRoutes[file];if(!route)throw Error('Missing customer route: '+file);
 const all=nodes(parse(html,{sourceCodeLocationInfo:true})),edits:{start:number;end:number;value:string}[]=[];
 const old=all.filter(n=>n.tagName&&(/\bbreadcrumbs?\b/.test(attr(n,'class')??'')||/breadcrumb/i.test(attr(n,'aria-label')??'')));
 const oldRoots=old.filter(n=>!old.some(a=>a!==n&&a.sourceCodeLocation?.startOffset<=n.sourceCodeLocation?.startOffset&&a.sourceCodeLocation?.endOffset>=n.sourceCodeLocation?.endOffset));
 const trail=customerTrail(file),canonical=url(file,locale);
 const nav=file==='index.html'?'':`<nav class="customer-breadcrumb" data-customer-breadcrumb data-owner-id="${esc(route.owner??'')}" aria-label="${locale==='en-AU'?'Breadcrumb':'面包屑导航'}"><ol>${trail.map((f,i)=>`<li>${i===trail.length-1?`<span aria-current="page">${esc(label(f,locale))}</span>`:`<a href="${url(f,locale)}" data-breadcrumb-position="${i+1}">${esc(label(f,locale))}</a>`}</li>`).join('')}</ol></nav>`;
 oldRoots.forEach((n,i)=>edits.push({start:n.sourceCodeLocation.startOffset,end:n.sourceCodeLocation.endOffset,value:i===0?nav:''}));
 if(!oldRoots.length&&nav){const main=all.find(n=>n.tagName==='main');if(!main)throw Error('Missing main');edits.push({start:main.sourceCodeLocation.startTag.endOffset,end:main.sourceCodeLocation.startTag.endOffset,value:nav});}
 const scripts=all.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json');let attached=false;
 for(const n of scripts){const value=JSON.parse(text(n)),entities=value['@graph']??(Array.isArray(value)?value:[value]);
  const keep=entities.filter((entity:any)=>entity['@type']!=='BreadcrumbList');
  for(const entity of keep)if(entity['@type']==='WebPage'){if(nav)entity.breadcrumb={'@id':canonical+'#breadcrumb'};else delete entity.breadcrumb;}
  if(!attached&&nav){keep.push({'@type':'BreadcrumbList','@id':canonical+'#breadcrumb',itemListElement:trail.map((f,i)=>({'@type':'ListItem',position:i+1,name:label(f,locale),item:url(f,locale)}))});attached=true;}
  const next=value['@graph']?{...value,'@graph':keep}:Array.isArray(value)?keep:keep.length===1?keep[0]:{'@context':'https://schema.org','@graph':keep};
  edits.push({start:n.sourceCodeLocation.startTag.endOffset,end:n.sourceCodeLocation.endTag.startOffset,value:JSON.stringify(next).replace(/</g,'\\u003c')});
 }
 if(nav&&!attached)throw Error('Missing schema graph: '+file);
 // Real reciprocal entries, only where the parent's main content lacks them.
 const main=all.find(n=>n.tagName==='main'),mainNodes=nodes(main),linked=new Set(mainNodes.filter(n=>n.tagName==='a'&&!oldRoots.some(a=>nodes(a).includes(n))).map(n=>{try{return new URL(attr(n,'href')??'',canonical).href;}catch{return '';}}));
 const targets=file==='index.html'?[]:Object.entries(customerRoutes).filter(([f,r])=>r.parent===file&&f!=='privacy.html'&&!linked.has(url(f,locale))).map(([f])=>f);
 const isSupport=route.owner&&route.owner!==file&&(file.startsWith('news-')||file.startsWith('insights-'));
 if(isSupport&&route.owner){
  const heading=mainNodes.find(n=>n.tagName==='h1'),intro=mainNodes.find(n=>n.tagName==='p'&&text(n).trim().length>80&&n.sourceCodeLocation?.startOffset>heading?.sourceCodeLocation?.endOffset);
  if(!intro)throw Error('Missing guide introduction: '+file);
  const entry=`<nav class="customer-next" data-customer-next data-service-entry aria-label="${locale==='en-AU'?'Repair service and enquiry':'维修服务与咨询'}"><a href="${url(route.owner,locale)}">${esc(label(route.owner,locale))}</a> · <a href="#enquiry">${locale==='en-AU'?'Ask us about a repair':'向我们咨询维修'}</a></nav>`;
  edits.push({start:intro.sourceCodeLocation.endOffset,end:intro.sourceCodeLocation.endOffset,value:entry});
 }
 if(targets.length){const title=locale==='en-AU'?'Services and repair guides':'服务与维修指南';
  const next=`<nav class="customer-next" data-customer-next aria-label="${title}"><strong>${title}</strong><ul>${[...new Set(targets)].map(f=>`<li><a href="${url(f,locale)}">${esc(label(f,locale))}</a></li>`).join('')}</ul></nav>`;
  const host=all.find(n=>attr(n,'class')?.split(/\s+/).includes('enquiry-content'))??main;
  edits.push({start:host.sourceCodeLocation.endTag.startOffset,end:host.sourceCodeLocation.endTag.startOffset,value:next});
 }
 for(const e of edits.sort((a,b)=>b.start-a.start))html=html.slice(0,e.start)+e.value+html.slice(e.end);
 return html.replace('</head>',style+'</head>');
}
