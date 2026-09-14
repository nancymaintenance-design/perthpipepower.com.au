const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pages = {
  'water-leak-detection-perth.html': ['Water leak detection', 'AUD $275–$550', 'per repair'],
  'burst-pipe-repair-perth.html': ['Burst-pipe repair', 'AUD $275–$990', 'per repair'],
  'blocked-drains-perth.html': ['Blocked drain clearing', 'AUD $198–$605', 'per repair'],
  'hot-water-problems-perth.html': ['Hot-water repair', 'AUD $198–$660', 'per repair', 'System replacement', 'AUD $1,980–$4,950', 'per package'],
  'tap-mixer-repairs-perth.html': ['Taps & mixers', 'AUD $165–$420', 'per repair'],
  'toilet-repairs-perth.html': ['Toilet repairs', 'AUD $165–$330', 'per repair'],
  'power-faults-perth.html': ['Power-fault diagnosis / priority attendance', 'AUD $220–$440', 'per attendance'],
  'safety-switch-tripping-perth.html': ['Safety-switch diagnosis & testing', 'AUD $220–$440', 'per attendance', 'RCD / RCBO replacement', 'AUD $220–$330', 'per device'],
  'lighting-power-points-perth.html': ['New power point', 'AUD $165–$275', 'per point', 'LED downlight', 'AUD $70–$160', 'per light'],
  'smoke-alarm-maintenance-perth.html': ['Standard hard-wired smoke alarm', 'AUD $205–$275', 'per alarm'],
};
const hubs = ['plumbing.html', 'electrical.html'];
const required = ['price-guide.css', 'Ellis Price Guide', 'AUD', 'incl. GST', 'standard-hours', 'standard-scope', 'written quote', 'access', 'materials', 'compliance', 'after-hours', 'unforeseen repairs'];
let failures = [];
for (const [file, texts] of Object.entries(pages)) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const text of [...required, ...texts]) if (!html.includes(text)) failures.push(`${file}: missing ${JSON.stringify(text)}`);
}
for (const file of hubs) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const text of required) if (!html.includes(text)) failures.push(`${file}: missing ${JSON.stringify(text)}`);
}
if (!fs.existsSync(path.join(root, 'price-guide.css'))) failures.push('missing shared price-guide.css');
for (const file of [...Object.keys(pages), ...hubs]) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  if (/competitor|market guide|market-rate/i.test(html)) failures.push(`${file}: prohibited market/competitor wording found`);
}
for (const file of Object.keys(pages)) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const infoIndex = html.indexOf('Perth service information');
  const guideIndex = html.indexOf('Ellis Price Guide');
  const relatedIndex = html.indexOf('Related information');
  const faqIndex = html.indexOf('<section class="section faq"');
  const contactIndex = html.indexOf('<section class="section contact-band"');
  if (infoIndex === -1) failures.push(`${file}: missing Perth service information marker`);
  if (guideIndex === -1) failures.push(`${file}: missing Ellis Price Guide marker`);
  if (infoIndex !== -1 && guideIndex !== -1) {
    const richBandStart = html.lastIndexOf('<section class="rich-band"', infoIndex);
    const richBandEnd = html.indexOf('</section>', richBandStart);
    if (richBandStart === -1 || richBandEnd === -1 || guideIndex < richBandStart || guideIndex > richBandEnd) {
      failures.push(`${file}: price guide must be inside the Perth service information rich-band`);
    }
  }
  for (const [label, index] of [['Related information', relatedIndex], ['FAQ', faqIndex], ['contact-band', contactIndex]]) {
    if (index !== -1 && guideIndex !== -1 && guideIndex > index) failures.push(`${file}: price guide must appear before ${label}`);
  }
  if (/<section class="section price-guide"/.test(html)) failures.push(`${file}: standalone bottom price-guide section found`);
}
for (const file of hubs) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const guideIndex = html.indexOf('Ellis Price Guide');
  const servicesIndex = html.indexOf('Common plumbing work we can discuss') !== -1
    ? html.indexOf('Common plumbing work we can discuss')
    : html.indexOf('Common electrical work we can discuss');
  const bottomBookingIndex = html.indexOf('A practical booking path');
  if (guideIndex === -1) failures.push(`${file}: missing Ellis Price Guide marker`);
  if (servicesIndex === -1) failures.push(`${file}: missing common-services heading`);
  if (guideIndex !== -1 && servicesIndex !== -1 && guideIndex < servicesIndex) failures.push(`${file}: price guide must follow the first service explanation`);
  if (guideIndex !== -1 && bottomBookingIndex !== -1 && guideIndex > bottomBookingIndex) failures.push(`${file}: price guide must not appear in the bottom booking area`);
  if (/<section class="section price-guide"/.test(html)) failures.push(`${file}: standalone bottom price-guide section found`);
}
if (failures.length) { console.error(`FAIL: ${failures.length} pricing requirement(s) missing\n${failures.join('\n')}`); process.exit(1); }
console.log(`PASS: ${Object.keys(pages).length} service pages and ${hubs.length} hubs contain the approved Ellis price-guide requirements.`);
