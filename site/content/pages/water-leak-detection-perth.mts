import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "water-leak-detection-perth.html",
"kind": "service",
"seo": {
"title": "Water Leak Detection Perth | Ellis",
"description": "Water leak detection in Perth for damp areas, visible leaks and suspected concealed pipe faults. Arrange an inspection, repair scope and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/water-leak-detection-perth.html#faq",
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
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/water-leak-detection-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/water-leak-detection-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/water-leak-detection-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Plumbing\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/plumbing.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/water-leak-detection-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/water-leak-detection-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/water-leak-detection-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-e2552e379ef9",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section\n        class=\"page-hero service-hero\"\n        style=\"--service-image: url(&quot;plumbing-leak-perth.png&quot;)\"\n      >\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Plumbing repair service</span>\n          <h1>Water Leak Detection Perth</h1><aside class=\"intent-safety\" data-intent-safety><p><strong>Is the concern at the water meter?</strong> Use <a href=\"https://www.watercorporation.com.au/help-and-advice/water-issues/leaks/leaking-meter\" target=\"_blank\" rel=\"noopener noreferrer\">Water Corporation guidance for a leaking meter</a> rather than assuming every leak is private pipework. Do not approach water near electrical equipment.</p></aside>\n<p>Arrange water leak detection and plumbing repair in Perth with {{ppp:shared:business.name:html}}. We investigate suspected hidden leaks, visible pipe leaks and leaking connections, then explain the access and repair work required. Our local team provides a property-specific repair plan and written quote rather than treating every damp patch as the same fault.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=water-leak-detection-perth.html\">Book water leak detection and repair</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Service assessment and next steps</h2><p>A damp patch does not by itself identify a failed pipe. Record where water appears, when it happens and whether it is spreading, from a safe position. Keep clear of water near wiring or electrical fittings; do not open walls to find the source. We assess the suspected leak and explain detection, access and repair as distinct parts of the quote. Replacement finishes and other restoration are included only when the written scope says so.</p><p><a href=\"insights-reporting-a-plumbing-leak.html\">How to report a suspected plumbing leak</a>. <a href=\"contact.html?service=water-leak-detection-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Leak detection and plumbing repairs for Perth properties</h2><h3>Visible pipe and connection leaks</h3><p>Water around a connection, fixture or accessible pipe gives us a useful starting point but does not always show the full path of the leak. We assess the affected plumbing and surrounding area before setting the repair scope. Tell us whether the leak is constant, occurs during use or has changed since you first noticed it.</p>\n<h3>Suspected leaks behind finishes or in concealed plumbing</h3><p>Dampness, recurring moisture and unexplained water around a property need a source investigation before repair access is agreed. We distinguish what is visible from what still needs checking. Opening walls, flooring or another finished surface is not assumed as part of every detection job; the reason and proposed access are discussed with you.</p>\n<h3>Leaks at bathroom and kitchen fixtures</h3><p>A leak can involve a tap, flexible connection, supply pipe or drainage connection. Identifying the relevant component helps separate a fixture repair from concealed pipework. For a leak clearly centred on the fitting, our <a href=\"tap-mixer-repairs-perth.html\">tap and mixer repair service</a> explains that scope; an active damaged pipe belongs with <a href=\"burst-pipe-repair-perth.html\">burst pipe repairs</a>.</p><figure class=\"service-editorial-figure\"><img loading=\"lazy\"\n            class=\"service-editorial-image\"\n            src=\"plumbing-leak-perth.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"Tradesperson checking a laundry plumbing connection\"\n             srcset=\"plumbing-leak-perth-480.webp 480w, plumbing-leak-perth-800.webp 800w, plumbing-leak-perth-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>From locating the source to agreeing the leak repair</h2><p>Our plumber reviews the symptoms, accessible plumbing and the pattern of water use associated with the leak. We explain the investigation needed to narrow down the source. The work required to find a leak and the work required to repair it can be different tasks, particularly when the affected pipe is not exposed.</p>\n<h3>Access, repair and reinstatement are separate decisions</h3><p>Once the source and access requirements are established, we explain the affected section or connection, the proposed repair and any additional work. The quote identifies the agreed plumbing scope and whether access or reinstatement is included. Do not assume that replacement finishes, painting or other building work are part of the plumbing repair unless stated.</p>\n<p>Following the approved work, we check the repaired connection or section and explain the outcome of the visit. We discuss any further moisture investigation or follow-up identified during the assessment, so the plumbing repair and any separate building work have a clear next step. Any additional work is explained and quoted before you approve it.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Keep away from water near electrical fittings or wiring. Do not open a wall or remove equipment covers to investigate. For immediate danger, Call 000.</p><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"gap-leak-findings\"><h2>Leak detection and repair: keep the findings with the quote</h2><p>Describe the visible water and when it changes, then ask the assessment to distinguish the observed source from anything still uncertain. A damp mark helps guide the investigation of the affected area. The proposed approach depends on the suspected location and safe access.</p><p>When reviewing the repair, separate investigation, opening finishes, the plumbing work and any restoration. If records or photographs are needed for the owner or managing agent, agree that requirement before booking. </p><ul class=\"intent-links\"><li><a href=\"insights-reporting-a-plumbing-leak.html\">Report a suspected leak clearly</a></li><li><a href=\"burst-pipe-repair-perth.html\">Repair of a known damaged pipe</a></li><li><a href=\"about.html\">Who is arranging the work and how to request relevant documents</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-water-leak-detection-perth\"><h2>Water leak detection: symptoms and service choices</h2><h3>Hidden leaks and higher water bills</h3><p>Yes. Water may escape where it is not readily visible, but a higher bill can also reflect changed use or other factors. Compare the timing and report meter observations; investigation is needed before attributing the bill to a concealed pipe leak.</p><h3>Water-meter movement without expected use</h3><p>Unexpected flow may indicate a leak or equipment still drawing water, including a running cistern. It does not by itself identify an underground leak. Follow Water Corporation guidance for meter concerns and arrange assessment of private plumbing where appropriate.</p><ul class=\"intent-links\"><li><a href=\"https://www.watercorporation.com.au/help-and-advice/water-issues/leaks/leaking-meter\">Water Corporation meter-leak guidance</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Water leak detection and repair costs</h2><div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Water leak detection price guide</h2>\n                <p>\n                  A practical guide for a standard leak-detection repair at a\n                  Perth property.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Water leak detection</h3>\n                  <p class=\"price-guide__range\">AUD $275–$550</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div><h3>Written quote and agreed scope</h3><p>The position of the suspected leak, the available access and whether the affected pipe or connection is exposed determine the investigation and repair scope. We distinguish the work needed to locate the source from the repair and any access or reinstatement work included in the written quote.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=water-leak-detection-perth.html\">Request a water leak detection and repair quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Water Leak Detection service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Finding the source before choosing the repair</h3><p>A concealed leak, a leaking tap and water entering from another building element can look similar from the surface. Tell us when the damp area changes and which nearby fixtures are used. Detection, opening-up, plumbing repair and restoring finishes are separate decisions in the written scope.</p><ul class=\"intent-links\"><li><a href=\"tap-mixer-repairs-perth.html\">Leaks at taps and mixers</a></li><li><a href=\"burst-pipe-repair-perth.html\">Repairing a known damaged pipe</a></li><li><a href=\"shower-plumbing-repairs-perth.html\">Shower Plumbing Leak Repairs Perth</a></li><li><a href=\"water-pressure-perth.html\">Low Water Pressure &amp; Water Hammer Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:8:question}}</h3>{{ppp:faq:8:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:9:question}}</h3>{{ppp:faq:9:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#plumbing\">Read related plumbing answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "How is access for a hidden-leak investigation assessed?",
"answer": "<p>Access and the suspected source determine what investigation is appropriate. Do not assume that every leak can be located or repaired without opening finishes. The proposed method and any access or restoration work need to be explained before approval.</p>" as TrustedHtml
},
{
"question": "Does a high water bill prove there is a leaking pipe?",
"answer": "<p>No. It is useful context, not a diagnosis. Include any observed water, changes in use and available records. If the concern is at the water meter or supply network, use Water Corporation guidance rather than assuming it is private pipework.</p>" as TrustedHtml
},
{
"question": "Concealed leaks without visible damage",
"answer": "<p>A concealed leak is possible without visible damage. A bill increase alone is insufficient to diagnose one. <a href=\"#learn-about-water-leak-detection-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Unexpected water-meter movement",
"answer": "<p>Flow without expected use can indicate a leak or a fixture still drawing water. It cannot locate the source. <a href=\"#learn-about-water-leak-detection-perth\">Read the explanation.</a></p>" as TrustedHtml
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
"question": "Hidden-leak investigation",
"answer": "<p>Describe the property area, any visible moisture and changes you have noticed. This helps us understand the request before work is arranged.</p>" as TrustedHtml
},
{
"question": "Leak enquiry details",
"answer": "<p>Include the address, affected room or outdoor area, when the issue began, whether water is active and any safe photos.</p>" as TrustedHtml
},
{
"question": "Water near electrical equipment",
"answer": "<p>Keep clear of the area and do not touch wet electrical equipment. If there is immediate danger, move to safety and call 000.</p>" as TrustedHtml
},
{
"question": "Leak location and repair scopes",
"answer": "<p>They can be separate parts of the scope. We explain the investigation, access and proposed repair before work proceeds, and identify any additional access or reinstatement work in the written quote.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book water leak detection and repair</h2><p>Include the suburb, where the water appears, when it happens and which fixtures are nearby. Previous repairs and available access information help us plan the visit; you do not need to remove finishes before contacting us. Our local team covers <a href=\"service-areas.html\">all six Perth service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=water-leak-detection-perth.html\">Request a visit &amp; written quote</a></div></section>" as TrustedHtml
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
"label": "Water\n            Leak Detection Perth",
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
"chrome:header-965ba50d3525:71": "contact.html?service=water-leak-detection-perth.html",
"chrome:header-965ba50d3525:72": ""
}
};
