const fs=require('node:fs'),path=require('node:path');
const {pages,safety,metadata}=require('../data/site-content-intent.cjs');
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const plain=s=>s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&nbsp;/g,' ').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim();
function applySiteContent(root){
 for(const [file,p] of Object.entries(pages)){
  const target=path.join(root,file);let h=fs.readFileSync(target,'utf8');
  const previousPanel=h.match(/<!-- site-intent:start -->[\s\S]*?<!-- site-intent:end -->/)?.[0];
  const previousHeading=previousPanel?.match(/<h([23])([^>]*)>/);
  h=h.replace(/<!-- site-intent:start -->[\s\S]*?<!-- site-intent:end -->/g,'<!-- site-intent:slot -->').replace(/<aside class="intent-safety"[^>]*>[\s\S]*?<\/aside>/g,'').replace(/<!-- keyword-gap:start -->[\s\S]*?<!-- keyword-gap:end -->/g,'');
  const before=h;
  const faq=p.faq.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  const paragraphs=p.body.split('\n\n').map(t=>`<p>${esc(t)}</p>`).join('');
  const links=`<ul class="intent-links">${p.links.map(([url,label])=>`<li><a href="${url}">${esc(label)}</a></li>`).join('')}</ul>`;
  let main=h.match(/<main\b[\s\S]*?<\/main>/)[0];
  if(file==='plumbing.html')main=main.replace('Issues you can contact us about','Plumbing repairs we assess');
  if(file==='electrical.html')main=main.replace('Issues you can contact us about','Electrical repairs and installations');
  if(file==='property-management.html')main=main.replace('Keep these four elements together','Keep the property, issue and approval together');
  const existingFaq=/<section\b[^>]*class="[^"]*\bfaq\b/.test(main);
  const panel=(level,shell)=>`<!-- site-intent:start --><div class="intent-content${shell?' shell text-column':''}" data-site-intent><h${level}${previousHeading?.[2]||''}>${esc(p.heading)}</h${level}>${paragraphs}${links}${faq}</div><!-- site-intent:end -->`;
  if(previousPanel)main=main.replace('<!-- site-intent:slot -->',panel(Number(previousHeading?.[1]||2),/class="intent-content shell/.test(previousPanel)));
  else if(existingFaq){
   main=main.replace(/<section\b[^>]*class="[^"]*\bfaq\b[^>]*>[\s\S]*?<\/section>/,section=>{
    const hasHeading=/<h2\b/.test(section);
    const block=panel(hasHeading?3:2,false);
    return section.replace(/<details\b/,block+'<details');
   });
  }else if(/<main\b[^>]*class="article"/.test(main)) main=main.replace('</main>',panel(2,false)+'</main>');
  else {
   const sections=[...main.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].filter(m=>!/^<section[^>]*(?:data-content-hub|class="(?:page-)?hero")/.test(m[0]));
   if(!sections.length)throw new Error('No safe content placement: '+file);
   const last=sections.at(-1), replacement=last[0].replace('</section>',panel(2,true)+'</section>');
   main=main.slice(0,last.index)+replacement+main.slice(last.index+last[0].length);
  }
  if(p.sections?.length){
   const sections=p.sections.map(s=>`<div class="keyword-gap-part" id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.body.map(t=>`<p>${esc(t)}</p>`).join('')}${s.bullets?.length?`<ul>${s.bullets.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:''}${s.links?.length?`<ul class="intent-links">${s.links.map(([url,label])=>`<li><a href="${esc(url)}">${esc(label)}</a></li>`).join('')}</ul>`:''}</div>`).join('');
   if(main.includes('data-commercial-service')){
    const block=`<!-- keyword-gap:start --><div class="keyword-gap-content" data-keyword-gap>${sections}</div><!-- keyword-gap:end -->`;
    main=main.replace(/(<section class="section service-editorial">[\s\S]*?)(<\/div><\/section>)/,(_,body,end)=>body+block+end);
   }else{
    const block=`<!-- keyword-gap:start --><section class="section keyword-gap-content" data-keyword-gap><div class="shell service-reading">${sections}</div></section><!-- keyword-gap:end -->`;
    if(existingFaq)main=main.replace(/<section\b[^>]*class="[^"]*\bfaq\b[^>]*>/,tag=>block+tag);
   else main=main.replace('</main>',block+'</main>');
   }
  }
  if(safety[file])main=main.replace(/<\/h1>/,`</h1><aside class="intent-safety" data-intent-safety><p>${safety[file]}</p></aside>`);
  h=h.replace(/<main\b[\s\S]*?<\/main>/,()=>main);
  const meta=metadata[file];
  if(meta){
   if(meta.title){h=h.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(meta.title)}</title>`).replace(/(<meta\s+(?:property="og:title"|name="twitter:title")\s+content=")[^"]*("\s*\/?>)/g,`$1${esc(meta.title)}$2`);}
   if(meta.description)h=h.replace(/(<meta\s+(?:name="(?:twitter:)?description"|property="og:description")\s+content=")[^"]*("\s*\/?>)/g,`$1${esc(meta.description)}$2`);
   if(meta.h1)h=h.replace(/(<h1\b[^>]*>)[\s\S]*?(<\/h1>)/,`$1${esc(meta.h1)}$2`);
  }
  h=h.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/,(tag,json)=>{
   const data=JSON.parse(json),graph=data['@graph'];
   const visible=h.match(/<main\b[\s\S]*?<\/main>/)[0];
   const questions=[...visible.matchAll(/<details\b[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)].map(m=>({'@type':'Question',name:plain(m[1]),acceptedAnswer:{'@type':'Answer',text:plain(m[2])}}));
   data['@graph']=graph.filter(n=>n['@type']!=='FAQPage');
   const canonical=h.match(/rel="canonical"\s+href="([^"]+)"/)[1];
   data['@graph'].push({'@type':'FAQPage','@id':canonical+'#faq',url:canonical,mainEntity:questions});
   if(meta?.description)for(const node of data['@graph'])if(node['@type']==='Service')node.description=meta.description;
   return '<script type="application/ld+json">\n'+JSON.stringify(data,null,2)+'\n</script>';
  });
  if(!h.includes('editorial-quality.css'))h=h.replace('</head>','<link rel="stylesheet" href="editorial-quality.css?v=20261010">\n</head>');
  const current=fs.readFileSync(target,'utf8');
  // Preserve checkout EOLs and avoid rewriting unchanged pages on Windows.
  const normalized=h.replace(/\r\n/g,'\n');
  if(normalized!==current.replace(/\r\n/g,'\n'))fs.writeFileSync(target,current.includes('\r\n')?normalized.replace(/\n/g,'\r\n'):normalized);
 }
}
module.exports={applySiteContent};
