import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "faq.html",
"kind": "faq",
"seo": {
"title": "Plumbing & Electrical Repair FAQs Perth | Ellis",
"description": "Answers about Perth plumbing and electrical bookings, quote inclusions, access, property-manager approval and when to use emergency or utility services.",
"canonical": "{{ppp:shared:business.origin:raw}}/faq.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/faq.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/faq.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/faq.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/faq.html#faq",
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
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:3:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:3:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:4:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:4:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:5:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:5:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:6:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:6:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:7:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:7:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:8:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:8:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:9:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:9:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:10:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:10:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:11:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:11:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:12:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:12:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:13:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:13:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:14:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:14:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:15:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:15:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:16:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:16:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:17:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:17:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:18:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:18:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/faq.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/faq.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/faq.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/faq.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:1:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:2:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:2:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:3:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:3:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:4:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:4:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:5:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:5:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:6:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:6:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:7:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:7:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:8:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:8:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:9:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:9:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:10:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:10:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:11:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:11:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:12:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:12:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:13:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:13:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:14:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:14:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:15:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:15:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:16:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:16:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:17:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:17:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:18:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:18:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-549f11456ba4",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Straight answers</span>\n          <h1>Perth plumbing and electrical repair FAQs</h1>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n      <!-- keyword-gap:start --><section class=\"section keyword-gap-content\" data-keyword-gap><div class=\"shell service-reading\"><div class=\"keyword-gap-part\" id=\"gap-price-guide-routes\"><h2>Find the price guide for the actual task</h2><p>The service pages contain the existing guide ranges and their conditions. Compare the included work, not just the lowest figure: attendance or investigation, products, installation, access and separate repair can change the scope. Where a fixed guide is not offered, request a property-specific written quote.</p><p>Confirm any attendance charge, charges if you do not proceed and the scope of further investigation before booking. These questions do not establish that a fee applies or is waived; the team needs to confirm the terms for the proposed visit.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html#gap-plumbing-prices\">Plumber costs and quotation scope</a></li><li><a href=\"electrical.html#gap-electrical-prices\">Electrician costs and investigation scope</a></li><li><a href=\"blocked-drains-perth.html#service-quote\">Blocked-drain clearing price guide</a></li><li><a href=\"hot-water-problems-perth.html#service-quote\">Hot-water repair and replacement price guide</a></li><li><a href=\"toilet-repairs-perth.html#service-quote\">Toilet repair price guide</a></li><li><a href=\"lighting-power-points-perth.html#service-quote\">Lighting and power-point price guide</a></li></ul></div></div></section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "faq",
"container": "<!-- keyword-gap:end --><section class=\"section faq\">\n        <div class=\"shell\">\n          <!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h2>Plumbing and electrical repair answers</h2><nav class=\"topic-links\" aria-label=\"FAQ categories\"><a href=\"#booking\">Booking and quotes</a><a href=\"#plumbing\">Plumbing</a><a href=\"#electrical\">Electrical</a><a href=\"#coverage\">Coverage and company details</a></nav><p>Use this page for questions that apply across services. Fault-specific questions belong on the relevant repair page, where the assessment and service boundaries are explained in more detail. You can enquire without naming a faulty part or collecting photos. The team confirms the proposed visit and written scope before agreed work proceeds.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Choose a plumbing repair</a></li><li><a href=\"electrical.html\">Choose electrical repairs or installation</a></li><li><a href=\"property-management.html\">Work orders and approval for managed properties</a></li><li><a href=\"lighting-installation-perth.html\">Lighting Installation &amp; Repairs Perth questions</a></li><li><a href=\"power-points-perth.html\">Power Point Installation &amp; Repairs Perth questions</a></li><li><a href=\"dishwasher-installation-perth.html\">Dishwasher Installation &amp; Connections Perth questions</a></li><li><a href=\"toilet-installation-perth.html\">Toilet Installation &amp; Replacement Perth questions</a></li><li><a href=\"shower-plumbing-repairs-perth.html\">Shower Plumbing Leak Repairs Perth questions</a></li><li><a href=\"water-pressure-perth.html\">Low Water Pressure &amp; Water Hammer Perth questions</a></li><li><a href=\"ceiling-fans-perth.html\">Ceiling Fan Installation &amp; Repairs Perth questions</a></li><li><a href=\"exhaust-fans-perth.html\">Bathroom Exhaust Fan Replacement Perth questions</a></li><li><a href=\"switchboard-upgrades-perth.html\">Switchboard Repairs &amp; Upgrades Perth questions</a></li><li><a href=\"rcd-testing-perth.html\">RCD Testing &amp; Safety Switch Checks Perth questions</a></li><li><a href=\"emergency-plumber-perth.html\">24-Hour Emergency Plumber Perth questions</a></li><li><a href=\"emergency-electrician-perth.html\">24-Hour Emergency Electrician Perth questions</a></li></ul></div><!-- site-intent:end -->\n          \n          \n          \n          \n          \n          \n          \n          \n          \n          \n        <section class=\"faq-category\" aria-labelledby=\"booking\"><h2 id=\"booking\">Booking, scope and quotations</h2><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><details><summary>{{ppp:faq:2:question}}</summary>{{ppp:faq:2:answer}}</details><details><summary>{{ppp:faq:10:question}}</summary>{{ppp:faq:10:answer}}</details><details><summary>{{ppp:faq:11:question}}</summary>{{ppp:faq:11:answer}}</details><details><summary>{{ppp:faq:12:question}}</summary>{{ppp:faq:12:answer}}</details><details><summary>{{ppp:faq:16:question}}</summary>{{ppp:faq:16:answer}}</details><details><summary>{{ppp:faq:17:question}}</summary>{{ppp:faq:17:answer}}</details><details><summary>{{ppp:faq:18:question}}</summary>{{ppp:faq:18:answer}}</details></section><section class=\"faq-category\" aria-labelledby=\"plumbing\"><h2 id=\"plumbing\">Plumbing symptoms and repair scope</h2><details><summary>{{ppp:faq:3:question}}</summary>{{ppp:faq:3:answer}}</details><details><summary>{{ppp:faq:5:question}}</summary>{{ppp:faq:5:answer}}</details><details><summary>{{ppp:faq:6:question}}</summary>{{ppp:faq:6:answer}}</details><details><summary>{{ppp:faq:13:question}}</summary>{{ppp:faq:13:answer}}</details><details><summary>{{ppp:faq:14:question}}</summary>{{ppp:faq:14:answer}}</details></section><section class=\"faq-category\" aria-labelledby=\"electrical\"><h2 id=\"electrical\">Electrical faults and safe reporting</h2><details><summary>{{ppp:faq:4:question}}</summary>{{ppp:faq:4:answer}}</details><details><summary>{{ppp:faq:15:question}}</summary>{{ppp:faq:15:answer}}</details></section><section class=\"faq-category\" aria-labelledby=\"coverage\"><h2 id=\"coverage\">Company details and service coverage</h2><details><summary>{{ppp:faq:7:question}}</summary>{{ppp:faq:7:answer}}</details><details><summary>{{ppp:faq:8:question}}</summary>{{ppp:faq:8:answer}}</details><details><summary>{{ppp:faq:9:question}}</summary>{{ppp:faq:9:answer}}</details></section></div>\n      </section>" as TrustedHtml,
"items": [
{
"question": "Why can an online guide price differ from the written quote?",
"answer": "<p>A guide range describes a standard scope; the property may need different access, materials, investigation or additional work. Ask the team to identify the inclusions and approval boundaries in the written quote rather than treating an online range as a fixed offer.</p>" as TrustedHtml
},
{
"question": "Can I approve investigation without approving every possible repair?",
"answer": "<p>Discuss the initial assessment scope and the person authorised to approve it. If further repair or replacement is proposed, ask what needs separate agreement. An enquiry or access arrangement alone is not approval of unlimited work.</p>" as TrustedHtml
},
{
"question": "What are your routine hours and emergency arrangements?",
"answer": "<p>{{ppp:shared:hours.text:html}} Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.</p>" as TrustedHtml
},
{
"question": "Can a hidden water leak cause a high bill without visible water damage?",
"answer": "<p>Yes, a concealed leak is possible without visible damage. A bill increase alone is insufficient to diagnose one. <a href=\"water-leak-detection-perth.html#learn-about-water-leak-detection-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "What is the difference between an RCD and a circuit breaker?",
"answer": "<p>An RCD detects leakage imbalance; a circuit breaker responds to overload or short circuit. A combined device can do both. <a href=\"safety-switch-tripping-perth.html#learn-about-safety-switch-tripping-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Why has my hot water suddenly stopped working?",
"answer": "<p>Several supply, heating or plumbing faults can interrupt hot water. The system type and affected outlets guide assessment. <a href=\"hot-water-problems-perth.html#learn-about-hot-water-problems-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "What is the difference between a running toilet and a leaking toilet base?",
"answer": "<p>A running cistern passes or replenishes water internally; a base leak is external water with a source that needs checking. <a href=\"toilet-repairs-perth.html#learn-about-toilet-repairs-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Who should a tenant contact first about plumbing or electrical repairs?",
"answer": "<p>For routine repairs, report to the agent or landlord. For immediate danger, use the appropriate emergency channel first. <a href=\"property-management.html#learn-about-property-management\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "What is {{ppp:shared:business.name:raw}}?",
"answer": "\n            <p>\n              {{ppp:shared:business.name:html}} is part of the Ellis Group, with a dedicated\n              Perth repair team providing plumbing and electrical repairs and\n              maintenance across Perth for homes, rentals, strata properties\n              and commercial premises.\n            </p>\n          " as TrustedHtml
},
{
"question": "Which areas does {{ppp:shared:business.name:raw}} cover?",
"answer": "\n            <p>\n              Our dedicated Perth repair team provides plumbing and electrical\n              services across Perth. Include the property suburb and service\n              required so we can prepare for the work.\n            </p>\n          " as TrustedHtml
},
{
"question": "What information should I provide?",
"answer": "\n            <p>\n              Provide the property address, affected area, factual description,\n              when it began, whether it is active or worsening, and the best\n              access contact. Property managers should include a work-order\n              reference and approval pathway.\n            </p>\n          " as TrustedHtml
},
{
"question": "Can I send photos?",
"answer": "\n            <p>\n              Photos are optional: email safely taken photos to {{ppp:shared:business.email:html}}. You can contact us without photos. Do not approach exposed wiring, active sparking, wet electrical equipment or another hazard to take a photo.\n            </p>\n          " as TrustedHtml
},
{
"question": "\n              What if I do not know whether the problem is plumbing or\n              electrical?\n            ",
"answer": "\n            <p>\n              Describe what you observe rather than guessing. Our Perth team\n              will identify the appropriate plumbing or electrical service path.\n            </p>\n          " as TrustedHtml
},
{
"question": "\n              Should I use the blocked drain or blocked toilet page?\n            ",
"answer": "\n            <p>\n              Use Blocked Drains &amp; Toilets for slow drainage, gurgling,\n              backups or a blocked toilet. Use Toilet Repairs when the concern\n              is specifically a running, leaking, slow-filling or\n              non-functioning toilet.\n            </p>\n          " as TrustedHtml
},
{
"question": "What should I do if a pipe bursts?",
"answer": "\n            <p>\n              Put people and electrical safety first. If it is safe and\n              familiar, isolate the water supply; otherwise keep clear and use\n              the Burst Pipe Repair page to share the affected area and active\n              water details.\n            </p>\n          " as TrustedHtml
},
{
"question": "\n              What should I do if a safety switch keeps tripping?\n            ",
"answer": "\n            <p>\n              Do not repeatedly reset it. Note which areas lost power and what\n              equipment was being used. Do not open the switchboard or work on\n              fixed wiring.\n            </p>\n          " as TrustedHtml
},
{
"question": "When is {{ppp:shared:business.name:raw}} available?",
"answer": "\n            <p>\n              {{ppp:shared:hours.text:html}}\n            </p>\n          " as TrustedHtml
},
{
"question": "Are licence details available?",
"answer": "\n            <p>\n              Services are provided by appropriately licensed plumbing and electrical tradespeople. Current licence details are available on request for procurement or property management.\n            </p>\n          " as TrustedHtml
},
{
"question": "When should I call 000?",
"answer": "\n            <p>\n              Call 000 for life-threatening emergencies, fire, smoke, active\n              arcing or immediate danger. Move to a safe location first. Once the immediate hazard is made safe, contact {{ppp:shared:business.name:html}} to arrange the repair assessment.\n            </p>\n          " as TrustedHtml
}
]
},
{
"id": "main-trailing-space",
"kind": "rich",
"html": "\n    " as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "FAQ",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-d97673bf2d5f:0": "\n    ",
"chrome:header-d97673bf2d5f:1": "\n    ",
"chrome:header-d97673bf2d5f:2": "\n      ",
"chrome:header-d97673bf2d5f:3": "\n        ",
"chrome:header-d97673bf2d5f:4": "",
"chrome:header-d97673bf2d5f:5": "\n        ",
"chrome:header-d97673bf2d5f:6": "\n          ",
"chrome:header-d97673bf2d5f:7": "\n            ",
"chrome:header-d97673bf2d5f:8": "",
"chrome:header-d97673bf2d5f:9": "",
"chrome:header-d97673bf2d5f:10": "\n            ",
"chrome:header-d97673bf2d5f:11": "",
"chrome:header-d97673bf2d5f:12": "",
"chrome:header-d97673bf2d5f:13": "\n            ",
"chrome:header-d97673bf2d5f:14": "",
"chrome:header-d97673bf2d5f:15": "",
"chrome:header-d97673bf2d5f:16": "\n            ",
"chrome:header-d97673bf2d5f:17": "\n              ",
"chrome:header-d97673bf2d5f:18": "\n                Plumbing\n              ",
"chrome:header-d97673bf2d5f:19": "\n              ",
"chrome:header-d97673bf2d5f:20": "\n                ",
"chrome:header-d97673bf2d5f:21": "\n                  ",
"chrome:header-d97673bf2d5f:22": "\n                  ",
"chrome:header-d97673bf2d5f:23": "\n                  ",
"chrome:header-d97673bf2d5f:24": "\n                ",
"chrome:header-d97673bf2d5f:25": "\n                ",
"chrome:header-d97673bf2d5f:26": "\n                  ",
"chrome:header-d97673bf2d5f:27": "",
"chrome:header-d97673bf2d5f:28": "",
"chrome:header-d97673bf2d5f:29": "",
"chrome:header-d97673bf2d5f:30": "",
"chrome:header-d97673bf2d5f:31": "",
"chrome:header-d97673bf2d5f:32": "\n                ",
"chrome:header-d97673bf2d5f:33": "\n                ",
"chrome:header-d97673bf2d5f:34": "\n                  ",
"chrome:header-d97673bf2d5f:35": "",
"chrome:header-d97673bf2d5f:36": "",
"chrome:header-d97673bf2d5f:37": "",
"chrome:header-d97673bf2d5f:38": "Active water, failed pipes and urgent plumbing\n                        concerns.",
"chrome:header-d97673bf2d5f:39": "",
"chrome:header-d97673bf2d5f:40": "",
"chrome:header-d97673bf2d5f:41": "\n                ",
"chrome:header-d97673bf2d5f:42": "\n                ",
"chrome:header-d97673bf2d5f:43": "\n                  ",
"chrome:header-d97673bf2d5f:44": "",
"chrome:header-d97673bf2d5f:45": "",
"chrome:header-d97673bf2d5f:46": "",
"chrome:header-d97673bf2d5f:47": "",
"chrome:header-d97673bf2d5f:48": "",
"chrome:header-d97673bf2d5f:49": "\n                ",
"chrome:header-d97673bf2d5f:50": "\n                ",
"chrome:header-d97673bf2d5f:51": "\n                  ",
"chrome:header-d97673bf2d5f:52": "",
"chrome:header-d97673bf2d5f:53": "",
"chrome:header-d97673bf2d5f:54": "",
"chrome:header-d97673bf2d5f:55": "",
"chrome:header-d97673bf2d5f:56": "",
"chrome:header-d97673bf2d5f:57": "\n                ",
"chrome:header-d97673bf2d5f:58": "\n                ",
"chrome:header-d97673bf2d5f:59": "\n                  ",
"chrome:header-d97673bf2d5f:60": "",
"chrome:header-d97673bf2d5f:61": "",
"chrome:header-d97673bf2d5f:62": "",
"chrome:header-d97673bf2d5f:63": "",
"chrome:header-d97673bf2d5f:64": "",
"chrome:header-d97673bf2d5f:65": "\n                ",
"chrome:header-d97673bf2d5f:66": "\n                ",
"chrome:header-d97673bf2d5f:67": "\n                  ",
"chrome:header-d97673bf2d5f:68": "",
"chrome:header-d97673bf2d5f:69": "",
"chrome:header-d97673bf2d5f:70": "",
"chrome:header-d97673bf2d5f:71": "",
"chrome:header-d97673bf2d5f:72": "",
"chrome:header-d97673bf2d5f:73": "\n                ",
"chrome:header-d97673bf2d5f:74": "\n              ",
"chrome:header-d97673bf2d5f:75": "\n            ",
"chrome:header-d97673bf2d5f:76": "\n            ",
"chrome:header-d97673bf2d5f:77": "\n              ",
"chrome:header-d97673bf2d5f:78": "\n                Electrical\n              ",
"chrome:header-d97673bf2d5f:79": "\n              ",
"chrome:header-d97673bf2d5f:80": "\n                ",
"chrome:header-d97673bf2d5f:81": "\n                  ",
"chrome:header-d97673bf2d5f:82": "\n                  ",
"chrome:header-d97673bf2d5f:83": "\n                  ",
"chrome:header-d97673bf2d5f:84": "\n                ",
"chrome:header-d97673bf2d5f:85": "\n                ",
"chrome:header-d97673bf2d5f:86": "\n                  ",
"chrome:header-d97673bf2d5f:87": "",
"chrome:header-d97673bf2d5f:88": "",
"chrome:header-d97673bf2d5f:89": "",
"chrome:header-d97673bf2d5f:90": "",
"chrome:header-d97673bf2d5f:91": "",
"chrome:header-d97673bf2d5f:92": "\n                ",
"chrome:header-d97673bf2d5f:93": "\n                ",
"chrome:header-d97673bf2d5f:94": "\n                  ",
"chrome:header-d97673bf2d5f:95": "",
"chrome:header-d97673bf2d5f:96": "",
"chrome:header-d97673bf2d5f:97": "",
"chrome:header-d97673bf2d5f:98": "",
"chrome:header-d97673bf2d5f:99": "",
"chrome:header-d97673bf2d5f:100": "\n                ",
"chrome:header-d97673bf2d5f:101": "\n                ",
"chrome:header-d97673bf2d5f:102": "\n                  ",
"chrome:header-d97673bf2d5f:103": "",
"chrome:header-d97673bf2d5f:104": "",
"chrome:header-d97673bf2d5f:105": "",
"chrome:header-d97673bf2d5f:106": "",
"chrome:header-d97673bf2d5f:107": "",
"chrome:header-d97673bf2d5f:108": "\n                ",
"chrome:header-d97673bf2d5f:109": "\n                ",
"chrome:header-d97673bf2d5f:110": "\n                  ",
"chrome:header-d97673bf2d5f:111": "",
"chrome:header-d97673bf2d5f:112": "",
"chrome:header-d97673bf2d5f:113": "",
"chrome:header-d97673bf2d5f:114": "Faults, beeping and property-maintenance\n                        enquiries.",
"chrome:header-d97673bf2d5f:115": "",
"chrome:header-d97673bf2d5f:116": "",
"chrome:header-d97673bf2d5f:117": "\n                ",
"chrome:header-d97673bf2d5f:118": "\n                ",
"chrome:header-d97673bf2d5f:119": "\n                  ",
"chrome:header-d97673bf2d5f:120": "",
"chrome:header-d97673bf2d5f:121": "",
"chrome:header-d97673bf2d5f:122": "",
"chrome:header-d97673bf2d5f:123": "",
"chrome:header-d97673bf2d5f:124": "",
"chrome:header-d97673bf2d5f:125": "\n                ",
"chrome:header-d97673bf2d5f:126": "\n                ",
"chrome:header-d97673bf2d5f:127": "\n                  ",
"chrome:header-d97673bf2d5f:128": "",
"chrome:header-d97673bf2d5f:129": "",
"chrome:header-d97673bf2d5f:130": "",
"chrome:header-d97673bf2d5f:131": "",
"chrome:header-d97673bf2d5f:132": "",
"chrome:header-d97673bf2d5f:133": "\n                ",
"chrome:header-d97673bf2d5f:134": "\n              ",
"chrome:header-d97673bf2d5f:135": "\n            ",
"chrome:header-d97673bf2d5f:136": "\n            ",
"chrome:header-d97673bf2d5f:137": "",
"chrome:header-d97673bf2d5f:138": "contact.html",
"chrome:header-d97673bf2d5f:139": "",
"chrome:header-d97673bf2d5f:140": "\n          ",
"chrome:header-d97673bf2d5f:141": "\n        ",
"chrome:header-d97673bf2d5f:142": "\n      ",
"chrome:header-d97673bf2d5f:143": "\n    ",
"chrome:header-d97673bf2d5f:144": "\n    ",
"chrome:footer-177cec5c3651:0": "Book a repair"
}
};
