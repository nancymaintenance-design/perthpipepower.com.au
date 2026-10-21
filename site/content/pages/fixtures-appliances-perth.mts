import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "fixtures-appliances-perth.html",
"kind": "service",
"seo": {
"title": "Fixture & Appliance Connections Perth | Ellis",
"description": "Dishwasher and fixture connections in Perth. Assess product compatibility and plumbing or electrical work, with an on-site assessment and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html",
"robots": null,
"social": [
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
"@id": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html#webpage",
"url": "{{ppp:seo-value:canonical:raw}}",
"name": "{{ppp:h1-value:raw}}",
"description": "Fixture and appliance connections in Perth: taps, toilets, showers, kitchens and laundries. Discuss plumbing and electrical scope and get a written quote.",
"inLanguage": "en-AU",
"isPartOf": {
"@id": "{{ppp:shared:business.origin:raw}}/#website"
},
"about": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"breadcrumb": {
"@id": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html#breadcrumb",
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
"name": "{{ppp:h1-value:raw}}",
"description": "{{ppp:seo-value:description:raw}}",
"serviceType": "{{ppp:h1-value:raw}}",
"areaServed": {
"@type": "City",
"name": "Perth"
},
"@id": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/fixtures-appliances-perth.html#faq",
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
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/fixtures-appliances-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"Fixture and appliance connections in Perth: taps, toilets, showers, kitchens and laundries. Discuss plumbing and electrical scope and get a written quote.\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/fixtures-appliances-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/fixtures-appliances-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/fixtures-appliances-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/fixtures-appliances-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/fixtures-appliances-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-74308fc29fff",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Perth homes &amp; managed properties</span>\n          <h1>Fixture, Tap &amp; Appliance Connection Services in Perth</h1>\n<p>Book fixture, tap and appliance connection services in Perth for kitchen, bathroom and laundry work. {{ppp:shared:business.name:html}} assesses the existing plumbing and electrical connections, explains the installation requirements and provides a written quote. Our local team coordinates the relevant licensed trades for the agreed connection or repair scope.</p>\n        <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=fixtures-appliances-perth.html\">Book fixture and appliance connections</a></div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Fixture and Appliance Connection Assessment</h2><p>Tell us the fixture or appliance, its intended location and whether you want a repair, replacement or new connection. Product details help, but you do not need to dismantle plumbing or electrical equipment to report the job safely. We assess mounting, access and the existing connections before agreeing the work. The quote separates product supply, connection work and any additional plumbing or electrical tasks. A purchased product is not automatically compatible with the property.</p><p><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Prepare clear work and approval information</a>. <a href=\"contact.html?service=fixtures-appliances-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Kitchen, bathroom and laundry installation services</h2><h3>Taps, sinks and bathroom fixtures</h3><p>We assess fitting dimensions, mounting arrangements and accessible connections before replacing or connecting a fixture. A new fitting must suit the existing installation as well as the intended use. For a fault at an existing tap rather than an installation request, our <a href=\"tap-mixer-repairs-perth.html\">tap and mixer repairs</a> provide the more focused service.</p>\n<h3>Laundry and kitchen appliance connections</h3><p>Washing-machine and other appliance connection requests need the product specifications and existing connections considered. Tell us whether the appliance has already been supplied, where it will be installed and whether old equipment needs disconnection within the job. Water, drainage and electrical connection requirements are distinct items in the proposed scope. For outlet work, see <a href=\"lighting-power-points-perth.html\">power-point installation and repairs</a>.</p>\n<h3>Repairs around existing fixture connections</h3><p>Visible water under a sink or near a fixture needs the source assessed before parts are selected. We identify whether the request concerns an accessible connection, the fixture itself or another plumbing issue. For a leaking cistern or flush problem, use <a href=\"toilet-repairs-perth.html\">toilet repairs</a>; for temperature or hot-water supply faults, see <a href=\"hot-water-problems-perth.html\">hot-water repairs</a>.</p><figure class=\"service-editorial-figure\"><img\n            class=\"service-editorial-image\"\n            src=\"fixtures-appliances-service.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"{{ppp:shared:business.name:html}} plumber repairing bathroom plumbing fixtures\"\n            loading=\"lazy\"\n            decoding=\"async\" srcset=\"fixtures-appliances-service-480.webp 480w, fixtures-appliances-service-800.webp 800w, fixtures-appliances-service-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>How fixture and appliance work is scoped and quoted</h2><p>We review the selected product, installation location, accessible services and the result you need. The assessment establishes compatibility and any change required to existing pipework or wiring. Send the product details if you have already purchased equipment; we explain any installation requirement before assuming that it can be connected directly.</p>\n<h3>Coordinate connections with the wider renovation</h3><p>Kitchen and bathroom work may need access planned around cabinetry, benchtops and other trades. We clarify what is ready for connection and what remains outside the agreed scope. Product supply, disconnection, installation and separate building work are identified rather than combined into an unclear package. This gives homeowners and property managers a usable basis for approval.</p>\n<p>For authorised work, our team completes the agreed connections and checks the relevant installation. We explain the completed scope and any additional issue found, including whether a separate appliance service is needed. Where electrical fittings or outlets also need work, see our <a href=\"electrical.html\">electrical repair and installation services</a> and include these requirements in your booking.</p></div><!-- keyword-gap:start --><div class=\"keyword-gap-content\" data-keyword-gap><div class=\"keyword-gap-part\" id=\"gap-dishwasher-installation\"><h2>Dishwasher installation enquiries</h2><p>For a dishwasher connection, tell us whether it is replacing an appliance in the same space or going into a new location. An existing cupboard opening does not establish that the water, drainage and electrical arrangements suit the new product. Share the model or installation sheet if available; you can enquire before buying.</p><p>Our written quote distinguishes connection to suitable existing services from new plumbing or fixed electrical work. For dishwasher installation, we can supply the agreed appliance, remove the old unit and take it away as part of the installation package. Cabinet alterations and internal appliance repairs need separate arrangements. We confirm the product, connections and any additional work before you approve the quote.</p><ul><li>Product model and intended kitchen position.</li><li>Existing appliance or a new location, with any known access restriction.</li><li>Who supplies the product and whether removal or another trade needs coordination.</li></ul><ul class=\"intent-links\"><li><a href=\"lighting-power-points-perth.html#gap-power-point-installation\">Electrical outlet installation and compatibility</a></li><li><a href=\"tap-mixer-repairs-perth.html\">Leaks at an existing tap or connection</a></li><li><a href=\"contact.html?service=fixtures-appliances-perth.html\">Discuss a dishwasher connection and written scope</a></li></ul></div><div class=\"keyword-gap-part\" id=\"gap-toilet-installation\"><h2>Toilet installation and cistern repair options</h2><p>A toilet installation enquiry concerns the complete fixture and its connections. A running cistern, a faulty flush mechanism or a leaking component may need a repair rather than a new suite. Water rising in the bowl belongs with drainage assessment, not an assumption that the toilet must be replaced.</p><p>Before purchasing a replacement, discuss its dimensions, the existing connection position and access to the room. Confirm the accepted installation scope, product supply, removal of the old fixture and any separate floor, wall or connection work. A product-only price does not include every task needed at the property.</p><ul class=\"intent-links\"><li><a href=\"toilet-repairs-perth.html\">Toilet and cistern repair assessment</a></li><li><a href=\"blocked-drains-perth.html\">Blocked toilet and drain-clearing scope</a></li><li><a href=\"contact.html?service=fixtures-appliances-perth.html\">Ask about a proposed toilet replacement</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-fixtures-appliances-perth\"><h2>Laundry supply taps, waste connections and appliance faults</h2><p>Water overflowing as a washing machine empties may involve an external waste connection, restricted drainage or an appliance fault. The location of the water and whether other fixtures drain normally help distinguish the plumbing work. Internal washing-machine repairs are separate from its supply and waste connections.</p><p>We assess leaking washing-machine supply taps and accessible connections, then agree the relevant repair or replacement. For a replacement appliance, its installation details determine compatibility with the existing services. A plumbing connection repair is not a promise to repair internal appliance parts.</p><ul class=\"intent-links\"><li><a href=\"blocked-drains-perth.html\">Drainage symptoms and clearing scope</a></li></ul></div><div class=\"keyword-gap-part\" id=\"confirmed-supply-removal\"><h2>Supply, removal and taking away the old unit</h2><p>For dishwasher and toilet installations, we can supply the agreed product, remove the old unit and take it away as part of the installation package. The written quote identifies the selected product, connection work and any additional access or making good. Cabinet changes, bathroom renovation and internal appliance repairs are not automatically included.</p><ul class=\"intent-links\"><li><a href=\"dishwasher-installation-perth.html\">Dishwasher supply and installation</a></li><li><a href=\"toilet-installation-perth.html\">Toilet supply and installation</a></li></ul></div></div><!-- keyword-gap:end --></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Fixture and appliance connection quotes</h2><p>We provide a written quote after assessing the equipment, existing connections and installation requirements. Product supply and connection work are identified separately; no fixed package is assumed before assessment.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Fixture, Tap &amp; Appliance Connection Services service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><ul class=\"intent-links\"><li><a href=\"tap-mixer-repairs-perth.html\">Tap and mixer repair or replacement</a></li><li><a href=\"lighting-power-points-perth.html\">Electrical outlet and connection requirements</a></li><li><a href=\"plumbing.html\">plumbing repairs and installation scope</a></li><li><a href=\"dishwasher-installation-perth.html\">Dishwasher Installation &amp; Connections</a></li><li><a href=\"toilet-installation-perth.html\">Toilet Installation &amp; Replacement</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:8:question}}</h3>{{ppp:faq:8:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:9:question}}</h3>{{ppp:faq:9:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:10:question}}</h3>{{ppp:faq:10:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#electrical\">Read related electrical answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Does appliance connection include repairing the appliance itself?",
"answer": "<p>Not automatically. Plumbing connections, fixed electrical work and an internal appliance fault are different scopes. Describe the problem or proposed installation so the relevant work can be confirmed before booking.</p>" as TrustedHtml
},
{
"question": "Can a supplied appliance be connected without changing pipework or wiring?",
"answer": "<p>That depends on its specifications, location and existing services. Ask the quote to separate the connection from any required pipe, cable, circuit or access work.</p>" as TrustedHtml
},
{
"question": "Dishwasher connection and appliance repair",
"answer": "<p>A connection request concerns the water, drainage and any agreed electrical arrangements. An internal appliance fault is a separate service. Describe the model, intended location and task so the accepted scope can be confirmed.</p>" as TrustedHtml
},
{
"question": "Toilet compatibility before purchase",
"answer": "<p>Discuss the proposed product first. Dimensions, the existing connection position and access can affect installation. Confirm product supply, removal and any separate connection or restoration work before treating a product price as the full installed cost.</p>" as TrustedHtml
},
{
"question": "Laundry drainage during appliance discharge",
"answer": "<p>A waste-connection restriction or drainage problem is possible; appliance faults require a separate scope. <a href=\"#learn-about-fixtures-appliances-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Washing-machine tap replacement",
"answer": "<p>Repair or replacement of the water supply tap can be assessed separately from internal washing-machine repairs. <a href=\"#learn-about-fixtures-appliances-perth\">Read the explanation.</a></p>" as TrustedHtml
},
{
"question": "Product details before installation",
"answer": "<p>Tell us the fixture, equipment or upgrade you need and your Perth suburb. We assess the site and connections, confirm the requirements and qualified work arrangements and provide the written quote. Additional access is agreed with you first.</p>" as TrustedHtml
},
{
"question": "Fixture and appliance request details",
"answer": "<p>Include the fixture or appliance, the room, the issue you have noticed, the property address and whether water, drainage or electrical supply is involved.</p>" as TrustedHtml
},
{
"question": "Plumbing and electrical coordination",
"answer": "<p>Explain the complete requirement so the relevant plumbing and electrical work can be considered as part of the scope.</p>" as TrustedHtml
},
{
"question": "Connection costs and agreed scope",
"answer": "<p>Pricing is based on the agreed scope, property access, materials or parts required and the condition confirmed through the enquiry or assessment process.</p>" as TrustedHtml
},
{
"question": "Connection work and appliance servicing",
"answer": "<p>Connection work and repair of the appliance itself are different services. We identify the installation and connection tasks in the written quote and explain the boundary if the request involves an internal appliance fault.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book fixture and appliance connections</h2><p>Include the suburb, fixture or appliance type, product specifications, planned position and whether supply or installation only is required. Let us know about cabinetry access and other trade schedules. Our local team covers <a href=\"service-areas.html\">all six service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=fixtures-appliances-perth.html\">Request a visit &amp; written quote</a><form class=\"contact-card\" data-enquiry-form novalidate>\n              <h2>Request a repair</h2>\n              <p>\n                Send your suburb and a short description of the repair or installation required. Our local team will contact you to arrange an on-site assessment and confirm the work scope and written quote.\n              </p>\n              <div class=\"honeypot\" aria-hidden=\"true\">\n                <label for=\"fixtures-company\">Company</label\n                ><input\n                  id=\"fixtures-company\"\n                  name=\"company\"\n                  tabindex=\"-1\"\n                  autocomplete=\"off\"\n                />\n              </div>\n              <label for=\"fixtures-name\">Name</label\n              ><input\n                id=\"fixtures-name\"\n                name=\"name\"\n                autocomplete=\"name\"\n                required\n              /><label for=\"fixtures-phone\">Phone</label\n              ><input\n                id=\"fixtures-phone\"\n                name=\"phone\"\n                type=\"tel\"\n                autocomplete=\"tel\"\n                required\n              /><label for=\"fixtures-email\">Email</label\n              ><input\n                id=\"fixtures-email\"\n                name=\"email\"\n                type=\"email\"\n                autocomplete=\"email\"\n                required\n              /><label for=\"fixtures-address\">Property address or suburb</label\n              ><input\n                id=\"fixtures-address\"\n                name=\"address\"\n                autocomplete=\"street-address\"\n                required\n              /><label for=\"fixtures-type\">Service type</label\n              ><select id=\"fixtures-type\" name=\"type\">\n                <option>Fixtures &amp; appliances</option>\n                <option>Plumbing</option>\n                <option>Electrical</option>\n                <option>Not sure</option></select\n              ><label for=\"fixtures-message\">What is happening?</label\n              ><textarea\n                id=\"fixtures-message\"\n                name=\"message\"\n                required\n              ></textarea>\n              <p class=\"form-note\">\n                Do not approach a hazard to take a photo. For immediate danger,\n                call 000.\n              </p>\n              <p class=\"form-status\" aria-live=\"polite\"></p>\n              <button class=\"button\" type=\"submit\">Send enquiry</button>\n            </form></div></section>" as TrustedHtml
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
"label": "Fixtures & appliances",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n            <a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}\n          </p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-739fd2b7da8c:0": "contact.html?service=fixtures-appliances-perth.html"
}
};
