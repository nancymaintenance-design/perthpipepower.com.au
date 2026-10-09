const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),origin='https://perthpipepower.com.au';
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const write=(f,h)=>fs.writeFileSync(path.join(root,f),h.replace(/\r\n/g,'\n').replace(/[\t ]+$/gm,''));
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
function describe(h,copy){return h.replace(/(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*(")/g,(_,a,b)=>a+esc(copy)+b);}
for(const [file,d] of Object.entries(require('../data/seo-guide-expansions.cjs'))){
 let h=read(file),main=h.match(/<main\b[\s\S]*?<\/main>/)[0];
 // Rebuild an owned expansion instead of appending another block on each run.
 main=main.replace(/<div data-seo-guide-expansion>[\s\S]*?<\/div>/,'');
 main=main.replace(/<section class="article-next-step">[\s\S]*?<\/section>/,'').replace(/<p><a class="button"[^>]*>[\s\S]*?<\/p>/g,'');
 main=main.replace(/<p class="shell">Photos are optional:[\s\S]*?<\/p>/g,'');
 const extra='<div data-seo-guide-expansion>'+d.sections.map(([title,ps])=>`<h2>${esc(title)}</h2>${ps.map(p=>'<p>'+p+'</p>').join('')}`).join('')+'<p>Photos are optional: email safely taken photos to <a href="mailto:maxinemaintenance.au@outlook.com">maxinemaintenance.au@outlook.com</a>. You can contact us without photos.</p><p><a class="button" href="contact.html">Arrange an on-site assessment &amp; written quote</a></p></div>';
 // Keep the article header and initial observation guidance; put the expanded explanation before the closing CTA.
 main=main.replace('</main>',extra+'</main>');
 h=describe(h.replace(/<main\b[\s\S]*?<\/main>/,main),d.description);
 write(file,h);
}
for(const [file,h1,title,description] of [
 ['plumbing.html','Plumber Perth — Plumbing Repairs & Installation','Plumber Perth | Plumbing Repairs & Installation | Ellis','Book a Perth plumber for drains, leaks, hot water, taps, toilets and fixture connections. Our local team assesses the work and provides a written quote.'],
 ['electrical.html','Electrician Perth — Electrical Repairs & Installation','Electrician Perth | Repairs & Installation | Ellis','Book a Perth electrician for power faults, safety switches, lighting, outlets and smoke alarms. Local licensed trades, on-site assessment and written quotes.']
]){
 let h=read(file).replace(/<h1[^>]*>[\s\S]*?<\/h1>/,`<h1>${esc(h1)}</h1>`).replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(title)}</title>`);
 const intro=file==='plumbing.html'?'Ellis Services Group provides plumbing repairs and installation across Perth, including blocked drains, water leaks, hot water, taps, toilets and fixture connections. Our local team assesses the work, explains the repair or installation plan and provides a written quote before agreed work proceeds.':'Book a Perth electrician for electrical fault finding, safety switches, lighting, power points and smoke alarm work. Our local licensed electrical trades assess the installation, explain the required repair or improvement and confirm the scope and price in a written quote.';
 h=h.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)\s*<p>[\s\S]*?<\/p>/,`$1\n<p>${intro}</p>`);
 h=h.replace(/(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]*(")/g,(_,a,b)=>a+esc(title)+b);
 h=describe(h,description);
 h=h.replace(/<img[^>]*>/g,tag=>{if(tag.includes('class="brand-logo"'))return tag.replace(/ srcset="[^"]+" sizes="[^"]+"/,'');const src=tag.match(/src="([^"]+\.png)"/)?.[1];if(!src||tag.includes('srcset='))return tag;const stem=src.replace(/\.png$/,'');return tag.replace('<img',`<img srcset="${stem}-480.webp 480w, ${stem}-960.webp 960w" sizes="(max-width: 540px) calc(100vw - 48px), 480px"`);});
 h=h.replace(/(<script[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/g,(_,open,json,close)=>{const data=JSON.parse(json);const walk=x=>{if(!x||typeof x!=='object')return;if(x['@type']==='Service'||x['@type']==='WebPage'){x.name=h1;x.description=description;}for(const v of Object.values(x))if(typeof v==='object')Array.isArray(v)?v.forEach(walk):walk(v);};walk(data);return open+JSON.stringify(data,null,2)+close;});
 write(file,h);
}
let home=read('index.html');
home=home.replace(/<h3>(?:Blocked Drains &amp; Toilet Repairs Perth|Blocked Drain Clearing &amp; Drain Repairs Perth)<\/h3>/,'<h3>Blocked Drains Perth — Drain Clearing &amp; Repairs</h3>').replace('<h3>Power Point &amp; Lighting Repairs Perth</h3>','<h3>Lighting &amp; Power Point Repairs and Installation Perth</h3>');
write('index.html',home);
let insights=read('insights.html').replace('href="safety-switch-tripping-perth.html">Read guide','href="insights-safety-switch-keeps-tripping.html">Read guide').replace('href="hot-water-problems-perth.html">Read guide','href="insights-hot-water-plumbing-or-electrical.html">Read guide');write('insights.html',insights);
const feed=JSON.parse(read('ai-content.json')),copy=require('../data/service-commercial-copy.cjs'),meta=require('../data/seo-service-metadata.cjs');
feed.services=['Plumbing repairs, drain clearing and water leak detection','Hot-water repairs and system replacement assessment','Electrical fault finding, safety switches and RCD repairs','Lighting, power points and smoke alarm repairs and installation','Fixture and appliance connections','Smart home and energy electrical services','Rental, strata and managed-property maintenance'];
feed.servicePages=Object.entries(copy).map(([file,d])=>({name:meta[file].headline||d.headline,url:origin+'/'+file,description:meta[file].description}));
feed.business.team='Ellis Services Group has an independent Perth office and local repair team within Ellis Group.';
feed.sourcePolicy='This summary reflects visible website services. No case location, certification number, review rating or fixed package price is inferred. Published ranges are guides; the final written quote confirms property-specific scope and price.';
write('ai-content.json',JSON.stringify(feed,null,2)+'\n');
write('llms.txt','# Ellis Services Group — Perth plumbing and electrical services\n\nIndependent Perth office and local repair team within Ellis Group, serving all six Perth regions.\n\n## Contact\n0413 477 667\nmaxinemaintenance.au@outlook.com\n140 St Georges Terrace, Perth WA 6000, Australia\n\n## Service pages\n'+feed.servicePages.map(x=>`- [${x.name}](${x.url}): ${x.description}`).join('\n')+'\n\n## Perth service regions\n'+feed.regions.map(x=>`- [${x.name}](${x.url})`).join('\n')+'\n\n## Business and booking\n- [About Ellis]('+origin+'/about.html)\n- [Plumbing]('+origin+'/plumbing.html)\n- [Electrical]('+origin+'/electrical.html)\n- [Service areas]('+origin+'/service-areas.html)\n- [Request an assessment]('+origin+'/contact.html)\n\n## Information policy\nPublic service summaries match visible website content. Service scope and final prices are confirmed in a written quote. Photographs are not assigned to suburbs without project records. No invented ratings, credentials or case results.\n');
console.log('Updated six supporting articles, two service hubs, homepage service labels and public AI summaries.');
