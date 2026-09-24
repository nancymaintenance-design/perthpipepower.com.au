# Perth Service Area Directory — Design Specification

**Date:** 2026-09-24

**Status:** Approved for specification review; implementation starts only after review confirmation.
**Scope:** Local website build only. Deployment and search-engine indexing are explicitly out of scope for this phase.

## Objective

Replace the broad, region-only service-area experience with a searchable directory covering the Perth metropolitan area. A visitor must be able to find a named Perth suburb/locality, open its own page, see relevant Perth Pipe Power services, see an honest construction-case area, and submit an enquiry from that page.

The layout may take inspiration from the supplied reference site's directory/search pattern, but will retain Perth Pipe Power branding, copy, navigation, and technical structure.

## Terminology and coverage

“Street district” will be implemented as an officially named Perth **suburb or locality**, not as individual street pages. Individual street pages would be difficult to maintain and would create repetitive, low-value search pages.

Coverage is the full Perth metropolitan service area, organised into these six visitor-facing groups:

1. CBD & Inner Perth
2. Northern Suburbs
3. Southern Suburbs
4. Eastern Suburbs
5. Western Suburbs
6. Perth Hills & Swan Valley

The existing regional hubs remain the entry points for these six groups:

- `perth-cbd-inner-suburbs.html`
- `northern-suburbs.html`
- `southern-suburbs.html`
- `eastern-suburbs.html`
- `western-suburbs.html`
- `perth-hills-swan-valley.html`

## Information architecture

```text
service-areas.html
  ├─ search by named suburb/locality
  ├─ six regional groups
  │    └─ individual suburb/locality pages
  └─ regional hub pages
       └─ individual suburb/locality pages

/service-areas/[suburb-slug].html
  ├─ local service overview
  ├─ real-work / construction-case section
  ├─ related nearby areas and regional hub
  └─ embedded enquiry form
```

## Service-area directory page

`service-areas.html` will contain:

- A clear heading and short statement that Perth Pipe Power serves the Perth metropolitan area.
- An accessible native search field (`type="search"`) with an explicit label and a visible result area.
- Instant client-side filtering across the locality dataset; no third-party search service or external API is needed.
- Six clearly separated regional groups, each linked to its existing regional hub and listing its matching localities.
- Search results and locality buttons that all open the locality's dedicated page.
- An empty-search-result state that guides visitors to contact Perth Pipe Power when they cannot find an area.

The design will be responsive, keyboard accessible, and compatible with the site's existing static HTML/CSS/JavaScript approach.

## Locality data and page generation

A single editable locality dataset will be added, for example `data/perth-suburbs.json`. Each record will contain at least:

```json
{
  "name": "Example locality",
  "slug": "example-locality",
  "region": "Northern Suburbs",
  "regionHub": "northern-suburbs.html",
  "nearby": ["nearby-locality-a", "nearby-locality-b"],
  "caseStatus": "pending"
}
```

A repeatable local build script, for example `scripts/build-perth-service-areas.js`, will generate each locality page and the directory listing from that one source. This prevents inconsistent naming, broken links, and manual duplication across hundreds of entries.

Locality names will use recognised Perth metropolitan suburb/locality names. The dataset will be kept editable so the business can correct boundaries or remove locations it does not service.

## Individual locality page template

Every generated locality page will be a separate URL and include:

1. A locality-specific title and H1, such as `Plumber & Electrician in [Locality], Perth`.
2. A short local service introduction that accurately states Perth Pipe Power's plumbing and electrical offering without inventing a completed job in that locality.
3. Service links/cards to the existing relevant plumbing and electrical service pages.
4. A construction-case section. While genuine supplied work is unavailable, it will show a transparent placeholder such as “Real local work photos are being prepared” rather than fabricated photos, project claims, outcomes, dates, or testimonials.
5. Links to the locality's regional hub, nearby locality pages, and the main service-area directory.
6. The existing enquiry form pattern, embedded at the end of the page, with name, phone, email, address, service type, and message fields. It must retain the current submission path and front-end behaviour (`contact-form.js` / `/api/enquiry`).
7. Page-specific title, meta description, canonical URL, and structured service/business metadata where appropriate.

## Real case-image handover contract

The initial build will reserve image positions but will not publish invented examples. For each real case supplied later, the business should provide:

- Two or more landscape job photos; 3:2 ratio, minimum 2400 × 1600 px, ideally 3000 × 2000 px.
- JPG or WebP, under 8 MB each; no watermark, customer-identifying detail, or unapproved faces/addresses.
- The actual suburb/locality, service category, scope/problem, outcome, approximate completion date, and confirmation that it can be published.

The intended initial library is three genuine cases in each of the six regions, with two photos per case: **36 photos total**. These are content targets, not prefilled claims.

## SEO and publication guardrails

Individual locality pages will initially be accessible to visitors but marked `noindex,follow` and excluded from the XML sitemap while their case status is `pending`. This prevents premature indexing of near-duplicate pages with no independently evidenced local project material.

Once a locality has approved real examples and differentiating copy, its dataset record can be marked ready. A subsequent generation pass will:

- switch that page to `index,follow`;
- add it to the sitemap;
- include the approved images, accurate case facts, and descriptive alt text.

No fictitious project claims, pricing, testimonials, coverage promises, or location-specific credentials may be generated.

## Validation plan

Implementation will include an automated static test that verifies:

- Every locality dataset record creates a page and has a working directory link.
- Search can find a representative locality from each of the six regions.
- Every locality page includes its H1, service links, transparent case state, and enquiry form hooks.
- Pending pages carry `noindex,follow` and are absent from the sitemap.
- The directory, generated pages, and existing contact submission script pass basic link/markup checks.

Before any production release, the local preview will be checked at desktop and mobile widths, including keyboard search, result navigation, a locality enquiry submission flow, and no-result handling.

## Non-goals for this phase

- Publishing or deploying the redesign.
- Adding unverified real cases, generated “job photos,” or location-specific results.
- Creating individual street-name pages.
- Claiming coverage outside the Perth metropolitan area.
- Changing email delivery or other enquiry back-end configuration.

## Implementation sequence after approval

1. Add and validate the Perth locality dataset and six-region mapping.
2. Implement the generator and shared locality-page template.
3. Rebuild `service-areas.html` and regional hub pages around the directory/search pattern.
4. Add case-image placeholders and embedded enquiry form integration.
5. Add tests, run the local preview, and present the completed local site for review.
6. Deploy only after explicit user approval.
