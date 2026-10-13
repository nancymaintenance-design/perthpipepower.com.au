import { readFileSync } from 'node:fs';
import business from './legacy/business-entity.mjs';
import { parseFragment, type DefaultTreeAdapterTypes as T } from 'parse5';
import type { SiteData } from '../types.mjs';
export const identity = business;
export interface ContentDate { sha256:string; lastmod:string }
export interface Suburb { name:string;slug:string;region:string;regionHub:string;nearby:string[];caseStatus:string }
const data = (name:string):unknown => JSON.parse(readFileSync(new URL(`../../../data/${name}.json`,import.meta.url),'utf8')) as unknown;
const record = (v:unknown):v is Record<string,unknown> => !!v && typeof v==='object'&&!Array.isArray(v);
function dateRecords(name:string):Readonly<Record<string,ContentDate>> {
  const values=data(name); if(!record(values))throw Error(`${name}: expected records`);
  for(const [file,value]of Object.entries(values))if(!/^[a-z0-9-]+\.html$/.test(file)||!record(value)||typeof value.sha256!=='string'||!/^[a-f0-9]{64}$/.test(value.sha256)||typeof value.lastmod!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value.lastmod)||!Number.isFinite(Date.parse(value.lastmod)))throw Error(`${name}: invalid content date for ${file}`);
  return values as unknown as Readonly<Record<string,ContentDate>>;
}
export function loadIdentityRecords(): {editorialDates:Readonly<Record<string,ContentDate>>;sitemapDates:Readonly<Record<string,ContentDate>>;suburbs:readonly Suburb[]} {
  const suburbs=data('perth-suburbs');if(!Array.isArray(suburbs))throw Error('perth-suburbs: expected array');
  const seen=new Set<string>();
  for(const s of suburbs){
    if(!record(s)||!['name','slug','region','regionHub','caseStatus'].every(k=>typeof s[k]==='string')||!Array.isArray(s.nearby)||!s.nearby.every(v=>typeof v==='string')||!String(s.slug).match(/^[a-z0-9-]+$/)||seen.has(String(s.slug)))throw Error('perth-suburbs: invalid or duplicate suburb');
    seen.add(String(s.slug));
  }
  return {editorialDates:dateRecords('editorial-content-dates'),sitemapDates:dateRecords('sitemap-content-dates'),suburbs:suburbs as Suburb[]};
}
export function validateIdentityRecords():void {loadIdentityRecords();}
/** Serialized dates preserve formatting, but cannot contradict the unique JSON records. */
export function validatePublishedDates(site:SiteData):void {
  const records=loadIdentityRecords();
  const xml=site.artifacts['sitemap.xml']??'';
  const dates=new Map<string,string>();
  for(const block of xml.matchAll(/<url>\s*([\s\S]*?)<\/url>/g)){
    const url=block[1].match(/<loc>([^<]+)<\/loc>/)?.[1];const date=block[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if(!url||!date)throw Error('Sitemap date mismatch: URL or lastmod missing');
    const file=new URL(url).pathname.slice(1)||'index.html';dates.set(file,date);
    if(records.sitemapDates[file]?.lastmod!==date)throw Error(`Sitemap date mismatch for ${file}; update the authoritative record and its formatting companion together`);
  }
  for(const [file,entry]of Object.entries(records.sitemapDates))if(file!=='privacy.html'&&dates.get(file)!==entry.lastmod)throw Error(`Sitemap date mismatch for ${file}`);
  for(const page of site.pages.filter(p=>p.kind==='article')){
    const expected=records.editorialDates[page.file]?.lastmod;if(!expected)throw Error(`Editorial date mismatch for ${page.file}: missing record`);
    let modified=0;
    function schema(value:unknown):void {if(Array.isArray(value))value.forEach(schema);else if(record(value)){for(const [key,item]of Object.entries(value)){if(key==='dateModified'){modified++;if(item!==expected)throw Error(`Editorial date mismatch for ${page.file}`);}else schema(item);}}}
    page.seo.jsonLd.forEach(schema);if(!modified)throw Error(`Editorial date mismatch for ${page.file}: no modified date`);
    const rich=(page.hero??'')+page.sections.map(s=>s.kind==='rich'?s.html:s.container).join('');let visible=0;
    const text=(n:T.Node):string=>n.nodeName==='#text'?(n as T.TextNode).value:'childNodes' in n?n.childNodes.map(text).join(''):'';
    const label=new Intl.DateTimeFormat('en-AU',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(expected));
    function walk(n:T.Node):void {if('tagName' in n&&n.tagName==='time'){visible++;if(n.attrs.find(a=>a.name==='datetime')?.value!==expected||text(n)!==label)throw Error(`Visible editorial date mismatch for ${page.file}`);}if('childNodes' in n)n.childNodes.forEach(walk);}
    walk(parseFragment(rich));if(!visible)throw Error(`Visible editorial date mismatch for ${page.file}: missing time`);
  }
}
