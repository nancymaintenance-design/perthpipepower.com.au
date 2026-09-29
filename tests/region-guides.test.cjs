const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { regionGuides } = require('../data/region-guides');

for (const guide of regionGuides) {
  const html = fs.readFileSync(path.join(__dirname, '..', guide.route), 'utf8');
  assert.match(html, new RegExp(`<h1>[^<]*${guide.name.replace(/[&]/g, '&amp;')}[^<]*<\\/h1>`, 'i'));
  assert.match(html, /Service scenarios/i);
  assert.match(html, /How we scope the work/i);
  assert.match(html, /Frequently asked questions/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(html, /service-areas\//i);
  for (const [question] of guide.faqs) assert.match(html, new RegExp(question.replace(/[?]/g, '\\?')));
}
console.log('Regional guide contract passed.');
