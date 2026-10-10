const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '..');
const previewBase = process.env.PERTH_PREVIEW_URL || 'http://127.0.0.1:4184';
const articles = Object.keys(require('../data/editorial-summaries.cjs'));
const pages = ['service-areas.html', 'insights.html', 'news.html', ...articles];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const results = [];
for (const file of pages) {
  const html = read(file), main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
  const ids = [...main.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, file + ': unique ids');
  for (const [, href] of main.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const url = new URL(href, 'https://perthpipepower.com.au/' + file);
    const target = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname.slice(1));
    assert(fs.existsSync(path.join(root, target)), file + ': broken link ' + href);
    if (url.hash) assert(read(target).includes('id="' + url.hash.slice(1) + '"'), file + ': broken anchor ' + href);
  }
  if (articles.includes(file)) {
    assert.equal((main.match(/data-editorial-summary/g) || []).length, 1);
    const graph = JSON.parse(html.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
    const article = graph.find(n => n['@type'] === 'Article');
    const dates = JSON.parse(read('data/editorial-content-dates.json'));
    assert.equal(article.dateModified, dates[file].lastmod);
    assert(main.includes('datetime="' + article.dateModified + '"'));
    assert(!article.datePublished, 'No inferred historical publication date');
    assert(article.abstract.length > 80);
  }
}
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    await page.route('**/www.googletagmanager.com/**', r => r.abort());
    await page.route('**/www.google.com/maps**', r => r.abort());
    await page.route('**/_vercel/**', r => r.fulfill({ body: '' }));
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const width of [390, 1440]) for (const file of pages) {
      await page.setViewportSize({ width, height: 950 });
      const response = await page.goto(previewBase + '/' + file);
      assert.equal(response.status(), 200);
      const layout = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, h1: document.querySelectorAll('h1').length }));
      assert(layout.scroll <= width + 1, file + ': overflow');
      assert.equal(layout.h1, 1);
      if (articles.includes(file)) {
        const first = page.locator('.article-toc a').first();
        const href = await first.getAttribute('href');
        await first.click();
        assert.equal(new URL(page.url()).hash, href);
        assert(await page.locator(href).isVisible());
      }
      if (file === articles[0]) {
        await page.goto(previewBase + '/' + file);
        await page.screenshot({ path: path.join(root, `docs/seo/screenshots/content-20261010-${width}.png`) });
      }
      results.push({ file, width, status: 200, overflow: false });
    }
    await page.goto(previewBase + '/perth-cbd-inner-suburbs.html');
    const galleryImages = await page.locator('.electrical-work-gallery__image').evaluateAll(images => images.map(i => ({ width: i.width, w: i.getAttribute('width'), h: i.getAttribute('height') })));
    assert.equal(galleryImages.length, 8);
    assert(galleryImages.every(i => Number(i.w) > 0 && Number(i.h) > 0));
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(root, 'docs/seo/content-quality-verification-20261010.json'), JSON.stringify({ results, tocNavigation: true, matchingArticleDates: true, brokenLinks: 0, galleryDimensions: true, pageErrors: errors }, null, 2));
    console.log('PASS: 20 page/viewport checks, article navigation/dates, native links and gallery dimensions.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
