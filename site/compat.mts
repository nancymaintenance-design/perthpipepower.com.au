import {lstatSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {loadSiteData} from './content/pages.mjs';
import expanded from './content/legacy/expanded-services.mjs';
import intent from './content/legacy/site-content-intent.mjs';
import guides from './content/legacy/region-guides.mjs';
import {renderSite} from './build/render-site.mjs';
import {addMachineDiscovery} from './discovery/machine.mjs';
import {renderPage} from './templates/page.mjs';
import {escapePlainText} from './templates/document.mjs';
import {assertNoLinks, isReportFixture, publicPath} from './build/copy-assets.mjs';
import type {TrustedHtml} from './types.mjs';
const machineSite = () => {const site=loadSiteData();return addMachineDiscovery(renderSite(site),site);};

export function fixtureRoot(root: string): string {
  const target=resolve(root);
  if (!isReportFixture(target)) throw new Error('Legacy writes require an isolated report fixture; use npm run build for dist.');
  assertNoLinks(target);
  if (!lstatSync(target,{throwIfNoEntry:false})?.isDirectory()) throw new Error('Missing fixture directory');
  return target;
}
function writeFixture(root: string, output: ReadonlyMap<string,string>): string[] {
  root=fixtureRoot(root);
  const pending: [string,string,string][]=[];
  for(const [file,text] of output) {
    const target=publicPath(root,file),stat=lstatSync(target,{throwIfNoEntry:false});
    if(stat&&!stat.isFile()) throw new Error(`Fixture target is not a file: ${file}`);
    const next=file.endsWith('.html')?text.replace(/\r\n/g,'\n').replace(/\n/g,'\r\n'):text;
    if(!stat||readFileSync(target,'utf8')!==next) pending.push([file,target,next]);
  }
  for(const [,target,text] of pending) writeFileSync(target,text);
  return pending.map(([file])=>file);
}
export function buildExpandedServices(root: string): number {
  const output=machineSite();
  const selected=new Set([...expanded.pages.map(p=>p.file),'sitemap.xml','ai-content.json']);
  writeFixture(root,new Map([...output].filter(([file])=>selected.has(file))));
  return expanded.pages.length;
}
export function buildConfirmedContent(root: string, _date?: string): {newServicePages:number;changed:string[]} {
  // The historical date argument is accepted but never redates approved content.
  return {newServicePages:expanded.pages.length,changed:writeFixture(root,machineSite())};
}
export function applySiteContent(root: string): void {
  const selected=new Set(Object.keys(intent.pages));
  writeFixture(root,new Map([...machineSite()].filter(([file])=>selected.has(file))));
}
export const regionGuides=guides.regionGuides;
export function applyGuide(_html: string, guide: {route:string}): string {
  const site=loadSiteData(),page=site.pages.find(p=>p.file===guide.route&&p.kind==='region');
  if(!page) throw new Error(`Unknown canonical region: ${guide.route}`);
  return addMachineDiscovery(renderSite(site),site).get(page.file)!;
}
export interface DecisionSection {
  id:string; heading:string; body:readonly string[]; topics?:readonly string[];
  bullets?:readonly string[]; links?:readonly (readonly [string,string])[];
}
/** Explicit test-only override on a detached typed page; no mutable reader API. */
export function applySiteContentFixture(root:string, file:string, sections:readonly DecisionSection[]): void {
  const site=loadSiteData(),page=site.pages.find(p=>p.file===file);
  if(!page) throw new Error('Unknown fixture page');
  const esc=escapePlainText;
  const html=sections.map(s=>`<div class="keyword-gap-part" id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.body.map((t,i)=>(s.topics?.[i]?`<h3>${esc(s.topics[i])}</h3>`:'')+`<p>${esc(t)}</p>`).join('')}${s.bullets?.length?`<ul>${s.bullets.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:''}${s.links?.length?`<ul class="intent-links">${s.links.map(([url,label])=>`<li><a href="${esc(url)}">${esc(label)}</a></li>`).join('')}</ul>`:''}</div>`).join('');
  const index=page.sections.findIndex(s=>s.kind==='faq');
  if(index<0) throw new Error('Fixture page requires FAQ placement');
  page.sections=[...page.sections.slice(0,index),{id:'fixture-decision-sections',kind:'rich',html:(`<section class="section keyword-gap-content"><div class="shell service-reading">${html}</div></section>`) as TrustedHtml},...page.sections.slice(index)];
  writeFixture(root,new Map([[file,renderPage(page,site)]]));
}
/** Isolated native-link fixture transform; published pages already carry canonical links. */
export function applyBookingContext(root:string): string[] {
  root=fixtureRoot(root);
  const site=loadSiteData(),services=new Set([...expanded.pages.map(p=>p.file),...Object.keys(intent.pages).filter(f=>site.pages.some(p=>p.file===f&&(p.kind==='service'||p.kind==='serviceHub')))]);
  const output=new Map<string,string>(),origin='https://perthpipepower.com.au';
  for(const file of readdirSync(root).filter(f=>f.endsWith('.html')&&f!=='privacy.html')) {
    const target=publicPath(root,file),old=readFileSync(target,'utf8');
    const withContext=(markup:string,service:string)=>markup.replace(/(<a\b[^>]*\bhref=")([^"]+)(")/gi,(all:string,open:string,href:string,close:string)=>{
      let url:URL;try{url=new URL(href.replace(/&amp;/g,'&'),origin+'/'+file);}catch{return all;}
      if(url.origin!==origin||url.pathname!=='/contact.html')return all;
      url.searchParams.set('service',service);
      return open+('contact.html'+url.search+url.hash).replace(/&/g,'&amp;')+close;
    });
    let html=services.has(file)?withContext(old,file):old;
    for(const [id,service]of [['plumbing-menu','plumbing.html'],['electrical-menu','electrical.html']]) html=html.replace(new RegExp('<ul[^>]*id="'+id+'"[^>]*>[\\s\\S]*?</ul>','g'),markup=>withContext(markup,service));
    if(file==='contact.html') {
      html=html.replace(/<option(?:\s+selected)?>Not sure<\/option>/,'<option selected>Not sure</option>');
      if(!html.includes('src="booking-context.js"')) html=html.replace(/<script src="contact-prefill\.js">/,'<script src="booking-context.js"></script>\n<script src="contact-prefill.js">');
    }
    if(html!==old) output.set(file,html);
  }
  return writeFixture(root,output);
}
