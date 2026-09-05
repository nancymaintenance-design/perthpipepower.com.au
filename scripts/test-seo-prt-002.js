const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (page) => fs.readFileSync(path.join(root, page), 'utf8');
const mainContent = (html) => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
const hrefs = (html) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)].map((match) => match[1]);
const linkFor = (html, label) => {
  const pattern = new RegExp(`<a\\b[^>]*href="([^"]+)"[^>]*>\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</a>`, 'i');
  return html.match(pattern)?.[1];
};

const home = read('index.html');
assert.match(home, /<title>Plumbing &amp; Electrical Repairs Perth \| Ellis Services Group<\/title>/, 'home title must remain unchanged');
assert.match(home, /<link rel="canonical" href="https:\/\/perthpipepower\.com\.au\/">/, 'home canonical must remain root');
assert.match(home, /Ellis Services Group/, 'home must retain the verified brand');
assert.match(home, /<h1>Plumbing and electrical repairs in Perth<\/h1>/i, 'home H1 must state the Perth plumbing and electrical repair service');

const safetySwitch = read('safety-switch-tripping-perth.html');
assert.equal(linkFor(safetySwitch, 'View Detailed safety-switch guide →'), 'insights-safety-switch-keeps-tripping.html', 'safety-switch guide card must lead to the existing insight');

const plumbing = read('plumbing.html');
for (const [label, expected] of [
  ['Discuss a leak →', 'water-leak-detection-perth.html'],
  ['Discuss drainage →', 'blocked-drains-perth.html'],
  ['Discuss hot water →', 'hot-water-problems-perth.html'],
  ['Discuss a fixture →', 'tap-mixer-repairs-perth.html'],
  ['Discuss a toilet issue →', 'toilet-repairs-perth.html'],
]) assert.equal(linkFor(plumbing, label), expected, `plumbing card ${label} must lead to its service page`);
assert.ok(hrefs(plumbing).includes('tel:0413477667'), 'plumbing overview must keep the call CTA');
assert.ok(hrefs(plumbing).includes('contact.html'), 'plumbing overview must keep the enquiry CTA');

const electrical = read('electrical.html');
for (const [label, expected] of [
  ['Discuss a power fault →', 'power-faults-perth.html'],
  ['Read the safety-switch guide →', 'safety-switch-tripping-perth.html'],
  ['Discuss lighting →', 'lighting-power-points-perth.html'],
  ['Discuss an outlet →', 'lighting-power-points-perth.html'],
  ['Discuss a smoke alarm →', 'smoke-alarm-maintenance-perth.html'],
]) assert.equal(linkFor(electrical, label), expected, `electrical card ${label} must lead to its service page`);
assert.ok(hrefs(electrical).includes('tel:0413477667'), 'electrical overview must keep the call CTA');
assert.ok(hrefs(electrical).includes('contact.html'), 'electrical overview must keep the enquiry CTA');

for (const [page, servicePage] of [
  ['insights-hot-water-plumbing-or-electrical.html', 'hot-water-problems-perth.html'],
  ['insights-tenant-property-manager-maintenance-handover.html', 'property-management.html'],
  ['news-useful-property-work-order.html', 'property-management.html'],
  ['news-keeping-access-information-together.html', 'property-management.html'],
]) {
  const html = mainContent(read(page));
  assert.ok(hrefs(html).includes(servicePage), `${page} must include a relevant service next step`);
  assert.ok(hrefs(html).includes('contact.html'), `${page} must include an enquiry next step`);
}

for (const page of [
  'insights-hot-water-plumbing-or-electrical.html',
  'insights-tenant-property-manager-maintenance-handover.html',
  'news-useful-property-work-order.html',
  'news-keeping-access-information-together.html',
]) {
  const nextStep = mainContent(read(page)).match(/<section class="article-next-step">([\s\S]*?)<\/section>/i)?.[1] ?? '';
  assert.match(nextStep, /<div class="cta-links">[\s\S]*?<a href="[^"]+">[\s\S]*?<\/a>[\s\S]*?<a href="contact\.html">[\s\S]*?<\/a>[\s\S]*?<\/div>/i, `${page} must put its two CTA links in a dedicated group`);
}
assert.match(read('site.css'), /\.article-next-step \.cta-links\{display:flex;flex-wrap:wrap;gap:\.75rem\}/, 'desktop CTA group must preserve a spaced, wrapping layout');
assert.match(read('mobile-refinement.css'), /\.article-next-step \.cta-links\{flex-direction:column;align-items:flex-start;gap:\.75rem\}/, 'mobile CTA group must stack the links with tap spacing');

for (const page of fs.readdirSync(root).filter((name) => name.endsWith('.html'))) {
  assert.ok(!hrefs(read(page)).includes('index.html'), `${page} must link to the root home URL rather than index.html`);
}

console.log('SEO-PRT-002 internal-link requirements passed.');
