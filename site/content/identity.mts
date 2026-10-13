import { readFileSync } from 'node:fs';
import business from './legacy/business-entity.mjs';
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
