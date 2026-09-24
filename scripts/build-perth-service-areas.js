const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const LOCALITY_OUTPUT = path.join(ROOT, 'service-areas');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const DIRECTORY_DATA_PATH = path.join(ROOT, 'service-area-data.js');
const REGIONS = [
  { name: 'CBD & Inner Perth', hub: 'perth-cbd-inner-suburbs.html' },
  { name: 'Northern Suburbs', hub: 'northern-suburbs.html' },
  { name: 'Southern Suburbs', hub: 'southern-suburbs.html' },
  { name: 'Eastern Suburbs', hub: 'eastern-suburbs.html' },
  { name: 'Western Suburbs', hub: 'western-suburbs.html' },
  { name: 'Perth Hills & Swan Valley', hub: 'perth-hills-swan-valley.html' },
];
const VALID_REGIONS = new Set(REGIONS.map(({ name }) => name));
const VALID_CASE_STATUSES = new Set(['pending', 'ready']);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

function loadLocalities(datasetPath = path.join(ROOT, 'data', 'perth-suburbs.json')) {
  const localities = JSON.parse(fs.readFileSync(datasetPath, 'utf8'));
  if (!Array.isArray(localities) || localities.length === 0) throw new Error('Perth locality dataset must contain at least one locality.');
  const slugs = new Set();
  for (const locality of localities) {
    if (!locality || typeof locality !== 'object') throw new Error('Each locality must be an object.');
    if (!locality.name || !slugPattern.test(locality.slug || '')) throw new Error('Each locality requires a URL-safe name and slug.');
    if (slugs.has(locality.slug)) throw new Error(`Duplicate locality slug: ${locality.slug}`);
    if (!VALID_REGIONS.has(locality.region)) throw new Error(`Unknown locality region: ${locality.region}`);
    if (!VALID_CASE_STATUSES.has(locality.caseStatus)) throw new Error(`Unknown case status: ${locality.caseStatus}`);
    if (!Array.isArray(locality.nearby) || locality.nearby.length < 2) throw new Error(`Locality requires two nearby areas: ${locality.slug}`);
    slugs.add(locality.slug);
  }
  const knownSlugs = new Set(localities.map(({ slug }) => slug));
  for (const locality of localities) {
    for (const nearbySlug of locality.nearby) if (!knownSlugs.has(nearbySlug)) throw new Error(`Unknown nearby locality: ${nearbySlug}`);
  }
  return localities.slice().sort((a, b) => a.name.localeCompare(b.name, 'en-AU'));
}

function buildDirectoryData(localities) {
  return {
    regions: REGIONS.map((region) => ({ ...region, localities: localities.filter((locality) => locality.region === region.name) })),
    localities,
  };
}

function renderHeader() {
  return '<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="shell head-row"><a class="brand" href="../"><img class="brand-logo" src="../ellis-services-logo.png" width="1237" height="1272" alt="Ellis Services Group logo">Ellis Services Group</a><nav class="site-nav" aria-label="Main navigation"><ul class="nav-list"><li><a href="../">Home</a></li><li><a href="../service-areas.html">Areas</a></li><li><a href="../plumbing.html">Plumbing</a></li><li><a href="../electrical.html">Electrical</a></li><li><a href="../contact.html" class="nav-cta">Contact</a></li></ul></nav></div></header>';
}

function renderFooter() {
  return '<footer class="footer"><div class="shell"><p>Ellis Services Group · <a href="tel:0413477667">0413 477 667</a> · <a href="mailto:maxinemaintenance.au@outlook.com">maxinemaintenance.au@outlook.com</a> · 140 St Georges Terrace, Perth WA 6000</p></div></footer><div class="mobile-ctas"><a href="tel:0413477667">Call</a><a href="../contact.html">Book / enquire</a></div>';
}

function renderEnquiryForm(locality) {
  const fieldPrefix = escapeHtml(locality.slug);
  const name = escapeHtml(locality.name);
  return `<form class="contact-card" data-enquiry-form novalidate><h2>Send an enquiry</h2><p>Tell us the essentials and we will receive your enquiry by email.</p><div class="honeypot" aria-hidden="true"><label for="${fieldPrefix}-company">Company</label><input id="${fieldPrefix}-company" name="company" tabindex="-1" autocomplete="off"></div><label for="${fieldPrefix}-name">Name</label><input id="${fieldPrefix}-name" name="name" autocomplete="name" required><label for="${fieldPrefix}-phone">Phone</label><input id="${fieldPrefix}-phone" name="phone" type="tel" autocomplete="tel" required><label for="${fieldPrefix}-email">Email</label><input id="${fieldPrefix}-email" name="email" type="email" autocomplete="email" required><label for="${fieldPrefix}-address">Property address or suburb</label><input id="${fieldPrefix}-address" name="address" autocomplete="street-address" value="${name}" required><label for="${fieldPrefix}-type">Service type</label><select id="${fieldPrefix}-type" name="type"><option>Plumbing</option><option>Electrical</option><option>Not sure</option></select><label for="${fieldPrefix}-message">What is happening?</label><textarea id="${fieldPrefix}-message" name="message" required></textarea><p class="form-note">Do not approach a hazard to take a photo. For immediate danger, call 000.</p><p class="form-status" aria-live="polite"></p><button class="button" type="submit">Send enquiry</button></form>`;
}

function renderLocalityPage(locality, allLocalities = []) {
  const name = escapeHtml(locality.name);
  const nearbyBySlug = new Map(allLocalities.map((item) => [item.slug, item]));
  const nearbyLinks = locality.nearby.map((slug) => nearbyBySlug.get(slug)).filter(Boolean).map((nearby) => `<a href="${escapeHtml(nearby.slug)}.html">${escapeHtml(nearby.name)}</a>`).join(' · ');
  return `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Plumber &amp; Electrician in ${name}, Perth | Ellis Services Group</title><meta name="description" content="Contact Ellis Services Group for plumbing and electrical repair and maintenance enquiries in ${name}, Perth."><meta name="robots" content="noindex,follow"><link rel="canonical" href="https://perthpipepower.com.au/service-areas/${escapeHtml(locality.slug)}.html"><link rel="stylesheet" href="../site.css"><link rel="stylesheet" href="../logo.css"><link rel="stylesheet" href="../navigation.css"><link rel="stylesheet" href="../mega-menu.css"><link rel="stylesheet" href="../mobile-refinement.css"></head><body>${renderHeader()}<main id="main"><section class="page-hero"><div class="shell"><p class="breadcrumbs"><a href="../">Home</a> / <a href="../service-areas.html">Areas</a> / ${name}</p><span class="eyebrow">Perth metropolitan area</span><h1>Plumber &amp; Electrician in ${name}, Perth</h1><p>Contact Ellis Services Group for plumbing and electrical repair and maintenance enquiries at your ${name} property.</p></div></section><section class="section"><div class="shell"><span class="eyebrow">${escapeHtml(locality.region)}</span><h2>Plumbing and electrical services</h2><p>Tell us what is happening at the property, and include the address, access details and whether the request is plumbing or electrical.</p><div class="rich-grid"><article><h3>Plumbing</h3><p>Leaks, drainage, taps, toilets and hot-water concerns.</p><a href="../plumbing.html">Explore plumbing services →</a></article><article><h3>Electrical</h3><p>Power faults, safety switches, lighting and smoke alarms.</p><a href="../electrical.html">Explore electrical services →</a></article></div></div></section><section class="rich-band"><div class="shell"><span class="eyebrow">Local work examples</span><h2>Construction cases for ${name}</h2><p>Real local work photos are being prepared. We will only add approved project details and images once they are available.</p></div></section><section class="section"><div class="shell split"><div><span class="eyebrow">Explore nearby</span><h2>Other Perth areas</h2><p><a href="../${escapeHtml(locality.regionHub)}">View ${escapeHtml(locality.region)}</a></p><p>${nearbyLinks || '<a href="../service-areas.html">Browse all Perth service areas</a>'}</p></div><div>${renderEnquiryForm(locality)}</div></div></section></main>${renderFooter()}<script src="../site.js"></script><script src="../navigation.js"></script><script src="../contact-form.js"></script></body></html>\n`;
}

function generateLocalityPages(localities) {
  fs.mkdirSync(LOCALITY_OUTPUT, { recursive: true });
  for (const locality of localities) fs.writeFileSync(path.join(LOCALITY_OUTPUT, `${locality.slug}.html`), renderLocalityPage(locality, localities));
}

function generateDirectoryData(localities, outputPath = DIRECTORY_DATA_PATH) {
  fs.writeFileSync(outputPath, `window.PERTH_SERVICE_AREAS = ${JSON.stringify(buildDirectoryData(localities))};\n`);
}

function updateSitemap(localities, sitemapPath = SITEMAP_PATH) {
  const existing = fs.readFileSync(sitemapPath, 'utf8');
  const withoutGeneratedPages = existing.replace(/\s*<url><loc>https:\/\/perthpipepower\.com\.au\/service-areas\/[^<]+<\/loc><\/url>/g, '');
  const readyPages = localities.filter(({ caseStatus }) => caseStatus === 'ready').map(({ slug }) => `  <url><loc>https://perthpipepower.com.au/service-areas/${slug}.html</loc></url>`).join('\n');
  fs.writeFileSync(sitemapPath, withoutGeneratedPages.replace(/\s*<\/urlset>\s*$/, readyPages ? `\n${readyPages}\n</urlset>` : '\n</urlset>'));
}

function build() {
  const localities = loadLocalities();
  generateLocalityPages(localities);
  generateDirectoryData(localities);
  updateSitemap(localities);
  console.log(`Generated ${localities.length} Perth locality pages.`);
}

if (require.main === module) build();

module.exports = { ROOT, REGIONS, loadLocalities, buildDirectoryData, renderLocalityPage, generateLocalityPages, generateDirectoryData, updateSitemap };
