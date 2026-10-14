const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('../tests/support/public-paths.cjs');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');

const root = require('node:url').pathToFileURL(resolvePublicRoot() + require('node:path').sep);
const home = readFileSync(new URL('index.html', root), 'utf8');
const script = readFileSync(new URL('site.js', root), 'utf8');

test('home only requests the active hero image at initial render', () => {
  const preloads = [...home.matchAll(/<link\b[^>]*rel="preload"[^>]*as="image"[^>]*>/g)].map(m=>m[0]);
  assert.equal(preloads.length,2,'one hero preload per viewport');
  assert(preloads.some(t=>t.includes('href="hero-repair.jpg"')&&t.includes('media="(min-width:801px)"')&&t.includes('fetchpriority="high"')));
  assert(preloads.some(t=>t.includes('href="hero-repair-mobile.webp"')&&t.includes('media="(max-width:800px)"')&&t.includes('fetchpriority="high"')));
  const slides=[...home.matchAll(/<article\b[^>]*class="slide[^\"]*"[^>]*>/g)].map(m=>m[0]);
  assert.equal(slides.length,3);
  assert.match(slides[0],/is-active/);
  assert.match(slides[0].replace(/&quot;/g,'"'),/background-image:\s*url\(['"]?hero-repair\.jpg/);
  for(const slide of slides.slice(1)){assert.doesNotMatch(slide,/style=/);assert.match(slide,/data-background-image=/);}
  const css=readFileSync(new URL('field-design.css',root),'utf8');
  assert.match(css,/@media\s*\(max-width:\s*800px\)[\s\S]*?hero-repair-mobile\.webp/);
  assert.match(home, /class="slide" data-background-image="plumbing-repair\.jpg"/i);
  assert.match(home, /class="slide" data-background-image="electrical-repair\.jpg"/i);
  assert.match(script, /dataset\.backgroundImage/);
});

test('below-the-fold home cards defer image decoding', () => {
  const cards = [...home.matchAll(/<article class="card">\s*<img\s+([^>]+)>/gi)];
  assert.equal(cards.length, 6, 'all current service-card images are covered');
  for (const [, attributes] of cards) {
    assert.match(attributes, /loading="lazy"/i);
    assert.match(attributes, /decoding="async"/i);
  }
  const work = home.match(/<div class="field-work__grid">([\s\S]*?)<\/section>/)?.[1] ?? '';
  const workImages=[...work.matchAll(/<img\s+([^>]+)>/gi)];
  assert.equal(workImages.length,3,'all below-fold work photos are covered');
  for(const [,attributes]of workImages){assert.match(attributes,/loading="lazy"/);assert.match(attributes,/decoding="async"/);}
});
