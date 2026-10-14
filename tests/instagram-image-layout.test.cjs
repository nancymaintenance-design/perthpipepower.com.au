const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('footer Instagram icons reserve intrinsic layout space', () => {
  const html = fs.readFileSync(path.join(resolvePublicRoot(), 'index.html'), 'utf8');
  const walk=node=>[node,...(node.childNodes??[]).flatMap(walk)];
  const icons=walk(require('parse5').parse(html)).filter(n=>n.tagName==='img'&&n.attrs.some(a=>a.name==='class'&&a.value==='footer-instagram__icon'));
  assert.equal(icons.length,1);
  assert.deepEqual(Object.fromEntries(icons[0].attrs.map(a=>[a.name,a.value])),{class:'footer-instagram__icon',src:'instagram-icon-small.png',alt:'',width:'1254',height:'1254'});
});
