# Service-area case gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a responsive Electrical Work Gallery to all six region hubs and generated suburb pages without changing URLs, search, enquiry forms, or making unverified job-location claims.

**Architecture:** Existing suburb data remains in `data/perth-suburbs.json`. A browser module holds the eight approved images and mounts one shared gallery into marked HTML targets. The current generator emits suburb targets; each static regional hub gets the same target. CSS owns layout and crop behavior.

**Tech Stack:** Static HTML, vanilla JavaScript, Node.js, Node assert tests, CSS.

**Spec:** `docs/superpowers/specs/2026-09-24-service-area-case-library-design.md`

## Global Constraints

- Keep six regions, search behavior, existing suburb URLs, service descriptions, and contact forms.
- Copy and publish exactly eight supplied images; do not copy or reference `11-external-isolator-after.png` or `10-external-isolator-before.png`.
- Do not call a photo local, nearby, regional, suburb-specific, dated, client-specific, certified, compliant, diagnosed, or an asserted repair outcome.
- Use visible-work alt text and captions. Portrait images use `object-fit: cover`, never distortion.

## Review Focus

- Generated suburb output keeps `noindex,follow`, nearby links, and `data-enquiry-form`; Task 3 pins this.
- Excluded isolator names cannot appear in assets, data, or generated HTML; Task 1 pins this.
- Image strings avoid location, client, date, compliance, fault-cause, and outcome claims; Task 1 pins this.
- Empty gallery-target collections do not throw; Task 1 pins this.
- Mobile cards remain visible and keyboard focus styling remains visible; Task 4 pins selectors and requires local inspection.

---

### Task 1: Create the verified gallery data and assets

**Files:**
- Create: `images/electrical-work/kitchen-lighting-in-progress.png`, `images/electrical-work/kitchen-lighting-wide.png`, `images/electrical-work/kitchen-lighting-finished.png`, `images/electrical-work/cabinet-cabling.png`, `images/electrical-work/underground-electrical-conduit.png`, `images/electrical-work/renovation-rewiring.png`, `images/electrical-work/residential-switchboard.png`, `images/electrical-work/safety-switch-closeup.png`
- Create: `electrical-work-gallery.js`
- Create: `tests/electrical-work-gallery.test.cjs`

**Interfaces:**
- Produces `ELECTRICAL_WORK_GALLERY`, `renderElectricalWorkGallery()`, and `mountElectricalWorkGalleries(document)`.

- [ ] **Step 1: Write a failing data-contract test**

```js
const gallery = require('../electrical-work-gallery.js');
assert.equal(gallery.ELECTRICAL_WORK_GALLERY.length, 8);
for (const record of gallery.ELECTRICAL_WORK_GALLERY) {
  assert.ok(fs.existsSync(path.join(ROOT, record.image)));
  assert.doesNotMatch(`${record.alt} ${record.caption}`, /nearby|local project|suburb|region|client|completed in|compliant|certified|fault cause/i);
}
assert.doesNotMatch(JSON.stringify(gallery.ELECTRICAL_WORK_GALLERY), /external-isolator-(after|before)/i);
assert.equal(gallery.mountElectricalWorkGalleries({ querySelectorAll: () => [] }), 0);
```

- [ ] **Step 2: Run `node tests/electrical-work-gallery.test.cjs`; expect failure because the module does not exist.**

- [ ] **Step 3: Copy the eight approved source files and create the module.**

```js
const ELECTRICAL_WORK_GALLERY = [
  { id: 'kitchen-lighting-progress', image: 'images/electrical-work/kitchen-lighting-in-progress.png', alt: 'Kitchen ceiling with recessed lights being fitted', label: 'Kitchen lighting work', caption: 'Lighting work in progress.' },
  { id: 'kitchen-lighting-wide', image: 'images/electrical-work/kitchen-lighting-wide.png', alt: 'Wide view of a kitchen with recessed lights', label: 'Kitchen lighting work', caption: 'Kitchen lighting presentation.' },
  { id: 'kitchen-lighting-finished', image: 'images/electrical-work/kitchen-lighting-finished.png', alt: 'Kitchen with illuminated recessed ceiling lights', label: 'Kitchen lighting work', caption: 'Completed lighting presentation.' },
  { id: 'cabinet-cabling', image: 'images/electrical-work/cabinet-cabling.png', alt: 'Electrical cabinet with cabling and conduit', label: 'Cabling work', caption: 'Cabling installation-stage work.' },
  { id: 'underground-conduit', image: 'images/electrical-work/underground-electrical-conduit.png', alt: 'Underground trench with electrical conduit', label: 'Conduit work', caption: 'Underground conduit installation-stage work.' },
  { id: 'renovation-rewiring', image: 'images/electrical-work/renovation-rewiring.png', alt: 'Open renovation wall with electrical wiring', label: 'Renovation wiring', caption: 'Electrical rough-in during renovation work.' },
  { id: 'residential-switchboard', image: 'images/electrical-work/residential-switchboard.png', alt: 'Residential electrical switchboard with its cover open', label: 'Switchboard work', caption: 'Residential switchboard work example.' },
  { id: 'safety-switch-closeup', image: 'images/electrical-work/safety-switch-closeup.png', alt: 'Close-up of a safety switch and circuit breakers', label: 'Safety-switch work', caption: 'Safety-switch work example.' },
];
```

Render a section headed `Electrical work examples` with eight lazy-loaded `figure` cards. Export the records and functions for CommonJS, attach them to `window` in browsers, and return the number of mounted targets.

- [ ] **Step 4: Run `node tests/electrical-work-gallery.test.cjs`; expect `Electrical work gallery contract passed.`**

- [ ] **Step 5: Commit using `git add images/electrical-work electrical-work-gallery.js tests/electrical-work-gallery.test.cjs; git commit -m "feat: add verified electrical work gallery"`.**

### Task 2: Mount the gallery on the six regional hubs

**Files:**
- Modify: `perth-cbd-inner-suburbs.html`, `northern-suburbs.html`, `southern-suburbs.html`, `eastern-suburbs.html`, `western-suburbs.html`, `perth-hills-swan-valley.html`
- Modify: `tests/electrical-work-gallery.test.cjs`

**Interfaces:**
- Consumes `window.mountElectricalWorkGalleries(document)`.
- Produces one general work gallery per region hub without regional project claims.

- [ ] **Step 1: Add a failing test that reads all six HTML files and asserts `data-electrical-work-gallery` and `electrical-work-gallery.js`, while rejecting `/nearby cases|local projects|regional cases/i`.**

- [ ] **Step 2: Run `node tests/electrical-work-gallery.test.cjs`; expect the missing mount assertion to fail.**

- [ ] **Step 3: Add the identical section after each existing service-card section:**

```html
<section class="section electrical-work-gallery-section"><div class="shell" data-electrical-work-gallery></div></section>
```

Add `<script src="electrical-work-gallery.js"></script>` after `navigation.js`. Preserve all metadata, schema, coverage, and service copy.

- [ ] **Step 4: Run `node tests/electrical-work-gallery.test.cjs`; expect pass. Commit with `git add perth-cbd-inner-suburbs.html northern-suburbs.html southern-suburbs.html eastern-suburbs.html western-suburbs.html perth-hills-swan-valley.html tests/electrical-work-gallery.test.cjs; git commit -m "feat: show electrical work examples on region hubs"`.**

### Task 3: Generate the gallery on every suburb page

**Files:**
- Modify: `scripts/build-perth-service-areas.js`
- Modify: `tests/perth-service-area-directory.test.cjs`
- Modify: `service-areas/*.html`

**Interfaces:**
- Consumes the shared browser module from Task 1.
- Produces a gallery mount and script reference while retaining the enquiry form, nearby navigation, and `noindex,follow`.

- [ ] **Step 1: Add a failing generator test:**

```js
assert.match(examplePage, /data-electrical-work-gallery/);
assert.match(examplePage, /electrical-work-gallery\.js/);
assert.match(examplePage, /Examples of electrical work completed by our team/);
assert.doesNotMatch(examplePage, /Construction cases for|Real local work photos are being prepared|nearby case|local project/i);
assert.match(generatedPage, /data-enquiry-form/);
assert.match(generatedPage, /noindex,follow/);
```

- [ ] **Step 2: Run `node tests/perth-service-area-directory.test.cjs`; expect the old pending-work text assertion to fail.**

- [ ] **Step 3: Replace only the pending work block in `renderLocalityPage()` with:**

```html
<section class="rich-band"><div class="shell text-column"><span class="eyebrow">Electrical work examples</span><h2>Examples of electrical work completed by our team</h2><p>These images show general examples of electrical work. They are not presented as work completed at a specific suburb or property.</p></div></section><section class="section electrical-work-gallery-section"><div class="shell" data-electrical-work-gallery></div></section>
```

Append `<script src="../electrical-work-gallery.js"></script>` after `contact-form.js`. Run `node scripts/build-perth-service-areas.js`; do not change `updateSitemap()` or any `caseStatus` value.

- [ ] **Step 4: Run `node tests/perth-service-area-directory.test.cjs`; expect `Perth service-area locality data contract passed.` Commit with `git add scripts/build-perth-service-areas.js tests/perth-service-area-directory.test.cjs service-areas; git commit -m "feat: add electrical gallery to suburb pages"`.**

### Task 4: Style and verify

**Files:**
- Modify: `site.css`
- Modify: `tests/electrical-work-gallery.test.cjs`

**Interfaces:**
- Consumes `.electrical-work-gallery__grid`, `.electrical-work-gallery__card`, and `.electrical-work-gallery__image` markup.
- Produces a four-column desktop grid, two-column mobile grid, crop-safe images, and visible keyboard focus treatment.

- [ ] **Step 1: Add a failing CSS test asserting `.electrical-work-gallery__grid`, `.electrical-work-gallery__image` with `object-fit: cover`, `.electrical-work-gallery a:focus-visible`, and `@media (max-width: 700px)` exist.**

- [ ] **Step 2: Run `node tests/electrical-work-gallery.test.cjs`; expect CSS selector assertions to fail.**

- [ ] **Step 3: Add scoped styles:**

```css
.electrical-work-gallery__grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
.electrical-work-gallery__card { overflow: hidden; border: 1px solid #d9dfdc; border-radius: .8rem; background: #fff; }
.electrical-work-gallery__image { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.electrical-work-gallery a:focus-visible { outline: 3px solid #f4b41a; outline-offset: 3px; }
@media (max-width: 700px) { .electrical-work-gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
```

- [ ] **Step 4: Run `node tests/electrical-work-gallery.test.cjs`, `node tests/perth-service-area-directory.test.cjs`, `node tests/about-company-information.test.cjs`, and `node tests/home-service-cards.test.cjs`; expect all exit 0. Inspect one regional hub and `service-areas/perth.html` locally on desktop and mobile: eight images, neutral wording, usable enquiry form, and crop-safe cards.**

- [ ] **Step 5: Commit with `git add site.css tests/electrical-work-gallery.test.cjs; git commit -m "style: present electrical work gallery"`. Do not push until the user requests production release; then check the directory, one hub, and one suburb page in production.**
