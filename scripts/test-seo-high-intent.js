const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('../tests/support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = resolvePublicRoot();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const main = (html) => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';

const home = main(read('index.html'));
assert.match(home, /Blocked drain clearing and repairs/i);
assert.match(home, /href="blocked-drains-perth\.html"/);
assert.match(home, /Burst pipe/i);
assert.match(home, /href="burst-pipe-repair-perth\.html"/);

const drains = read('blocked-drains-perth.html');
assert.match(drains, /<title>Blocked Drains &amp; Drain Repairs Perth \| Ellis<\/title>/i);
assert.match(main(drains), /<h1>Blocked Drains Perth[^<]*Drain Clearing &amp; Repairs<\/h1>/i);
assert.match(main(drains), /blocked toilet/i);
assert.match(main(drains), /href="toilet-repairs-perth\.html"/);

const toilets = read('toilet-repairs-perth.html');
assert.match(toilets, /<title>Toilet &amp; Cistern Repairs Perth \| Ellis<\/title>/i);
assert.match(main(toilets), /<h1>Toilet Repairs Perth[^<]*Cistern &amp; Flush Repairs<\/h1>/i);
assert.match(main(toilets), /blocked toilet/i);
assert.match(main(toilets), /href="blocked-drains-perth\.html"/);

const burst = read('burst-pipe-repair-perth.html');
assert.match(main(burst), /Do not enter water near electrical equipment/i,'substantive burst-pipe safety remains without an extra one-line heading');
assert.match(main(burst), /do not|keep clear|safe/i);
assert.match(main(burst), /href="water-leak-detection-perth\.html"/);

const faq = main(read('faq.html'));
for (const route of ['blocked-drains-perth.html','hot-water-problems-perth.html','toilet-repairs-perth.html']) assert.match(faq, new RegExp('href="'+route+'(?:#[^"]*)?"'));

console.log('High-intent plumbing SEO requirements passed.');
