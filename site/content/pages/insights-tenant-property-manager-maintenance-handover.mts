import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "insights-tenant-property-manager-maintenance-handover.html",
"kind": "article",
"seo": {
"title": "Property Maintenance Handover Checklist | Perth",
"description": "A tenant-to-manager maintenance handover for Perth properties: record symptoms, changes and approval responsibility without asking occupants to diagnose faults.",
"canonical": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html#article",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html#webpage"
},
"dateModified": "2026-10-10",
"abstract": "{{ppp:summary-value:raw}}"
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/insights-tenant-property-manager-maintenance-handover.html#faq",
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
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-tenant-property-manager-maintenance-handover.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/insights-tenant-property-manager-maintenance-handover.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-tenant-property-manager-maintenance-handover.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Insights\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/insights.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Article\",\n      \"headline\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"author\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-tenant-property-manager-maintenance-handover.html#article\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/insights-tenant-property-manager-maintenance-handover.html#webpage\"\n      },\n      \"dateModified\": \"2026-10-10\",\n      \"abstract\": \"{{ppp:summary-value:json}}\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/insights-tenant-property-manager-maintenance-handover.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:10:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:10:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:10:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:10:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
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
"html": "<header class=\"article-header\"><span class=\"eyebrow\">Managed properties</span><h1>A clear maintenance handover between tenants and property managers</h1></header>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "<p class=\"article-meta\" data-editorial-meta>By <a href=\"about.html\">{{ppp:shared:business.name:html}}</a> · Updated <time datetime=\"2026-10-10\">10 October 2026</time></p>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "<aside class=\"article-summary\" data-editorial-summary><h2>At a glance</h2><p>Keep the occupant’s original observations with the property reference, access contact and authorised decision-maker. Update the record if the condition changes. Entry permission and approval of repair costs are separate responsibilities. Keep the agreed quote, completed work and outstanding recommendations together so the next person receives a clear handover.</p></aside>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "<nav class=\"article-toc\" aria-label=\"In this guide\"><h2>In this guide</h2><ul><li><a href=\"#guide-1\">Use this checklist</a></li><li><a href=\"#guide-2\">Keep the original occupant report separate from the repair instruction</a></li><li><a href=\"#guide-3\">Update the condition when it changes</a></li><li><a href=\"#guide-4\">Separate handover, access and work approval</a></li><li><a href=\"#guide-5\">A short handover that keeps the roles separate</a></li></ul></nav>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "<p>Maintenance requests can lose important detail when they pass from an occupant to a property manager and then to a service contact. A short structured handover keeps observable facts together.</p>" as TrustedHtml
},
{
"id": "guide-1",
"kind": "rich",
"html": "<h2 id=\"guide-1\">Use this checklist</h2>" as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "<ol><li>Property address and unit number</li><li>Occupant’s description in their own words</li><li>Affected room, fixture or circuit</li><li>When it began and whether it is worsening</li><li>Safe action already taken</li><li>Photos taken safely</li><li>Availability, access, pets, parking or induction details</li><li>Work-order reference and approval pathway</li><li>Shared service or strata information</li></ol>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "<p>Keep updates in the same email thread or work-order record where practical. If a slow drip becomes an active flow, state the new condition and time clearly.</p>" as TrustedHtml
},
{
"id": "section-9",
"kind": "rich",
"html": "<div data-seo-guide-expansion><h2 id=\"guide-2\">Keep the original occupant report separate from the repair instruction</h2><p>A tenant may report a wet cupboard, a toilet that keeps running or lights that have stopped working. Preserve those observations in the handover. Do not rewrite them as an established broken pipe or failed circuit before assessment. The original symptom, affected room and timing help the service team investigate the correct item.</p><p>The manager then adds the property reference, authorised contact and access arrangements. This creates a traceable path from the occupant report to the approved work without asking the occupant to decide the technical repair or approve costs on behalf of the owner.</p><h2 id=\"guide-3\">Update the condition when it changes</h2><p>If a stable drip becomes continuing flow, or one affected fixture becomes several, send an update with the time and current condition. An appointment based on the first report should not continue to describe a minor symptom when the situation has materially changed.</p><p>Report hazards promptly using the property maintenance process. Do not delay contact while collecting a complete set of photos or documents. Keep clear of electrical equipment in contact with water; for immediate danger, move to safety and call 000.</p><h2 id=\"guide-4\">Separate handover, access and work approval</h2><p>This handover guide concerns passing the report between people. Use our <a href=\"news-keeping-access-information-together.html\">repair-visit access checklist</a> for practical entry arrangements and our <a href=\"news-useful-property-work-order.html\">plumbing and electrical work-order guide</a> for the tasks and approval scope.</p><p>When the request is ready for assessment, our <a href=\"property-management.html\">Perth property management maintenance service</a> coordinates the nominated contact, reported issues and agreed quote. Keep the work completed and any further recommendation with the same property record so the next request does not rely on an incomplete handover.</p><p>Photos are optional: email safely taken photos to <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>. You can contact us without photos.</p><p><a class=\"button\" href=\"contact.html\">Arrange an on-site assessment &amp; written quote</a></p></div>" as TrustedHtml
},
{
"id": "section-10",
"kind": "faq",
"container": "<!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h2 id=\"guide-5\">A short handover that keeps the roles separate</h2><p>Record the occupant observation, current condition, property and equipment location, access contact, and person who can approve the proposed work. Preserve the tenant report as reported; do not rewrite it as a diagnosis. If the condition worsens or the contact changes, update the same reference so the team does not rely on an obsolete instruction.</p><ul class=\"intent-links\"><li><a href=\"property-management.html\">Arrange managed-property plumbing or electrical work</a></li><li><a href=\"news-useful-property-work-order.html\">Turn the handover into a work order</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div>" as TrustedHtml,
"items": [
{
"question": "Who should a tenant contact before an ordinary repair booking?",
"answer": "<p>Use the property manager or owner repair-reporting process and provide the factual observation and current condition. Do not assume that reporting a fault gives authority to approve costs. Immediate danger needs the appropriate emergency route first.</p>" as TrustedHtml
},
{
"question": "Does agreeing access also approve the repair cost?",
"answer": "<p>No. Record entry permission and authority to approve work separately. The nominated decision-maker and any agreed limits should travel with the request.</p>" as TrustedHtml
}
]
},
{
"id": "section-11",
"kind": "rich",
"html": "<!-- site-intent:end --><p data-guide-services>Keep an occupant-reported <a href=\"smoke-alarm-maintenance-perth.html\">smoke-alarm fault</a> distinct from planned <a href=\"fixtures-appliances-perth.html\">fixture or appliance connections</a> and <a href=\"renewables-smart-home-perth.html\">smart-home electrical work</a>. Record the location and requested assessment for each task, then identify who may approve the quoted scope. The handover is not a technical inspection or evidence that a proposed product is compatible.</p>" as TrustedHtml
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
"chromeBindings": {

}
};
