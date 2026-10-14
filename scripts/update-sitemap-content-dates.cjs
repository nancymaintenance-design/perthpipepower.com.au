// Historical date behavior for isolated fixtures only. Never dates current public content.
const fs=require('node:fs'),crypto=require('node:crypto');
const {loadCompiledModule,retired}=require('./lib/ts-compat.cjs');
if(require.main===module)retired();
const {fixtureRoot}=loadCompiledModule('site/compat.mjs');
const {publicPath}=loadCompiledModule('site/build/copy-assets.mjs');
const {contentDate}=require('./lib/content-dates.cjs');
function updateSitemapContentDates(root,date){
 root=fixtureRoot(root);
 const regularFile=file=>{
  const target=publicPath(root,file);
  if(!fs.lstatSync(target,{throwIfNoEntry:false})?.isFile())throw Error(`Fixture target must be a regular file: ${file}`);
  return target;
 };
 // Validate even when every page is unchanged.
 contentDate(undefined,'validation',date);
 const manifestPath=regularFile('data/sitemap-content-dates.json');
 const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
 const sitemapPath=regularFile('sitemap.xml'),changed=[];
 const old=fs.readFileSync(sitemapPath,'utf8');
 const sitemap=old.replace(/<url>([\s\S]*?)<\/url>/g,(_,entry)=>{
  const url=new URL(entry.match(/<loc>([^<]+)<\/loc>/)[1]);
  const file=url.pathname.slice(1)||'index.html';
  const text=fs.readFileSync(regularFile(file),'utf8').replace(/\r\n/g,'\n');
  const sha256=crypto.createHash('sha256').update(text).digest('hex');
  if(manifest[file]?.sha256!==sha256)changed.push(file);
  manifest[file]=contentDate(manifest[file],sha256,date);
  entry=entry.replace(/<lastmod>[^<]*<\/lastmod>/g,'');
  return '<url>'+entry.replace('</loc>',`</loc><lastmod>${manifest[file].lastmod}</lastmod>`)+'</url>';
 });
 const data=JSON.stringify(manifest,null,2)+'\n';
 if(fs.readFileSync(manifestPath,'utf8')!==data)fs.writeFileSync(manifestPath,data);
 if(old!==sitemap)fs.writeFileSync(sitemapPath,sitemap);
 return changed;
}
module.exports={updateSitemapContentDates};
