# Locality Information Architecture Design

## Goal

Replace the broad, repetitive suburb-link network with six region hubs and twelve useful, location-specific service landing pages. Preserve full Perth coverage through search without treating every suburb page as a search landing page.

## Confirmed requirements

- Remove low-value nearby-suburb cross-links and the full all-suburbs directory from the visible region flow.
- Use the supplied keyword sheet for title and service-topic priorities.
- Substitute a specific suburb name for Perth only on priority locality pages, while retaining a truthful service context.
- Publish directly after local validation; no preview approval is required.
- Do not invent project locations, trade credentials, prices, response times, or local facts.

## Information architecture

1. `service-areas.html` remains the coverage and search page. It shows six region cards and a small set of featured localities, rather than linking every suburb in the page body.
2. Each regional hub has a focused service overview, a fixed set of core service links, and two featured locality links. It has no arbitrary nearby-suburb chain.
3. Twelve priority locality pages become indexable and enter the sitemap. All remaining generated locality pages remain `noindex,follow`; they can be reached through the search utility only.
4. Each priority page has a distinct service emphasis, unique title/description/H1, a scoped process, quote explanation, FAQ, internal links to the relevant service detail pages, and contact action.

## Priority localities and service emphasis

| Region | Localities | Priority themes |
| --- | --- | --- |
| CBD & Inner Perth | East Perth, North Perth | property maintenance plumbing/electrical; electrical repairs and blocked drains |
| Northern Suburbs | Joondalup, Scarborough | electrician/plumber services; hot water and electrical repairs |
| Southern Suburbs | Canning Vale, Fremantle | leak detection/drain repairs; plumbing and electrical repairs |
| Eastern Suburbs | Midland, Belmont | electrical repairs and safety switches; plumbing and hot-water repairs |
| Western Suburbs | Claremont, Cottesloe | electrician/plumber services; power points, lighting and plumbing repairs |
| Perth Hills & Swan Valley | Kalamunda, Ellenbrook | residential electrical/plumbing repairs; hot-water and fault finding |

The themes determine helpful service modules, not a claim that any specific incident occurred in the locality.

## Search and indexing policy

- Priority pages: `index,follow`, canonical to themselves, sitemap inclusion.
- Non-priority generated locality pages: `noindex,follow`, excluded from sitemap, no nearby-suburb link cluster.
- The service-area search remains available for all covered localities and continues to return the generated locality page for a direct enquiry route.

## Verification

- Automated tests prove that only the twelve priority pages are indexable, sitemap entries match those pages, and generated pages do not render nearby-suburb links.
- The existing SEO validation and a local link/metadata crawl must pass.
- A local browser check verifies the area search and representative desktop/mobile pages.
