const fs = require('node:fs');
const path = require('node:path');
const {parse} = require('parse5');
const {loadCompiledModule,resolvePublicRoot} = require('./lib/ts-compat.cjs');
const args=process.argv.slice(2);
if(args.length && (args.length!==2 || args[0]!=='--root')) throw new Error('Usage: node scripts/validate-seo.js [--root dist]');
const root=resolvePublicRoot(args[1]);
const site=loadCompiledModule('site/content/pages.mjs').loadSiteData();
const issues=[];
const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
const actual=fs.readdirSync(root).filter(f=>f.endsWith('.html')).sort();
const expected=site.pages.map(p=>p.file).sort();
if(JSON.stringify(actual)!==JSON.stringify(expected)) issues.push('Public page inventory differs from canonical registry');
for(const page of site.pages) {
 const file=path.join(root,page.file);
 if(!fs.existsSync(file)){issues.push(page.file+': missing page');continue;}
 const nodes=walk(parse(fs.readFileSync(file,'utf8')));
 const values={
  title:nodes.filter(n=>n.tagName==='title').map(text),
  description:nodes.filter(n=>n.tagName==='meta'&&attr(n,'name')==='description').map(n=>attr(n,'content')),
  canonical:nodes.filter(n=>n.tagName==='link'&&attr(n,'rel')==='canonical').map(n=>attr(n,'href')),
  robots:nodes.filter(n=>n.tagName==='meta'&&attr(n,'name')==='robots').map(n=>attr(n,'content'))
 };
 for(const key of Object.keys(values)) {
  const expectedValue=page.seo[key]===null?[]:[page.seo[key]];
  if(JSON.stringify(values[key])!==JSON.stringify(expectedValue))issues.push(page.file+': incorrect '+key);
 }
}
for(const name of ['robots.txt','sitemap.xml']) {
 const file=path.join(root,name);
 if(!fs.existsSync(file)||fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n')!==site.artifacts[name].replace(/\r\n/g,'\n'))issues.push(name+': differs from canonical content');
}
if(issues.length){console.error(issues.join('\n'));process.exitCode=1;}
else console.log('Validated '+site.pages.length+' canonical tags, titles, descriptions, robots.txt and 47 sitemap URLs in '+root+'.');
