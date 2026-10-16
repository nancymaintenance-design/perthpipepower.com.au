/** Assemble generated drafts for read-only review; does not enable production. */
import {existsSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {loadSiteData} from '../site/content/pages.mjs';
import {pageHash} from '../site/localization/fields.mjs';
import {requiredTranslations} from '../site/localization/render.mjs';
import type {ApprovedLocaleBundle} from '../site/localization/approved.mjs';
const root=resolve('.superpowers/sdd/2026-10-16-bilingual-local-editor/translations');
const inventory=JSON.parse(readFileSync(resolve(root,'inventory.json'),'utf8')) as {key:string;source:string}[];
const values:Record<string,string>={},completed:number[]=[];
const suburbs=new Set((JSON.parse(readFileSync(resolve('data/perth-suburbs.json'),'utf8')) as {name:string}[]).map(s=>s.name));
for(let batch=1;batch<=103;batch++){
 const file=resolve(root,`result-${String(batch).padStart(3,'0')}.json`);if(!existsSync(file))continue;
 const response=JSON.parse(readFileSync(file,'utf8'));
 const content=response.content.trim().replace(/^```(?:json)?\s*/,'').replace(/\s*```$/,'');
 Object.assign(values,JSON.parse(content));completed.push(batch);
}
const overrides=JSON.parse(readFileSync(resolve('site/content/locales/zh-Hans/review-overrides.json'),'utf8')) as Record<string,string>;
for(const key of Object.keys(overrides))if(!inventory.some(row=>row.key===key))throw new Error(`Unregistered review override ${key}`);
Object.assign(values,overrides);
// Reviewed terminology corrections. These change no service fact or HTML.
for(const {key,source} of inventory){
 let value=values[key];if(!value)continue;
 if(suburbs.has(source))value=source;
 if(/^AUD \$[\d,$–. -]+$/.test(source))value=source;
 value=value.replaceAll('天花板风扇','吊扇').replaceAll('排气风扇','排风扇').replaceAll('水泄漏检测','漏水检测').replaceAll('即时危险','紧急危险').replaceAll('立即危险','紧急危险');
 if(/\b(?:visit|attendance)\b/i.test(source))value=value.replaceAll('请求访问','预约上门').replaceAll('安排访问','安排上门').replaceAll('出勤','上门').replaceAll('每次接待','每次上门');
 if(/\b(?:drains?|drainage|clearing|blockage)\b/i.test(source))value=value.replaceAll('堵塞排水清除','排水管疏通').replaceAll('堵塞排水清理','排水管疏通').replaceAll('慢速水槽','水槽排水缓慢').replaceAll('慢水槽','水槽排水缓慢');
 if(/\b(?:leak|leaking|flooding)\b/i.test(source))value=value.replaceAll('活跃的管道泄漏','持续漏水').replaceAll('活跃管道泄漏','持续漏水').replaceAll('活跃泄漏','持续漏水').replaceAll('活跃的洪水','大量积水').replaceAll('活跃水泄漏','持续漏水').replaceAll('活水','持续漏水');
 if(/\b(?:access|entry)\b/i.test(source))value=value.replaceAll('访问联系人','进场联系人').replaceAll('访问说明','进场说明').replaceAll('访问细节','进场信息').replaceAll('租赁访问','出租物业进场');
 if(/\b(?:cisterns?|running toilets?)\b/i.test(source))value=value.replaceAll('运行式马桶','持续流水的马桶').replaceAll('运行式水箱','持续流水的水箱').replaceAll('运行中的冲水箱','持续流水的水箱').replaceAll('运行中的水箱','持续流水的水箱').replaceAll('持续运行的冲水器','持续流水的水箱').replaceAll('运行水箱','持续流水的水箱').replaceAll('冲水器','水箱').replaceAll('cistern','水箱').replaceAll('碗中','马桶内').replaceAll('碗内','马桶内');
 if(/\btoilets?\b/i.test(source))value=value.replaceAll('厕所','马桶');
 if(/\btrade(?:s|people|person)?\b/i.test(source))value=value.replaceAll('贸易文件','资质文件').replaceAll('行业','工种').replaceAll('工匠','技工');
 if(/\balarm(?:s)?\b/i.test(source))value=value.replaceAll('烟雾警报','烟雾报警器').replaceAll('年龄','使用年限').replaceAll('硬连线','固定接线').replaceAll('主动报警','正在报警').replaceAll('单元','设备');
 if(/\bchirp/i.test(source))value=value.replaceAll('嗡嗡声','短促提示音');
 value=value.replaceAll('Ellis Perth','Ellis 珀斯').replace(/CBD\s*[与和]\s*内珀斯/g,'珀斯 CBD 与内城区');
 if(/Perth Hills/.test(source))value=value.replace(/珀斯山(?:脉|谷|丘|区)/g,'Perth Hills').replace(/斯旺谷|天鹅谷/g,'Swan Valley');
 if(source.length<100&&/Perth/.test(source)&&!/Perth Hills/.test(source))value=value.replace(/^(\/?\s*)([^。！？|]+?)\s*珀斯(\s*\|.*)?$/,(_m:string,pre:string,body:string,end:string)=>pre+'珀斯'+body.trim()+(end??''));
 values[key]=value;
}
const missing=inventory.filter(row=>!values[row.key]).map(row=>row.key);
const unchanged=inventory.filter(row=>values[row.key]===row.source);
const plainEnglish=inventory.filter(row=>values[row.key]&&!/[\u3400-\u9fff]/.test(values[row.key]));
const contactWarnings=inventory.filter(row=>{
 const value=values[row.key];if(!value)return false;
 return ['0413 477 667','maxinemaintenance.au@outlook.com','140 St Georges Terrace, Perth WA 6000','96 645 821 745'].some(fact=>row.source.includes(fact)&&!value.includes(fact));
});
const shortWarnings=inventory.filter(row=>values[row.key]&&row.source.length>50&&values[row.key].length<row.source.length*.12).map(row=>({...row,target:values[row.key]}));
const knownTerms=['Ellis Services Group','ELLIS SERVICES GROUP PTY LTD','140 St Georges Terrace, Perth WA 6000','maxinemaintenance.au@outlook.com','Instagram','Facebook','LinkedIn','Western Power','Water Corporation','Perth Hills','Swan Valley',...suburbs];
const englishWarnings=inventory.filter(row=>{let target=values[row.key]??'';for(const term of knownTerms.sort((a,b)=>b.length-a.length))target=target.replaceAll(term,'');return /[A-Za-z]+(?:[ ,&-]+[A-Za-z]+){3,}/.test(target);}).map(row=>({...row,target:values[row.key]}));
const site=loadSiteData(),bundles:ApprovedLocaleBundle[]=[];
for(const page of site.pages){const required=requiredTranslations(page,site);if(required.some(row=>!values[row.key]))continue;
 bundles.push({schemaVersion:1,pageId:page.file,locale:'zh-Hans',baseHash:pageHash(page),values:Object.fromEntries(required.map(row=>[row.key,values[row.key]]))});
}
mkdirSync(root,{recursive:true});
writeFileSync(resolve(root,'candidate.json'),JSON.stringify({completed,values,bundles},null,2));
writeFileSync(resolve(root,'quality.json'),JSON.stringify({completed:completed.length,missing,unchanged,plainEnglish,contactWarnings,shortWarnings,englishWarnings},null,2));
console.log(JSON.stringify({completed:completed.length,entries:Object.keys(values).length,missing:missing.length,completePages:bundles.length,contactWarnings,shortWarnings,englishWarnings,plainEnglish:plainEnglish.map(row=>({key:row.key,source:row.source,target:values[row.key]}))},null,2));
