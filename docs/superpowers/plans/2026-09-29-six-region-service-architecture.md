# Six-region service architecture implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace suburb-led service-area navigation with six authoritative regional guides and public AI/search discovery assets.

**Architecture:** `service-areas.html` becomes a six-card static directory. The existing six hub pages become the only indexable regional destinations; their visible page content and JSON-LD come from a shared region-content module. Historic suburb pages remain generated noindex fallbacks but are excluded from sitemap and navigation.

**Tech Stack:** Static HTML, Node.js generators/tests, Schema.org JSON-LD, JSON, Markdown, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-29-six-region-service-architecture-design.md`

## Global Constraints

- Keep exactly six public regional destination links on the service-area directory.
- Do not place crawler-only or hidden keyword copy on public pages.
- Use only verified business contact details and service topics already represented by the website.
- Do not claim 24-hour availability, fixed pricing, response time, local projects, licences, or insurance details not verified in public facts.
- Keep historic suburb URLs `noindex,follow`, unlinked and absent from the sitemap.
- JSON-LD must match visible page content.

## Review Focus

- A directory card must not accidentally expose a suburb link through copied directory JavaScript; Task 1 test checks all anchor targets.
- A regional page must not contain generic copied copy or an FAQ JSON-LD mismatch; Task 2 checks each visible title, FAQ and matching schema question.
- A historic suburb page must not become indexable after generator changes; Task 3 checks a representative fallback page and sitemap exclusion.
- AI discovery files must not claim unverified availability or list non-public routes; Task 4 validates their URL and fact allowlist.
- The six-card directory must remain usable at 390px; Task 5 runs browser QA at desktop and 390px.

---

### Task 1: Six-card public directory

**Files:**
- Modify: `service-areas.html`, `service-area-directory.js`, `service-area-data.js`
- Test: `tests/six-region-service-architecture.test.cjs`

**Interfaces:**
- Produces six direct hub anchors for `service-areas.html`; later tasks preserve these six route IDs.

- [ ] **Step 1: Write the failing directory assertions**

Assert six regional links only, no search field, no `service-areas/<suburb>.html` link, and all six expected hub paths.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/six-region-service-architecture.test.cjs`
Expected: FAIL because the current directory contains suburb search and location destinations.

- [ ] **Step 3: Render six static region cards**

Replace dynamic suburb directory output with six accessible cards linking only to the existing hub pages. Remove the data/script references no longer used by the public directory.

- [ ] **Step 4: Run the directory test**

Run: `node tests/six-region-service-architecture.test.cjs`
Expected: PASS for the six public routes.

- [ ] **Step 5: Commit**

```bash
git add service-areas.html service-area-directory.js service-area-data.js tests/six-region-service-architecture.test.cjs
git commit -m "feat: simplify service areas to six regions"
```

### Task 2: Regional guide content and matching JSON-LD

**Files:**
- Create: `data/region-guides.js`
- Modify: `perth-cbd-inner-suburbs.html`, `northern-suburbs.html`, `southern-suburbs.html`, `eastern-suburbs.html`, `western-suburbs.html`, `perth-hills-swan-valley.html`
- Test: `tests/six-region-service-architecture.test.cjs`

**Interfaces:**
- Consumes the six route IDs from Task 1.
- Produces six visible regional guides with an H1, service scenarios, process, property context, FAQ, contact CTA, and matching schema.

- [ ] **Step 1: Extend the failing test**

For every hub page, assert a regional H1, distinct service/process/FAQ sections, no suburb anchor, and each visible FAQ question is present in its `FAQPage` JSON-LD.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/six-region-service-architecture.test.cjs`
Expected: FAIL because the current hubs lack the required complete visible guide sections and matching FAQ schema.

- [ ] **Step 3: Add the six region guide records and render content**

Use distinct region names and supported core terms in titles. Add visible scenario, process and FAQ content, then add `WebPage`, `Service`, `OfferCatalog`, `FAQPage`, `LocalBusiness` provider and matching `areaServed` JSON-LD.

- [ ] **Step 4: Run guide and SEO checks**

Run: `node tests/six-region-service-architecture.test.cjs && node scripts/validate-seo.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add data/region-guides.js perth-cbd-inner-suburbs.html northern-suburbs.html southern-suburbs.html eastern-suburbs.html western-suburbs.html perth-hills-swan-valley.html tests/six-region-service-architecture.test.cjs
git commit -m "feat: expand six regional service guides"
```

### Task 3: Retire suburb-page discovery

**Files:**
- Modify: `scripts/build-perth-service-areas.js`, `sitemap.xml`, `tests/perth-service-area-directory.test.cjs`
- Test: `tests/six-region-service-architecture.test.cjs`, `tests/perth-service-area-directory.test.cjs`

**Interfaces:**
- Consumes the six indexable hub routes from Task 2.
- Produces noindex historical suburb fallback pages and a sitemap containing the regional guides instead.

- [ ] **Step 1: Add the failing lifecycle assertions**

Assert zero locality URLs in sitemap, six hub URLs in sitemap, and a generated Applecross fallback is `noindex,follow` without suburb links.

- [ ] **Step 2: Run the tests to verify they fail**

Run: `node tests/six-region-service-architecture.test.cjs && node tests/perth-service-area-directory.test.cjs`
Expected: FAIL because priority locality URLs currently enter sitemap.

- [ ] **Step 3: Update generator and sitemap policy**

Generate historic locality fallbacks without nearby links and prevent all locality URLs entering the sitemap. Add only the six regional hubs to sitemap.

- [ ] **Step 4: Run lifecycle tests**

Run: `node tests/six-region-service-architecture.test.cjs && node tests/perth-service-area-directory.test.cjs`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/build-perth-service-areas.js sitemap.xml tests/perth-service-area-directory.test.cjs tests/six-region-service-architecture.test.cjs
git commit -m "seo: retire suburb page discovery"
```

### Task 4: Public AI discovery assets

**Files:**
- Create: `ai-content.json`, `llms.txt`
- Modify: `robots.txt`, `tests/six-region-service-architecture.test.cjs`

**Interfaces:**
- Consumes visible regional titles, routes and verified company facts from Tasks 1–2.
- Produces public discovery documents with only visible routes and supported service facts.

- [ ] **Step 1: Add the failing asset assertions**

Assert valid JSON, exactly six regional URLs, verified phone/email/address, `llms.txt` six-guide list, and no forbidden availability or pricing claims.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/six-region-service-architecture.test.cjs`
Expected: FAIL because the public AI discovery files do not exist.

- [ ] **Step 3: Create public feed and `llms.txt`**

Write concise, human-readable source files that link to the six guides and core services. Reference the discovery feed in `robots.txt` only if the syntax remains comment-safe and does not change crawler directives.

- [ ] **Step 4: Run asset and SEO tests**

Run: `node tests/six-region-service-architecture.test.cjs && node scripts/validate-seo.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add ai-content.json llms.txt robots.txt tests/six-region-service-architecture.test.cjs
git commit -m "seo: add public AI discovery assets"
```

### Task 5: Build, browser QA and deployment

**Files:**
- Modify: generated `service-areas/*.html`, `service-area-data.js`, `sitemap.xml` as produced by the generator
- Test: all existing SEO and navigation test scripts

**Interfaces:**
- Consumes all prior tasks and publishes only after local and live checks pass.

- [ ] **Step 1: Regenerate locality assets**

Run: `node scripts/build-perth-service-areas.js`
Expected: generated pages retain `noindex,follow` and tracking metadata.

- [ ] **Step 2: Run full automated validation**

Run: `node tests/six-region-service-architecture.test.cjs && node tests/perth-service-area-directory.test.cjs && node tests/seo-validator.test.cjs && node scripts/validate-seo.js && node tests/electrical-work-gallery.test.cjs && node tests/service-heading-keywords.test.cjs && node tests/new-service-page-links.test.cjs && node tests/mega-menu-viewport.test.cjs`
Expected: all commands pass.

- [ ] **Step 3: Perform browser QA**

Check the directory and one regional guide at desktop and 390px. Confirm six visible cards, no suburb links, readable guide content, working CTA and no horizontal overflow.

- [ ] **Step 4: Commit, push and validate live URLs**

Commit generated output, push `HEAD` to `origin/main`, and fetch the live directory plus one regional guide. Confirm status 200, six-card copy, valid regional title, and sitemap policy.
