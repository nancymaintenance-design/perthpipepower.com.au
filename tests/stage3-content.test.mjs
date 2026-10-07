import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root = new URL('../', import.meta.url);
const page = "insights-reporting-a-plumbing-leak.html";
const html = fs.readFileSync(new URL(page, root), 'utf8');
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
test('stage3 guide explains the approved service decisions and scope', () => {
  for (const term of ["spreading water","inspection","written scope","water meter","surface restoration"]) assert.ok(visible.toLowerCase().includes(term), 'Missing decision: '+term);
  assert.ok(visible.includes("0413 477 667"), 'Brand contact missing');
  assert.doesNotMatch(visible, /100%\s+accurat|guaranteed\s+(?:accurac|non-invasive|no opening)|always\s+non-invasive/i, 'Do not invent detection accuracy or no-opening guarantees');

});
test('stage3 contextual links resolve in the shipped static tree', () => {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)[1];
  for (const href of ["water-leak-detection-perth.html","burst-pipe-repair-perth.html","property-management.html","contact.html"]) {
    assert.ok(main.includes('href="'+href), 'Missing contextual link: '+href);
    const target = href.split('#')[0];
    const local = target.startsWith('/') ? target.slice(1) : path.posix.join(path.posix.dirname(page),target);
    const candidate = path.join(root.pathname.replace(/^\/(?=[A-Z]:)/i,''),local);
    assert.ok(fs.existsSync(candidate.endsWith('/')?path.join(candidate,'index.html'):candidate), 'Broken target: '+href);
  }
});
test('stage3 JSON-LD remains valid and FAQ matches visible answers', () => {
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    const data=JSON.parse(m[1]);
    const graphs=data['@graph']||[data];
    for(const item of graphs) if(item['@type']==='FAQPage') for(const qa of item.mainEntity){
      assert.ok(visible.includes(qa.name),'FAQ question absent: '+qa.name);
      assert.ok(visible.includes(qa.acceptedAnswer.text),'FAQ answer differs: '+qa.name);
    }
  }
  assert.equal((html.match(/<h1\b/gi)||[]).length,1);
  assert.match(html, /rel="canonical"/);
});
