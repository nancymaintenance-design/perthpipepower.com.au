/** Explicit maintainer packaging of reviewed public copy, never editor drafts. */
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {loadSiteData} from '../site/content/pages.mjs';
import {bundleHash,type ApprovedLocaleBundle,type LocaleManifest} from '../site/localization/approved.mjs';
import {pageHash} from '../site/localization/fields.mjs';
import {projectRoot} from '../site/build/copy-assets.mjs';
if(process.argv.slice(2).join(' ')!=='--write-reviewed')throw new Error('Use --write-reviewed only after complete translation review');
const scratch=resolve(projectRoot,'.superpowers/sdd/2026-10-16-bilingual-local-editor/translations');
const candidate=JSON.parse(readFileSync(resolve(scratch,'candidate.json'),'utf8')) as {completed:number[];values:Record<string,string>;bundles:ApprovedLocaleBundle[]};
const quality=JSON.parse(readFileSync(resolve(scratch,'quality.json'),'utf8')) as {missing:string[];contactWarnings:unknown[];shortWarnings:unknown[];englishWarnings:unknown[];plainEnglish:{source:string;key:string}[]};
if(candidate.completed.length!==103||candidate.bundles.length!==48||quality.missing.length||quality.contactWarnings.length||quality.shortWarnings.length||quality.englishWarnings.length)throw new Error('Public copy review gates incomplete');
const site=loadSiteData();
for(const page of site.pages)if(candidate.bundles.find(b=>b.pageId===page.file)?.baseHash!==pageHash(page))throw new Error('Stale translation source');
const suburbs=new Set((JSON.parse(readFileSync(resolve(projectRoot,'data/perth-suburbs.json'),'utf8')) as {name:string}[]).map(s=>s.name));
suburbs.add('Thornlie'); // Existing Southern Suburbs service copy, outside the 126 legacy aliases.
const retained=quality.plainEnglish.map(row=>{
 if(!suburbs.has(row.source)&&! /^(?:Ellis Services Group|ELLIS SERVICES GROUP PTY LTD(?: ·)?|ABN & ACN|ABN 96 645 821 745|ACN 645 821 745|Instagram|Facebook|LinkedIn|maxinemaintenance\.au@outlook\.com|140 St Georges Terrace, Perth WA 6000|AUD \$[\d,$–. -]+)$/.test(row.source))throw new Error(`Unreviewed English retention: ${row.source}`);
 if(candidate.values[row.key]!==row.source)throw new Error('Untranslated non-CJK value changed');return row.source;
});
const manifest:LocaleManifest={schemaVersion:1,enabledLocales:['en-AU','zh-Hans'],approvals:{}};
const approvedAt=new Date().toISOString();
for(const bundle of candidate.bundles)manifest.approvals[`zh-Hans:${bundle.pageId}`]={chineseRevision:1,bundleHash:bundleHash(bundle),approvedAt};
const root=resolve(projectRoot,'site/content/locales');
const write=(file:string,value:unknown)=>writeFileSync(resolve(root,file),JSON.stringify(value,null,2)+'\n');
write('zh-Hans/shared.json',candidate.values);
write('zh-Hans/records.json',candidate.bundles.map(({values,...metadata})=>({...metadata,keys:Object.keys(values)})));
write('zh-Hans/retained-english.json',[...new Set(retained)]);
write('manifest.json',manifest);
console.log(`Packaged 48 reviewed source-bound Chinese pages at ${approvedAt}; no Git or deployment invoked.`);
