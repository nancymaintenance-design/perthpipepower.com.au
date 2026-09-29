# Six-region contact and content implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every displayed suburb a prefilled contact shortcut while retaining six substantial, keyword-led regional service pages.

**Architecture:** Region and suburb membership remains in `service-area-data.js`. The Areas directory produces one guide link per region and contact links for its suburbs; a small contact-page initializer owns URL-query prefill. The generated guide pages use data-driven long-form sections instead of service/scenario card grids.

**Tech Stack:** Static HTML, vanilla JavaScript, Node.js generation scripts, CommonJS tests, CSS.

**Spec:** `docs/superpowers/specs/2026-09-29-six-region-contact-and-content-design.md`

## Global Constraints

- Keep exactly six public regional guide routes and no public suburb-detail routes from the Areas directory.
- Generate contact links as `contact.html?suburb=<encoded name>#enquiry`.
- Populate only the existing `address` field, then focus it; invalid or absent values leave the form unchanged.
- Use only verified service capability and neutral quote/scope language; do not claim 24-hour availability, fixed prices, licences/insurance details, project locations or results.
- Make the visible H1/title/description region-specific and include plumber/electrician intent language.

## Review Focus

- Suburbs containing spaces or an ampersand must be URL-encoded and decode back into the address field.
- A missing, blank or malformed `suburb` query parameter must leave contact fields untouched.
- Reopening a contact URL after a user edits the field must not asynchronously overwrite their text.
- Every region card must keep one, and only one, regional-guide link while all suburb links target contact.
- Generated content must be prose-led and must not reintroduce `rich-grid` service/scenario fragments.

---

### Task 1: Contact-prefill URL contract

**Files:**
- Create: `tests/contact-prefill.test.cjs`
- Create: `contact-prefill.js`
- Modify: `contact.html`

**Interfaces:**
- Produces: `window.prefillContactSuburb()` reads `window.location.search` and targets `input[name="address"]`.
- Consumes: `contact.html` enquiry form with `id="enquiry"` and `input[name="address"]`.

- [ ] **Step 1: Write failing contact-prefill tests**

Assert `contact-prefill.js` uses `URLSearchParams`, decodes `suburb`, exits for blank/absent values, assigns only `input[name="address"]`, and calls `focus()`. Assert `contact.html` loads the script and gives the form an `id="enquiry"`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/contact-prefill.test.cjs`

Expected: FAIL because the initializer and form anchor do not yet exist.

- [ ] **Step 3: Implement `prefillContactSuburb()` in `contact-prefill.js`**

On `DOMContentLoaded`, read a trimmed `suburb` value with `URLSearchParams`; if present, set the existing address input value and focus it. Add the form anchor and script include to `contact.html`.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `node tests/contact-prefill.test.cjs`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/contact-prefill.test.cjs contact-prefill.js contact.html
git commit -m "feat: prefill contact form from suburb links"
```

### Task 2: Areas directory suburb contact links

**Files:**
- Modify: `tests/six-region-directory.test.cjs`
- Modify: `service-area-directory.js`
- Modify: `site.css`

**Interfaces:**
- Consumes: `window.PERTH_SERVICE_AREAS.regions[].localities[].name`.
- Produces: one `a.area-region__locality-link` per locality with `href="contact.html?suburb=<encoded name>#enquiry"`.

- [ ] **Step 1: Write failing directory assertions**

Add tests that require locality anchors, `encodeURIComponent(locality.name)`, the exact contact route/fragment, exactly six regional hubs, and no `service-areas/` locality route construction.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/six-region-directory.test.cjs`

Expected: FAIL because localities are spans instead of contact anchors.

- [ ] **Step 3: Implement contact-link rendering**

Replace each locality span with an accessible anchor named for that suburb. Preserve the regional-guide heading link as the only guide link in each card, and style locality links as compact readable location chips/text links.

- [ ] **Step 4: Run focused tests to verify they pass**

Run: `node tests/six-region-directory.test.cjs && node tests/six-region-service-architecture.test.cjs`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/six-region-directory.test.cjs service-area-directory.js site.css
git commit -m "feat: route suburbs to prefilled contact enquiries"
```

### Task 3: Long-form six-region guide generation

**Files:**
- Modify: `tests/region-guides.test.cjs`
- Modify: `data/region-guides.js`
- Modify: `scripts/build-region-guides.js`
- Modify: `perth-cbd-inner-suburbs.html`
- Modify: `northern-suburbs.html`
- Modify: `southern-suburbs.html`
- Modify: `eastern-suburbs.html`
- Modify: `western-suburbs.html`
- Modify: `perth-hills-swan-valley.html`

**Interfaces:**
- Consumes: `regionGuides[]` with `route`, `name`, `title`, `description`, and long-form content fields.
- Produces: six generated pages with one region-specific H1, editorial H2 sections, coherent FAQ content and matching JSON-LD title/description.

- [ ] **Step 1: Write failing guide-content tests**

Assert each guide includes its region name in H1/title/description, phrases for plumbing repairs and electrical repairs, service scenario terms, a scope/quote discussion, no unsupported price/time claims, and no `rich-grid` service/scenario markup in main content.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/region-guides.test.cjs`

Expected: FAIL because generated pages use service and scenario card grids.

- [ ] **Step 3: Expand guide data and implement editorial generator**

Define region-specific, factual source prose covering plumbing, electrical, homes/rentals/strata/property managers, and scope/quote discussions. Replace the card grid generator with connected editorial sections plus a compact FAQ and contact next step. Regenerate all six pages from the updated data.

- [ ] **Step 4: Run focused generation and tests**

Run: `node scripts/build-region-guides.js && node tests/region-guides.test.cjs`

Expected: six guides generated and test PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/region-guides.test.cjs data/region-guides.js scripts/build-region-guides.js perth-cbd-inner-suburbs.html northern-suburbs.html southern-suburbs.html eastern-suburbs.html western-suburbs.html perth-hills-swan-valley.html
git commit -m "feat: rewrite six regional service guides"
```

### Task 4: Whole-site regression and release readiness

**Files:**
- Modify: no production files unless a failing regression requires a minimal fix.

**Interfaces:**
- Consumes: completed Tasks 1–3.
- Produces: verified static output ready for local preview and user-approved deployment.

- [ ] **Step 1: Run all relevant regressions**

Run: `node tests/contact-prefill.test.cjs; node tests/six-region-directory.test.cjs; node tests/six-region-service-architecture.test.cjs; node tests/region-guides.test.cjs; node tests/perth-service-area-directory.test.cjs; node tests/seo-validator.test.cjs; node scripts/validate-seo.js; node tests/electrical-work-gallery.test.cjs; node tests/service-heading-keywords.test.cjs; node tests/new-service-page-links.test.cjs; node tests/mega-menu-viewport.test.cjs`

Expected: every command passes.

- [ ] **Step 2: Inspect generated route facts**

Run: `git diff --check; git status --short; rg -n 'contact\.html\?suburb=|rich-grid' service-area-directory.js perth-cbd-inner-suburbs.html northern-suburbs.html southern-suburbs.html eastern-suburbs.html western-suburbs.html perth-hills-swan-valley.html`

Expected: no whitespace errors, locality route construction only targets contact, and generated guide pages do not use `rich-grid`.

- [ ] **Step 3: Commit any regression-only corrections**

```bash
git add <only-files-fixed-by-regression>
git commit -m "fix: validate regional enquiry content"
```
