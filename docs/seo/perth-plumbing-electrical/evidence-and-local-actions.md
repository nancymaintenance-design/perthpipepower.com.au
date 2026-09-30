# Evidence and local actions

## GSC baseline

Source: Search Console property `sc-domain:perthpipepower.com.au`, Search Analytics API, web search, all countries/devices, 2026-08-31 to 2026-09-27. The property recorded 7 clicks, 2,523 impressions, 0.28% CTR and average position 79.9. Australia accounted for 1 click, 2,451 impressions and average position 80.2. The preceding comparable 28-day window returned no data.

This records observed performance, not a causal diagnosis. Low position and thin owner-page scope are reasons to improve relevance and clarity; they do not prove a single ranking cause.

## Indexing and sitemap evidence

- The live sitemap contained 33 unique URLs when checked, matching the local baseline before this branch.
- Search Console reported the sitemap submitted on 2026-09-05, last downloaded 2026-09-22, no errors and no warnings. Its `web` content record showed 33 submitted and 0 indexed. This conflicts with individual URL inspections, which showed the homepage and several core service pages submitted and indexed. The cause is not determined; no broad sitemap rewrite was made.
- `fixtures-appliances-perth.html` returned HTTP 200, used a self-canonical and was linked internally, but was absent from the live sitemap and was "URL is unknown to Google" at inspection time. The local sitemap now includes it. The change is pending deployment.
- Inspections for blocked drains, water leak detection, burst pipe repair, electrical and hot-water pages showed indexable robots directives, self canonicals and "Submitted and indexed". No duplicate-canonical or robots blocker was observed for those sampled pages.
- PageSpeed API could not be used because the available API request received a quota response. Performance is therefore not assessed here.

## Business evidence still required

- Current operating entity relationship, ABN/licence/insurance details and any public licence wording.
- Accurate service coverage, service-hours/emergency wording and appointment claims.
- Approved pricing basis before changing existing price ranges or publishing new pricing.
- Customer-permitted project evidence, locations and outcome descriptions before adding case-study claims.

## External actions after a reviewed deployment

1. Resubmit the deployed sitemap in Search Console and request indexing for `fixtures-appliances-perth.html`.
2. Inspect the six priority owner URLs after crawl.
3. Update and verify Google Business Profile categories, service areas, phone, address and website URL only from approved business records.
4. Re-check performance after 28 and 56 days; compare impressions, CTR and average position by query and page against this baseline.
