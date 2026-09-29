const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'about.html'), 'utf8');
const replacementSection = html.match(/<section class="section">\s*<div class="shell text-column">[\s\S]*?Perth plumbing &amp; electrical repairs[\s\S]*?<\/section>/i)?.[0] || '';

assert.match(replacementSection, /<h2>Perth plumbing and electrical repairs for homes, rentals and strata properties\.<\/h2>/i);
assert.match(replacementSection, /href="electrical\.html">electrical repairs<\/a>,\s*fault finding,\s*safety-switch, lighting and power-point concerns/i);
assert.match(replacementSection, /href="blocked-drains-perth\.html">blocked drains<\/a>,\s*<a href="water-leak-detection-perth\.html">leak concerns<\/a> and\s*<a href="hot-water-problems-perth\.html">hot-water repair enquiries<\/a>/i);
assert.match(replacementSection, /property manager, rental or strata/i);
assert.doesNotMatch(replacementSection, /<h3>/i);
assert.doesNotMatch(html, /<h2>Homeowners, property managers and real-estate agencies\.<\/h2>/i);

console.log('About page keyword-content contract passed.');
