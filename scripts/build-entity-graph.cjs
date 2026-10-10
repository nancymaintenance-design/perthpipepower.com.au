const fs = require('node:fs');
const path = require('node:path');
const b = require('../data/business-entity.cjs');
const services = require('../data/seo-service-metadata.cjs');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const write = (f, text) => { if (read(f) !== text) fs.writeFileSync(path.join(root, f), text); };
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const plain = text => decode(text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
const entity = {
  '@type': 'LocalBusiness', '@id': b.id, name: b.name, legalName: b.legalName,
  taxID: b.abn, identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: b.abn, url: b.registration },
  url: b.origin + '/', telephone: b.telephone, email: b.email, address: b.address,
  geo: { '@type': 'GeoCoordinates', latitude: -31.954352, longitude: 115.8564539 },
  logo: { '@type': 'ImageObject', url: b.logo }, hasMap: b.maps,
  sameAs: [b.instagram, b.facebook, b.linkedin], areaServed: { '@type': 'City', name: 'Perth' },
};
const website = { '@type': 'WebSite', '@id': b.origin + '/#website', url: b.origin + '/', name: b.name, inLanguage: 'en-AU', publisher: { '@id': b.id } };
const legal = `<p class="shell" data-business-identity>${b.legalName} · <a href="${b.registration}" target="_blank" rel="noopener noreferrer">ABN ${b.abn}</a></p>`;
let count = 0;
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  let html = read(file);
  if (/name="robots" content="noindex/i.test(html)) continue;
  const canonicalTag = html.match(/<link\b[^>]*rel="canonical"[^>]*>/i)?.[0];
  const url = canonicalTag?.match(/href="([^"]+)"/)?.[1];
  if (!url) throw new Error(file + ': missing canonical');
  const heading = plain(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || b.name);
  const description = decode(html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || '');
  const nodes = [];
  const jsonPattern = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  for (const m of html.matchAll(jsonPattern)) {
    const data = JSON.parse(m[1]);
    nodes.push(...(data['@graph'] || [data]));
  }
  // Preserve existing truthful homepage hours. Do not infer availability from ABN data.
  const business = structuredClone(entity);
  const oldBusiness = nodes.find(n => n['@type'] === 'LocalBusiness');
  if (file === 'index.html' && oldBusiness?.openingHoursSpecification) business.openingHoursSpecification = oldBusiness.openingHoursSpecification;
  const page = {
    '@type': nodes.some(n => n['@type'] === 'CollectionPage') ? 'CollectionPage' : 'WebPage',
    '@id': url + '#webpage', url, name: heading, description, inLanguage: 'en-AU',
    isPartOf: { '@id': website['@id'] }, about: { '@id': b.id },
  };
  const graph = [business, website, page];
  if (file !== 'index.html') {
    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: b.origin + '/' }];
    const visibleCrumbs = html.match(/<p\b[^>]*class="[^"]*\bbreadcrumbs\b[^"]*"[^>]*>[\s\S]*?<\/p>/)?.[0] || '';
    for (const [, href, label] of visibleCrumbs.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
      const item = new URL(decode(href), url).href;
      if (item === url || crumbs.some(c => c.item === item)) continue;
      crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: plain(label), item });
    }
    crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: heading, item: url });
    page.breadcrumb = { '@id': url + '#breadcrumb' };
    graph.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: crumbs });
  }
  const serviceNodes = nodes.filter(n => n['@type'] === 'Service');
  if (services[file] && !serviceNodes.length) serviceNodes.push({ '@type': 'Service', name: heading, description, serviceType: heading, areaServed: { '@type': 'City', name: 'Perth' } });
  for (const [index, node] of serviceNodes.entries()) {
    delete node['@context'];
    node['@id'] = url + '#service' + (index ? '-' + (index + 1) : '');
    node.provider = { '@id': b.id };
    node.url = url;
    node.mainEntityOfPage = { '@id': page['@id'] };
    graph.push(node);
  }
  for (const node of nodes.filter(n => ['Article', 'FAQPage'].includes(n['@type']))) {
    delete node['@context'];
    node['@id'] = url + (node['@type'] === 'Article' ? '#article' : '#faq');
    if (node['@type'] === 'Article') {
      node.headline = heading;
      node.description = description;
      node.author = { '@id': b.id };
      node.publisher = { '@id': b.id };
      node.mainEntityOfPage = { '@id': page['@id'] };
      const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || '';
      const updated = main.match(/data-editorial-meta[^>]*>[\s\S]*?<time datetime="(\d{4}-\d{2}-\d{2})"/)?.[1];
      if (updated) node.dateModified = updated;
      const summary = main.match(/data-editorial-summary><h2>[^<]*<\/h2><p>([\s\S]*?)<\/p>/)?.[1];
      if (summary) node.abstract = plain(summary);
      const image = main.match(/<img\b[^>]*src="([^"]+)"/i)?.[1];
      if (image) node.image = new URL(image, url).href;
    }
    graph.push(node);
  }
  html = html.replace(jsonPattern, '');
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/</g, '\\u003c');
  html = html.replace(/\s*<\/head>/, `\n<script type="application/ld+json">\n${json}\n</script>\n</head>`);
  html = html.replaceAll('https://share.google/HbT2Uijg3K6yaqcpV', b.facebook)
    .replaceAll('https://share.google/Z4tImXHToPi9H4LmH', b.linkedin)
    .replaceAll('https://share.google/XuRahe0m1VzUUvcGV', b.maps)
    .replaceAll('https://maps.app.goo.gl/VZrhE2ZN1NGRJJxd7', b.maps);
  if (file === 'index.html') {
    html = html.replace(/<p data-map-contact-note>[\s\S]*?<\/p>/g, '');
    html = html.replace('<div class="field-work__grid">', '<p data-map-contact-note>The Google listing is for Ellis Services Group. For plumbing and electrical enquiries through this website, call <a href="tel:0413477667">0413 477 667</a> or <a href="contact.html">contact our Perth repair team</a>.</p><div class="field-work__grid">');
  }
  if (file === 'about.html') {
    html = html.replace(/<p data-registration-scope>[\s\S]*?<\/p>/g, '');
    html = html.replace('<h2>Registered business details.</h2>', '<h2>Registered business details.</h2><p data-registration-scope>The ABR record verifies the registered company, ABN and GST status; it does not list individual trade licences. Contact our Perth team privately for the current documentation relevant to the proposed work.</p>');
  }
  html = html.replace(/<p(?: class="shell")? data-business-identity>[\s\S]*?<\/p>\s*/g, '');
  html = html.replace('</footer>', legal + '\n</footer>');
  // Discard blank lines left by old JSON-LD blocks for deterministic regeneration.
  html = html.replace(/\r\n/g, '\n').replace(/[\t ]+$/gm, '').replace(/\n{3,}/g, '\n\n');
  write(file, html);
  count++;
}
const feed = JSON.parse(read('ai-content.json'));
Object.assign(feed.business, { legalName: b.legalName, abn: b.abn, registration: b.registration, sameAs: [b.instagram, b.facebook, b.linkedin], hasMap: b.maps });
write('ai-content.json', JSON.stringify(feed, null, 2) + '\n');
let llms = read('llms.txt').replace(/\n## Verified business identity\n[\s\S]*$/, '');
llms = llms.trimEnd() + `\n\n## Verified business identity\nLegal entity: ${b.legalName}\nABN: ${b.abn}\n- [ABN Lookup](${b.registration})\n- [Facebook](${b.facebook})\n- [LinkedIn](${b.linkedin})\n- [Google Maps business profile](${b.maps})\n`;
write('llms.txt', llms);
console.log(`Generated connected entity graphs and public business identity for ${count} indexable pages.`);
