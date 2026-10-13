import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "perth-cbd-inner-suburbs.html",
"kind": "region",
"seo": {
"title": "CBD & Inner Perth Plumber & Electrician | Ellis",
"description": "CBD and Inner Perth plumbing and electrical repairs for apartments, rentals, strata and managed properties. Request a repair or written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html#breadcrumb",
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
"name": "Plumbing and electrical repairs in CBD & Inner Perth",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"areaServed": "CBD & Inner Perth",
"description": "{{ppp:seo-value:description:raw}}",
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Plumbing and electrical repairs in CBD & Inner Perth",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Electrical repairs",
"description": "Power faults, lighting, power points and safety-switch concerns."
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Blocked drains",
"description": "Drainage, blocked-toilet and overflow concerns."
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Managed properties",
"description": "Repair requests with access, work-order and approval details."
}
}
]
},
"@id": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html#service",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/perth-cbd-inner-suburbs.html#faq",
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
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-cbd-inner-suburbs.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/perth-cbd-inner-suburbs.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-cbd-inner-suburbs.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Areas\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/service-areas.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"Plumbing and electrical repairs in CBD & Inner Perth\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"areaServed\": \"CBD & Inner Perth\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"hasOfferCatalog\": {\n        \"@type\": \"OfferCatalog\",\n        \"name\": \"Plumbing and electrical repairs in CBD & Inner Perth\",\n        \"itemListElement\": [\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Electrical repairs\",\n              \"description\": \"Power faults, lighting, power points and safety-switch concerns.\"\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Blocked drains\",\n              \"description\": \"Drainage, blocked-toilet and overflow concerns.\"\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Managed properties\",\n              \"description\": \"Repair requests with access, work-order and approval details.\"\n            }\n          }\n        ]\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-cbd-inner-suburbs.html#service\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/perth-cbd-inner-suburbs.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-cbd-inner-suburbs.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:1:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:2:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:2:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-f90a33c59bdf",
"mainAttributes": {
"id": "main"
},
"hero": "<section class=\"page-hero\"><div class=\"shell\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">{{ppp:shared:business.name:html}} · Perth local team</span><h1>CBD &amp; Inner Perth Plumber &amp; Electrician</h1><p>CBD and Inner Perth plumbing and electrical repairs for blocked drains, leak concerns, power faults, lighting and hot-water problems in homes, apartments, rentals and managed properties.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button\" href=\"contact.html\">Request a repair in CBD &amp; Inner Perth</a></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section\"><div class=\"shell text-column regional-guide\"><h2>Plumbing and electrical repairs in CBD &amp; Inner Perth</h2><p>For an apartment, strata or managed property, include the building name, unit or level, access contact and any lift, concierge, key or parking instructions that affect the repair visit.</p><h3>Plumbing repairs, drainage and hot water</h3><p>Our CBD and Inner Perth plumbing service covers apartment fixtures, kitchen and laundry connections, drainage and hot-water repairs. A slow sink within one apartment needs a different investigation from water backing up at several fixtures or a reported problem in a shared service. We establish the affected area and explain which work is within the requested property scope. See our <a href=\"blocked-drains-perth.html\">blocked drain clearing and repairs</a> service for drainage assessment and clearing options.</p><p>For moisture around cabinets, bathrooms or neighbouring rooms, our <a href=\"water-leak-detection-perth.html\">water leak detection service</a> investigates the source rather than assuming the visible stain identifies a broken pipe. Access to concealed connections, opening work and restoration are discussed separately. For an active pipe failure, describe continuing flow when requesting <a href=\"burst-pipe-repair-perth.html\">burst pipe repairs</a> so the initial visit addresses the reported condition.</p><p>An apartment hot-water problem may concern the individual installation or a service managed by the building. We establish the equipment serving the property and coordinate the relevant plumbing and electrical scope. Our <a href=\"hot-water-problems-perth.html\">hot-water repair and replacement service</a> distinguishes a local outlet problem from a loss of supply across the property.</p><h3>Electrical repairs and installation</h3><p>Our licensed electrical trades assess failed lighting, outlet faults, circuit outages and recurring trips. In a multi-unit building, the reported loss of power should identify the apartment and affected rooms without assuming the fault belongs to the common switchboard. <a href=\"power-faults-perth.html\">Electrical fault finding</a> establishes the cause before repair work is proposed.</p><p>For an apartment fit-out or replacement fitting, we discuss the existing connection, proposed location and building access before quoting. A new outlet is not treated as a simple faceplate change: circuit suitability and the required wiring affect the installation scope. See <a href=\"lighting-power-points-perth.html\">lighting and power point repairs and installation</a>. Do not remove covers or enter a locked electrical service area to collect information.</p><p>Work is carried out by appropriately licensed plumbing and electrical trades. Licence details are available on request. Our Perth team has an independent office and repair team within {{ppp:shared:business.name:html}}.</p><h2>Written quote before work proceeds</h2><p>The written quote separates the investigation, agreed repair or installation, materials and any additional access work. Building coordination, equipment access and work outside the original apartment scope are identified before those tasks proceed. Published service price ranges are planning guides; the property-specific written quote governs the agreed job.</p><p>After approval, we complete the agreed work and explain the findings, completed tasks and any separate follow-up requirements. Where a common service needs attention from another responsible party, that distinction is made clear rather than describing the private repair as a whole-building solution.</p><h2>What to include in a repair request</h2><p>For strata and managed premises, identify the unit, building name, on-site contact and the party authorised to approve work. Let us know whether the issue concerns a private fixture or has also been reported to building management. This avoids combining private repair work and common-property responsibilities into an unclear instruction.</p><p>Include lift or concierge arrangements, parking restrictions and any necessary building coordination. These are visit-planning details, not a requirement to have every document ready before calling. We can start with the issue and address, then agree access and approval arrangements.</p><p>Call <a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a> or <a href=\"contact.html\">request an on-site assessment and written quote</a>. You do not need to diagnose the fault before making contact.</p><h3>Suburbs within this service region</h3><p>Choose your suburb to prefill the property location in our contact form: <a href=\"contact.html?suburb=Perth\">Perth</a>, <a href=\"contact.html?suburb=East%20Perth\">East Perth</a>, <a href=\"contact.html?suburb=West%20Perth\">West Perth</a>, <a href=\"contact.html?suburb=Northbridge\">Northbridge</a>, <a href=\"contact.html?suburb=Highgate\">Highgate</a>, <a href=\"contact.html?suburb=Mount%20Lawley\">Mount Lawley</a>, <a href=\"contact.html?suburb=Leederville\">Leederville</a>, <a href=\"contact.html?suburb=North%20Perth\">North Perth</a>, <a href=\"contact.html?suburb=Subiaco\">Subiaco</a>, <a href=\"contact.html?suburb=West%20Leederville\">West Leederville</a>, <a href=\"contact.html?suburb=Wembley\">Wembley</a>, <a href=\"contact.html?suburb=Victoria%20Park\">Victoria Park</a>, <a href=\"contact.html?suburb=East%20Victoria%20Park\">East Victoria Park</a>, <a href=\"contact.html?suburb=South%20Perth\">South Perth</a>, <a href=\"contact.html?suburb=Como\">Como</a>, <a href=\"contact.html?suburb=Kensington\">Kensington</a>, <a href=\"contact.html?suburb=Burswood\">Burswood</a>, <a href=\"contact.html?suburb=Lathlain\">Lathlain</a>, <a href=\"contact.html?suburb=Carlisle\">Carlisle</a>, <a href=\"contact.html?suburb=Rivervale\">Rivervale</a>.</p><p>See <a href=\"service-areas.html\">all six Perth service regions</a> for our wider coverage.</p></div></section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "faq",
"container": "\n<section class=\"section faq\"><div class=\"shell text-column regional-guide\"><h2>CBD &amp; Inner Perth plumber and electrician FAQ</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Arrange a repair in a multi-unit or inner-city property</h3><p>For an apartment or shared building, give the unit, building name and the contact who can arrange entry. Identify whether the reported issue is inside the unit or in a common area; that observation does not decide responsibility. Confirm any concierge, lift, parking or equipment-access arrangements with the visit rather than assuming they are included.</p><ul class=\"intent-links\"><li><a href=\"property-management.html\">Strata and managed-property approval</a></li><li><a href=\"water-leak-detection-perth.html\">Leak assessment at the affected property</a></li><li><a href=\"plumbing.html\">Plumbing services for CBD and inner Perth</a></li><li><a href=\"electrical.html\">Electrical work for apartments and inner Perth properties</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details></div><!-- site-intent:end --><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><details><summary>{{ppp:faq:2:question}}</summary>{{ppp:faq:2:answer}}</details></div></section>" as TrustedHtml,
"items": [
{
"question": "What access details help with a CBD apartment visit?",
"answer": "<p>Include the unit and building reference, nominated on-site contact and any agreed concierge, lift or parking arrangements. Keep private access codes out of public messages and confirm how they will be shared with the team.</p>" as TrustedHtml
},
{
"question": "What should a CBD or Inner Perth repair request include?",
"answer": "<p>Include the property address, building or unit details, access requirements, observed issue and whether the repair is plumbing or electrical.</p>" as TrustedHtml
},
{
"question": "Can a property manager request plumbing and electrical repairs together?",
"answer": "<p>Yes. List each issue separately, then include the access contact and approval pathway for the property.</p>" as TrustedHtml
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
"label": "CBD & Inner Perth",
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
