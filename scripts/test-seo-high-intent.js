const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const main = (html) => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';

const home = main(read('index.html'));
assert.match(home, /Blocked drains &amp; toilets/i);
assert.match(home, /href="blocked-drains-perth\.html"/);
assert.match(home, /Burst pipe/i);
assert.match(home, /href="burst-pipe-repair-perth\.html"/);

const drains = read('blocked-drains-perth.html');
assert.match(drains, /<title>Blocked Drains &amp; Toilets Perth \| Ellis Services Group<\/title>/i);
assert.match(main(drains), /blocked toilet/i);
assert.match(main(drains), /href="toilet-repairs-perth\.html"/);

const toilets = read('toilet-repairs-perth.html');
assert.match(toilets, /<title>Blocked Toilet &amp; Toilet Repairs Perth \| Ellis Services Group<\/title>/i);
assert.match(main(toilets), /blocked toilet/i);
assert.match(main(toilets), /href="blocked-drains-perth\.html"/);

const burst = read('burst-pipe-repair-perth.html');
assert.match(main(burst), /What should I do first if a pipe bursts\?/i);
assert.match(main(burst), /href="water-leak-detection-perth\.html"/);

const faq = main(read('faq.html'));
for (const phrase of ['blocked drain or blocked toilet', 'pipe bursts', 'blocked drains &amp; toilets']) assert.match(faq, new RegExp(phrase, 'i'));

console.log('High-intent plumbing SEO requirements passed.');
