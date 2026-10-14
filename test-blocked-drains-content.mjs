import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import publicPaths from './tests/support/public-paths.cjs';

const html = await readFile(path.join(publicPaths.resolvePublicRoot(),'blocked-drains-perth.html'), 'utf8');
const depthScript = await readFile(path.join(publicPaths.SOURCE_ROOT,'service-page-depth.js'), 'utf8');

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
