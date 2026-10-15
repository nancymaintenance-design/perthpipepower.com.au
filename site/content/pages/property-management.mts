import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "property-management.html",
"kind": "service",
"seo": {
"title": "Property Manager Plumbing & Electrical Perth | Ellis",
"description": "Plumbing and electrical maintenance for Perth property managers, rentals and strata. Coordinate access, work orders, approval and an on-site written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/property-management.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/property-management.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/property-management.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/property-management.html#breadcrumb",
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
"@type": "Service",
"name": "Plumbing and electrical support for property management",
"serviceType": "Plumbing and electrical support for property management",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"areaServed": {
"@type": "City",
"name": "Perth"
},
"description": "{{ppp:seo-value:description:raw}}",
"url": "{{ppp:seo-value:canonical:raw}}",
"@id": "{{ppp:shared:business.origin:raw}}/property-management.html#service",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/property-management.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/property-management.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:4:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:4:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:4:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:4:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/property-management.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/property-management.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/property-management.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"Plumbing and electrical support for property management\",\n      \"serviceType\": \"Plumbing and electrical support for property management\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/property-management.html#service\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/property-management.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/property-management.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:4:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:4:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:4:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:4:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-3ab21fdad658",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Perth property management</span>\n          <h1>Property Manager Plumbing &amp; Electrical Perth</h1>\n          <p>Our Perth team carries out plumbing and electrical maintenance for rental homes, strata buildings and managed premises. We assess leaks, drainage, hot-water and electrical faults, and agree the repair or installation work in a written scope and quote.</p>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell split\">\n          <div>\n            <h2>Plumbing and Electrical Maintenance for Property Managers</h2>\n            <p>We provide plumbing and electrical maintenance for rental homes, strata buildings and managed premises. Work can include leak and drainage repairs, hot-water assessment, taps and toilets, electrical fault finding, safety-switch repairs and agreed fitting replacement. The written scope keeps plumbing and electrical tasks distinct while allowing them to be coordinated for one property.</p>\n            <h3>Repair request details</h3>\n            <ol>\n              <li>Agency, owner or management contact</li>\n              <li>Work-order or property reference</li>\n              <li>Full property address and occupant contact</li>\n              <li>Symptom, affected area and safe photos</li>\n              <li>Access, pets, parking or building-entry information</li>\n              <li>Approval contact and relevant strata details</li>\n            </ol>\n          </div>\n          <div>\n            <img\n              class=\"photo\"\n              src=\"property-maintenance.jpg\"\n              width=\"1672\"\n              height=\"941\"\n              alt=\"Property maintenance planning materials and house keys\"\n              fetchpriority=\"high\" srcset=\"property-maintenance-480.webp 480w, property-maintenance-800.webp 800w, property-maintenance-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\">\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell cards\">\n          <article class=\"card\">\n            <h3>Rental properties</h3>\n            <p>\n              Ask the occupant to describe what they observed, when it began and\n              whether it remains active. Confirm access and notice requirements.\n            </p>\n          </article>\n          <article class=\"card\">\n            <h3>Strata and shared buildings</h3>\n            <p>\n              Identify whether the issue is inside a lot, in a common area or\n              connected to shared infrastructure.\n            </p>\n          </article>\n          <article class=\"card\">\n            <h3>Commercial premises</h3>\n            <p>\n              Include operating constraints, induction requirements, parking\n              information and the nominated site contact.\n            </p>\n          </article>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell panel\">\n          <h2>Request Plumbing and Electrical Repairs for a Managed Property</h2>\n          <p>\n            Email {{ppp:shared:business.email:html}} or call {{ppp:shared:business.displayTelephone:html}} with the\n            property address, work-order reference, occupant contact and issue\n            description.\n          </p>\n          <a class=\"button\" href=\"contact.html?service=property-management.html\">Contact {{ppp:shared:business.name:html}}</a>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">For property managers and occupiers</span>\n          <h2>Rental and Strata Maintenance: Scope, Access and Approval</h2>\n          <div class=\"split\">\n            <div>\n              <p>The repair scope identifies the affected private plumbing or electrical installation and the work authorised for the property. In strata buildings, lot and common-property responsibilities can affect who approves investigation and repairs. In occupied or commercial premises, access and operating restrictions are agreed with the property contact.</p>\n              <p>\n                Describe what is happening at the property and contact {{ppp:shared:business.name:html}}. We assess hot-water and water-affected electrical concerns on site and confirm the qualified trade arrangements, repair scope and quote.\n              </p>\n              <ul class=\"topic-links\">\n                <li>\n                  <a\n                    href=\"insights-tenant-property-manager-maintenance-handover.html\"\n                    >Guide: maintenance handover</a\n                  >\n                </li>\n                <li>\n                  <a href=\"news-useful-property-work-order.html\"\n                    >News: useful work orders</a\n                  >\n                </li>\n                <li><a href=\"contact.html?service=property-management.html\">Start an enquiry</a></li>\n              </ul>\n            </div>\n            <picture data-responsive-media><source type=\"image/avif\" srcset=\"perth-property-service-responsive-480.avif 480w, perth-property-service-responsive-960.avif 960w\" sizes=\"(max-width:800px) calc(100vw - 80px), 560px\"><img loading=\"lazy\" decoding=\"async\" srcset=\"perth-property-service-responsive-480.webp 480w, perth-property-service-responsive-960.webp 960w\" sizes=\"(max-width:800px) calc(100vw - 80px), 560px\"\n              class=\"content-photo\"\n              src=\"perth-property-service.png\"\n              width=\"1536\"\n              height=\"1024\"\n              alt=\"Property manager and tradesperson reviewing a maintenance request\"\n            /></picture>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-5",
"kind": "faq",
"container": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">A practical handover</span>\n          <h2>Plumbing and Electrical Work Orders: Property, Fault and Approval</h2>\n          <div class=\"rich-grid\">\n            <article>\n              <h3>Property</h3>\n              <p>\n                Address, unit number, affected area and any strata or\n                common-property context that could shape access.\n              </p>\n            </article>\n            <article>\n              <h3>Issue</h3>\n              <p>\n                The occupant's observable description, when it began, current\n                condition and any safely taken photos.\n              </p>\n            </article>\n            <article>\n              <h3>Access & approval</h3>\n              <p>\n                On-site contact, availability, parking or entry notes,\n                work-order reference and the approval contact.\n              </p>\n            </article>\n          </div>\n        </div>\n      <!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Tenant Repair Reports and Property-Manager Approval</h2><p>For rental properties, strata and agency-managed premises, keep the original observation separate from the work instruction. Identify who may approve investigation, who may approve repairs, and whether a spending limit applies. Include the occupant contact and access arrangements without publishing keys, alarm codes or other private entry information.</p><p>A hot-water leak and failed bathroom lights can belong in one work order, but they are not one diagnosis. We confirm the relevant plumbing and electrical tasks and quote the agreed scope. For common-property concerns, identify the managing contact rather than assuming that the occupant can authorise shared-system work.</p><p>If the condition changes before the visit, update the request. Where you need completion notes, an itemised scope or a particular agency reference, specify that requirement when arranging the work; the required documentation should be agreed, not assumed.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Plumbing support for rentals and strata</a></li><li><a href=\"electrical.html\">Electrical maintenance requests</a></li><li><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Tenant-to-manager handover checklist</a></li><li><a href=\"news-useful-property-work-order.html\">Writing an assessable work order</a></li><li><a href=\"smoke-alarm-maintenance-perth.html\">Smoke-alarm work for managed properties</a></li><li><a href=\"news-clearer-property-maintenance-enquiry.html\">Prepare the first maintenance enquiry</a></li><li><a href=\"toilet-installation-perth.html\">Toilet Installation &amp; Replacement Perth</a></li><li><a href=\"exhaust-fans-perth.html\">Bathroom Exhaust Fan Replacement Perth</a></li><li><a href=\"rcd-testing-perth.html\">RCD Testing &amp; Safety Switch Checks Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Can an occupant approve extra repairs during the visit?",
"answer": "<p>Access permission and authority to approve cost are different. Give the team the nominated decision-maker, agreed limit and escalation contact. If additional work is needed, its approval follows that instruction rather than assuming the person on site can approve it.</p>" as TrustedHtml
},
{
"question": "Can one request cover a plumbing and an electrical problem?",
"answer": "<p>Yes. Describe each symptom and location separately and include the same property reference. The team confirms which trades and tasks are required. </p>" as TrustedHtml
},
{
"question": "Strata work-order details",
"answer": "<p>State the affected lot or common area, the managing contact, access arrangements and who can approve the proposed scope. Do not decide responsibility from the location alone; shared infrastructure and approval requirements need to be clarified for that property.</p>" as TrustedHtml
},
{
"question": "Completion notes and invoice references",
"answer": "<p>Include the required records and agency reference when arranging the visit. Agree what documentation will be provided for the defined work. A reference or maintenance receipt does not by itself certify parts of the property outside that scope.</p>" as TrustedHtml
},
{
"question": "Tenant reporting and emergency channels",
"answer": "<p>For routine repairs, report to the agent or landlord. For immediate danger, use the appropriate emergency channel first. <a href=\"#learn-about-property-management\">Read the explanation.</a></p>" as TrustedHtml
}
]
},
{
"id": "section-6",
"kind": "rich",
"html": "\n    " as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "<!-- keyword-gap:start --><section class=\"section keyword-gap-content\" data-keyword-gap><div class=\"shell service-reading\"><div class=\"keyword-gap-part\" id=\"gap-managed-work-order\"><h2>A clear plumbing or electrical work order</h2><p>Use the same property reference for the occupant report, requested assessment and approval. The example below is an illustrative format, not a completed customer job or a client endorsement. Adapt it to the actual property and confirm the accepted scope with the team.</p><ul><li>Property: address and unit; identify the affected room or common area.</li><li>Observation: for example, “the kitchen tap continues to drip when closed”; record what the occupant reported, not an unverified diagnosis.</li><li>Instruction: assess the stated issue and quote the proposed work; name who may approve investigation and additional repairs.</li><li>Access: nominated contact and agreed entry arrangements; share keys or private codes through an agreed private channel.</li><li>Records: state any agency reference, completion notes, photographs or invoice breakdown required, and confirm what will be provided.</li></ul><ul class=\"intent-links\"><li><a href=\"news-clearer-property-maintenance-enquiry.html\">Prepare the first maintenance enquiry</a></li><li><a href=\"news-useful-property-work-order.html\">Define an assessable work-order scope</a></li><li><a href=\"smoke-alarm-maintenance-perth.html#gap-smoke-alarm-testing\">Specify the smoke-alarm work and record required</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-property-management\"><h2>Plumbing and Electrical Maintenance: Work-Order Scope</h2><h3>Reporting repairs as a tenant</h3><p>For an ordinary repair, contact the managing agent or landlord and follow the agreed reporting and approval process. Immediate danger or utility emergencies need the correct emergency contact first. Responsibility and authorisation should be confirmed for the particular property.</p><ul class=\"intent-links\"><li><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Tenant and manager repair handover</a></li></ul></div></div></section>" as TrustedHtml
},
{
"id": "main-trailing-space",
"kind": "rich",
"html": "<!-- keyword-gap:end -->" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Property management",
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
"chrome:header-d97673bf2d5f:138": "contact.html?service=property-management.html",
"chrome:header-d97673bf2d5f:139": "",
"chrome:header-d97673bf2d5f:140": "\n          ",
"chrome:header-d97673bf2d5f:141": "\n        ",
"chrome:header-d97673bf2d5f:142": "\n      ",
"chrome:header-d97673bf2d5f:143": "\n    ",
"chrome:header-d97673bf2d5f:144": "\n    "
}
};
