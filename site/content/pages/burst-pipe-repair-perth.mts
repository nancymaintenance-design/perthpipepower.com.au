import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "burst-pipe-repair-perth.html",
"kind": "service",
"seo": {
"title": "Burst Pipe Repairs Perth | Ellis",
"description": "Burst pipe repairs in Perth for active pipe leaks and damaged water connections. Contact our local team for assessment, repair scope and a written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html#breadcrumb",
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
"name": "Plumbing",
"item": "{{ppp:shared:business.origin:raw}}/plumbing.html"
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
"@id": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/burst-pipe-repair-perth.html#faq",
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
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/burst-pipe-repair-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/burst-pipe-repair-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/burst-pipe-repair-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Plumbing\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/plumbing.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/burst-pipe-repair-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/burst-pipe-repair-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/burst-pipe-repair-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-836cb461e787",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section\n        class=\"page-hero service-hero\"\n        style=\"--service-image: url(&quot;plumbing-leak-perth.png&quot;)\"\n      >\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Plumbing repair service</span>\n          <h1>Burst Pipe Repairs Perth</h1>\n<p>Contact {{ppp:shared:business.name:html}} for burst pipe repairs and active water-leak repairs across Perth. Our licensed plumbing team assesses the damaged pipe or connection, explains the repair and access requirements and confirms a written quote. We work with homeowners, occupants and property managers to organise the affected plumbing work.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:contactRouting.telephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=burst-pipe-repair-perth.html\">Book burst-pipe repair</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Burst Pipe Assessment and Repairs</h2><p>For an active leak from a damaged pipe, tell us the location, current flow and whether the pipe is exposed. Do not enter water near electrical equipment or approach unstable surfaces to investigate. We assess the affected section and accessible connections, then quote the repair and any access work. If the source is uncertain, leak investigation may be needed first. Wall, floor and other building restoration are not automatically included in the plumbing repair.</p><p><a href=\"insights-reporting-a-plumbing-leak.html\">What to record before a leak assessment</a>. <a href=\"contact.html?service=burst-pipe-repair-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Repairing damaged water pipes and leaking connections</h2><h3>An exposed pipe or accessible joint</h3><p>When the damaged pipe or joint is visible, the repair still depends on the pipe material, condition and accessible connections. We assess the affected section rather than assuming a patch or replacement fitting will suit every installation. Let us know where the water is escaping and whether the flow is ongoing.</p>\n<h3>A leak behind a wall or below ground</h3><p>Concealed damage needs the source and access requirements established before corrective work is agreed. We explain the proposed opening or excavation scope and how it relates to the plumbing repair. If the source is not yet clear, our <a href=\"water-leak-detection-perth.html\">water leak detection service</a> provides the related investigation pathway.</p>\n<h3>Property damage and managed-property coordination</h3><p>The plumbing repair and the repair of wet finishes or contents are separate matters. For rental or managed properties, send the approval contact and work-order reference with the location of the affected pipe. This helps us coordinate access without assuming that building repairs or insurance decisions fall within the plumbing scope.</p><figure class=\"service-editorial-figure\"><img loading=\"lazy\"\n            class=\"service-editorial-image\"\n            src=\"plumbing-leak-perth.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"Plumbing repair work in an Australian laundry\" srcset=\"plumbing-leak-perth-480.webp 480w, plumbing-leak-perth-800.webp 800w, plumbing-leak-perth-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>Our burst-pipe assessment and repair approach</h2><p>At the property, we establish the affected section, its connections and the access available for repair. The assessment determines whether the agreed work involves a joint, a fitting or replacement of a section of pipe. We explain the proposed materials and any work needed to reach the damaged area before the repair is authorised.</p>\n<h3>A defined repair scope before additional work</h3><p>A short exposed repair is different from tracing and reaching a concealed pipe. The written quote separates the agreed plumbing work from extra access, additional pipe replacement and reinstatement. If more extensive deterioration becomes apparent, we explain the finding and any change to the scope rather than proceeding with an unexplained extension of the job.</p>\n<p>After completing the authorised work, we check the repaired section and discuss what was done and any further issue observed. We explain any recommended follow-up and confirm the agreed job with you. For other water-supply faults or fixture work, explore our <a href=\"plumbing.html\">Perth plumbing services</a> and include the additional requirement when requesting a visit.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Avoid water near electrical equipment, unstable surfaces and any hazardous area. Do not put yourself at risk to investigate the damaged pipe. For immediate danger, Call 000.</p><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"learn-about-burst-pipe-repair-perth\"><h2>Concealed pipe leaks and building finishes</h2><p>Dampness, staining and unexpected water can justify investigation of a concealed pipe, but similar signs can come from another source. The location and timing guide the investigation without establishing a diagnosis. Do not open a wall to prepare for a visit or approach water near electrical equipment. Once the plumbing source is established, access, repair and reinstatement can be agreed as described above.</p><ul class=\"intent-links\"><li><a href=\"insights-reporting-a-plumbing-leak.html\">Reporting water location and timing safely</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Burst-pipe repair costs and access requirements</h2><div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Burst-pipe repair price guide</h2>\n                <p>\n                  A practical guide for a standard burst-pipe repair at a Perth\n                  property.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Burst-pipe repair</h3>\n                  <p class=\"price-guide__range\">AUD $275–$990</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div><h3>Written quote and agreed scope</h3><p>The damaged section, pipe material, location and access affect the repair plan. An exposed connection is a different scope from a pipe behind a wall or below ground. The assessment establishes which section requires repair, what access is needed and what additional work is included before the written quote is agreed.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=burst-pipe-repair-perth.html\">Request a burst-pipe repair quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Burst Pipe Repairs service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><ul class=\"intent-links\"><li><a href=\"water-leak-detection-perth.html\">Investigating an uncertain water source</a></li><li><a href=\"plumbing.html\">Related plumbing repairs and quote conditions</a></li><li><a href=\"shower-plumbing-repairs-perth.html\">Shower Plumbing Leak Repairs Perth</a></li><li><a href=\"emergency-plumber-perth.html\">24-Hour Emergency Plumber Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div>\n\n<div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:8:question}}</h3>{{ppp:faq:8:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#plumbing\">Read related plumbing answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Will the pipe-repair quote include wall or ceiling restoration?",
"answer": "<p>Only when the written scope expressly includes it. Confirm pipe access, repair, testing and any separate restoration or other trade work rather than assuming that repairing the pipe restores every affected surface.</p>" as TrustedHtml
},
{
"question": "How do I arrange an urgent burst-pipe repair?",
"answer": "<p>Call to explain the current condition and confirm availability and charges. Keep people clear of hazards; a normal booking request is not a substitute for emergency or utility action where needed.</p>" as TrustedHtml
},
{
"question": "Concealed burst-pipe and leak signs",
"answer": "<p>Unexplained damp patches, stains or water may indicate a concealed leak, but inspection must distinguish plumbing from other sources. <a href=\"#learn-about-burst-pipe-repair-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Reporting symptoms without diagnosis",
"answer": "<p>Describe the observable change and property context. We inspect the affected area on site to establish the cause and confirm the repair scope. If more access is needed, we agree it with you first.</p>" as TrustedHtml
},
{
"question": "Burst-pipe safety and first actions",
"answer": "<p>Put people and electrical safety first. If it is safe and familiar, isolate the water supply; otherwise keep clear and contact us with the details.</p>" as TrustedHtml
},
{
"question": "Active bursts and water-leak investigation",
"answer": "<p>Use Water Leak Detection for an unexplained leak or damp area where there is no visible failed pipe. Use this page when water is actively escaping or a pipe or fitting has visibly failed.</p>" as TrustedHtml
},
{
"question": "Pipe type and useful leak observations",
"answer": "<p>A description of the location, water flow and affected area is more useful than a guess about the cause.</p>" as TrustedHtml
},
{
"question": "Managed-property booking details",
"answer": "<p>Include access, occupant and work-order details in the enquiry.</p>" as TrustedHtml
},
{
"question": "Pipe repair and wall or floor reinstatement",
"answer": "<p>The written scope states what access and reinstatement work is included. Plumbing repairs do not automatically include replacement finishes or separate building work. We clarify those items before proceeding.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book burst-pipe repair</h2><p>Tell us the suburb, location of the pipe, whether water is actively escaping and any access restrictions. If it is safe, describe whether the damaged section is exposed; do not approach a hazard to find out. Our local team covers <a href=\"service-areas.html\">all six Perth service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:contactRouting.telephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=burst-pipe-repair-perth.html\">Request a visit &amp; written quote</a></div></section>" as TrustedHtml
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
"label": "Plumbing",
"href": "plumbing.html"
},
{
"label": "Burst\n            Pipe Repair Perth",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n            <a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / <a href=\"{{ppp:breadcrumb:1:href}}\">{{ppp:breadcrumb:1:label}}</a> / {{ppp:breadcrumb:2:label}}\n          </p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-965ba50d3525:0": "\n        ",
"chrome:header-965ba50d3525:1": "\n          ",
"chrome:header-965ba50d3525:2": "\n        ",
"chrome:header-965ba50d3525:3": "\n          ",
"chrome:header-965ba50d3525:4": "\n              ",
"chrome:header-965ba50d3525:5": "\n            ",
"chrome:header-965ba50d3525:6": "\n              ",
"chrome:header-965ba50d3525:7": "\n            ",
"chrome:header-965ba50d3525:8": "\n              ",
"chrome:header-965ba50d3525:9": "\n            ",
"chrome:header-965ba50d3525:10": "\n                    ",
"chrome:header-965ba50d3525:11": "\n                      ",
"chrome:header-965ba50d3525:12": "\n                      ",
"chrome:header-965ba50d3525:13": "\n                    ",
"chrome:header-965ba50d3525:14": "\n                  ",
"chrome:header-965ba50d3525:15": "\n                    ",
"chrome:header-965ba50d3525:16": "\n                      ",
"chrome:header-965ba50d3525:17": "\n                      ",
"chrome:header-965ba50d3525:18": "\n                    ",
"chrome:header-965ba50d3525:19": "\n                  ",
"chrome:header-965ba50d3525:20": "\n                    ",
"chrome:header-965ba50d3525:21": "\n                      ",
"chrome:header-965ba50d3525:22": "\n                      ",
"chrome:header-965ba50d3525:23": "\n                    ",
"chrome:header-965ba50d3525:24": "\n                  ",
"chrome:header-965ba50d3525:25": "\n                    ",
"chrome:header-965ba50d3525:26": "\n                      ",
"chrome:header-965ba50d3525:27": "\n                      ",
"chrome:header-965ba50d3525:28": "\n                    ",
"chrome:header-965ba50d3525:29": "\n                  ",
"chrome:header-965ba50d3525:30": "\n                    ",
"chrome:header-965ba50d3525:31": "\n                      ",
"chrome:header-965ba50d3525:32": "\n                      ",
"chrome:header-965ba50d3525:33": "\n                    ",
"chrome:header-965ba50d3525:34": "\n                  ",
"chrome:header-965ba50d3525:35": "\n                    ",
"chrome:header-965ba50d3525:36": "\n                      ",
"chrome:header-965ba50d3525:37": "\n                      ",
"chrome:header-965ba50d3525:38": "\n                    ",
"chrome:header-965ba50d3525:39": "\n                  ",
"chrome:header-965ba50d3525:40": "\n                    ",
"chrome:header-965ba50d3525:41": "\n                      ",
"chrome:header-965ba50d3525:42": "\n                      ",
"chrome:header-965ba50d3525:43": "\n                    ",
"chrome:header-965ba50d3525:44": "\n                  ",
"chrome:header-965ba50d3525:45": "\n                    ",
"chrome:header-965ba50d3525:46": "\n                      ",
"chrome:header-965ba50d3525:47": "\n                      ",
"chrome:header-965ba50d3525:48": "\n                    ",
"chrome:header-965ba50d3525:49": "\n                  ",
"chrome:header-965ba50d3525:50": "\n                    ",
"chrome:header-965ba50d3525:51": "\n                      ",
"chrome:header-965ba50d3525:52": "\n                      ",
"chrome:header-965ba50d3525:53": "\n                    ",
"chrome:header-965ba50d3525:54": "\n                  ",
"chrome:header-965ba50d3525:55": "\n                    ",
"chrome:header-965ba50d3525:56": "\n                      ",
"chrome:header-965ba50d3525:57": "\n                      ",
"chrome:header-965ba50d3525:58": "\n                    ",
"chrome:header-965ba50d3525:59": "\n                  ",
"chrome:header-965ba50d3525:60": "\n                    ",
"chrome:header-965ba50d3525:61": "\n                      ",
"chrome:header-965ba50d3525:62": "\n                      ",
"chrome:header-965ba50d3525:63": "\n                    ",
"chrome:header-965ba50d3525:64": "\n                  ",
"chrome:header-965ba50d3525:65": "\n                    ",
"chrome:header-965ba50d3525:66": "\n                      ",
"chrome:header-965ba50d3525:67": "\n                      ",
"chrome:header-965ba50d3525:68": "\n                    ",
"chrome:header-965ba50d3525:69": "\n                  ",
"chrome:header-965ba50d3525:70": "\n              ",
"chrome:header-965ba50d3525:71": "contact.html?service=burst-pipe-repair-perth.html",
"chrome:header-965ba50d3525:72": "\n            "
}
};
