const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('../tests/support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {hasLocalLink}=require('./lib/link-assertions.cjs');

const root = resolvePublicRoot();
const read = (page) => fs.readFileSync(path.join(root, page), 'utf8');
const mainContent = (html) => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
const hrefs = (html) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)].map((match) => match[1]);
const linkFor = (html, label) => {
  const pattern = new RegExp(`<a\\b[^>]*href="([^"]+)"[^>]*>\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</a>`, 'i');
  return html.match(pattern)?.[1];
};

const home = read('index.html');
assert.match(home, /<title>\s*Plumbing &amp; Electrical Repairs Perth \| Ellis\s*<\/title>/, 'home title retains the service topic and brand');
assert.match(home, /<link rel="canonical" href="https:\/\/perthpipepower\.com\.au\/"\s*\/?\s*>/, 'home canonical must remain root');
assert.match(home, /Ellis Services Group/, 'home must retain the verified brand');
assert.match(home, /<h1\b[^>]*>\s*Plumbing and electrical repairs in Perth\s*<\/h1>/i, 'home H1 must state the Perth plumbing and electrical repair service');

const safetySwitch = read('safety-switch-tripping-perth.html');
assert.ok(hrefs(mainContent(safetySwitch)).includes('insights-safety-switch-keeps-tripping.html'), 'safety-switch page must lead to the existing insight');

const plumbing = read('plumbing.html');
for (const [label, expected] of [
  ['Water leak detection →', 'water-leak-detection-perth.html'],
  ['Discuss drainage →', 'blocked-drains-perth.html'],
  ['Discuss hot water →', 'hot-water-problems-perth.html'],
  ['Tap and mixer repairs →', 'tap-mixer-repairs-perth.html'],
  ['Toilet repairs →', 'toilet-repairs-perth.html'],
]) assert.equal(linkFor(plumbing, label), expected, `plumbing card ${label} must lead to its service page`);
assert.ok(hrefs(plumbing).includes('tel:+611300838722'), 'plumbing overview must keep the call CTA');
assert.ok(hasLocalLink(plumbing,'contact.html'), 'plumbing overview must keep the enquiry CTA');

const electrical = read('electrical.html');
for (const [label, expected] of [
  ['Discuss a power fault →', 'power-faults-perth.html'],
  ['Read the safety-switch guide →', 'safety-switch-tripping-perth.html'],
  ['Discuss lighting →', 'lighting-power-points-perth.html'],
  ['Discuss an outlet →', 'lighting-power-points-perth.html'],
  ['Discuss a smoke alarm →', 'smoke-alarm-maintenance-perth.html'],
]) assert.equal(linkFor(electrical, label), expected, `electrical card ${label} must lead to its service page`);
assert.ok(hrefs(electrical).includes('tel:+611300838722'), 'electrical overview must keep the call CTA');
assert.ok(hasLocalLink(electrical,'contact.html'), 'electrical overview must keep the enquiry CTA');

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
  const content = mainContent(read(page));
  assert.match(content, /<ul class="intent-links">[\s\S]*?<a href="[^"]+">[^<]+<\/a>[\s\S]*?<\/ul>/i, `${page} must expose descriptive related-service links`);
  assert.match(content, /<a class="button" href="contact\.html">[^<]+<\/a>/i, `${page} must retain its prominent enquiry next step`);
}
assert.match(read('site.css'), /\.article-next-step\s+\.cta-links\s*\{\s*display:\s*flex;\s*flex-wrap:\s*wrap;\s*gap:\s*0?\.75rem;/, 'desktop CTA group must preserve a spaced, wrapping layout');
assert.match(read('mobile-refinement.css'), /\.article-next-step\s+\.cta-links\s*\{\s*flex-direction:\s*column;\s*align-items:\s*flex-start;\s*gap:\s*0?\.75rem[;}]/, 'mobile CTA group must stack the links with tap spacing');

for (const page of fs.readdirSync(root).filter((name) => name.endsWith('.html'))) {
  assert.ok(!hrefs(read(page)).includes('index.html'), `${page} must link to the root home URL rather than index.html`);
}

console.log('SEO-PRT-002 internal-link requirements passed.');
