import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('./blocked-drains-perth.html', import.meta.url), 'utf8');
const depthScript = await readFile(new URL('./service-page-depth.js', import.meta.url), 'utf8');

assert.match(html, /<title>Blocked Drains Perth \| Inspection and Repair Enquiries<\/title>/);
assert.match(html, /<h1>Blocked Drains in Perth<\/h1>/);
assert.match(html, /rel="canonical"\s+href="https:\/\/perthpipepower\.com\.au\/blocked-drains-perth\.html"/);
assert.match(html, /watercorporation\.com\.au/);
assert.match(html, /health\.wa\.gov\.au/);
assert.match(html, /AUD \$198–\$605/);
assert.match(html, /standard-hours, standard-scope work and are incl\. GST/);
assert.match(depthScript, /WA-qualified contracting arrangement/);
console.log('blocked-drains content contract: pass');
