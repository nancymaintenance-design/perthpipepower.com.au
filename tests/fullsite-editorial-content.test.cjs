const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {parse}=require('parse5');
const root=path.resolve(__dirname,'../dist');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const raw=n=>n?.nodeName==='#text'?n.value:(n?.childNodes||[]).map(raw).join('');
const text=n=>raw(n).replace(/\s+/g,' ').trim();
function page(file){const nodes=walk(parse(fs.readFileSync(path.join(root,file),'utf8'))),main=nodes.find(n=>n.tagName==='main');return {nodes,main,copy:text(main)};}
const regions=['perth-cbd-inner-suburbs','northern-suburbs','southern-suburbs','eastern-suburbs','western-suburbs','perth-hills-swan-valley'];
// These checks exercise shipped pages. A regression to symptom-only advertising,
// duplicated preparation chapters or unrelated service links must fail here.
test('homepage carousel and service cards explain the actual work before reporting instructions',()=>{
 const {main}=page('index.html'),nodes=walk(main);
 const slides=nodes.filter(n=>n.tagName==='article'&&(attr(n,'class')||'').split(' ').includes('slide'));
 assert.match(text(slides[1]),/drain clearing|drain repairs/i);
 assert.match(text(slides[2]),/lighting.*power point|power point.*lighting/i);
 assert.doesNotMatch(text(main),/Describe the water problem, simply|Safety first\. Facts next|energy equipment and electrical upgrades/);
 for(const card of nodes.filter(n=>n.tagName==='article'&&attr(n,'class')==='card')){
  const copy=text(walk(card).find(n=>n.tagName==='p'));
  assert.doesNotMatch(copy,/^(?:Describe|Bring together|For active water|For slow drainage)/i,'card should describe work: '+copy);
 }
});
test('About includes existing work imagery and one continuous quotation and booking explanation',()=>{
 const {main,copy}=page('about.html'),nodes=walk(main);
 assert(nodes.some(n=>n.tagName==='picture'&&walk(n).some(i=>(attr(i,'src')||'').includes('images/electrical-work/'))),'real existing work picture');
 assert.doesNotMatch(copy,/Clear details before work is arranged|Documentation before the right work begins/);
 assert.equal(nodes.filter(n=>attr(n,'class')==='rich-grid').length,0,'no repeated three-step card wall');
 assert.match(copy,/Plumbing Repairs.*Electrical Repairs.*Property Maintenance/);
});
test('regional guides keep service chapters and suburb paths while avoiding a second access preface in FAQ',()=>{
 for(const region of regions){
  const {main,copy}=page(region+'.html'),faq=walk(main).find(n=>n.tagName==='section'&&(attr(n,'class')||'').split(' ').includes('faq'));
  assert.equal(walk(faq).filter(n=>n.tagName==='h3').length,0,region+': repeated access preface');
  assert.match(copy,/Written quote before work proceeds/);
  assert(walk(main).some(n=>n.tagName==='a'&&(attr(n,'href')||'').startsWith('contact.html?suburb=')),region+': existing suburb path');
  assert.equal(walk(faq).filter(n=>n.tagName==='details').length,2,region+': useful FAQs retained');
 }
 assert.doesNotMatch(page('service-areas.html').copy,/research table|research topics/i);
});
test('maintenance handover ends with the repair record rather than an unrelated smart-home service chain',()=>{
 const {main}=page('insights-tenant-property-manager-maintenance-handover.html');
 const tail=walk(main).find(n=>n.tagName==='p'&&attr(n,'data-guide-services')!==undefined);
 assert.doesNotMatch(text(tail),/smart.home|fixture or appliance connections/);
 assert.match(text(tail),/completed work|repair record|follow.up/i);
 assert(walk(main).some(n=>n.tagName==='a'&&attr(n,'href')==='property-management.html'),'handover returns to the actual maintenance owner');
 const owner=page('property-management.html');
 assert.match(owner.copy,/plumbing and electrical maintenance for rental homes, strata/i,'maintenance owner accepts the described work');
 assert.match(owner.copy,/work.order|approval/i,'maintenance owner explains the handover context');
});
test('article FAQ headings identify questions and do not repeat the preceding report checklist',()=>{
 for(const file of ['news-clearer-property-maintenance-enquiry.html','news-keeping-access-information-together.html','news-useful-property-work-order.html','insights-tenant-property-manager-maintenance-handover.html','insights-hot-water-plumbing-or-electrical.html','insights-safety-switch-keeps-tripping.html']){
  const {main}=page(file),intent=walk(main).find(n=>n.tagName==='div'&&attr(n,'data-site-intent')!==undefined);
  assert.match(text(walk(intent).find(n=>n.tagName==='h2')),/questions/i,file+': FAQ is identifiable');
  assert.equal((intent.childNodes||[]).filter(n=>n.tagName==='p').length,0,file+': no duplicate FAQ-preparation paragraph');
 }
});
test('leak education uses complete statements under statement headings',()=>{
 const {main}=page('insights-reporting-a-plumbing-leak.html'),nodes=walk(main);
 for(const heading of ['Meter observations before a leak enquiry','Leak detection, pipe repair and wall reinstatement scopes']){
  const h=nodes.find(n=>n.tagName==='h3'&&text(n)===heading),parent=nodes.find(n=>n.childNodes?.includes(h));
  const after=parent.childNodes.slice(parent.childNodes.indexOf(h)+1).find(n=>n.tagName==='p');
  assert.doesNotMatch(text(after),/^(?:No\.|Only if)/,heading+': orphaned answer opener');
 }
});
test('Contact preparation is consolidated outside the unchanged enquiry form',()=>{
 const {main}=page('contact.html'),nodes=walk(main);
 assert.equal(nodes.filter(n=>n.tagName==='h3'&&text(n)==='Repair request details').length,0,'duplicate pre-form checklist');
 assert.equal(nodes.filter(n=>n.tagName==='form').length,1);
 assert.match(text(main),/keys, alarm codes|entry codes/);
});
test('readonly editorial compatibility follows surviving chapters after FAQ-preface merges',()=>{
 const reader=require('../data/site-content-intent.cjs').pages;
 for(const region of regions){
  const item=reader[region+'.html'];
  assert.match(item.heading,/Plumbing and electrical repairs in/);
  assert.match(item.body,/Plumbing and electrical (?:work|repairs)/);
  assert.doesNotMatch(item.body,/\{\{ppp:/);
  assert(item.links.every(([,label])=>label.length>5));
 }
 for(const file of ['news-clearer-property-maintenance-enquiry.html','news-keeping-access-information-together.html','news-useful-property-work-order.html','insights-tenant-property-manager-maintenance-handover.html','insights-hot-water-plumbing-or-electrical.html','insights-safety-switch-keeps-tripping.html']){
  assert.match(reader[file].heading,/questions/);
  assert(reader[file].body.length>100,file+': substantive surviving summary');
  assert(reader[file].links.every(([,label])=>label.length>5));
 }
 assert.throws(()=>{reader['northern-suburbs.html'].body='second copy source';},/read.only|canonical/i);
});
test('FAQ has one routine-hours answer and a distinct urgent-repair question with matching schema',()=>{
 const {nodes,main}=page('faq.html'),details=walk(main).filter(n=>n.tagName==='details');
 assert.equal(details.filter(n=>/Routine service hours:/.test(text(n))).length,1,'routine hours repeated in two answers');
 assert(details.some(n=>/How do I arrange an urgent plumbing or electrical repair\?/.test(text(n))));
 const graph=JSON.parse(raw(nodes.find(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json')))['@graph'];
 const visible=details.map(n=>({question:text(n.childNodes.find(c=>c.tagName==='summary')),answer:n.childNodes.filter(c=>c.tagName!=='summary').map(text).join(' ').trim()}));
 const schema=graph.find(n=>n['@type']==='FAQPage').mainEntity.map(q=>({question:q.name,answer:q.acceptedAnswer.text}));
 assert.deepEqual(schema.sort((a,b)=>a.question.localeCompare(b.question)),visible.sort((a,b)=>a.question.localeCompare(b.question)));
});
test('editorial section headings identify their repair or record topic instead of generic instructions',()=>{
 const rejected=new Set(['Start with facts','Keep three details together','Share only what is needed','What to record','What to observe from a safe position','Decide what needs attention first','Common leak-reporting questions','Prepare the request without extra investigation']);
 for(const file of ['news-clearer-property-maintenance-enquiry.html','news-keeping-access-information-together.html','news-useful-property-work-order.html','insights-reporting-a-plumbing-leak.html','insights-hot-water-plumbing-or-electrical.html','insights-safety-switch-keeps-tripping.html','contact.html']){
  for(const h of walk(page(file).main).filter(n=>n.tagName==='h2'))assert(!rejected.has(text(h)),file+': '+text(h));
 }
});
test('work captions describe the visible installation without editorial evidence commentary',()=>{
 for(const file of ['index.html','about.html']){
  const {main,copy}=page(file);
  assert.doesNotMatch(copy,/photograph alone|photograph does not|not evidence of completed|existing electrical work photographs/,
   file+': evidence limitations belong in the report');
  for(const caption of walk(main).filter(n=>n.tagName==='figcaption'))assert.doesNotMatch(text(caption),/testing results|does not establish|existing photographs/);
 }
});
test('all seven article contents links name their actual surviving chapter and anchor',()=>{
 const files=['news-clearer-property-maintenance-enquiry.html','news-keeping-access-information-together.html','news-useful-property-work-order.html','insights-tenant-property-manager-maintenance-handover.html','insights-hot-water-plumbing-or-electrical.html','insights-safety-switch-keeps-tripping.html','insights-reporting-a-plumbing-leak.html'];
 for(const file of files){const {main}=page(file),nodes=walk(main),toc=nodes.find(n=>n.tagName==='nav'&&attr(n,'class')==='article-toc');
  for(const link of walk(toc).filter(n=>n.tagName==='a')){
   const id=attr(link,'href').slice(1),heading=nodes.find(n=>attr(n,'id')===id);
   assert(heading,file+': contents anchor '+id);
   assert.equal(text(link),text(heading),file+': contents label '+id);
  }
 }
});
