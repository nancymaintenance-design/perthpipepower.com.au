import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "renewables-smart-home-perth.html",
"kind": "service",
"seo": {
"title": "Smart Home & Energy Electrical Perth | Ellis",
"description": "Smart home and energy electrical services in Perth. Discuss lighting controls, automation and equipment connections, with assessed scope and written quotes.",
"canonical": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html#service",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/renewables-smart-home-perth.html#faq",
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
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/renewables-smart-home-perth.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/renewables-smart-home-perth.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/renewables-smart-home-perth.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"serviceType\": \"{{ppp:h1-value:json}}\",\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"@id\": \"{{ppp:shared:business.origin:json}}/renewables-smart-home-perth.html#service\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/renewables-smart-home-perth.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/renewables-smart-home-perth.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:2:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:2:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-74308fc29fff",
"mainAttributes": {
"id": "main",
"data-commercial-service": ""
},
"hero": "\n<section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Perth homes &amp; managed properties</span>\n          <h1>Smart Home &amp; Energy Electrical Services in Perth</h1>\n<p>Arrange smart-home and energy electrical services in Perth with {{ppp:shared:business.name:html}}. Our local electrical team assesses smart lighting, home-control upgrades and electrical work associated with energy equipment. We define the equipment, compatibility and installation requirements before providing a written quote, so the proposed upgrade has a clear scope.</p>\n        <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=renewables-smart-home-perth.html\">Book smart-home and energy electrical work</a></div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n<section class=\"section service-editorial\"><div class=\"shell service-reading\"><nav class=\"service-jump-links\" aria-label=\"On this service page\"><a href=\"#service-work\">Services</a><a href=\"#service-method\">Repair &amp; installation</a><a href=\"#service-quote\">Costs &amp; quote</a><a href=\"#service-faq\">FAQs</a><a href=\"#service-booking\">Book a visit</a></nav><aside class=\"service-answer\" data-service-answer><h2>Service assessment and next steps</h2><p>Describe the control, lighting or equipment connection you want assessed, along with product information if available. Do not open covers or touch wiring to inspect the existing installation. We check the proposed scope, compatibility, access and connection requirements before quoting.  For managed premises, identify the person who can approve the proposed electrical work.</p><p><a href=\"insights-tenant-property-manager-maintenance-handover.html\">Keep equipment requests and work approval together</a>. <a href=\"contact.html?service=renewables-smart-home-perth.html\">Request an assessment and written quote</a>.</p></aside><div id=\"service-work\" class=\"service-editorial-part\"><h2>Smart-home electrical installations and upgrade assessments</h2><h3>Smart lighting and electrical controls</h3><p>Smart switches and lighting controls need to be considered with the existing fittings, wiring and intended operation. Tell us what you want to control, which rooms are involved and any selected equipment. Our assessment establishes the installation requirements. If a current circuit keeps tripping, book <a href=\"safety-switch-tripping-perth.html\">safety-switch and RCD repairs</a> before treating it as an upgrade request.</p>\n<h3>Home automation and linked equipment</h3><p>An upgrade can involve both the visible control and the equipment it needs to operate. We review product specifications, existing connections and the proposed integration. A working control panel alone does not establish that every connected function has been included; the quote identifies the actual equipment and functions within the agreed job.</p>\n<h3>Electrical work associated with energy equipment</h3><p>For work involving existing energy equipment or a proposed upgrade, send the model information and the result you need. We assess the relevant electrical requirements and define the proposed scope. Equipment supply, manufacturer servicing, commissioning and specialised installation approvals are not assumed to be included in a general electrical connection request.</p><figure class=\"service-editorial-figure\"><img\n            class=\"service-editorial-image\"\n            src=\"renewables-smart-home-service.png\"\n            width=\"1672\"\n            height=\"941\"\n            alt=\"{{ppp:shared:business.name:html}} electrician configuring smart-home and energy equipment\"\n            loading=\"lazy\"\n            decoding=\"async\" srcset=\"renewables-smart-home-service-480.webp 480w, renewables-smart-home-service-800.webp 800w, renewables-smart-home-service-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"></figure></div>\n<div id=\"service-method\" class=\"service-editorial-part\"><h2>How smart-home and energy work is scoped and quoted</h2><p>We begin with the property, existing installation and equipment specifications. Our electrician assesses compatibility, access and the required connections, cable routes or circuit work. The written quote describes those tasks so you can distinguish the electrical installation from product supply, software configuration or other services that are not included.</p>\n<h3>A defined upgrade rather than an assumed package</h3><p>Tell us whether you want to improve a current setup or install selected new equipment. We discuss the requirements for the proposed controls and the existing property before finalising the scope. We assess equipment compatibility and the requested controls before confirming the installation plan.</p>\n<p>For approved work, we complete and check the relevant electrical installation and explain the functions included in the scope. Product-specific instructions remain important for ongoing use. If the request is simply a new light or outlet, our <a href=\"lighting-power-points-perth.html\">lighting and power-point services</a> offer a focused route; existing loss-of-power issues belong with <a href=\"power-faults-perth.html\">electrical fault finding</a>.</p></div><p class=\"service-trade-note\">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class=\"service-safety\"><strong>Safety:</strong> Do not open electrical or energy equipment, alter wiring or handle damaged components to gather information. For immediate danger, Call 000.</p></div></section>" as TrustedHtml
},
{
"id": "service-quote",
"kind": "rich",
"html": "\n<section class=\"section service-quote\" id=\"service-quote\"><div class=\"shell service-reading\"><h2>Smart-home and energy electrical installation quotes</h2><p>We provide a written quote after assessing the equipment, existing connections and installation requirements. Product supply and connection work are identified separately; no fixed package is assumed before assessment.</p><h3>Written quote and agreed scope</h3><p>Existing equipment, manufacturer specifications, the intended controls and integration with the property determine the installation plan. Compatibility, cable routes, access and any additional electrical work are assessed before quoting. The scope states the equipment and integration work included rather than promising compatibility or energy savings before the site assessment.</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href=\"contact.html?service=renewables-smart-home-perth.html\">Request a smart-home and energy electrical work quote</a>.</p></div></section>" as TrustedHtml
},
{
"id": "service-faq",
"kind": "faq",
"container": "\n<section class=\"section faq service-editorial-faq\" id=\"service-faq\"><div class=\"shell service-reading\"><h2>Smart Home &amp; Energy Electrical Services service guidance</h2><!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Confirm the product before planning the electrical work</h3><p>Smart lighting or controls may involve network settings, product configuration, fixed wiring or a combination. State the brand, model and intended result if known. Solar, battery, EV charging and specialist energy work are research topics, not automatic service commitments on this page. Confirm the relevant capability and scope before purchasing equipment or approving installation.</p><ul class=\"intent-links\"><li><a href=\"lighting-power-points-perth.html\">Lighting and outlet installation</a></li><li><a href=\"electrical.html\">General electrical service scope</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div><!-- site-intent:end --><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:5:question}}</h3>{{ppp:faq:5:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:6:question}}</h3>{{ppp:faq:6:answer}}</div>\n<div class=\"service-information\"><h3>{{ppp:faq:7:question}}</h3>{{ppp:faq:7:answer}}</div><p class=\"related-faq-link\"><a href=\"faq.html#electrical\">Read related electrical answers</a></p></div></section>" as TrustedHtml,
"items": [
{
"question": "Can you work with every smart-home brand or protocol?",
"answer": "<p>No universal compatibility is assumed. Give the product details and existing system so the proposed configuration and electrical scope can be assessed before acceptance.</p>" as TrustedHtml
},
{
"question": "Does this page confirm solar, battery or EV-charger installation?",
"answer": "<p>No. Those products can require specialist capability and a separate agreed scope. Ask about the specific equipment and work; this general enquiry is not confirmation that every energy system can be installed or repaired.</p>" as TrustedHtml
},
{
"question": "Product details before installation",
"answer": "<p>Tell us the fixture, equipment or upgrade you need and your Perth suburb. We assess the site and connections, confirm the requirements and qualified work arrangements and provide the written quote. Additional access is agreed with you first.</p>" as TrustedHtml
},
{
"question": "Safely taken photos",
"answer": "<p>Photos are optional: email safely taken photos to {{ppp:shared:business.email:html}}. You can contact us without photos. Do not approach a hazard, remove covers or dismantle equipment to take a photo.</p>" as TrustedHtml
},
{
"question": "Smart-home enquiry details",
"answer": "<p>Include the property address, the equipment or control you are considering, the rooms affected and the outcome you want to achieve.</p>" as TrustedHtml
},
{
"question": "Existing energy-equipment assessment",
"answer": "<p>Describe the equipment and the behaviour you have noticed. Leave covers and electrical connections in place until the work can be assessed safely.</p>" as TrustedHtml
},
{
"question": "Electrical upgrade costs and scope",
"answer": "<p>Pricing is based on the agreed electrical scope, equipment requirements, property access, materials and any circuit work confirmed through the enquiry or assessment process.</p>" as TrustedHtml
},
{
"question": "Compatibility before approval",
"answer": "<p>Compatibility forms part of the installation assessment. We review the selected equipment and existing setup, then identify the proposed functions and electrical tasks in the written scope rather than promising universal integration.</p>" as TrustedHtml
}
]
},
{
"id": "service-booking",
"kind": "rich",
"html": "\n<section class=\"section contact-band service-booking\" id=\"service-booking\"><div class=\"shell service-reading\"><h2>Book smart-home and energy electrical work</h2><p>Send the suburb, equipment model, existing setup and the controls or functions you want. Product specifications and available access help define the installation; photos are not a prerequisite for contacting us. Our local team covers <a href=\"service-areas.html\">all six Perth service regions</a> from our office at {{ppp:shared:business.addressLine:html}}.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p><a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a> <a class=\"button service-book-button\" href=\"contact.html?service=renewables-smart-home-perth.html\">Request a visit &amp; written quote</a><form class=\"contact-card\" data-enquiry-form novalidate>\n              <h2>Request a repair</h2>\n              <p>\n                Send your suburb and a short description of the repair or installation required. Our local team will contact you to arrange an on-site assessment and confirm the work scope and written quote.\n              </p>\n              <div class=\"honeypot\" aria-hidden=\"true\">\n                <label for=\"smart-company\">Company</label\n                ><input\n                  id=\"smart-company\"\n                  name=\"company\"\n                  tabindex=\"-1\"\n                  autocomplete=\"off\"\n                />\n              </div>\n              <label for=\"smart-name\">Name</label\n              ><input\n                id=\"smart-name\"\n                name=\"name\"\n                autocomplete=\"name\"\n                required\n              /><label for=\"smart-phone\">Phone</label\n              ><input\n                id=\"smart-phone\"\n                name=\"phone\"\n                type=\"tel\"\n                autocomplete=\"tel\"\n                required\n              /><label for=\"smart-email\">Email</label\n              ><input\n                id=\"smart-email\"\n                name=\"email\"\n                type=\"email\"\n                autocomplete=\"email\"\n                required\n              /><label for=\"smart-address\">Property address or suburb</label\n              ><input\n                id=\"smart-address\"\n                name=\"address\"\n                autocomplete=\"street-address\"\n                required\n              /><label for=\"smart-type\">Service type</label\n              ><select id=\"smart-type\" name=\"type\">\n                <option>Renewables &amp; smart home</option>\n                <option>Electrical</option>\n                <option>Not sure</option></select\n              ><label for=\"smart-message\">What is happening?</label\n              ><textarea id=\"smart-message\" name=\"message\" required></textarea>\n              <p class=\"form-note\">\n                Do not approach a hazard to take a photo. For immediate danger,\n                call 000.\n              </p>\n              <p class=\"form-status\" aria-live=\"polite\"></p>\n              <button class=\"button\" type=\"submit\">Send enquiry</button>\n            </form></div></section>" as TrustedHtml
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
"label": "Renewables & smart home",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\">\n            <a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}\n          </p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-739fd2b7da8c:0": "contact.html?service=renewables-smart-home-perth.html"
}
};
