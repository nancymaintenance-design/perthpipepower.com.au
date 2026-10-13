const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const baseline = require('./fixtures/ts-migration/baseline.json');

function modules() {
  const file = path.join(root, '.build/site/content/pages.mjs');
  assert.ok(fs.existsSync(file), 'typed content registry must exist before loading pages');
  return { ...require(file), ...require('../.build/site/validate-content.mjs') };
}

test('registry_is_complete_and_safe', () => {
  const {loadSiteData, validateSiteData} = modules();
  const site = loadSiteData();
  assert.equal(site.pages.length, 48);
  assert.deepEqual(site.pages.map(p => p.file).sort(), Object.keys(baseline.pages).sort());
  assert.deepEqual(validateSiteData(site), []);
  assert.ok(validateSiteData({...site, pages: site.pages.filter(p => p.file !== 'electrical.html')}).length);
  assert.ok(validateSiteData({...site, pages: [...site.pages, site.pages.find(p => p.file === 'index.html')]}).length);
  for (const file of ['../x.html', 'C:/x.html', '/x.html', 'x\\x.html', '%2e%2e/x.html', '%252e%252e/x.html', 'INDEX.html']) {
    assert.ok(validateSiteData({...site, pages: [...site.pages, {...site.pages[0], file}]}).length, file);
  }
  const wrong = structuredClone(site);
  wrong.pages[0].seo.canonical = 'https://other.example/about.html';
  assert.ok(validateSiteData(wrong).length);
  for (const mutate of [
    s => s.pages[0].layoutId = 'missing',
    s => s.pages[0].kind = 'unknown',
    s => s.pages[0].sections = null,
    s => s.pages[0].seo.title = null,
    s => s.layouts[s.pages[0].layoutId].headerId = 'missing',
    s => s.assets.push('../private.env'),
    s => s.artifacts['../private.txt'] = 'no',
    s => s.pages[0].seo.jsonLdSource[0] = '{"tampered":true}'
  ]) {
    const copy = structuredClone(site); mutate(copy);
    assert.ok(validateSiteData(copy).length);
  }
});

test('content_preserves_approved_candidate', () => {
  const {loadSiteData} = modules();
  const site = loadSiteData();
  for (const page of site.pages) {
    const expected = baseline.pages[page.file];
    for (const key of ['title','description','canonical','robots','jsonLd']) assert.deepEqual(page.seo[key], expected[key], `${page.file}: ${key}`);
    const faq = page.sections.flatMap(s => s.kind === 'faq' ? s.items : []);
    assert.equal(faq.length, expected.faq.length, `${page.file}: all FAQ must be structured`);
    for (let i = 0; i < faq.length; i++) assert.equal(faq[i].question.replace(/\s+/g,' ').trim(), expected.faq[i].question);
  }
  assert.deepEqual(site.artifacts, baseline.artifacts);
  assert.deepEqual([...site.assets].sort(), Object.keys(baseline.assets).sort());
  assert.equal(site.pages.find(p => p.file === 'privacy.html').seo.robots, baseline.pages['privacy.html'].robots);
});

test('content loading has no dependency on old HTML, dist or CommonJS content sources', () => {
  modules();
  const code = `const fs=require('node:fs'); const original=fs.readFileSync; fs.readFileSync=function(file,...args){const p=String(file); if(/\\.html$|[/\\\\]source[/\\\\]dist[/\\\\]|[/\\\\]data[/\\\\].*\\.(?:cjs|js)$/.test(p)) throw Error('forbidden content read '+p); return original.call(this,file,...args);}; const site=require('./.build/site/content/pages.mjs').loadSiteData(); if(site.pages.length!==48) throw Error('missing pages');`;
  const result = spawnSync(process.execPath, ['-e',code], {cwd:root,encoding:'utf8'});
  assert.equal(result.status, 0, result.stderr);
});

test('malformed structured content and unresolved tokens fail validation before rendering', () => {
  const {loadSiteData,validateSiteData}=modules();
  for (const mutate of [
    s => s.pages[0].mainAttributes['bad attribute'] = 'x',
    s => s.pages[0].hero += '{{ppp:unknown}}',
    s => s.pages[0].seo.jsonLdSource.pop(),
    s => {delete s.pages[0].seo.jsonLdSource;s.pages[0].seo.jsonLd[0]=undefined;},
    s => s.layouts[s.pages[0].layoutId].headSlots.push({kind:'seo',key:'social'}),
    s => s.pages[0].sections.find(x=>x.kind==='faq').items[0].question = 7,
    s => s.pages[0].sections.find(x=>x.kind==='faq').container += '{{ppp:faq:999:answer}}',
    s => s.pages[0].breadcrumbContainer += '{{ppp:breadcrumb:999:label}}',
    s => {const key=Object.keys(s.pages[0].chromeBindings)[0];delete s.pages[0].chromeBindings[key];}
    ,s => s.layouts[s.pages[0].layoutId].headSlots.push({kind:'static',html:'<meta name=description content=shadow>'})
    ,s => {const page=s.pages.find(p=>p.file==='privacy.html');page.breadcrumbs=[];page.breadcrumbContainer=null;}
    ,s => s.pages[0].sections.find(x=>x.kind==='faq').items[0].answer += '{{ppp:unknown}}'
  ]) {
    const site=loadSiteData();mutate(site);
    assert.ok(validateSiteData(site).length,'malformed data must fail');
  }
});

test('authoritative JSON dates constrain sitemap and article publication values', () => {
  modules();
  for(const name of ['sitemap-content-dates','editorial-content-dates']) {
    const code=`const fs=require('node:fs'); const read=fs.readFileSync; fs.readFileSync=function(file,...args){const result=read.call(this,file,...args);if(String(file).includes('${name}.json')){const data=JSON.parse(result);data[Object.keys(data)[0]].lastmod='2026-10-14';return JSON.stringify(data);}return result;};require('node:module').syncBuiltinESMExports();try{require('./.build/site/content/pages.mjs').loadSiteData();process.exitCode=9;}catch(error){if(!/date.*mismatch|mismatch.*date/i.test(error.message))throw error;}`;
    const result=spawnSync(process.execPath,['-e',code],{cwd:root,encoding:'utf8'});
    assert.equal(result.status,0,`${name}: changed date must update or reject stale output: ${result.stderr}`);
  }
});

test('canonical edits drive published data and readonly compatible readers together', () => {
  const {loadSiteData}=modules();
  const canonical=require('../.build/site/content/pages/contact.mjs').page;
  const reader=require('../.build/site/content/legacy/site-content-intent.mjs').default;
  const title=canonical.seo.title;
  try {
    canonical.seo.title='Canonical shared-field edit';
    assert.equal(loadSiteData().pages.find(p=>p.file==='contact.html').seo.title,'Canonical shared-field edit');
    assert.equal(reader.metadata['contact.html'].title,'Canonical shared-field edit');
    assert.throws(()=>{reader.metadata['contact.html'].title='second authority';},/canonical|read.only/i);
  } finally {canonical.seo.title=title;}
  const faq=canonical.sections.find(s=>s.kind==='faq').items[0],question=faq.question;
  try {
    faq.question='Canonical FAQ edit?';
    const page=loadSiteData().pages.find(p=>p.file==='contact.html');
    assert.equal(reader.pages['contact.html'].faq[0][0],'Canonical FAQ edit?');
    assert.ok(JSON.stringify(page.seo.jsonLd).includes('Canonical FAQ edit?'));
    assert.ok(page.seo.jsonLdSource.some(s=>s.includes('Canonical FAQ edit?')));
  } finally {faq.question=question;}
  const article=require('../.build/site/content/pages/insights-hot-water-plumbing-or-electrical.mjs').page;
  const summaryReader=require('../.build/site/content/legacy/editorial-summaries.mjs').default;
  const summary=summaryReader[article.file];
  const section=article.sections.find(s=>s.kind==='rich'&&s.html.includes(summary));const original=section.html;
  try {section.html=section.html.replace(summary,'Canonical prose edit.');assert.equal(summaryReader[article.file],'Canonical prose edit.');assert.ok(loadSiteData().pages.find(p=>p.file===article.file).sections.some(s=>s.kind==='rich'&&s.html.includes('Canonical prose edit.')));}
  finally {section.html=original;}
  const shared=require('../.build/site/content/shared.mjs');
  const oldName=shared.business.name,oldOpens=shared.hours.opens,oldStreet=shared.business.address.streetAddress;
  try {
    shared.business.name='Canonical Business Marker';shared.hours.opens='08:00';shared.business.address.streetAddress='Canonical Street Marker';
    const site=loadSiteData(), chrome=require('../.build/site/content/layouts.mjs');
    assert.equal(require('../.build/site/content/legacy/business-entity.mjs').default.name,'Canonical Business Marker');
    assert.match(require('../.build/site/content/legacy/expanded-services.mjs').default.hours.text,/08:00/);
    const home=site.pages.find(p=>p.file==='index.html');
    const output=projectPage(home,site.layouts[home.layoutId],chrome);
    assert.match(output,/Canonical Business Marker/);assert.doesNotMatch(output,/Ellis Services Group/);
    assert.match(output,/Routine service hours: 08:00/);
    assert.match(site.artifacts['ai-content.json'],/Canonical Business Marker/);
    const about=site.pages.find(p=>p.file==='about.html');assert.doesNotMatch(projectPage(about,site.layouts[about.layoutId],chrome),/140 St Georges Terrace/);
  } finally {shared.business.name=oldName;shared.hours.opens=oldOpens;shared.business.address.streetAddress=oldStreet;}
});

test('all thirteen legacy modules expose canonical readonly data or explicit internal-mutator retirement', () => {
  modules();
  // Both composition graphs must be initialized before testing their mutable helpers.
  require('../data/site-content-intent.cjs');
  require('../.build/site/content/legacy/site-content-intent.mjs');
  for (const name of ['business-entity','confirmed-content-expansion','editorial-summaries','expanded-services','keyword-gap-content','region-guides','region-service-content','seo-guide-expansions','seo-service-metadata','service-answers','service-commercial-copy','service-presentation','site-content-intent']) {
    const extension = name === 'region-guides' ? 'js' : 'cjs';
    const legacy = require(`../data/${name}.${extension}`);
    const migrated = require(`../.build/site/content/legacy/${name}.mjs`).default;
    if (Object.values(legacy).some(v => typeof v === 'function')) {
      for (const key of Object.keys(legacy)) assert.throws(()=>migrated[key]({},{}),/Retired content mutation.*canonical/);
    } else {
      const expected=structuredClone(legacy);
      const site=modules().loadSiteData();
      if(['seo-guide-expansions','seo-service-metadata'].includes(name))for(const [file,value]of Object.entries(expected))if(value.description)value.description=site.pages.find(p=>p.file===file).seo.description;
      if(name==='service-commercial-copy'){
        const {parseFragment}=require('parse5');
        const walk=n=>[n,...(n.childNodes??[]).flatMap(walk)];const text=n=>n.nodeName==='#text'?n.value:(n.childNodes??[]).map(text).join('');
        for(const [file,value]of Object.entries(expected))if(value.booking){const page=site.pages.find(p=>p.file===file);const section=page.sections.find(s=>s.id==='service-booking');value.booking=text(walk(parseFragment(section.html)).find(n=>n.tagName==='p'));}
      }
      assert.deepEqual(JSON.parse(JSON.stringify(migrated)),expected,name);
    }
  }
});

// This projection exercises the data contract before Task 3 installs production templates.
// Expectations come only from the immutable Task 1 DOM snapshot, never this projection.
function projectPage(page, layout, chrome) {
  const escape = value => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const replace = (value, name, item) => value.split(`{{ppp:${name}}}`).join(item);
  let social = 0, jsonLd = 0;
  const head = layout.headSlots.map(slot => {
    if(slot.kind === 'static') return slot.html;
    if(slot.key === 'title') return `<title>${escape(page.seo.title)}</title>`;
    if(slot.key === 'canonical') return `<link rel="canonical" href="${escape(page.seo.canonical)}">`;
    if(slot.key === 'description' || slot.key === 'robots') return `<meta name="${slot.key}" content="${escape(page.seo[slot.key])}">`;
    if(slot.key === 'social') {const s=page.seo.social[social++]; return `<meta ${s.attribute}="${escape(s.key)}" content="${escape(s.value)}">`;}
    if(slot.key === 'jsonLd') return `<script type="application/ld+json">${page.seo.jsonLdSource[jsonLd++]}</script>`;
    throw Error('Unknown head slot');
  }).join('');
  const renderChrome = template => {
    let out=template.html;
    for(const key of Object.keys(template.slots))out=replace(out,key,escape(page.chromeBindings[key]));
    return out;
  };
  let breadcrumbs=page.breadcrumbContainer??'';
  page.breadcrumbs.forEach((item,i)=>{breadcrumbs=replace(breadcrumbs,`breadcrumb:${i}:label`,escape(item.label));if(item.href!==null)breadcrumbs=replace(breadcrumbs,`breadcrumb:${i}:href`,escape(item.href));});
  const sections=page.sections.map(section=>{
    if(section.kind==='rich')return section.html;
    let out=section.container;
    section.items.forEach((item,i)=>{out=replace(out,`faq:${i}:question`,escape(item.question));out=replace(out,`faq:${i}:answer`,item.answer);});
    return out;
  }).join('');
  const main=replace((page.hero??'')+sections,'breadcrumbs',breadcrumbs);
  const result=layout.documentOpen+head+layout.bodyOpen+renderChrome(chrome.headers[layout.headerId])+layout.beforeMain+
    `<main${Object.entries(page.mainAttributes).map(([key,value])=>` ${key}="${escape(value)}"`).join('')}>`+main+'</main>'+layout.afterMain+renderChrome(chrome.footers[layout.footerId])+layout.scripts.join('')+layout.documentClose;
  assert.doesNotMatch(result,/\{\{ppp:/,`${page.file}: unconsumed token`);
  return result;
}

test('typed content projects to the complete frozen DOM including links, prices, hours and dates', () => {
  const {loadSiteData}=modules();
  const {comparePublicOutput}=require('../.build/site/baseline.mjs');
  const chrome=require('../.build/site/content/layouts.mjs');
  const site=loadSiteData();
  const temp=fs.mkdtempSync(path.resolve(root,'../reports/typescript-migration-2026-10-13/content-projection-'));
  try {
    for(const page of site.pages)fs.writeFileSync(path.join(temp,page.file),projectPage(page,site.layouts[page.layoutId],chrome));
    const expected={...baseline,assets:{},artifacts:{}};
    const differences=comparePublicOutput(temp,expected);
    assert.deepEqual(differences.map(({file,field})=>({file,field})),[]);
    const page=site.pages.find(p=>p.file==='electrical.html');
    const altered=structuredClone(page);altered.seo.title='Old online electrical title';
    fs.writeFileSync(path.join(temp,page.file),projectPage(altered,site.layouts[page.layoutId],chrome));
    assert.ok(comparePublicOutput(temp,expected).some(d=>d.file===page.file&&d.field==='title'),'reverting candidate data to old titles must fail');
  } finally {fs.rmSync(temp,{recursive:true,force:true});}
});
