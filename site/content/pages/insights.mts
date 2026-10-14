import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "insights.html",
"kind": "contentHub",
"seo": {
"title": "Perth Plumbing & Electrical Guides | Ellis",
"description": "Practical guides for Perth property owners, tenants and managers covering plumbing and electrical warning signs, safety and maintenance planning.",
"canonical": "{{ppp:shared:business.origin:raw}}/insights.html",
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
"@type": "CollectionPage",
"@id": "{{ppp:shared:business.origin:raw}}/insights.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/insights.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/insights.html#breadcrumb",
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
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/insights.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:0:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:0:0:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"CollectionPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/insights.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:0:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:0:0:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-1a4ce69823b1",
"mainAttributes": {
"id": "main"
},
"hero": "<section class=\"page-hero\"><div class=\"shell\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">Practical property guides</span><h1>Plumbing and electrical insights</h1><p>Clear, safe information for Perth property owners, occupants and managers.</p></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "faq",
"container": "<section class=\"section\"><div class=\"shell cards\"><article class=\"card\"><span class=\"eyebrow\">Plumbing</span><h3>Plumbing leak observations before an inspection</h3><p>Gather useful observations without trying to identify the hidden cause.</p><a href=\"insights-reporting-a-plumbing-leak.html\">Read guide →</a></article><article class=\"card\"><span class=\"eyebrow\">Electrical</span><h3>Safety-switch trips and safe reporting</h3><p>Understand what to note and when to keep clear and seek help.</p><a href=\"insights-safety-switch-keeps-tripping.html\">Read guide →</a></article><article class=\"card\"><span class=\"eyebrow\">Managed properties</span><h3>A clear maintenance handover</h3><p>Keep access, safety and property details together as a request changes hands.</p><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Read guide →</a></article><article class=\"card\"><span class=\"eyebrow\">Hot water</span><h3>Hot-water symptoms and the relevant trade</h3><p>Frame a cross-trade symptom without opening or testing the unit.</p><a href=\"insights-hot-water-plumbing-or-electrical.html\">Read guide →</a></article></div><!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Read the question that matches your situation</h2><p>Choose the leak guide for water location and timing, the hot-water guide for plumbing-versus-electrical scope, or the recurring-trip guide for safe observations before an electrical assessment. The handover checklist is for tenants and managers coordinating the same repair. These guides explain decisions and preparation, not remote diagnoses or DIY instructions for regulated work.</p><ul class=\"intent-links\"><li><a href=\"insights-reporting-a-plumbing-leak.html\">How to report a plumbing leak</a></li><li><a href=\"insights-hot-water-plumbing-or-electrical.html\">Is the hot-water problem plumbing or electrical?</a></li><li><a href=\"insights-safety-switch-keeps-tripping.html\">A safety switch that keeps tripping</a></li><li><a href=\"insights-tenant-property-manager-maintenance-handover.html\">A clear tenant and property-manager handover</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Can a guide identify the faulty part at my property?",
"answer": "<p>No. Similar symptoms can have different causes. Use the guide to describe what you have observed safely, then arrange the appropriate assessment before deciding on a repair or replacement.</p>" as TrustedHtml
}
]
},
{
"id": "section-2",
"kind": "rich",
"html": "<section class=\"section\" data-content-hub><div class=\"shell text-column\"><h2>Find the guide for your property problem</h2><p>These guides help owners, occupants and property managers describe plumbing and electrical problems before arranging an assessment. They explain what information is useful, how inspection and repairs are scoped, and which decisions belong in the written quote. A symptom or photograph provides context; it does not establish the failed part.</p><h3>Leaks, hot water and recurring trips</h3><p>Use the leak guide to describe water spread, timing and access. The hot-water guide distinguishes a problem at one outlet from loss of hot water across a property. The safety-switch guide explains why a recurring trip needs assessment before a replacement is proposed. For booking and service scope, continue to <a href=\"water-leak-detection-perth.html\">water leak detection</a>, <a href=\"hot-water-problems-perth.html\">hot-water repairs</a> or <a href=\"safety-switch-tripping-perth.html\">safety switch and RCD repairs</a>.</p><h3>For tenants and property managers</h3><p>The maintenance handover guide separates the occupant report from access permission and work approval. Our <a href=\"property-management.html\">managed-property maintenance service</a> explains the service pathway, while the <a href=\"news.html\">work-order and access notes</a> help prepare a clear instruction.</p><p>You can contact Ellis with the location and observed issue before collecting a complete set of details. Photos are optional and should only be taken safely. For available service regions, use <a href=\"service-areas.html\">the Perth suburb directory</a>. To arrange an assessment, <a href=\"contact.html\">request a repair</a> with the current condition and access contact.</p></div></section>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Insights",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-d97673bf2d5f:0": "",
"chrome:header-d97673bf2d5f:1": "",
"chrome:header-d97673bf2d5f:2": "",
"chrome:header-d97673bf2d5f:3": "",
"chrome:header-d97673bf2d5f:4": "",
"chrome:header-d97673bf2d5f:5": "",
"chrome:header-d97673bf2d5f:6": "",
"chrome:header-d97673bf2d5f:7": "",
"chrome:header-d97673bf2d5f:8": "",
"chrome:header-d97673bf2d5f:9": "",
"chrome:header-d97673bf2d5f:10": "",
"chrome:header-d97673bf2d5f:11": "",
"chrome:header-d97673bf2d5f:12": "",
"chrome:header-d97673bf2d5f:13": "",
"chrome:header-d97673bf2d5f:14": "",
"chrome:header-d97673bf2d5f:15": "",
"chrome:header-d97673bf2d5f:16": "",
"chrome:header-d97673bf2d5f:17": "",
"chrome:header-d97673bf2d5f:18": "Plumbing",
"chrome:header-d97673bf2d5f:19": "",
"chrome:header-d97673bf2d5f:20": "",
"chrome:header-d97673bf2d5f:21": "",
"chrome:header-d97673bf2d5f:22": "",
"chrome:header-d97673bf2d5f:23": "",
"chrome:header-d97673bf2d5f:24": "",
"chrome:header-d97673bf2d5f:25": "",
"chrome:header-d97673bf2d5f:26": "",
"chrome:header-d97673bf2d5f:27": "",
"chrome:header-d97673bf2d5f:28": "",
"chrome:header-d97673bf2d5f:29": "",
"chrome:header-d97673bf2d5f:30": "",
"chrome:header-d97673bf2d5f:31": "",
"chrome:header-d97673bf2d5f:32": "",
"chrome:header-d97673bf2d5f:33": "",
"chrome:header-d97673bf2d5f:34": "",
"chrome:header-d97673bf2d5f:35": "",
"chrome:header-d97673bf2d5f:36": "",
"chrome:header-d97673bf2d5f:37": "",
"chrome:header-d97673bf2d5f:38": "Active water, failed pipes and urgent plumbing concerns.",
"chrome:header-d97673bf2d5f:39": "",
"chrome:header-d97673bf2d5f:40": "",
"chrome:header-d97673bf2d5f:41": "",
"chrome:header-d97673bf2d5f:42": "",
"chrome:header-d97673bf2d5f:43": "",
"chrome:header-d97673bf2d5f:44": "",
"chrome:header-d97673bf2d5f:45": "",
"chrome:header-d97673bf2d5f:46": "",
"chrome:header-d97673bf2d5f:47": "",
"chrome:header-d97673bf2d5f:48": "",
"chrome:header-d97673bf2d5f:49": "",
"chrome:header-d97673bf2d5f:50": "",
"chrome:header-d97673bf2d5f:51": "",
"chrome:header-d97673bf2d5f:52": "",
"chrome:header-d97673bf2d5f:53": "",
"chrome:header-d97673bf2d5f:54": "",
"chrome:header-d97673bf2d5f:55": "",
"chrome:header-d97673bf2d5f:56": "",
"chrome:header-d97673bf2d5f:57": "",
"chrome:header-d97673bf2d5f:58": "",
"chrome:header-d97673bf2d5f:59": "",
"chrome:header-d97673bf2d5f:60": "",
"chrome:header-d97673bf2d5f:61": "",
"chrome:header-d97673bf2d5f:62": "",
"chrome:header-d97673bf2d5f:63": "",
"chrome:header-d97673bf2d5f:64": "",
"chrome:header-d97673bf2d5f:65": "",
"chrome:header-d97673bf2d5f:66": "",
"chrome:header-d97673bf2d5f:67": "",
"chrome:header-d97673bf2d5f:68": "",
"chrome:header-d97673bf2d5f:69": "",
"chrome:header-d97673bf2d5f:70": "",
"chrome:header-d97673bf2d5f:71": "",
"chrome:header-d97673bf2d5f:72": "",
"chrome:header-d97673bf2d5f:73": "",
"chrome:header-d97673bf2d5f:74": "",
"chrome:header-d97673bf2d5f:75": "",
"chrome:header-d97673bf2d5f:76": "",
"chrome:header-d97673bf2d5f:77": "",
"chrome:header-d97673bf2d5f:78": "Electrical",
"chrome:header-d97673bf2d5f:79": "",
"chrome:header-d97673bf2d5f:80": "",
"chrome:header-d97673bf2d5f:81": "",
"chrome:header-d97673bf2d5f:82": "",
"chrome:header-d97673bf2d5f:83": "",
"chrome:header-d97673bf2d5f:84": "",
"chrome:header-d97673bf2d5f:85": "",
"chrome:header-d97673bf2d5f:86": "",
"chrome:header-d97673bf2d5f:87": "",
"chrome:header-d97673bf2d5f:88": "",
"chrome:header-d97673bf2d5f:89": "",
"chrome:header-d97673bf2d5f:90": "",
"chrome:header-d97673bf2d5f:91": "",
"chrome:header-d97673bf2d5f:92": "",
"chrome:header-d97673bf2d5f:93": "",
"chrome:header-d97673bf2d5f:94": "",
"chrome:header-d97673bf2d5f:95": "",
"chrome:header-d97673bf2d5f:96": "",
"chrome:header-d97673bf2d5f:97": "",
"chrome:header-d97673bf2d5f:98": "",
"chrome:header-d97673bf2d5f:99": "",
"chrome:header-d97673bf2d5f:100": "",
"chrome:header-d97673bf2d5f:101": "",
"chrome:header-d97673bf2d5f:102": "",
"chrome:header-d97673bf2d5f:103": "",
"chrome:header-d97673bf2d5f:104": "",
"chrome:header-d97673bf2d5f:105": "",
"chrome:header-d97673bf2d5f:106": "",
"chrome:header-d97673bf2d5f:107": "",
"chrome:header-d97673bf2d5f:108": "",
"chrome:header-d97673bf2d5f:109": "",
"chrome:header-d97673bf2d5f:110": "",
"chrome:header-d97673bf2d5f:111": "",
"chrome:header-d97673bf2d5f:112": "",
"chrome:header-d97673bf2d5f:113": "",
"chrome:header-d97673bf2d5f:114": "Faults, beeping and property-maintenance requests.",
"chrome:header-d97673bf2d5f:115": "",
"chrome:header-d97673bf2d5f:116": "",
"chrome:header-d97673bf2d5f:117": "",
"chrome:header-d97673bf2d5f:118": "",
"chrome:header-d97673bf2d5f:119": "",
"chrome:header-d97673bf2d5f:120": "",
"chrome:header-d97673bf2d5f:121": "",
"chrome:header-d97673bf2d5f:122": "",
"chrome:header-d97673bf2d5f:123": "",
"chrome:header-d97673bf2d5f:124": "",
"chrome:header-d97673bf2d5f:125": "",
"chrome:header-d97673bf2d5f:126": "",
"chrome:header-d97673bf2d5f:127": "",
"chrome:header-d97673bf2d5f:128": "",
"chrome:header-d97673bf2d5f:129": "",
"chrome:header-d97673bf2d5f:130": "",
"chrome:header-d97673bf2d5f:131": "",
"chrome:header-d97673bf2d5f:132": "",
"chrome:header-d97673bf2d5f:133": "",
"chrome:header-d97673bf2d5f:134": "",
"chrome:header-d97673bf2d5f:135": "",
"chrome:header-d97673bf2d5f:136": "",
"chrome:header-d97673bf2d5f:137": "",
"chrome:header-d97673bf2d5f:138": "contact.html",
"chrome:header-d97673bf2d5f:139": "",
"chrome:header-d97673bf2d5f:140": "",
"chrome:header-d97673bf2d5f:141": "",
"chrome:header-d97673bf2d5f:142": "",
"chrome:header-d97673bf2d5f:143": "",
"chrome:header-d97673bf2d5f:144": ""
}
};
