// Pure historical markup transform only; canonical page records own public HTML.
const {retired}=require('./lib/ts-compat.cjs');
const photoStems=['perth-property-service','images/electrical-work/kitchen-lighting-wide','images/electrical-work/renovation-rewiring','images/electrical-work/residential-switchboard'];
const photoWidths=stem=>stem.endsWith('/renovation-rewiring')?[480,828]:[480,960];
function responsiveMarkup(html,file){
 html=html.replace(/<img\b[^>]*class="brand-logo"[^>]*>/g,tag=>tag.replace(/\s+srcset="[^"]*"/g,'').replace(/\s+sizes="[^"]*"/g,'').replace('<img','<img srcset="ellis-services-logo-54.webp 1x, ellis-services-logo-108.webp 2x"'));
 // Remove only pictures owned by this pass, so repeated builds remain stable.
 html=html.replace(/<picture data-responsive-media>[\s\S]*?(<img\b[^>]*>)<\/picture>/g,'$1');
 html=html.replace(/<img\b[^>]*>/g,tag=>{
  const src=tag.match(/\bsrc="([^"]+)"/)?.[1],stem=src?.replace(/\.(png|jpg)$/,'');
  if(!photoStems.includes(stem))return tag;
  const sizes=stem==='perth-property-service'?'(max-width:800px) calc(100vw - 80px), 560px':'(max-width:600px) calc(100vw - 32px), (max-width:800px) 50vw, 390px';
  tag=tag.replace(/\s+(?:srcset|sizes|loading|decoding)="[^"]*"/g,'');
  const srcset=format=>photoWidths(stem).map(width=>`${stem}-responsive-${width}.${format} ${width}w`).join(', ');
  tag=tag.replace('<img',`<img loading="lazy" decoding="async" srcset="${srcset('webp')}" sizes="${sizes}"`);
  return `<picture data-responsive-media><source type="image/avif" srcset="${srcset('avif')}" sizes="${sizes}">${tag}</picture>`;
 });
 if(file==='index.html'){
  html=html.replace(/\r?\n?<link data-mobile-hero[^>]*>/g,'');
  html=html.replace(/(<link rel="preload" as="image" href="hero-repair.jpg" fetchpriority="high")(?: media="[^"]*")?(>)/,'$1 media="(min-width:801px)"$2\n<link data-mobile-hero rel="preload" as="image" media="(max-width:800px)" href="hero-repair-mobile.webp" fetchpriority="high">');
 }
 return html;
}
if(require.main===module)retired();
module.exports={responsiveMarkup,applyResponsiveMedia:retired,photoStems,photoWidths};
