const fs = require('node:fs');
const path = require('node:path');
const summaries = require('../data/editorial-summaries.cjs');
const serviceAnswers = require('../data/service-answers.cjs');
const crypto = require('node:crypto');
const {contentDate} = require('./lib/content-dates.cjs');
const root = path.resolve(__dirname, '..');
require('./apply-site-content-intent.cjs').applySiteContent(root);
const datePath = path.join(root, 'data/editorial-content-dates.json');
const dates = fs.existsSync(datePath) ? JSON.parse(fs.readFileSync(datePath, 'utf8')) : {};
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const plain = s => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
const save = (file, text) => { const target = path.join(root, file); if (fs.readFileSync(target, 'utf8') !== text) fs.writeFileSync(target, text); };
const hubCopy = {
  'service-areas.html': `<section class="section" data-content-hub><div class="shell text-column"><h2>Plumbing and electrical repairs across six Perth regions</h2><p>Choose the region for the property that needs work, then use a suburb link to prefill the repair form. The guides cover CBD and Inner Perth, Northern, Southern, Eastern and Western Suburbs, plus Perth Hills and Swan Valley. The suburb search is a booking shortcut; it does not confirm an appointment or arrival time.</p><h3>Choose the service as well as the location</h3><p>For plumbing, start with <a href="blocked-drains-perth.html">blocked drains</a>, <a href="water-leak-detection-perth.html">water leak detection</a> or <a href="hot-water-problems-perth.html">hot-water repairs</a>. For electrical work, see <a href="power-faults-perth.html">electrical fault finding</a> or <a href="lighting-power-points-perth.html">lighting and power points</a>. These pages explain the assessment and quote for the task. The regional guide adds information about arranging the visit.</p><h3>Arrange access and approval</h3><p>For an apartment, include the unit and building name, on-site contact and any concierge, lift or parking arrangements. For other premises, explain how the team can reach the relevant room or equipment. Tell us about restricted access without entering a hazardous area to inspect it. For a rental or strata property, identify who can approve the work; providing entry does not automatically authorise repair costs.</p><p>If your suburb is not listed, <a href="contact.html">contact the Perth team</a> with the address and requested work to confirm coverage and availability. Start with what you can observe; you do not need a diagnosis or photos. The assessment and written quote establish the agreed repair scope, access requirements and any separate restoration work.</p></div></section>`,
  'insights.html': `<section class="section" data-content-hub><div class="shell text-column"><h2>Find the guide for your property problem</h2><p>These guides help owners, occupants and property managers describe plumbing and electrical problems before arranging an assessment. They explain what information is useful, how inspection and repairs are scoped, and which decisions belong in the written quote. A symptom or photograph provides context; it does not establish the failed part.</p><h3>Leaks, hot water and recurring trips</h3><p>Use the leak guide to describe water spread, timing and access. The hot-water guide distinguishes a problem at one outlet from loss of hot water across a property. The safety-switch guide explains why a recurring trip needs assessment before a replacement is proposed. For booking and service scope, continue to <a href="water-leak-detection-perth.html">water leak detection</a>, <a href="hot-water-problems-perth.html">hot-water repairs</a> or <a href="safety-switch-tripping-perth.html">safety switch and RCD repairs</a>.</p><h3>For tenants and property managers</h3><p>The maintenance handover guide separates the occupant report from access permission and work approval. Our <a href="property-management.html">managed-property maintenance service</a> explains the service pathway, while the <a href="news.html">work-order and access notes</a> help prepare a clear instruction.</p><p>You can contact Ellis with the location and observed issue before collecting a complete set of details. Photos are optional and should only be taken safely. For available service regions, use <a href="service-areas.html">the Perth suburb directory</a>. To arrange an assessment, <a href="contact.html">request a repair</a> with the current condition and access contact.</p></div></section>`,
  'news.html': `<section class="section" data-content-hub><div class="shell text-column"><h2>From a repair request to a clear work order</h2><p>These practical company notes explain how to describe a job, coordinate entry and record approval. Each note covers a different part of the booking process so owners and managers can keep the same property reference from first contact through to the agreed work.</p><h3>Start with the condition at the property</h3><p>Use the initial-enquiry note for the location, affected room and current symptom. Separate a reported fault from an improvement you want quoted, such as a new outlet or appliance connection. For the work itself, our <a href="plumbing.html">plumbing service overview</a> and <a href="electrical.html">electrical service overview</a> link to the relevant repair and installation pages.</p><h3>Keep access and approval distinct</h3><p>The access note covers entry to the property and equipment, the on-site contact and changed arrangements. The work-order note covers the requested tasks, decision-maker and approval boundaries. An occupant who provides access may not be authorised to approve additional repair costs. Keep private entry codes and keys out of public photos and pages.</p><p>For technical observations, use our <a href="insights.html">plumbing and electrical guides</a>. For a rental, strata or other managed premises, see <a href="property-management.html">property management maintenance</a>. When ready, <a href="contact.html">send the request</a> with the address, current issue and contact details. The written quote confirms the property-specific work; a preparation checklist is not a diagnosis or a fixed-price package.</p></div></section>`,
};
for (const [file, block] of Object.entries(hubCopy)) {
  let html = fs.readFileSync(path.join(root, file), 'utf8');
  html = html.replace(/<section class="section" data-content-hub>[\s\S]*?<\/section>/, '');
  html = html.replace('</main>', block + '</main>');
  save(file, html);
}
const guideRoutes = {
  'insights-reporting-a-plumbing-leak.html': '<p data-guide-services>For a leak centred on a fitting, see <a href="tap-mixer-repairs-perth.html">tap and mixer repairs</a> or <a href="toilet-repairs-perth.html">toilet and cistern repairs</a>. Water returning through a drain is a different drainage request: see <a href="blocked-drains-perth.html">blocked-drain clearing and assessment</a>. If the source is unclear, describe the observation rather than choosing a diagnosis.</p>',
  'insights-safety-switch-keeps-tripping.html': '<p data-guide-services>For investigation and repair scope, see <a href="power-faults-perth.html">electrical fault finding</a> and <a href="safety-switch-tripping-perth.html">safety switch and RCD repairs</a>. If you also want a fitting replaced or a new outlet, identify that as separate planned work: see <a href="lighting-power-points-perth.html">lighting and power-point services</a>. Do not remove covers or touch wiring to identify a fault.</p>',
  'insights-tenant-property-manager-maintenance-handover.html': '<p data-guide-services>Keep an occupant-reported <a href="smoke-alarm-maintenance-perth.html">smoke-alarm fault</a> distinct from planned <a href="fixtures-appliances-perth.html">fixture or appliance connections</a> and <a href="renewables-smart-home-perth.html">smart-home electrical work</a>. Record the location and requested assessment for each task, then identify who may approve the quoted scope. The handover is not a technical inspection or evidence that a proposed product is compatible.</p>',
};
for (const [file, summary] of Object.entries(summaries)) {
  let html = fs.readFileSync(path.join(root, file), 'utf8');
  html = html.replace(/<aside class="article-summary" data-editorial-summary>[\s\S]*?<\/aside>/, '');
  html = html.replace(/<nav class="article-toc"[^>]*>[\s\S]*?<\/nav>/, '');
  html = html.replace(/<p class="article-meta" data-editorial-meta>[\s\S]*?<\/p>/, '');
  const mainMatch = html.match(/<main\b[\s\S]*?<\/main>/);
  let main = mainMatch[0];
  main = main.replace(/<p data-guide-services>[\s\S]*?<\/p>/g, '');
  if (guideRoutes[file]) main = main.replace('</main>', guideRoutes[file] + '</main>');
  const links = [];
  main = main.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (_, attrs, title) => {
    const id = attrs.match(/\bid="([^"]+)"/)?.[1] || 'guide-' + (links.length + 1);
    links.push([id, plain(title)]);
    return `<h2${/\bid=/.test(attrs) ? attrs : attrs + ` id="${id}"`}>${title}</h2>`;
  });
  const sha256 = crypto.createHash('sha256').update(JSON.stringify({main:main.replace(/\s+/g,' ').trim(), summary})).digest('hex');
  dates[file] = contentDate(dates[file], sha256, process.argv[2]);
  const modified = dates[file].lastmod;
  const dateLabel = new Intl.DateTimeFormat('en-AU', {day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(modified));
  const block = `<p class="article-meta" data-editorial-meta>By <a href="about.html">Ellis Services Group</a> · Updated <time datetime="${modified}">${dateLabel}</time></p><aside class="article-summary" data-editorial-summary><h2>At a glance</h2><p>${esc(summary)}</p></aside><nav class="article-toc" aria-label="In this guide"><h2>In this guide</h2><ul>${links.map(([id, title]) => `<li><a href="#${id}">${esc(title)}</a></li>`).join('')}</ul></nav>`;
  main = main.replace('</header>', '</header>' + block);
  html = html.replace(mainMatch[0], main);
  if (!html.includes('href="editorial-quality.css?v=20261010"')) html = html.replace('</head>', '<link rel="stylesheet" href="editorial-quality.css?v=20261010">\n</head>');
  save(file, html);
}
for (const [file, [answer, guide, label]] of Object.entries(serviceAnswers)) {
  let html = fs.readFileSync(path.join(root, file), 'utf8');
  html = html.replace(/<aside class="service-answer" data-service-answer>[\s\S]*?<\/aside>/g, '');
  const block = `<aside class="service-answer" data-service-answer><h2>What to do next</h2><p>${esc(answer)}</p><p><a href="${guide}">${esc(label)}</a>. <a href="contact.html">Request an assessment and written quote</a>.</p></aside>`;
  html = html.replace(/(<nav class="service-jump-links"[\s\S]*?<\/nav>)/, '$1' + block);
  if (!html.includes('href="editorial-quality.css?v=20261010"')) html = html.replace('</head>', '<link rel="stylesheet" href="editorial-quality.css?v=20261010">\n</head>');
  save(file, html);
}
fs.writeFileSync(datePath, JSON.stringify(dates,null,2) + '\n');
require('./build-entity-graph.cjs');
console.log('Updated three content hubs and seven article summaries, bylines and navigation.');
