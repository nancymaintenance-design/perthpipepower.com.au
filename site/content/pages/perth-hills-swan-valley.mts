import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "perth-hills-swan-valley.html",
"kind": "region",
"seo": {
"title": "Perth Hills & Swan Valley Plumber & Electrician | Ellis",
"description": "Perth Hills and Swan Valley plumbing and electrical repairs for hot water, power faults, lighting, drains and leak concerns.",
"canonical": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html#breadcrumb",
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
"name": "Plumbing and electrical repairs in Perth Hills & Swan Valley",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"areaServed": "Perth Hills & Swan Valley",
"description": "{{ppp:seo-value:description:raw}}",
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Plumbing and electrical repairs in Perth Hills & Swan Valley",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Hot-water problems",
"description": "Hot-water supply, pressure, temperature and visible-water concerns."
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Electrical repairs",
"description": "Power faults, lighting, safety switches and electrical fault finding."
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Property repairs",
"description": "Plumbing and electrical repair coordination for managed properties."
}
}
]
},
"@id": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html#service",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/perth-hills-swan-valley.html#faq",
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
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-hills-swan-valley.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/perth-hills-swan-valley.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-hills-swan-valley.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Areas\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/service-areas.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"Plumbing and electrical repairs in Perth Hills & Swan Valley\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"areaServed\": \"Perth Hills & Swan Valley\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"hasOfferCatalog\": {\n        \"@type\": \"OfferCatalog\",\n        \"name\": \"Plumbing and electrical repairs in Perth Hills & Swan Valley\",\n        \"itemListElement\": [\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Hot-water problems\",\n              \"description\": \"Hot-water supply, pressure, temperature and visible-water concerns.\"\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Electrical repairs\",\n              \"description\": \"Power faults, lighting, safety switches and electrical fault finding.\"\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"name\": \"Property repairs\",\n              \"description\": \"Plumbing and electrical repair coordination for managed properties.\"\n            }\n          }\n        ]\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-hills-swan-valley.html#service\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/perth-hills-swan-valley.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/perth-hills-swan-valley.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-f90a33c59bdf",
"mainAttributes": {
"id": "main"
},
"hero": "<section class=\"page-hero\"><div class=\"shell\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">{{ppp:shared:business.name:html}} · Perth local team</span><h1>Perth Hills &amp; Swan Valley Plumber &amp; Electrician</h1><p>Perth Hills and Swan Valley plumbing and electrical repairs for hot-water problems, electrical faults, lighting, blocked drains and visible leak concerns.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button\" href=\"contact.html\">Request a repair in Perth Hills &amp; Swan Valley</a></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section\"><div class=\"shell text-column regional-guide\"><h2>Plumbing and electrical repairs in Perth Hills &amp; Swan Valley</h2><p>Plumbing and electrical repairs for Perth Hills and Swan Valley properties. We assess hot-water equipment, leaks, drainage and electrical faults against the installation at the address; equipment type and specialist system requirements are confirmed before work is accepted.</p><h3>Plumbing repairs, drainage and hot water</h3><p>For Perth Hills and Swan Valley bookings, the repair request should connect the reported issue with the equipment location and practical site access. Our <a href=\"hot-water-problems-perth.html\">hot-water repair and replacement service</a> assesses the equipment, water connections and relevant electrical requirements, whether the unit is beside the home or in another accessible service area.</p><p>Visible moisture does not by itself identify a broken pipe. Our <a href=\"water-leak-detection-perth.html\">water leak detection service</a> investigates the affected area and explains any access work required to establish the source. For an active damaged pipe or connection, our <a href=\"burst-pipe-repair-perth.html\">burst pipe repairs</a> service addresses the reported water flow within the agreed repair scope.</p><p>Slow or backed-up fixtures are assessed through <a href=\"blocked-drains-perth.html\">blocked drain clearing and repair</a>. Describe which fixtures are affected and whether the symptoms are recurring. We assess the drainage system, water source and access at your property before confirming the work.</p><h3>Electrical repairs and installation</h3><p>Our <a href=\"power-faults-perth.html\">electrical fault finding and repair service</a> covers reported outages and faults in the property installation. Identify affected rooms or separate equipment areas from a safe position. We distinguish the fault being investigated from planned changes to lighting, outlets or equipment connections.</p><p>For recurring trips, request <a href=\"safety-switch-tripping-perth.html\">safety switch and RCD assessment</a> rather than repeatedly resetting the device. Let us know about visible water, damaged equipment or inaccessible service areas when booking. Do not enter a hazardous area, open covers or touch wet electrical equipment. Move clear and call 000 for immediate danger.</p><p>Work is carried out by appropriately licensed plumbing and electrical trades. Licence details are available on request. Our local team has an independent office and repair team within {{ppp:shared:business.name:html}}.</p><h2>Written quote before work proceeds</h2><p>Equipment location, access, existing connections and the confirmed fault affect the written quote. Investigation, repair and replacement options are identified separately, with additional pipework, cabling or access work described where required. No equipment package or system type is assumed before assessment.</p><p>Our team explains the recommended scope and written price before approved work proceeds. If findings require additional work, that change is discussed first. The handover records what was completed and any remaining item outside the approved scope, helping owners and managers plan the next step clearly.</p><h2>Repair request and access details</h2><p>Include driveway, gate and on-site contact information relevant to the visit, plus the location of the affected equipment. If access to a separate building or locked service area is required, identify who can provide entry. These details support visit planning without asking you to inspect or test equipment yourself.</p><p>For a managed property, include the work order, occupant contact and approval pathway. Keep distinct faults as separate items, especially where plumbing and electrical work are both requested. Photos are optional and can be sent by email only when safely taken.</p><p>Call <a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a> or <a href=\"contact.html\">request an on-site assessment and written quote</a>. You do not need to diagnose the fault before making contact.</p><h3>Suburbs within this service region</h3><p>Choose your suburb to prefill the property location in our contact form: <a href=\"contact.html?suburb=Ellenbrook\">Ellenbrook</a>, <a href=\"contact.html?suburb=Aveley\">Aveley</a>, <a href=\"contact.html?suburb=The%20Vines\">The Vines</a>, <a href=\"contact.html?suburb=Henley%20Brook\">Henley Brook</a>, <a href=\"contact.html?suburb=Brabham\">Brabham</a>, <a href=\"contact.html?suburb=Caversham\">Caversham</a>, <a href=\"contact.html?suburb=Swan%20View\">Swan View</a>, <a href=\"contact.html?suburb=Stratton\">Stratton</a>, <a href=\"contact.html?suburb=Jane%20Brook\">Jane Brook</a>, <a href=\"contact.html?suburb=Bellevue\">Bellevue</a>, <a href=\"contact.html?suburb=Greenmount\">Greenmount</a>, <a href=\"contact.html?suburb=Darlington\">Darlington</a>, <a href=\"contact.html?suburb=Mundaring\">Mundaring</a>, <a href=\"contact.html?suburb=Kalamunda\">Kalamunda</a>, <a href=\"contact.html?suburb=Lesmurdie\">Lesmurdie</a>, <a href=\"contact.html?suburb=Gooseberry%20Hill\">Gooseberry Hill</a>, <a href=\"contact.html?suburb=Walliston\">Walliston</a>, <a href=\"contact.html?suburb=Pickering%20Brook\">Pickering Brook</a>, <a href=\"contact.html?suburb=Parkerville\">Parkerville</a>, <a href=\"contact.html?suburb=Chidlow\">Chidlow</a>.</p><p>See <a href=\"service-areas.html\">all six Perth service regions</a> for our wider coverage.</p></div></section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "faq",
"container": "\n<section class=\"section faq\"><div class=\"shell text-column regional-guide\"><h2>Perth Hills &amp; Swan Valley plumber and electrician FAQ</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Plumbing service scope</a></li><li><a href=\"electrical.html\">Electrical repairs and installation scope</a></li><li><a href=\"service-areas.html\">Check the listed Perth service areas</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details></div><!-- site-intent:end --><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#coverage\">Read related service coverage answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Does this regional guide include every rural or private system?",
"answer": "<p>Provide details of the equipment, proposed work and address so the team can confirm the appropriate service and availability before booking.</p>" as TrustedHtml
},
{
"question": "What should a Hills or Swan Valley repair request include?",
"answer": "<p>Include the property address, access details, service type and a concise description of the issue.</p>" as TrustedHtml
},
{
"question": "Safe electrical observations for Hills and Swan Valley properties",
"answer": "<p>Share observable changes and affected areas without opening equipment or approaching a hazard.</p>" as TrustedHtml
}
]
},
{
"id": "section-3",
"kind": "rich",
"html": "\n<section class=\"section electrical-work-gallery-section\"><div class=\"shell text-column\"><span class=\"eyebrow\">Electrical work examples</span><h2>Electrical switchboard, lighting and power-point work</h2><p>Company electrical work photographs illustrate installation and repair stages.  Contact {{ppp:shared:business.name:html}} to discuss the work at your property.</p></div><div class=\"shell\" data-electrical-work-gallery><div class=\"electrical-work-gallery\"><div class=\"electrical-work-gallery__heading\"><span class=\"eyebrow\">Real work imagery</span><h2>Electrical work examples</h2><p>Electrical switchboard, lighting and power-point work.</p></div><div class=\"electrical-work-gallery__grid\"><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-in-progress-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-in-progress-480.webp 480w, /images/electrical-work/kitchen-lighting-in-progress-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Kitchen ceiling with recessed lights being fitted\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Lighting work in progress.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-wide-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-wide-480.webp 480w, /images/electrical-work/kitchen-lighting-wide-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Wide view of a kitchen with recessed lights\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Kitchen lighting presentation.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/kitchen-lighting-finished-480.webp\" srcset=\"/images/electrical-work/kitchen-lighting-finished-480.webp 480w, /images/electrical-work/kitchen-lighting-finished-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Kitchen with illuminated recessed ceiling lights\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Kitchen lighting work</strong><span>Completed lighting presentation.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/cabinet-cabling-480.webp\" srcset=\"/images/electrical-work/cabinet-cabling-480.webp 480w, /images/electrical-work/cabinet-cabling-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Electrical cabinet with cabling and conduit\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Cabling work</strong><span>Cabling installation-stage work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/underground-electrical-conduit-480.webp\" srcset=\"/images/electrical-work/underground-electrical-conduit-480.webp 480w, /images/electrical-work/underground-electrical-conduit-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Underground trench with electrical conduit\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Conduit work</strong><span>Underground conduit installation-stage work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/renovation-rewiring-480.webp\" srcset=\"/images/electrical-work/renovation-rewiring-480.webp 480w, /images/electrical-work/renovation-rewiring-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Open renovation wall with electrical wiring\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Renovation wiring</strong><span>Electrical rough-in during renovation work.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/residential-switchboard-480.webp\" srcset=\"/images/electrical-work/residential-switchboard-480.webp 480w, /images/electrical-work/residential-switchboard-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Residential electrical switchboard with its cover open\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Switchboard work</strong><span>Residential switchboard work example.</span></figcaption></figure><figure class=\"electrical-work-gallery__card\"><img class=\"electrical-work-gallery__image\" src=\"/images/electrical-work/safety-switch-closeup-480.webp\" srcset=\"/images/electrical-work/safety-switch-closeup-480.webp 480w, /images/electrical-work/safety-switch-closeup-960.webp 960w\" sizes=\"(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw\" width=\"480\" height=\"360\" alt=\"Close-up of a safety switch and circuit breakers\" loading=\"lazy\" decoding=\"async\"><figcaption><strong>Safety-switch work</strong><span>Safety-switch work example.</span></figcaption></figure></div></div></div></section>" as TrustedHtml
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
"label": "Perth Hills & Swan Valley",
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
"chrome:header-965ba50d3525:72": ""
}
};
