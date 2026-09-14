import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const root = new URL('..', import.meta.url);
const home = readFileSync(new URL('index.html', root), 'utf8');
const script = readFileSync(new URL('site.js', root), 'utf8');

test('home only requests the active hero image at initial render', () => {
  assert.match(home, /<link rel="preload" as="image" href="hero-repair\.jpg">/i);
  assert.match(home, /class="slide" data-background-image="plumbing-repair\.jpg"/i);
  assert.match(home, /class="slide" data-background-image="electrical-repair\.jpg"/i);
  assert.match(script, /dataset\.backgroundImage/);
});

test('below-the-fold home cards defer image decoding', () => {
  const cards = [...home.matchAll(/<article class="card"><img\s+([^>]+)>/gi)];
  assert.equal(cards.length, 4, 'home should keep its four service cards');
  for (const [, attributes] of cards) {
    assert.match(attributes, /loading="lazy"/i);
    assert.match(attributes, /decoding="async"/i);
  }
});
