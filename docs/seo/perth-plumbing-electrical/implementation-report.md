# Perth plumbing and electrical SEO implementation report

## Scope completed locally

- Kept the existing six regional guide URLs and the existing suburb-to-contact prefilling behaviour.
- Kept the existing core service-owner URLs; no mass local landing pages, redirects, removals or noindex changes were introduced.
- Expanded the service-owner pages for blocked drains, leak detection, burst pipe repair, electrical repairs, fixtures/appliances and hot water with assessment, scope, access and quote-context information that does not claim unverified equipment, results, licensing, response times or prices.
- Added a visible-fixture/sink decision route from plumbing owner pages to the fixture/appliance owner, and retained leak-detection routing where the source is not visible.
- Added a limited Southern Suburbs/Thornlie context to the hot-water owner and Southern guide based on the observed GSC query; no suburb URL was created.
- Added `fixtures-appliances-perth.html` to the local sitemap because the live page was otherwise internally linked and indexable but absent from that sitemap.
- Improved regional-guide test resilience so semantic Open Graph assertions do not fail merely because valid tags span multiple lines.

## Explicit non-actions

- No new local/suburb landing pages.
- No route removal, redirect, canonical rewrite or noindex change.
- No changes to unverified legal, licence, insurance, emergency, availability, pricing or project claims.
- No remote push, merge, GitHub Pages/Vercel action or production deployment.

## Risks and review points

1. Search results may take multiple crawls to react; no ranking increase is guaranteed.
2. The local sitemap change is not visible until an approved deployment is made.
3. The fixtures page was unknown to Google at the sampled inspection, so it should be inspected again after deployment rather than assumed indexed.
4. Current public price content was not expanded or validated in this scope; business approval is required before any pricing change.
