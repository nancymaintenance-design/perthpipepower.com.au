import manifestData from '../content/locales/manifest.json' with {type:'json'};
import sharedData from '../content/locales/zh-Hans/shared.json' with {type:'json'};
import recordData from '../content/locales/zh-Hans/records.json' with {type:'json'};
import retainedEnglishData from '../content/locales/zh-Hans/retained-english.json' with {type:'json'};
import type {SiteData} from '../types.mjs';
import type {Locale,LocaleBundle} from './types.mjs';
import {hash,pageHash} from './fields.mjs';
import {requiredTranslations} from './render.mjs';
export interface LocaleManifest {
 schemaVersion:1;enabledLocales:readonly Locale[];
 approvals:Record<string,{chineseRevision:number;bundleHash:string;approvedAt:string}>;
}
export interface ApprovedLocaleBundle extends LocaleBundle {pageId:string}
export function validateLocaleCoverage(site:SiteData,bundles:readonly ApprovedLocaleBundle[]):readonly {pageId:string;fieldId:string;reason:string}[]{
 const issues:{pageId:string;fieldId:string;reason:string}[]=[];
 for(const page of site.pages){
  const matches=bundles.filter(b=>b.pageId===page.file&&b.locale==='zh-Hans');
  if(matches.length!==1){issues.push({pageId:page.file,fieldId:'',reason:'Missing or duplicate Chinese bundle'});continue;}
  const bundle=matches[0];
  if(bundle.schemaVersion!==1||bundle.baseHash!==pageHash(page))issues.push({pageId:page.file,fieldId:'',reason:'Stale source fingerprint'});
  const required=requiredTranslations(page,site),keys=new Set(required.map(r=>r.key));
  for(const {key} of required)if(typeof bundle.values[key]!=='string'||!bundle.values[key].trim())issues.push({pageId:page.file,fieldId:key,reason:'Missing translation'});
  for(const {key,source} of required)if(bundle.values[key]&&!/[\u3400-\u9fff]/.test(bundle.values[key])&&!(retainedEnglishData as string[]).includes(source))issues.push({pageId:page.file,fieldId:key,reason:'Untranslated text'});
  for(const key of Object.keys(bundle.values))if(!keys.has(key))issues.push({pageId:page.file,fieldId:key,reason:'Unregistered field'});
 }
 for(const bundle of bundles)if(!site.pages.some(p=>p.file===bundle.pageId))issues.push({pageId:bundle.pageId,fieldId:'',reason:'Unknown page'});
 return issues;
}
export const bundleHash=(bundle:ApprovedLocaleBundle):string=>hash(JSON.stringify(bundle));
export function validateLocaleManifest(site:SiteData,manifest:LocaleManifest,bundles:readonly ApprovedLocaleBundle[]):void{
 if(manifest?.schemaVersion!==1||!Array.isArray(manifest.enabledLocales)||manifest.enabledLocales[0]!=='en-AU'||new Set(manifest.enabledLocales).size!==manifest.enabledLocales.length||manifest.enabledLocales.some(l=>!['en-AU','zh-Hans'].includes(l)))throw new Error('Invalid enabled locales');
 if(!manifest.approvals||typeof manifest.approvals!=='object'||Array.isArray(manifest.approvals))throw new Error('Invalid locale approvals');
 if(!manifest.enabledLocales.includes('zh-Hans')){if(bundles.length||Object.keys(manifest.approvals).length)throw new Error('Disabled locale has active approvals');return;}
 const issues=validateLocaleCoverage(site,bundles);
 if(issues.length)throw new Error(`48-page locale coverage failed: ${issues[0].pageId}: ${issues[0].reason}`);
 if(bundles.length!==48||Object.keys(manifest.approvals).length!==48)throw new Error('48 exact locale approvals required');
 for(const bundle of bundles){
  const approval=manifest.approvals[`zh-Hans:${bundle.pageId}`];
  if(!approval||!Number.isSafeInteger(approval.chineseRevision)||approval.chineseRevision<1||approval.bundleHash!==bundleHash(bundle)||!/^\d{4}-\d{2}-\d{2}T/.test(approval.approvedAt)||!Number.isFinite(Date.parse(approval.approvedAt)))throw new Error(`Invalid locale approval: ${bundle.pageId}`);
 }
}
/** Reads versioned canonical translations only; never editor drafts or staged files. */
export function loadApprovedLocales(_sourceRoot:string,site:SiteData):readonly ApprovedLocaleBundle[]{
 // Like canonical pages, locale data is compiled input. sourceRoot selects
 // public assets only; it cannot redirect translations to a draft directory.
 const manifest=manifestData as LocaleManifest;
 if(!manifest.enabledLocales.includes('zh-Hans')){validateLocaleManifest(site,manifest,[]);return [];}
 const shared=sharedData as Record<string,string>;
 const bundles=site.pages.map(page=>{
  const record=(recordData as (Omit<ApprovedLocaleBundle,'values'>&{keys:string[]})[]).find(record=>record.pageId===page.file);
  if(!record)throw new Error(`Missing locale record: ${page.file}`);
  if(record.pageId!==page.file||!Array.isArray(record.keys)||record.keys.some(k=>typeof shared[k]!=='string')||new Set(record.keys).size!==record.keys.length)throw new Error(`Invalid locale record: ${page.file}`);
  const {keys,...metadata}=record;
  return {...metadata,values:Object.fromEntries(keys.map(k=>[k,shared[k]]))};
 });
 validateLocaleManifest(site,manifest,bundles);return bundles;
}
