const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..'),copy=require('../data/service-commercial-copy.cjs');
const metadata=require('../data/seo-service-metadata.cjs');
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const plain=s=>s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
function elementAt(html,start,tag){let depth=0;const re=new RegExp(`<\\/?${tag}\\b[^>]*>`,'g');re.lastIndex=start;let m;while((m=re.exec(html))){depth+=m[0].startsWith('</')?-1:1;if(!depth)return html.slice(start,re.lastIndex);}throw Error('Unbalanced '+tag);}
for(const [file,d] of Object.entries(copy)){
 Object.assign(d,metadata[file]);
 // Render from the reviewed release, not yesterday's incremental migration output.
 const baseline=cp.execFileSync('git',['show','dae4148:'+file],{cwd:root,encoding:'utf8'});
 let html=fs.readFileSync(path.join(root,file),'utf8');
 const oldMain=baseline.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
 let hero=oldMain.match(/<section\b[\s\S]*?<\/section>/)[0].replace(/<h1[^>]*>[\s\S]*?<\/h1>/,`<h1>${esc(d.headline)}</h1>`);
 hero=hero.replace(/(<h1[^>]*>[\s\S]*?<\/h1>)\s*<p>[\s\S]*?<\/p>/,`$1\n<p>${esc(d.intro)}</p>`);
 const call='<a class="button" href="tel:0413477667">Call 0413 477 667</a>';
 hero=hero.replace(/<a\b[^>]*class="button"[^>]*>[\s\S]*?<\/a>/,call+' <a class="button service-book-button" href="contact.html">Book '+esc(d.label.toLowerCase())+'</a>');
 if(!hero.includes('tel:0413477667'))hero=hero.replace('</div>',call+' <a class="button service-book-button" href="contact.html">Book '+esc(d.label.toLowerCase())+'</a></div>');
 const imageMatch=oldMain.match(/<img\b[^>]*>/);let image=imageMatch?.[0]||'';
 if(image){image=image.replace(/fetchpriority="high"/,'').replace(/loading="[^"]*"/,'loading="lazy"').replace(/class="[^"]*"/,'class="service-editorial-image"');if(!image.includes('loading='))image=image.replace('<img','<img loading="lazy"');if(!image.includes('class='))image=image.replace('<img','<img class="service-editorial-image"');}
 if(image&&!image.includes('srcset=')){
  const src=image.match(/src="([^"]+)"/)?.[1];
  const stem=src?.replace(/\.[^.]+$/,'');
  if(stem&&fs.existsSync(path.join(root,stem+'-480.webp')))image=image.replace('<img',`<img srcset="${stem}-480.webp 480w, ${stem}-960.webp 960w" sizes="(max-width: 540px) calc(100vw - 48px), 480px"`);
 }
 if(image.includes('src="hot-water-drainage-perth.png"'))image=image.replace(/alt="[^"]*"/,'alt="Plumbing service illustration showing drain access beside hot-water equipment"');
 if(image.includes('src="electrical-service-perth.png"'))image=image.replace(/alt="[^"]*"/,'alt="Electrical service illustration showing an electrician inspecting a switchboard"');
 const nav='<nav class="service-jump-links" aria-label="On this service page"><a href="#service-work">Services</a><a href="#service-method">Repair &amp; installation</a><a href="#service-quote">Costs &amp; quote</a><a href="#service-faq">FAQs</a><a href="#service-booking">Book a visit</a></nav>';
 const editorial=d.sections.map(([heading,paragraphs],i)=>`<div id="${i?'service-method':'service-work'}" class="service-editorial-part"><h2>${esc(heading)}</h2>${paragraphs.map(([sub,p])=>(sub?`<h3>${esc(sub)}</h3>`:'')+`<p>${p}</p>`).join('\n')}${!i&&image?`<figure class="service-editorial-figure">${image}</figure>`:''}</div>`).join('\n');
 const article=`<section class="section service-editorial"><div class="shell service-reading">${nav}${editorial}<p class="service-trade-note">Our Perth plumbing and electrical work is carried out by appropriately licensed trades. Licence details are available on request.</p><p class="service-safety"><strong>Safety:</strong> ${esc(d.safety)}</p></div></section>`;
 const priceStart=oldMain.search(/<div class="price-guide"/);
 const prices=priceStart>=0?elementAt(oldMain,priceStart,'div'):'';
 const oldScope=require('../data/service-presentation.cjs')[file].scope;
 const quote=`<section class="section service-quote" id="service-quote"><div class="shell service-reading"><h2>${esc(d.quoteHeading)}</h2>${prices||'<p>We provide a written quote after assessing the equipment, existing connections and installation requirements. Product supply and connection work are identified separately; no fixed package is assumed before assessment.</p>'}<h3>What your written quote covers</h3><p>${esc(oldScope)}</p><p>The final written quote sets out the work included, materials and any agreed additional tasks. We explain changes to the scope before extra work proceeds. <a href="contact.html">Request a ${esc(d.label.toLowerCase())} quote</a>.</p></div></section>`;
 const faqMap=new Map();
 for(const m of oldMain.matchAll(/<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g))faqMap.set(plain(m[1]),plain(m[2]));
 faqMap.set(d.newFaq[0],d.newFaq[1]);
 // One shared photo question, one visible group; retain all existing service-specific answers.
 faqMap.set('Can I send photos?','Photos are optional: email safely taken photos to maxinemaintenance.au@outlook.com. You can contact us without photos. Do not approach a hazard, remove covers or dismantle equipment to take a photo.');
 const faq=`<section class="section faq service-editorial-faq" id="service-faq"><div class="shell service-reading"><h2>${esc(d.headline)} FAQs</h2>${[...faqMap].map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}</div></section>`;
 const form=oldMain.match(/<form\b[\s\S]*?<\/form>/)?.[0]||'';
 const booking=`<section class="section contact-band service-booking" id="service-booking"><div class="shell service-reading"><h2>Book ${esc(d.label.toLowerCase())} in Perth</h2><p>${esc(d.booking)} Our local team covers <a href="service-areas.html">all six Perth service regions</a> from our office at 140 St Georges Terrace, Perth WA 6000.</p><p>Call to discuss the work or send the property details through our enquiry form. You do not need to diagnose the fault or complete a technical inspection before contacting us.</p>${call} <a class="button service-book-button" href="contact.html">Request a visit &amp; written quote</a>${form}</div></section>`;
 html=html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/,`<main id="main" data-commercial-service>\n${hero}\n${article}\n${quote}\n${faq}\n${booking}\n</main>`);
 html=html.replace(/<script\b[^>]*src="service-page-depth.js"[^>]*><\/script>/g,'');
 html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(d.title)}</title>`).replace(/(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]*(")/g,`$1${esc(d.title)}$2`);
 const description=d.description;
 html=html.replace(/(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*(")/g,`$1${esc(description)}$2`);
 html=html.replace(/(<link\s+rel="stylesheet"\s+href="field-design.css)[^"]*(")/g,'$1?v=20261008-services$2');
 html=html.replace(/(<script\b[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/g,(_,open,json,close)=>{
  const data=JSON.parse(json);const walk=x=>{if(!x||typeof x!=='object')return;if(x['@type']==='FAQPage')x.mainEntity=[...faqMap].map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}));if(x['@type']==='Service'||x['@type']==='WebPage'){x.name=d.headline;x.description=d.description;}for(const v of Object.values(x))if(typeof v==='object')Array.isArray(v)?v.forEach(walk):walk(v);};walk(data);return open+JSON.stringify(data,null,2)+close;
 });
 fs.writeFileSync(path.join(root,file),html.replace(/\r\n/g,'\n').replace(/[\t ]+$/gm,''));
 console.log(file+': '+plain(html.match(/<main[\s\S]*?<\/main>/)[0]).split(/\s+/).length+' words');
}
