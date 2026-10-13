import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "smoke-alarm-maintenance-perth.html",
"kind": "service",
"seo": {
"title": "Smoke Alarm Repairs & Replacement Perth | Ellis",
"description": "Smoke alarm repairs, replacement and maintenance in Perth. On-site assessment, repair plan and written quote. Do not remove hardwired units.",
"canonical": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html#breadcrumb",
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
"name": "{{ppp:h1-value:raw}}",
"description": "{{ppp:seo-value:description:raw}}",
"serviceType": "{{ppp:h1-value:raw}}",
"areaServed": {
"@type": "City",
"name": "Perth"
},
"@id": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/smoke-alarm-maintenance-perth.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:2:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:1:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:2:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:2:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:3:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:3:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:4:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:4:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:5:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:5:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:6:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:6:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:7:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:7:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:8:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:8:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:9:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:9:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:2:10:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:2:10:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/smoke-alarm-maintenance-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/smoke-alarm-maintenance-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/smoke-alarm-maintenance-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Electrical\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/electrical.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/smoke-alarm-maintenance-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/smoke-alarm-maintenance-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/smoke-alarm-maintenance-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:2:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:2:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:3:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:3:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:4:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:4:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:5:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:5:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:6:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:6:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:7:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:7:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:8:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:8:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:9:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:9:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:10:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:10:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-e2552e379ef9",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section\n        class=\"page-hero service-hero\"\n        style=\"--service-image: url(&quot;electrical-service-perth.png&quot;)\"\n      >\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Electrical repair service</span>\n          <h1>Smoke Alarm Repairs, Replacement &amp; Maintenance Perth</h1>\n<p>Book smoke alarm repairs and maintenance in Perth for chirping, fault indications and planned replacement work. {{ppp:shared:business.name:html}} provides an on-site assessment, explains the maintenance plan and written quote. Our licensed electrical team handles the relevant electrical work for homes, rentals and managed properties. Do not remove hardwired units.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=smoke-alarm-maintenance-perth.html\">Book smoke-alarm repair and maintenance</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>What to do next</h2><p>Report the alarm location, the behaviour you have noticed and any safely readable product information. Do not open electrical covers or touch wiring to investigate. We assess the alarm and relevant installation before explaining repair, maintenance or replacement requirements. The written quote identifies the work included. For a managed property, provide the access and approval contacts; an occupant reporting the alarm may not be authorised to approve additional work.</p><p><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Pass an occupant report to the property manager</a>. <a href=\"contact.html?service=smoke-alarm-maintenance-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Smoke-alarm maintenance and replacement services</h2><h3>Chirping and reported fault indications</h3><p>Tell us the alarm location, the pattern of the sound and any safely readable information. An intermittent chirp and an active alarm are not the same situation. We assess the equipment and reported indication rather than treating every sound as a request for the same replacement part. If there is smoke or immediate danger, act on the emergency rather than waiting for maintenance.</p>\n<h3>Damaged units and planned replacement</h3><p>The alarm type, accessible age information and existing installation influence replacement requirements. We review the equipment and explain the proposed unit and connection work before quoting. Do not detach a hardwired alarm or open wiring to identify it; visible information and the room location are enough to begin the booking request.</p>\n<h3>Rental and managed-property maintenance</h3><p>Property managers can send a work order with the affected locations, occupant contact and approval requirements. An individual alarm fault and a broader property assessment are different scopes. We clarify the work being requested instead of describing a single repair as proof that every alarm and every legal obligation at the property has been checked.</p><figure class=\"service-editorial-figure\"><img srcset=\"electrical-service-perth-480.webp 480w, electrical-service-perth-960.webp 960w\" sizes=\"(max-width: 540px) calc(100vw - 48px), 480px\" loading=\"lazy\"\n            class=\"service-editorial-image\"\n            src=\"electrical-service-perth.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"Electrical service illustration showing an electrician inspecting a switchboard\"\n\n          /></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>How we assess smoke-alarm work at your property</h2><p>Our electrician reviews the reported fault, equipment type and access to the relevant installation. We explain whether the proposed work is maintenance, fault investigation or replacement, and identify the associated electrical work. The job scope matters: it determines which units and locations are included and what findings the visit can properly address.</p>\n<h3>Replacement equipment and installation requirements</h3><p>Equipment selection and location requirements need to be considered for the property and proposed work. We discuss any connection changes or additional installation work before approval. <a href=\"https://dfes.wa.gov.au/hazard-information/fire-in-the-home/smoke-alarms\">DFES smoke-alarm information</a> provides public safety guidance; it is not a substitute for assessing the installation or confirming a specific property scope.</p>\n<p>After completing the authorised work, we explain the checks relevant to that work and any remaining issue identified. Where the enquiry also involves lost power or circuit concerns, our <a href=\"electrical.html\">Perth electrical services</a> cover the related assessment. For agency maintenance, the completed work should be read against the agreed work order, not as an unspecified whole-property certification.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Do not remove hardwired units, open wiring or disable alarms to investigate. If smoke or fire is present, move to safety and Call 000.</p><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"gap-smoke-alarm-installation\"><h2>Smoke-alarm installation enquiries: new unit or replacement</h2><p>Tell us whether the request is for a reported fault, replacement of an existing unit or a proposed new alarm location. Our existing service covers smoke-alarm assessment, maintenance and replacement. A new position, changed supply or interconnection is a separate installation request whose requirements and acceptance must be confirmed.</p><p>Give the property type, the affected rooms and any alarm details that are safely readable. There is no need to remove an alarm, open wiring or reach an unsafe location. The written quote should identify the included units and work rather than treating one replacement as an assessment of the whole property.</p><ul class=\"intent-links\"><li><a href=\"electrical.html\">Electrical installation scope</a></li><li><a href=\"property-management.html#gap-managed-work-order\">Approval and records for a managed property</a></li><li><a href=\"contact.html?service=smoke-alarm-maintenance-perth.html\">Confirm the proposed smoke-alarm work</a></li></ul></div><div class=\"keyword-gap-part\" id=\"gap-smoke-alarm-testing\"><h2>Smoke-alarm testing and the record you need</h2><p>A reported chirp, an agreed replacement and a planned property-wide check are different requests. If you need testing or a record for an agency, describe the units or areas involved and the documentation you need before the visit. Confirm that the proposed service can provide it.</p><p>Ask what was checked, which units were included and what remains outside the agreed scope. A receipt for replacing one alarm is not automatically a whole-property compliance certificate. Routine attendance, a recurring maintenance arrangement or a particular certificate is not assumed from this page.</p><ul class=\"intent-links\"><li><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Pass on an occupant report without losing the property reference</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-smoke-alarm-maintenance-perth\"><h2>Smoke alarm replacement Perth: symptoms and service choices</h2><h3>Chirping from a hardwired smoke alarm</h3><p>A warning may relate to the alarm, backup power or the device condition, depending on the model. Note the warning and age if known without removing a hardwired unit. Assessment should follow the device instructions and applicable property requirements.</p><h3>Smoke-alarm requirements for WA rental homes</h3><p>WA guidance requires compliant mains-powered smoke alarms for homes offered for rent, subject to permitted exceptions. The alarms must be in working order and less than ten years old. Owners are responsible for maintaining compliance; confirm the installation and applicable requirements for the property rather than assuming replacement of one unit certifies the whole home.</p><ul class=\"intent-links\"><li><a href=\"https://dfes.wa.gov.au/hazard-information/fire-in-the-home/smoke-alarms\">DFES smoke-alarm guidance</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Smoke-alarm maintenance and replacement costs</h2><div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Smoke-alarm price guide</h2>\n                <p>\n                  A practical guide for a standard hard-wired smoke-alarm\n                  service at a Perth property.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Standard hard-wired smoke alarm</h3>\n                  <p class=\"price-guide__range\">AUD $205–$275</p>\n                  <p class=\"price-guide__unit\">per alarm · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div><h3>What your written quote covers</h3><p>The alarm type, location, age information where available, reported indications and the property context affect the assessment. A fault enquiry and a planned replacement have different requirements. We identify the equipment and access needed and explain any replacement or additional electrical work in the written quote.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=smoke-alarm-maintenance-perth.html\">Request a smoke-alarm repair and maintenance quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Smoke Alarm Repairs, Replacement &amp; Maintenance Perth FAQs</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>A fault report is not the same as a whole-property compliance check</h3><p>Tell us whether you are reporting a particular alarm fault, planning replacement or requesting a defined property-wide check. For rentals, include the owner or agent approval contact. Do not remove a hardwired alarm or assume that replacing one unit establishes compliance for the whole premises.</p><ul class=\"intent-links\"><li><a href=\"property-management.html\">Rental-property access and approval</a></li><li><a href=\"electrical.html\">Related electrical maintenance</a></li><li><a href=\"rcd-testing-perth.html\">RCD Testing &amp; Safety Switch Checks Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><details><summary>{{ppp:faq:2:question}}</summary>{{ppp:faq:2:answer}}</details><details><summary>{{ppp:faq:3:question}}</summary>{{ppp:faq:3:answer}}</details><details><summary>{{ppp:faq:4:question}}</summary>{{ppp:faq:4:answer}}</details></div><!-- site-intent:end --><details><summary>{{ppp:faq:5:question}}</summary>{{ppp:faq:5:answer}}</details>\n<details><summary>{{ppp:faq:6:question}}</summary>{{ppp:faq:6:answer}}</details>\n<details><summary>{{ppp:faq:7:question}}</summary>{{ppp:faq:7:answer}}</details>\n<details><summary>{{ppp:faq:8:question}}</summary>{{ppp:faq:8:answer}}</details>\n<details><summary>{{ppp:faq:9:question}}</summary>{{ppp:faq:9:answer}}</details>\n<details><summary>{{ppp:faq:10:question}}</summary>{{ppp:faq:10:answer}}</details></div></section>" as TrustedHtml,
"items": [
{
"question": "Can alarm and safety-switch work be discussed in the same request?",
"answer": "<p>Yes. List the alarm locations and the separate safety-switch concern or requested check. Confirm the assessment, included tests and reporting requirements; one task does not automatically include the other.</p>" as TrustedHtml
},
{
"question": "Does replacing one smoke alarm certify the whole property?",
"answer": "<p>No. A single-unit replacement and a defined whole-property assessment are different scopes. State the property context and any required documentation before agreeing the work.</p>" as TrustedHtml
},
{
"question": "Can I request a new alarm location as well as replacement of a faulty unit?",
"answer": "<p>Yes, include both proposed tasks in the enquiry. The team needs to confirm the requirements and accepted scope for the new location separately. Replacement of an existing unit does not automatically include a changed supply, interconnection or additional locations.</p>" as TrustedHtml
},
{
"question": "Why can a hardwired smoke alarm keep chirping?",
"answer": "<p>Chirping can indicate a device or backup-power warning. Follow the model instructions and arrange assessment without removing hardwired equipment. <a href=\"#learn-about-smoke-alarm-maintenance-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "What smoke alarm requirements apply to rental homes in WA?",
"answer": "<p>WA rental homes require working, compliant mains-powered alarms under the applicable rules and exceptions, with units less than ten years old. <a href=\"#learn-about-smoke-alarm-maintenance-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Do I need to diagnose the problem first?",
"answer": "<p>No. Describe the observable change and property context. We inspect the affected area on site to establish the cause and confirm the repair scope. If more access is needed, we agree it with you first.</p>" as TrustedHtml
},
{
"question": "Can I send photos?",
"answer": "<p>Photos are optional: email safely taken photos to {{ppp:shared:business.email:html}}. You can contact us without photos. Do not approach a hazard, remove covers or dismantle equipment to take a photo.</p>" as TrustedHtml
},
{
"question": "Can you help with a smoke alarm that keeps beeping?",
"answer": "<p>Yes. Tell us where it is, what it is doing and when the behaviour began.</p>" as TrustedHtml
},
{
"question": "Should I remove a hardwired smoke alarm?",
"answer": "<p>No. Do not remove a hardwired unit or handle its wiring.</p>" as TrustedHtml
},
{
"question": "Can a property manager send a maintenance request?",
"answer": "<p>Yes. Include the property address, occupant access and approval details.</p>" as TrustedHtml
},
{
"question": "Does repairing one alarm assess the whole property?",
"answer": "<p>No. The agreed scope identifies the units and work included. A broader property assessment or replacement plan is a separate request, which we discuss and define before quoting.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book smoke-alarm repair and maintenance in Perth</h2><p>Include the suburb, alarm locations, reported sound or indication and any safely readable model or age information. Let us know whether the request is an individual fault or planned maintenance across several units. Our local team covers <a href=\"service-areas.html\">all six Perth service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=smoke-alarm-maintenance-perth.html\">Request a visit &amp; written quote</a></div></section>" as TrustedHtml
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
"label": "Electrical",
"href": "electrical.html"
},
{
"label": "Smoke Alarm Maintenance Perth",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n            <a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / <a href=\"{{ppp:breadcrumb:1:href}}\">{{ppp:breadcrumb:1:label}}</a> /\n            {{ppp:breadcrumb:2:label}}\n          </p>" as TrustedHtml,
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
"chrome:header-965ba50d3525:71": "contact.html?service=smoke-alarm-maintenance-perth.html",
"chrome:header-965ba50d3525:72": "",
"chrome:footer-ea4eccc794d7:0": "",
"chrome:footer-ea4eccc794d7:1": "",
"chrome:footer-ea4eccc794d7:2": "",
"chrome:footer-ea4eccc794d7:3": "",
"chrome:footer-ea4eccc794d7:4": "",
"chrome:footer-ea4eccc794d7:5": "",
"chrome:footer-ea4eccc794d7:6": "",
"chrome:footer-ea4eccc794d7:7": "",
"chrome:footer-ea4eccc794d7:8": "",
"chrome:footer-ea4eccc794d7:9": "",
"chrome:footer-ea4eccc794d7:10": "contact.html?service=smoke-alarm-maintenance-perth.html",
"chrome:footer-ea4eccc794d7:11": "",
"chrome:footer-ea4eccc794d7:12": "",
"chrome:footer-ea4eccc794d7:13": "contact.html?service=smoke-alarm-maintenance-perth.html"
}
};
