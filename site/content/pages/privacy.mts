import type { PageData, TrustedHtml } from '../../types.mjs';
// Canonical content; shared/SEO/FAQ/heading tokens are derived formatting views.
export const page: PageData = {
"file": "privacy.html",
"kind": "privacy",
"seo": {
"title": "Privacy Policy | {{ppp:shared:business.name:raw}}",
"description": "How {{ppp:shared:business.name:raw}} handles personal information submitted through this Perth plumbing and electrical website.",
"canonical": "{{ppp:shared:business.origin:raw}}/privacy.html",
"robots": "noindex,follow",
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
}
],
"jsonLd": [

],
"jsonLdSource": [

]
},
"layoutId": "layout-d5abd561c06e",
"mainAttributes": {
"id": "main"
},
"hero": "\n      <section class=\"page-hero\"><div class=\"shell\">{{ppp:breadcrumbs}}<span class=\"eyebrow\">Your information</span><h1>Privacy policy</h1><p>How {{ppp:shared:business.name:html}} handles information you provide through this website.</p></div></section>" as TrustedHtml,
"sections": [
{
"id": "section-1",
"kind": "rich",
"html": "\n      <section class=\"section\"><div class=\"shell text-column\">\n        <h2>Information we collect</h2>\n        <p>When you send an enquiry, we may collect your name, phone number, email address and property address or suburb, together with the service details you choose to provide.</p>\n        <h2>How we use it</h2>\n        <p>We use enquiry information to respond to your request, discuss plumbing or electrical work, arrange access where appropriate and keep records connected with the enquiry or completed work.</p>\n        <h2>Keeping information secure</h2>\n        <p>Provide only information that is relevant to the request. Do not include unnecessary sensitive information or take photos that place you near an electrical, water or other safety hazard.</p>\n        <h2>Contact and updates</h2>\n        <p>For a privacy question or to update information you have submitted, contact {{ppp:shared:business.name:html}} at <a href=\"mailto:{{ppp:shared:business.email:html}}\">{{ppp:shared:business.email:html}}</a> or call <a href=\"tel:{{ppp:shared:contactRouting.telephone:html}}\">{{ppp:shared:business.displayTelephone:html}}</a>.</p>\n      </div></section>" as TrustedHtml
},
{
"id": "main-trailing-space",
"kind": "rich",
"html": "\n    " as TrustedHtml
}
],
"breadcrumbs": [
{
"label": "Home",
"href": "/"
},
{
"label": "Privacy Policy",
"href": null
}
],
"breadcrumbContainer": "<p class=\"breadcrumbs\"><a href=\"{{ppp:breadcrumb:0:href}}\">{{ppp:breadcrumb:0:label}}</a> / {{ppp:breadcrumb:1:label}}</p>" as TrustedHtml,
"chromeBindings": {

}
};
