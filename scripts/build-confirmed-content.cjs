const fs=require('node:fs'),path=require('node:path');
const {pages,hours}=require('../data/expanded-services.cjs');
const {buildExpandedServices}=require('./build-expanded-services.cjs');
const {applyConfirmedHours}=require('./apply-confirmed-hours.cjs');
const {applySiteContent}=require('./apply-site-content-intent.cjs');
const {updateSitemapContentDates}=require('./update-sitemap-content-dates.cjs');
function buildConfirmedContent(root,date){
 buildExpandedServices(root);
 applyConfirmedHours(root);
 applySiteContent(root);
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html')&&f!=='privacy.html')){
  const target=path.join(root,file),old=fs.readFileSync(target,'utf8');
  let h=old.replace(/<!-- confirmed-menu:start -->[\s\S]*?<!-- confirmed-menu:end -->/g,'');
  if(file==='index.html')h=h.replace('<h3>Lighting &amp; Power Point Repairs and Installation Perth</h3>','<h3>Lighting &amp; Power Point Electrical Services Overview Perth</h3>');
  const gallery=require('../electrical-work-gallery.js').renderElectricalWorkGallery;
  h=h.replace(/(<div class="shell" data-electrical-work-gallery>)(?:<div class="electrical-work-gallery">[\s\S]*?<\/figure><\/div><\/div>)?(<\/div>)/g,(_,open,close)=>open+gallery()+close);
  for(const [id,parent]of [['plumbing-menu','plumbing.html'],['electrical-menu','electrical.html']]){
   const items=pages.filter(p=>p.parent===parent).map(p=>`<li><a class="mega-link" href="${p.file}"><span class="mega-copy"><strong>${p.title.replace(' Perth','').replace(/&/g,'&amp;')}</strong><small>Service scope, situations and quote.</small></span></a></li>`).join('');
   const re=new RegExp('(<ul[^>]*id="'+id+'"[^>]*>[\\s\\S]*?)(</ul>)');
   h=h.replace(re,(_,body,end)=>body+'<!-- confirmed-menu:start -->'+items+'<!-- confirmed-menu:end -->'+end);
  }
  h=h.replace(/\r\n/g,'\n').replace(/\n/g,'\r\n');if(h!==old)fs.writeFileSync(target,h);
 }
 const feedPath=path.join(root,'ai-content.json'),feed=JSON.parse(fs.readFileSync(feedPath,'utf8'));
 const map=require('../data/site-content-intent.cjs').metadata;
 for(const entry of feed.servicePages){const f=new URL(entry.url).pathname.slice(1);if(map[f]?.description)entry.description=map[f].description;if(f==='lighting-power-points-perth.html')entry.name='Lighting & Power Point Service Overview Perth';}
 fs.writeFileSync(feedPath,JSON.stringify(feed,null,2)+'\n');
 const llmsPath=path.join(root,'llms.txt');
 let llms=fs.readFileSync(llmsPath,'utf8').replace(/\n## Confirmed service additions — 2026-10-12[\s\S]*$/,'');
 llms=llms.replace(/^- \[[^\]]+\]\(https:\/\/perthpipepower.com.au\/lighting-power-points-perth.html\):.*$/m,'- [Lighting & Power Point Service Overview Perth](https://perthpipepower.com.au/lighting-power-points-perth.html): Choose the dedicated lighting or power-point service, or wider electrical fault finding.');
 llms=llms.trimEnd()+'\n\n## Confirmed service additions — 2026-10-12\n'+hours.text+'\nEmergency charges follow the quoted work plan.\n'+pages.map(p=>'- ['+p.title+'](https://perthpipepower.com.au/'+p.file+')').join('\n')+'\n';
 fs.writeFileSync(llmsPath,llms);
 return {newServicePages:pages.length,changed:updateSitemapContentDates(root,date)};
}
if(require.main===module)console.log(JSON.stringify(buildConfirmedContent(path.resolve(__dirname,'..'),process.argv[2])));
module.exports={buildConfirmedContent};
