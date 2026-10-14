const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
test('sitemap timestamp update ignores checkout line endings but dates a real content edit',()=>{
 const modulePath=path.join(SOURCE_ROOT,'scripts/update-sitemap-content-dates.cjs');
 const update=fs.existsSync(modulePath)?require(modulePath).updateSitemapContentDates:undefined;
 assert.equal(typeof update,'function','a content-only updater must be available without image rebuilding');
 const temp=createFixture('sitemap-date-test-');
 try{
  fs.mkdirSync(path.join(temp,'data'));
  const hash=crypto.createHash('sha256').update('<h1>Original</h1>\n').digest('hex');
  fs.writeFileSync(path.join(temp,'index.html'),'<h1>Original</h1>\r\n');
  fs.writeFileSync(path.join(temp,'sitemap.xml'),'<urlset><url><loc>https://perthpipepower.com.au/</loc><lastmod>2026-10-10</lastmod></url></urlset>');
  fs.writeFileSync(path.join(temp,'data/sitemap-content-dates.json'),JSON.stringify({'index.html':{sha256:hash,lastmod:'2026-10-10'}}));
  assert.deepEqual(update(temp,'2026-10-12'),[],'line endings are not a content change');
  assert.match(fs.readFileSync(path.join(temp,'sitemap.xml'),'utf8'),/2026-10-10/);
  fs.writeFileSync(path.join(temp,'index.html'),'<h1>Revised</h1>\r\n');
  assert.deepEqual(update(temp,'2026-10-12'),['index.html']);
  assert.match(fs.readFileSync(path.join(temp,'sitemap.xml'),'utf8'),/<lastmod>2026-10-12<\/lastmod>/);
  assert.deepEqual(update(temp,'2026-10-12'),[],'same content does not get redated');
  assert.throws(()=>update(temp,'2026-02-30'),/date/i);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
