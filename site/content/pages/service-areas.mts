import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "service-areas.html",
"kind": "directory",
"seo": {
"title": "Perth Plumbing & Electrical Service Areas | Ellis",
"description": "Plumbing and electrical repairs across six Perth regions. Find your suburb and contact Ellis to arrange an on-site assessment and written quote.",
"canonical": "{{ppp:shared:business.origin:raw}}/service-areas.html",
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
"@id": "{{ppp:shared:business.origin:raw}}/service-areas.html#webpage",
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
"@id": "{{ppp:shared:business.origin:raw}}/service-areas.html#breadcrumb"
}
},
{
"@type": "BreadcrumbList",
"@id": "{{ppp:shared:business.origin:raw}}/service-areas.html#breadcrumb",
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
"@id": "{{ppp:shared:business.origin:raw}}/service-areas.html#faq",
"url": "{{ppp:seo-value:canonical:raw}}",
"mainEntity": [
{
"@type": "Question",
"name": "{{ppp:faq-value:1:0:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:0:answer:raw}}"
}
},
{
"@type": "Question",
"name": "{{ppp:faq-value:1:1:question:raw}}",
"acceptedAnswer": {
"@type": "Answer",
"text": "{{ppp:faq-value:1:1:answer:raw}}"
}
}
]
}
]
}
],
"jsonLdSource": [
"\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"LocalBusiness\",\n      \"@id\": \"{{ppp:shared:business.id:json}}\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"legalName\": \"{{ppp:shared:business.legalName:json}}\",\n      \"taxID\": \"{{ppp:shared:business.abn:json}}\",\n      \"identifier\": {\n        \"@type\": \"PropertyValue\",\n        \"propertyID\": \"ABN\",\n        \"value\": \"{{ppp:shared:business.abn:json}}\",\n        \"url\": \"{{ppp:shared:business.registration:json}}\"\n      },\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"telephone\": \"{{ppp:shared:business.telephone:json}}\",\n      \"email\": \"{{ppp:shared:business.email:json}}\",\n      \"address\": {\n        \"@type\": \"{{ppp:shared:business.address.@type:json}}\",\n        \"streetAddress\": \"{{ppp:shared:business.address.streetAddress:json}}\",\n        \"addressLocality\": \"{{ppp:shared:business.address.addressLocality:json}}\",\n        \"addressRegion\": \"{{ppp:shared:business.address.addressRegion:json}}\",\n        \"postalCode\": \"{{ppp:shared:business.address.postalCode:json}}\",\n        \"addressCountry\": \"{{ppp:shared:business.address.addressCountry:json}}\"\n      },\n      \"geo\": {\n        \"@type\": \"GeoCoordinates\",\n        \"latitude\": -31.954352,\n        \"longitude\": 115.8564539\n      },\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"{{ppp:shared:business.logo:json}}\"\n      },\n      \"hasMap\": \"{{ppp:shared:business.maps:json}}\",\n      \"sameAs\": [\n        \"{{ppp:shared:business.instagram:json}}\",\n        \"{{ppp:shared:business.facebook:json}}\",\n        \"{{ppp:shared:business.linkedin:json}}\"\n      ],\n      \"areaServed\": {\n        \"@type\": \"City\",\n        \"name\": \"Perth\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\n          \"{{ppp:shared:hours.days.0:json}}\",\n          \"{{ppp:shared:hours.days.1:json}}\",\n          \"{{ppp:shared:hours.days.2:json}}\",\n          \"{{ppp:shared:hours.days.3:json}}\",\n          \"{{ppp:shared:hours.days.4:json}}\",\n          \"{{ppp:shared:hours.days.5:json}}\",\n          \"{{ppp:shared:hours.days.6:json}}\"\n        ],\n        \"opens\": \"{{ppp:shared:hours.opens:json}}\",\n        \"closes\": \"{{ppp:shared:hours.closes:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/#website\",\n      \"url\": \"{{ppp:shared:business.origin:json}}/\",\n      \"name\": \"{{ppp:shared:business.name:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"publisher\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/service-areas.html#webpage\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"name\": \"{{ppp:h1-value:json}}\",\n      \"description\": \"{{ppp:seo-value:description:json}}\",\n      \"inLanguage\": \"en-AU\",\n      \"isPartOf\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/#website\"\n      },\n      \"about\": {\n        \"@id\": \"{{ppp:shared:business.id:json}}\"\n      },\n      \"breadcrumb\": {\n        \"@id\": \"{{ppp:shared:business.origin:json}}/service-areas.html#breadcrumb\"\n      }\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/service-areas.html#breadcrumb\",\n      \"itemListElement\": [\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 1,\n          \"name\": \"Home\",\n          \"item\": \"{{ppp:shared:business.origin:json}}/\"\n        },\n        {\n          \"@type\": \"ListItem\",\n          \"position\": 2,\n          \"name\": \"{{ppp:h1-value:json}}\",\n          \"item\": \"{{ppp:seo-value:canonical:json}}\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"@id\": \"{{ppp:shared:business.origin:json}}/service-areas.html#faq\",\n      \"url\": \"{{ppp:seo-value:canonical:json}}\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:0:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:0:answer:json}}\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"{{ppp:faq-value:1:1:question:json}}\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"{{ppp:faq-value:1:1:answer:json}}\"\n          }\n        }\n      ]\n    }\n  ]\n}\n"
]
},
"layoutId": "layout-382ca3ee994a",
"mainAttributes": {
"id": "main"
},
"hero": "\n    <section class=\"page-hero\">\n      <div class=\"shell\">\n        {{ppp:breadcrumbs}}\n        <span class=\"eyebrow\">Perth metropolitan area</span>\n        <h1>Find your Perth service area</h1>\n        <p>Browse the six Perth service regions for plumbing and electrical repair guidance.</p>\n      </div>\n    </section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n    <section class=\"section area-directory\">\n      <div class=\"shell\">\n        <div class=\"area-directory-intro\">\n          <span class=\"eyebrow\">Six Perth regions</span>\n          <h2>Choose the region for your property</h2>\n          <p>Each regional guide explains common plumbing and electrical repairs, practical preparation and how a clear scope is confirmed before work proceeds.</p>\n        </div>\n        <div class=\"area-search\"><label for=\"suburb-search\">Find your suburb</label><div class=\"area-search__control\"><input id=\"suburb-search\" type=\"search\" placeholder=\"Try Subiaco, Joondalup or Fremantle\" autocomplete=\"off\"><button id=\"suburb-clear\" type=\"button\" hidden>Clear search</button></div><p id=\"suburb-results\" role=\"status\" aria-live=\"polite\"></p></div><div class=\"area-regions\" data-region-guide-list>\n          <article class=\"area-region area-region--1\" data-region-name=\"CBD &amp; Inner Perth\"><span class=\"area-region__meta\">REGIONAL GUIDE · SUBURBS COVERED</span><h3><a href=\"perth-cbd-inner-suburbs.html\">CBD &amp; Inner Perth</a></h3><p class=\"area-region__intro\">Electrical repairs, blocked drains and managed-property repairs.</p><div class=\"area-region__localities\" data-region-localities aria-label=\"CBD and Inner Perth suburbs\"><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Burswood#enquiry\">Burswood</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Carlisle#enquiry\">Carlisle</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Como#enquiry\">Como</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=East%20Perth#enquiry\">East Perth</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=East%20Victoria%20Park#enquiry\">East Victoria Park</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Highgate#enquiry\">Highgate</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Kensington#enquiry\">Kensington</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Lathlain#enquiry\">Lathlain</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Leederville#enquiry\">Leederville</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mount%20Lawley#enquiry\">Mount Lawley</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=North%20Perth#enquiry\">North Perth</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Northbridge#enquiry\">Northbridge</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Perth#enquiry\">Perth</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Rivervale#enquiry\">Rivervale</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=South%20Perth#enquiry\">South Perth</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Subiaco#enquiry\">Subiaco</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Victoria%20Park#enquiry\">Victoria Park</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Wembley#enquiry\">Wembley</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=West%20Leederville#enquiry\">West Leederville</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=West%20Perth#enquiry\">West Perth</a></div></article>\n          <article class=\"area-region area-region--2\" data-region-name=\"Northern Suburbs\"><span class=\"area-region__meta\">REGIONAL GUIDE · SUBURBS COVERED</span><h3><a href=\"northern-suburbs.html\">Northern Suburbs</a></h3><p class=\"area-region__intro\">Power faults, hot-water problems and safety-switch repairs.</p><div class=\"area-region__localities\" data-region-localities aria-label=\"Northern Suburbs\"><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Balcatta#enquiry\">Balcatta</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Butler#enquiry\">Butler</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Clarkson#enquiry\">Clarkson</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Craigie#enquiry\">Craigie</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Currambine#enquiry\">Currambine</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Doubleview#enquiry\">Doubleview</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Duncraig#enquiry\">Duncraig</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Edgewater#enquiry\">Edgewater</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Greenwood#enquiry\">Greenwood</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Heathridge#enquiry\">Heathridge</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Hillarys#enquiry\">Hillarys</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Innaloo#enquiry\">Innaloo</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Joondalup#enquiry\">Joondalup</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Kallaroo#enquiry\">Kallaroo</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Karrinyup#enquiry\">Karrinyup</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Kingsley#enquiry\">Kingsley</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mindarie#enquiry\">Mindarie</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mullaloo#enquiry\">Mullaloo</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Nollamara#enquiry\">Nollamara</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Ocean%20Reef#enquiry\">Ocean Reef</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Padbury#enquiry\">Padbury</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Scarborough#enquiry\">Scarborough</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Sorrento#enquiry\">Sorrento</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Wanneroo#enquiry\">Wanneroo</a></div></article>\n          <article class=\"area-region area-region--3\" data-region-name=\"Southern Suburbs\"><span class=\"area-region__meta\">REGIONAL GUIDE · SUBURBS COVERED</span><h3><a href=\"southern-suburbs.html\">Southern Suburbs</a></h3><p class=\"area-region__intro\">Drain repairs, leak concerns and electrical fault repairs.</p><div class=\"area-region__localities\" data-region-localities aria-label=\"Southern Suburbs\"><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Applecross#enquiry\">Applecross</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Ardross#enquiry\">Ardross</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bateman#enquiry\">Bateman</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Beaconsfield#enquiry\">Beaconsfield</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bibra%20Lake#enquiry\">Bibra Lake</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Booragoon#enquiry\">Booragoon</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bull%20Creek#enquiry\">Bull Creek</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Canning%20Vale#enquiry\">Canning Vale</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Cockburn%20Central#enquiry\">Cockburn Central</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=East%20Fremantle#enquiry\">East Fremantle</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Fremantle#enquiry\">Fremantle</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Hamilton%20Hill#enquiry\">Hamilton Hill</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Kardinya#enquiry\">Kardinya</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Leeming#enquiry\">Leeming</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mount%20Pleasant#enquiry\">Mount Pleasant</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Murdoch#enquiry\">Murdoch</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Myaree#enquiry\">Myaree</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=O'Connor#enquiry\">O'Connor</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=South%20Fremantle#enquiry\">South Fremantle</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Spearwood#enquiry\">Spearwood</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Success#enquiry\">Success</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Willetton#enquiry\">Willetton</a></div></article>\n          <article class=\"area-region area-region--4\" data-region-name=\"Eastern Suburbs\"><span class=\"area-region__meta\">REGIONAL GUIDE · SUBURBS COVERED</span><h3><a href=\"eastern-suburbs.html\">Eastern Suburbs</a></h3><p class=\"area-region__intro\">Switchboards, safety switches and hot-water repairs.</p><div class=\"area-region__localities\" data-region-localities aria-label=\"Eastern Suburbs\"><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Ascot#enquiry\">Ascot</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Ashfield#enquiry\">Ashfield</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bassendean#enquiry\">Bassendean</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bayswater#enquiry\">Bayswater</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bedford#enquiry\">Bedford</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Belmont#enquiry\">Belmont</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Cloverdale#enquiry\">Cloverdale</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Forrestfield#enquiry\">Forrestfield</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Guildford#enquiry\">Guildford</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Hazelmere#enquiry\">Hazelmere</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=High%20Wycombe#enquiry\">High Wycombe</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Kewdale#enquiry\">Kewdale</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Maida%20Vale#enquiry\">Maida Vale</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Maylands#enquiry\">Maylands</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Midland#enquiry\">Midland</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Morley#enquiry\">Morley</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Redcliffe#enquiry\">Redcliffe</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=South%20Guildford#enquiry\">South Guildford</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Viveash#enquiry\">Viveash</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Woodbridge#enquiry\">Woodbridge</a></div></article>\n          <article class=\"area-region area-region--5\" data-region-name=\"Western Suburbs\"><span class=\"area-region__meta\">REGIONAL GUIDE · SUBURBS COVERED</span><h3><a href=\"western-suburbs.html\">Western Suburbs</a></h3><p class=\"area-region__intro\">Lighting, power points and plumbing repairs.</p><div class=\"area-region__localities\" data-region-localities aria-label=\"Western Suburbs\"><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Churchlands#enquiry\">Churchlands</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=City%20Beach#enquiry\">City Beach</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Claremont#enquiry\">Claremont</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Cottesloe#enquiry\">Cottesloe</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Crawley#enquiry\">Crawley</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Daglish#enquiry\">Daglish</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Dalkeith#enquiry\">Dalkeith</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Floreat#enquiry\">Floreat</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Jolimont#enquiry\">Jolimont</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Karrakatta#enquiry\">Karrakatta</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mosman%20Park#enquiry\">Mosman Park</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mount%20Claremont#enquiry\">Mount Claremont</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Nedlands#enquiry\">Nedlands</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=North%20Beach#enquiry\">North Beach</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Peppermint%20Grove#enquiry\">Peppermint Grove</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Shenton%20Park#enquiry\">Shenton Park</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Swanbourne#enquiry\">Swanbourne</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Trigg#enquiry\">Trigg</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Watermans%20Bay#enquiry\">Watermans Bay</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Wembley%20Downs#enquiry\">Wembley Downs</a></div></article>\n          <article class=\"area-region area-region--6\" data-region-name=\"Perth Hills &amp; Swan Valley\"><span class=\"area-region__meta\">REGIONAL GUIDE · SUBURBS COVERED</span><h3><a href=\"perth-hills-swan-valley.html\">Perth Hills &amp; Swan Valley</a></h3><p class=\"area-region__intro\">Hot-water, electrical and property-maintenance repairs.</p><div class=\"area-region__localities\" data-region-localities aria-label=\"Perth Hills and Swan Valley suburbs\"><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Aveley#enquiry\">Aveley</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Bellevue#enquiry\">Bellevue</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Brabham#enquiry\">Brabham</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Caversham#enquiry\">Caversham</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Chidlow#enquiry\">Chidlow</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Darlington#enquiry\">Darlington</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Ellenbrook#enquiry\">Ellenbrook</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Gooseberry%20Hill#enquiry\">Gooseberry Hill</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Greenmount#enquiry\">Greenmount</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Henley%20Brook#enquiry\">Henley Brook</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Jane%20Brook#enquiry\">Jane Brook</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Kalamunda#enquiry\">Kalamunda</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Lesmurdie#enquiry\">Lesmurdie</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Mundaring#enquiry\">Mundaring</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Parkerville#enquiry\">Parkerville</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Pickering%20Brook#enquiry\">Pickering Brook</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Stratton#enquiry\">Stratton</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Swan%20View#enquiry\">Swan View</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=The%20Vines#enquiry\">The Vines</a><a class=\"area-region__locality-link\" href=\"contact.html?suburb=Walliston#enquiry\">Walliston</a></div></article>\n        </div>\n      </div>\n    </section>" as TrustedHtml
},
{
"id": "section-2",
"kind": "faq",
"container": "\n    <section class=\"rich-band\">\n      <div class=\"shell split\">\n        <div><span class=\"eyebrow\">Need help choosing?</span><h2>Tell us what is happening.</h2><p>Include the address or suburb, whether it is plumbing or electrical, what you can observe and any access details.</p></div>\n        <aside class=\"panel\"><h3>Arrange a repair assessment</h3><p>Send your suburb and repair details. Our local team arranges an on-site assessment and confirms the repair plan and written quote.</p><a class=\"button\" href=\"contact.html\">Request a repair</a></aside>\n      </div>\n    <!-- site-intent:start --><div class=\"intent-content shell text-column\" data-site-intent><h2>Choose the property location, then the service</h2><p>The six regional guides organise the existing Perth suburb directory. They do not represent six separate shopfronts or confirm a dispatch time. Pair the address with the actual repair request so access, scope and availability can be checked together. Mandurah and Peel are not automatically included by the research table; ask about an address outside the listed directory.</p><ul class=\"intent-links\"><li><a href=\"plumbing.html\">Find the plumbing service</a></li><li><a href=\"electrical.html\">Find the electrical service</a></li><li><a href=\"contact.html\">Confirm an address and proposed work</a></li></ul><details><summary>{{ppp:faq:0:question}}</summary>{{ppp:faq:0:answer}}</details><details><summary>{{ppp:faq:1:question}}</summary>{{ppp:faq:1:answer}}</details></div><!-- site-intent:end --></section>" as TrustedHtml,
"items": [
{
"question": "Does selecting a suburb confirm an appointment?",
"answer": "<p>No. A suburb link prefills the property field in the enquiry form. The team still needs to agree the visit, work scope and access with you.</p>" as TrustedHtml
},
{
"question": "Is there a local office in every listed suburb?",
"answer": "<p>No. A service-area listing is a way to organise enquiries, not a claim that Ellis has premises in each suburb. The Perth office and its contact details are listed separately.</p>" as TrustedHtml
}
]
},
{
"id": "section-3",
"kind": "rich",
"html": "\n  <section class=\"section\" data-content-hub><div class=\"shell text-column\"><h2>Plumbing and electrical repairs across six Perth regions</h2><p>Choose the region for the property that needs work, then use a suburb link to prefill the repair form. The guides cover CBD and Inner Perth, Northern, Southern, Eastern and Western Suburbs, plus Perth Hills and Swan Valley. Use the suburb search to start your enquiry, then confirm the appointment with the team.</p><h3>Choose the service as well as the location</h3><p>For plumbing, start with <a href=\"blocked-drains-perth.html\">blocked drains</a>, <a href=\"water-leak-detection-perth.html\">water leak detection</a> or <a href=\"hot-water-problems-perth.html\">hot-water repairs</a>. For electrical work, see <a href=\"power-faults-perth.html\">electrical fault finding</a> or <a href=\"lighting-power-points-perth.html\">lighting and power points</a>. These pages explain the assessment and quote for the task. The regional guide adds information about arranging the visit.</p><h3>Arrange access and approval</h3><p>For an apartment, include the unit and building name, on-site contact and any concierge, lift or parking arrangements. For other premises, explain how the team can reach the relevant room or equipment. Tell us about restricted access without entering a hazardous area to inspect it. For a rental or strata property, identify who can approve the work; providing entry does not automatically authorise repair costs.</p><p>If your suburb is not listed, <a href=\"contact.html\">contact the Perth team</a> with the address and requested work to confirm coverage and availability. Start with what you can observe; you do not need a diagnosis or photos. The assessment and written quote establish the agreed repair scope, access requirements and any separate restoration work.</p></div></section>" as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Areas",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {

}
};
