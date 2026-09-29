# Six-region contact routing and content design

## Purpose

Make the Areas page useful to people and search engines without creating a large set of thin suburb pages. Visitors can see every suburb served, select their suburb to begin a contact enquiry with that suburb already supplied, or enter one of six regional pages for a substantive plumbing-and-electrical guide.

## Confirmed requirements

- Keep every suburb visible on `service-areas.html`.
- A suburb is an actionable contact shortcut, not a new public suburb page.
- The six regional headings remain the only regional-content links: CBD & Inner Perth, Northern Suburbs, Southern Suburbs, Eastern Suburbs, Western Suburbs, and Perth Hills & Swan Valley.
- A suburb click opens `contact.html`, focuses the enquiry form, and pre-fills the property/suburb field with the selected suburb. It must not create a suburb-detail URL or a suburb-specific indexed page.
- Each regional page must have a clear subject, using that regional name in the visible H1 and title/description, and must cover the supplied keyword families with useful prose rather than many shallow cards.
- Regional content must cover verified service topics and intent/scenario terms: plumbing repairs, blocked drains, leak concerns, hot water, electrical repairs, fault finding, safety switches, switchboards, lighting and power points, rental properties, strata, property managers, scope and quote discussion.
- Do not claim unsupported response times, 24-hour availability, fixed prices, project locations, licences/insurance details, or outcomes.

## Visitor flow

1. On the Areas page, each regional card shows its region title as one guide link and all covered suburbs as individual text links.
2. Selecting a suburb routes to `contact.html?suburb=<encoded name>#enquiry`.
3. A small client-side initializer reads the `suburb` query parameter, safely writes it into the existing address/suburb field, and moves focus to that field. Without a valid parameter, the contact page behaves unchanged.
4. Selecting a regional title opens the corresponding one of six indexed guide pages.

## Regional page structure

Each generated page uses a single editorial flow instead of grids of small service tiles:

1. Region-specific H1 and a concise answer-first introduction.
2. One connected "Plumbing and electrical repairs" section with detailed paragraphs on the relevant service and problem terms.
3. One connected "For homes, rentals, strata and managed properties" section describing observable information, access and approval context.
4. One connected "Assessment and quote discussion" section explaining how property details, scope and service category support a quote conversation, without promising a price.
5. A compact FAQ/next-step ending; each answer is complete and not keyword stuffing.

The exact regional names differentiate the H1/title/description and contextual examples. Shared service claims remain factual and neutral.

## Data and implementation boundaries

- `service-area-data.js` remains the source of region/suburb membership.
- `service-area-directory.js` renders two kinds of controls: one regional guide anchor already present in HTML, and suburb contact anchors constructed from the data. It must not construct `service-areas/*.html` URLs.
- A dedicated `contact-prefill.js` owns only query parsing, address-field population and focus. It is loaded on `contact.html`.
- `data/region-guides.js` holds region-specific titles, descriptions and source copy. `scripts/build-region-guides.js` turns it into the six static region pages.
- Existing JSON-LD must match visible page themes and must not invent business claims.

## Success criteria

- There are six regional guide destinations and no additional public suburb-content destinations from the Areas page.
- Every listed suburb becomes a contact link with its own encoded `suburb` parameter.
- Contact prefill is safe for an absent, encoded or malformed parameter and does not overwrite a user-entered address after initial page load.
- Region guides contain visible, coherent long-form content about the keyword themes; their H1/title/description each name the matching region and core plumber/electrician subject.
- Existing SEO, navigation and service-area regression checks remain green.
