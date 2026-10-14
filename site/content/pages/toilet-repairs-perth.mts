import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "toilet-repairs-perth.html",
"kind": "service",
"seo": {
"title": "Toilet & Cistern Repairs Perth | Ellis",
"description": "Toilet repairs in Perth for leaks, running cisterns, slow filling, blockages and overflow. On-site assessment, repair or maintenance plan and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/toilet-repairs-perth.html#faq",
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
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/toilet-repairs-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/toilet-repairs-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/toilet-repairs-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Plumbing\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/plumbing.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/toilet-repairs-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/toilet-repairs-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/toilet-repairs-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-e2552e379ef9",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section\n        class=\"page-hero service-hero\"\n        style=\"--service-image: url(&quot;hot-water-drainage-perth.png&quot;)\"\n      >\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Plumbing repair service</span>\n          <h1>Toilet Repairs Perth — Cistern &amp; Flush Repairs</h1><aside class=\"intent-safety\" data-intent-safety><p><strong>If wastewater is overflowing, do not treat it as a cistern adjustment.</strong> Keep clear and follow <a href=\"https://www.watercorporation.com.au/Help-and-advice/Water-issues/Wastewater/Sewer-blockage-or-overflow\" target=\"_blank\" rel=\"noopener noreferrer\">Water Corporation overflow guidance</a>, including calling <a href=\"tel:131375\">13 13 75</a> immediately for wastewater overflowing on your property.</p></aside>\n<p>Arrange toilet repairs in Perth for leaks, running cisterns, slow filling, flush faults, blockages or overflow. {{ppp:shared:business.name:html}} carries out an on-site assessment, explains the repair plan and confirms a written quote. Our plumbing team distinguishes toilet-component repairs from drainage work so the job addresses the reported problem.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=toilet-repairs-perth.html\">Book toilet repair</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Service assessment and next steps</h2><p>A running cistern or failed flush is different from wastewater backing up through the toilet. Tell us whether water runs into the bowl, leaks outside the fitting or rises when flushed. Avoid affected fixtures if wastewater is returning and keep clear of it. Our plumber assesses the fixture and drainage involved, then explains compatible parts, repairs and any separate clearing work in the written quote. You can request a visit without diagnosing the fault.</p><p><a href=\"insights-reporting-a-plumbing-leak.html\">Record water symptoms without dismantling fixtures</a>. <a href=\"contact.html?service=toilet-repairs-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Toilet and cistern repair services</h2><h3>A running cistern or water that will not stop</h3><p>A toilet that continues running after a flush needs the cistern components and relevant connections assessed. We identify the part of the fixture involved and whether compatible replacement parts are suitable. Tell us whether water is running into the bowl, leaking outside the toilet or affecting the surrounding floor.</p>\n<h3>Slow filling, weak flushing and controls that fail</h3><p>Filling and flushing problems are not all the same repair. We assess the toilet type, controls, accessible supply connection and reported behaviour before setting the scope. A concealed cistern may need a different access plan from an exposed one; any access work is discussed before it is assumed in the quote.</p>\n<h3>Blocked toilets and overflow</h3><p>When waste will not clear or the bowl rises during use, we assess whether the problem is at the fixture or in the drainage serving it. Other affected drains are useful information for the visit. If several fixtures back up, our <a href=\"blocked-drains-perth.html\">blocked-drain clearing service</a> covers the wider drainage scope.</p><figure class=\"service-editorial-figure\"><img srcset=\"hot-water-drainage-perth-480.webp 480w, hot-water-drainage-perth-960.webp 960w\" sizes=\"(max-width: 540px) calc(100vw - 48px), 480px\" loading=\"lazy\"\n            class=\"service-editorial-image\"\n            src=\"hot-water-drainage-perth.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"Plumbing service illustration showing drain access beside hot-water equipment\"\n\n          /></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>How we assess and complete a toilet repair</h2><p>Our plumber checks the reported fault, the fixture condition and the components that can be safely accessed. We explain whether the proposed work concerns the flush mechanism, filling components, connections or drainage. That distinction helps avoid approving a fixture replacement when the actual request is a component repair or a blocked drain.</p>\n<h3>Component repair or a replacement toilet</h3><p>The condition of the toilet, compatible parts and access influence the options. A replacement toilet needs its installation requirements assessed separately; connection positions and fixture dimensions matter. We discuss the parts or fixture to be supplied and any additional connection work before you approve the written quote.</p>\n<p>For the agreed work, we check the relevant filling, flushing or repaired connection and explain the outcome. If water around the toilet comes from an unclear source, we discuss a separate <a href=\"water-leak-detection-perth.html\">leak investigation</a> rather than treating every wet floor as a cistern fault. Rental jobs also need the approval contact and arrangements for access to the bathroom.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Avoid contact with wastewater and keep people away from an overflowing toilet. Do not continue using an affected fixture if it is backing up. For immediate danger, Call 000.</p><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"gap-toilet-repair-or-installation\"><h2>Choose between toilet repair, installation and drain clearing</h2><p>Start with the task rather than ordering a new suite for every fault. A running cistern or unreliable flush belongs with this repair assessment. A proposed complete replacement needs its product and connection requirements checked. Water backing up in the bowl belongs with drainage assessment.</p><p>If you are comparing replacement options, include the selected product, dimensions if available and who supplies it. Ask the quote to identify removal, connection changes and any separate floor or wall work. The existing toilet-repair guide price is not a complete installed-suite package.</p><ul class=\"intent-links\"><li><a href=\"fixtures-appliances-perth.html#gap-toilet-installation\">Toilet installation and replacement enquiries</a></li><li><a href=\"blocked-drains-perth.html#gap-blocked-toilet-shower\">Blocked toilets and shower drains</a></li><li><a href=\"contact.html?service=toilet-repairs-perth.html\">Arrange assessment of a toilet or cistern fault</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-toilet-repairs-perth\"><h2>Toilet repairs: symptoms and service choices</h2><h3>Running cisterns and water at the toilet base</h3><p>A running toilet may continue filling or passing water through the cistern and pan. Water at the base may involve a connection, fixture or another source. These observations need different checks and do not establish that the whole suite must be replaced.</p><h3>A toilet cistern that refills on its own</h3><p>Water may be escaping from the cistern so the fill mechanism runs again, but the components need inspection. Describe the timing and visible water. A parts repair may be appropriate; a new suite is not the automatic next step.</p><ul class=\"intent-links\"><li><a href=\"blocked-drains-perth.html\">When the symptom belongs with drainage</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Toilet repair and replacement costs</h2><div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Toilet repairs price guide</h2>\n                <p>\n                  A practical guide for a standard toilet repair at a Perth\n                  property.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Toilet repairs</h3>\n                  <p class=\"price-guide__range\">AUD $165–$330</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div><h3>Written quote and agreed scope</h3><p>A running cistern, poor flush, leaking connection and drainage blockage are different repair requests. The affected component, toilet type, condition and access determine the repair scope. We explain whether the work is at the fixture or relates to the drainage, and confirm parts and any additional work in writing.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=toilet-repairs-perth.html\">Request a toilet repair quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Toilet Repairs — Cistern &amp; Flush Repairs service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Separate a cistern fault from blocked drainage</h3><p>Water running into the bowl, slow filling or an ineffective flush can involve the fixture. Water rising or backing up may involve drainage. Describe both if they occur together. A blocked bowl does not establish that the entire toilet needs replacement.</p><ul class=\"intent-links\"><li><a href=\"blocked-drains-perth.html\">Blocked toilet and drainage assessment</a></li><li><a href=\"fixtures-appliances-perth.html\">Toilet replacement and connection scope</a></li><li><a href=\"toilet-installation-perth.html\">Toilet Installation &amp; Replacement Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:8:question}}</h3>{{ppp:faq:8:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:9:question}}</h3>{{ppp:faq:9:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:10:question}}</h3>{{ppp:faq:10:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#plumbing\">Read related plumbing answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Should I book toilet repairs or drain clearing for a backed-up bowl?",
"answer": "<p>Explain whether the water rises when flushed and whether other outlets are affected. The drainage page is the starting point for backups; the toilet repair page covers cistern, fill, flush and fitting faults. The assessment confirms the actual work.</p>" as TrustedHtml
},
{
"question": "Is a complete new toilet needed when the cistern keeps running?",
"answer": "<p>Not necessarily. The fixture condition and repair parts need assessment first. If replacement is proposed, confirm the product, connections and any additional work in the written scope.</p>" as TrustedHtml
},
{
"question": "Cistern faults and leaks at the base",
"answer": "<p>A running cistern passes or replenishes water internally; a base leak is external water with a source that needs checking. <a href=\"#learn-about-toilet-repairs-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Unplanned cistern refilling",
"answer": "<p>Unwanted water loss from the cistern can trigger refilling. Inspection determines which component, if any, needs repair. <a href=\"#learn-about-toilet-repairs-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Reporting symptoms without diagnosis",
"answer": "<p>Describe the observable change and property context. We inspect the affected area on site to establish the cause and confirm the repair scope. If more access is needed, we agree it with you first.</p>" as TrustedHtml
},
{
"question": "Safely taken photos",
"answer": "<p>Photos are optional: email safely taken photos to {{ppp:shared:business.email:html}}. You can contact us without photos. Do not approach a hazard, remove covers or dismantle equipment to take a photo.</p>" as TrustedHtml
},
{
"question": "Constantly running toilets",
"answer": "<p>Tell us whether it is continuously running, whether there is water on the floor and whether the fixture can still be used.</p>" as TrustedHtml
},
{
"question": "Toilet overflow safety",
"answer": "<p>Avoid further use and keep people away from contaminated water. Contact us with the property details and the situation.</p>" as TrustedHtml
},
{
"question": "Toilets and connected drains",
"answer": "<p>Tell us if another fixture is also slow, gurgling or backing up. That context helps distinguish a toilet-specific concern from a broader drainage issue.</p>" as TrustedHtml
},
{
"question": "Several toilets at one property",
"answer": "<p>Identify each affected fixture and its symptoms in the enquiry.</p>" as TrustedHtml
},
{
"question": "Repair compared with replacement",
"answer": "<p>We assess the component fault, condition and availability of compatible parts. A complete replacement is a separate option with its own installation requirements and written scope.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book toilet repair</h2><p>Send the suburb, whether the issue is filling, flushing, leaking or drainage, and whether other fixtures are affected. Let us know if the cistern is concealed and provide the work-order reference for a managed property. Our local team covers <a href=\"service-areas.html\">all six Perth service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=toilet-repairs-perth.html\">Request a visit &amp; written quote</a></div></section>" as TrustedHtml
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
"label": "Toilet\n            Repairs Perth",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n            <a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / <a href=\"{{ppp:breadcrumb:1:href}}\">{{ppp:breadcrumb:1:label}}</a> / {{ppp:breadcrumb:2:label}}\n          </p>" as TrustedHtml,
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
"chrome:header-965ba50d3525:71": "contact.html?service=toilet-repairs-perth.html",
"chrome:header-965ba50d3525:72": ""
}
};
