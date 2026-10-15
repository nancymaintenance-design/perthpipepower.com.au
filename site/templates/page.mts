import type { ContentSection, PageData, SiteData } from '../types.mjs';
import { validateSiteData } from '../validate-content.mjs';
import { renderBreadcrumbs } from './breadcrumbs.mjs';
import { escapePlainText, renderDocument, renderSlots } from './document.mjs';
import { renderFaq } from './faq.mjs';
import { renderFooter } from './footer.mjs';
import { renderHead } from './head.mjs';
import { renderNavigation } from './navigation.mjs';
import { hasEnquirySidebar, renderEnquiryLayout } from './enquiry-sidebar.mjs';

function renderSections(sections: readonly ContentSection[],pageFile:string): string {
  return sections.map(section => section.kind === 'rich' ? section.html : renderFaq(section.items, section.container,pageFile)).join('');
}

function renderHeroPage(page: PageData): string {
  if (page.hero === null) throw new Error(`Invalid ${page.kind} page: missing hero for ${page.file}`);
  let hero:string=page.hero;
  if(hasEnquirySidebar(page)){
    hero=hero.replace(/href="contact\.html(?:[?#][^"]*)?"/g,'href="#enquiry"');
    if(!hero.includes('href="#enquiry"'))hero=hero.replace(/<\/div>(\s*<\/section>\s*)$/, '<a class="button alt" href="#enquiry">Request a repair</a></div>$1');
  }
  return hero + renderEnquiryLayout(page,renderSections(page.sections,page.file));
}

function renderArticle(page: PageData): string {
  // Editorial titles, dates and breadcrumb wrappers live in the ordered article
  // fragments. A generic hero would duplicate the title and shift those nodes.
  if (page.hero !== null || !page.mainAttributes.class?.split(/\s+/).includes('article')) {
    throw new Error(`Invalid article layout for ${page.file}`);
  }
  return renderEnquiryLayout(page,renderSections(page.sections,page.file));
}

function renderContent(page: PageData): string {
  switch (page.kind) {
    case 'article': return renderArticle(page);
    case 'home':
      if (page.breadcrumbContainer !== null) throw new Error(`Invalid home breadcrumb layout for ${page.file}`);
      return renderHeroPage(page);
    case 'serviceHub': case 'service': case 'region': case 'directory':
    case 'contentHub': case 'about': case 'contact': case 'faq': case 'privacy':
      return renderHeroPage(page);
    default: throw new Error(`Invalid page kind for ${page.file}`);
  }
}

/** Pure rendering only: no root HTML reads, output writes, clocks or adapters. */
export function renderPage(page: PageData, site: SiteData): string {
  if (!page || !site || !Array.isArray(site.pages) || !site.pages.some(p => p.file === page.file)) {
    throw new Error('Invalid page: route is not registered in site data');
  }
  // A caller may pass an edited page clone. Validate the actual object being
  // rendered as part of the complete registry, rather than a stale site record.
  const differences = validateSiteData({ ...site, pages: site.pages.map(p => p.file === page.file ? page : p) });
  if (differences.length) {
    throw new Error(`Invalid site content: ${differences.map(d => `${d.file}:${d.field}`).join(', ')}`);
  }
  const layout = site.layouts[page.layoutId];
  const content = renderContent(page);
  const bindings: Record<string, string> = page.breadcrumbContainer === null ? {} : { breadcrumbs: renderBreadcrumbs(page) };
  const main = `<main${Object.entries(page.mainAttributes).map(([key, value]) => ` ${key}="${escapePlainText(value)}"`).join('')}>`
    + renderSlots(content, bindings, `page content for ${page.file}`) + '</main>';
  const scripts=[...layout.scripts];
  for(const src of ['booking-context.js','contact-prefill.js',...(hasEnquirySidebar(page)?['contact-form.js']:[])]){
    if(!scripts.some(s=>s.includes(`src="${src}"`)))scripts.push(`<script src="${src}"></script>` as import('../types.mjs').TrustedHtml);
  }
  const effectiveLayout={...layout,scripts};
  // The footer itself is unchanged; only the sibling mobile booking action
  // points directly to an existing form, with Contact as the no-form fallback.
  const footer=renderFooter(page,site).replace(/(<div class="mobile-ctas">[\s\S]*?<a href=")[^"]+(">Book a repair<\/a>)/,
    `$1${hasEnquirySidebar(page)||page.kind==='contact'?'#enquiry':'contact.html#enquiry'}$2`);
  return renderDocument(effectiveLayout, { head: renderHead(page, layout), navigation: renderNavigation(page, site),
    main, footer });
}
