import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "news-useful-property-work-order.html",
"kind": "article",
"seo": {
"title": "Plumbing & Electrical Work Order Checklist | Ellis Perth",
"description": "A practical repair work-order checklist: assessable tasks, property references, access and approval limits for Perth property managers and owners.",
"canonical": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html#article",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html#webpage"
},
"dateModified": "2026-10-10",
"abstract": "{{ppp:summary-value:raw}}"
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/news-useful-property-work-order.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:10:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:10:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:10:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:10:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-useful-property-work-order.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news-useful-property-work-order.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-useful-property-work-order.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"News\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/news.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Article\",\n      \"headline\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"author\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-useful-property-work-order.html#article\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news-useful-property-work-order.html#webpage\"\n      },\n      \"dateModified\": \"2026-10-10\",\n      \"abstract\": \"{{ppp:summary-value:json}}\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-useful-property-work-order.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:10:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:10:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:10:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:10:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
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
"html": "<header class=\"article-header\"><span class=\"eyebrow\">Company update</span><h1>What makes a useful plumbing or electrical work order</h1></header>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "<p class=\"article-meta\" data-editorial-meta>By <a href=\"about.html\">{{ppp:shared:business.name:html}}</a> · Updated <time datetime=\"2026-10-10\">10 October 2026</time></p>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "<aside class=\"article-summary\" data-editorial-summary><h2>At a glance</h2><p>List each room, fixture and observed problem separately. Identify who may approve the visit, repairs and additional findings. Ask the quote to distinguish investigation, repair and related access work. Close the record with what was actually completed and any follow-up recommendations; an inspection or recommendation is not a completed repair.</p></aside>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "<nav class=\"article-toc\" aria-label=\"In this guide\"><h2>In this guide</h2><ul><li><a href=\"#guide-1\">Keep three details together</a></li><li><a href=\"#guide-2\">Describe an assessable task, not an assumed repair</a></li><li><a href=\"#guide-3\">Make approval boundaries explicit</a></li><li><a href=\"#guide-4\">Close the work order with the actual outcome</a></li><li><a href=\"#guide-5\">Separate assessment authority from repair authority</a></li></ul></nav>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "<p>A useful work order identifies the property and describes the observable symptom. It does not need to prescribe the repair.</p>" as TrustedHtml
},
{
"id": "guide-1",
"kind": "rich",
"html": "<h2 id=\"guide-1\">Keep three details together</h2>" as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "<p>Under “issue”, record the room, fixture or circuit, the start time and current status. Under “access”, record the occupant or site contact and relevant building instructions. Under “approval”, record the work-order reference and nominated decision-maker.</p>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "<p>This structure is useful for a leaking fixture, a slow drain, a tripping circuit or failed lighting because it separates facts from assumptions.</p>" as TrustedHtml
},
{
"id": "section-9",
"kind": "rich",
"html": "<div data-seo-guide-expansion><h2 id=\"guide-2\">Describe an assessable task, not an assumed repair</h2><p>Write “kitchen sink drains slowly and backs up during use” rather than instructing a pipe replacement without inspection. Write “bedroom outlets lost power” rather than directing a switchboard replacement from an occupant report. The work order should give the service team an investigation goal while preserving the original observations.</p><p>For multiple tasks, record each room, fixture and reported behaviour on its own line. Separate plumbing from electrical items and distinguish faults from planned installation. This prevents a repair quote being mistaken for approval to complete every improvement mentioned in an email.</p><h2 id=\"guide-3\">Make approval boundaries explicit</h2><p>Identify who can approve the visit, the proposed repair and additional findings. If the owner or manager has an internal approval limit, record it with the work order and explain how further approval can be obtained. An internal limit is not itself a quoted service price.</p><p>The written quote should describe inspection, repair or installation tasks and what is excluded. For concealed plumbing, access openings and surface restoration need their own scope. For electrical work, investigation and any new wiring or replacement equipment should be distinguishable. See <a href=\"water-leak-detection-perth.html\">leak detection and repair scope</a> and <a href=\"power-faults-perth.html\">electrical fault assessment</a> for service examples.</p><h2 id=\"guide-4\">Close the work order with the actual outcome</h2><p>Keep the approved quote, work performed and separate follow-up items with the property reference. A recommendation is not a completed task; an inspection is not proof that every related issue was repaired. Make those distinctions clear in the completion record.</p><p>For entry arrangements, use the separate <a href=\"news-keeping-access-information-together.html\">access information checklist</a>. For the occupant-to-manager report, use our <a href=\"insights-tenant-property-manager-maintenance-handover.html\">maintenance handover guide</a>. Send the work order through our <a href=\"property-management.html\">managed-property repair service</a> when you want an on-site assessment and written quote.</p><p>Photos are optional: email safely taken photos to <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>. You can contact us without photos.</p><p><a class=\"button\" href=\"contact.html\">Arrange an on-site assessment &amp; written quote</a></p></div>" as TrustedHtml
},
{
"id": "section-10",
"kind": "faq",
"container": "<!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h2 id=\"guide-5\">Separate assessment authority from repair authority</h2><p>A work order should identify the assessable task, property reference, access contact and approval boundary. A spending limit is not a technical diagnosis or permission to substitute any product. If a different repair is recommended, keep the findings, proposed scope and decision together under the same reference.</p><ul class=\"intent-links\"><li><a href=\"property-management.html\">Managed-property work and approval</a></li><li><a href=\"news-keeping-access-information-together.html\">Confirm access for the agreed instruction</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div>" as TrustedHtml,
"items": [
{
"question": "Is a spending limit enough to define a work order?",
"answer": "<p>No. State the requested assessment or work, the property, any exclusions and who can approve changes. A limit alone does not explain which task is authorised.</p>" as TrustedHtml
},
{
"question": "What should happen if the assessment changes the proposed repair?",
"answer": "<p>Record the finding and revised scope against the same work-order reference. Follow the nominated approval pathway before assuming that the original instruction covers additional or different work.</p>" as TrustedHtml
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
"chromeBindings": {

}
};
