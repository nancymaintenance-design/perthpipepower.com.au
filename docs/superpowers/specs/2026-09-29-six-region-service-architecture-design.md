# Six-region service architecture design

## Purpose

Make the service-area journey clear to customers and search systems: the public directory has exactly six regional destinations, while each destination is a substantial, locally named plumbing-and-electrical service guide.

## Public navigation

- `service-areas.html` renders six static region cards only. The cards link to the six existing regional pages and do not include suburb search or suburb links.
- The six public region pages are CBD & Inner Perth, Northern Suburbs, Southern Suburbs, Eastern Suburbs, Western Suburbs, and Perth Hills & Swan Valley.
- Historic `/service-areas/<suburb>.html` pages remain available as `noindex,follow` fallbacks, but are removed from the sitemap and receive no public directory or cross-suburb links.

## Regional content model

Each regional page visibly contains a unique title and H1 with the regional name plus supported core service terms, a concise regional introduction, service sections, scenario guidance, an enquiry-and-quote process, property-manager/rental/strata context where appropriate, safety guidance, FAQ, and the existing enquiry form.

Titles use the supplied keyword themes without making unsupported promises. The copy may address electrical repairs, fault finding, safety switches, lighting and power points, smoke alarms, blocked drains, leak detection, hot water, burst pipes, and property maintenance only as services or enquiry topics already represented on the website. It must not claim 24-hour availability, fixed prices, response times, local projects, licences, or insurance details not verified in the public facts.

## Discoverability assets

- Add `ai-content.json`, a public JSON feed that lists the business, verified contact data, the six regional pages, and visible service topics.
- Add `llms.txt`, a concise public map of the company, six regional guides, core service pages, contact route, and fact limitations.
- Add page-level JSON-LD on each regional page using visible content only: `WebPage`, `Service`, `LocalBusiness` provider, `areaServed`, `OfferCatalog`, and `FAQPage` where the matching FAQ is visibly rendered.
- Keep `robots.txt` and the sitemap aligned with the six regional hubs; no hidden or crawler-only keyword text is permitted.

## Acceptance criteria

1. The public service-area directory has exactly six destination links and no suburb search input or suburb links.
2. Each of the six regional pages has visible, substantial and distinct service/scenario/process/FAQ content with one contact action.
3. Core regional titles use a regional place name and relevant supplied keyword themes.
4. `ai-content.json`, `llms.txt`, JSON-LD, sitemap, and robots are public, internally consistent, and match visible verified content.
5. No historic suburb page is indexable, in the sitemap, or linked from the new directory or regional pages.
6. Automated SEO validation and desktop/390px browser checks pass before deployment.
