# Plumbing and Electrical Service-Page Depth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every existing Plumbing and Electrical topic page a professional, safe, internally connected content structure that helps Perth customers describe their issue and find the right next step.

**Architecture:** Keep the static HTML architecture and enrich the twelve existing topic pages in place. Add reusable semantic sections directly to the pages, use only existing internal destinations, and use a single Node contract test to check topic coverage, safety language, internal-link paths and the absence of invented licence or insurance details.

**Tech Stack:** Static HTML, existing shared CSS classes (`section`, `rich-band`, `rich-grid`, `service-detail-grid`, `faq`), Node.js `assert`, Git.

**Spec:** `docs/superpowers/specs/2026-09-24-plumbing-electrical-service-page-depth-design.md`

## Global Constraints

- Use plain, specific language describing customer-observable symptoms and the information a trade professional needs.
- For regulated electrical and plumbing work, state that the applicable responsible contractor and current documentation are confirmed before work is arranged; do not publish unprovided licence numbers, insurer names, policy limits or certification claims.
- Do not manufacture testimonials, prices, response times, inspection findings, completed-project claims, certifications, insurance details or manufacturer affiliations.
- Immediate danger requires 000; customers must not put themselves at risk for photos or diagnosis.
- Every topic page links to its service hub, at least two relevant topic pages, `service-areas.html` and `contact.html`.

## Review Focus

- A page is linked from a mega menu but lacks the mandatory safety wording; Task 1 and Task 4 add and check the safety marker.
- A related-link URL is misspelled or points to a missing file; Task 5 resolves each href against the repository root.
- Electrical copy is changed to imply that customers should test, bypass or dismantle equipment; Task 4 rejects those phrases in electrical page bodies.
- A future edit introduces an EC/PL number, insurer name or cover amount without source material; Task 5 rejects common licence/insurance identifier patterns.
- A generic cross-link replaces a relevant, task-specific related service; Tasks 2–4 define exact link sets and Task 5 checks them.

---

### Task 1: Create the service-page content contract

**Files:**
- Create: `tests/service-page-depth.test.cjs`
- Modify: `water-leak-detection-perth.html`, `burst-pipe-repair-perth.html`, `blocked-drains-perth.html`, `hot-water-problems-perth.html`, `tap-mixer-repairs-perth.html`, `toilet-repairs-perth.html`, `fixtures-appliances-perth.html`, `power-faults-perth.html`, `safety-switch-tripping-perth.html`, `lighting-power-points-perth.html`, `smoke-alarm-maintenance-perth.html`, `renewables-smart-home-perth.html`

**Interfaces:**
- Consumes: static files at repository root.
- Produces: `node tests/service-page-depth.test.cjs`, which reads every listed file and fails with a clear page-specific message when the shared content contract is absent.

- [ ] **Step 1: Write the failing test**

```js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const pages = [
  'water-leak-detection-perth.html', 'burst-pipe-repair-perth.html',
  'blocked-drains-perth.html', 'hot-water-problems-perth.html',
  'tap-mixer-repairs-perth.html', 'toilet-repairs-perth.html',
  'fixtures-appliances-perth.html', 'power-faults-perth.html',
  'safety-switch-tripping-perth.html', 'lighting-power-points-perth.html',
  'smoke-alarm-maintenance-perth.html', 'renewables-smart-home-perth.html'
];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const marker of ['What to include in your enquiry', 'Related services', 'Call 000']) {
    assert.ok(html.includes(marker), `${file} should contain ${marker}`);
  }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/service-page-depth.test.cjs`

Expected: FAIL naming the first page missing `What to include in your enquiry`.

- [ ] **Step 3: Add the minimum shared semantic structure to every listed page**

Add an enquiry section before each page’s contact form and a related-services section before its FAQ. Use this exact safety copy, tailored only by replacing `the affected area` with the page’s noun where needed:

```html
<section class="rich-band">
  <div class="shell">
    <span class="eyebrow">What to include in your enquiry</span>
    <h2>Details that help us understand the next step.</h2>
    <p>Include the property address or suburb, the affected area, what you have noticed, when it began, and any safe photos or access information.</p>
    <p>If there is immediate danger, call 000. Do not put yourself at risk to take a photo or investigate the cause.</p>
  </div>
</section>
<section class="section">
  <div class="shell">
    <span class="eyebrow">Related services</span>
    <h2>Explore the most relevant next topic.</h2>
    <div class="service-detail-grid">
      <article class="service-detail"><h3>Service hub</h3><a href="plumbing.html">Explore Plumbing →</a></article>
      <article class="service-detail"><h3>Service areas</h3><a href="service-areas.html">Find your Perth area →</a></article>
      <article class="service-detail"><h3>Make an enquiry</h3><a href="contact.html">Contact Ellis Services Group →</a></article>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/service-page-depth.test.cjs`

Expected: PASS after all twelve pages contain the three required markers.

- [ ] **Step 5: Commit**

```bash
git add tests/service-page-depth.test.cjs water-leak-detection-perth.html burst-pipe-repair-perth.html blocked-drains-perth.html hot-water-problems-perth.html tap-mixer-repairs-perth.html toilet-repairs-perth.html fixtures-appliances-perth.html power-faults-perth.html safety-switch-tripping-perth.html lighting-power-points-perth.html smoke-alarm-maintenance-perth.html renewables-smart-home-perth.html
git commit -m "test: define service page depth contract"
```

### Task 2: Expand core Plumbing topics

**Files:**
- Modify: `water-leak-detection-perth.html`, `burst-pipe-repair-perth.html`, `blocked-drains-perth.html`, `hot-water-problems-perth.html`
- Test: `tests/service-page-depth.test.cjs`

**Interfaces:**
- Consumes: Task 1’s common headings and safety marker.
- Produces: four Plumbing pages with unique symptom, assessment and related-link content.

- [ ] **Step 1: Extend the failing test with exact link expectations**

```js
const expectedLinks = {
  'water-leak-detection-perth.html': ['burst-pipe-repair-perth.html', 'tap-mixer-repairs-perth.html', 'plumbing.html'],
  'burst-pipe-repair-perth.html': ['water-leak-detection-perth.html', 'blocked-drains-perth.html', 'plumbing.html'],
  'blocked-drains-perth.html': ['toilet-repairs-perth.html', 'hot-water-problems-perth.html', 'plumbing.html'],
  'hot-water-problems-perth.html': ['water-leak-detection-perth.html', 'fixtures-appliances-perth.html', 'plumbing.html']
};
for (const [file, hrefs] of Object.entries(expectedLinks)) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  hrefs.forEach((href) => assert.ok(html.includes(`href="${href}"`), `${file} should link to ${href}`));
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/service-page-depth.test.cjs`

Expected: FAIL naming the first missing expected related link.

- [ ] **Step 3: Add topic-specific professional content and link sets**

Add a `What customers commonly notice` section and a `Professional assessment` section to each page:

```html
<section class="section">
  <div class="shell split">
    <div><span class="eyebrow">What customers commonly notice</span><h2>Start with the visible change.</h2><p>Topic-specific observable symptoms only.</p></div>
    <aside class="note"><h3>Professional assessment</h3><p>We consider the reported location, pattern and property context before confirming the appropriate responsible work arrangement. A symptom alone does not confirm the cause.</p></aside>
  </div>
</section>
```

Use these page-specific symptom themes: unexplained water/dampness for leak detection; active water and affected areas for burst pipes; slow flow, gurgling and backup for drains; temperature, pressure and availability for hot water. Add the exact related links from Step 1 plus `service-areas.html` and `contact.html` to every page.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/service-page-depth.test.cjs`

Expected: PASS, including all four Plumbing link sets.

- [ ] **Step 5: Commit**

```bash
git add tests/service-page-depth.test.cjs water-leak-detection-perth.html burst-pipe-repair-perth.html blocked-drains-perth.html hot-water-problems-perth.html
git commit -m "feat: deepen core plumbing service pages"
```

### Task 3: Expand fixture-focused Plumbing topics

**Files:**
- Modify: `tap-mixer-repairs-perth.html`, `toilet-repairs-perth.html`, `fixtures-appliances-perth.html`
- Test: `tests/service-page-depth.test.cjs`

**Interfaces:**
- Consumes: Task 1’s common headings and safety marker.
- Produces: three fixture-focused pages with clear plumbing/electrical scope boundaries and relevant cross-links.

- [ ] **Step 1: Extend the failing test with exact link expectations**

```js
const fixtureLinks = {
  'tap-mixer-repairs-perth.html': ['water-leak-detection-perth.html', 'fixtures-appliances-perth.html', 'plumbing.html'],
  'toilet-repairs-perth.html': ['blocked-drains-perth.html', 'water-leak-detection-perth.html', 'plumbing.html'],
  'fixtures-appliances-perth.html': ['tap-mixer-repairs-perth.html', 'hot-water-problems-perth.html', 'electrical.html']
};
for (const [file, hrefs] of Object.entries(fixtureLinks)) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  hrefs.forEach((href) => assert.ok(html.includes(`href="${href}"`), `${file} should link to ${href}`));
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/service-page-depth.test.cjs`

Expected: FAIL naming the first fixture page missing its expected related link.

- [ ] **Step 3: Add page-specific symptoms, boundaries and FAQ**

Add two semantic sections and two `details` items on each page. Cover drips, flow and temperature control for taps/mixers; running, leaking, flushing and wastewater symptoms for toilets; kitchen, laundry and bathroom fitting context for fixtures/appliances. On the fixtures/appliances page, state that appliance symptoms may involve plumbing or electrical arrangements and customers should not dismantle equipment. Link each page to the exact pages in Step 1, plus `service-areas.html` and `contact.html`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/service-page-depth.test.cjs`

Expected: PASS, including fixture-topic link sets.

- [ ] **Step 5: Commit**

```bash
git add tests/service-page-depth.test.cjs tap-mixer-repairs-perth.html toilet-repairs-perth.html fixtures-appliances-perth.html
git commit -m "feat: deepen fixture plumbing service pages"
```

### Task 4: Expand Electrical topics with WA-safe professional framing

**Files:**
- Modify: `power-faults-perth.html`, `safety-switch-tripping-perth.html`, `lighting-power-points-perth.html`, `smoke-alarm-maintenance-perth.html`, `renewables-smart-home-perth.html`
- Test: `tests/service-page-depth.test.cjs`

**Interfaces:**
- Consumes: Task 1’s shared contract and the existing Electrical service hub.
- Produces: five Electrical pages that describe safe observations, not customer electrical work, and include approved internal paths.

- [ ] **Step 1: Extend the failing test with electrical wording and link rules**

```js
const electricalPages = [
  'power-faults-perth.html', 'safety-switch-tripping-perth.html',
  'lighting-power-points-perth.html', 'smoke-alarm-maintenance-perth.html',
  'renewables-smart-home-perth.html'
];
for (const file of electricalPages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(html.includes('electrical.html'), `${file} should link to the electrical hub`);
  assert.ok(html.includes('service-areas.html'), `${file} should link to service areas`);
  assert.ok(html.includes('contact.html'), `${file} should link to contact`);
  assert.ok(!/bypass (the )?(switch|safety switch)|remove (the )?(cover|covers)|test (the )?live/i.test(html), `${file} must not suggest unsafe electrical work`);
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/service-page-depth.test.cjs`

Expected: FAIL naming an Electrical page that lacks its required hub, service-area or contact link.

- [ ] **Step 3: Add topic-specific content and cross-links**

For each page, add the shared enquiry, safety, assessment, related-services and FAQ blocks. Use the following exact internal link pairs in addition to `electrical.html`, `service-areas.html` and `contact.html`:

```js
const relatedElectricalLinks = {
  'power-faults-perth.html': ['safety-switch-tripping-perth.html', 'lighting-power-points-perth.html'],
  'safety-switch-tripping-perth.html': ['power-faults-perth.html', 'lighting-power-points-perth.html'],
  'lighting-power-points-perth.html': ['power-faults-perth.html', 'smoke-alarm-maintenance-perth.html'],
  'smoke-alarm-maintenance-perth.html': ['lighting-power-points-perth.html', 'safety-switch-tripping-perth.html'],
  'renewables-smart-home-perth.html': ['power-faults-perth.html', 'lighting-power-points-perth.html']
};
```

Use safe symptom themes: scope and pattern of a loss of power; a safety switch that will not stay reset; flickering, heat, damage or operation observations for lighting/outlets; chirping/fault indication/property-management context for smoke alarms; existing equipment and desired change for renewables/smart home. State that regulated work is confirmed through the applicable responsible WA-qualified contracting arrangement before booking, without adding an EC number or certificate claim.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/service-page-depth.test.cjs`

Expected: PASS, with every Electrical page linked correctly and no unsafe-instruction pattern.

- [ ] **Step 5: Commit**

```bash
git add tests/service-page-depth.test.cjs power-faults-perth.html safety-switch-tripping-perth.html lighting-power-points-perth.html smoke-alarm-maintenance-perth.html renewables-smart-home-perth.html
git commit -m "feat: deepen electrical service pages"
```

### Task 5: Update mega menus and perform the full content/link audit

**Files:**
- Modify: `index.html`, `about.html`, `plumbing.html`, `electrical.html`, `service-areas.html`, `fixtures-appliances-perth.html`, `renewables-smart-home-perth.html`
- Modify: `tests/service-page-depth.test.cjs`
- Test: `tests/service-page-depth.test.cjs`, `tests/about-company-information.test.cjs`, `tests/home-service-cards.test.cjs`, `tests/home-office-location.test.cjs`, `tests/perth-service-area-directory.test.cjs`

**Interfaces:**
- Consumes: all topic-page links and content contracts from Tasks 1–4.
- Produces: consistent Plumbing/Electrical menus and a regression suite that verifies every newly added internal href resolves locally.

- [ ] **Step 1: Add a failing navigation and local-link audit**

```js
const navPages = ['index.html', 'about.html', 'plumbing.html', 'electrical.html', 'service-areas.html'];
for (const file of navPages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(html.includes('fixtures-appliances-perth.html'), `${file} should expose Fixtures & appliances`);
  assert.ok(html.includes('renewables-smart-home-perth.html'), `${file} should expose Renewables & smart home`);
}
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const hrefs = [...html.matchAll(/href="([^"#]+\.html)"/g)].map((match) => match[1]);
  hrefs.forEach((href) => assert.ok(fs.existsSync(path.join(root, href)), `${file} has a missing local link: ${href}`));
}
assert.ok(!/\bEC\s*\d{2,}|\bPL\s*\d{2,}|insured by|AUD\s*\d|\$\d/i.test(pages.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')), 'Topic pages must not invent licence or insurance details');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/service-page-depth.test.cjs`

Expected: FAIL naming the first navigation page that does not expose one of the two current service pages.

- [ ] **Step 3: Update the Plumbing and Electrical mega menus**

Add a `Fixtures & appliances` entry to each page’s Plumbing mega menu with this user-facing copy:

```html
<strong>Fixtures &amp; appliances</strong>
<small>Kitchen, laundry and bathroom fitting enquiries.</small>
```

Add a `Renewables & smart home` entry to each page’s Electrical mega menu with this user-facing copy:

```html
<strong>Renewables &amp; smart home</strong>
<small>Energy equipment, automation and electrical upgrade enquiries.</small>
```

Use `fixtures-appliances-perth.html` and `renewables-smart-home-perth.html` as the respective href values. Keep `plumbing.html` and `electrical.html` as the hub links. Adjust menus only in the five `navPages` above; topic pages retain their existing compact navigation.

- [ ] **Step 4: Make the link audit resolve root-relative and relative page links correctly**

Change the test’s resolver so `/` maps to `index.html`, `/about.html` maps to `about.html`, and `../` links in service-area pages are excluded from this topic-page-only audit. Keep the test scoped to the twelve topic files and their direct `.html` hrefs.

- [ ] **Step 5: Run all verification**

Run:

```bash
node tests/service-page-depth.test.cjs
node tests/about-company-information.test.cjs
node tests/home-service-cards.test.cjs
node tests/home-office-location.test.cjs
node tests/perth-service-area-directory.test.cjs
git diff --check
```

Expected: every command exits with status 0; no whitespace errors.

- [ ] **Step 6: Commit**

```bash
git add index.html about.html plumbing.html electrical.html service-areas.html fixtures-appliances-perth.html renewables-smart-home-perth.html tests/service-page-depth.test.cjs
git commit -m "feat: expand plumbing and electrical internal links"
```
