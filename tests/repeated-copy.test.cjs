const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{parse}=require('parse5');
const root=path.resolve(__dirname,'../dist'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
test('photo submission instructions are centralized rather than appended to neighbouring service and company pages',()=>{
 for(const f of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){const nodes=walk(parse(fs.readFileSync(path.join(root,f),'utf8'))),main=nodes.find(n=>n.tagName==='main'),copy=text(main);
  if(['contact.html','faq.html'].includes(f)){assert(copy.includes('Photos are optional:'),f+': photo help remains at its owner');continue;}
  assert(!copy.includes('Photos are optional: email safely taken photos to'),f+': repeated submission boilerplate');
  assert(!walk(main).some(n=>n.tagName==='h3'&&text(n)==='Safely taken photos'),f+': repeated photo-only topic');
 }
});
