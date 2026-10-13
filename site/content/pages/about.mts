import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "about.html",
"kind": "about",
"seo": {
"title": "About Our Perth Plumbing & Electrical Team | Ellis",
"description": "{{ppp:shared:business.name:raw}} is part of the Ellis Group, with a dedicated Perth team for plumbing and electrical repairs across Perth.",
"canonical": "{{ppp:shared:business.origin:raw}}/about.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/about.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/about.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/about.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/about.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:9:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:1:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:2:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:2:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:3:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:3:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:4:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:4:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:5:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:5:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:9:6:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:6:answer:raw}}"
}
},
{
"@type": "Question",
"name": "Can property managers and real-estate agencies contact {{ppp:shared:business.name:raw}}?",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:9:7:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/about.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:1:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:2:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:2:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:3:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:3:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:4:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:4:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:5:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:5:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:9:6:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:6:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Can property managers and real-estate agencies contact {{ppp:shared:business.name:json}}?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:9:7:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-d993ca7d18d6",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Perth plumbing &amp; electrical repairs</span>\n          <h1>Local Perth repairs, backed by Ellis Group.</h1>\n          <p>\n            {{ppp:shared:business.name:html}} is part of the Ellis Group, with a dedicated\n            Perth repair team for homes, rentals and managed properties across\n            Perth.\n          </p>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell split\">\n          <div>\n            <span class=\"eyebrow\">Our point of view</span>\n            <h2>Your home deserves proper attention.</h2>\n            <p>\n              For most of us, a home is much more than a place to live. It is\n              where children grow up, families spend time together and people\n              plan for the future. It is also one of life's most significant\n              investments.\n            </p>\n            <p>\n              Keeping a property in good order can be difficult when life is\n              busy. Small issues are easy to postpone; maintenance requests can\n              be unclear; and a repair can involve an occupant, a property\n              manager, access arrangements and an approval process. Ellis\n              Services Group exists to make that first step more\n              straightforward.\n            </p>\n            <p>\n              We ask customers to describe what they can see, hear or notice.\n              They do not need to diagnose the cause before getting in touch.\n            </p>\n          </div>\n          <aside class=\"panel\">\n            <h3>Contact {{ppp:shared:business.name:html}}</h3>\n            <p>\n              {{ppp:shared:business.displayTelephone:html}}<br />{{ppp:shared:business.email:html}}<br />140 St\n              Georges Terrace, Perth WA 6000\n            </p>\n            <a class=\"button\" href=\"contact.html\">Request a repair</a>\n          </aside>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Clear scope before work</span>\n          <h2>Practical repairs with a written quote before work proceeds.</h2>\n          <div class=\"split\">\n            <div>\n              <p>\n                For each plumbing or electrical repair, we begin with the\n                observable issue, property details and access information.\n                This helps our Perth team clarify the work required before a\n                repair is booked.\n              </p>\n              <p>\n                The written quote confirms the repair scope and price before\n                work proceeds. If assessment identifies additional work, that\n                is explained before it is added to the scope.\n              </p>\n            </div>\n            <div class=\"note\">\n              <h3>What guides our work</h3>\n              <p>\n                <strong>Clear repair scope.</strong> The observed issue,\n                property details and access information guide the assessment.\n              </p>\n              <p>\n                <strong>Written quote.</strong> Scope and price are confirmed\n                before work proceeds.\n              </p>\n              <p>\n                <strong>Care for property.</strong> Treating a home or managed\n                property as something worth looking after.\n              </p>\n            </div>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell text-column\">\n          <span class=\"eyebrow\">Perth plumbing &amp; electrical repairs</span>\n          <h2>Perth plumbing and electrical repairs for homes, rentals and strata properties.</h2>\n          <p>\n            {{ppp:shared:business.name:html}} provides a practical starting point for\n            <a href=\"electrical.html\">electrical repairs</a>, fault finding,\n            safety-switch, lighting and power-point concerns, as well as\n            <a href=\"blocked-drains-perth.html\">blocked drains</a>,\n            <a href=\"water-leak-detection-perth.html\">leak concerns</a> and\n            <a href=\"hot-water-problems-perth.html\">hot-water repairs</a>.\n          </p>\n          <p>\n            For a property manager, rental or strata repair request, include the\n            property address, access arrangements, observed issue and approval\n            contact. This lets the repair scope and written quote process start\n            with clear, relevant information.\n          </p>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Experience &amp; approach</span>\n          <h2>Practical knowledge for Australian homes.</h2>\n          <div class=\"rich-grid\">\n            <article>\n              <h3>Experienced tradespeople</h3>\n              <p>\n                Our team brings practical repair and maintenance experience to\n                everyday property issues and service requests.\n              </p>\n            </article>\n            <article>\n              <h3>Modern equipment</h3>\n              <p>\n                We use appropriate equipment to support clear assessment and\n                efficient maintenance work.\n              </p>\n            </article>\n            <article>\n              <h3>Australian housing context</h3>\n              <p>\n                We understand the materials, systems and maintenance\n                considerations commonly found in Australian homes and managed\n                properties.\n              </p>\n            </article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell split\">\n          <div>\n            <span class=\"eyebrow\">The company</span>\n            <h2>Perth plumbing and electrical repairs for homes and managed properties.</h2>\n            <p>{{ppp:shared:business.name:html}} provides plumbing and electrical repairs for residential and managed properties across Perth. Customers can describe what has changed without needing to diagnose the cause first.</p>\n            <p>For a homeowner, that may mean describing a leak, blocked drain, power concern, fixture issue or a planned upgrade. For a property manager or real-estate agency, it can mean keeping the address, occupant notes, access arrangements, work-order reference and approval pathway together from the outset.</p>\n            <p>As part of the Ellis Group, our Perth office has a dedicated Perth repair team providing plumbing and electrical repairs across Perth. Clear information helps our local team organise the appropriate plumbing or electrical work and reduce avoidable back-and-forth.</p>\n          </div>\n          <aside class=\"panel\">\n            <h3>Perth office &amp; repair team</h3>\n            <p>{{ppp:shared:business.address.streetAddress:html}}<br>{{ppp:shared:business.address.addressLocality:html}} {{ppp:shared:business.address.addressRegion:html}} {{ppp:shared:business.address.postalCode:html}}</p>\n            <p><a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a><br><a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a></p>\n            <a class=\"button\" href=\"contact.html\">Request a repair</a>\n          </aside>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-6",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">How a repair request moves forward</span>\n          <h2>Clear details before work is arranged.</h2>\n          <div class=\"rich-grid\">\n            <article><h3>1. Tell us what you have noticed</h3><p>Share the property suburb or address, the room or area affected, what you can see, hear or smell, and when the issue began. Photos can be helpful when they can be taken safely.</p></article>\n            <article><h3>2. Include access and approval information</h3><p>For managed properties, include the tenant or on-site contact, access notes, work-order reference and the person responsible for approvals. This helps us understand the practical context of the request.</p></article>\n            <article><h3>3. Confirm scope and written quote</h3><p>Our Perth team arranges an on-site assessment, identifies the fault or installation requirements and confirms the scope and written quote. We arrange the appropriately qualified trades for specialist or regulated work and confirm the responsible contractor and documentation before booking.</p></article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-7",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Company record</span>\n          <h2>Registered business details.</h2><p data-registration-scope>The ABR record verifies the registered company, ABN and GST status; it does not list individual trade licences. Contact our Perth team privately for the current documentation relevant to the proposed work.</p>\n          <p>{{ppp:shared:business.name:html}} is part of the Ellis Group. The company record below and our Perth office describe different things: ABN Lookup lists the company's main business location as VIC 3030; our actual Perth office is at {{ppp:shared:business.addressLine:html}}. The company registration record does not verify this office address or a trade licence.</p>\n          <div class=\"service-detail-grid\">\n            <article class=\"service-detail\"><h3>Legal entity</h3><p><strong>{{ppp:shared:business.legalName:html}}</strong></p><p>Australian Private Company</p></article>\n            <article class=\"service-detail\"><h3>ABN &amp; ACN</h3><p><strong>ABN {{ppp:shared:business.abn:html}}</strong><br>ACN 645 821 745</p><p>ABN status: Active from 11 November 2020.</p></article>\n            <article class=\"service-detail\"><h3>GST &amp; official record</h3><p>Registered for GST from 11 November 2020.</p><p><a href=\"{{ppp:shared:business.registration:html}}\" target=\"_blank\" rel=\"noopener noreferrer\">View the official ABR record ↗</a></p></article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell split\">\n          <div>\n            <span class=\"eyebrow\">Licensing &amp; insurance</span>\n            <h2>Documentation before the right work begins.</h2>\n            <p>{{ppp:shared:business.name:html}} provides plumbing and electrical repairs through appropriately licensed plumbing and electrical tradespeople. The relevant documentation is confirmed as part of the booking or written quotation process.</p>\n            <p>Current licensing and insurance evidence is available on request before work is arranged. Contact our Perth team to confirm service arrangements and obtain the current documents relevant to your job.</p>\n          </div>\n          <aside class=\"note\"><h3>Safety comes first</h3><p>If there is immediate danger, call 000. Do not remove electrical covers, test wiring, approach a hazard or try to contain active water where doing so could put you at risk.</p><p>When it is safe to do so, describe the affected area and any visible changes in your enquiry.</p></aside>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-9",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Who we work with</span>\n          <h2>Built for the realities of Perth properties.</h2>\n          <div class=\"rich-grid\">\n            <article><h3>Homeowners</h3><p>For everyday property concerns and planned maintenance, with a straightforward starting point when the issue is not yet clear.</p></article>\n            <article><h3>Property managers</h3><p>For requests that need property references, tenant communication, access planning and approval details to remain connected.</p></article>\n            <article><h3>Real-estate agencies</h3><p>For repair and maintenance enquiries where clear handover information helps protect the property, the occupant experience and the agency workflow.</p></article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-10",
"kind": "faq",
"container": "\n      <section class=\"section faq\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Questions customers often ask</span>\n          <h2>Frequently asked questions</h2>\n          <!-- site-intent:start --><div class=\"intent-content\" data-site-intent><h3>Know who is arranging the work</h3><p>The public company details identify the business behind this website. They are separate from the documents relevant to a particular regulated job. Ask the Perth team privately for those documents before approving that scope. We do not publish individual staff details or treat a company registration as proof of every trade approval.</p><ul class=\"intent-links\"><li><a href=\"contact.html\">Ask the Perth team about your proposed work</a></li><li><a href=\"property-management.html\">Procurement and work-order information</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div><!-- site-intent:end --><details>\n            <summary>{{ppp:faq:2:question}}</summary>{{ppp:faq:2:answer}}</details>\n          <details><summary>{{ppp:faq:3:question}}</summary>{{ppp:faq:3:answer}}</details>\n          <details><summary>{{ppp:faq:4:question}}</summary>{{ppp:faq:4:answer}}</details>\n          <details>\n            <summary>{{ppp:faq:5:question}}</summary>{{ppp:faq:5:answer}}</details>\n          <details>\n            <summary>{{ppp:faq:6:question}}</summary>{{ppp:faq:6:answer}}</details>\n          <details>\n            <summary>{{ppp:faq:7:question}}</summary>{{ppp:faq:7:answer}}</details>\n        </div>\n      </section>" as TrustedHtml,
"items": [
{
"question": "Does an ABN record confirm the trade licence for my job?",
"answer": "<p>No. ABN Lookup verifies the business registration record, not the scope or current status of an individual trade licence. Request the documentation relevant to the proposed plumbing or electrical work privately before approval.</p>" as TrustedHtml
},
{
"question": "Why does ABN Lookup show VIC when your office is in Perth?",
"answer": "<p>ABN Lookup lists the registered company's main business location as VIC 3030. Our actual Perth office is at {{ppp:shared:business.addressLine:html}}. These are different records; the ABN entry does not verify the Perth office address or trade authorisation.</p>" as TrustedHtml
},
{
"question": "How is {{ppp:shared:business.name:raw}} set up in Perth?",
"answer": "\n            <p>\n              {{ppp:shared:business.name:html}} is part of the Ellis Group, with an\n              independent Perth office and a dedicated Perth repair team serving\n              homeowners, property managers and real-estate agencies across Perth.\n            </p>\n          " as TrustedHtml
},
{
"question": "Where can I verify the company details?",
"answer": "<p>The Australian Business Register lists {{ppp:shared:business.legalName:html}} with ABN {{ppp:shared:business.abn:html}} and ACN 645 821 745. You can use the official ABR link above to view the current public record.</p>" as TrustedHtml
},
{
"question": "Can I request licensing or insurance evidence?",
"answer": "<p>Yes. Ask for the relevant current documentation before work is arranged, particularly where the scope includes regulated or specialist work.</p>" as TrustedHtml
},
{
"question": "What repairs can I request?",
"answer": "\n            <p>\n              You can request plumbing or electrical repairs, including blocked\n              drains, leak concerns, hot-water problems, power faults, safety\n              switches, lighting and power points. Describe the issue, property\n              location and any access or approval details that are relevant.\n            </p>\n          " as TrustedHtml
},
{
"question": "\n              Do I need to know the cause of the problem before I contact you?\n            ",
"answer": "\n            <p>\n              No. Describe what you can observe, such as where the issue\n              appears, when it started and whether there are any immediate\n              safety concerns.\n            </p>\n          " as TrustedHtml
},
{
"question": "\n              Can property managers and real-estate agencies contact Ellis\n              Services Group?\n            ",
"answer": "\n            <p>\n              Yes. Include the work-order reference, property address, occupant\n              description, access contact and approval pathway where relevant.\n            </p>\n          " as TrustedHtml
}
]
},
{
"id": "section-11",
"kind": "rich",
"html": "\n    <p class=\"shell\">Photos are optional: email safely taken photos to <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>. You can contact us without photos. Do not approach a hazard or dismantle equipment to take them.</p>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "About",
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
"chrome:header-d97673bf2d5f:138": "contact.html",
"chrome:header-d97673bf2d5f:139": "",
"chrome:header-d97673bf2d5f:140": "\n          ",
"chrome:header-d97673bf2d5f:141": "\n        ",
"chrome:header-d97673bf2d5f:142": "\n      ",
"chrome:header-d97673bf2d5f:143": "\n    ",
"chrome:header-d97673bf2d5f:144": "\n    ",
"chrome:footer-177cec5c3651:0": "Enquire"
}
};
