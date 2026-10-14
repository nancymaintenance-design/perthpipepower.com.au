import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "safety-switch-tripping-perth.html",
"kind": "service",
"seo": {
"title": "Safety Switch & RCD Repairs Perth | Ellis",
"description": "Safety switch and RCD repairs in Perth for recurring trips and switches that will not stay on. Arrange fault assessment, repair scope and a written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/safety-switch-tripping-perth.html#faq",
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
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/safety-switch-tripping-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/safety-switch-tripping-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/safety-switch-tripping-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Electrical\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/electrical.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/safety-switch-tripping-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/safety-switch-tripping-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/safety-switch-tripping-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-e2552e379ef9",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section\n        class=\"page-hero service-hero\"\n        style=\"--service-image: url(&quot;electrical-service-perth.png&quot;)\"\n      >\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Electrical repair service</span>\n          <h1>Safety Switch &amp; RCD Repairs Perth</h1><aside class=\"intent-safety\" data-intent-safety><p><strong>A shock is not an ordinary tripping enquiry.</strong> Keep clear and contact <a href=\"tel:131351\">Western Power 13 13 51</a> for shock or tingling. Call <a href=\"tel:000\">000</a> for a life-threatening emergency or fire. <a href=\"https://www.westernpower.com.au/issues-enquiries/reporting-incidents-and-emergencies/\" target=\"_blank\" rel=\"noopener noreferrer\">Official electrical incident guidance</a>.</p></aside>\n<p>A safety switch that keeps tripping needs an electrical assessment, not an assumed switch replacement. {{ppp:shared:business.name:html}} provides safety-switch and RCD fault finding and repairs across Perth. Our licensed electrical team investigates the affected installation, explains the repair required and confirms a written quote before the agreed work.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=safety-switch-tripping-perth.html\">Book safety-switch and rcd repair</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Service assessment and next steps</h2><p>We assess recurring trips to identify the circuit, connected equipment or switch involved. Note the affected areas and what was in use when it happened, without dismantling equipment or touching wiring. Keep clear of wet or damaged electrical equipment. We assess the cause and explain the investigation, repair and any separate replacement work in the quote. You do not need to carry out a technical test before booking.</p><p><a href=\"insights-safety-switch-keeps-tripping.html\">Safety switch keeps tripping: what to report</a>. <a href=\"contact.html?service=safety-switch-tripping-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Safety-switch fault finding and RCD repairs</h2><h3>Repeated tripping or a switch that will not stay on</h3><p>Repeated operation of a protective device is a symptom that needs investigation. Tell us which areas have lost power and whether the problem began during normal use or after a change at the property. We assess the relevant circuits and connections without asking you to force the switch on or continue recreating the problem.</p>\n<h3>Connected equipment and wiring concerns</h3><p>The assessment distinguishes a concern involving connected equipment from one involving the fixed installation or protective device. A tripping switch alone does not establish which item is responsible. We explain the investigation findings so the repair targets the identified issue rather than treating a new switch as a universal fix.</p>\n<h3>Related power interruptions</h3><p>If the problem is broader than a repeatedly tripping safety switch, our <a href=\"power-faults-perth.html\">electrical fault-finding service</a> covers wider power-loss enquiries. You do not need to select a technical diagnosis before booking: describing the affected rooms and observed interruption is enough for the initial request.</p><figure class=\"service-editorial-figure\"><img srcset=\"electrical-service-perth-480.webp 480w, electrical-service-perth-960.webp 960w\" sizes=\"(max-width: 540px) calc(100vw - 48px), 480px\" loading=\"lazy\"\n            class=\"service-editorial-image\"\n            src=\"electrical-service-perth.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"Electrical service illustration showing an electrician inspecting a switchboard\"\n\n          /></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>How our electrician scopes the RCD repair</h2><p>We begin with the reported pattern, the affected installation and safe access to the electrical equipment. Our electrician investigates the relevant fault and explains whether corrective work concerns a connection, wiring, a device or another identified issue. The written scope reflects those findings rather than the assumption that the switch itself has failed.</p>\n<h3>Device replacement versus wider electrical work</h3><p>Replacement of a protective device and alteration of a circuit are different scopes. We identify any replacement components, additional access and circuit work before asking you to approve the repair. If equipment outside the agreed fixed-wiring scope is involved, we clarify that boundary rather than promising appliance repair as part of the same job.</p>\n<p>Following authorised work, we carry out the checks relevant to the repair and explain the outcome and any remaining concerns. Our <a href=\"insights-safety-switch-keeps-tripping.html\">guide to repeated safety-switch tripping</a> explains what information is useful before a visit, but it does not replace the on-site electrical assessment or provide instructions for opening electrical equipment.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Do not bypass a protective device, hold a switch on or remove electrical covers. Stay away from wet or damaged electrical equipment. For immediate danger, Call 000.</p><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"gap-rcd-testing\"><h2>RCD testing enquiries versus a tripping-switch repair</h2><p>Our safety-switch page covers fault assessment and the agreed repair. A request for scheduled RCD testing, an instrument test or a register for managed premises has a different purpose. Explain the site, equipment and record required so the team can confirm whether that scope is available.</p><p>Keep a reported trip separate from a periodic inspection instruction. If you need a specific report, agree its contents and the circuits or devices included before booking. Do not assume that replacing one device certifies the installation, or that a generic repair visit includes every requested compliance document.</p><ul class=\"intent-links\"><li><a href=\"power-faults-perth.html\">Investigation of a broader power fault</a></li><li><a href=\"smoke-alarm-maintenance-perth.html#gap-smoke-alarm-testing\">Separate smoke-alarm maintenance and testing requests</a></li><li><a href=\"property-management.html\">Work-order approval and document requirements</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-safety-switch-tripping-perth\"><h2>Safety switch tripping: symptoms and service choices</h2><h3>RCD and circuit-breaker protection</h3><p>An RCD responds to a current imbalance associated with leakage; a circuit breaker protects against overload or short circuit. Combined devices may provide both functions. The device and fault need assessment; do not bypass protection or repeatedly reset it.</p><h3>Possible causes of safety-switch tripping</h3><p>A circuit or connected appliance may be responsible. Report rain-related trips or trips during washing-machine use so the electrician can assess the cause.</p><ul class=\"intent-links\"><li><a href=\"insights-safety-switch-keeps-tripping.html\">Understanding recurring trips safely</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Safety-switch and RCD repair costs</h2><div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Safety-switch price guide</h2>\n                <p>\n                  A practical guide for standard safety-switch testing and\n                  component replacement at a Perth property.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Safety-switch diagnosis & testing</h3>\n                  <p class=\"price-guide__range\">AUD $220–$440</p>\n                  <p class=\"price-guide__unit\">per attendance · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>RCD / RCBO replacement</h3>\n                  <p class=\"price-guide__range\">AUD $220–$330</p>\n                  <p class=\"price-guide__unit\">per device · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div><h3>Written quote and agreed scope</h3><p>Tripping is a symptom, not a diagnosis. The affected circuits, connected equipment, access and investigation findings determine whether the work concerns an appliance-related issue, wiring, a connection or a protective device. The quote describes the identified repair rather than assuming the switch itself is the only cause.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=safety-switch-tripping-perth.html\">Request a safety-switch and rcd repair quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Safety Switch &amp; RCD Repairs service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Repeated trips do not identify the failed component</h3><p>An RCD or safety switch and a circuit breaker perform different protective roles. Note the label only if it is safely readable; do not open covers to identify the device. Appliances, wiring and the protective device can require different investigation before replacement is considered.</p><ul class=\"intent-links\"><li><a href=\"power-faults-perth.html\">Electrical fault investigation</a></li><li><a href=\"insights-safety-switch-keeps-tripping.html\">What to record when a safety switch trips</a></li><li><a href=\"smoke-alarm-maintenance-perth.html\">Separate smoke-alarm maintenance requests</a></li><li><a href=\"power-points-perth.html\">Power Point Installation &amp; Repairs Perth</a></li><li><a href=\"switchboard-upgrades-perth.html\">Switchboard Repairs &amp; Upgrades Perth</a></li><li><a href=\"rcd-testing-perth.html\">RCD Testing &amp; Safety Switch Checks Perth</a></li><li><a href=\"emergency-electrician-perth.html\">24-Hour Emergency Electrician Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div>\n\n<div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:8:question}}</h3>{{ppp:faq:8:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#electrical\">Read related electrical answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Is a safety switch the same as a circuit breaker?",
"answer": "<p>No. The devices have different protective functions. If you are unsure which has operated, report the affected rooms and any safely visible label. The electrician identifies the device and assessment needed.</p>" as TrustedHtml
},
{
"question": "How is recurring RCD tripping assessed?",
"answer": "<p>No. Tripping can be associated with another part of the installation or connected equipment. The cause needs assessment; replacing the protective device without that assessment may not resolve the fault.</p>" as TrustedHtml
},
{
"question": "RCD and circuit-breaker functions",
"answer": "<p>An RCD detects leakage imbalance; a circuit breaker responds to overload or short circuit. A combined device can do both. <a href=\"#learn-about-safety-switch-tripping-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Trips and the source of a fault",
"answer": "<p>Tripping can originate in connected equipment or wiring, so replacing the switch alone may not resolve it. <a href=\"#learn-about-safety-switch-tripping-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Reporting symptoms without diagnosis",
"answer": "<p>Describe the observable change and property context. We inspect the affected area on site to establish the cause and confirm the repair scope. If more access is needed, we agree it with you first.</p>" as TrustedHtml
},
{
"question": "Reasons a safety switch trips",
"answer": "<p>There can be several causes. The most useful first step is to record what was happening and avoid trying to diagnose fixed wiring yourself.</p>" as TrustedHtml
},
{
"question": "Switchboard-cover safety",
"answer": "<p>Do not open switchboards or remove covers.</p>" as TrustedHtml
},
{
"question": "Fault history for the electrician",
"answer": "<p>Include the affected areas, when it happened, what was in use and any safely observable warning signs.</p>" as TrustedHtml
},
{
"question": "Replacing a switch and resolving the fault",
"answer": "<p>Not necessarily. Tripping can relate to more than the device itself. We investigate the relevant fault and explain whether device replacement or another identified repair is appropriate before quoting.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book safety-switch and rcd repair</h2><p>Send the suburb, the areas affected, whether the device trips repeatedly or will not stay on, and any recent changes. Do not open the switchboard to obtain model information. Our local team covers <a href=\"service-areas.html\">all six Perth service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=safety-switch-tripping-perth.html\">Request a visit &amp; written quote</a></div></section>" as TrustedHtml
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
"label": "Safety Switch Keeps Tripping in Perth",
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
"chrome:header-965ba50d3525:71": "contact.html?service=safety-switch-tripping-perth.html",
"chrome:header-965ba50d3525:72": ""
}
};
