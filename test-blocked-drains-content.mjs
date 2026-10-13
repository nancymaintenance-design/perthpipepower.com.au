import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('./blocked-drains-perth.html', import.meta.url), 'utf8');
const depthScript = await readFile(new URL('./service-page-depth.js', import.meta.url), 'utf8');

assert.match(html, /<title>Blocked Drains &amp; Drain Repairs Perth \| Ellis<\/title>/);
assert.match(html, /<h1>Blocked Drains Perth[^<]*Drain Clearing &amp; Repairs<\/h1>/);
assert.match(html, /rel="canonical"\s+href="https:\/\/perthpipepower\.com\.au\/blocked-drains-perth\.html"/);
assert.match(html, /watercorporation\.com\.au/);
assert.match(html, /Wastewater overflow needs the right first call/);
assert.match(html, /href="tel:131375"/);
assert.match(html, /Private plumbing and a public sewer fault have different repair responsibilities/);
assert.match(html, /AUD \$198–\$605/);
assert.match(html, /standard-hours, standard-scope work and are incl\. GST/);
assert.match(depthScript, /WA-qualified contracting arrangement/);
console.log('blocked-drains content contract: pass');
