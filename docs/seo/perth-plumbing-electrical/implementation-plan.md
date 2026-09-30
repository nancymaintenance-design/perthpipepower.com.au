# Perth Plumbing and Electrical Core SEO Implementation Plan

**Goal:** Strengthen four existing commercial service owners and their existing query landing pages without adding URLs, changing the six-region architecture, or publishing unverified business claims.

**Verified project boundary:** `nancymaintenance-design/perthpipepower.com.au`; public domain `https://perthpipepower.com.au/`; brand shown in current pages: Ellis Services Group; working branch `seo/perth-plumbing-electrical-core-20260930`; production branch `main`. GitHub reports Pages enabled but this repository contains no checked-in workflow or deployment configuration, so this branch must not be pushed or published as part of this task.

**GSC evidence:** Property `sc-domain:perthpipepower.com.au`, web search, 2026-08-31 to 2026-09-27, exported 2026-09-30. Total: 7 clicks, 2,523 impressions, 0.28% CTR, average position 79.9. Query/page relationships were retrieved through the Search Console API. `blocked-drains-perth.html`, `water-leak-detection-perth.html`, and `burst-pipe-repair-perth.html` were inspected as submitted and indexed, robots-allowed, and self-canonical. The sitemap API reported 33 submitted and 0 indexed on a 2026-09-22 fetch; this conflicts with the individual URL inspections and is recorded for follow-up rather than treated as an error to rewrite.

## Constraints

- Keep existing URLs, six regional guide URLs, and non-indexed suburb fallback behaviour.
- Do not add individual suburb pages, redirects, `noindex`, invented qualifications, equipment, pricing, response times, projects, reviews, or external links.
- Use Australian English in public copy and only make claims supported by existing project material.
- Use existing contact route and form; do not submit a live enquiry.
- Run tests before commit; do not push, merge, or deploy.

## Tasks

### 1. Save baseline and owner map

**Files:** Create the six required files under `docs/seo/perth-plumbing-electrical/`.

- [ ] Record GSC scope, exact dates, country/device limitations, query-to-page evidence, URL inspection results, sitemap fields and the 28-day no-data comparison limitation.
- [ ] Map owners: `blocked-drains-perth.html`, `water-leak-detection-perth.html`, `burst-pipe-repair-perth.html`, `electrical.html`, `hot-water-problems-perth.html`, the relevant sink/fixture owner, `property-management.html`, and the Southern guide for Thornlie after data verification.
- [ ] List evidence gaps and external GBP/citation tasks as drafts only.

### 2. Add a failing owner-page contract test

**Files:** Create `tests/core-service-owner-seo.test.cjs`; modify no production content first.

- [ ] Test that each core owner has a unique, intent-matched H1/title/description, enquiry link, an assessment/quote explanation, safety-safe FAQ language, and contextual internal links.
- [ ] Test that six regional guides remain present and that links do not create new suburb routes.
- [ ] Run the test and confirm it fails because the required content markers/links do not yet exist.

### 3. Deepen verified plumbing owners

**Files:** Modify `blocked-drains-perth.html`, `water-leak-detection-perth.html`, `burst-pipe-repair-perth.html`, and only relevant existing supporting pages.

- [ ] Add customer-observable symptoms, scoped assessment flow, quotation factors, safe enquiry guidance, owner-specific FAQ, and non-duplicative cross-links.
- [ ] Add the property-management drainage module only to the drains owner, linked to `property-management.html`.
- [ ] Keep detection separate from known pipe-repair intent and add a natural `water pipe burst` reference only on the repair owner.

### 4. Deepen electrical and opportunity-page ownership

**Files:** Modify `electrical.html`, `hot-water-problems-perth.html`, existing fixture/sink owner if supported by current page scope, `southern-suburbs.html`, and `property-management.html` only where needed.

- [ ] Explain real fault-observation, assessment, repair scope, quote inputs and safe escalation without publishing unverified licence details or DIY electrical instruction.
- [ ] Add a concise Thornlie coverage reference to the existing Southern guide and a natural service link to the existing hot-water owner; do not create a Thornlie landing page.
- [ ] Keep hot-water, sink leaks, broad water-leak and burst-pipe queries attached to their distinct existing owners.

### 5. Verify sitemap and public technical output

**Files:** Create regression test if a real mismatch is reproducible; otherwise record read-only evidence in the audit documents.

- [ ] Fetch the live sitemap, deduplicate its URLs, and compare with local `sitemap.xml`, canonical tags, status responses and sitemap API metadata.
- [ ] Inspect all four core owners and the actual opportunity owners with GSC where API data is available.
- [ ] Do not modify sitemap, robots, canonical or index directives unless a concrete inconsistency is found.

### 6. Validate and hand off

- [ ] Run the new contract test, existing SEO/service/area/contact tests, `node scripts/validate-seo.js`, and `git diff --check`.
- [ ] Manually inspect representative desktop/mobile service, regional, About and Contact layouts without sending an enquiry.
- [ ] Create a local commit and provide files changed, test outputs, unresolved evidence gaps, production status, and rollback command.

## Review focus

1. A leak-detection page must not promise that every moisture symptom is a plumbing leak.
2. A burst-pipe page must route uncertain source/location cases to detection without duplicating it.
3. Electrical copy must never advise live electrical work or claim unverified WA credentials.
4. Thornlie must remain a Southern-suburbs coverage mention, not a new locality landing page.
5. Service and contact links must be ordinary crawlable anchors and must resolve locally.
