const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const {chromium} = require('C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '..'), origin = 'https://perthpipepower.com.au';
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const staticResults = [], titles = new Set(), descriptions = new Set();
const read = f => fs.readFileSync(path.join(root,f),'utf8');
const fileFor = url => decodeURIComponent(url.pathname).replace(/^\//,'') || 'index.html';
for (const canonical of urls) {
  const file = fileFor(new URL(canonical)), html = read(file);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)[1];
  const description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)[1];
  assert(!titles.has(title), file + ': duplicate title');titles.add(title);
  assert(!descriptions.has(description), file + ': duplicate description');descriptions.add(description);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,file+': duplicate ID');
  let links=0, resources=0;
  for (const [tag, attr, value] of [...html.matchAll(/<(?:a|link|script|img)\b[^>]*>/g)].flatMap(([tag]) => [...tag.matchAll(/\b(href|src)="([^"]+)"/g)].map(m=>[tag,m[1],m[2]]))) {
    if (/^(?:tel:|mailto:|data:)/.test(value)) continue;
    const url = new URL(value.replace(/&amp;/g,'&'), canonical);
    if (url.origin!==origin || url.pathname.startsWith('/_vercel/')) continue;
    const target=fileFor(url);
    assert(fs.existsSync(path.join(root,target)),file+': missing target '+value);
    if (attr==='href' && tag.startsWith('<a')) {
      links++;
      if (url.hash) assert(read(target).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),file+': missing anchor '+value);
    } else resources++;
  }
  const graph = JSON.parse(html.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const idsInGraph = new Set(graph.map(n=>n['@id']));
  const check = x => {if (!x||typeof x!=='object')return;if(Object.keys(x).length===1&&x['@id'])assert(idsInGraph.has(x['@id']),file+': unresolved graph reference '+x['@id']);Object.values(x).forEach(v=>Array.isArray(v)?v.forEach(check):check(v));};
  check(graph);
  staticResults.push({file,links,resources,graphNodes:graph.length});
}
(async()=>{
  const browser=await chromium.launch({channel:'msedge',headless:true});
  const results=[];
  try {
    const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
    const page=await context.newPage();
    for (const url of urls) {
      const file=fileFor(new URL(url));
      const response=await page.goto('http://127.0.0.1:4184/'+(file==='index.html'?'':file));
      assert.equal(response.status(),200);
      const state=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth+1,words:document.querySelector('main').innerText.trim().split(/\s+/).length,answer:!!document.querySelector('[data-service-answer]'),links:document.querySelectorAll('main a[href]').length}));
      assert.equal(state.h1,1,file+': no-JS H1');assert(!state.overflow,file+': no-JS overflow');assert(state.words>80,file+': no-JS readable content');assert(state.links>0);
      if(Object.hasOwn(require('../data/service-commercial-copy.cjs'),file))assert(state.answer,file+': no-JS answer');
      results.push({file,...state});
    }
    await context.close();
    const report={checkedAt:new Date().toISOString(),staticResults,noJavaScript:results,externalWrites:false,limitations:'Local candidate only; no production or Google indexation changes. Links/resources resolved locally; external link/account ownership not certified.'};
    fs.writeFileSync(path.join(root,'docs/seo/final-seo-verification-20261010.json'),JSON.stringify(report,null,2));
    console.log(`PASS: ${staticResults.length} full-document native link/resource/metadata/ID/graph checks and ${results.length} mobile no-JavaScript reading checks.`);
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
