const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const b = require('../data/business-entity.cjs');
const services = require('../data/seo-service-metadata.cjs');
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  if (/name="robots" content="noindex/i.test(html)) continue;
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(blocks.length, 1, file + ': one connected graph');
  const graph = JSON.parse(blocks[0][1])['@graph'];
  assert(Array.isArray(graph), file + ': graph exists');
  const business = graph.find(n => n['@id'] === b.id);
  assert.equal(business?.legalName, b.legalName, file + ': legal identity');
  assert.equal(business.taxID, b.abn);
  assert.equal(business.hasMap, b.maps);
  assert(business.sameAs.includes(b.facebook));
  assert(business.sameAs.includes(b.linkedin));
  const ids = graph.map(n => n['@id']).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, file + ': no duplicate ids');
  const page = graph.find(n => n['@id']?.endsWith('#webpage'));
  assert.equal(page.about['@id'], b.id);
  assert(html.includes('data-business-identity'), file + ': visible identity');
  assert(!/https:\/\/share\.google\/(HbT2Uijg3K6yaqcpV|Z4tImXHToPi9H4LmH|XuRahe0m1VzUUvcGV)/.test(html));
  if (file !== 'index.html') {
    const crumb = graph.find(n => n['@type'] === 'BreadcrumbList');
    assert.equal(crumb.itemListElement.at(-1).item, page.url);
  }
  if (services[file]) assert(graph.some(n => n['@type'] === 'Service'), file + ': service coverage');
  for (const node of graph) {
    if (node['@type'] === 'Service') assert.equal(node.provider['@id'], b.id);
    if (node['@type'] === 'Article') {
      assert.equal(node.publisher['@id'], b.id);
      assert.equal(node.mainEntityOfPage['@id'], page['@id']);
    }
  }
}
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const headers = config.headers.find(r => r.source === '/(.*)')?.headers || [];
for (const key of ['X-Content-Type-Options', 'X-Frame-Options', 'Referrer-Policy', 'Permissions-Policy']) {
  assert(headers.some(h => h.key === key), key + ': global response header');
}
console.log('PASS: connected entity graphs, visible ABN, official links, service coverage and security headers.');
