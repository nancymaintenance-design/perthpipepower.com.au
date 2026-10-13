const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { parse, parseFragment } = require('parse5');
const baseline = require('./fixtures/ts-migration/baseline.json');
const root = path.resolve(__dirname, '..');
const report = path.resolve(root, '../reports/typescript-migration-2026-10-13');
const walk = node => [node, ...(node.childNodes ?? []).flatMap(walk)];
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value;
const readable = node => text(node).replace(/\s+/g, ' ').trim();

function modules() {
  assert.ok(fs.existsSync(path.join(root, '.build/site/templates/page.mjs')), 'production shared templates must exist');
  return {
    ...require('../.build/site/content/pages.mjs'),
    ...require('../.build/site/templates/page.mjs'),
    ...require('../.build/site/templates/head.mjs'),
    ...require('../.build/site/templates/faq.mjs'),
    ...require('../.build/site/templates/breadcrumbs.mjs'),
    ...require('../.build/site/templates/navigation.mjs'),
    ...require('../.build/site/templates/footer.mjs')
  };
}

// Catches missing/reordered markup, raw text, attributes, scripts and query values.
// Every expectation comes from the immutable, independently frozen Task 1 DOM.
test('all_48_templates_match_baseline', t => {
  const { loadSiteData, renderPage } = modules();
  const { comparePublicOutput } = require('../.build/site/baseline.mjs');
  const site = loadSiteData();
  const dir = fs.mkdtempSync(path.join(report, 'templates-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  for (const page of site.pages) fs.writeFileSync(path.join(dir, page.file), renderPage(page, site));
  assert.deepEqual(comparePublicOutput(dir, { ...baseline, assets: {}, artifacts: {} }), []);
  const electrical = structuredClone(site.pages.find(p => p.file === 'electrical.html'));
  electrical.seo.title = 'Old online title';
  fs.writeFileSync(path.join(dir, electrical.file), renderPage(electrical, site));
  assert.ok(comparePublicOutput(dir, { ...baseline, assets: {}, artifacts: {} }).some(d => d.file === electrical.file && d.field === 'title'));
});

// Catches accidentally projecting page context into every menu, stale FAQ schema,
// missing service enquiry parameters, or adding a second gallery mount/script.
test('shared_components_preserve_context', () => {
  const { loadSiteData, renderPage, renderNavigation, renderFooter } = modules();
  const site = loadSiteData();
  const electrical = site.pages.find(p => p.file === 'electrical.html');
  const html = renderPage(electrical, site);
  assert.match(html, /<h2[^>]*>Electrical Maintenance for Perth Property Managers<\/h2>/);
  assert.match(html, /contact\.html\?service=electrical\.html/);
  const nav = walk(parseFragment(renderNavigation(electrical, site)));
  const plumbingMenu = nav.find(n => attr(n, 'id') === 'plumbing-menu');
  const plumbingLinks = walk(plumbingMenu).filter(n => n.tagName === 'a').map(n => attr(n, 'href'));
  assert.ok(plumbingLinks.includes('blocked-drains-perth.html'));
  assert.ok(plumbingLinks.includes('contact.html?service=plumbing.html'));
  assert.ok(!plumbingLinks.includes('contact.html?service=electrical.html'));
  assert.match(renderFooter(electrical, site), /contact\.html\?service=electrical\.html/);
  for (const file of ['blocked-drains-perth.html', 'ceiling-fans-perth.html', 'plumbing.html']) {
    assert.match(renderPage(site.pages.find(p => p.file === file), site), new RegExp(`contact\\.html\\?service=${file.replace('.', '\\.')}`));
  }
  for (const page of site.pages) {
    const output = renderPage(page, site), nodes = walk(parse(output));
    const expectedDom = JSON.parse(baseline.pages[page.file].dom);
    const countExpected = (node, tag, name, value) => !Array.isArray(node) ? 0 :
      (node[0] === 'element' && node[2] === tag && node[3].some(a => a[1] === name && (value === undefined || a[2] === value)) ? 1 : 0)
      + node.filter(Array.isArray).reduce((sum, child) => sum + countExpected(child, tag, name, value), 0);
    assert.equal(nodes.filter(n => attr(n, 'data-electrical-work-gallery') !== undefined).length,
      countExpected(expectedDom, 'div', 'data-electrical-work-gallery'), `${page.file}: gallery mounts`);
    assert.equal(nodes.filter(n => n.tagName === 'script' && attr(n, 'src') === 'electrical-work-gallery.js').length,
      countExpected(expectedDom, 'script', 'src', 'electrical-work-gallery.js'), `${page.file}: gallery scripts`);
    const visible = nodes.filter(n => n.tagName === 'details').map(n => {
      const summary = n.childNodes.find(child => child.tagName === 'summary');
      return { question: readable(summary), answer: n.childNodes.filter(c => c !== summary).map(text).join('').replace(/\s+/g, ' ').trim() };
    });
    const schemas = nodes.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json').map(n => JSON.parse(text(n)));
    const objects = value => !value || typeof value !== 'object' ? [] : [value, ...Object.values(value).flatMap(objects)];
    const questions = schemas.flatMap(objects).filter(value => value['@type'] === 'Question');
    for (const question of questions) {
      assert.ok(visible.some(item => item.question === question.name && item.answer === question.acceptedAnswer.text), `${page.file}: FAQ and schema share content`);
    }
  }
});

// Catches HTML injection through plain metadata/chrome/FAQ/breadcrumb values and
// destructive trim/escaping of trusted fragments and native form/raw text.
test('rendering_escapes_plain_text_without_changing_rich_html', () => {
  const { loadSiteData, renderPage } = modules();
  const site = loadSiteData(), page = site.pages.find(p => p.file === 'electrical.html');
  const plain = '<limits> & "quote" \'single\'';
  page.seo.title = plain;
  page.seo.description = plain;
  page.mainAttributes['data-plain'] = plain;
  const faq = page.sections.find(s => s.kind === 'faq');
  faq.items[0].question = plain;
  page.breadcrumbs[0].label = plain;
  page.breadcrumbs[0].href = `contact.html?message=${plain}`;
  const { headers } = require('../.build/site/content/layouts.mjs');
  const header = headers[site.layouts[page.layoutId].headerId];
  const textSlot = Object.keys(header.slots).find(key => header.slots[key] === 'text');
  page.chromeBindings[textSlot] = plain;
  const attributeSlot = Object.keys(header.slots).find(key => header.slots[key] === 'attribute');
  page.chromeBindings[attributeSlot] = plain;
  const rich = '<p id="rich"><a href="one">one</a> <a href="two">two</a> &amp; café.</p><pre>  keep\n  indent </pre><textarea name="fixture"> user\n message </textarea><script>const message = " one ";\n</script><style>p::after { content: " two "; }\n</style>';
  page.sections.push({ id: 'escaping-fixture', kind: 'rich', html: rich });
  const html = renderPage(page, site), nodes = walk(parse(html));
  assert.ok(html.includes(rich), 'trusted fragments are emitted without rewriting');
  assert.ok(!nodes.some(n => n.tagName === 'limits'));
  assert.equal(text(nodes.find(n => n.tagName === 'title')), plain);
  assert.equal(attr(nodes.find(n => n.tagName === 'main'), 'data-plain'), plain);
  assert.equal(attr(nodes.find(n => n.tagName === 'meta' && attr(n, 'name') === 'description'), 'content'), plain);
  assert.ok(nodes.some(n => n.attrs?.some(a => a.value === plain) && n.tagName !== 'main'), 'chrome attribute bindings stay within their quoted value');
  assert.ok(nodes.some(n => n.tagName === 'summary' && text(n) === plain));
  assert.ok(nodes.some(n => n.tagName === 'a' && text(n) === plain && attr(n, 'href') === `contact.html?message=${plain}`));
  assert.match(html, /&lt;limits&gt; &amp; &quot;quote&quot; &#39;single&#39;/);
});

test('structured_component_slots_reject_missing_duplicate_and_reserved_values', () => {
  const { loadSiteData, renderFaq, renderBreadcrumbs, renderHead } = modules();
  const container = '<details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details>';
  assert.equal(renderFaq([{ question: '<Q> "quoted"', answer: '<p>A <a href="x">link</a>.</p>' }], container), '<details><summary>&lt;Q&gt; &quot;quoted&quot;</summary><p>A <a href="x">link</a>.</p></details>');
  assert.throws(() => renderFaq([{ question: 'Q', answer: '<p>A</p>' }], container.replace('{{ppp:faq:0:answer}}', '')), /slot|token|marker/i);
  assert.throws(() => renderFaq([{ question: 'Q', answer: '<p>A</p>' }], container + '{{ppp:faq:0:question}}'), /slot|token|marker/i);
  assert.throws(() => renderFaq([{ question: '{{ppp:unknown}}', answer: '<p>A</p>' }], container), /reserved|token|marker/i);
  const site = loadSiteData(), page = site.pages.find(p => p.file === 'privacy.html');
  page.breadcrumbs[0].label = '<Home>';
  assert.equal(renderBreadcrumbs(page), '<p class="breadcrumbs"><a href="/">&lt;Home&gt;</a> / Privacy Policy</p>');
  page.breadcrumbContainer += '{{ppp:breadcrumb:0:label}}';
  assert.throws(() => renderBreadcrumbs(page), /slot|token|marker/i);
  const electrical = site.pages.find(p => p.file === 'electrical.html');
  const layout = structuredClone(site.layouts[electrical.layoutId]);
  layout.headSlots.push({kind:'seo', key:'social'});
  assert.throws(() => renderHead(electrical, layout), /slot|social|metadata/i);
});

test('renderPage_rejects_invalid_input_and_all_leftover_reserved_markers', () => {
  const { loadSiteData, renderPage } = modules();
  for (const mutate of [
    (p, s) => p.kind = 'unknown',
    (p, s) => p.file = '../escape.html',
    (p, s) => p.mainAttributes['bad name'] = 'x',
    (p, s) => p.layoutId = 'missing',
    (p, s) => p.hero += '{{ppp:unknown}}',
    (p, s) => p.hero += '{{ppp:incomplete',
    (p, s) => p.sections.find(x => x.kind === 'faq').items[0].answer += '{{ppp:unknown}}',
    (p, s) => s.layouts[p.layoutId].documentClose += '{{ppp:unknown}}',
    (p, s) => delete p.chromeBindings[Object.keys(p.chromeBindings)[0]],
    (p, s) => p.seo.jsonLdSource[0] = '{"tampered":true}'
  ]) {
    const site = loadSiteData(), page = structuredClone(site.pages.find(p => p.file === 'electrical.html'));
    mutate(page, site);
    assert.throws(() => renderPage(page, site), /invalid|reserved|marker|slot|content|page|layout|seo|chrome|json/i);
  }
});

test('json_ld_embedding_prevents_script_injection_and_preserves_authority', () => {
  const { loadSiteData, renderPage, renderHead } = modules();
  const site = loadSiteData(), page = site.pages.find(p => p.file === 'electrical.html');
  const malicious = '</ScRiPt><script id="injected">alert(1)</script><!--';
  page.seo.jsonLd[0] = { '@context': 'https://schema.org', '@type': 'Thing', name: malicious };
  page.seo.jsonLdSource[0] = JSON.stringify(page.seo.jsonLd[0], null, 2);
  const assertSafe = html => {
    const nodes = walk(parse(html));
    assert.ok(!nodes.some(n => attr(n, 'id') === 'injected'));
    const schema = nodes.find(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json');
    assert.deepEqual(JSON.parse(text(schema)), page.seo.jsonLd[0]);
  };
  assertSafe(renderPage(page, site));
  delete page.seo.jsonLdSource;
  assertSafe(`<html><head>${renderHead(page, site.layouts[page.layoutId])}</head></html>`);
  page.seo.jsonLdSource = ['{}', ...page.seo.jsonLd.slice(1).map(JSON.stringify)];
  assert.throws(() => renderHead(page, site.layouts[page.layoutId]), /json|companion|source/i);
});

// Catches a sparse/undefined formatting companion silently falling back to JSON.
test('json_ld_source_companion_never_silently_falls_back', () => {
  const { loadSiteData, renderHead } = modules();
  for (const missing of [undefined, null, 7]) {
    const site = loadSiteData(), page = site.pages.find(p => p.file === 'electrical.html');
    page.seo.jsonLdSource[0] = missing;
    assert.throws(() => renderHead(page, site.layouts[page.layoutId]), /json|companion|source/i);
  }
});

test('rendering_is_pure_and_page_kinds_keep_their_actual_layout_boundaries', () => {
  const { loadSiteData, renderPage } = modules();
  const site = loadSiteData(), before = structuredClone(site);
  const article = site.pages.find(p => p.kind === 'article');
  const first = renderPage(article, site);
  assert.equal(renderPage(article, site), first);
  assert.deepEqual(site, before);
  assert.match(first, /<main class="article">/);
  assert.throws(() => renderPage({ ...article, hero: '<section>Unexpected hero</section>' }, site), /article layout/i);
  const home = site.pages.find(p => p.kind === 'home');
  assert.throws(() => renderPage({ ...home, hero: null }, site), /missing hero/i);
});
