import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "insights-reporting-a-plumbing-leak.html",
"kind": "article",
"seo": {
"title": "How to Report a Plumbing Leak | {{ppp:shared:business.name:raw}} Perth",
"description": "Report a plumbing leak in Perth with safe observations, meter records and access details. See how Ellis confirms inspection, repairs and restoration scope.",
"canonical": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html#breadcrumb",
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
"name": "Insights",
"item": "{{ppp:shared:business.origin:raw}}/insights.html"
},
{
"@type": "ListItem",
"position": 3,
"name": "{{ppp:h1-value:raw}}",
"item": "{{ppp:seo-value:canonical:raw}}"
}
]
},
{
"@type": "Article",
"headline": "{{ppp:h1-value:raw}}",
"description": "{{ppp:seo-value:description:raw}}",
"url": "{{ppp:seo-value:canonical:raw}}",
"inLanguage": "en-AU",
"author": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"publisher": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"@id": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html#article",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html#webpage"
},
"dateModified": "2026-10-15",
"abstract": "{{ppp:summary-value:raw}}"
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/insights-reporting-a-plumbing-leak.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:44:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:44:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:44:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:44:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-reporting-a-plumbing-leak.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/insights-reporting-a-plumbing-leak.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-reporting-a-plumbing-leak.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Insights\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/insights.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Article\",\n      \"headline\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"author\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-reporting-a-plumbing-leak.html#article\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/insights-reporting-a-plumbing-leak.html#webpage\"\n      },\n      \"dateModified\": \"2026-10-15\",\n      \"abstract\": \"{{ppp:summary-value:json}}\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-reporting-a-plumbing-leak.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:44:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:44:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:44:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:44:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-bcfe65294960",
"mainAttributes": {
"class": "article"
},
"hero": null,
"sections": [
{
"id": "section-0",
"kind": "rich",
"html": "{{ppp:breadcrumbs}}" as TrustedHtml
},
{
"id": "section-1",
"kind": "rich",
"html": "<header class=\"article-header\"><span class=\"eyebrow\">Plumbing guide</span><h1>Reporting a plumbing leak: inspection and repair in Perth</h1><p class=\"article-meta\">Practical property information</p></header>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "<p class=\"article-meta\" data-editorial-meta>By <a href=\"about.html\">{{ppp:shared:business.name:html}}</a> · Updated <time datetime=\"2026-10-15\">15 October 2026</time></p>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "<aside class=\"article-summary\" data-editorial-summary><h2>At a glance</h2><p>Start with the affected room, when water appeared and whether it is still spreading. Photos and meter records are optional clues. An on-site inspection establishes the source; the written scope should distinguish detection, access, pipe repair and surface restoration. For managed properties, include the access contact and person who can approve the work.</p></aside>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "<nav class=\"article-toc\" aria-label=\"In this guide\"><h2>In this guide</h2><ul><li><a href=\"#guide-1\">Active leaks and immediate hazards</a></li><li><a href=\"#guide-2\">Leak location, timing and water spread</a></li><li><a href=\"#guide-3\">Leak investigation and repair quotation</a></li><li><a href=\"#guide-4\">Separate pipe repair from access and surface restoration</a></li><li><a href=\"#guide-5\">Leak reports for tenants and property managers</a></li><li><a href=\"#guide-7\">Private pipes, meters and drainage</a></li></ul></nav>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "<p>To report a plumbing leak in Perth, send {{ppp:shared:business.name:html}} the location, timing, water spread and safe access details. We use that information to plan the inspection, investigate the likely source and explain the repair scope before you authorise further work.</p>" as TrustedHtml
},
{
"id": "section-6",
"kind": "rich",
"html": "\n<p>You do not need to diagnose a hidden pipe fault before calling. A damp ceiling, water under a cabinet or unexplained meter movement gives us a starting point; the inspection determines what needs attention. Our <a href=\"water-leak-detection-perth.html\">water leak detection service</a> explains the signs we investigate and how detection and repairs can be scoped separately.</p>" as TrustedHtml
},
{
"id": "guide-1",
"kind": "rich",
"html": "\n<h2 id=\"guide-1\">Active leaks and immediate hazards</h2>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "\n<ul><li><strong>A stable drip or stain you can observe safely:</strong> record the affected room, when it started and whether it follows use of a fixture. Send an enquiry with photos taken from a safe position.</li><li><strong>Active flow or spreading water:</strong> call <a href=\"tel:{{ppp:shared:business.telephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a> and describe whether the flow is continuing and which rooms are affected. If you know the water isolation point and it is safe to reach, isolate the supply. Do not delay contact to collect a full set of photos. Our <a href=\"burst-pipe-repair-perth.html\">burst pipe repair page</a> covers active pipe leaks and repair arrangements.</li><li><strong>Water near electrical fittings, appliances or a switchboard:</strong> keep people away and do not touch wet equipment, operate switches in the affected area or enter water to reach an isolation point. Tell us about the electrical hazard when you call so the required trades can be considered. For immediate danger to people, contact emergency services.</li></ul>" as TrustedHtml
},
{
"id": "section-9",
"kind": "rich",
"html": "\n<p>Move belongings or contain a small visible drip only where it is safe. Do not remove fittings, open walls or climb into a ceiling to find the source. Access work is part of the scope to discuss with the attending tradesperson.</p>" as TrustedHtml
},
{
"id": "guide-2",
"kind": "rich",
"html": "\n<h2 id=\"guide-2\">Leak location, timing and water spread</h2>" as TrustedHtml
},
{
"id": "section-11",
"kind": "rich",
"html": "\n<p>Start with the address and affected room. Describe where you see water, rather than where you think the pipe is broken: below the kitchen sink, beside the hot-water unit, at the toilet base or on the ceiling below a bathroom. Note whether it is dripping, running or pooling, and whether it appears constantly or only when a fixture is used.</p>" as TrustedHtml
},
{
"id": "section-12",
"kind": "rich",
"html": "\n<p>Include the time first noticed, any change in the wet area, staining or swelling, and whether the supply has been isolated. Photos are optional: a wide photo can show the location and a closer photo the visible detail, without disturbing finishes or approaching electrical hazards. Water can travel before it becomes visible, so a photo records symptoms and access rather than establishing the source. Previous repairs, recent plumbing work and an unusual water bill are useful context, but none proves the cause on its own.</p>" as TrustedHtml
},
{
"id": "section-13",
"kind": "rich",
"html": "\n<h3>Water meter records and suspected leaks</h3>" as TrustedHtml
},
{
"id": "section-14",
"kind": "rich",
"html": "\n<p>You can request an inspection without meter readings. If the meter is safely accessible and the situation is stable, note the meter type, readings and times. For an ordinary meter, compare readings after actual water use has stopped for 15 minutes. An integrated smart meter uses its own model instructions and usage display; do not apply the ordinary dial-reading method to every meter.</p>" as TrustedHtml
},
{
"id": "section-15",
"kind": "rich",
"html": "\n<p>Record any automatic use that could affect the reading, such as irrigation or an appliance. Meter movement can indicate continuing water use. Contact {{ppp:shared:business.name:html}} for an on-site inspection to locate the source and confirm the repair scope. Do not postpone help for active flooding or an electrical hazard to run a meter check.</p>" as TrustedHtml
},
{
"id": "guide-3",
"kind": "rich",
"html": "\n<h2 id=\"guide-3\">Leak investigation and repair quotation</h2>" as TrustedHtml
},
{
"id": "section-17",
"kind": "rich",
"html": "\n<h3>1. Confirm the inspection goal and access</h3>" as TrustedHtml
},
{
"id": "section-18",
"kind": "rich",
"html": "\n<p>We review the affected area, active water flow and any hazard, then arrange the on-site inspection. Our team checks the suspected supply leak, visible connections and surrounding moisture to identify the cause. We confirm the on-site contact, entry arrangements and safe access to the relevant room, meter and fixtures.</p>" as TrustedHtml
},
{
"id": "section-19",
"kind": "rich",
"html": "\n<h3>2. Inspect and explain the findings</h3>" as TrustedHtml
},
{
"id": "section-20",
"kind": "rich",
"html": "\n<p>Our team investigates the leak on site, identifies the fault and explains the required repair and access work. We select the investigation method for the affected area, explain any opening work, and confirm the work scope and quote before proceeding.</p>" as TrustedHtml
},
{
"id": "section-21",
"kind": "rich",
"html": "\n<p>Our licensed plumbers assess hidden leaks and explain the investigation and repair options. Licence details are available on request.</p>" as TrustedHtml
},
{
"id": "section-22",
"kind": "rich",
"html": "\n<h3>3. Confirm the written scope and approval</h3>" as TrustedHtml
},
{
"id": "section-23",
"kind": "rich",
"html": "\n<p>Inspection findings lead to a proposed repair, further investigation or related work. Confirm what the quotation includes before authorising that next stage. If opening a wall or floor reveals a different condition, the additional work and cost need to be explained and approved before the scope expands. For a managed property, establish who can approve costs and how urgent findings should be reported.</p>" as TrustedHtml
},
{
"id": "section-24",
"kind": "rich",
"html": "\n<h3>4. Complete the agreed work and record the outcome</h3>" as TrustedHtml
},
{
"id": "section-25",
"kind": "rich",
"html": "\n<p>The repair and agreed checks are completed within the authorised scope. We record the identified fault, work completed and follow-up items. The handover confirms the surface restoration and any related trade work included in your agreed scope.</p>" as TrustedHtml
},
{
"id": "guide-4",
"kind": "rich",
"html": "\n<span id=\"guide-6\" aria-hidden=\"true\"></span><h2 id=\"guide-4\">Separate pipe repair from access and surface restoration</h2>" as TrustedHtml
},
{
"id": "section-27",
"kind": "rich",
"html": "\n<p>The written quote identifies the agreed work. Inspection, pipe repair and restoring finishes are separate tasks; confirm which of these items are included:</p>" as TrustedHtml
},
{
"id": "section-28",
"kind": "rich",
"html": "\n<ul><li><strong>Inspection or detection:</strong> the area to investigate, access available and any agreed limit to the initial visit.</li><li><strong>Access or opening:</strong> whether cabinetry, a wall, floor or paving needs to be opened, and who is responsible for that work.</li><li><strong>Pipe or fitting repair:</strong> the identified component, proposed repair and checks included afterward.</li><li><strong>Surface restoration:</strong> whether plaster, paint, tiles, cabinetry or paving reinstatement is included, separately priced or left for another trade.</li><li><strong>Related work:</strong> electrical safety, drying or a separate drainage issue where the inspection identifies a need.</li></ul>" as TrustedHtml
},
{
"id": "section-29",
"kind": "rich",
"html": "\n<p>Access, concealed pipe routes, the extent of damage and restoration requirements affect the scope. A quote for finding a leak should not be compared directly with a quote that also includes opening, repair and restoring finishes. Send the property details through our <a href=\"contact.html\">Perth enquiry form</a> so our team can arrange an on-site inspection, identify the cause and confirm the repair plan and written quote.</p>" as TrustedHtml
},
{
"id": "guide-5",
"kind": "rich",
"html": "\n<h2 id=\"guide-5\">Leak reports for tenants and property managers</h2>" as TrustedHtml
},
{
"id": "section-31",
"kind": "rich",
"html": "\n<p>Include the tenant or on-site contact, entry permission, suitable access times and the person responsible for approving costs. Note the work-order reference, any approval limit and where photos, findings and invoices should be sent. If a room is unavailable or the meter is behind a locked gate, say so before the visit. When water is continuing to spread, follow the property’s urgent-maintenance process without waiting to complete the report.</p>" as TrustedHtml
},
{
"id": "section-32",
"kind": "rich",
"html": "\n<p>After the work, retain the repair record and any outstanding restoration or reinspection tasks. Our <a href=\"property-management.html\">property management service</a> covers work orders, access notes and approval paths for managed Perth properties.</p>" as TrustedHtml
},
{
"id": "guide-6",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-34",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-35",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-36",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-37",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-38",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-39",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-40",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-41",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-42",
"kind": "rich",
"html": "\n<p><a class=\"button\" href=\"contact.html\">Arrange a leak inspection with Ellis</a> or call <a href=\"tel:{{ppp:shared:business.telephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a> with the location, water spread and access details.</p>" as TrustedHtml
},
{
"id": "section-43",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-44",
"kind": "faq",
"container": "<!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h2 id=\"guide-7\">Private pipes, meters and drainage</h2><p>A suspected private pipe leak, water at the meter and wastewater returning through a drain need different next steps. Report the observation without moving covers or entering water to investigate. If the source is not clear, say so. A useful enquiry separates the location of the symptom from a proposed diagnosis.</p><ul class=\"intent-links\"><li><a href=\"water-leak-detection-perth.html\">Request private-pipe leak investigation</a></li><li><a href=\"blocked-drains-perth.html\">Wastewater and blocked-drain guidance</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div>" as TrustedHtml,
"items": [
{
"question": "Should I treat water at the meter as a normal private-pipe repair?",
"answer": "<p>Not automatically. Follow Water Corporation guidance for the meter and explain where the water appears from a safe position. The supply or meter boundary matters; do not assume every leak belongs to privately maintained plumbing.</p>" as TrustedHtml
},
{
"question": "Should I open a wall before the plumber visits?",
"answer": "<p>No. Explain the visible location and current condition. Investigation, access and restoration should be agreed as parts of the scope; opening finishes yourself may introduce a hazard without establishing the source.</p>" as TrustedHtml
}
]
},
{
"id": "section-45",
"kind": "rich",
"html": "<!-- site-intent:end --><p data-guide-services>For a leak centred on a fitting, see <a href=\"tap-mixer-repairs-perth.html\">tap and mixer repairs</a> or <a href=\"toilet-repairs-perth.html\">toilet and cistern repairs</a>. Water returning through a drain is a different drainage request: see <a href=\"blocked-drains-perth.html\">blocked-drain clearing and assessment</a>. If the source is unclear, describe the observation rather than choosing a diagnosis.</p>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Insights",
"href": "insights.html"
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / <a href=\"{{ppp:breadcrumb:1:href}}\">{{ppp:breadcrumb:1:label}}</a></p>" as TrustedHtml,
"chromeBindings": {}
};
