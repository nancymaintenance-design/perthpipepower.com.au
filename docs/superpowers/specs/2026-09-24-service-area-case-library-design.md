# Service-area directory and electrical work gallery

## Purpose

Make the Perth service-area experience easier to browse while keeping published project information accurate. Visitors should be able to choose one of six service regions, search for a suburb, open a suburb page, understand available services and contact the business. The site should also show supplied, real electrical-work images without inventing job locations, dates, customer details, or outcomes not evidenced by the material.

## Confirmed scope

- Retain the six existing regions: CBD & Inner Perth, Northern Suburbs, Southern Suburbs, Eastern Suburbs, Western Suburbs, and Perth Hills & Swan Valley.
- Retain suburb search and independent suburb-page URLs.
- Add a reusable, site-wide `Electrical Work Gallery` sourced from the supplied images.
- Do not use `11-external-isolator-after.png`.
- Do not call any image a local, nearby, regional, or suburb case, because a verified job location was not supplied.
- Keep the existing service descriptions and contact form on every suburb page.

## Content model

The current suburb JSON remains the source of truth for region membership, hub URL, and nearby navigation. A second structured gallery-data module will hold image entries with only verified or visually supportable metadata:

| Gallery group | Images | Published label | Publishing rule |
| --- | --- | --- | --- |
| Kitchen lighting work | `01-kitchen-lighting-in-progress`, `02-kitchen-lighting-wide`, `03-kitchen-lighting-finished` | Kitchen lighting installation | Show as work-in-progress and completed presentation; avoid claims about scope beyond lighting work. |
| Cabling and conduit work | `04-cabinet-cabling-duplicate`, `05-underground-electrical-conduit` | Electrical cabling and conduit work | Show as installation-stage work; do not imply the two images are one project. |
| Renovation wiring | `06-renovation-rewiring-duplicate` | Renovation electrical rough-in | Show as construction-stage wiring work. |
| Switchboard and safety protection | `07-safety-switch-closeup`, `09-residential-switchboard` | Switchboard and safety-switch work | Show as equipment close-ups; no diagnosis or compliance claim beyond the visible work. |
| External isolator | `10-external-isolator-before` | External isolator work | Do not publish by default because its paired after image is excluded; keep available in the local library for a later approved pairing. |

Only the first four groups appear in the initial public gallery. This results in eight public images, matching the requested initial set while excluding the ninth usable but unpaired isolator image and the explicitly excluded file 11.

## Page experience

### Service-area hub

The directory remains a six-card grid. Each card presents the regional title, a compact list of clickable suburbs, and an accessible link to the regional hub. Search continues to match a suburb and opens its existing dedicated page.

### Regional hub

Each regional hub becomes an editorial landing page with the region title, a compact suburb navigator, service links, and a small gallery preview. The preview is labelled `Recent electrical work` rather than `local projects` or `nearby cases`. It links to the expanded gallery section on that same page or to a shared gallery page, depending on implementation simplicity.

### Suburb page

Each generated suburb page keeps its service overview, form, and nearby-suburb links. It can include a restrained `Electrical work examples` block that draws from the shared gallery. The block has an explicit general label such as “Examples of electrical work completed by our team” and must not claim work occurred in that suburb or region.

## Data flow and implementation boundaries

1. `data/perth-suburbs.json` continues to own service-area and suburb data.
2. A new gallery data module owns image filenames, alt text, category labels, and publication state.
3. The existing build script reads both sources to render regional and suburb page gallery blocks.
4. CSS uses an aspect-ratio image frame, responsive grid, lazy loading, and accessible captions; portrait source images are cropped using `object-fit: cover` rather than stretched.
5. The supplied image files are copied into the repository image directory using stable, web-safe names and are not transformed in a way that changes the evidence they contain.

## Safety and accuracy rules

- No claims of compliance certification, fault cause, repair outcome, customer approval, job date, or location unless later supplied and approved.
- No visible personal contact information, door numbers, vehicle plates, or client identifiers will be added in text. If a source image contains sensitive details discovered during review, it will be excluded or cropped before publication.
- Alt text describes the visible work, not inferred technical conclusions.
- The excluded `11-external-isolator-after.png` will not be copied or referenced in public output.

## Testing and release checks

- Verify the six region cards and all existing suburb URLs still resolve after regeneration.
- Add automated checks for gallery data, excluded-file absence, gallery image references, and the no-location wording rule.
- Check one representative hub and one representative suburb page at desktop and mobile widths.
- Run the existing service-area directory tests and new gallery checks before committing.
- Push only after local verification; then verify the production directory, one regional hub, and one suburb page.

## Out of scope for this release

- Assigning images to specific suburbs or describing them as nearby work.
- Publishing the external-isolator before image without an approved paired image.
- Adding unprovided plumbing case studies.
- Replacing the current search, contact form, existing service copy, or existing suburb URLs.
