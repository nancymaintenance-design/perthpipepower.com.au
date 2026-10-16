/** Refresh hashes for locale chrome only; preserve every editorial date. */
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {loadSiteData} from '../site/content/pages.mjs';
import {renderLocalizedPage} from '../site/localization/render.mjs';
import {projectRoot} from '../site/build/copy-assets.mjs';
const site=loadSiteData();
for(const name of ['sitemap-content-dates','editorial-content-dates']){
 const file=resolve(projectRoot,'data',name+'.json');
 const data=JSON.parse(readFileSync(file,'utf8')) as Record<string,{lastmod:string;sha256:string}>;
 for(const [id,entry] of Object.entries(data)){
  const page=site.pages.find(p=>p.file===id);if(!page)throw new Error('Unknown content hash page');
  entry.sha256=createHash('sha256').update(renderLocalizedPage(page,site,{locale:'en-AU',preview:false}).replace(/\r\n/g,'\n')).digest('hex');
 }
 writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
console.log('Refreshed English locale-chrome hashes; all lastmod values retained.');
