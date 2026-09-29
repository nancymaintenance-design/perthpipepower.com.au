const fs = require('node:fs');
const path = require('node:path');
const { regionGuides } = require('../data/region-guides');

const ROOT = path.join(__dirname, '..');
const origin = 'https://perthpipepower.com.au';
const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

function guideMain(guide) {
  const cards = guide.services.map(([title, copy, href]) => `<article><h3>${esc(title)}</h3><p>${esc(copy)}</p><a href="${esc(href)}">Explore ${esc(title)} →</a></article>`).join('');
  const scenarios = guide.scenarios.map(([title, copy]) => `<article><h3>${esc(title)}</h3><p>${esc(copy)}</p></article>`).join('');
  const process = ['Share the property address, access details and the issue you can safely observe.', 'Discuss the requested scope and quote before work is confirmed.', 'Keep the completed-work and invoice information with the property records.'].map((step) => `<li>${esc(step)}</li>`).join('');
  const faqs = guide.faqs.map(([question, answer]) => `<article><h3>${esc(question)}</h3><p>${esc(answer)}</p></article>`).join('');
  return `<main id="main"><section class="page-hero"><div class="shell"><p class="breadcrumbs"><a href="/">Home</a> / <a href="service-areas.html">Areas</a> / ${esc(guide.name)}</p><span class="eyebrow">Perth service region</span><h1>${esc(guide.title)}</h1><p>${esc(guide.intro)}</p></div></section><section class="section"><div class="shell"><span class="eyebrow">Core services</span><h2>Plumbing and electrical services in ${esc(guide.name)}</h2><div class="rich-grid">${cards}</div></div></section><section class="rich-band"><div class="shell"><span class="eyebrow">Service scenarios</span><h2>Prepare a clear service enquiry</h2><div class="rich-grid">${scenarios}</div></div></section><section class="section"><div class="shell split"><div><span class="eyebrow">How we scope the work</span><h2>Clear information before work is confirmed</h2><ol class="list-check">${process}</ol></div><aside class="panel"><h3>Property and maintenance context</h3><p>${esc(guide.property)}</p><a class="button" href="contact.html">Send an enquiry</a></aside></div></section><section class="section"><div class="shell"><span class="eyebrow">Frequently asked questions</span><h2>${esc(guide.name)} plumbing and electrical FAQ</h2><div class="rich-grid">${faqs}</div></div></section><section class="rich-band"><div class="shell split"><div><span class="eyebrow">Safety first</span><h2>Describe the issue without taking risks</h2><p>Do not approach a hazard, dismantle equipment or attempt electrical work. For immediate danger, call 000.</p></div><aside class="panel"><h3>Need plumbing or electrical help?</h3><p>Tell us the property region, what is happening and any access details.</p><a class="button" href="contact.html">Contact Ellis Services Group</a></aside></div></section></main>`;
}

function guideSchema(guide) {
  const canonical = `${origin}/${guide.route}`;
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: guide.title, url: canonical, description: guide.description },
    { '@type': 'LocalBusiness', '@id': `${origin}/#business`, name: 'Ellis Services Group', telephone: '0413 477 667', email: 'maxinemaintenance.au@outlook.com', address: { '@type': 'PostalAddress', streetAddress: '140 St Georges Terrace', addressLocality: 'Perth', addressRegion: 'WA', postalCode: '6000', addressCountry: 'AU' } },
    { '@type': 'Service', name: `Plumbing and electrical services in ${guide.name}`, provider: { '@id': `${origin}/#business` }, areaServed: guide.name, description: guide.description, hasOfferCatalog: { '@type': 'OfferCatalog', name: `Services in ${guide.name}`, itemListElement: guide.services.map(([name, description]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, description } })) } },
    { '@type': 'FAQPage', mainEntity: guide.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }
  ] });
}

function applyGuide(source, guide) {
  const canonical = `${origin}/${guide.route}`;
  const schema = `<script type="application/ld+json">${guideSchema(guide)}</script>`;
  return source
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(guide.title)} | Ellis Services Group</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?(?:\/>|>)/i, `<meta name="description" content="${esc(guide.description)}">`)
    .replace(/<link\s+rel="canonical"[\s\S]*?(?:\/>|>)/i, `<link rel="canonical" href="${canonical}">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schema)
    .replace(/<main\b[^>]*>[\s\S]*?<\/main>/i, guideMain(guide));
}

function build() {
  for (const guide of regionGuides) {
    const file = path.join(ROOT, guide.route);
    fs.writeFileSync(file, applyGuide(fs.readFileSync(file, 'utf8'), guide));
  }
  console.log(`Generated ${regionGuides.length} region guides.`);
}

if (require.main === module) build();
module.exports = { applyGuide, guideMain, guideSchema, regionGuides };
