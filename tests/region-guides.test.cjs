const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { regionGuides } = require('../data/region-guides');

for (const guide of regionGuides) {
  const html = fs.readFileSync(path.join(__dirname, '..', guide.route), 'utf8');
  assert.match(html, new RegExp(`<h1>[^<]*${guide.name.replace(/[&]/g, '&amp;')}[^<]*<\\/h1>`, 'i'));
  assert.match(html, /Plumbing and electrical repairs/i);
  assert.match(html, /Homes, rentals, strata and managed properties/i);
  assert.match(html, /Assessment and quote discussion/i);
  assert.match(html, new RegExp(`Send an enquiry for ${guide.name.replace(/[&]/g, '&amp;')}`, 'i'));
  assert.match(html, /blocked drains|leak concerns|hot-water/i);
  assert.match(html, /electrical repairs|fault finding|safety switches|switchboards|lighting and power points/i);
  assert.doesNotMatch(html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || '', /class="rich-grid"/i, 'regional guides use prose, not shallow service card grids');
  assert.doesNotMatch(html, /24.hour|fixed price|guaranteed/i, 'regional guide copy must not invent commercial claims');
  assert.match(html, /"@type"\s*:\s*"FAQPage"/);
  assert.match(html, new RegExp(`<meta\\s+property="og:title"\\s+content="${guide.title.replace(/&/g, '&amp;').replace(/[|]/g, '\\|')} \\| Ellis Services Group"\\s*/?>`, 'i'));
  assert.match(html, new RegExp(`<meta\\s+property="og:description"\\s+content="${guide.description.replace(/[?]/g, '\\?')}"\\s*/?>`, 'i'));
  assert.match(html, new RegExp(`<meta\\s+property="og:url"\\s+content="https://perthpipepower\\.com\\.au/${guide.route}"\\s*/?>`, 'i'));
  assert.doesNotMatch(html, /service-areas\//i);
  for (const [question] of guide.faqs) assert.match(html, new RegExp(question.replace(/[?]/g, '\\?')));
}
console.log('Regional guide contract passed.');
