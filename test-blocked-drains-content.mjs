import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import publicPaths from './tests/support/public-paths.cjs';

const html = await readFile(path.join(publicPaths.resolvePublicRoot(),'blocked-drains-perth.html'), 'utf8');
const depthScript = await readFile(path.join(publicPaths.SOURCE_ROOT,'service-page-depth.js'), 'utf8');

assert.match(html, /<title>Blocked Drains &amp; Drain Repairs Perth \| Ellis<\/title>/);
assert.match(html, /<h1>Blocked Drains Perth[^<]*Drain Clearing &amp; Repairs<\/h1>/);
assert.match(html, /rel="canonical"\s+href="https:\/\/perthpipepower\.com\.au\/blocked-drains-perth\.html"/);
assert.doesNotMatch(html, /data-intent-safety|Wastewater overflow needs the right first call/);
assert.match(html, /href="tel:0413477667"/);
assert.match(html, /AUD \$198–\$605/);
assert.match(html, /standard-hours, standard-scope work and are incl\. GST/);
assert.match(depthScript, /WA-qualified contracting arrangement/);
console.log('blocked-drains content contract: pass');
