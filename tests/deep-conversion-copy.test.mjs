import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const visible=h=>h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ');
const pages=fs.readdirSync(root).filter(p=>p.endsWith('.html')).concat(fs.readdirSync(path.join(root,'service-areas')).filter(p=>p.endsWith('.html')).map(p=>'service-areas/'+p));

for(const file of ['smoke-alarm-maintenance-perth.html','toilet-repairs-perth.html']) test(file+' commercial descriptions consistently offer actual on-site work',()=>{
  const descriptions=['description','og:description','twitter:description'].map(channel=>{
    const tag=[...read(file).matchAll(/<meta\b[^>]*>/gi)].map(m=>m[0]).find(tag=>new RegExp('(?:name|property)="'+channel+'"').test(tag));
    assert.ok(tag,file+': '+channel);
    return tag.match(/content="([^"]*)"/)[1];
  });
  assert.equal(new Set(descriptions).size,1,file+': three channels agree');
  for(const copy of descriptions){
    assert.doesNotMatch(copy,/enquir|repair information|symptoms to include/i,file);
    assert.match(copy,/on[- ]site/i,file);
    assert.match(copy,/(?:repair|maintenance) plan.*quote/i,file);
    if(file.startsWith('smoke')) assert.match(copy,/Do not remove hardwired units\./);
    else assert.match(copy,/leaks.*running.*slow filling.*blockages.*overflow/i);
  }
});

test('public service and form copy offers assessment rather than email receipt or enquiry handling',()=>{
  for(const p of pages) assert.doesNotMatch(visible(read(p)),/receive your enquiry by email|(?:provides|handles|assist with|coordinate)[^.]{0,100}(?:repair|maintenance) enquiries/i,p);
  assert.match(visible(read('contact.html')),/arrange an on-site assessment/i);
});
test('public metadata describes repairs rather than another page or unspecified next steps',()=>{
  for(const p of ['index.html','blocked-drains-perth.html']) assert.doesNotMatch(read(p).match(/<head>[\s\S]*?<\/head>/i)[0],/right next service page|discuss the issue, property location and next steps/i,p);
});
test('pages asking for photos make them optional and give the existing email channel',()=>{
  for(const p of ['index.html','about.html','plumbing.html','fixtures-appliances-perth.html','renewables-smart-home-perth.html','property-management.html','insights-reporting-a-plumbing-leak.html','insights-tenant-property-manager-maintenance-handover.html']) assert.match(visible(read(p)),/optional[^.]*maxinemaintenance.au@outlook.com/i,p);
});
test('runtime service context assigns qualified work to company and makes photos optional by email',()=>{
  let output='';
  vm.runInNewContext(read('service-page-depth.js'),{location:{pathname:'/hot-water-problems-perth.html'},document:{querySelector:selector=>selector==='[data-static-service-depth]'?null:({insertAdjacentHTML:(_,markup)=>{output+=markup;}})}});
  const text=visible(output);
  assert.match(text,/We (?:arrange|confirm)[^.]*WA-qualified/i);
  assert.match(text,/optional[^.]*maxinemaintenance.au@outlook.com/i);
  assert.match(text,/on-site assessment/i);
  assert.match(text,/Do not put yourself at risk/i);
  const staticText=visible(read('hot-water-problems-perth.html'));
  assert.match(staticText,/Our Perth plumbing and electrical work is carried out by appropriately licensed trades/i);
  assert.match(staticText,/optional[^.]*maxinemaintenance.au@outlook.com/i);
});
test('installation runtime and static enquiry path do not presume a fault diagnosis',()=>{
  for(const p of ['fixtures-appliances-perth.html','renewables-smart-home-perth.html']) {
    let output='';
    vm.runInNewContext(read('service-page-depth.js'),{location:{pathname:'/'+p},document:{querySelector:selector=>selector==='[data-static-service-depth]'?null:({insertAdjacentHTML:(_,markup)=>output+=markup})}});
    assert.doesNotMatch(visible(output),/A symptom can have more than one cause|establish the cause and confirm the repair scope/i,p);
    assert.match(visible(output),/installation|requirements/i,p);
  }
  assert.doesNotMatch(visible(read('fixtures-appliances-perth.html')),/We identify the fault and confirm the repair or installation scope/i);
  assert.doesNotMatch(visible(read('news-keeping-access-information-together.html')),/next step when access and approval information are ready/i);
  assert.match(visible(read('insights-safety-switch-keeps-tripping.html')),/arrange an on-site assessment/i);
});
test('FAQ schema remains equal to customer-visible answers',()=>{
  for(const p of pages) {
    const h=read(p),text=visible(h);
    for(const m of h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)){
      const data=JSON.parse(m[1]); for(const item of data['@graph']||[data]) if(item['@type']==='FAQPage') for(const qa of item.mainEntity) {
        assert.ok(text.includes(qa.name),p+': '+qa.name);
        assert.ok(text.includes(qa.acceptedAnswer.text),p+': '+qa.name);
      }
    }
  }
});

