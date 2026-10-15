import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "news-keeping-access-information-together.html",
"kind": "article",
"seo": {
"title": "Repair Visit Access Checklist | Ellis Perth",
"description": "Keep repair access details, occupant contacts and changed arrangements with the work request. Practical privacy-aware preparation for Perth maintenance visits.",
"canonical": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html#article",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html#webpage"
},
"dateModified": "2026-10-10",
"abstract": "{{ppp:summary-value:raw}}"
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/news-keeping-access-information-together.html#faq",
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
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-keeping-access-information-together.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news-keeping-access-information-together.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-keeping-access-information-together.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"News\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/news.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Article\",\n      \"headline\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"author\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-keeping-access-information-together.html#article\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/news-keeping-access-information-together.html#webpage\"\n      },\n      \"dateModified\": \"2026-10-10\",\n      \"abstract\": \"{{ppp:summary-value:json}}\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/news-keeping-access-information-together.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:10:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:10:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:10:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:10:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
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
"html": "<header class=\"article-header\"><span class=\"eyebrow\">Company update</span><h1>Keeping access information with the repair request</h1></header>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "<p class=\"article-meta\" data-editorial-meta>By <a href=\"about.html\">{{ppp:shared:business.name:html}}</a> · Updated <time datetime=\"2026-10-10\">10 October 2026</time></p>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "<aside class=\"article-summary\" data-editorial-summary><h2>At a glance</h2><p>Confirm access to the equipment as well as entry to the property. Provide the current on-site contact, agreed entry arrangements and any restricted areas. Keep changes with the booking record. Share sensitive access information through an agreed private channel, and identify the separate contact authorised to approve repair costs.</p></aside>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "<nav class=\"article-toc\" aria-label=\"In this guide\"><h2>In this guide</h2><ul><li><a href=\"#guide-1\">Access contacts and private entry information</a></li><li><a href=\"#guide-2\">Property entry and equipment access</a></li><li><a href=\"#guide-3\">On-site contacts and changed entry arrangements</a></li><li><a href=\"#guide-4\">Private access information for repair visits</a></li><li><a href=\"#guide-5\">Repair-visit access questions</a></li></ul></nav>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "<p>Property access can influence how a maintenance enquiry is coordinated. Include the on-site contact, notice requirements, building-entry information, parking notes and any relevant strata or building-management detail with the issue description.</p>" as TrustedHtml
},
{
"id": "guide-1",
"kind": "rich",
"html": "<h2 id=\"guide-1\">Access contacts and private entry information</h2>" as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "<p>Avoid including unnecessary sensitive information. Access codes and occupant information should be shared through an appropriate channel and only for the service request.</p>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "<p>When the scope or access arrangements change, update the same request record so people are working from the current information.</p>" as TrustedHtml
},
{
"id": "section-9",
"kind": "rich",
"html": "<div data-seo-guide-expansion><h2 id=\"guide-2\">Property entry and equipment access</h2><p>Access to the front door is not always access to the installation. A hot-water unit may be behind a locked gate, a fixture may be inside an occupied room and a shared equipment area may need building-management coordination. Tell the service team which relevant spaces can be reached and who will provide entry.</p><p>For apartments, include the unit and building reference, concierge or lift arrangements and practical parking instructions. For other premises, provide gate or site-contact arrangements. Do not enter a hazardous or restricted area to check access; advise us of the restriction so the visit can be planned.</p><h2 id=\"guide-3\">On-site contacts and changed entry arrangements</h2><p>Identify the person who can answer the door or coordinate the visit, and who should be contacted if the agreed entry arrangements change. Keep the current access window and instructions with the same booking record rather than scattering updates across unrelated messages.</p><p>Access permission and repair-cost approval are separate matters. An occupant who provides entry may not be authorised to approve extra work. Use our <a href=\"news-useful-property-work-order.html\">work-order approval guide</a> to record the decision-maker alongside the repair scope.</p><h2 id=\"guide-4\">Private access information for repair visits</h2><p>Share only the personal and access information necessary for the service visit. Do not publish keys, entry codes, occupant schedules or identity documents on a public page or photograph. Ask the service contact which private channel is appropriate for sensitive entry instructions.</p><p>You can begin with the address and fault description even if access is still being arranged. Our <a href=\"property-management.html\">Perth property maintenance service</a> coordinates the relevant contact and approved scope. For a <a href=\"hot-water-problems-perth.html\">hot-water repair</a> or <a href=\"fixtures-appliances-perth.html\">fixture connection</a>, mention the equipment location as well as the property entry arrangements.</p><p><a class=\"button\" href=\"contact.html\">Arrange an on-site assessment &amp; written quote</a></p></div>" as TrustedHtml
},
{
"id": "section-10",
"kind": "faq",
"container": "<!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h2 id=\"guide-5\">Repair-visit access questions</h2><ul class=\"intent-links\"><li><a href=\"news-useful-property-work-order.html\">Keep approval with the work order</a></li><li><a href=\"property-management.html\">Coordinate a managed-property visit</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div>" as TrustedHtml,
"items": [
{
"question": "What if the occupant cannot attend the agreed visit?",
"answer": "<p>Contact the team to update access arrangements rather than assuming the original instruction remains workable. Confirm who will provide entry and whether access to the actual equipment is available.</p>" as TrustedHtml
},
{
"question": "Should I put alarm codes or keys in the enquiry form?",
"answer": "<p>Do not include unnecessary sensitive entry information in a general enquiry. Confirm with the team how any required private access details will be shared for the agreed visit.</p>" as TrustedHtml
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
