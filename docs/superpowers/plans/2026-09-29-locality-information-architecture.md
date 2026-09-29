# Locality Information Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace repetitive suburb interlinking with six region hubs and twelve purposeful, indexable locality service pages.

**Architecture:** Extend the locality content source with a validated priority-page record. The existing generator will derive page metadata, body modules, link sets and sitemap entries from that record. Non-priority locality pages stay available through search but no longer render nearby-suburb links.

**Tech Stack:** Static HTML, Node.js generator, Node assert tests.

**Spec:** `docs/superpowers/specs/2026-09-29-locality-information-architecture-design.md`

## Global Constraints

- Only verified business facts may be published; no fabricated projects, prices, credentials, response times or area facts.
- Use supplied keyword themes only where they accurately describe a service page.
- Priority pages are indexable and sitemap-listed; all remaining generated locality pages remain `noindex,follow`.
- Remove nearby-suburb chains from all generated locality pages.
- Publish only after automated validation and local browser QA pass.

## Review Focus

- A locality cannot be marked priority without a valid title, description, H1, service links and content modules.
- A non-priority locality must never leak into the sitemap or receive an indexable robots directive.
- A generated page must not expose the old nearby-suburb link cluster.
- Service-area search must continue to find every locality, including non-priority pages.
- Every generated priority URL must resolve its canonical, title and H1 to the same locality.

---

### Task 1: Add validated priority-locality content records

**Files:**
- Modify: `data/perth-suburbs.json`
- Modify: `scripts/build-perth-service-areas.js`
- Test: `tests/perth-service-area-directory.test.cjs`

**Interfaces:**
- Consumes: locality records with `name`, `slug`, `region`, `regionHub`, `nearby`, `caseStatus`.
- Produces: optional `priority` record with SEO metadata, service links, FAQ and content modules.

- [ ] **Step 1: Write the failing test**

Assert twelve priority records exist, their slugs are unique, and each record has an H1, description, title and at least two service links.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: FAIL because no priority records exist.

- [ ] **Step 3: Add and validate the `priority` record**

Extend locality validation to reject malformed priority records and add the approved twelve locality records with the verified service emphasis in the design spec.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: PASS.

### Task 2: Generate useful locality pages without link spam

**Files:**
- Modify: `scripts/build-perth-service-areas.js`
- Test: `tests/perth-service-area-directory.test.cjs`

**Interfaces:**
- Consumes: validated priority records from Task 1.
- Produces: priority HTML with page-specific metadata and content; non-priority HTML without nearby-locality links.

- [ ] **Step 1: Write the failing test**

Assert priority output is `index,follow`, contains its specific title/H1/service links/FAQ, and omits nearby-suburb links. Assert a non-priority output remains `noindex,follow` and also omits nearby-suburb links.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: FAIL because all locality output is currently noindex and contains nearby links.

- [ ] **Step 3: Render priority and non-priority variants**

Use record-derived metadata and content modules for priority pages. Remove the nearby-locality renderer; retain only the relevant region hub, service detail links and enquiry form.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: PASS.

### Task 3: Reduce visible directory links and align sitemap

**Files:**
- Modify: `service-area-directory.js`
- Modify: `scripts/build-perth-service-areas.js`
- Modify: `service-areas.html`
- Modify: `sitemap.xml`
- Test: `tests/perth-service-area-directory.test.cjs`

**Interfaces:**
- Consumes: priority records and six region records.
- Produces: six region cards with featured links, a complete search index, and a sitemap containing exactly the priority locality URLs.

- [ ] **Step 1: Write the failing test**

Assert directory rendering includes only featured locality links in its initial region view while its search dataset contains every locality. Assert sitemap has exactly the twelve priority locality URLs.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: FAIL because the initial directory renders every locality.

- [ ] **Step 3: Render featured locality links and regenerate sitemap**

Change initial region cards to use priority localities only, update copy to explain the full-coverage search, and have sitemap generation include priority pages rather than `caseStatus` pages.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/perth-service-area-directory.test.cjs`

Expected: PASS.

### Task 4: Build, validate and deploy

**Files:**
- Modify: generated `service-areas/*.html`, `service-area-data.js`, `sitemap.xml`

- [ ] **Step 1: Build generated outputs**

Run: `node scripts/build-perth-service-areas.js`

- [ ] **Step 2: Run verification**

Run: `node tests/perth-service-area-directory.test.cjs && node scripts/validate-seo.js`

Expected: all tests pass and canonical validation reports no errors.

- [ ] **Step 3: Run local browser QA**

Start a static local server and check the service-area page plus one priority and one non-priority locality page at desktop and 390px.

- [ ] **Step 4: Commit and publish**

Commit verified changes, push the current branch to `origin/main` through GitHub CLI, then confirm the live URLs return the expected metadata.
