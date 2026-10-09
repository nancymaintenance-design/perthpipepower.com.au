const fs = require('node:fs');
const path = require('node:path');
const { regionGuides } = require('../data/region-guides');

const ROOT = path.join(__dirname, '..');
const origin = 'https://perthpipepower.com.au';
const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
// HTML here comes only from reviewed first-party editorial data; not request input.
const paragraphs = (copy) => copy.map((item) => `<p>${item}</p>`).join('');

function guideMain(guide) {
  const faqs = guide.faqs.map(([question, answer]) => `<article><h3>${esc(question)}</h3><p>${esc(answer)}</p></article>`).join('');
  return `<main id="main"><section class="page-hero"><div class="shell"><p class="breadcrumbs"><a href="/">Home</a> / <a href="service-areas.html">Areas</a> / ${esc(guide.name)}</p><span class="eyebrow">Perth service region</span><h1>${esc(guide.title)}</h1><p>${esc(guide.intro)}</p></div></section><section class="section"><div class="shell text-column regional-guide"><span class="eyebrow">Plumber and electrician in ${esc(guide.name)}</span><h2>Plumbing and electrical repairs in ${esc(guide.name)}</h2><p>${esc(guide.localFocus)}</p><h3>Plumbing repairs, blocked drains, leak concerns and hot-water problems</h3>${paragraphs(guide.plumbing)}</div></section><section class="rich-band"><div class="shell text-column regional-guide"><span class="eyebrow">Electrical repair information</span><h2>Electrical repairs, fault finding, safety switches and power points</h2>${paragraphs(guide.electrical)}</div></section><section class="section"><div class="shell text-column regional-guide"><span class="eyebrow">Homes, rentals and managed properties</span><h2>What to include in a repair request</h2>${paragraphs(guide.property)}</div></section><section class="rich-band"><div class="shell text-column regional-guide"><span class="eyebrow">Clear scope before work</span><h2>Written quote before work proceeds</h2>${paragraphs(guide.quote)}<p><a class="button" href="contact.html">Request a repair in ${esc(guide.name)}</a></p></div></section><section class="section"><div class="shell text-column regional-guide"><span class="eyebrow">Questions before you contact us</span><h2>${esc(guide.name)} plumber and electrician FAQ</h2><div class="regional-guide__faq">${faqs}</div></div></section><section class="section electrical-work-gallery-section"><div class="shell text-column"><span class="eyebrow">Electrical work examples</span><h2>Electrical switchboard, lighting and power-point work</h2><p>These images show electrical switchboards, lighting and power points. Contact Ellis Services Group to arrange an on-site assessment and confirm the work scope and quote for your Perth property.</p></div><div class="shell" data-electrical-work-gallery></div></section></main>`;
}

function guideMainWithGallery(guide) {
  const localities = require('../data/perth-suburbs.json').filter(item => item.regionHub === guide.route);
  const coverage = localities.map(item => `<a href="contact.html?suburb=${encodeURIComponent(item.name)}">${esc(item.name)}</a>`).join(', ');
  const focus=esc(guide.localFocus).replace('Thornlie','<a href="contact.html?suburb=Thornlie">Thornlie</a>');
  const faqs = guide.faqs.map(([q,a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  return `<main id="main"><section class="page-hero"><div class="shell"><p class="breadcrumbs"><a href="/">Home</a> / <a href="service-areas.html">Areas</a> / ${esc(guide.name)}</p><span class="eyebrow">Ellis Services Group · Perth local team</span><h1>${esc(guide.title)}</h1><p>${esc(guide.intro)}</p><a class="button" href="tel:0413477667">Call 0413 477 667</a> <a class="button" href="contact.html">Request a repair in ${esc(guide.name)}</a></div></section>
<section class="section"><div class="shell text-column regional-guide"><h2>Plumbing and electrical repairs in ${esc(guide.name)}</h2><p>${focus}</p><h3>Plumbing repairs, drainage and hot water</h3>${paragraphs(guide.plumbing)}<h3>Electrical repairs and installation</h3>${paragraphs(guide.electrical)}<p>Work is carried out by appropriately licensed plumbing and electrical trades. Licence details are available on request. Our Perth team has an independent office and repair team within Ellis Services Group.</p><h2>Written quote before work proceeds</h2>${paragraphs(guide.quote)}<h2>What to include in a repair request</h2>${paragraphs(guide.property)}<p>Call <a href="tel:0413477667">0413 477 667</a> or <a href="contact.html">request an on-site assessment and written quote</a>. You do not need to diagnose the fault before making contact.</p><h3>Suburbs within this service region</h3><p>Choose your suburb to prefill the property location in our contact form: ${coverage}.</p><p>See <a href="service-areas.html">all six Perth service regions</a> for our wider coverage.</p></div></section>
<section class="section faq"><div class="shell text-column regional-guide"><h2>${esc(guide.name)} plumber and electrician FAQ</h2>${faqs}</div></section>
<section class="section electrical-work-gallery-section"><div class="shell text-column"><span class="eyebrow">Electrical work examples</span><h2>Electrical switchboard, lighting and power-point work</h2><p>Company electrical work photographs illustrate installation and repair stages. They are not assigned to a particular suburb without project-location records. Contact Ellis Services Group to discuss the work at your property.</p></div><div class="shell" data-electrical-work-gallery></div></section></main>`;
}

function guideSchema(guide) {
  const canonical = `${origin}/${guide.route}`;
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: guide.title, url: canonical, description: guide.description },
    { '@type': 'LocalBusiness', '@id': `${origin}/#business`, name: 'Ellis Services Group', telephone: '0413 477 667', email: 'maxinemaintenance.au@outlook.com', address: { '@type': 'PostalAddress', streetAddress: '140 St Georges Terrace', addressLocality: 'Perth', addressRegion: 'WA', postalCode: '6000', addressCountry: 'AU' } },
    { '@type': 'Service', name: `Plumbing and electrical repairs in ${guide.name}`, provider: { '@id': `${origin}/#business` }, areaServed: guide.name, description: guide.description, hasOfferCatalog: { '@type': 'OfferCatalog', name: `Plumbing and electrical repairs in ${guide.name}`, itemListElement: guide.services.map(([name, description]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, description } })) } },
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
    .replace(/<meta\b(?=[^>]*\bproperty="og:title")[^>]*\/?\s*>/i, `<meta property="og:title" content="${esc(guide.title)} | Ellis Services Group" />`)
    .replace(/<meta\b(?=[^>]*\bproperty="og:description")[^>]*\/?\s*>/i, `<meta property="og:description" content="${esc(guide.description)}" />`)
    .replace(/<meta\b(?=[^>]*\bproperty="og:url")[^>]*\/?\s*>/i, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/i, `<meta name="twitter:title" content="${esc(guide.title)} | Ellis Services Group" />`)
    .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/i, `<meta name="twitter:description" content="${esc(guide.description)}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, schema)
    .replace(/<main\b[^>]*>[\s\S]*?<\/main>/i, guideMainWithGallery(guide));
}

function build() {
  for (const guide of regionGuides) {
    const file = path.join(ROOT, guide.route);
    fs.writeFileSync(file, applyGuide(fs.readFileSync(file, 'utf8'), guide));
  }
  console.log(`Generated ${regionGuides.length} region guides.`);
}

if (require.main === module) build();
module.exports = { applyGuide, guideMain, guideMainWithGallery, guideSchema, regionGuides };
