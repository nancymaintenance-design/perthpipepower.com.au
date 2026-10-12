// Content-only sitemap refresh: checkout CRLF is not a publication change.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {contentDate}=require('./lib/content-dates.cjs');
function updateSitemapContentDates(root,date){
 // Validate even when every page is unchanged.
 contentDate(undefined,'validation',date);
 const manifestPath=path.join(root,'data/sitemap-content-dates.json');
 const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
 const sitemapPath=path.join(root,'sitemap.xml'),changed=[];
 const old=fs.readFileSync(sitemapPath,'utf8');
 const sitemap=old.replace(/<url>([\s\S]*?)<\/url>/g,(_,entry)=>{
  const url=new URL(entry.match(/<loc>([^<]+)<\/loc>/)[1]);
  const file=url.pathname.slice(1)||'index.html';
  const text=fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n/g,'\n');
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
if(require.main===module)console.log(JSON.stringify({changed:updateSitemapContentDates(path.resolve(__dirname,'..'),process.argv[2])}));
module.exports={updateSitemapContentDates};
