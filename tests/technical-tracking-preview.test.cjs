const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {spawn} = require('node:child_process');
const http = require('node:http');
const root = path.join(__dirname, '..');
const preview = path.resolve(root, '../reports/seo-optimization-2026-10-13/preview-server.py');

function tracking() {
  const events = [], listeners = [];
  const location = new URL('https://perthpipepower.com.au/contact.html');
  const window = {location, gtag: (...args) => events.push(args)};
  const context = vm.createContext({window, location, URL, document: {baseURI: location.href, addEventListener: (name, fn) => listeners.push(fn)}});
  const script = fs.readFileSync(path.join(root, 'conversion-events.js'), 'utf8');
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
  const rule = JSON.parse(fs.readFileSync(path.join(root,'vercel.json'))).redirects?.find(r => r.source === url.pathname);
  return rule ? {status: rule.permanent ? 308 : 307, location: rule.destination + url.search} : null;
}
test('known HTML variants redirect once while canonical, unknown and backend paths remain untouched', () => {
  for (const [input,want] of [['/index.html?x=1','/?x=1'],['/index.html/?x=1','/?x=1'],['/plumbing.html/?utm_source=test','/plumbing.html?utm_source=test'],['/emergency-electrician-perth.html/','/emergency-electrician-perth.html']]) {
    assert.deepEqual(redirect(input),{status:308, location:want});
    assert.equal(redirect(want),null);
  }
  for (const input of ['/','/plumbing.html','/unknown.html/','/api/index.html/','/assets/photo.html/']) assert.equal(redirect(input),null);
});

function request(port, route, method='GET') { return new Promise((resolve,reject) => {
  const req=http.request({host:'127.0.0.1', port, path:route, method},res=>{let body='';res.on('data',c=>body+=c);res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,body}));});req.on('error',reject);req.end();
}); }
test('localhost preview serves public assets, redirects and denies backend/internal/traversal on GET and HEAD', async t => {
  assert.ok(fs.existsSync(preview),'dedicated preview server must exist');
  const child=spawn('python',[preview,'--root',root,'--port','0'],{stdio:['ignore','pipe','pipe']});
  t.after(()=>child.kill());
  const port=await new Promise((resolve,reject)=>{let output='';child.stdout.on('data',c=>{output+=c;const m=output.match(/127\.0\.0\.1:(\d+)/);if(m)resolve(Number(m[1]));});child.on('error',reject);child.on('exit',()=>reject(new Error('Preview exited before ready')));});
  const home=await request(port,'/');
  assert.equal(home.status,200); assert.match(home.body,/<html/i);
  assert.equal(home.headers['x-robots-tag'],'noindex, nofollow, noarchive');
  assert.equal(home.headers['cache-control'],'no-store');
  for (const directive of ["connect-src 'none'","frame-src 'none'","form-action 'none'"]) assert.ok(home.headers['content-security-policy'].includes(directive));
  assert.match(home.headers['content-security-policy'],/script-src 'self' 'unsafe-inline'/);
  for (const method of ['GET','HEAD']) {
    for (const route of ['/.git/config','/api/contact','/data/test.json','/scripts/test.js','/tests/ga4.test.cjs','/tools/test','/docs/test','/internal/test','/check-favicon.js','/check-service-pricing.js','/ai-content.json','/vercel.json','/%2e%2e/00-%E6%80%BB%E8%A7%88.md','/%252e%252e/source/index.html','/api%2fcontact','/api%5ccontact']) assert.equal((await request(port,route,method)).status,403,method+' '+route);
    const r=await request(port,'/plumbing.html/?x=1',method);assert.equal(r.status,308);assert.equal(r.headers.location,'/plumbing.html?x=1');
    assert.equal((await request(port,'/unknown.html/',method)).status,404);
    assert.equal((await request(port,'/images/',method)).status,403);
  }
  const post=await request(port,'/api/contact','POST');assert.equal(post.status,403);assert.equal(JSON.parse(post.body).error,'Preview submissions are disabled');
});
