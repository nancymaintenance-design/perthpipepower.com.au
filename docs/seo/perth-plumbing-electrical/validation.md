# Validation

Validated locally on 2026-09-30 on branch `seo/perth-plumbing-electrical-core-20260930`.

| Check | Result |
| --- | --- |
| `node tests/core-service-owner-seo.test.cjs` | Pass |
| `node tests/service-page-depth.test.cjs` | Pass |
| `node tests/region-guides.test.cjs` | Pass |
| All committed `tests/*.test.cjs` and `tests/*.test.js` contracts | Pass |
| `node scripts/validate-seo.js` | Pass — validated 35 canonical tags, `robots.txt` and `sitemap.xml` |
| Sitemap/URL reconciliation | Pass — the local sitemap includes the fixture owner and contains no suburb fallback URLs |

`git -c core.whitespace=cr-at-eol diff --check` passed. This setting is required in this Windows/CRLF repository; without it, CRLF line endings are reported as trailing whitespace even though the index records CRLF for the affected HTML file.

No production deployment, remote push or merge was performed by this task.
