# Content modification dates and maintenance fingerprints

`sitemap-content-dates.json` and `editorial-content-dates.json` contain SHA-256
fingerprints of the final canonical rendered HTML, UTF-8 with CRLF normalized
to LF. Set truthful date companions first, build, fingerprint, then rebuild and
verify stable fingerprints. These are maintenance fingerprints, not publication
evidence or replacements for the independent full-DOM preservation tests.

A changed fingerprint does not by itself justify advancing `lastmod` or
`dateModified`: shared navigation, styles, scripts and other chrome can change
rendered HTML without substantive body work. Do not advance dates on each build.
Unknown `datePublished` remains absent until reliable publication evidence exists.

The 2026-10-15 editorial review used actual body diffs from
`6dc8b6db0323e131c737e9db019ec2fcecb47317` to
`bd5afffc888c29b799a0134e1a6de61b5f90672d`. It advances 43 substantive routes;
the two collections, service-area directory and lighting/power-point hub retain
2026-10-13 for minor heading/equivalent wording/duplicate-removal edits. Privacy
was reviewed without a body rewrite and has no sitemap date record. Seven
articles have matching visible time and Article `dateModified` values. Each route
decision is enumerated in `tests/fixtures/fullsite-refinement/resource-maintenance-edits.json`.

Historical editorial fingerprint preimages are undocumented. Do not claim they
used this convention, infer publication dates from them, or re-freeze historical
HTML and screenshot baselines. All current fingerprints must match the current
rendered candidate while those independent historical guards remain intact.
