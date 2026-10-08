const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const pages = ['water-leak-detection-perth.html','burst-pipe-repair-perth.html','blocked-drains-perth.html','hot-water-problems-perth.html','tap-mixer-repairs-perth.html','toilet-repairs-perth.html','power-faults-perth.html','safety-switch-tripping-perth.html','lighting-power-points-perth.html','smoke-alarm-maintenance-perth.html'];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(html.includes('data-commercial-service'), `${file} renders service depth directly in HTML`);
  assert.ok(!html.includes('src="service-page-depth.js"'), `${file} must not append duplicate legacy content`);
  assert.ok(html.includes('service-method') && html.includes('service-quote'), `${file} explains the work and quote`);
}
const content = fs.readFileSync(path.join(root, 'service-page-depth.js'), 'utf8');
for (const marker of ['What to include in your enquiry', 'Related services', 'Call 000', 'responsible WA-qualified contracting arrangement']) assert.ok(content.includes(marker), `Content should include ${marker}`);
assert.ok(!/\bEC\s*\d{2,}|\bPL\s*\d{2,}|insured by|AUD\s*\d|\$\d/i.test(content), 'Content must not invent licence or insurance details');
const navigation = fs.readFileSync(path.join(root, 'navigation.js'), 'utf8');
assert.ok(navigation.includes('fixtures-appliances-perth.html'), 'Plumbing menu should expose Fixtures & appliances');
assert.ok(navigation.includes('renewables-smart-home-perth.html'), 'Electrical menu should expose Renewables & smart home');
const fixturePage = fs.readFileSync(path.join(root, 'fixtures-appliances-perth.html'), 'utf8');
assert.match(fixturePage, /<h1>Fixture, Tap &amp; Appliance Connection Services in Perth<\/h1>/, 'Fixtures page needs a core-service H1');
assert.match(fixturePage, /How fixture and appliance work is scoped and quoted/, 'Fixtures page needs a pricing-process section');
assert.match(fixturePage, /Fixture, Tap &amp; Appliance Connection Services in Perth FAQs/, 'Fixtures page needs service FAQs');
assert.match(fixturePage, /service-expansion\.css/, 'Fixtures page should reuse the established service-page structure');
const renewablesPage = fs.readFileSync(path.join(root, 'renewables-smart-home-perth.html'), 'utf8');
assert.match(renewablesPage, /<h1>Smart Home &amp; Energy Electrical Services in Perth<\/h1>/, 'Smart-home page needs a core-service H1');
assert.match(renewablesPage, /How smart-home and energy work is scoped and quoted/, 'Smart-home page needs a pricing-process section');
assert.match(renewablesPage, /Smart Home &amp; Energy Electrical Services in Perth FAQs/, 'Smart-home page needs service FAQs');
assert.match(renewablesPage, /service-expansion\.css/, 'Smart-home page should reuse the established service-page structure');
console.log('PASS: all service pages load compliant professional-depth content.');
