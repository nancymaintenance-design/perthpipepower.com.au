import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "hot-water-problems-perth.html",
"kind": "service",
"seo": {
"title": "Hot Water Repairs & Replacement Perth | Ellis",
"description": "Hot water repairs and system replacement in Perth. Our local plumbing and electrical team assesses the fault and provides a repair plan and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/hot-water-problems-perth.html#faq",
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
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/hot-water-problems-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/hot-water-problems-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/hot-water-problems-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"Plumbing\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/plumbing.html\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 3,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/hot-water-problems-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/hot-water-problems-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/hot-water-problems-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-e2552e379ef9",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section\n        class=\"page-hero service-hero\"\n        style=\"--service-image: url(&quot;hot-water-drainage-perth.png&quot;)\"\n      >\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Plumbing repair service</span>\n          <h1>Hot Water Repairs &amp; System Replacement Perth</h1>\n<p>No hot water, an unreliable shower temperature or a leaking hot-water unit? {{ppp:shared:business.name:html}} provides hot-water repairs and replacement assessments across Perth. Our local plumbing and electrical team investigates the fault, explains the practical repair options and provides a written quote before the agreed work proceeds.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=hot-water-problems-perth.html\">Book hot-water repair</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Hot Water Repair and Replacement Assessment</h2><p>Tell us whether one outlet or the whole property has lost hot water, and whether temperature or flow has changed. Do not remove equipment covers or touch wiring; keep clear of water near electrical equipment. Plumbing connections and electrical heating components may need different trades. We assess the system and explain the repair options. If replacement is considered, the quote separately identifies equipment, connections and installation requirements rather than assuming a new unit will suit.</p><p><a href=\"insights-hot-water-plumbing-or-electrical.html\">Hot-water problem: plumbing or electrical?</a>. <a href=\"contact.html?service=hot-water-problems-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Hot-water repairs for homes and managed properties</h2><h3>No hot water or supply that runs out early</h3><p>A complete loss of hot water and a system that heats but cannot keep up are different service requests. We establish which outlets are affected, whether the change is constant or intermittent, and the type of equipment serving the property. This helps focus the assessment on the unit and supply rather than replacing parts on the basis of one symptom.</p>\n<h3>Temperature, pressure and leaking connections</h3><p>We assess inconsistent temperature, reduced hot-water flow and visible leaks around accessible connections. A problem at one shower can have a different scope from a problem affecting every hot tap. The repair plan distinguishes the hot-water equipment from local fixtures, pipework and connections so you can see what work is actually needed.</p>\n<h3>Plumbing and electrical work through one local team</h3><p>Where a hot-water fault involves electrical components as well as water connections, we coordinate the relevant licensed trades within the agreed job. Tell us the system location and any readable model information; you do not need to identify the failed component. See our <a href=\"insights-hot-water-plumbing-or-electrical.html\">hot-water plumbing and electrical fault guide</a> for the distinction.</p><figure class=\"service-editorial-figure\"><img srcset=\"hot-water-drainage-perth-480.webp 480w, hot-water-drainage-perth-960.webp 960w\" sizes=\"(max-width: 540px) calc(100vw - 48px), 480px\" loading=\"lazy\"\n            class=\"service-editorial-image\"\n            src=\"hot-water-drainage-perth.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"Plumbing service illustration showing drain access beside hot-water equipment\"\n\n          /></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>How we assess and complete your hot-water repair</h2><p>Our visit starts with the reported loss of service, the equipment location and safe access to the installation. We inspect the relevant connections and investigate the reported fault. Before repair work, we explain the findings, the proposed parts or connection work, and any access or additional trade requirements that affect the scope.</p>\n<h3>Hot-water repair and replacement options</h3><p>Repair is assessed against the condition of the existing installation, the identified fault and compatible parts. Replacement is a separate option when the equipment condition or required work makes a repair unsuitable. We discuss the property requirements and proposed replacement connections before quoting; a larger system or different equipment is not assumed to fit the existing installation.</p>\n<p>For an approved repair or replacement, the agreed scope includes the relevant connection work and checks for that work. We explain what has been completed and any remaining issues identified during the visit. If the visible leak appears to come from another pipe or fixture, our <a href=\"water-leak-detection-perth.html\">water leak detection service</a> is the appropriate related starting point.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Do not remove covers, touch wiring or approach water near electrical equipment. Keep clear of a hazardous unit. For immediate danger, Call 000.</p><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"gap-hot-water-replacement\"><h2>Hot-water system replacement: compare the complete scope</h2><p>Compare repair and replacement options for the reported hot-water problem. Before choosing replacement, compare the condition of the existing system and the agreed repair option with the proposed equipment and connection work. A loss of hot water alone does not establish that the unit must be replaced.</p><p>For a replacement quote, confirm product supply, removal of the old unit, plumbing connections, any fixed electrical work and the checks included for that work. Access changes and restoration of finishes should be identified separately. The existing price range is a guide for a standard package, not a universal price for every system or property.</p><p>State the system type if safely known. Gas, heat-pump, refrigeration and manufacturer-specific tasks still need the relevant capability confirmed; this comparison does not expand the accepted specialist service range.</p><ul class=\"intent-links\"><li><a href=\"insights-hot-water-plumbing-or-electrical.html\">Is the hot-water problem plumbing or electrical?</a></li><li><a href=\"fixtures-appliances-perth.html\">Product compatibility and connection planning</a></li><li><a href=\"faq.html\">Written quote inclusions and additional approval</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-hot-water-problems-perth\"><h2>Hot-water loss at one outlet or across the property</h2><p>Sudden loss of hot water can involve heating, control, supply or plumbing. Hot water at taps but not at the shower can instead involve a local fitting or mixing problem. The outlet pattern helps direct the assessment without establishing which component has failed. Do not open the unit or repeatedly reset protection to investigate.</p><p>An electric hot-water system and its associated installation can also be involved in safety-switch trips. The timing helps the electrician assess the fault; it does not identify the failed part. The relevant plumbing and electrical tasks follow the findings. Gas, heat-pump and manufacturer-specific work require the relevant specialist capability to be confirmed.</p><ul class=\"intent-links\"><li><a href=\"insights-hot-water-plumbing-or-electrical.html\">Separate plumbing and electrical hot-water checks</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Hot-water repair and replacement costs</h2><div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Hot-water price guide</h2>\n                <p>\n                  A practical guide for standard hot-water repair and\n                  replacement work at a Perth property.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Hot-water repair</h3>\n                  <p class=\"price-guide__range\">AUD $198–$660</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>System replacement</h3>\n                  <p class=\"price-guide__range\">AUD $1,980–$4,950</p>\n                  <p class=\"price-guide__unit\">per package · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div><h3>Written quote and agreed scope</h3><p>The system type, symptoms, affected fixtures and access help define whether the work concerns the water connections, temperature or supply, or an electrical component. Repairs and replacement are separate scopes. Equipment, connection changes and any additional trade work are identified in the written quote for the property.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=hot-water-problems-perth.html\">Request a hot-water repair quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Hot Water Repairs &amp; System Replacement service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><ul class=\"intent-links\"><li><a href=\"insights-hot-water-plumbing-or-electrical.html\">Plumbing or electrical hot-water problem?</a></li><li><a href=\"fixtures-appliances-perth.html\">Connection and replacement scope</a></li><li><a href=\"faq.html\">Booking and quote questions</a></li><li><a href=\"water-pressure-perth.html\">Low Water Pressure &amp; Water Hammer</a></li><li><a href=\"emergency-plumber-perth.html\">24-Hour Emergency Plumber</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div>\n\n<div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:8:question}}</h3>{{ppp:faq:8:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:9:question}}</h3>{{ppp:faq:9:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#plumbing\">Read related plumbing answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Can I buy a new hot-water unit before the assessment?",
"answer": "<p>You can ask about a proposed product, but do not assume it suits the existing supply, connections or installation location. Confirm equipment compatibility, required trades and the full installation scope before purchase or approval.</p>" as TrustedHtml
},
{
"question": "Are gas and heat-pump systems automatically included?",
"answer": "<p>No. Give the system type and proposed task. Any gas, refrigeration or other specialist component must be checked against the appropriate service capability and authorisation before work is accepted.</p>" as TrustedHtml
},
{
"question": "Loss of hot water",
"answer": "<p>Several supply, heating or plumbing faults can interrupt hot water. The system type and affected outlets guide assessment. <a href=\"#learn-about-hot-water-problems-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Different temperatures between outlets",
"answer": "<p>A shower-only temperature problem can involve its fitting or mixing arrangement rather than failure of the whole heater. <a href=\"#learn-about-hot-water-problems-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Electrical trips at the hot-water system",
"answer": "<p>A heater or its electrical supply may be faulty. Do not bypass the safety switch or keep resetting it. <a href=\"#learn-about-hot-water-problems-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Reporting symptoms without diagnosis",
"answer": "<p>Describe the observable change and property context. We inspect the affected area on site to establish the cause and confirm the repair scope. If more access is needed, we agree it with you first.</p>" as TrustedHtml
},
{
"question": "Plumbing and electrical hot-water faults",
"answer": "<p>It can be either, depending on the system and symptom. Describe the issue rather than trying to diagnose it yourself.</p>" as TrustedHtml
},
{
"question": "Hot-water enquiry details",
"answer": "<p>Include the property address, unit location, what changed, affected fixtures and any safely readable unit information.</p>" as TrustedHtml
},
{
"question": "Safety around unit covers",
"answer": "<p>Do not remove covers or handle wiring.</p>" as TrustedHtml
},
{
"question": "Repair and replacement assessment",
"answer": "<p>We assess the existing system and explain the repair scope. If replacement needs to be considered, we discuss equipment and connection requirements as a separate option in the written quote. No replacement is assumed from the initial enquiry.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book hot-water repair</h2><p>Include the suburb, unit location, change in supply and whether one or all outlets are affected. For rentals, add the property manager, access contact and work-order reference. We serve Thornlie within our Southern Suburbs coverage as well as the other Perth regions. Our local team covers <a href=\"service-areas.html\">all six service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=hot-water-problems-perth.html\">Request a visit &amp; written quote</a></div></section>" as TrustedHtml
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
"label": "Hot\n            Water Problems Perth",
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
"chrome:header-965ba50d3525:71": "contact.html?service=hot-water-problems-perth.html",
"chrome:header-965ba50d3525:72": ""
}
};
