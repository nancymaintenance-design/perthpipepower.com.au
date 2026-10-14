const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { regionGuides } = require('../data/region-guides');

for (const guide of regionGuides) {
  const html = fs.readFileSync(path.join(resolvePublicRoot(), guide.route), 'utf8');
  assert.match(html, new RegExp(`<h1>[^<]*${guide.name.replace(/[&]/g, '&amp;')}[^<]*<\\/h1>`, 'i'));
  assert.match(html, /Plumbing and electrical repairs/i);
  assert.match(html, /Repair request and access details/i);
  assert.match(html, /Written quote before work proceeds/i);
  assert.match(html, new RegExp(`Request a repair in ${guide.name.replace(/[&]/g, '&amp;')}`, 'i'));
  assert.match(html, /blocked drains|leak concerns|hot-water/i);
  assert.match(html, /electrical repairs|fault finding|safety switches|switchboards|lighting and power points/i);
  assert.doesNotMatch(html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || '', /class="rich-grid"/i, 'regional guides use prose, not shallow service card grids');
  assert.doesNotMatch(html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || '', /fixed price|guaranteed arrival/i, 'regional guide must not invent price or arrival promises');
  assert.match(html, /"@type"\s*:\s*"FAQPage"/);
  const title = html.match(/<title>([^<]+)<\/title>/)[1];
  assert.match(title, /Plumb(?:er|ing).*Electric(?:ian|al).*\| Ellis/i);
  assert.equal(html.match(/property="og:title" content="([^"]+)"/)[1], title, 'regional share title matches search title');
  assert.match(html, new RegExp(`<meta\\s+property="og:description"\\s+content="${guide.description.replace(/[?]/g, '\\?')}"\\s*/?>`, 'i'));
  assert.match(html, new RegExp(`<meta\\s+property="og:url"\\s+content="https://perthpipepower\\.com\\.au/${guide.route}"\\s*/?>`, 'i'));
  assert.equal((html.match(/property="og:title"/gi) || []).length, 1, 'each regional guide has one Open Graph title');
  assert.equal((html.match(/property="og:description"/gi) || []).length, 1, 'each regional guide has one Open Graph description');
  assert.equal((html.match(/property="og:url"/gi) || []).length, 1, 'each regional guide has one Open Graph URL');
  assert.doesNotMatch(html, /service-areas\//i);
  for (const [question] of guide.faqs.filter(([q])=>q.endsWith('?'))) assert.match(html, new RegExp(question.replace(/[?]/g, '\\?')));
  assert(!html.includes('class="service-information"'),'regional prose is not followed by retired one-sentence statement walls');
}
console.log('Regional guide contract passed.');
