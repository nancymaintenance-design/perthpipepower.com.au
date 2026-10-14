const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
// Node 24 synchronous require of compiled .mjs is part of the compatibility contract.
const { captureBaseline, comparePublicOutput } = require('../.build/site/baseline.mjs');
const report = path.resolve(__dirname, '../../reports/content-navigation-repair-2026-10-14');
const hash = text => createHash('sha256').update(text).digest('hex');
const html = '<!DOCTYPE html><html><head><title>Fixture &amp; title</title><meta name="description" content="Original description"><link rel="canonical" href="https://example.test/"><meta name="robots" content="noindex, follow"><script type="application/ld+json">{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Original question?","acceptedAnswer":{"@type":"Answer","text":"Original answer."}}]}</script></head><body><h1>Fixture heading</h1><p>Original body &amp; café.</p><a href="one" class="first">one</a> <a href="two">two</a><details><summary>Original question?</summary><p>Original answer.</p></details><pre>  keep\n  indent </pre><textarea> user\n message </textarea><script>const message = " one ";\n</script><style>p::after { content: " two "; }\n</style></body></html>';
// Hand-authored parser representation, independent of captureBaseline.
const el = (tag, attrs = [], children = []) => ['element', 'http://www.w3.org/1999/xhtml', tag, attrs, children];
const txt = text => ['text', text];
const scriptJson = '{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Original question?","acceptedAnswer":{"@type":"Answer","text":"Original answer."}}]}';
const expected = {
  version: 1, capturedAt: '2026-10-13T00:00:00.000Z',
  pages: { 'index.html': {
    sha256: hash(html), title: 'Fixture & title', description: 'Original description', canonical: 'https://example.test/', robots: 'noindex, follow',
    headings: [{ level: 1, text: 'Fixture heading' }], faq: [{ question: 'Original question?', answer: 'Original answer.' }],
    jsonLd: [JSON.parse(scriptJson)],
    dom: JSON.stringify(['document', [ ['doctype', 'html', '', ''], el('html', [], [
      el('head', [], [el('title', [], [txt('Fixture & title')]), el('meta', [['', 'content', 'Original description'], ['', 'name', 'description']]), el('link', [['', 'href', 'https://example.test/'], ['', 'rel', 'canonical']]), el('meta', [['', 'content', 'noindex, follow'], ['', 'name', 'robots']]), el('script', [['', 'type', 'application/ld+json']], [txt(scriptJson)])]),
      el('body', [], [el('h1', [], [txt('Fixture heading')]), el('p', [], [txt('Original body & café.')]), el('a', [['', 'class', 'first'], ['', 'href', 'one']], [txt('one')]), txt(' '), el('a', [['', 'href', 'two']], [txt('two')]), el('details', [], [el('summary', [], [txt('Original question?')]), el('p', [], [txt('Original answer.')])]), el('pre', [], [txt('  keep\n  indent ')]), el('textarea', [], [txt(' user\n message ')]), el('script', [], [txt('const message = " one ";\n')]), el('style', [], [txt('p::after { content: " two "; }\n')])])
    ]) ]]),
    rawText: [{ tag: 'script', content: scriptJson }, { tag: 'pre', content: '  keep\n  indent ' }, { tag: 'textarea', content: ' user\n message ' }, { tag: 'script', content: 'const message = " one ";\n' }, { tag: 'style', content: 'p::after { content: " two "; }\n' }]
  } },
  sitemapUrls: ['https://example.test/'], assets: { 'fixture.css': hash('p { color: black; }') },
  artifacts: { 'sitemap.xml': '<urlset><url><loc>https://example.test/</loc></url></urlset>', 'robots.txt': 'User-agent: *\nDisallow:\n' }, protectedSourceHashes: {}
};
function fixture(t, changed = html) {
  fs.mkdirSync(report, { recursive: true });
  const dir = fs.mkdtempSync(path.join(report, 'baseline-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.writeFileSync(path.join(dir, 'index.html'), changed);
  fs.writeFileSync(path.join(dir, 'fixture.css'), 'p { color: black; }');
  for (const [file, text] of Object.entries(expected.artifacts)) fs.writeFileSync(path.join(dir, file), text);
  return dir;
}
test('baseline_detects_semantic_drift', t => {
  const dir = fixture(t);
  assert.deepEqual(comparePublicOutput(dir, expected), []);
  for (const [before, after, field] of [
    ['Fixture &amp; title', 'Changed title', 'title'], ['noindex, follow', 'index, follow', 'robots'],
    ['https://example.test/"', 'https://example.test/other"', 'canonical'],
    ['Original question?', 'Changed question?', 'faq'], ['Original answer.', 'Changed answer.', 'faq'],
    ['Original body', 'Changed body', 'dom'], ['Original description', 'Changed description', 'description']
  ]) {
    fs.writeFileSync(path.join(dir, 'index.html'), html.replaceAll(before, after));
    const differences = comparePublicOutput(dir, expected);
    assert(differences.some(d => d.field === field), `missed ${field}: ${before}`);
    assert(differences.every(d => Object.keys(d).sort().join() === 'actual,expected,field,file'));
  }
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'fixture.css'), 'p { color: red; }');
  assert(comparePublicOutput(dir, expected).some(d => d.file === 'fixture.css' && d.field === 'sha256'));
});
test('baseline_preserves_sensitive_whitespace', t => {
  const dir = fixture(t);
  for (const [before, after] of [
    ['</a> <a', '</a><a'], ['  keep\n  indent ', 'keep\n indent'],
    [' user\n message ', 'user\nmessage'], ['" one "', '"one"'], ['" two "', '"two"'],
    ['café', 'cafe'], ['&amp; café', '&lt; café']
  ]) {
    fs.writeFileSync(path.join(dir, 'index.html'), html.replace(before, after));
    assert(comparePublicOutput(dir, expected).length > 0, `missed sensitive change ${before}`);
  }
  fs.writeFileSync(path.join(dir, 'index.html'), html.replaceAll('\n', '\r\n').replace('href="one" class="first"', 'class="first" href="one"'));
  assert.deepEqual(comparePublicOutput(dir, expected), [], 'line endings and attribute order are equivalent');
});
test('baseline_reports_missing_and_unexpected_pages_and_artifacts', t => {
  const dir = fixture(t);
  fs.unlinkSync(path.join(dir, 'index.html'));
  assert(comparePublicOutput(dir, expected).some(d => d.file === 'index.html' && d.field === 'missing'));
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'extra.html'), html);
  assert(comparePublicOutput(dir, expected).some(d => d.file === 'extra.html' && d.field === 'unexpected'));
  fs.unlinkSync(path.join(dir, 'robots.txt'));
  assert(comparePublicOutput(dir, expected).some(d => d.file === 'robots.txt' && d.field === 'missing'));
});
test('capture_records_independently_known_fields_and_never_copies_credentials', t => {
  const dir = fixture(t);
  fs.writeFileSync(path.join(dir, '.env'), 'DO_NOT_COPY_THIS_SECRET');
  fs.mkdirSync(path.join(dir, '.vercel'));
  fs.writeFileSync(path.join(dir, '.vercel/project.json'), 'DO_NOT_COPY_THIS_SECRET');
  const evidence = fs.mkdtempSync(path.join(report, 'baseline-evidence-test-'));
  t.after(() => fs.rmSync(evidence, { recursive: true, force: true }));
  const actual = captureBaseline(dir, evidence);
  assert.equal(actual.version, 1);
  assert.deepEqual(actual.pages, expected.pages);
  assert.deepEqual(actual.sitemapUrls, expected.sitemapUrls);
  assert.deepEqual(actual.assets, expected.assets);
  assert.deepEqual(actual.artifacts, expected.artifacts);
  assert.equal(actual.protectedSourceHashes['fixture.css'], expected.assets['fixture.css']);
  assert(!fs.existsSync(path.join(evidence, 'public-evidence/.env')));
  assert(!fs.existsSync(path.join(evidence, 'public-evidence/.vercel')));
  assert.equal(fs.readFileSync(path.join(evidence, 'public-evidence/index.html'), 'utf8'), html);
});
