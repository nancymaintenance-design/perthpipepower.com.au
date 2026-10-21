import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "electrical.html",
"kind": "serviceHub",
"seo": {
"title": "Electrician Perth | Repairs & Installation | Ellis",
"description": "Book a Perth electrician for power faults, safety switches, lighting, outlets and smoke alarms. Local licensed trades, on-site assessment and written quotes.",
"canonical": "{{ppp:shared:business.origin:raw}}/electrical.html",
"robots": null,
"social": [
{
"attribute": "property",
"key": "og:site_name",
"value": "{{ppp:shared:business.name:raw}}"
},
{
"attribute": "property",
"key": "og:locale",
"value": "en_AU"
},
{
"attribute": "property",
"key": "og:image",
"value": "{{ppp:shared:business.origin:raw}}/hero-repair.jpg"
},
{
"attribute": "property",
"key": "og:image:alt",
"value": "Tradesperson with a tool case walking to a service van outside a modern Perth home"
},
{
"attribute": "name",
"key": "twitter:title",
"value": "{{ppp:seo-value:title:raw}}"
},
{
"attribute": "name",
"key": "twitter:description",
"value": "{{ppp:seo-value:description:raw}}"
},
{
"attribute": "name",
"key": "twitter:image",
"value": "{{ppp:shared:business.origin:raw}}/hero-repair.jpg"
},
{
"attribute": "property",
"key": "og:title",
"value": "{{ppp:seo-value:title:raw}}"
},
{
"attribute": "property",
"key": "og:description",
"value": "{{ppp:seo-value:description:raw}}"
},
{
"attribute": "property",
"key": "og:url",
"value": "{{ppp:seo-value:canonical:raw}}"
},
{
"attribute": "property",
"key": "og:type",
"value": "website"
},
{
"attribute": "name",
"key": "twitter:card",
"value": "summary"
}
],
"jsonLd": [
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "LocalBusiness",
"@id": "{{ppp:shared:business.id:raw}}",
"name": "{{ppp:shared:business.name:raw}}",
"legalName": "{{ppp:shared:business.legalName:raw}}",
"taxID": "{{ppp:shared:business.abn:raw}}",
"identifier": {
"@type": "PropertyValue",
"propertyID": "ABN",
"value": "{{ppp:shared:business.abn:raw}}",
"url": "{{ppp:shared:business.registration:raw}}"
},
"url": "{{ppp:shared:business.origin:raw}}/",
"telephone": "{{ppp:shared:business.telephone:raw}}",
"email": "{{ppp:shared:business.email:raw}}",
"address": {
"@type": "PostalAddress",
"streetAddress": "{{ppp:shared:business.address.streetAddress:raw}}",
"addressLocality": "{{ppp:shared:business.address.addressLocality:raw}}",
"addressRegion": "{{ppp:shared:business.address.addressRegion:raw}}",
"postalCode": "{{ppp:shared:business.address.postalCode:raw}}",
"addressCountry": "{{ppp:shared:business.address.addressCountry:raw}}"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": -31.954352,
"longitude": 115.8564539
},
"logo": {
"@type": "ImageObject",
"url": "{{ppp:shared:business.logo:raw}}"
},
"hasMap": "{{ppp:shared:business.maps:raw}}",
"sameAs": [
"{{ppp:shared:business.instagram:raw}}",
"{{ppp:shared:business.facebook:raw}}",
"{{ppp:shared:business.linkedin:raw}}"
],
"areaServed": {
"@type": "City",
"name": "Perth"
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"{{ppp:shared:hours.days.0:raw}}",
"{{ppp:shared:hours.days.1:raw}}",
"{{ppp:shared:hours.days.2:raw}}",
"{{ppp:shared:hours.days.3:raw}}",
"{{ppp:shared:hours.days.4:raw}}",
"{{ppp:shared:hours.days.5:raw}}",
"{{ppp:shared:hours.days.6:raw}}"
],
"opens": "{{ppp:shared:hours.opens:raw}}",
"closes": "{{ppp:shared:hours.closes:raw}}"
}
},
{
"@type": "WebSite",
"@id": "{{ppp:shared:business.origin:raw}}/#website",
"url": "{{ppp:shared:business.origin:raw}}/",
"name": "{{ppp:shared:business.name:raw}}",
"inLanguage": "en-AU",
"publisher": {
"@id": "{{ppp:shared:business.id:raw}}"
}
},
{
"@type": "WebPage",
"@id": "{{ppp:shared:business.origin:raw}}/electrical.html#webpage",
"url": "{{ppp:seo-value:canonical:raw}}",
"name": "{{ppp:h1-value:raw}}",
"description": "{{ppp:seo-value:description:raw}}",
"inLanguage": "en-AU",
"isPartOf": {
"@id": "{{ppp:shared:business.origin:raw}}/#website"
},
"about": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"breadcrumb": {
"@id": "{{ppp:shared:business.origin:raw}}/electrical.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/electrical.html#breadcrumb",
"itemListElement": [
{
"@type": "ListItem",
"position": 1,
"name": "Home",
"item": "{{ppp:shared:business.origin:raw}}/"
},
{
"@type": "ListItem",
"position": 2,
"name": "{{ppp:h1-value:raw}}",
"item": "{{ppp:seo-value:canonical:raw}}"
}
]
},
{
"@type": "Service",
"name": "{{ppp:h1-value:raw}}",
"serviceType": "Electrical repairs and maintenance in Perth",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"areaServed": {
"@type": "City",
"name": "Perth"
},
"description": "{{ppp:seo-value:description:raw}}",
"url": "{{ppp:seo-value:canonical:raw}}",
"@id": "{{ppp:shared:business.origin:raw}}/electrical.html#service",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/electrical.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/electrical.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:6:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:6:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:6:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:6:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/electrical.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/electrical.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/electrical.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"serviceType\": \"Electrical repairs and maintenance in Perth\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/electrical.html#service\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/electrical.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/electrical.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:6:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:6:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:6:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:6:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-912c08033d41",
"mainAttributes": {
"id": "main"
},
"hero": "\n<section class=\"page-hero\">\n<div class=\"shell\">\n{{ppp:breadcrumbs}}\n<span class=\"eyebrow\">Perth electrical</span>\n<h1>Electrician Perth — Electrical Repairs &amp; Installation</h1>\n<p>Book a Perth electrician for electrical fault finding, safety switches, lighting, power points and smoke alarm work. Our local licensed electrical trades assess the installation, explain the required repair or improvement and confirm the scope and price in a written quote.</p>\n<a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a>\n</div>\n</section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section\">\n<div class=\"shell split\">\n<div>\n<h2>Electrical repairs and installations</h2><p><a href=\"power-faults-perth.html\">Electrical fault finding</a> · <a href=\"safety-switch-tripping-perth.html\">Safety-switch repairs</a> · <a href=\"lighting-installation-perth.html\">Lighting installation</a> · <a href=\"power-points-perth.html\">Power points and switches</a> · <a href=\"ceiling-fans-perth.html\">Ceiling fans</a> · <a href=\"switchboard-upgrades-perth.html\">Switchboard upgrades</a> · <a href=\"rcd-testing-perth.html\">RCD testing</a>. <a href=\"#ellis-price-guide\">View the electrical price guide</a>.</p>\n<h3 id=\"power\">Power faults and tripping circuits</h3>\n<p>Electrical fault finding investigates an affected circuit, connection or protective device before the repair is selected. A partial outage and a planned installation are scoped separately, even when arranged for the same property.</p>\n<h3>Switches and outlets</h3>\n<p>We repair or replace agreed power points and switches and assess new outlet positions against the existing circuit, intended load and access. The quote distinguishes replacement of a fitting from additional wiring or circuit work.</p>\n<h3 id=\"lighting\">Lighting problems</h3>\n<p>Lighting work covers fitting repairs and replacements, LED downlights and agreed new points or controls. Compatibility matters when choosing a fitting or dimmer. Ceiling and exhaust fan work also considers mounting and accessible connections.</p>\n<h3>Electrical maintenance</h3>\n<p>Switchboard work, scheduled RCD testing and smoke-alarm maintenance have their own equipment, checks and record requirements. We define the devices and work included rather than treating one repair as a whole-property inspection.</p>\n</div>\n<div>\n<img class=\"photo\" src=\"electrical-repair.jpg\" width=\"1536\" height=\"1024\" alt=\"Electrical repair tools and wiring equipment\" srcset=\"electrical-repair-480.webp 480w, electrical-repair-800.webp 800w, electrical-repair-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\">\n<aside class=\"panel\">\n<h3>Immediate electrical safety</h3>\n<p>Do not touch exposed conductors, damaged switchboards, fallen powerlines or equipment in contact with water. If there is fire, smoke, active arcing or immediate danger, move away and call 000.</p>\n</aside>\n</div>\n<p>For electrical work in Cannington, Victoria Park or Nedlands, use our <a href=\"southern-suburbs.html\">Southern Suburbs guide</a> or <a href=\"western-suburbs.html\">Western Suburbs guide</a>. Select the property region and the fitting or circuit work you need.</p></div>\n</section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "\n<section class=\"section\">\n<div class=\"shell split\">\n<div>\n<span class=\"eyebrow\">Managed properties</span>\n<h2>Electrical Maintenance for Property Managers</h2>\n<p>RCD checks, smoke-alarm maintenance and repair or replacement of damaged fittings can be scoped for a managed property. The agreed plan identifies the devices, electrical work and any requested record. Lot and common-property responsibilities determine the approval arrangements for the particular installation.</p>\n</div>\n<div>\n<a class=\"button\" href=\"contact.html?service=electrical.html\">Send an electrical enquiry</a>\n</div>\n</div>\n</section>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "\n<section class=\"rich-band\">\n<div class=\"shell\">\n<span class=\"eyebrow\">Practical electrical information</span>\n<h2>Electrical Faults: Safety and Reporting</h2>\n<div class=\"split\">\n<div>\n<p>Electrical fault finding assesses the relevant installation and connected equipment before selecting the repair. A recurring trip, failed outlet and lighting fault can need different checks. The electrician explains what the investigation establishes and any further testing or repair needed. Do not open switchboards, remove covers or test fixed wiring.</p>\n<p>The completed checks and repair apply to the work commissioned for that visit. A circuit that operates normally during an assessment does not resolve every intermittent fault. Any restriction on use or further investigation is explained with the findings.</p>\n<h2>How electrical repair work is scoped</h2>\n<p>The work plan distinguishes investigation, fitting replacement and additional wiring or circuit work. Fault location, existing equipment, cable access and materials determine the scope. The written quote identifies the authorised repair and any separate work before it proceeds.</p>\n\n<ul class=\"topic-links\">\n<li>\n<a href=\"safety-switch-tripping-perth.html\">Guide: a tripping safety switch</a>\n</li>\n<li>\n<a href=\"power-faults-perth.html\">Guide: power-fault symptoms</a>\n</li>\n<li>\n<a href=\"faq.html\">Read electrical FAQs</a>\n</li>\n</ul>\n</div>\n<img srcset=\"electrical-switchboard-perth-480.webp 480w, electrical-switchboard-perth-960.webp 960w\" sizes=\"(max-width: 540px) calc(100vw - 48px), 480px\" class=\"content-photo\" src=\"electrical-switchboard-perth.png\" width=\"1536\" height=\"1024\" alt=\"Electrician inspecting a residential switchboard\">\n</div>\n</div>\n</section>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "\n<section class=\"section\">\n<div class=\"shell\">\n<span class=\"eyebrow\">For homes and managed properties</span>\n<h2>Electrical installation scope, fault findings and checks</h2>\n<div class=\"rich-grid\">\n<article>\n<h3>Equipment and circuit scope</h3><p>A fitting replacement, new outlet and circuit repair involve different work. The existing installation, intended equipment and cable access determine the agreed scope.</p>\n</article>\n<article>\n<h3>Investigation before replacement</h3><p>An intermittent fault may need further assessment even when the equipment works during a visit. Findings guide the repair rather than an assumption that every interruption needs a new switchboard.</p>\n</article>\n<article>\n<h3>Installation checks and records</h3><p>The appropriate licensed trade checks the authorised electrical work and explains the completed scope. Any requested property record or additional inspection is agreed for that job.</p>\n</article>\n</div>\n</div>\n</section>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "\n<section class=\"section\">\n<div class=\"shell\">\n<span class=\"eyebrow\">Electrical services</span>\n<h2>Common electrical services we provide</h2>\n<p class=\"lead\">Electrical equipment should not be dismantled or tested by the occupant. Tell us what changed and whether there are visible warning signs.</p>\n<div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n<div class=\"shell\">\n<div class=\"price-guide__intro\">\n<p class=\"price-guide__kicker\">Ellis Price Guide</p>\n<h2 id=\"ellis-price-guide\">Electrical price overview</h2>\n<p>Ellis Price Guide ranges for common standard-hours, standard-scope electrical work.</p>\n</div>\n<div class=\"price-guide__grid\">\n<article class=\"price-guide__item\">\n<h3>Power-fault diagnosis / priority attendance</h3>\n<p class=\"price-guide__range\">AUD $220–$440</p>\n<p class=\"price-guide__unit\">per attendance · incl. GST</p>\n</article>\n<article class=\"price-guide__item\">\n<h3>Safety-switch diagnosis & testing</h3>\n<p class=\"price-guide__range\">AUD $220–$440</p>\n<p class=\"price-guide__unit\">per attendance · incl. GST</p>\n</article>\n<article class=\"price-guide__item\">\n<h3>RCD / RCBO replacement</h3>\n<p class=\"price-guide__range\">AUD $220–$330</p>\n<p class=\"price-guide__unit\">per device · incl. GST</p>\n</article>\n<article class=\"price-guide__item\">\n<h3>New power point</h3>\n<p class=\"price-guide__range\">AUD $165–$275</p>\n<p class=\"price-guide__unit\">per point · incl. GST</p>\n</article>\n<article class=\"price-guide__item\">\n<h3>LED downlight</h3>\n<p class=\"price-guide__range\">AUD $70–$160</p>\n<p class=\"price-guide__unit\">per light · incl. GST</p>\n</article>\n<article class=\"price-guide__item\">\n<h3>Standard hard-wired smoke alarm</h3>\n<p class=\"price-guide__range\">AUD $205–$275</p>\n<p class=\"price-guide__unit\">per alarm · incl. GST</p>\n</article>\n</div>\n<p class=\"price-guide__notice\">\n<strong>Guide conditions:</strong> These AUD ranges are for standard-hours, standard-scope work and are incl. GST. Access, materials, extra pipe, cable or circuit work, compliance work, emergency or after-hours work and unforeseen repairs are confirmed in a written quote before work proceeds.</p>\n</div>\n</div>\n<div class=\"service-detail-grid\">\n<article class=\"service-detail\">\n<h3>Power faults</h3>\n<p>Loss of power in part of a property, recurring trips or an affected circuit. Note what was in use before the change.</p>\n<a href=\"power-faults-perth.html\">Discuss a power fault →</a>\n</article>\n<article class=\"service-detail\">\n<h3>Safety switches</h3>\n<p>A switch that will not remain on needs attention. Avoid repeatedly resetting it and record the affected areas.</p>\n<a href=\"safety-switch-tripping-perth.html\">Read the safety-switch guide →</a>\n</article>\n<article class=\"service-detail\">\n<h3>Lighting</h3>\n<p>One light or several lights not working, flickering or changing behaviour when another device is used.</p>\n<a href=\"lighting-power-points-perth.html\">Discuss lighting →</a>\n</article>\n<article class=\"service-detail\">\n<h3 id=\"outlets\">Switches &amp; outlets</h3>\n<p>Loose, cracked, discoloured, warm or non-working accessories should be reported without further use or investigation.</p>\n<a href=\"lighting-power-points-perth.html\">Discuss an outlet →</a>\n</article>\n<article class=\"service-detail\">\n<h3 id=\"smoke\">Smoke alarms</h3>\n<p>Repeated beeping, a fault indication or an alarm issue at a managed property can be described in the enquiry.</p>\n<a href=\"smoke-alarm-maintenance-perth.html\">Discuss a smoke alarm →</a>\n</article>\n<article class=\"service-detail\">\n<h3>Managed-property electrical work</h3>\n<p>Share access notes, tenant information, the work-order reference and any prior symptoms or water-ingress details.</p>\n<a href=\"property-management.html\">Property-management details →</a>\n</article>\n</div>\n</div>\n</section>" as TrustedHtml
},
{
"id": "section-6",
"kind": "rich",
"html": "\n<section class=\"section\" aria-label=\"Existing company electrical work photos\">\n<div class=\"shell\" data-electrical-work-gallery><div class=\"electrical-work-gallery\"><div class=\"electrical-work-gallery__heading\"><span class=\"eyebrow\">Real work imagery</span><h2>Electrical work examples</h2><p>Electrical switchboard, lighting and power-point work.</p></div><div class=\"electrical-work-gallery__grid\"><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-in-progress-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-in-progress-480.webp 480w, /images/electrical-work/kitchen-lighting-in-progress-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Kitchen ceiling with recessed lights being fitted\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Lighting work in progress.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-wide-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-wide-480.webp 480w, /images/electrical-work/kitchen-lighting-wide-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Wide view of a kitchen with recessed lights\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Kitchen lighting presentation.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-finished-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-finished-480.webp 480w, /images/electrical-work/kitchen-lighting-finished-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Kitchen with illuminated recessed ceiling lights\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Completed lighting presentation.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/cabinet-cabling-480.webp\" srcset=\"/images/electrical-work/cabinet-cabling-480.webp 480w, /images/electrical-work/cabinet-cabling-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Electrical cabinet with cabling and conduit\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Cabling work</strong><span>Cabling installation-stage work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/underground-electrical-conduit-480.webp\" srcset=\"/images/electrical-work/underground-electrical-conduit-480.webp 480w, /images/electrical-work/underground-electrical-conduit-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Underground trench with electrical conduit\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Conduit work</strong><span>Underground conduit installation-stage work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/renovation-rewiring-480.webp\" srcset=\"/images/electrical-work/renovation-rewiring-480.webp 480w, /images/electrical-work/renovation-rewiring-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Open renovation wall with electrical wiring\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Renovation wiring</strong><span>Electrical rough-in during renovation work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/residential-switchboard-480.webp\" srcset=\"/images/electrical-work/residential-switchboard-480.webp 480w, /images/electrical-work/residential-switchboard-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Residential electrical switchboard with its cover open\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Switchboard work</strong><span>Residential switchboard work example.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/safety-switch-closeup-480.webp\" srcset=\"/images/electrical-work/safety-switch-closeup-480.webp 480w, /images/electrical-work/safety-switch-closeup-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Close-up of a safety switch and circuit breakers\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Safety-switch work</strong><span>Safety-switch work example.</span></figcaption></figure></div></div></div>\n<div class=\"shell text-column\"><p>These existing company work photos show installation stages and finished appearances. </p><p>For your property, explore <a href=\"lighting-installation-perth.html\">lighting installation and repairs</a>, <a href=\"switchboard-upgrades-perth.html\">switchboard repairs and upgrades</a> or <a href=\"rcd-testing-perth.html\">RCD testing</a>, then <a href=\"contact.html?service=electrical.html\">ask the team to confirm the proposed scope</a>.</p></div>\n</section>" as TrustedHtml
},
{
"id": "section-7",
"kind": "faq",
"container": "\n<section class=\"rich-band\">\n<div class=\"shell\">\n<span class=\"eyebrow\">A practical booking path</span>\n<h2>Booking an Electrician: Symptoms, Safety and Access</h2>\n<div class=\"service-process\">\n<article>\n<h3>Describe the symptom</h3>\n<p>Say what stopped working, where it is located and what changed first. Avoid diagnosing, opening covers or testing equipment.</p>\n</article>\n<article>\n<h3>Flag safety concerns</h3>\n<p>Report smoke, burning smell, heat, arcing, visible damage or water near electrical equipment from a safe position.</p>\n</article>\n<article>\n<h3>Share access details</h3>\n<p>For rental, strata and commercial properties, include the access contact and approval pathway with the request.</p>\n</article>\n</div>\n</div>\n<!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Electrical Fault Finding and Installation</h2><p>Fault finding establishes why existing equipment or a circuit is not working. Planned installation starts with the new fitting, its location and the existing supply. Record these as separate tasks if you need both. Vehicle electrics, refrigeration repairs and specialist energy systems are not automatically included in a household electrical enquiry. Discuss the equipment and proposed scope before purchasing a replacement or booking specialist work.</p><ul class=\"intent-links\"><li><a href=\"power-faults-perth.html\">Electrical fault finding</a></li><li><a href=\"safety-switch-tripping-perth.html\">RCD and safety-switch repairs</a></li><li><a href=\"lighting-power-points-perth.html\">Lighting and power-point work</a></li><li><a href=\"smoke-alarm-maintenance-perth.html\">Smoke-alarm maintenance and replacement</a></li><li><a href=\"fixtures-appliances-perth.html\">Appliance connections and related fixed electrical work</a></li><li><a href=\"faq.html\">Electrical booking and price questions</a></li><li><a href=\"lighting-installation-perth.html\">Lighting Installation &amp; Repairs</a></li><li><a href=\"power-points-perth.html\">Power Point Installation &amp; Repairs</a></li><li><a href=\"ceiling-fans-perth.html\">Ceiling Fan Installation &amp; Repairs</a></li><li><a href=\"exhaust-fans-perth.html\">Bathroom Exhaust Fan Replacement</a></li><li><a href=\"switchboard-upgrades-perth.html\">Switchboard Repairs &amp; Upgrades</a></li><li><a href=\"rcd-testing-perth.html\">RCD Testing &amp; Safety Switch Checks</a></li><li><a href=\"emergency-electrician-perth.html\">24-Hour Emergency Electrician</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Is fault finding included in a repair price?",
"answer": "<p>Investigation and repair can be separate stages. Our written quote identifies the assessment included and any repair or replacement that needs separate approval. If a fault is intermittent or further investigation is needed, we explain the findings and proposed next step.</p>" as TrustedHtml
},
{
"question": "Should I request a switchboard upgrade when power keeps tripping?",
"answer": "<p>A recurring trip does not establish that an upgrade is needed. Request an assessment of the affected installation first. Replacement or additional circuit work should follow the findings and an agreed scope, not the symptom alone.</p>" as TrustedHtml
},
{
"question": "After-hours electrical attendance arrangements",
"answer": "<p>Call {{ppp:shared:business.displayTelephone:html}} for urgent work; an online form does not reserve an appointment. For shock or network danger, use the official safety route first.</p>" as TrustedHtml
},
{
"question": "Routine hours and emergency arrangements",
"answer": "<p>{{ppp:shared:hours.text:html}} Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.</p>" as TrustedHtml
},
{
"question": "Electrical work and licensed trades",
"answer": "<p>Arrange fixed wiring and power-point work through appropriately licensed electrical professionals and verify the relevant current documentation. <a href=\"#learn-about-electrical\">Read the explanation.</a></p>" as TrustedHtml
}
]
},
{
"id": "section-8",
"kind": "rich",
"html": "\n<!-- keyword-gap:start --><section class=\"section keyword-gap-content\" data-keyword-gap><div class=\"shell service-reading\"><div class=\"keyword-gap-part\" id=\"gap-electrical-prices\"><h2>Electrical investigation and installation costs</h2><p>An electrical fault-finding visit investigates a reported problem. A planned installation quote starts with the fitting or outlet you want and the work needed at that location. Keep both tasks visible if you need an existing fault assessed as well as new equipment installed.</p><p>Our written quote identifies attendance, fault investigation, parts, electrical work and any additional access required. If the first assessment identifies further work or an intermittent fault needs more investigation, we explain the next scope and charges before you approve it. The published ranges cover standard work; they are not an hourly rate or a free call-out offer.</p><ul class=\"intent-links\"><li><a href=\"power-faults-perth.html\">Electrical fault finding and investigation costs</a></li><li><a href=\"lighting-power-points-perth.html#gap-power-point-installation\">Power-point installation requirements</a></li><li><a href=\"faq.html\">Electrical quote and booking questions</a></li><li><a href=\"fixtures-appliances-perth.html\">Fixed electrical work versus appliance connections</a></li></ul></div><div class=\"keyword-gap-part\" id=\"gap-electrical-regions\"><h2>Find the region for your electrical work</h2><p>Our Perth office serves the CBD and inner suburbs, the northern, southern, eastern and western suburbs, and the Perth Hills and Swan Valley. The region guides connect each area with the existing electrical service and enquiry routes.</p><ul class=\"intent-links\"><li><a href=\"perth-cbd-inner-suburbs.html\">CBD and Inner Perth</a></li><li><a href=\"northern-suburbs.html\">Northern Suburbs, including Joondalup</a></li><li><a href=\"southern-suburbs.html\">Southern Suburbs, including Canning Vale</a></li><li><a href=\"eastern-suburbs.html\">Eastern Suburbs</a></li><li><a href=\"western-suburbs.html\">Western Suburbs</a></li><li><a href=\"perth-hills-swan-valley.html\">Perth Hills and Swan Valley</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-electrical\"><h2>Electrician: symptoms and service choices</h2><h3>Household work for licensed electrical professionals</h3><p>Fixed wiring, power points and fixed electrical installation work are arranged through appropriately licensed electrical professionals. Current documentation relevant to the work is available on request.</p><ul class=\"intent-links\"><li><a href=\"about.html\">Requesting the documentation relevant to the work</a></li></ul></div></div></section>" as TrustedHtml
},
{
"id": "main-trailing-space",
"kind": "rich",
"html": "<!-- keyword-gap:end -->" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Electrical",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n<a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-09fb64239d62:0": "\n",
"chrome:header-09fb64239d62:1": "\n",
"chrome:header-09fb64239d62:2": "\n",
"chrome:header-09fb64239d62:3": "Perth electrical enquiries ",
"chrome:header-09fb64239d62:4": "\n",
"chrome:header-09fb64239d62:5": "\n",
"chrome:header-09fb64239d62:6": "\n",
"chrome:header-09fb64239d62:7": "\n",
"chrome:header-09fb64239d62:8": "\n",
"chrome:header-09fb64239d62:9": "\n",
"chrome:header-09fb64239d62:10": "\n",
"chrome:header-09fb64239d62:11": "\n",
"chrome:header-09fb64239d62:12": "\n",
"chrome:header-09fb64239d62:13": "\n",
"chrome:header-09fb64239d62:14": "\n",
"chrome:header-09fb64239d62:15": "\n",
"chrome:header-09fb64239d62:16": "\n",
"chrome:header-09fb64239d62:17": "\n",
"chrome:header-09fb64239d62:18": "\n",
"chrome:header-09fb64239d62:19": "\n",
"chrome:header-09fb64239d62:20": "\n",
"chrome:header-09fb64239d62:21": "\n",
"chrome:header-09fb64239d62:22": "\n",
"chrome:header-09fb64239d62:23": "Plumbing",
"chrome:header-09fb64239d62:24": "\n",
"chrome:header-09fb64239d62:25": "\n",
"chrome:header-09fb64239d62:26": "\n",
"chrome:header-09fb64239d62:27": "\n",
"chrome:header-09fb64239d62:28": "\n",
"chrome:header-09fb64239d62:29": "\n",
"chrome:header-09fb64239d62:30": "\n",
"chrome:header-09fb64239d62:31": "\n",
"chrome:header-09fb64239d62:32": "\n",
"chrome:header-09fb64239d62:33": "\n",
"chrome:header-09fb64239d62:34": "\n",
"chrome:header-09fb64239d62:35": "\n",
"chrome:header-09fb64239d62:36": "\n",
"chrome:header-09fb64239d62:37": "\n",
"chrome:header-09fb64239d62:38": "\n",
"chrome:header-09fb64239d62:39": "\n",
"chrome:header-09fb64239d62:40": "\n",
"chrome:header-09fb64239d62:41": "\n",
"chrome:header-09fb64239d62:42": "\n",
"chrome:header-09fb64239d62:43": "Active water, failed pipes and urgent plumbing concerns.",
"chrome:header-09fb64239d62:44": "\n",
"chrome:header-09fb64239d62:45": "\n",
"chrome:header-09fb64239d62:46": "\n",
"chrome:header-09fb64239d62:47": "\n",
"chrome:header-09fb64239d62:48": "\n",
"chrome:header-09fb64239d62:49": "\n",
"chrome:header-09fb64239d62:50": "\n",
"chrome:header-09fb64239d62:51": "\n",
"chrome:header-09fb64239d62:52": "\n",
"chrome:header-09fb64239d62:53": "\n",
"chrome:header-09fb64239d62:54": "\n",
"chrome:header-09fb64239d62:55": "\n",
"chrome:header-09fb64239d62:56": "\n",
"chrome:header-09fb64239d62:57": "\n",
"chrome:header-09fb64239d62:58": "\n",
"chrome:header-09fb64239d62:59": "\n",
"chrome:header-09fb64239d62:60": "\n",
"chrome:header-09fb64239d62:61": "\n",
"chrome:header-09fb64239d62:62": "\n",
"chrome:header-09fb64239d62:63": "\n",
"chrome:header-09fb64239d62:64": "\n",
"chrome:header-09fb64239d62:65": "\n",
"chrome:header-09fb64239d62:66": "\n",
"chrome:header-09fb64239d62:67": "\n",
"chrome:header-09fb64239d62:68": "\n",
"chrome:header-09fb64239d62:69": "\n",
"chrome:header-09fb64239d62:70": "\n",
"chrome:header-09fb64239d62:71": "\n",
"chrome:header-09fb64239d62:72": "\n",
"chrome:header-09fb64239d62:73": "\n",
"chrome:header-09fb64239d62:74": "\n",
"chrome:header-09fb64239d62:75": "\n",
"chrome:header-09fb64239d62:76": "\n",
"chrome:header-09fb64239d62:77": "\n",
"chrome:header-09fb64239d62:78": "\n",
"chrome:header-09fb64239d62:79": "\n",
"chrome:header-09fb64239d62:80": "\n",
"chrome:header-09fb64239d62:81": "\n",
"chrome:header-09fb64239d62:82": "\n",
"chrome:header-09fb64239d62:83": "Electrical",
"chrome:header-09fb64239d62:84": "\n",
"chrome:header-09fb64239d62:85": "\n",
"chrome:header-09fb64239d62:86": "\n",
"chrome:header-09fb64239d62:87": "\n",
"chrome:header-09fb64239d62:88": "\n",
"chrome:header-09fb64239d62:89": "\n",
"chrome:header-09fb64239d62:90": "\n",
"chrome:header-09fb64239d62:91": "\n",
"chrome:header-09fb64239d62:92": "\n",
"chrome:header-09fb64239d62:93": "\n",
"chrome:header-09fb64239d62:94": "\n",
"chrome:header-09fb64239d62:95": "\n",
"chrome:header-09fb64239d62:96": "\n",
"chrome:header-09fb64239d62:97": "\n",
"chrome:header-09fb64239d62:98": "\n",
"chrome:header-09fb64239d62:99": "\n",
"chrome:header-09fb64239d62:100": "\n",
"chrome:header-09fb64239d62:101": "\n",
"chrome:header-09fb64239d62:102": "\n",
"chrome:header-09fb64239d62:103": "\n",
"chrome:header-09fb64239d62:104": "\n",
"chrome:header-09fb64239d62:105": "\n",
"chrome:header-09fb64239d62:106": "\n",
"chrome:header-09fb64239d62:107": "\n",
"chrome:header-09fb64239d62:108": "\n",
"chrome:header-09fb64239d62:109": "\n",
"chrome:header-09fb64239d62:110": "\n",
"chrome:header-09fb64239d62:111": "\n",
"chrome:header-09fb64239d62:112": "\n",
"chrome:header-09fb64239d62:113": "\n",
"chrome:header-09fb64239d62:114": "\n",
"chrome:header-09fb64239d62:115": "\n",
"chrome:header-09fb64239d62:116": "\n",
"chrome:header-09fb64239d62:117": "\n",
"chrome:header-09fb64239d62:118": "\n",
"chrome:header-09fb64239d62:119": "Faults, beeping and property-maintenance requests.",
"chrome:header-09fb64239d62:120": "\n",
"chrome:header-09fb64239d62:121": "\n",
"chrome:header-09fb64239d62:122": "\n",
"chrome:header-09fb64239d62:123": "\n",
"chrome:header-09fb64239d62:124": "\n",
"chrome:header-09fb64239d62:125": "\n",
"chrome:header-09fb64239d62:126": "\n",
"chrome:header-09fb64239d62:127": "\n",
"chrome:header-09fb64239d62:128": "\n",
"chrome:header-09fb64239d62:129": "\n",
"chrome:header-09fb64239d62:130": "\n",
"chrome:header-09fb64239d62:131": "\n",
"chrome:header-09fb64239d62:132": "\n",
"chrome:header-09fb64239d62:133": "\n",
"chrome:header-09fb64239d62:134": "\n",
"chrome:header-09fb64239d62:135": "\n",
"chrome:header-09fb64239d62:136": "\n",
"chrome:header-09fb64239d62:137": "\n",
"chrome:header-09fb64239d62:138": "\n",
"chrome:header-09fb64239d62:139": "\n",
"chrome:header-09fb64239d62:140": "\n",
"chrome:header-09fb64239d62:141": "\n",
"chrome:header-09fb64239d62:142": "\n",
"chrome:header-09fb64239d62:143": "contact.html?service=electrical.html",
"chrome:header-09fb64239d62:144": "\n",
"chrome:header-09fb64239d62:145": "\n",
"chrome:header-09fb64239d62:146": "\n",
"chrome:header-09fb64239d62:147": "\n",
"chrome:header-09fb64239d62:148": "\n",
"chrome:header-09fb64239d62:149": "\n"
}
};
