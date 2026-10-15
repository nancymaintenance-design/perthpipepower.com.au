import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "rcd-testing-perth.html",
"kind": "service",
"seo": {
"title": "RCD Testing & Safety Switch Checks Perth | Ellis",
"description": "RCD testing and safety switch checks in Perth. Agree the devices, checks and records, with repair or broader inspection work scoped separately.",
"canonical": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html#breadcrumb",
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
"name": "Electrical",
"item": "{{ppp:shared:business.origin:raw}}/electrical.html"
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
"@id": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html#service",
"url": "{{ppp:seo-value:canonical:raw}}",
"name": "{{ppp:h1-value:raw}}",
"description": "{{ppp:seo-value:description:raw}}",
"serviceType": "{{ppp:h1-value:raw}}",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html#webpage"
},
"areaServed": {
"@type": "City",
"name": "Perth"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/rcd-testing-perth.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:3:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:3:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:3:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:3:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/rcd-testing-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/rcd-testing-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/rcd-testing-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Electrical\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/electrical.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/rcd-testing-perth.html#service\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/rcd-testing-perth.html#webpage\"\n      },\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/rcd-testing-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:3:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:3:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:3:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:3:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-6b66a04a69f6",
"mainAttributes": {
"id": "main",
"data-expanded-service": ""
},
"hero": "\n<section class=\"page-hero\"><div class=\"shell service-reading\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">{{ppp:shared:business.name:html}} · Perth</span><h1>RCD Testing &amp; Safety Switch Checks Perth</h1><aside class=\"intent-safety\" data-intent-safety><p><strong>Electrical danger comes before booking.</strong> For a shock or tingling tap, keep clear and call <a href=\"tel:131351\">Western Power 13 13 51</a>. For a life-threatening emergency or fire, call <a href=\"tel:000\">000</a>. <a href=\"https://www.westernpower.com.au/issues-enquiries/reporting-incidents-and-emergencies/\" target=\"_blank\" rel=\"noopener noreferrer\">Official emergency guidance</a>. For loss of supply, check <a href=\"https://www.westernpower.com.au/issues-enquiries/reporting-issues\" target=\"_blank\" rel=\"noopener noreferrer\">Western Power outage reporting</a> before assuming an internal circuit fault.</p></aside><p class=\"expanded-lead\">RCD testing and safety switch checks in Perth for homes, rentals and managed properties. We agree which devices and checks are required, explain the findings and quote separately for any repair or additional work.</p><p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=rcd-testing-perth.html\">Arrange a visit &amp; quote</a></p><p class=\"expanded-hours\">{{ppp:shared:hours.text:html}}</p><nav aria-label=\"On this page\" class=\"expanded-toc\"><a href=\"#service-scope\">Service scope</a><a href=\"#service-scenarios\">Common situations</a><a href=\"#service-quote\">Process &amp; quote</a><a href=\"#service-faq\">FAQs</a></nav></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section\"><div class=\"shell service-reading\"><h2 id=\"service-scope\">RCD testing: service scope</h2><ul><li>Carry out the agreed RCD or safety switch checks and testing.</li><li>Confirm the devices covered, interruptions and the findings or record needed for the job.</li><li>Coordinate smoke alarm checks where included in the agreed appointment.</li><li>Repair, replacement, additional protection and whole-property safety inspection are separate scopes; no universal certificate is promised.</li></ul><ul class=\"intent-links\"><li><a href=\"electrical.html\">Perth electrical services</a></li><li><a href=\"safety-switch-tripping-perth.html\">A switch that trips or will not reset</a></li><li><a href=\"smoke-alarm-maintenance-perth.html\">Smoke alarm checks and replacement</a></li><li><a href=\"switchboard-upgrades-perth.html\">Switchboard protection and upgrades</a></li><li><a href=\"property-management.html\">Managed-property testing requests</a></li><li><a href=\"service-areas.html\">Perth service regions</a></li></ul></div></section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "\n<section class=\"section expanded-scenarios\"><div class=\"shell service-reading\"><h2 id=\"service-scenarios\">RCD testing, safety switches and property check records</h2><div class=\"expanded-scenario\"><h3>Preparing a rental for new occupants</h3><p>An agent requests RCD and smoke alarm checks during the same visit. Provide the property, access contact and requested checks. We coordinate the work and confirm the record required; an RCD check is not a blanket declaration about every electrical item in the property.</p></div><div class=\"expanded-scenario\"><h3>A safety switch does not behave as expected</h3><p>A device that repeatedly trips or will not reset needs fault assessment, not just a routine testing appointment. Report the symptom when calling so investigation and any repair are scoped appropriately. Do not bypass protection to keep equipment running.</p></div></div></section>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "\n<section class=\"section\"><div class=\"shell service-reading\"><h2 id=\"service-quote\">RCD testing scope, interruptions and records</h2><p>Scheduled RCD testing starts with the devices and areas to be covered. We agree access and any power interruption with the property contact before the checks. Tell us whether the request is routine testing or a device that has tripped or failed to respond, because investigation of a reported fault is a different scope.</p><p>The quote identifies the checks, devices and findings or record required. Repair, replacement and additional protection are agreed separately if the assessment identifies further work. For a managed property, specify the agency reference and requested record when booking. Testing selected devices is not automatically a whole-property electrical inspection or a universal compliance certificate.</p><p>Published guide ranges cover standard-hours, standard-scope work. Your written quote confirms attendance, investigation, materials and the agreed work. Emergency repair charges follow the quoted plan.</p><p>For the distinction between protection devices and applicable requirements, see <a href=\"https://www.wa.gov.au/government/multi-step-guides/electrical-safety-home/rcd-safety-switches\">WA RCD safety switch guidance</a>. Confirm the requirements for your property and the checks being commissioned.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>RCD Testing &amp; Safety Switch Checks service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><ul class=\"intent-links\"><li><a href=\"electrical.html\">Perth electrical services</a></li><li><a href=\"safety-switch-tripping-perth.html\">A switch that trips or will not reset</a></li><li><a href=\"smoke-alarm-maintenance-perth.html\">Smoke alarm checks and replacement</a></li><li><a href=\"switchboard-upgrades-perth.html\">Switchboard protection and upgrades</a></li><li><a href=\"property-management.html\">Managed-property testing requests</a></li></ul></div><!-- site-intent:end --><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#electrical\">Read related electrical answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "What is the difference between an RCD and a circuit breaker?",
"answer": "<p>An RCD detects an imbalance associated with current leaking from the intended path. A circuit breaker protects against overload or short circuit. A combined device can provide both functions; the devices are not interchangeable terms.</p>" as TrustedHtml
},
{
"question": "Does a tripping safety switch mean the switch itself is faulty?",
"answer": "<p>No. A trip may indicate a fault in a circuit or connected equipment. The device and installation need assessment before deciding whether the switch, wiring or other equipment requires repair.</p>" as TrustedHtml
},
{
"question": "Combined smoke-alarm and RCD checks",
"answer": "<p>Smoke alarms and RCDs can be arranged within an agreed visit. State the checks and records required so the scope, access, interruptions and price are confirmed together.</p>" as TrustedHtml
},
{
"question": "RCD test records and broader property assessment",
"answer": "<p>The record relates to the agreed devices and checks. Confirm the required documentation and any broader inspection separately rather than assuming an RCD test certifies the entire property.</p>" as TrustedHtml
}
]
},
{
"id": "section-5",
"kind": "rich",
"html": "\n<section class=\"section contact-band\"><div class=\"shell service-reading\"><h2>Arrange rcd testing &amp; safety switch checks</h2><p>Send the property location, a brief description, proposed product details where relevant, access contact and approval requirements. For a rental, coordinate the request with the owner or managing agent. The appointment and work are agreed with you rather than reserved by submitting a form.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=rcd-testing-perth.html\">Request an assessment &amp; written quote</a><ul class=\"intent-links\"><li><a href=\"property-management.html\">Property-manager approvals and access</a></li><li><a href=\"faq.html\">Booking and quotation FAQs</a></li><li><a href=\"about.html\">About {{ppp:shared:business.name:html}}</a></li></ul></div></section>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Electrical",
"href": "electrical.html"
},
{
"label": "RCD Testing & Safety Switch Checks Perth",
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
"chrome:header-965ba50d3525:71": "contact.html?service=rcd-testing-perth.html",
"chrome:header-965ba50d3525:72": ""
}
};
