// Offline deterministic conversion. Override PERTH_SHARP_MODULE on another machine.
const fs=require('node:fs'),path=require('node:path');
const sharp=require(process.env.PERTH_SHARP_MODULE||'C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const {photoStems,photoWidths}=require('./apply-responsive-media.cjs');
const root=path.resolve(__dirname,'..');
(async()=>{
 const assets=[];
 const record=file=>assets.push({file,bytes:fs.statSync(path.join(root,file)).size});
 for(const stem of photoStems){
  const source=stem+(stem==='perth-property-service'?'.png':'.jpg');
  for(const width of photoWidths(stem))for(const format of ['webp','avif']){
   const file=`${stem}-responsive-${width}.${format}`;
   await sharp(path.join(root,source)).rotate().resize({width,withoutEnlargement:true})[format]({quality:format==='webp'?82:55,effort:6}).toFile(path.join(root,file));record(file);
  }
 }
 for(const width of [54,108]){
  const file=`ellis-services-logo-${width}.webp`;
  await sharp(path.join(root,'ellis-services-logo.png')).resize({width}).webp({lossless:true,effort:6}).toFile(path.join(root,file));record(file);
 }
 await sharp(path.join(root,'hero-repair.jpg')).resize({width:1024,withoutEnlargement:true}).webp({quality:82,effort:6}).toFile(path.join(root,'hero-repair-mobile.webp'));record('hero-repair-mobile.webp');
 console.log(JSON.stringify(assets,null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
