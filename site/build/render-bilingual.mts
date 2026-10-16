import type {SiteData} from '../types.mjs';
import {renderSite} from './render-site.mjs';
import {renderLocalizedPage} from '../localization/render.mjs';
import {localizedPath,siteOrigin} from '../localization/routes.mjs';
import {validateLocaleCoverage,type ApprovedLocaleBundle} from '../localization/approved.mjs';
/** English renderSite remains the migration authority; this adds an approved locale only. */
export function renderBilingualSite(site:SiteData,bundles:readonly ApprovedLocaleBundle[]):ReadonlyMap<string,string>{
 const output=new Map(renderSite(site));
 if(!bundles.length)return output;
 const issues=validateLocaleCoverage(site,bundles);if(issues.length)throw new Error('Incomplete bilingual coverage');
 for(const page of site.pages){
  output.set(page.file,renderLocalizedPage(page,site,{locale:'en-AU',preview:false}));
  output.set('zh/'+page.file,renderLocalizedPage(page,site,{locale:'zh-Hans',bundle:bundles.find(b=>b.pageId===page.file),preview:false}));
 }
 const sitemap=output.get('sitemap.xml')!;
 const chinese=[...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)].map(m=>{
  const file=m[1].slice((siteOrigin+'/').length)||'index.html';
  // Translation does not invent a new date for the original English page.
  return `<url><loc>${siteOrigin+localizedPath(file,'zh-Hans')}</loc>${m[2]}</url>`;
 }).join('\n  ');
 output.set('sitemap.xml',sitemap.replace('</urlset>',chinese+'\n</urlset>'));
 return new Map([...output].sort(([a],[b])=>a.localeCompare(b,'en')));
}
