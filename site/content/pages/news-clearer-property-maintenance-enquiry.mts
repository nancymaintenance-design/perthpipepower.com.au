import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "news-clearer-property-maintenance-enquiry.html",
"kind": "article",
"seo": {
"title": "How to Write a Maintenance Enquiry | Ellis Perth",
"description": "Prepare a clear Perth plumbing or electrical enquiry: property location, current symptoms, access and approval details, without needing a diagnosis or photos.",
"canonical": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html#breadcrumb",
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
"name": "News",
"item": "{{ppp:shared:business.origin:raw}}/news.html"
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
"@id": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html#article",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html#webpage"
},
"dateModified": "2026-10-10",
"abstract": "{{ppp:summary-value:raw}}"
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/news-clearer-property-maintenance-enquiry.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:9:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-clearer-property-maintenance-enquiry.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news-clearer-property-maintenance-enquiry.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-clearer-property-maintenance-enquiry.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"News\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/news.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Article\",\n      \"headline\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"author\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-clearer-property-maintenance-enquiry.html#article\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news-clearer-property-maintenance-enquiry.html#webpage\"\n      },\n      \"dateModified\": \"2026-10-10\",\n      \"abstract\": \"{{ppp:summary-value:json}}\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-clearer-property-maintenance-enquiry.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
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
"html": "<header class=\"article-header\"><span class=\"eyebrow\">Company update</span><h1>A clearer way to send a property maintenance enquiry</h1></header>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "<p class=\"article-meta\" data-editorial-meta>By <a href=\"about.html\">{{ppp:shared:business.name:html}}</a> · Updated <time datetime=\"2026-10-10\">10 October 2026</time></p>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "<aside class=\"article-summary\" data-editorial-summary><h2>At a glance</h2><p>Begin with the property location, affected room and current symptom. You can request an assessment without diagnosing the fault or collecting photos. Explain whether you need a repair or a planned installation. Ellis uses the reported work and access arrangements to plan the assessment and confirm the proposed work in a written quote.</p></aside>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "<nav class=\"article-toc\" aria-label=\"In this guide\"><h2>In this guide</h2><ul><li><a href=\"#guide-1\">Property location and current repair symptoms</a></li><li><a href=\"#guide-2\">Plumbing and electrical service choices</a></li><li><a href=\"#guide-3\">State the current condition and property location</a></li><li><a href=\"#guide-4\">On-site assessment and written quotation</a></li><li><a href=\"#guide-5\">Maintenance enquiry questions</a></li></ul></nav>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "<p>Useful maintenance information keeps the property address, observable issue, current status, access arrangements and approval contact together. It reduces the chance that an important detail is separated from the request.</p>" as TrustedHtml
},
{
"id": "guide-1",
"kind": "rich",
"html": "<h2 id=\"guide-1\">Property location and current repair symptoms</h2>" as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "<p>Describe what is happening rather than assuming a cause. Include when it began, whether it is changing, and whether there is an immediate safety concern. Property managers can add the work-order reference and nominated decision-maker.</p>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "<div data-seo-guide-expansion><h2 id=\"guide-2\">Plumbing and electrical service choices</h2><p>You can request service from an observed problem: a backed-up sink, visible water, loss of hot water or lights that have stopped working. Start with the affected area and what changed. You do not need to know which part has failed or which repair method will be used.</p><p>Choose <a href=\"blocked-drains-perth.html\">blocked drain clearing</a> for drainage backing up, <a href=\"water-leak-detection-perth.html\">water leak detection</a> for unexplained moisture or leaking pipework, or <a href=\"power-faults-perth.html\">electrical fault finding</a> for reported power faults. If the issue spans plumbing and electrical equipment, describe both observations so the relevant trades can be considered.</p><h2 id=\"guide-3\">State the current condition and property location</h2><p>Include the suburb or address, affected room and when the issue started. Say whether water is still flowing, whether a fault is recurring or whether the service has stopped completely. These details help define the assessment request without requiring an occupant to test equipment.</p><p>For a planned installation, explain what you want connected or changed and where it will be used. Do not describe an appliance connection or new lighting location as a fault if it is an improvement request. This helps distinguish investigation from installation when the work is quoted.</p><h2 id=\"guide-4\">On-site assessment and written quotation</h2><p>Our local team reviews the reported work, confirms the relevant access contact and arranges the on-site assessment. The findings determine the proposed repair or installation scope. You receive a written quote for the agreed work, with additional requirements explained before they proceed.</p><p>This page is about making the initial request. Managers preparing a formal instruction can use our <a href=\"news-useful-property-work-order.html\">work-order guide</a>; entry details belong in the <a href=\"news-keeping-access-information-together.html\">access checklist</a>. <a href=\"contact.html\">Request your Perth service assessment</a> or call <a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a>. For immediate danger, move to safety and call 000.</p><p><a class=\"button\" href=\"contact.html\">Arrange an on-site assessment &amp; written quote</a></p></div>" as TrustedHtml
},
{
"id": "section-9",
"kind": "faq",
"container": "<!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h2 id=\"guide-5\">Maintenance enquiry questions</h2><ul class=\"intent-links\"><li><a href=\"contact.html\">Send the initial repair enquiry</a></li><li><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Hand over an occupant report</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div>" as TrustedHtml,
"items": [
{
"question": "Can I send an enquiry before I have all the equipment details?",
"answer": "<p>Yes. Start with the address, current symptom and contact. Say which details are not yet available. Do not dismantle equipment or delay appropriate emergency action to complete a checklist.</p>" as TrustedHtml
},
{
"question": "Should the first message name the part I want replaced?",
"answer": "<p>Only if it is a planned installation or an existing confirmed instruction. For an unexplained fault, describe the observation so the assessment is not limited by an unsupported diagnosis.</p>" as TrustedHtml
}
]
},
{
"id": "main-trailing-space",
"kind": "rich",
"html": "<!-- site-intent:end -->" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "News",
"href": "news.html"
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / <a href=\"{{ppp:breadcrumb:1:href}}\">{{ppp:breadcrumb:1:label}}</a></p>" as TrustedHtml,
"chromeBindings": {}
};
