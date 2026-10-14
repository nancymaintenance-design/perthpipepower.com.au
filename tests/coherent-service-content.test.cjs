const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{parse}=require('parse5');
const root=path.resolve(__dirname,'../dist'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
test('all public pages retire the one-sentence FAQ statement walls rather than hiding them with CSS',()=>{
 for(const f of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){const ns=walk(parse(fs.readFileSync(path.join(root,f),'utf8')));assert(!ns.some(n=>attr(n,'class')==='service-information'),f+': fragmented statement wall');assert(!ns.some(n=>n.tagName==='h2'&&['Service assessment and next steps','Common situations and what to report'].includes(text(n))),f+': vague generic service heading');}
});
test('tap repair page retains its keyword-led useful narrative and focused related services',()=>{
 const ns=walk(parse(fs.readFileSync(root+'/tap-mixer-repairs-perth.html','utf8'))),main=ns.find(n=>n.tagName==='main'),copy=text(main);
 for(const phrase of ['Tap & Mixer Repairs Perth','Dripping taps and leaking mixer fittings','Replacing a tap or mixer','customer-supplied','AUD $165–$420'])assert(copy.includes(phrase),phrase);
 assert(!copy.includes('Reporting symptoms without diagnosis'));
 assert(!copy.includes('Read the explanation.'));
 const related=walk(main).find(n=>attr(n,'class')?.includes('service-related-links'));
 assert(related,'one focused related-service group');
 assert.deepEqual(walk(related).filter(n=>n.tagName==='a').map(n=>attr(n,'href')),['water-leak-detection-perth.html','fixtures-appliances-perth.html','water-pressure-perth.html']);
 assert.equal(walk(main).filter(n=>n.tagName==='details').length,2);
});
