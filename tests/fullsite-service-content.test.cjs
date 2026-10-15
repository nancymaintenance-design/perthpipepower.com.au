const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {parse}=require('parse5');
const root=path.resolve(__dirname,'../dist');
const baseline=require('./fixtures/ts-migration/baseline.json');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const raw=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(raw).join('');
const text=n=>raw(n).replace(/\s+/g,' ').trim();
// Independent topic requirements: these are service decisions and educational
// intents from the route ledger, not an output snapshot or claimed search volume.
const topics={
 'blocked-drains-perth.html':[/blocked.*drain/i,/gurgling/i,/clearing/i],
 'burst-pipe-repair-perth.html':[/burst.*pipe/i,/concealed/i,/reinstatement/i],
 'ceiling-fans-perth.html':[/ceiling fan/i,/support/i,/control/i],
 'dishwasher-installation-perth.html':[/dishwasher/i,/drainage/i,/take it away/i],
 'electrical.html':[/electrical repairs/i,/power faults/i,/smoke alarms/i],
 'emergency-electrician-perth.html':[/24.hour/i,/private electrical/i,/quoted|quote/i],
 'emergency-plumber-perth.html':[/24.hour/i,/private plumbing/i,/wastewater|drainage/i],
 'exhaust-fans-perth.html':[/exhaust fan/i,/duct|exhaust path/i,/mould/i],
 'fixtures-appliances-perth.html':[/fixture/i,/washing.machine/i,/supply.*remov/i],
 'hot-water-problems-perth.html':[/hot.water/i,/replacement/i,/electric/i],
 'lighting-installation-perth.html':[/lighting/i,/LED/i,/dimmer/i],
 'lighting-power-points-perth.html':[/lighting/i,/power.point/i,/dedicated/i],
 'plumbing.html':[/plumbing repairs/i,/blocked.*drain/i,/hot.water/i],
 'power-faults-perth.html':[/fault.finding/i,/intermittent/i,/circuit/i],
 'power-points-perth.html':[/power point/i,/double/i,/circuit/i],
 'property-management.html':[/plumbing and electrical/i,/strata/i,/work.order/i],
 'rcd-testing-perth.html':[/RCD testing/i,/record/i,/device/i],
 'renewables-smart-home-perth.html':[/smart.home/i,/lighting.*control/i,/compatib/i],
 'safety-switch-tripping-perth.html':[/safety.switch/i,/current imbalance/i,/circuit breaker/i],
 'shower-plumbing-repairs-perth.html':[/shower/i,/supply.*waste|waste.*supply/i,/waterproofing/i],
 'smoke-alarm-maintenance-perth.html':[/smoke.alarm/i,/chirp/i,/rental/i],
 'switchboard-upgrades-perth.html':[/switchboard/i,/protection/i,/interrupt/i],
 'tap-mixer-repairs-perth.html':[/tap.*mixer/i,/Dripping taps and leaking mixer fittings/i,/customer.supplied/i],
 'toilet-installation-perth.html':[/toilet/i,/set.out|waste position/i,/take it away/i],
 'toilet-repairs-perth.html':[/cistern/i,/refill/i,/flush/i],
 'water-leak-detection-perth.html':[/leak detection/i,/water.meter/i,/higher.*bill|high.*bill/i],
 'water-pressure-perth.html':[/water pressure/i,/water hammer/i,/Water Corporation/i],
};
const newer=['ceiling-fans','dishwasher-installation','emergency-electrician','emergency-plumber','exhaust-fans','lighting-installation','power-points','rcd-testing','shower-plumbing-repairs','switchboard-upgrades','toilet-installation','water-pressure'].map(s=>s+'-perth.html');
function page(file){const nodes=walk(parse(fs.readFileSync(path.join(root,file),'utf8'))),main=nodes.find(n=>n.tagName==='main');return {nodes,main,copy:text(main)};}

test('27 service routes keep protected search identity, prices, substantive topics and matching compact FAQ',()=>{
 assert.equal(Object.keys(topics).length,27);
 for(const [file,patterns]of Object.entries(topics)){
  const {nodes,main,copy}=page(file),old=baseline.pages[file];
  assert.equal(text(nodes.find(n=>n.tagName==='title')),old.title,file+': title');
  assert.equal(text(nodes.find(n=>n.tagName==='h1')),old.headings.find(h=>h.level===1).text,file+': H1');
  assert.equal(attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href'),old.canonical,file+': canonical');
  assert.equal(attr(nodes.find(n=>n.tagName==='meta'&&attr(n,'name')==='robots'),'content')??null,old.robots??null,file+': robots');
  const oldTree=JSON.parse(old.dom),oldWalk=n=>[n,...(n[0]==='element'?n[4]:n[0]==='document'||n[0]==='fragment'?n[1]:[]).flatMap(oldWalk)];
  const oldText=n=>n[0]==='text'?n[1]:(n[0]==='element'?n[4]:n[0]==='document'||n[0]==='fragment'?n[1]:[]).map(oldText).join('');
  const oldPrices=oldWalk(oldTree).filter(n=>n[0]==='element'&&n[3].some(a=>a[1]==='class'&&a[2]==='price-guide__range')).map(n=>oldText(n).trim());
  assert.deepEqual(nodes.filter(n=>attr(n,'class')==='price-guide__range').map(text),oldPrices,file+': price amounts');
  for(const pattern of patterns)assert.match(copy,pattern,file+': service topic');
  const faqs=walk(main).filter(n=>n.tagName==='details').map(n=>({question:text(n.childNodes.find(c=>c.tagName==='summary')),answer:n.childNodes.filter(c=>c.tagName!=='summary').map(text).join(' ').trim()}));
  assert.equal(faqs.length,2,file+': two real customer questions');
  const graph=JSON.parse(nodes.find(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').childNodes[0].value)['@graph'];
  assert.deepEqual(graph.find(n=>n['@type']==='FAQPage').mainEntity.map(q=>({question:q.name,answer:q.acceptedAnswer.text})),faqs,file+': FAQ/schema');
 }
});

// Reintroducing an internal research explanation, search-engine phrase or vague
// heading must fail on the shipped, rendered customer page.
test('service content excludes internal research copy, mechanical near-me sentences and known empty headings',()=>{
 const rejected=['Keep the work request together.','Start with the symptom, not a guess.','Details worth including','Assessment, work plan and written quote','Choose the next step'];
 for(const file of Object.keys(topics)){
  const {main,copy}=page(file);
  assert.doesNotMatch(copy,/research (?:table|topics)|(?:plumber|electrician) near me/i,file);
  for(const h of walk(main).filter(n=>n.tagName==='h2'))assert(!rejected.includes(text(h)),file+': '+text(h));
 }
});

test('energy service explains confirmed electrical work without exposing research topics',()=>{
 assert.doesNotMatch(page('renewables-smart-home-perth.html').copy,/research topics|Does this page confirm|solar, battery or EV.charger installation/i);
});

test('trade hubs describe local coverage without mechanical near-me search phrases',()=>{
 for(const file of ['plumbing.html','electrical.html'])assert.doesNotMatch(page(file).copy,/(?:plumber|electrician) near me/i,file);
});

test('compact service FAQ does not repeat the preceding work decision as a title-and-paragraph preface',()=>{
 for(const file of Object.keys(topics).filter(f=>!['plumbing.html','electrical.html','property-management.html'].includes(f))){
  const {main}=page(file),faq=walk(main).find(n=>n.tagName==='section'&&attr(n,'id')==='service-faq');
  assert(faq,file+': FAQ section');
  assert.equal(walk(faq).filter(n=>n.tagName==='h3').length,0,file+': duplicate decision preface');
 }
});

test('12 newer services explain their own work and quote conditions without repeating generic preparation and qualification blocks',()=>{
 for(const file of newer){
  const {main,copy}=page(file);
  assert.doesNotMatch(copy,/We confirm the property, installation and requested outcome before selecting the work\./,file);
  assert.doesNotMatch(copy,/Give the property location, observable symptoms or intended installation, access contact/,file);
  assert.equal(walk(main).filter(n=>n.tagName==='ol'&&attr(n,'class')==='expanded-steps').length,0,file+': generic four-step block');
  const paragraphCounts=new Map();for(const p of walk(main).filter(n=>n.tagName==='p')){const value=text(p);if(value.length>100)paragraphCounts.set(value,(paragraphCounts.get(value)||0)+1);}
  for(const [value,count]of paragraphCounts)assert.equal(count,1,file+': duplicate paragraph '+value);
 }
});

test('hub opening provides useful service choices before repair-report preparation',()=>{
 for(const file of ['plumbing.html','electrical.html']){
  const {main}=page(file),sections=walk(main).filter(n=>n.tagName==='section'&&!(attr(n,'class')||'').includes('page-hero'));
  const first=sections[0],serviceLinks=walk(first).filter(n=>n.tagName==='a'&&/-perth\.html$/.test(attr(n,'href')||''));
  assert(serviceLinks.length>=4,file+': concrete service routes in the opening section');
 }
});

test('hub work chapters do not repeat the booking chapter preparation checklist',()=>{
 assert.doesNotMatch(page('plumbing.html').copy,/For rental, strata or managed commercial properties, include the work-order reference/i);
 assert.doesNotMatch(page('electrical.html').copy,/Property managers can send a work order with the occupant|For homes, rentals, strata and commercial properties, do not attempt to diagnose/i);
});

test('tap and leak work explanations consolidate merged decision chapters',()=>{
 const tap=page('tap-mixer-repairs-perth.html'),leak=page('water-leak-detection-perth.html');
 assert(!tap.copy.includes('Tap repairs: symptoms and service choices'),'tap: duplicated repair choice chapter');
 assert(!tap.copy.includes('A dripping tap, a base leak and a low-flow outlet'),'tap: duplicated FAQ decision');
 assert(!leak.copy.includes('Leak detection and repair: keep the findings with the quote'),'leak: repeated investigation/repair decision');
 assert(!leak.copy.includes('Finding the source before choosing the repair'),'leak: duplicated FAQ decision');
});

test('readonly service readers follow the merged canonical work rather than deleted preparation fragments',()=>{
 const reader=require('../data/site-content-intent.cjs').pages;
 const headings={
  'ceiling-fans-perth.html':'Ceiling fan installation: service scope',
  'dishwasher-installation-perth.html':'Dishwasher installation: service scope',
  'emergency-electrician-perth.html':'Emergency electrician: service scope',
  'emergency-plumber-perth.html':'Emergency plumber: service scope',
  'exhaust-fans-perth.html':'Bathroom exhaust fan replacement: service scope',
  'lighting-installation-perth.html':'Lighting installation: service scope',
  'power-points-perth.html':'Power point installation: service scope',
  'rcd-testing-perth.html':'RCD testing: service scope',
  'shower-plumbing-repairs-perth.html':'Shower leak repairs: service scope',
  'switchboard-upgrades-perth.html':'Switchboard upgrades: service scope',
  'toilet-installation-perth.html':'Toilet installation: service scope',
  'water-pressure-perth.html':'Low water pressure plumber: service scope',
  'tap-mixer-repairs-perth.html':'Kitchen, bathroom and laundry tap repairs',
  'water-leak-detection-perth.html':'Water leak detection and plumbing repairs',
 };
 for(const [file,heading]of Object.entries(headings)){
  assert.equal(reader[file].heading,heading,file+': canonical service heading');
  assert(reader[file].body.length>50,file+': meaningful canonical work');
 }
 const services=require('../data/expanded-services.cjs').pages;
 const fan=services.find(p=>p.file==='ceiling-fans-perth.html');
 assert.deepEqual(JSON.parse(JSON.stringify(fan.related)),[
  ['lighting-installation-perth.html','Lighting and fan-light planning'],
  ['lighting-power-points-perth.html','Electrical fitting overview'],
  ['exhaust-fans-perth.html','Bathroom exhaust fans'],
  ['power-faults-perth.html','Electrical supply faults'],
 ]);
 assert.throws(()=>{reader['ceiling-fans-perth.html'].heading='another copy authority';},/read.only|canonical/i);
});
