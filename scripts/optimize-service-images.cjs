const fs=require('node:fs'),path=require('node:path');
const sharp=require('C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(__dirname,'..');
async function main(){
 const files=new Set();
 for(const file of Object.keys(require('../data/service-commercial-copy.cjs'))){
  const source=require('node:child_process').execFileSync('git',['show','dae4148:'+file],{cwd:root,encoding:'utf8'});
  const image=source.match(/<main\b[\s\S]*?<\/main>/)[0].match(/<img\b[^>]*>/)?.[0];
  const src=image?.match(/src="([^"]+)"/)?.[1];if(src&&!image.includes('srcset='))files.add(src);
 }
 let original=0,optimized=0;
 for(const src of ['plumbing-kitchen-repair.png','electrical-switchboard-perth.png'])files.add(src);
 for(const src of files){original+=fs.statSync(path.join(root,src)).size;for(const width of [480,960]){const target=src.replace(/\.[^.]+$/,`-${width}.webp`);await sharp(path.join(root,src)).resize({width,withoutEnlargement:true}).webp({quality:78}).toFile(path.join(root,target));if(width===480)optimized+=fs.statSync(path.join(root,target)).size;}}
 console.log(JSON.stringify({distinctSources:files.size,originalBytes:original,webp480Bytes:optimized,deliveryReduction:Math.round((1-optimized/original)*100)+'%'}));
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
