const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = resolvePublicRoot();

function tracking() {
  const events = [], listeners = [];
  const location = new URL('https://perthpipepower.com.au/contact.html');
  const window = {location, gtag: (...args) => events.push(args)};
  const context = vm.createContext({window, location, URL, document: {baseURI: location.href, addEventListener: (name, fn) => listeners.push(fn)}});
  const script = fs.readFileSync(path.join(SOURCE_ROOT, 'conversion-events.js'), 'utf8');
  vm.runInContext(script, context); vm.runInContext(script, context);
  return {events, click(href) { for (const fn of listeners) fn({target: {closest: () => ({getAttribute: () => href})}}); }};
}
test('service links normalize same-origin routes and produce one event when loaded twice', () => {
  const t = tracking();
  for (const href of ['plumbing.html', '/electrical.html?email=private#details', 'https://perthpipepower.com.au/ceiling-fans-perth.html?source=nav', './rcd-testing-perth.html/']) t.click(href);
  assert.deepEqual(JSON.parse(JSON.stringify(t.events)), [
    ['event', 'service_click', {service_page:'plumbing.html', page_path:'/contact.html'}],
    ['event', 'service_click', {service_page:'electrical.html', page_path:'/contact.html'}],
    ['event', 'service_click', {service_page:'ceiling-fans-perth.html', page_path:'/contact.html'}],
    ['event', 'service_click', {service_page:'rcd-testing-perth.html', page_path:'/contact.html'}]
  ]);
});
test('every published service page and hub is tracked; irrelevant and external links are event-free', () => {
  const t = tracking();
  const pages = JSON.parse(fs.readFileSync(path.join(root,'ai-content.json'))).servicePages;
  for (const page of pages) t.click(page.url);
  for (const href of ['plumbing.html','electrical.html','property-management.html']) t.click(href);
  assert.equal(t.events.length,27);
  assert.equal(t.events[23][2].service_page,'emergency-electrician-perth.html');
  for (const href of ['https://evil.example/plumbing.html','//evil.example/electrical.html','javascript:alert(1)','mailto:test@example.com','privacy.html','unknown-perth.html','#plumbing.html','/api/plumbing.html','https://perthpipepower.com.au.evil.example/plumbing.html']) t.click(href);
  assert.equal(t.events.length,27);
  t.click('tel:0413477667');
  assert.deepEqual(JSON.parse(JSON.stringify(t.events[27])),['event','phone_click',{page_path:'/contact.html'}]);
});

// Evaluates the literal source/destination config subset we own. It does not emulate Vercel hosting.
function redirect(input) {
  const url = new URL(input,'https://perthpipepower.com.au');
  const rule = JSON.parse(fs.readFileSync(path.join(SOURCE_ROOT,'vercel.json'))).redirects?.find(r => r.source === url.pathname);
  return rule ? {status: rule.permanent ? 308 : 307, location: rule.destination + url.search} : null;
}
test('known HTML variants redirect once while canonical, unknown and backend paths remain untouched', () => {
  for (const [input,want] of [['/index.html?x=1','/?x=1'],['/index.html/?x=1','/?x=1'],['/plumbing.html/?utm_source=test','/plumbing.html?utm_source=test'],['/emergency-electrician-perth.html/','/emergency-electrician-perth.html']]) {
    assert.deepEqual(redirect(input),{status:308, location:want});
    assert.equal(redirect(want),null);
  }
  for (const input of ['/','/plumbing.html','/unknown.html/','/api/index.html/','/assets/photo.html/']) assert.equal(redirect(input),null);
});
