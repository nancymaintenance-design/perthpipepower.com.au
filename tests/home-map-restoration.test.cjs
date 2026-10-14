const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {parse}=require('parse5');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const nodes=()=>walk(parse(fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf8')));
test('homepage keeps its real map and original map actions without duplicate appended narratives',()=>{
 const all=nodes();
 const frame=all.find(n=>n.tagName==='iframe'&&attr(n,'title')==='Map of Ellis Services Group office');
 assert(frame,'office map remains a native iframe');
 assert.equal(attr(frame,'src'),'https://www.google.com/maps?q=140%20St%20Georges%20Terrace%2C%20Perth%20WA%206000&output=embed');
 assert(all.some(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('https://www.google.com/maps/place/140+St+Georges+Terrace')),'office Maps action retained');
 assert(all.some(n=>n.tagName==='a'&&attr(n,'href')==='https://www.google.com/maps?cid=4207134925924682021'),'Google listing/reviews action retained');
 for(const name of ['home-service-pathways','home-company-advantages','office-map-fallback'])assert(!all.some(n=>attr(n,'class')?.split(' ').includes(name)),name+': rejected duplicated content must not return');
 for(const href of ['plumbing.html','electrical.html','property-management.html'])assert(all.some(n=>n.tagName==='a'&&attr(n,'href')===href),href+': original service access retained');
});
test('navigation does not hide the office map on loopback hosts',()=>{
 const script=fs.readFileSync(path.resolve(__dirname,'../navigation.js'),'utf8');
 for(const hostname of ['127.0.0.1','localhost','perthpipepower.com.au']){
  const classes=[];
  vm.runInNewContext(script,{location:{hostname},document:{documentElement:{classList:{add:n=>classes.push(n)},style:{setProperty(){}}},getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){}}});
  assert(!classes.includes('local-map-preview'),hostname+': navigation must not suppress the map');
 }
});
