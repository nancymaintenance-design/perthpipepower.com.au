import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "plumbing.html",
"kind": "serviceHub",
"seo": {
"title": "Plumber Perth | Plumbing Repairs & Installation | Ellis",
"description": "Book a Perth plumber for drains, leaks, hot water, taps, toilets and fixture connections. Our local team assesses the work and provides a written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/plumbing.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/plumbing.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/plumbing.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/plumbing.html#breadcrumb",
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
"serviceType": "Plumbing repairs and maintenance in Perth",
"provider": {
"@id": "{{ppp:shared:business.id:raw}}"
},
"areaServed": {
"@type": "City",
"name": "Perth"
},
"description": "{{ppp:seo-value:description:raw}}",
"url": "{{ppp:seo-value:canonical:raw}}",
"@id": "{{ppp:shared:business.origin:raw}}/plumbing.html#service",
"mainEntityOfPage": {
"@id": "{{ppp:shared:business.origin:raw}}/plumbing.html#webpage"
}
},
{
"@type": "FAQPage",
"@id": "{{ppp:shared:business.origin:raw}}/plumbing.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:5:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:5:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:5:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:5:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/plumbing.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/plumbing.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/plumbing.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"Service\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"serviceType\": \"Plumbing repairs and maintenance in Perth\",\n      \"provider\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/plumbing.html#service\",\n      \"mainEntityOfPage\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/plumbing.html#webpage\"\n      }\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/plumbing.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:5:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:5:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:5:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:5:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}"
]
},
"layoutId": "layout-d63e70cd6bef",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"page-hero\">\n        <div class=\"shell\">\n          {{ppp:breadcrumbs}}\n          <span class=\"eyebrow\">Perth plumbing</span>\n          <h1>Plumber Perth — Plumbing Repairs &amp; Installation</h1><aside class=\"intent-safety\" data-intent-safety><p><strong>No water across the property?</strong> Check <a href=\"https://www.watercorporation.com.au/About-us/Contact-us\" target=\"_blank\" rel=\"noopener noreferrer\">Water Corporation supply and outage reporting</a> before assuming a private plumbing fault. Report an unlisted water fault or outage to <a href=\"tel:131375\">13 13 75</a>. Utility network work is not a private repair booking.</p></aside>\n<p>{{ppp:shared:business.name:html}} provides plumbing repairs and installation across Perth, including blocked drains, water leaks, hot water, taps, toilets and fixture connections. Our local team assesses the work, explains the repair or installation plan and provides a written quote before agreed work proceeds.</p>\n          <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell split\">\n          <div>\n            <h2>Plumbing repairs we assess</h2>\n            <h3 id=\"leaks\">Leaks, fixtures and visible pipes</h3>\n            <p>\n              Include the fixture type, room and whether the leak is constant or\n              only appears when the tap or appliance is used.\n            </p>\n            <h3 id=\"drains\">Blocked or slow drains</h3>\n            <p>\n              Slow drainage, gurgling or water returning through another fixture\n              are useful observations. Avoid repeatedly adding chemical drain\n              cleaners.\n            </p>\n            <h3>Running toilets and pressure concerns</h3>\n            <p>\n              Note whether a toilet can still be used, whether water is reaching\n              the floor, and which taps are affected by a pressure change.\n            </p>\n            <h3>Hot-water problems</h3>\n            <p>\n              Share the unit location, symptoms and any visible model\n              information that can be read safely. Do not remove covers or\n              handle wiring.\n            </p>\n          </div>\n          <div>\n            <img\n              class=\"photo\"\n              src=\"plumbing-repair.jpg\"\n              width=\"1536\"\n              height=\"1024\"\n              alt=\"Plumbing repair equipment near a sink\"\n              fetchpriority=\"high\" srcset=\"plumbing-repair-480.webp 480w, plumbing-repair-800.webp 800w, plumbing-repair-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\">\n            <aside class=\"panel\">\n              <h3>Before you contact us</h3>\n              <ul>\n                <li>Property address and suburb</li>\n                <li>Room or area affected</li>\n                <li>When the issue began</li>\n                <li>Whether water is actively leaking</li>\n                <li>Occupant and access details</li>\n              </ul>\n            </aside>\n          </div>\n        <p>If you are looking for a plumber near me in Joondalup, Balcatta or Morley, use our <a href=\"northern-suburbs.html\">Northern Suburbs guide</a> or <a href=\"eastern-suburbs.html\">Eastern Suburbs guide</a> to describe the property location. The address, access and fault determine the visit arrangements; these suburbs do not represent additional offices.</p></div>\n      </section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell split\">\n          <div>\n            <span class=\"eyebrow\">Managed properties</span>\n            <h2>Keep the work request together.</h2>\n            <p>\n              For rental, strata or managed commercial properties, include the\n              work-order reference, approval contact, occupant details, access\n              arrangements and any known history.\n            </p>\n          </div>\n          <div>\n            <a class=\"button\" href=\"contact.html?service=plumbing.html\">Send a plumbing enquiry</a>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Practical plumbing information</span>\n          <h2>Start with the symptom, not a guess.</h2>\n          <div class=\"split\">\n            <div>\n              <p>\n                Plumbing problems can appear as a visible drip, a fixture that\n                will not stop running, slow drainage, low pressure, no hot water\n                or moisture where it should not be. A clear description helps\n                place the enquiry with the right information from the outset.\n              </p>\n              <p>\n                For an active leak, protect people and property only where it is\n                safe to do so. Keep clear of wet electrical equipment, do not\n                remove panels or fittings, and call 000 if there is immediate\n                danger.\n              </p>\n              <ul class=\"topic-links\">\n                <li>\n                  <a href=\"insights-reporting-a-plumbing-leak.html\"\n                    >Guide: reporting a leak</a\n                  >\n                </li>\n                <li>\n                  <a href=\"hot-water-problems-perth.html\"\n                    >Guide: hot-water symptoms</a\n                  >\n                </li>\n                <li><a href=\"faq.html\">Read plumbing FAQs</a></li>\n              </ul>\n            </div>\n            <img srcset=\"plumbing-kitchen-repair-480.webp 480w, plumbing-kitchen-repair-960.webp 960w\" sizes=\"(max-width: 540px) calc(100vw - 48px), 480px\"\n              class=\"content-photo\"\n              src=\"plumbing-kitchen-repair.png\"\n              width=\"1706\"\n              height=\"922\"\n              alt=\"Plumber inspecting a kitchen sink connection\"\n              loading=\"lazy\"\n            />\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">What helps with an enquiry</span>\n          <h2>Details worth including</h2>\n          <div class=\"rich-grid\">\n            <article>\n              <h3>Location</h3>\n              <p>\n                State the property address or suburb, affected room and fixture.\n                For apartments, include the unit number and any access\n                requirements.\n              </p>\n            </article>\n            <article>\n              <h3>Changes to report</h3>\n              <p>\n                Describe when it began, whether water is active or intermittent,\n                and whether the issue occurs only when a fixture is used.\n              </p>\n            </article>\n            <article>\n              <h3>Safe context</h3>\n              <p>\n                Mention any water near electrical equipment, visible damage or\n                spreading water. Do not investigate a hazard simply to provide\n                more detail.\n              </p>\n            </article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">Plumbing services</span>\n          <h2>Common plumbing services we provide</h2>\n          <p class=\"lead\">\n            Use these categories to describe the issue. You do not need to\n            identify the cause before making contact.\n          </p>\n          <div class=\"price-guide\" aria-labelledby=\"ellis-price-guide\">\n            <div class=\"shell\">\n              <div class=\"price-guide__intro\">\n                <p class=\"price-guide__kicker\">Ellis Price Guide</p>\n                <h2 id=\"ellis-price-guide\">Plumbing price overview</h2>\n                <p>\n                  Ellis Price Guide ranges for common standard-hours,\n                  standard-scope plumbing work.\n                </p>\n              </div>\n              <div class=\"price-guide__grid\">\n                <article class=\"price-guide__item\">\n                  <h3>Water leak detection</h3>\n                  <p class=\"price-guide__range\">AUD $275–$550</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>Burst-pipe repair</h3>\n                  <p class=\"price-guide__range\">AUD $275–$990</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>Blocked drain clearing</h3>\n                  <p class=\"price-guide__range\">AUD $198–$605</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>Hot-water repair</h3>\n                  <p class=\"price-guide__range\">AUD $198–$660</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>Taps & mixers</h3>\n                  <p class=\"price-guide__range\">AUD $165–$420</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n                <article class=\"price-guide__item\">\n                  <h3>Toilet repairs</h3>\n                  <p class=\"price-guide__range\">AUD $165–$330</p>\n                  <p class=\"price-guide__unit\">per repair · incl. GST</p>\n                </article>\n              </div>\n              <p class=\"price-guide__notice\">\n                <strong>Guide conditions:</strong> These AUD ranges are for\n                standard-hours, standard-scope work and are incl. GST. Access,\n                materials, extra pipe, cable or circuit work, compliance work,\n                emergency or after-hours work and unforeseen repairs are\n                confirmed in a written quote before work proceeds.\n              </p>\n            </div>\n          </div>\n          <div class=\"service-detail-grid\">\n            <article class=\"service-detail\">\n              <h3>Leaks &amp; pipes</h3>\n              <p>\n                Water beneath a sink, beside a fixture, along a wall or below a\n                ceiling. Tell us where it appears and whether it is active.\n              </p>\n              <a href=\"water-leak-detection-perth.html\">Water leak detection →</a>\n            </article>\n            <article class=\"service-detail\">\n              <h3>Drains &amp; drainage</h3>\n              <p>\n                Slow outlets, gurgling, a blocked basin, shower or sink, or\n                water returning through another fixture.\n              </p>\n              <a href=\"blocked-drains-perth.html\">Discuss drainage →</a>\n            </article>\n            <article class=\"service-detail\">\n              <h3>Hot water</h3>\n              <p>\n                No hot water, reduced temperature, inconsistent flow or visible\n                water near the unit. Keep panels and electrical components\n                untouched.\n              </p>\n              <a href=\"hot-water-problems-perth.html\">Discuss hot water →</a>\n            </article>\n            <article class=\"service-detail\">\n              <h3 id=\"fixtures\">Taps &amp; mixers</h3>\n              <p>\n                Dripping taps, leaking handles, low pressure at one fixture or a\n                fitting that no longer works as expected.\n              </p>\n              <a href=\"tap-mixer-repairs-perth.html\">Tap and mixer repairs →</a>\n            </article>\n            <article class=\"service-detail\">\n              <h3 id=\"toilets\">Toilets</h3>\n              <p>\n                A toilet that keeps running, leaks to the floor, fills slowly or\n                cannot be used normally.\n              </p>\n              <a href=\"toilet-repairs-perth.html\">Toilet repairs →</a>\n            </article>\n            <article class=\"service-detail\">\n              <h3>Rental &amp; strata requests</h3>\n              <p>\n                Include the work-order reference, access instructions, approval\n                contact and any information from the occupant.\n              </p>\n              <a href=\"property-management.html\"\n                >Property-management details →</a\n              >\n            </article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-6",
"kind": "faq",
"container": "\n      <section class=\"rich-band\">\n        <div class=\"shell\">\n          <span class=\"eyebrow\">A practical booking path</span>\n          <h2>Assessment and written quotation</h2>\n          <div class=\"service-process\">\n            <article>\n              <h3>Describe the issue</h3>\n              <p>\n                Share the property location, what you can see and when it\n                started. Photos are useful only when they can be taken safely.\n              </p>\n            </article>\n            <article>\n              <h3>Confirm property details</h3>\n              <p>\n                We use the address, access contact and service category to\n                arrange an on-site plumbing assessment and confirm the repair plan and written quote.\n              </p>\n            </article>\n            <article>\n              <h3>Keep the request together</h3>\n              <p>\n                For managed properties, add the work order and approval contact\n                so the relevant details travel with the request.\n              </p>\n            </article>\n          </div>\n        </div>\n      <!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Choose a plumbing service by the symptom</h2><p>For a slow outlet or wastewater returning through fixtures, start with drainage. Water appearing outside a pipe or fitting belongs with leak assessment; a known damaged pipe belongs with pipe repair. A shower leak may involve plumbing, seals or waterproofing, so the source needs assessment before any repair is agreed. Low pressure at one tap is different from a whole-property supply change. Tell us which outlets are affected rather than assuming that every problem needs pipe replacement.</p><ul class=\"intent-links\"><li><a href=\"blocked-drains-perth.html\">Blocked-drain clearing and repair scope</a></li><li><a href=\"water-leak-detection-perth.html\">Water leak investigation</a></li><li><a href=\"burst-pipe-repair-perth.html\">Repairs to a damaged water pipe</a></li><li><a href=\"hot-water-problems-perth.html\">Hot-water assessment and repair</a></li><li><a href=\"fixtures-appliances-perth.html\">Fixture and appliance connection enquiries</a></li><li><a href=\"faq.html\">Plumbing booking and price questions</a></li><li><a href=\"insights-hot-water-plumbing-or-electrical.html\">When hot water needs plumbing or electrical assessment</a></li><li><a href=\"dishwasher-installation-perth.html\">Dishwasher Installation &amp; Connections Perth</a></li><li><a href=\"toilet-installation-perth.html\">Toilet Installation &amp; Replacement Perth</a></li><li><a href=\"shower-plumbing-repairs-perth.html\">Shower Plumbing Leak Repairs Perth</a></li><li><a href=\"water-pressure-perth.html\">Low Water Pressure &amp; Water Hammer Perth</a></li><li><a href=\"emergency-plumber-perth.html\">24-Hour Emergency Plumber Perth</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:3:question}}</h3>{{ppp:faq:3:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:4:question}}</h3>{{ppp:faq:4:answer}}</div></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "What does a plumbing quote include?",
"answer": "<p>The written quote identifies the agreed investigation or repair, included materials and relevant access work. The published AUD ranges are guides for standard-hours, standard-scope work, not a fixed quote for an unseen property. Ask which additional work would require further approval.</p>" as TrustedHtml
},
{
"question": "Can you assess a shower leak or low water pressure?",
"answer": "<p>Describe whether the leak appears during use and which outlets have changed. The assessment separates a plumbing fault from other causes, such as waterproofing or a supply issue. Specialist or additional work is confirmed separately, not assumed from a symptom.</p>" as TrustedHtml
},
{
"question": "Urgent and after-hours plumbing attendance",
"answer": "<p>{{ppp:shared:hours.text:html}} Emergency fees follow the quoted work plan. Utility faults and immediate danger use the appropriate official channel first.</p>" as TrustedHtml
},
{
"question": "Routine hours and emergency arrangements",
"answer": "<p>{{ppp:shared:hours.text:html}} Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.</p>" as TrustedHtml
},
{
"question": "Plumbing work and licensed trades",
"answer": "<p>Use appropriately authorised plumbing trades for regulated fixed-water and drainage work; confirm the specific task and documentation. <a href=\"#learn-about-plumbing\">Read the explanation.</a></p>" as TrustedHtml
}
]
},
{
"id": "section-7",
"kind": "rich",
"html": "\n    <p class=\"shell\">Photos are optional: email safely taken photos to <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>. You can contact us without photos. Do not approach a hazard or dismantle equipment to take them.</p>" as TrustedHtml
},
{
"id": "section-8",
"kind": "rich",
"html": "<!-- keyword-gap:start --><section class=\"section keyword-gap-content\" data-keyword-gap><div class=\"shell service-reading\"><div class=\"keyword-gap-part\" id=\"gap-plumbing-prices\"><h2>Plumber costs in Perth: compare the agreed work</h2><p>Use the plumbing price overview as a starting point, then compare the work included in the written quote. Finding a concealed leak, repairing an accessible fitting and replacing equipment are not the same job. A repair-only amount should not be compared with a quote that also includes supply, access and restoration.</p><p>Ask about the initial attendance or investigation charge, materials, included work and what needs separate approval. Confirm any charge for a visit where you do not proceed, and any different hours or access arrangements, before booking. The guide does not establish an hourly rate, a free call-out or an after-hours price.</p><ul class=\"intent-links\"><li><a href=\"faq.html\">Booking and quotation questions</a></li><li><a href=\"hot-water-problems-perth.html\">Hot-water repair and replacement price guide</a></li><li><a href=\"insights-hot-water-plumbing-or-electrical.html\">Which trade should assess a hot-water problem?</a></li><li><a href=\"fixtures-appliances-perth.html#gap-dishwasher-installation\">Dishwasher and appliance connection scope</a></li></ul></div><div class=\"keyword-gap-part\" id=\"gap-plumbing-regions\"><h2>Arrange a plumber for your Perth service region</h2><p>Choose the region for the property, then describe the plumbing task. These guides organise service enquiries; they are not separate branches or a promise of an arrival time. Tell the team the address and access requirements so the proposed visit can be confirmed.</p><ul class=\"intent-links\"><li><a href=\"perth-cbd-inner-suburbs.html\">CBD and Inner Perth</a></li><li><a href=\"northern-suburbs.html\">Northern Suburbs, including Joondalup</a></li><li><a href=\"southern-suburbs.html\">Southern Suburbs, including Canning Vale</a></li><li><a href=\"eastern-suburbs.html\">Eastern Suburbs</a></li><li><a href=\"western-suburbs.html\">Western Suburbs</a></li><li><a href=\"perth-hills-swan-valley.html\">Perth Hills and Swan Valley</a></li></ul></div><div class=\"keyword-gap-part\" id=\"learn-about-plumbing\"><h2>Plumber Perth: plumbing symptoms and service choices</h2><h3>Work for an appropriately authorised plumber</h3><p>Describe problems with fixed water or drainage installations, leaking fittings, toilets or hot-water plumbing. The team confirms the regulated work and appropriate authorisation for the actual scope. A general repair enquiry does not automatically include gas fitting or every appliance repair.</p><ul class=\"intent-links\"><li><a href=\"about.html\">Business registration and trade documentation boundaries</a></li></ul></div></div></section>" as TrustedHtml
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
"label": "Plumbing",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {
"chrome:header-09fb64239d62:0": "\n    ",
"chrome:header-09fb64239d62:1": "\n    ",
"chrome:header-09fb64239d62:2": "\n      ",
"chrome:header-09fb64239d62:3": "\n        Perth plumbing enquiries ",
"chrome:header-09fb64239d62:4": "\n      ",
"chrome:header-09fb64239d62:5": "\n    ",
"chrome:header-09fb64239d62:6": "\n    ",
"chrome:header-09fb64239d62:7": "\n      ",
"chrome:header-09fb64239d62:8": "\n        ",
"chrome:header-09fb64239d62:9": "",
"chrome:header-09fb64239d62:10": "\n        ",
"chrome:header-09fb64239d62:11": "\n          ",
"chrome:header-09fb64239d62:12": "\n            ",
"chrome:header-09fb64239d62:13": "",
"chrome:header-09fb64239d62:14": "",
"chrome:header-09fb64239d62:15": "\n            ",
"chrome:header-09fb64239d62:16": "",
"chrome:header-09fb64239d62:17": "",
"chrome:header-09fb64239d62:18": "\n            ",
"chrome:header-09fb64239d62:19": "",
"chrome:header-09fb64239d62:20": "",
"chrome:header-09fb64239d62:21": "\n            ",
"chrome:header-09fb64239d62:22": "\n              ",
"chrome:header-09fb64239d62:23": "\n                Plumbing\n              ",
"chrome:header-09fb64239d62:24": "\n              ",
"chrome:header-09fb64239d62:25": "\n                ",
"chrome:header-09fb64239d62:26": "\n                  ",
"chrome:header-09fb64239d62:27": "\n                  ",
"chrome:header-09fb64239d62:28": "\n                  ",
"chrome:header-09fb64239d62:29": "\n                ",
"chrome:header-09fb64239d62:30": "\n                ",
"chrome:header-09fb64239d62:31": "\n                  ",
"chrome:header-09fb64239d62:32": "",
"chrome:header-09fb64239d62:33": "",
"chrome:header-09fb64239d62:34": "",
"chrome:header-09fb64239d62:35": "",
"chrome:header-09fb64239d62:36": "",
"chrome:header-09fb64239d62:37": "\n                ",
"chrome:header-09fb64239d62:38": "\n                ",
"chrome:header-09fb64239d62:39": "\n                  ",
"chrome:header-09fb64239d62:40": "",
"chrome:header-09fb64239d62:41": "",
"chrome:header-09fb64239d62:42": "",
"chrome:header-09fb64239d62:43": "Active water, failed pipes and urgent plumbing\n                        concerns.",
"chrome:header-09fb64239d62:44": "",
"chrome:header-09fb64239d62:45": "",
"chrome:header-09fb64239d62:46": "\n                ",
"chrome:header-09fb64239d62:47": "\n                ",
"chrome:header-09fb64239d62:48": "\n                  ",
"chrome:header-09fb64239d62:49": "",
"chrome:header-09fb64239d62:50": "",
"chrome:header-09fb64239d62:51": "",
"chrome:header-09fb64239d62:52": "",
"chrome:header-09fb64239d62:53": "",
"chrome:header-09fb64239d62:54": "\n                ",
"chrome:header-09fb64239d62:55": "\n                ",
"chrome:header-09fb64239d62:56": "\n                  ",
"chrome:header-09fb64239d62:57": "",
"chrome:header-09fb64239d62:58": "",
"chrome:header-09fb64239d62:59": "",
"chrome:header-09fb64239d62:60": "",
"chrome:header-09fb64239d62:61": "",
"chrome:header-09fb64239d62:62": "\n                ",
"chrome:header-09fb64239d62:63": "\n                ",
"chrome:header-09fb64239d62:64": "\n                  ",
"chrome:header-09fb64239d62:65": "",
"chrome:header-09fb64239d62:66": "",
"chrome:header-09fb64239d62:67": "",
"chrome:header-09fb64239d62:68": "",
"chrome:header-09fb64239d62:69": "",
"chrome:header-09fb64239d62:70": "\n                ",
"chrome:header-09fb64239d62:71": "\n                ",
"chrome:header-09fb64239d62:72": "\n                  ",
"chrome:header-09fb64239d62:73": "",
"chrome:header-09fb64239d62:74": "",
"chrome:header-09fb64239d62:75": "",
"chrome:header-09fb64239d62:76": "",
"chrome:header-09fb64239d62:77": "",
"chrome:header-09fb64239d62:78": "\n                ",
"chrome:header-09fb64239d62:79": "\n              ",
"chrome:header-09fb64239d62:80": "\n            ",
"chrome:header-09fb64239d62:81": "\n            ",
"chrome:header-09fb64239d62:82": "\n              ",
"chrome:header-09fb64239d62:83": "\n                Electrical\n              ",
"chrome:header-09fb64239d62:84": "\n              ",
"chrome:header-09fb64239d62:85": "\n                ",
"chrome:header-09fb64239d62:86": "\n                  ",
"chrome:header-09fb64239d62:87": "\n                  ",
"chrome:header-09fb64239d62:88": "\n                  ",
"chrome:header-09fb64239d62:89": "\n                ",
"chrome:header-09fb64239d62:90": "\n                ",
"chrome:header-09fb64239d62:91": "\n                  ",
"chrome:header-09fb64239d62:92": "",
"chrome:header-09fb64239d62:93": "",
"chrome:header-09fb64239d62:94": "",
"chrome:header-09fb64239d62:95": "",
"chrome:header-09fb64239d62:96": "",
"chrome:header-09fb64239d62:97": "\n                ",
"chrome:header-09fb64239d62:98": "\n                ",
"chrome:header-09fb64239d62:99": "\n                  ",
"chrome:header-09fb64239d62:100": "",
"chrome:header-09fb64239d62:101": "",
"chrome:header-09fb64239d62:102": "",
"chrome:header-09fb64239d62:103": "",
"chrome:header-09fb64239d62:104": "",
"chrome:header-09fb64239d62:105": "\n                ",
"chrome:header-09fb64239d62:106": "\n                ",
"chrome:header-09fb64239d62:107": "\n                  ",
"chrome:header-09fb64239d62:108": "",
"chrome:header-09fb64239d62:109": "",
"chrome:header-09fb64239d62:110": "",
"chrome:header-09fb64239d62:111": "",
"chrome:header-09fb64239d62:112": "",
"chrome:header-09fb64239d62:113": "\n                ",
"chrome:header-09fb64239d62:114": "\n                ",
"chrome:header-09fb64239d62:115": "\n                  ",
"chrome:header-09fb64239d62:116": "",
"chrome:header-09fb64239d62:117": "",
"chrome:header-09fb64239d62:118": "",
"chrome:header-09fb64239d62:119": "Faults, beeping and property-maintenance\n                        enquiries.",
"chrome:header-09fb64239d62:120": "",
"chrome:header-09fb64239d62:121": "",
"chrome:header-09fb64239d62:122": "\n                ",
"chrome:header-09fb64239d62:123": "\n                ",
"chrome:header-09fb64239d62:124": "\n                  ",
"chrome:header-09fb64239d62:125": "",
"chrome:header-09fb64239d62:126": "",
"chrome:header-09fb64239d62:127": "",
"chrome:header-09fb64239d62:128": "",
"chrome:header-09fb64239d62:129": "",
"chrome:header-09fb64239d62:130": "\n                ",
"chrome:header-09fb64239d62:131": "\n                ",
"chrome:header-09fb64239d62:132": "\n                  ",
"chrome:header-09fb64239d62:133": "",
"chrome:header-09fb64239d62:134": "",
"chrome:header-09fb64239d62:135": "",
"chrome:header-09fb64239d62:136": "",
"chrome:header-09fb64239d62:137": "",
"chrome:header-09fb64239d62:138": "\n                ",
"chrome:header-09fb64239d62:139": "\n              ",
"chrome:header-09fb64239d62:140": "\n            ",
"chrome:header-09fb64239d62:141": "\n            ",
"chrome:header-09fb64239d62:142": "",
"chrome:header-09fb64239d62:143": "contact.html?service=plumbing.html",
"chrome:header-09fb64239d62:144": "",
"chrome:header-09fb64239d62:145": "\n          ",
"chrome:header-09fb64239d62:146": "\n        ",
"chrome:header-09fb64239d62:147": "\n      ",
"chrome:header-09fb64239d62:148": "\n    ",
"chrome:header-09fb64239d62:149": "\n    ",
"chrome:footer-beb0a0c885b2:0": "\n      ",
"chrome:footer-beb0a0c885b2:1": "\n        ",
"chrome:footer-beb0a0c885b2:2": "\n          ",
"chrome:footer-beb0a0c885b2:3": "\n          ",
"chrome:footer-beb0a0c885b2:4": "\n        ",
"chrome:footer-beb0a0c885b2:5": "\n        ",
"chrome:footer-beb0a0c885b2:6": "\n          ",
"chrome:footer-beb0a0c885b2:7": "\n          ",
"chrome:footer-beb0a0c885b2:8": "\n            {{ppp:shared:business.displayTelephone:raw}}",
"chrome:footer-beb0a0c885b2:9": "140 St\n            Georges Terrace, Perth WA 6000\n          ",
"chrome:footer-beb0a0c885b2:10": "\n        ",
"chrome:footer-beb0a0c885b2:11": "\n        ",
"chrome:footer-beb0a0c885b2:12": "\n          ",
"chrome:footer-beb0a0c885b2:13": "\n          ",
"chrome:footer-beb0a0c885b2:14": "\n            ",
"chrome:footer-beb0a0c885b2:15": "electrical.html",
"chrome:footer-beb0a0c885b2:16": "Electrical",
"chrome:footer-beb0a0c885b2:17": "",
"chrome:footer-beb0a0c885b2:18": "",
"chrome:footer-beb0a0c885b2:19": "",
"chrome:footer-beb0a0c885b2:20": "",
"chrome:footer-beb0a0c885b2:21": "contact.html?service=plumbing.html",
"chrome:footer-beb0a0c885b2:22": "\n          ",
"chrome:footer-beb0a0c885b2:23": "\n        ",
"chrome:footer-beb0a0c885b2:24": "\n      ",
"chrome:footer-beb0a0c885b2:25": "\n      ",
"chrome:footer-beb0a0c885b2:26": "\n        Services are provided by appropriately licensed plumbing and electrical tradespeople. Licence details are available on request. For immediate danger, move to\n        safety and call 000.\n      ",
"chrome:footer-beb0a0c885b2:27": "\n    ",
"chrome:footer-beb0a0c885b2:28": "\n    ",
"chrome:footer-beb0a0c885b2:29": "\n      ",
"chrome:footer-beb0a0c885b2:30": "",
"chrome:footer-beb0a0c885b2:31": "contact.html?service=plumbing.html",
"chrome:footer-beb0a0c885b2:32": "\n    ",
"chrome:footer-beb0a0c885b2:33": "\n    "
}
};
