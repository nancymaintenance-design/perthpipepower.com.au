const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const pages = ['water-leak-detection-perth.html','burst-pipe-repair-perth.html','blocked-drains-perth.html','hot-water-problems-perth.html','tap-mixer-repairs-perth.html','toilet-repairs-perth.html','power-faults-perth.html','safety-switch-tripping-perth.html','lighting-power-points-perth.html','smoke-alarm-maintenance-perth.html'];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(html.includes('service-page-depth.js'), `${file} should load the service-page depth content`);
}
const content = fs.readFileSync(path.join(root, 'service-page-depth.js'), 'utf8');
for (const marker of ['What to include in your enquiry', 'Related services', 'Call 000', 'responsible WA-qualified contracting arrangement']) assert.ok(content.includes(marker), `Content should include ${marker}`);
assert.ok(!/\bEC\s*\d{2,}|\bPL\s*\d{2,}|insured by|AUD\s*\d|\$\d/i.test(content), 'Content must not invent licence or insurance details');
const navigation = fs.readFileSync(path.join(root, 'navigation.js'), 'utf8');
assert.ok(navigation.includes('fixtures-appliances-perth.html'), 'Plumbing menu should expose Fixtures & appliances');
assert.ok(navigation.includes('renewables-smart-home-perth.html'), 'Electrical menu should expose Renewables & smart home');
console.log('PASS: all service pages load compliant professional-depth content.');
