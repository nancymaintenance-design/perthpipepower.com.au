import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "news.html",
"kind": "contentHub",
"seo": {
"title": "{{ppp:shared:business.name:raw}} News | Perth Property Maintenance",
"description": "Practical updates from {{ppp:shared:business.name:raw}} about contacting us, preparing service information and coordinating property access in Perth.",
"canonical": "{{ppp:shared:business.origin:raw}}/news.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/news.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/news.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/news.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/news.html#faq",
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
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"CollectionPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:0:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:0:0:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-1a4ce69823b1",
"mainAttributes": {
"id": "main"
},
"hero": "<section class=\"page-hero\"><div class=\"shell\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">Company updates</span><h1>{{ppp:shared:business.name:html}} news and updates</h1><p>Practical notes about sending clear property maintenance enquiries.</p></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "faq",
"container": "<section class=\"section\"><div class=\"shell cards\"><article class=\"card\"><span class=\"eyebrow\">Company update</span><h3>A clearer way to send a property maintenance enquiry</h3><p>Keep the address, problem, access and approval information in one place.</p><a href=\"news-clearer-property-maintenance-enquiry.html\">Read update →</a></article><article class=\"card\"><span class=\"eyebrow\">Company update</span><h3>Plumbing and electrical work-order essentials</h3><p>Use observable facts rather than an assumed diagnosis.</p><a href=\"news-useful-property-work-order.html\">Read update →</a></article><article class=\"card\"><span class=\"eyebrow\">Company update</span><h3>Keeping access information with the repair request</h3><p>Help avoid back-and-forth when a property needs attention.</p><a href=\"news-keeping-access-information-together.html\">Read update →</a></article></div><!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Property maintenance enquiries, access and work orders</h2><p>The enquiry note covers the first description. The work-order note records assessable tasks and approval limits. The access note keeps the visit arrangements current and private. For fault-specific explanations, use the insights guides instead; these company notes do not replace a technical inspection.</p><ul class=\"intent-links\"><li><a href=\"news-clearer-property-maintenance-enquiry.html\">Prepare the initial maintenance enquiry</a></li><li><a href=\"news-useful-property-work-order.html\">Define the work-order scope</a></li><li><a href=\"news-keeping-access-information-together.html\">Keep repair access information together</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Which note should a property manager start with?",
"answer": "<p>Start with the enquiry note when the fault is first reported. Use the work-order note when turning that report into an instruction, then the access note to confirm how the agreed visit will take place.</p>" as TrustedHtml
}
]
},
{
"id": "section-2",
"kind": "rich",
"html": "<section class=\"section\" data-content-hub><div class=\"shell text-column\"><h2>From a repair request to a clear work order</h2><p>These practical company notes explain how to describe a job, coordinate entry and record approval. Each note covers a different part of the booking process so owners and managers can keep the same property reference from first contact through to the agreed work.</p><h3>Start with the condition at the property</h3><p>Use the initial-enquiry note for the location, affected room and current symptom. Separate a reported fault from an improvement you want quoted, such as a new outlet or appliance connection. For the work itself, our <a href=\"plumbing.html\">plumbing service overview</a> and <a href=\"electrical.html\">electrical service overview</a> link to the relevant repair and installation pages.</p><h3>Keep access and approval distinct</h3><p>The access note covers entry to the property and equipment, the on-site contact and changed arrangements. The work-order note covers the requested tasks, decision-maker and approval boundaries. An occupant who provides access may not be authorised to approve additional repair costs. Keep private entry codes and keys out of public photos and pages.</p><p>For technical observations, use our <a href=\"insights.html\">plumbing and electrical guides</a>. For a rental, strata or other managed premises, see <a href=\"property-management.html\">property management maintenance</a>. When ready, <a href=\"contact.html\">send the request</a> with the address, current issue and contact details. The written quote confirms the property-specific work; a preparation checklist is not a diagnosis or a fixed-price package.</p></div></section>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "News",
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
