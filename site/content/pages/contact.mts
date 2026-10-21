import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "contact.html",
"kind": "contact",
"seo": {
"title": "Book Plumbing & Electrical Repairs Perth | Contact Ellis",
"description": "Contact Ellis in Perth for plumbing or electrical repairs and installations. Share the property location and issue to arrange an assessment and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/contact.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/contact.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/contact.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/contact.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/contact.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:0:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:0:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:0:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:0:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/contact.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/contact.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/contact.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/contact.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:0:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:0:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:0:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:0:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-ea7065db717c",
"mainAttributes": {
"id": "main"
},
"hero": "\n<section class=\"page-hero\">\n<div class=\"shell\">\n{{ppp:breadcrumbs}}\n<span class=\"eyebrow\">Tell us what is happening</span>\n<h1>Contact {{ppp:shared:business.name:html}}</h1>\n<p>Our dedicated Perth repair team provides plumbing and electrical repairs and maintenance across Perth.</p>\n</div>\n</section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "faq",
"container": "\n<section class=\"section\">\n<div class=\"shell contact-grid\">\n      <div class=\"contact-card contact-card--details\">\n<h2>Contact details</h2>\n<p>\n<strong>{{ppp:shared:business.name:html}}</strong>\n<br>\n<a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a>\n<br>\n<a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>\n<br>{{ppp:shared:business.addressLine:html}}</p>\n<h3>Perth office and property visits</h3>\n<p>Our Perth office is at the address above. For repairs, send us the address of the property that needs work. Please contact us before visiting the office. We confirm repair appointments with you after receiving your enquiry.</p>\n<h3>Plumbing and electrical service scope</h3>\n<p>For repairs and installation work, see the <a href=\"plumbing.html\">plumbing services</a> and <a href=\"electrical.html\">electrical services</a>. Rentals and strata work orders are covered by <a href=\"property-management.html\">property maintenance</a>.</p>\n        <p>Services are provided by appropriately licensed plumbing and electrical tradespeople. Licence details are available on request.</p>\n        <figure class=\"contact-card__image\">\n          <img src=\"property-maintenance.jpg\" width=\"1672\" height=\"941\" alt=\"Tradesperson preparing for a property maintenance visit\" srcset=\"property-maintenance-480.webp 480w, property-maintenance-800.webp 800w, property-maintenance-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\">\n        </figure>\n</div>\n<form id=\"enquiry\" class=\"contact-card\" data-enquiry-form novalidate>\n<h2>Request a repair</h2>\n<p>Send your Perth suburb or address and a short description of the repair or installation required. Our team will contact you to arrange an on-site assessment, check the fault or installation requirements and confirm the work plan and written quote. We agree the appointment with you.</p>\n<div class=\"honeypot\" aria-hidden=\"true\">\n<label for=\"company\">Company</label>\n<input id=\"company\" name=\"company\" tabindex=\"-1\" autocomplete=\"off\">\n</div>\n<label for=\"name\">Name</label>\n<input id=\"name\" name=\"name\" autocomplete=\"name\" required>\n<label for=\"phone\">Phone</label>\n<input id=\"phone\" name=\"phone\" type=\"tel\" autocomplete=\"tel\" required>\n<label for=\"email\">Email</label>\n<input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\" required>\n<label for=\"address\">Property address or suburb</label>\n<input id=\"address\" name=\"address\" autocomplete=\"street-address\" required>\n<label for=\"type\">Service type</label>\n<select id=\"type\" name=\"type\">\n<option>Plumbing</option>\n<option>Electrical</option>\n<option selected>Not sure</option>\n</select>\n<label for=\"message\">What is happening?</label>\n<textarea id=\"message\" name=\"message\" required>\n</textarea>\n<p>Photos are optional: email safely taken photos to <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>. You can submit this form without photos.</p><p class=\"form-note\">Do not approach a hazard to take a photo. For immediate danger, call 000.</p>\n<p class=\"form-note\">By submitting this form, you agree to our <a href=\"privacy.html\">Privacy Policy</a>.</p>\n<p id=\"form-status\" class=\"form-status\" aria-live=\"polite\">\n</p>\n<button class=\"button\" type=\"submit\">Send enquiry</button>\n</form>\n</div>\n<!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Plumbing and electrical enquiry details</h2><p>Choose Plumbing, Electrical or Not sure. Tell us the affected room or equipment, when the problem began and whether it is still happening. For installation, tell us the product and proposed location. For managed properties, include the access contact and person who can approve the work. We confirm the appointment with you and provide a written quote after assessment. Keep keys, alarm codes and unrelated personal records out of the message.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Plumbing repair and installation scope</a></li><li><a href=\"electrical.html\">Electrical assessment and installation scope</a></li><li><a href=\"property-management.html\">Managed-property work-order checklist</a></li><li><a href=\"news-clearer-property-maintenance-enquiry.html\">What to include in a maintenance enquiry</a></li><li><a href=\"fixtures-appliances-perth.html#gap-dishwasher-installation\">Dishwasher connection enquiry checklist</a></li><li><a href=\"emergency-plumber-perth.html\">24-Hour Emergency Plumber</a></li><li><a href=\"emergency-electrician-perth.html\">24-Hour Emergency Electrician</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Do I need photos or an equipment model to send the form?",
"answer": "<p>No. Start with the property address and a short description. Safely readable product details can help later. Photos are optional and may be emailed; do not dismantle equipment or approach water, wiring or wastewater to take them.</p>" as TrustedHtml
},
{
"question": "Does sending this form confirm the appointment or price?",
"answer": "<p>No. The team contacts you to agree the visit and assessment requirements. The written quote confirms the agreed work and price, and the team confirms the appointment with you.</p>" as TrustedHtml
},
{
"question": "The repair property address and our office address",
"answer": "<p>Enter the address of the property needing work, not our office address, unless the work is at that office. Our actual Perth office is at {{ppp:shared:business.addressLine:html}}. Contact the team before visiting to confirm arrangements.</p>" as TrustedHtml
},
{
"question": "Routine hours and emergency arrangements",
"answer": "<p>{{ppp:shared:hours.text:html}} Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.</p>" as TrustedHtml
}
]
},
{
"id": "main-trailing-space",
"kind": "rich",
"html": "\n" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Contact",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n<a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-d97673bf2d5f:0": "\n",
"chrome:header-d97673bf2d5f:1": "\n",
"chrome:header-d97673bf2d5f:2": "\n",
"chrome:header-d97673bf2d5f:3": "\n",
"chrome:header-d97673bf2d5f:4": "\n",
"chrome:header-d97673bf2d5f:5": "\n",
"chrome:header-d97673bf2d5f:6": "\n",
"chrome:header-d97673bf2d5f:7": "\n",
"chrome:header-d97673bf2d5f:8": "\n",
"chrome:header-d97673bf2d5f:9": "\n",
"chrome:header-d97673bf2d5f:10": "\n",
"chrome:header-d97673bf2d5f:11": "\n",
"chrome:header-d97673bf2d5f:12": "\n",
"chrome:header-d97673bf2d5f:13": "\n",
"chrome:header-d97673bf2d5f:14": "\n",
"chrome:header-d97673bf2d5f:15": "\n",
"chrome:header-d97673bf2d5f:16": "\n",
"chrome:header-d97673bf2d5f:17": "\n",
"chrome:header-d97673bf2d5f:18": "Plumbing",
"chrome:header-d97673bf2d5f:19": "\n",
"chrome:header-d97673bf2d5f:20": "\n",
"chrome:header-d97673bf2d5f:21": "\n",
"chrome:header-d97673bf2d5f:22": "\n",
"chrome:header-d97673bf2d5f:23": "\n",
"chrome:header-d97673bf2d5f:24": "\n",
"chrome:header-d97673bf2d5f:25": "\n",
"chrome:header-d97673bf2d5f:26": "\n",
"chrome:header-d97673bf2d5f:27": "\n",
"chrome:header-d97673bf2d5f:28": "\n",
"chrome:header-d97673bf2d5f:29": "\n",
"chrome:header-d97673bf2d5f:30": "\n",
"chrome:header-d97673bf2d5f:31": "\n",
"chrome:header-d97673bf2d5f:32": "\n",
"chrome:header-d97673bf2d5f:33": "\n",
"chrome:header-d97673bf2d5f:34": "\n",
"chrome:header-d97673bf2d5f:35": "\n",
"chrome:header-d97673bf2d5f:36": "\n",
"chrome:header-d97673bf2d5f:37": "\n",
"chrome:header-d97673bf2d5f:38": "Active water, failed pipes and urgent plumbing concerns.",
"chrome:header-d97673bf2d5f:39": "\n",
"chrome:header-d97673bf2d5f:40": "\n",
"chrome:header-d97673bf2d5f:41": "\n",
"chrome:header-d97673bf2d5f:42": "\n",
"chrome:header-d97673bf2d5f:43": "\n",
"chrome:header-d97673bf2d5f:44": "\n",
"chrome:header-d97673bf2d5f:45": "\n",
"chrome:header-d97673bf2d5f:46": "\n",
"chrome:header-d97673bf2d5f:47": "\n",
"chrome:header-d97673bf2d5f:48": "\n",
"chrome:header-d97673bf2d5f:49": "\n",
"chrome:header-d97673bf2d5f:50": "\n",
"chrome:header-d97673bf2d5f:51": "\n",
"chrome:header-d97673bf2d5f:52": "\n",
"chrome:header-d97673bf2d5f:53": "\n",
"chrome:header-d97673bf2d5f:54": "\n",
"chrome:header-d97673bf2d5f:55": "\n",
"chrome:header-d97673bf2d5f:56": "\n",
"chrome:header-d97673bf2d5f:57": "\n",
"chrome:header-d97673bf2d5f:58": "\n",
"chrome:header-d97673bf2d5f:59": "\n",
"chrome:header-d97673bf2d5f:60": "\n",
"chrome:header-d97673bf2d5f:61": "\n",
"chrome:header-d97673bf2d5f:62": "\n",
"chrome:header-d97673bf2d5f:63": "\n",
"chrome:header-d97673bf2d5f:64": "\n",
"chrome:header-d97673bf2d5f:65": "\n",
"chrome:header-d97673bf2d5f:66": "\n",
"chrome:header-d97673bf2d5f:67": "\n",
"chrome:header-d97673bf2d5f:68": "\n",
"chrome:header-d97673bf2d5f:69": "\n",
"chrome:header-d97673bf2d5f:70": "\n",
"chrome:header-d97673bf2d5f:71": "\n",
"chrome:header-d97673bf2d5f:72": "\n",
"chrome:header-d97673bf2d5f:73": "\n",
"chrome:header-d97673bf2d5f:74": "\n",
"chrome:header-d97673bf2d5f:75": "\n",
"chrome:header-d97673bf2d5f:76": "\n",
"chrome:header-d97673bf2d5f:77": "\n",
"chrome:header-d97673bf2d5f:78": "Electrical",
"chrome:header-d97673bf2d5f:79": "\n",
"chrome:header-d97673bf2d5f:80": "\n",
"chrome:header-d97673bf2d5f:81": "\n",
"chrome:header-d97673bf2d5f:82": "\n",
"chrome:header-d97673bf2d5f:83": "\n",
"chrome:header-d97673bf2d5f:84": "\n",
"chrome:header-d97673bf2d5f:85": "\n",
"chrome:header-d97673bf2d5f:86": "\n",
"chrome:header-d97673bf2d5f:87": "\n",
"chrome:header-d97673bf2d5f:88": "\n",
"chrome:header-d97673bf2d5f:89": "\n",
"chrome:header-d97673bf2d5f:90": "\n",
"chrome:header-d97673bf2d5f:91": "\n",
"chrome:header-d97673bf2d5f:92": "\n",
"chrome:header-d97673bf2d5f:93": "\n",
"chrome:header-d97673bf2d5f:94": "\n",
"chrome:header-d97673bf2d5f:95": "\n",
"chrome:header-d97673bf2d5f:96": "\n",
"chrome:header-d97673bf2d5f:97": "\n",
"chrome:header-d97673bf2d5f:98": "\n",
"chrome:header-d97673bf2d5f:99": "\n",
"chrome:header-d97673bf2d5f:100": "\n",
"chrome:header-d97673bf2d5f:101": "\n",
"chrome:header-d97673bf2d5f:102": "\n",
"chrome:header-d97673bf2d5f:103": "\n",
"chrome:header-d97673bf2d5f:104": "\n",
"chrome:header-d97673bf2d5f:105": "\n",
"chrome:header-d97673bf2d5f:106": "\n",
"chrome:header-d97673bf2d5f:107": "\n",
"chrome:header-d97673bf2d5f:108": "\n",
"chrome:header-d97673bf2d5f:109": "\n",
"chrome:header-d97673bf2d5f:110": "\n",
"chrome:header-d97673bf2d5f:111": "\n",
"chrome:header-d97673bf2d5f:112": "\n",
"chrome:header-d97673bf2d5f:113": "\n",
"chrome:header-d97673bf2d5f:114": "Faults, beeping and property-maintenance requests.",
"chrome:header-d97673bf2d5f:115": "\n",
"chrome:header-d97673bf2d5f:116": "\n",
"chrome:header-d97673bf2d5f:117": "\n",
"chrome:header-d97673bf2d5f:118": "\n",
"chrome:header-d97673bf2d5f:119": "\n",
"chrome:header-d97673bf2d5f:120": "\n",
"chrome:header-d97673bf2d5f:121": "\n",
"chrome:header-d97673bf2d5f:122": "\n",
"chrome:header-d97673bf2d5f:123": "\n",
"chrome:header-d97673bf2d5f:124": "\n",
"chrome:header-d97673bf2d5f:125": "\n",
"chrome:header-d97673bf2d5f:126": "\n",
"chrome:header-d97673bf2d5f:127": "\n",
"chrome:header-d97673bf2d5f:128": "\n",
"chrome:header-d97673bf2d5f:129": "\n",
"chrome:header-d97673bf2d5f:130": "\n",
"chrome:header-d97673bf2d5f:131": "\n",
"chrome:header-d97673bf2d5f:132": "\n",
"chrome:header-d97673bf2d5f:133": "\n",
"chrome:header-d97673bf2d5f:134": "\n",
"chrome:header-d97673bf2d5f:135": "\n",
"chrome:header-d97673bf2d5f:136": "\n",
"chrome:header-d97673bf2d5f:137": "\n",
"chrome:header-d97673bf2d5f:138": "contact.html",
"chrome:header-d97673bf2d5f:139": "\n",
"chrome:header-d97673bf2d5f:140": "\n",
"chrome:header-d97673bf2d5f:141": "\n",
"chrome:header-d97673bf2d5f:142": "\n",
"chrome:header-d97673bf2d5f:143": "\n",
"chrome:header-d97673bf2d5f:144": "\n"
}
};
