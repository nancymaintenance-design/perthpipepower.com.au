# Perth Service Area Directory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a searchable six-region Perth metropolitan directory with a dedicated, enquiry-ready page for every listed suburb/locality.

**Architecture:** Store the locality catalogue in one JSON file and use a Node build script to create the directory data, individual static locality pages, and pending-page sitemap exclusions. Keep generated pages deliberately noindex until approved local case material is recorded, while reusing the existing static site's navigation, form script, and service links.

**Tech Stack:** Static HTML, CSS, browser JavaScript, Node.js built-ins, CommonJS assertion tests.

**Spec:** `docs/superpowers/specs/2026-09-24-perth-service-area-directory-design.md`

## Global Constraints

- Use officially named Perth metropolitan suburbs/localities rather than individual streets.
- Organise all entries into CBD & Inner Perth, Northern Suburbs, Southern Suburbs, Eastern Suburbs, Western Suburbs, and Perth Hills & Swan Valley.
- Use a single editable dataset and generated pages; do not manually duplicate locality records.
- Every locality page must include service links, an honest real-work placeholder while cases are pending, related area links, and the existing enquiry form path.
- Pending locality pages must be `noindex,follow` and excluded from `sitemap.xml`.
- Do not fabricate photos, completed jobs, testimonials, prices, or location-specific outcomes.
- Keep this phase local-only: do not push, merge, deploy, or change enquiry API configuration.

## Review Focus

- A case-insensitive partial suburb query must produce only matching links and a clear no-results message when none match.
- The search clear action must immediately restore all groups and remain keyboard accessible.
- Every dataset slug must be URL-safe, unique, and generate a corresponding file without overwriting an existing hand-authored page.
- A pending page must never accidentally enter the sitemap or lose its noindex directive.
- Every generated form must preserve the existing `data-enquiry-form` hook, required inputs, and `contact-form.js` asset.

---

### Task 1: Locality data contract and generator test

**Files:**

- Create: `data/perth-suburbs.json`
- Create: `scripts/build-perth-service-areas.js`
- Create: `tests/perth-service-area-directory.test.cjs`

**Interfaces:**

- Produces: `loadLocalities(datasetPath)` returning validated locality records.
- Produces: `buildDirectoryData(localities)` returning `{ regions, localities }` with six defined regions and sorted records.
- Produces: `renderLocalityPage(locality, options)` returning a complete HTML page string.
- Consumes: records shaped as `{ name, slug, region, regionHub, nearby, caseStatus }`.

- [ ] **Step 1: Write the failing generator test**

```js
const assert = require('node:assert/strict');
const { loadLocalities, buildDirectoryData, renderLocalityPage } = require('../scripts/build-perth-service-areas');
const localities = loadLocalities();
const directory = buildDirectoryData(localities);
assert.equal(directory.regions.length, 6);
assert.ok(localities.length >= 120);
assert.equal(new Set(localities.map(({ slug }) => slug)).size, localities.length);
assert.match(renderLocalityPage(localities[0]), /<meta name="robots" content="noindex,follow">/);
assert.match(renderLocalityPage(localities[0]), /data-enquiry-form/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: failure because the generator module and locality dataset do not exist.

- [ ] **Step 3: Add the validated locality data and minimal generator exports**

```js
function loadLocalities(datasetPath = path.join(ROOT, 'data', 'perth-suburbs.json')) {
  const localities = JSON.parse(fs.readFileSync(datasetPath, 'utf8'));
  // Reject duplicate slugs, unknown region labels, and non-pending/ready case states.
  return localities;
}
function buildDirectoryData(localities) {
  return { regions: REGIONS.map((region) => ({ ...region, localities: localities.filter((item) => item.region === region.name) })), localities };
}
```

Seed the JSON with a minimum of 120 recognised Perth metro suburb/locality records distributed across all six regions, with `caseStatus: "pending"` and two or more valid nearby slugs per record.

- [ ] **Step 4: Run the generator test to verify it passes**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: PASS.

- [ ] **Step 5: Commit the data contract and generator base**

```bash
git add data/perth-suburbs.json scripts/build-perth-service-areas.js tests/perth-service-area-directory.test.cjs
git commit -m "feat: add Perth locality directory data"
```

### Task 2: Generate locality pages and protect the sitemap

**Files:**

- Modify: `scripts/build-perth-service-areas.js`
- Create: `service-areas/[locality-slug].html` (generated)
- Modify: `sitemap.xml`
- Modify: `tests/perth-service-area-directory.test.cjs`

**Interfaces:**

- Consumes: `loadLocalities()` and `renderLocalityPage()` from Task 1.
- Produces: `generateLocalityPages(localities)` writing one HTML file per locality.
- Produces: `updateSitemap(localities)` adding only `caseStatus: "ready"` locality URLs.

- [ ] **Step 1: Extend the failing test for generated output**

```js
const representative = localities.find(({ region }) => region === 'Northern Suburbs');
const outputPath = path.join(ROOT, 'service-areas', `${representative.slug}.html`);
assert.ok(fs.existsSync(outputPath));
const page = fs.readFileSync(outputPath, 'utf8');
assert.match(page, new RegExp(`Plumber &amp; Electrician in ${representative.name}, Perth`));
assert.match(page, /Real local work photos are being prepared/);
assert.match(page, /contact-form\.js/);
assert.ok(!fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8').includes(`/service-areas/${representative.slug}.html`));
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: failure because no `service-areas/` output exists.

- [ ] **Step 3: Implement deterministic page generation and sitemap update**

```js
function generateLocalityPages(localities) {
  fs.mkdirSync(LOCALITY_OUTPUT, { recursive: true });
  for (const locality of localities) {
    fs.writeFileSync(path.join(LOCALITY_OUTPUT, `${locality.slug}.html`), renderLocalityPage(locality));
  }
}
function updateSitemap(localities) {
  // Preserve existing URLs, remove previously generated locality URLs,
  // then add only pages whose caseStatus is "ready".
}
```

The page template must use the established header/footer/navigation, reuse `site.css`, `navigation.css`, and `contact-form.js`, include plumbing/electrical service links, a locality/region/nearby-area navigation section, and the complete enquiry markup with unique locality-prefixed field IDs.

- [ ] **Step 4: Run generation and the full test**

Run: `node scripts/build-perth-service-areas.js; node tests/perth-service-area-directory.test.cjs`

Expected: all pending locality files exist, all pass basic page assertions, and none are added to `sitemap.xml`.

- [ ] **Step 5: Commit generated locality pages and sitemap guardrail**

```bash
git add scripts/build-perth-service-areas.js service-areas sitemap.xml tests/perth-service-area-directory.test.cjs
git commit -m "feat: generate Perth locality service pages"
```

### Task 3: Searchable directory UI and responsive styling

**Files:**

- Modify: `service-areas.html`
- Create: `service-area-directory.js`
- Modify: `site.css`
- Modify: `tests/perth-service-area-directory.test.cjs`

**Interfaces:**

- Consumes: browser global `window.PERTH_SERVICE_AREAS`, rendered from locality data by the generator.
- Produces: directory search that filters locality links by a case-insensitive query and exposes an accessible result count/no-result state.
- Produces: `<button type="button" class="area-search-clear">` only while a query is present.

- [ ] **Step 1: Extend the failing test for the directory contract**

```js
const directoryPage = fs.readFileSync(path.join(ROOT, 'service-areas.html'), 'utf8');
assert.match(directoryPage, /type="search"/);
assert.match(directoryPage, /aria-controls="area-search-results"/);
assert.match(directoryPage, /service-area-directory\.js/);
assert.match(directoryPage, /data-area-region="Northern Suburbs"/);
assert.match(fs.readFileSync(path.join(ROOT, 'service-area-directory.js'), 'utf8'), /aria-live="polite"/);
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: failure because the search contract and script are not present.

- [ ] **Step 3: Implement the directory markup, local search, and styles**

```js
function filterLocalities(query) {
  const normalized = query.trim().toLocaleLowerCase('en-AU');
  return window.PERTH_SERVICE_AREAS.filter(({ name }) => name.toLocaleLowerCase('en-AU').includes(normalized));
}
```

Use semantic links for navigation, a labelled search field, focus-visible styles, a keyboard-accessible clear button, and visible no-results guidance. Region groups must show named region headings plus all localities, with destination URLs matching generated page slugs. Add responsive CSS that keeps link targets easy to tap and does not require an image before user-supplied case photos are ready.

- [ ] **Step 4: Run the generation and test suite**

Run: `node scripts/build-perth-service-areas.js; node tests/perth-service-area-directory.test.cjs; node scripts/validate-seo.js`

Expected: PASS, with the existing SEO validator remaining green.

- [ ] **Step 5: Commit directory UI and styling**

```bash
git add service-areas.html service-area-directory.js site.css scripts/build-perth-service-areas.js tests/perth-service-area-directory.test.cjs
git commit -m "feat: add searchable Perth area directory"
```

### Task 4: Local preview and release-readiness verification

**Files:**

- Modify: `tests/perth-service-area-directory.test.cjs`
- Create: `.superpowers/sdd/2026-09-24-perth-service-area-directory/verification.md` (git-ignored execution record)

**Interfaces:**

- Consumes: generated directory, locality pages, and existing contact form script.
- Produces: repeatable verification commands and an evidence record for local review.

- [ ] **Step 1: Add failure tests for each review-focus case**

```js
assert.throws(() => loadLocalities(fixtureWithDuplicateSlug), /Duplicate locality slug/);
assert.match(directoryScript, /area-search-clear/);
assert.match(directoryScript, /No matching Perth locality/);
assert.match(pendingPage, /noindex,follow/);
assert.match(pendingPage, /data-enquiry-form/);
```

- [ ] **Step 2: Run tests to verify any unimplemented review-focus assertion fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: FAIL only until the matching production condition is implemented.

- [ ] **Step 3: Make the smallest production change required by the failing assertion**

```js
// Keep validation in loadLocalities and user-facing search states in
// service-area-directory.js; do not weaken the test or add fake content.
```

- [ ] **Step 4: Run the complete static verification sequence**

Run: `node scripts/build-perth-service-areas.js; node tests/perth-service-area-directory.test.cjs; node scripts/validate-seo.js; node scripts/test-seo-prt-002.js; node scripts/test-seo-high-intent.js`

Expected: all commands exit 0.

- [ ] **Step 5: Preview and inspect locally**

Run: `python -m http.server 4175 --bind 127.0.0.1`

Expected: directory search, a match, a no-result state, an individual locality page, the enquiry fields, and mobile-width layout can be inspected at `http://127.0.0.1:4175/`.

- [ ] **Step 6: Commit verification coverage**

```bash
git add tests/perth-service-area-directory.test.cjs
git commit -m "test: verify Perth area directory safeguards"
```

## Self-review

- Spec coverage: Task 1 implements the editable six-region data source; Task 2 creates separate locality pages, service/case/form sections and noindex/sitemap safeguards; Task 3 implements search and linked regional navigation; Task 4 covers review-focus behaviour and local preview.
- Placeholder scan: no implementation task permits fabricated case content or deferred technical behaviour.
- Type consistency: Tasks 2–4 use the `loadLocalities`, `buildDirectoryData`, and `renderLocalityPage` interfaces defined in Task 1; generated data is exposed as `window.PERTH_SERVICE_AREAS` only to Task 3's browser script.
- Review focus: Task 3 owns search/clear/no-results tests; Task 1 owns slug/data validation; Task 2 owns noindex/sitemap and form presence; Task 4 adds explicit regression assertions for all five focus risks.
