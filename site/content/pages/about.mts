import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "about.html",
"kind": "about",
"seo": {
"title": "About Our Perth Plumbing & Electrical Team | Ellis",
"description": "{{ppp:shared:business.name:raw}} is part of the Ellis Group, with a dedicated Perth team for plumbing and electrical repairs across Perth.",
"canonical": "{{ppp:shared:business.origin:raw}}/about.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/about.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/about.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/about.html#breadcrumb",
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
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-d993ca7d18d6",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Perth plumbing &amp; electrical repairs</span>\n          <h1>Plumbing, Electrical Repairs and Property Maintenance in Perth</h1>\n          <p>We’re a professional Perth-based maintenance and repairs team, providing reliable services for residential homes, rental properties and property managers</p>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "<section class=\"section\"><div class=\"shell text-column\"><span class=\"eyebrow\">Core services</span><h2>Plumbing Repairs, Electrical Repairs and Property Maintenance</h2><p>We are part of the Ellis Group, with a local repair team based at {{ppp:shared:business.addressLine:html}}. We serve homeowners, rental properties, strata properties and property managers.</p><h3>Plumbing Repairs</h3><p>We assess leaks, blocked drains, taps, toilets and hot-water concerns, then agree the repair or replacement scope. Start with <a href=\"blocked-drains-perth.html\">blocked drains</a>, <a href=\"water-leak-detection-perth.html\">leak concerns</a> and <a href=\"hot-water-problems-perth.html\">hot-water repairs</a>, or the <a href=\"plumbing.html\">plumbing service overview</a> and choose the service that matches the affected fitting or symptom.</p><h3>Electrical Repairs</h3><p>We arrange fault finding, safety-switch work, lighting, power points and smoke-alarm maintenance through appropriately licensed electrical tradespeople for the relevant work. The <a href=\"electrical.html\">electrical service overview</a> separates reported faults from planned installation.</p><h3>Property Maintenance</h3><p>For homes, rentals and strata-managed properties, we keep repair priorities, occupant contacts, access and approval instructions together. Use the <a href=\"property-management.html\">property-management service</a> for work orders and coordinated plumbing and electrical requests.</p></div></section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-6",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">How a repair request moves forward</span>\n          <h2>Book a repair in three steps</h2><p>Tell us the property address and what needs fixing. We arrange an inspection, explain the work and give you a written quote. Work starts after you agree to the quote. For a rental or managed property, include the work order, site contact and the person who approves the cost.</p><p>For rental and managed-property work, our <a href=\"property-management.html\">property maintenance service</a> keeps plumbing and electrical jobs together in one work order.</p></div>\n      </section>" as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Company record</span>\n          <h2>Registered business details.</h2><p data-registration-scope>View our company registration and GST details in the official ABR record below.</p>\n          <p>We are part of the Ellis Group. Our local repair team is based at {{ppp:shared:business.addressLine:html}}. </p>\n          <div class=\"service-detail-grid\">\n            <article class=\"service-detail\"><h3>Legal entity</h3><p><strong>{{ppp:shared:business.legalName:html}}</strong></p><p>Australian Private Company</p></article>\n            <article class=\"service-detail\"><h3>ABN &amp; ACN</h3><p><strong>ABN {{ppp:shared:business.abn:html}}</strong><br>ACN 645 821 745</p><p>ABN status: Active from 11 November 2020.</p></article>\n            <article class=\"service-detail\"><h3>GST &amp; official record</h3><p>Registered for GST from 11 November 2020.</p><p><a href=\"{{ppp:shared:business.registration:html}}\" target=\"_blank\" rel=\"noopener noreferrer\">View the official ABR record ↗</a></p></article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <div>\n            <span class=\"eyebrow\">Licensing &amp; insurance</span>\n            <h2>Plumbing and electrical licensing and insurance documents</h2>\n            <p>{{ppp:shared:business.name:html}} provides plumbing and electrical repairs through appropriately licensed plumbing and electrical tradespeople. The relevant documentation is confirmed as part of the booking or written quotation process.</p>\n            <p>Current licensing and insurance evidence is available on request before work is arranged. Contact our local team to confirm service arrangements and obtain the current documents relevant to your job.</p>\n          </div>\n          \n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-9",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-10",
"kind": "rich",
"html": "" as TrustedHtml
},
{
"id": "section-11",
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
"label": "About",
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
"chrome:header-d97673bf2d5f:144": "\n    "
}
};
