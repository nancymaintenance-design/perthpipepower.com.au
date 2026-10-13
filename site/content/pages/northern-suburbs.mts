import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "northern-suburbs.html",
"kind": "region",
"seo": {
"title": "Northern Suburbs Plumber & Electrician | Ellis Perth",
"description": "Northern Suburbs plumbing and electrical repairs for power faults, safety switches, hot-water problems, blocked drains and leak concerns.",
"canonical": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html#breadcrumb",
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
"name": "Areas",
"item": "{{ppp:shared:business.origin:raw}}/service-areas.html"
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
"@type": "Service",
"name": "Plumbing and electrical repairs in Northern Suburbs",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"areaServed": "Northern Suburbs",
"description": "{{ppp:seo-value:description:raw}}",
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Plumbing and electrical repairs in Northern Suburbs",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Electrical fault finding",
"description": "Power faults, circuits and electrical repair concerns."
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Safety switches",
"description": "Safety-switch tripping and reset concerns."
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Hot-water problems",
"description": "Hot-water supply, temperature and visible-water concerns."
}
}
]
},
"@id": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html#service",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/northern-suburbs.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:1:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:1:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:2:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:2:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/northern-suburbs.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/northern-suburbs.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/northern-suburbs.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Areas\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/service-areas.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"Plumbing and electrical repairs in Northern Suburbs\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"areaServed\": \"Northern Suburbs\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"hasOfferCatalog\": {\n        \"@type\": \"OfferCatalog\",\n        \"name\": \"Plumbing and electrical repairs in Northern Suburbs\",\n        \"itemListElement\": [\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Electrical fault finding\",\n              \"description\": \"Power faults, circuits and electrical repair concerns.\"\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Safety switches\",\n              \"description\": \"Safety-switch tripping and reset concerns.\"\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Hot-water problems\",\n              \"description\": \"Hot-water supply, temperature and visible-water concerns.\"\n            }\n          }\n        ]\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/northern-suburbs.html#service\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/northern-suburbs.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/northern-suburbs.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:1:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:2:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:2:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-f90a33c59bdf",
"mainAttributes": {
"id": "main"
},
"hero": "<section class=\"page-hero\"><div class=\"shell\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">{{ppp:shared:business.name:html}} · Perth local team</span><h1>Northern Suburbs Plumber &amp; Electrician</h1><p>Northern Suburbs plumbing and electrical repairs for power faults, safety switches, hot-water problems, blocked drains and visible leak concerns.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button\" href=\"contact.html\">Request a repair in Northern Suburbs</a></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section\"><div class=\"shell text-column regional-guide\"><h2>Plumbing and electrical repairs in Northern Suburbs</h2><p>For a Northern Suburbs repair request, state the suburb, property type and the part of the property affected. Add safe observations such as an affected room, fixture or circuit rather than an attempted diagnosis.</p><h3>Plumbing repairs, drainage and hot water</h3><p>Northern Suburbs plumbing bookings can combine day-to-day fixture repairs with a clear assessment of drainage and hot-water problems. A kitchen sink that drains slowly, a running cistern and a hot-water unit that loses temperature are separate tasks. We inspect the reported items and explain a scope for each, rather than assuming one repair will resolve every symptom.</p><p>For a blockage, the number of affected fixtures and whether it returns after ordinary use help define the investigation. Our <a href=\"blocked-drains-perth.html\">blocked drain clearing service</a> considers the affected drainage and any further repair identified during assessment. A leaking or continuously running toilet can instead require <a href=\"toilet-repairs-perth.html\">toilet and cistern repairs</a>; a drainage blockage and a faulty flushing component are not interchangeable jobs.</p><p>For homes or rental properties with unreliable hot water, we assess the existing equipment and connections before recommending repair or replacement. Send the unit location and whether one or all hot outlets are affected when requesting <a href=\"hot-water-problems-perth.html\">hot-water repairs</a>. Dripping mixers and leaking fixture connections can be included as a separate <a href=\"tap-mixer-repairs-perth.html\">tap and mixer repair</a> item.</p><h3>Electrical repairs and installation</h3><p>Recurring trips, partial power loss and equipment that stops operating call for diagnosis, not repeated resetting. Our <a href=\"safety-switch-tripping-perth.html\">safety switch and RCD repair service</a> investigates the reported condition and separates an appliance-related issue from work on the fixed installation. Do not open the switchboard or keep forcing a device back on.</p><p>For planned home improvements, discuss the intended use of additional outlets or lighting, the rooms involved and whether you are replacing existing fittings or adding locations. Our <a href=\"lighting-power-points-perth.html\">lighting and power point installation service</a> assesses the connection and wiring requirements before quoting. A list of proposed improvements can be assessed together, with repair and installation tasks priced in their agreed scope.</p><p>Work is carried out by appropriately licensed plumbing and electrical trades. Licence details are available on request. Our Perth team has an independent office and repair team within {{ppp:shared:business.name:html}}.</p><h2>Written quote before work proceeds</h2><p>We distinguish a repair visit from a planned installation when preparing the written quote. Existing equipment condition, compatible replacement parts, new cabling or pipe connections and access requirements affect the scope. A request for several items is recorded as separate tasks so you can decide which work to approve.</p><p>The final written quote confirms the included materials and work, along with any additional investigation or installation requirements. Changes identified on site are explained before extra work proceeds. On completion, we discuss what was repaired or installed and any separate items still requiring attention.</p><h2>What to include in a repair request</h2><p>For a rental maintenance booking, give the property address, occupant contact and the manager or owner who can authorise work. Record each item separately and identify the priority issue, such as loss of hot water or an active leak. We coordinate access and the approved scope with the nominated contact.</p><p>For a family home, note which rooms or fixtures must be accessible and any gate, pet or parking arrangements. Describe the fault from normal use; our team performs the assessment. Safe photos are useful but optional and must not involve removing fittings or approaching a hazard.</p><p>Call <a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a> or <a href=\"contact.html\">request an on-site assessment and written quote</a>. You do not need to diagnose the fault before making contact.</p><h3>Suburbs within this service region</h3><p>Choose your suburb to prefill the property location in our contact form: <a href=\"contact.html?suburb=Joondalup\">Joondalup</a>, <a href=\"contact.html?suburb=Wanneroo\">Wanneroo</a>, <a href=\"contact.html?suburb=Butler\">Butler</a>, <a href=\"contact.html?suburb=Clarkson\">Clarkson</a>, <a href=\"contact.html?suburb=Mindarie\">Mindarie</a>, <a href=\"contact.html?suburb=Ocean%20Reef\">Ocean Reef</a>, <a href=\"contact.html?suburb=Mullaloo\">Mullaloo</a>, <a href=\"contact.html?suburb=Hillarys\">Hillarys</a>, <a href=\"contact.html?suburb=Sorrento\">Sorrento</a>, <a href=\"contact.html?suburb=Duncraig\">Duncraig</a>, <a href=\"contact.html?suburb=Greenwood\">Greenwood</a>, <a href=\"contact.html?suburb=Kingsley\">Kingsley</a>, <a href=\"contact.html?suburb=Padbury\">Padbury</a>, <a href=\"contact.html?suburb=Kallaroo\">Kallaroo</a>, <a href=\"contact.html?suburb=Craigie\">Craigie</a>, <a href=\"contact.html?suburb=Heathridge\">Heathridge</a>, <a href=\"contact.html?suburb=Currambine\">Currambine</a>, <a href=\"contact.html?suburb=Edgewater\">Edgewater</a>, <a href=\"contact.html?suburb=Karrinyup\">Karrinyup</a>, <a href=\"contact.html?suburb=Innaloo\">Innaloo</a>, <a href=\"contact.html?suburb=Scarborough\">Scarborough</a>, <a href=\"contact.html?suburb=Doubleview\">Doubleview</a>, <a href=\"contact.html?suburb=Balcatta\">Balcatta</a>, <a href=\"contact.html?suburb=Nollamara\">Nollamara</a>.</p><p>See <a href=\"service-areas.html\">all six Perth service regions</a> for our wider coverage.</p></div></section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "faq",
"container": "\n<section class=\"section faq\"><div class=\"shell text-column regional-guide\"><h2>Northern Suburbs plumber and electrician FAQ</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Identify the entrance and the affected part of the property</h3><p>If the work is in a rear dwelling, upstairs room or separate building, explain how it is reached from the street address. Distinguish the affected fitting from the whole-property supply, and mention any access restrictions. The suburb shortcut helps locate the enquiry; it does not confirm attendance or that extra external work is included.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Plumbing repair starting points</a></li><li><a href=\"power-faults-perth.html\">Assessment of a power fault</a></li><li><a href=\"electrical.html\">Electrical work in northern Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details></div><!-- site-intent:end --><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><details><summary>{{ppp:faq:2:question}}</summary>{{ppp:faq:2:answer}}</details></div></section>" as TrustedHtml,
"items": [
{
"question": "What should I include for a separate or rear dwelling?",
"answer": "<p>Provide the full street address, which dwelling or entrance is involved, the affected room and the access contact. Confirm access to the actual equipment as well as entry to the property.</p>" as TrustedHtml
},
{
"question": "What details help with a Northern Suburbs power-fault repair?",
"answer": "<p>Include the property address, affected area, safe observations and whether the safety switch or circuit has changed.</p>" as TrustedHtml
},
{
"question": "What should I include for a hot-water repair?",
"answer": "<p>Explain whether the issue is supply, temperature, pressure or visible water, together with the property address and access contact.</p>" as TrustedHtml
}
]
},
{
"id": "section-3",
"kind": "rich",
"html": "\n<section class=\"section electrical-work-gallery-section\"><div class=\"shell text-column\"><span class=\"eyebrow\">Electrical work examples</span><h2>Electrical switchboard, lighting and power-point work</h2><p>Company electrical work photographs illustrate installation and repair stages. They are not assigned to a particular suburb without project-location records. Contact {{ppp:shared:business.name:html}} to discuss the work at your property.</p></div><div class=\"shell\" data-electrical-work-gallery><div class=\"electrical-work-gallery\"><div class=\"electrical-work-gallery__heading\"><span class=\"eyebrow\">Real work imagery</span><h2>Electrical work examples</h2><p>Electrical switchboard, lighting and power-point work.</p></div><div class=\"electrical-work-gallery__grid\"><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-in-progress-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-in-progress-480.webp 480w, /images/electrical-work/kitchen-lighting-in-progress-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Kitchen ceiling with recessed lights being fitted\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Lighting work in progress.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-wide-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-wide-480.webp 480w, /images/electrical-work/kitchen-lighting-wide-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Wide view of a kitchen with recessed lights\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Kitchen lighting presentation.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-finished-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-finished-480.webp 480w, /images/electrical-work/kitchen-lighting-finished-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Kitchen with illuminated recessed ceiling lights\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Completed lighting presentation.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/cabinet-cabling-480.webp\" srcset=\"/images/electrical-work/cabinet-cabling-480.webp 480w, /images/electrical-work/cabinet-cabling-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Electrical cabinet with cabling and conduit\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Cabling work</strong><span>Cabling installation-stage work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/underground-electrical-conduit-480.webp\" srcset=\"/images/electrical-work/underground-electrical-conduit-480.webp 480w, /images/electrical-work/underground-electrical-conduit-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Underground trench with electrical conduit\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Conduit work</strong><span>Underground conduit installation-stage work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/renovation-rewiring-480.webp\" srcset=\"/images/electrical-work/renovation-rewiring-480.webp 480w, /images/electrical-work/renovation-rewiring-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Open renovation wall with electrical wiring\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Renovation wiring</strong><span>Electrical rough-in during renovation work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/residential-switchboard-480.webp\" srcset=\"/images/electrical-work/residential-switchboard-480.webp 480w, /images/electrical-work/residential-switchboard-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Residential electrical switchboard with its cover open\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Switchboard work</strong><span>Residential switchboard work example.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/safety-switch-closeup-480.webp\" srcset=\"/images/electrical-work/safety-switch-closeup-480.webp 480w, /images/electrical-work/safety-switch-closeup-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Close-up of a safety switch and circuit breakers\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Safety-switch work</strong><span>Safety-switch work example.</span></figcaption></figure></div></div></div></section>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Areas",
"href": "service-areas.html"
},
{
"label": "Northern Suburbs",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / <a href=\"{{ppp:breadcrumb:1:href}}\">{{ppp:breadcrumb:1:label}}</a> / {{ppp:breadcrumb:2:label}}</p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-965ba50d3525:0": "",
"chrome:header-965ba50d3525:1": "",
"chrome:header-965ba50d3525:2": "",
"chrome:header-965ba50d3525:3": "",
"chrome:header-965ba50d3525:4": "",
"chrome:header-965ba50d3525:5": "",
"chrome:header-965ba50d3525:6": "",
"chrome:header-965ba50d3525:7": "",
"chrome:header-965ba50d3525:8": "",
"chrome:header-965ba50d3525:9": "",
"chrome:header-965ba50d3525:10": "",
"chrome:header-965ba50d3525:11": "",
"chrome:header-965ba50d3525:12": "",
"chrome:header-965ba50d3525:13": "",
"chrome:header-965ba50d3525:14": "",
"chrome:header-965ba50d3525:15": "",
"chrome:header-965ba50d3525:16": "",
"chrome:header-965ba50d3525:17": "",
"chrome:header-965ba50d3525:18": "",
"chrome:header-965ba50d3525:19": "",
"chrome:header-965ba50d3525:20": "",
"chrome:header-965ba50d3525:21": "",
"chrome:header-965ba50d3525:22": "",
"chrome:header-965ba50d3525:23": "",
"chrome:header-965ba50d3525:24": "",
"chrome:header-965ba50d3525:25": "",
"chrome:header-965ba50d3525:26": "",
"chrome:header-965ba50d3525:27": "",
"chrome:header-965ba50d3525:28": "",
"chrome:header-965ba50d3525:29": "",
"chrome:header-965ba50d3525:30": "",
"chrome:header-965ba50d3525:31": "",
"chrome:header-965ba50d3525:32": "",
"chrome:header-965ba50d3525:33": "",
"chrome:header-965ba50d3525:34": "",
"chrome:header-965ba50d3525:35": "",
"chrome:header-965ba50d3525:36": "",
"chrome:header-965ba50d3525:37": "",
"chrome:header-965ba50d3525:38": "",
"chrome:header-965ba50d3525:39": "",
"chrome:header-965ba50d3525:40": "",
"chrome:header-965ba50d3525:41": "",
"chrome:header-965ba50d3525:42": "",
"chrome:header-965ba50d3525:43": "",
"chrome:header-965ba50d3525:44": "",
"chrome:header-965ba50d3525:45": "",
"chrome:header-965ba50d3525:46": "",
"chrome:header-965ba50d3525:47": "",
"chrome:header-965ba50d3525:48": "",
"chrome:header-965ba50d3525:49": "",
"chrome:header-965ba50d3525:50": "",
"chrome:header-965ba50d3525:51": "",
"chrome:header-965ba50d3525:52": "",
"chrome:header-965ba50d3525:53": "",
"chrome:header-965ba50d3525:54": "",
"chrome:header-965ba50d3525:55": "",
"chrome:header-965ba50d3525:56": "",
"chrome:header-965ba50d3525:57": "",
"chrome:header-965ba50d3525:58": "",
"chrome:header-965ba50d3525:59": "",
"chrome:header-965ba50d3525:60": "",
"chrome:header-965ba50d3525:61": "",
"chrome:header-965ba50d3525:62": "",
"chrome:header-965ba50d3525:63": "",
"chrome:header-965ba50d3525:64": "",
"chrome:header-965ba50d3525:65": "",
"chrome:header-965ba50d3525:66": "",
"chrome:header-965ba50d3525:67": "",
"chrome:header-965ba50d3525:68": "",
"chrome:header-965ba50d3525:69": "",
"chrome:header-965ba50d3525:70": "",
"chrome:header-965ba50d3525:71": "contact.html",
"chrome:header-965ba50d3525:72": "",
"chrome:footer-ea4eccc794d7:0": "",
"chrome:footer-ea4eccc794d7:1": "",
"chrome:footer-ea4eccc794d7:2": "",
"chrome:footer-ea4eccc794d7:3": "",
"chrome:footer-ea4eccc794d7:4": "",
"chrome:footer-ea4eccc794d7:5": "",
"chrome:footer-ea4eccc794d7:6": "",
"chrome:footer-ea4eccc794d7:7": "",
"chrome:footer-ea4eccc794d7:8": "",
"chrome:footer-ea4eccc794d7:9": "",
"chrome:footer-ea4eccc794d7:10": "contact.html",
"chrome:footer-ea4eccc794d7:11": "",
"chrome:footer-ea4eccc794d7:12": "",
"chrome:footer-ea4eccc794d7:13": "contact.html"
}
};
