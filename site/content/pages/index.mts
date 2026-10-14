import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "index.html",
"kind": "home",
"seo": {
"title": "Plumbing & Electrical Repairs Perth | Ellis",
"description": "Plumbing and electrical repairs in Perth. Contact {{ppp:shared:business.name:raw}} to arrange an on-site assessment, repair plan and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/",
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
"url": "{{ppp:seo-value:canonical:raw}}",
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
"url": "{{ppp:seo-value:canonical:raw}}",
"name": "{{ppp:shared:business.name:raw}}",
"inLanguage": "en-AU",
"publisher": {
"@id": "{{ppp:shared:business.id:raw}}"
}
},
{
"@type": "WebPage",
"@id": "{{ppp:shared:business.origin:raw}}/#webpage",
"url": "{{ppp:seo-value:canonical:raw}}",
"name": "{{ppp:h1-value:raw}}",
"description": "{{ppp:seo-value:description:raw}}",
"inLanguage": "en-AU",
"isPartOf": {
"@id": "{{ppp:shared:business.origin:raw}}/#website"
},
"about": {
"@id": "{{ppp:shared:business.id:raw}}"
}
}
]
}
],
"jsonLdSource": [
"{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    }\n  ]\n}"
]
},
"layoutId": "layout-4e72f8c8db38",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"hero\" aria-label=\"Featured services\">\n        <article\n          class=\"slide is-active\"\n          style=\"background-image: url(&quot;hero-repair.jpg&quot;)\"\n        >\n          <div class=\"shell\">\n            <div class=\"hero-copy\">\n              <span class=\"eyebrow\">Perth plumbing &amp; electrical repairs</span>\n              <h1>Plumbing and electrical repairs in Perth</h1>\n              <p>\n                Clear help for property problems. {{ppp:shared:business.name:html}} is a\n                direct place to start when a plumbing or electrical issue\n                interrupts your Perth property.\n              </p>\n              <div class=\"hero-actions\">\n                <a class=\"button\" href=\"tel:{{ppp:shared:business.localTelephone:html}}\">Call {{ppp:shared:business.displayTelephone:html}}</a\n                ><a class=\"button alt\" href=\"contact.html\">Request a repair</a>\n              </div>\n            </div>\n          </div>\n        </article>\n        <article class=\"slide\" data-background-image=\"plumbing-repair.jpg\">\n          <div class=\"shell\">\n            <div class=\"hero-copy\">\n              <span class=\"eyebrow\">Plumbing</span>\n              <h2>Describe the water problem, simply.</h2>\n              <p>\n                Leaks, slow drains and hot-water symptoms are easier to action\n                when the location and observations are clear.\n              </p>\n              <div class=\"hero-actions\">\n                <a class=\"button\" href=\"plumbing.html\">Explore plumbing</a>\n              </div>\n            </div>\n          </div>\n        </article>\n        <article class=\"slide\" data-background-image=\"electrical-repair.jpg\">\n          <div class=\"shell\">\n            <div class=\"hero-copy\">\n              <span class=\"eyebrow\">Electrical</span>\n              <h2>Safety first. Facts next.</h2>\n              <p>\n                For electrical faults, report what you can observe from a safe\n                position. Never dismantle equipment to diagnose a problem.\n              </p>\n              <div class=\"hero-actions\">\n                <a class=\"button\" href=\"electrical.html\">Explore electrical</a>\n              </div>\n            </div>\n          </div>\n        </article>\n        <div class=\"carousel-controls\">\n          <button type=\"button\" data-prev aria-label=\"Previous slide\">←</button\n          ><span class=\"carousel-status\" aria-live=\"polite\">1 of 3</span\n          ><button type=\"button\" data-next aria-label=\"Next slide\">→</button>\n        </div>\n      </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n      <div class=\"service-strip\">\n        <div class=\"shell\">\n          <ul>\n            <li>Homes &amp; apartments</li>\n            <li>Rental properties</li>\n            <li>Commercial premises</li>\n            <li>Strata contacts</li>\n          </ul>\n        </div>\n      </div>" as TrustedHtml
},
{
"id": "section-2",
"kind": "rich",
"html": "\n      <section class=\"intro\">\n        <div class=\"shell intro-grid\">\n          <div>\n            <span class=\"eyebrow\">One clear starting point</span>\n            <h2>Plumbing and electrical repairs, clearly explained.</h2>\n          </div>\n          <div>\n            <p class=\"lead\">\n              Property issues do not always arrive neatly labelled. Tell us what\n              you have noticed, where the property is, and any access details\n              that matter.\n            </p>\n            <a class=\"button alt\" href=\"contact.html\">Request a repair</a>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-3",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell\">\n          <div class=\"section-heading\"><div><span class=\"eyebrow\">Plumbing / Electrical / Property support</span><h2>Plumbing, electrical and property maintenance services</h2></div><a href=\"service-areas.html\">Find your service area →</a></div><div class=\"cards\">\n            <article class=\"card\">\n              <img\n                src=\"plumbing-repair.jpg\"\n                width=\"1536\"\n                height=\"1024\"\n                alt=\"Plumbing repair tools beside a water fixture\"\n                loading=\"lazy\"\n                decoding=\"async\" srcset=\"plumbing-repair-480.webp 480w, plumbing-repair-800.webp 800w, plumbing-repair-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"><span class=\"eyebrow\">Plumbing</span>\n              <h3>Blocked Drains — Drain Clearing &amp; Repairs</h3>\n              <p>\n                For slow drainage, a blocked toilet, gurgling or fixture\n                backups, start with the affected room and whether water is\n                returning elsewhere.\n              </p>\n              <a href=\"blocked-drains-perth.html\"\n                >Blocked drains &amp; toilet repairs →</a\n              >\n            </article>\n            <article class=\"card\">\n              <img\n                src=\"plumbing-leak-perth.png\"\n                width=\"1672\"\n                height=\"941\"\n                alt=\"Plumbing connection with visible water leak\"\n                loading=\"lazy\"\n                decoding=\"async\" srcset=\"plumbing-leak-perth-480.webp 480w, plumbing-leak-perth-800.webp 800w, plumbing-leak-perth-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"><span class=\"eyebrow\">Plumbing</span>\n              <h3>Burst Pipe Repairs</h3>\n              <p>\n                For active water or a failed pipe, put safety first and note the\n                affected area before contacting us.\n              </p>\n              <a href=\"burst-pipe-repair-perth.html\"\n                >Burst pipe repairs →</a\n              >\n            </article>\n            <article class=\"card\">\n              <img\n                src=\"electrical-repair.jpg\"\n                width=\"1536\"\n                height=\"1024\"\n                alt=\"Electrician's tools on a work surface\"\n                loading=\"lazy\"\n                decoding=\"async\" srcset=\"electrical-repair-480.webp 480w, electrical-repair-800.webp 800w, electrical-repair-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"><span class=\"eyebrow\">Electrical</span>\n              <h3>Lighting &amp; Power Point Electrical Services Overview</h3>\n              <p>\n                Describe the symptom rather than testing or dismantling\n                electrical equipment.\n              </p>\n              <a href=\"lighting-power-points-perth.html\"\n                >Power point &amp; lighting repairs →</a\n              >\n            </article>\n            <article class=\"card\">\n              <img\n                src=\"property-maintenance.jpg\"\n                width=\"1672\"\n                height=\"941\"\n                alt=\"Property maintenance notes and house keys\"\n                loading=\"lazy\"\n                decoding=\"async\" srcset=\"property-maintenance-480.webp 480w, property-maintenance-800.webp 800w, property-maintenance-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"><span class=\"eyebrow\">Managed properties</span>\n              <h3>Property Manager Plumbing &amp; Electrical</h3>\n              <p>\n                Bring together the property reference, issue, access\n                arrangements and approval contact.\n              </p>\n              <a href=\"property-management.html\"\n                >Property manager support →</a\n              >\n            </article>\n            <article class=\"card\">\n              <img\n                src=\"fixtures-appliances-service.png\"\n                width=\"1672\"\n                height=\"941\"\n                alt=\"{{ppp:shared:business.name:html}} plumber repairing bathroom plumbing fixtures\"\n                loading=\"lazy\"\n                decoding=\"async\" srcset=\"fixtures-appliances-service-480.webp 480w, fixtures-appliances-service-800.webp 800w, fixtures-appliances-service-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"><span class=\"eyebrow\">Plumbing &amp; electrical</span>\n              <h3>Fixture, Tap &amp; Appliance Connection Services</h3>\n              <p>\n                Taps, toilets, showers, kitchen and laundry connections, and\n                appliance connections, taps and fixture repairs.\n              </p>\n              <a href=\"fixtures-appliances-perth.html\"\n                >Appliance connections, taps &amp; fixtures →</a\n              >\n            </article>\n            <article class=\"card\">\n              <img\n                src=\"renewables-smart-home-service.png\"\n                width=\"1672\"\n                height=\"941\"\n                alt=\"{{ppp:shared:business.name:html}} electrician configuring smart-home and energy equipment\"\n                loading=\"lazy\"\n                decoding=\"async\" srcset=\"renewables-smart-home-service-480.webp 480w, renewables-smart-home-service-800.webp 800w, renewables-smart-home-service-1200.webp 1200w\" sizes=\"(max-width:700px) 100vw, (max-width:1000px) 50vw, 380px\"><span class=\"eyebrow\">Electrical</span>\n              <h3>Smart Home &amp; Energy Electrical Services</h3>\n              <p>\n                Smart lighting, automation, energy equipment and electrical\n                upgrades for Perth properties.\n              </p>\n              <a href=\"renewables-smart-home-perth.html\"\n                >Smart lighting &amp; energy electrical services →</a\n              >\n            </article>\n          </div>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-4",
"kind": "rich",
"html": "\n      <section class=\"section\">\n        <div class=\"shell split\">\n          <div>\n            <span class=\"eyebrow\">A better first message</span>\n            <h2>Request Plumbing and Electrical Repairs</h2>\n            <ul class=\"list-check\">\n              <li>Property address or Perth suburb</li>\n              <li>What you can see, hear or smell</li>\n              <li>When the issue began and whether it is worsening</li>\n              <li>On-site contact and access instructions</li>\n              <li>Photos, only if they can be taken safely</li>\n            </ul>\n          </div>\n          <aside class=\"panel\">\n            <h3>Put safety before diagnosis</h3>\n            <p>\n              If there is fire, smoke, active arcing or immediate danger, move\n              to safety and call 000. Do not touch wet electrical equipment or\n              exposed wiring.\n            </p>\n            <a class=\"button\" href=\"faq.html\">Read safety guidance</a>\n          </aside>\n        </div>\n      </section>" as TrustedHtml
},
{
"id": "section-5",
"kind": "rich",
"html": "\n      <section class=\"section field-work\"><div class=\"shell\"><div class=\"section-heading\"><div><span class=\"eyebrow\">From the worksite</span><h2>Real work. A closer look.</h2></div><a href=\"{{ppp:shared:business.maps:html}}\" target=\"_blank\" rel=\"noopener noreferrer\">Read or leave a Google review ↗</a></div><p data-map-contact-note>The Google listing is for {{ppp:shared:business.name:html}}. For plumbing and electrical enquiries through this website, call <a href=\"tel:{{ppp:shared:business.localTelephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a> or <a href=\"contact.html\">contact our Perth repair team</a>.</p><div class=\"field-work__grid\">\n <figure><picture data-responsive-media><source type=\"image/avif\" srcset=\"images/electrical-work/kitchen-lighting-wide-responsive-480.avif 480w, images/electrical-work/kitchen-lighting-wide-responsive-960.avif 960w\" sizes=\"(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px\"><img loading=\"lazy\" decoding=\"async\" srcset=\"images/electrical-work/kitchen-lighting-wide-responsive-480.webp 480w, images/electrical-work/kitchen-lighting-wide-responsive-960.webp 960w\" sizes=\"(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px\" src=\"images/electrical-work/kitchen-lighting-wide.jpg\" width=\"2048\" height=\"1536\" alt=\"Kitchen with installed downlights during renovation\"></picture><figcaption><span>Lighting</span><h3>Kitchen lighting work</h3><p>Downlights and fittings shown during the kitchen renovation.</p><a href=\"lighting-power-points-perth.html\">Lighting &amp; power points →</a></figcaption></figure>\n <figure><picture data-responsive-media><source type=\"image/avif\" srcset=\"images/electrical-work/renovation-rewiring-responsive-480.avif 480w, images/electrical-work/renovation-rewiring-responsive-828.avif 828w\" sizes=\"(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px\"><img loading=\"lazy\" decoding=\"async\" srcset=\"images/electrical-work/renovation-rewiring-responsive-480.webp 480w, images/electrical-work/renovation-rewiring-responsive-828.webp 828w\" sizes=\"(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px\" src=\"images/electrical-work/renovation-rewiring.jpg\" width=\"828\" height=\"1104\" alt=\"Electrical wiring visible before wall linings are installed\"></picture><figcaption><span>Installation stage</span><h3>Renovation wiring</h3><p>Electrical rough-in before the wall linings are installed.</p><a href=\"electrical.html\">Electrical services →</a></figcaption></figure>\n <figure><picture data-responsive-media><source type=\"image/avif\" srcset=\"images/electrical-work/residential-switchboard-responsive-480.avif 480w, images/electrical-work/residential-switchboard-responsive-960.avif 960w\" sizes=\"(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px\"><img loading=\"lazy\" decoding=\"async\" srcset=\"images/electrical-work/residential-switchboard-responsive-480.webp 480w, images/electrical-work/residential-switchboard-responsive-960.webp 960w\" sizes=\"(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px\" src=\"images/electrical-work/residential-switchboard.jpg\" width=\"1706\" height=\"1279\" alt=\"Residential switchboard with its protective cover open\"></picture><figcaption><span>Electrical</span><h3>Switchboard work</h3><p>A view of residential circuit and switchboard equipment.</p><a href=\"safety-switch-tripping-perth.html\">Safety-switch repairs →</a></figcaption></figure>\n </div></div></section>" as TrustedHtml
},
{
"id": "section-6",
"kind": "faq",
"container": "<section class=\"section office-location\" aria-labelledby=\"office-location-title\">\n        <div class=\"shell\">\n          <div class=\"office-location__intro\">\n            <span class=\"eyebrow\">Perth office</span>\n            <h2 id=\"office-location-title\">Visit our Perth office</h2>\n            <p class=\"office-location__address\">\n              {{ppp:shared:business.addressLine:html}}\n            </p>\n            <p>\n              Our dedicated local repair team operates from this office and serves homes and managed properties across the metropolitan area. Contact us before\n              visiting to plan your journey.\n            </p>\n            <div class=\"office-location__actions\">\n              <a\n                class=\"button\"\n                href=\"https://www.google.com/maps/place/140+St+Georges+Terrace,+Perth+WA+6000,+Australia/@-31.954352,115.853879,17z/data=!3m1!4b1!4m6!3m5!1s0x2a32bad5b711261f:0x12c77c0f1610d087!8m2!3d-31.954352!4d115.8564539!16s%2Fg%2F11c466pb_t?entry=ttu\"\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n                >Open in Google Maps ↗</a\n              >\n              <a class=\"button alt\" href=\"contact.html\">Request a repair</a>\n            </div>\n          </div>\n          <div class=\"office-location__map\">\n            <iframe\n              title=\"Map of {{ppp:shared:business.name:html}} office\"\n              src=\"https://www.google.com/maps?q=140%20St%20Georges%20Terrace%2C%20Perth%20WA%206000&amp;output=embed\"\n              loading=\"lazy\"\n              referrerpolicy=\"no-referrer-when-downgrade\"\n              allowfullscreen\n            ></iframe><p class=\"office-map-fallback\">{{ppp:shared:business.addressLine:html}}. If the embedded map is unavailable, use the Google Maps link to plan your visit. Contact the team before visiting.</p>\n          </div>\n        </div></section><section class=\"section home-service-pathways\" aria-labelledby=\"home-service-pathways\"><!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2 id=\"home-service-pathways\">Plumbing, Electrical and Managed-Property Services</h2><p>A leaking fitting and a tripping circuit need different assessments. Use the plumbing or electrical overview for the work itself; use the area directory to arrange the visit. If both trades may be involved, describe both symptoms in one request. The proposed work and qualified trade arrangements still need to be confirmed.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Plumbing repairs and installation</a></li><li><a href=\"electrical.html\">Electrical repairs and installation</a></li><li><a href=\"property-management.html\">Repairs for managed properties</a></li></ul><div class=\"service-information\"><h3>{{ppp:faq:0:question}}</h3>{{ppp:faq:0:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:1:question}}</h3>{{ppp:faq:1:answer}}</div><div class=\"service-information\"><h3>{{ppp:faq:2:question}}</h3>{{ppp:faq:2:answer}}</div></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Plumbing and electrical work through one enquiry",
"answer": "<p>Tell us which rooms, fittings or equipment are affected and identify any immediate danger. We confirm the appropriate trade arrangements and quote the agreed tasks; a combined enquiry does not mean every task can be completed in one visit.</p>" as TrustedHtml
},
{
"question": "Safe observations before diagnosis",
"answer": "<p>Start with the property location and what has changed. Photos are optional, and you should not enter a hazard or dismantle equipment to gather details.</p>" as TrustedHtml
},
{
"question": "Routine hours and emergency arrangements",
"answer": "<p>{{ppp:shared:hours.text:html}} Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.</p>" as TrustedHtml
}
]
},
{
"id": "section-7",
"kind": "rich",
"html": "\n    <p class=\"shell\">Photos are optional: email safely taken photos to <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a>. You can contact us without photos. Do not approach a hazard or dismantle equipment to take them.</p>" as TrustedHtml
},
{
"id": "home-advantages",
"kind": "rich",
"html": "<section class=\"section home-company-advantages\" aria-labelledby=\"home-company-advantages\"><div class=\"shell text-column\"><span class=\"eyebrow\">Local team and clear scope</span><h2 id=\"home-company-advantages\">A dedicated repair team, an actual office and written quotes</h2><p>{{ppp:shared:business.name:html}} arranges plumbing repairs, electrical repairs and property maintenance for homeowners, rental properties, strata contacts and property managers. Our office is at {{ppp:shared:business.addressLine:html}}.</p><p>We confirm the assessment, responsible qualified trade and written scope before agreed work proceeds. {{ppp:shared:hours.text:html}}</p><p><a href=\"about.html\">Meet the company and verify its details</a> · <a href=\"property-management.html\">Plan a managed-property work order</a></p></div></section>" as TrustedHtml
}
],
"breadcrumbs": [],
"breadcrumbContainer": null,
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
"chrome:header-965ba50d3525:71": "contact.html",
"chrome:header-965ba50d3525:72": ""
}
};
