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
function seed(root){
 fs.mkdirSync(path.join(root,'data'),{recursive:true});
 fs.writeFileSync(path.join(root,'index.html'),'<h1>Revised</h1>');
 fs.writeFileSync(path.join(root,'sitemap.xml'),'<urlset><url><loc>https://perthpipepower.com.au/</loc><lastmod>2026-10-10</lastmod></url></urlset>');
 fs.writeFileSync(path.join(root,'data/sitemap-content-dates.json'),JSON.stringify({'index.html':{sha256:'0'.repeat(64),lastmod:'2026-10-10'}}));
}
// Catches a missing fixture-root gate without ever allowing an old writer to
// reach source writes: forbidden scopes must reject before even reading HTML.
test('retained legacy helpers reject source dist parents foreign brands and shallow report roots',()=>{
 const update=require('../scripts/update-sitemap-content-dates.cjs').updateSitemapContentDates;
 const apply=require('../scripts/apply-responsive-media.cjs').applyResponsiveMedia;
 const report=path.resolve(root,'../reports/content-navigation-repair-2026-10-14');
 const historical=path.resolve(root,'../reports/typescript-migration-2026-10-13');
 for(const denied of [root,path.join(root,'dist'),path.dirname(root),report,path.join(report,'test-temp'),historical,path.join(historical,'test-temp'),path.resolve(report,'../foreign/test-temp/case'),path.resolve(root,'../../Perth Roof Care/reports/content-navigation-repair-2026-10-14/test-temp/case')]){
  const read=fs.readFileSync,write=fs.writeFileSync,list=fs.readdirSync;
  fs.readFileSync=fs.readdirSync=fs.writeFileSync=()=>{throw Error('UNEXPECTED FILESYSTEM ACCESS');};
  try{for(const action of [()=>update(denied,'2026-10-14'),()=>apply(denied)])assert.throws(action,/isolated report fixture|retired.*npm run build/i,denied);}
  finally{fs.readFileSync=read;fs.writeFileSync=write;fs.readdirSync=list;}
 }
});

for(const conflict of ['root-file','root-junction','ancestor-file','ancestor-junction','html-directory','manifest-directory','sitemap-directory','html-hardlink','manifest-hardlink','sitemap-hardlink','html-symlink','manifest-symlink','sitemap-symlink','late-page-hardlink'])test(`date_fixture_${conflict}_fails_before_all_writes`,t=>{
 const dir=createFixture('date-boundary-');t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
 const selected=path.join(dir,'selected');fs.mkdirSync(selected);seed(selected);
 let targetRoot=selected;
 if(conflict==='root-file'){targetRoot=path.join(dir,'file');fs.writeFileSync(targetRoot,'ROOT_FILE');}
 else if(conflict==='root-junction'){targetRoot=path.join(dir,'junction');fs.symlinkSync(selected,targetRoot,'junction');}
 else if(conflict==='ancestor-file'){fs.rmSync(path.join(selected,'data'),{recursive:true});fs.writeFileSync(path.join(selected,'data'),'ANCESTOR_FILE');}
 else if(conflict==='ancestor-junction'){fs.renameSync(path.join(selected,'data'),path.join(dir,'data-real'));fs.symlinkSync(path.join(dir,'data-real'),path.join(selected,'data'),'junction');}
 else {
  const file=conflict.startsWith('html-')?'index.html':conflict.startsWith('manifest-')?'data/sitemap-content-dates.json':conflict==='late-page-hardlink'?'z-late.html':'sitemap.xml';
  const location=path.join(selected,file),outside=path.join(dir,'outside');
  if(conflict==='late-page-hardlink'){
   fs.writeFileSync(location,'LATE PAGE');fs.writeFileSync(path.join(selected,'sitemap.xml'),'<urlset><url><loc>https://perthpipepower.com.au/</loc></url><url><loc>https://perthpipepower.com.au/z-late.html</loc></url></urlset>');
  }
  if(conflict.endsWith('directory')){fs.unlinkSync(location);fs.mkdirSync(location);}
  else{
   fs.copyFileSync(location,outside);fs.unlinkSync(location);
   if(conflict.endsWith('hardlink'))fs.linkSync(outside,location);
   else try{fs.symlinkSync(outside,location);}
   catch(error){
    if(error.code!=='EPERM')throw error;
    // Windows without file-symlink privilege still permits real directory
    // junctions at these exact destination names; exercise the same link gate.
    const linkedDirectory=path.join(dir,'linked-directory');fs.mkdirSync(linkedDirectory);
    fs.symlinkSync(linkedDirectory,location,'junction');
    assert.equal(fs.lstatSync(location).isSymbolicLink(),true);
    t.diagnostic('EPERM creating file symlink; exercised physical junction at the same target instead');
   }
  }
 }
 const sentinels=[path.join(selected,'sitemap.xml'),path.join(selected,'data/sitemap-content-dates.json'),path.join(dir,'outside')].filter(file=>fs.existsSync(file)&&fs.statSync(file).isFile());
 for(const file of sentinels)fs.utimesSync(file,new Date('2020-01-01'),new Date('2020-01-01'));
 const before=sentinels.map(file=>[fs.readFileSync(file),fs.statSync(file).mtimeMs]);
 assert.throws(()=>require('../scripts/update-sitemap-content-dates.cjs').updateSitemapContentDates(targetRoot,'2026-10-14'),/directory|file|link|junction/i);
 assert.deepEqual(sentinels.map(file=>[fs.readFileSync(file),fs.statSync(file).mtimeMs]),before,'preflight must precede even the first date write');
});
