const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=resolvePublicRoot();
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
let original=require('./fixtures/ts-migration/historical-public-expectations.json').restoredHero;
// Preserve the immutable original carousel and apply only the four approved
// literal slide-copy edits. Image/structure/control changes still fail here.
for(const edit of require('./fixtures/fullsite-refinement/editorial-copy-edits.json').edits.filter(e=>e.file==='index.html'&&e.field==='hero')){
  assert.equal(original.split(edit.before).length-1,1,'exact original hero copy fragment');
  original=original.replace(edit.before,edit.after);
}
const hero=s=>s.match(/<section class="hero"[\s\S]*?<\/section>/)[0].replace(/\r\n/g,'\n');
assert.equal(hero(html),hero(original),'restored hero exactly preserves published carousel markup');
assert.doesNotMatch(html,/class="field-hero"|class="field-process"/);
assert.match(html,/rel="preload" as="image" href="hero-repair.jpg"/);
console.log('PASS: original photographic carousel restored, generic split hero and process removed.');
