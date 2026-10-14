import type { FaqItem, TrustedHtml } from '../types.mjs';
import { assertNoReservedMarkers, escapePlainText, renderSlots } from './document.mjs';
import { serviceRelated } from '../content/service-related.mjs';

export function renderFaq(items: readonly FaqItem[], container: TrustedHtml, pageFile?:string): string {
  const bindings: Record<string, string> = {};
  for (const [index, item] of items.entries()) {
    bindings[`faq:${index}:question`] = escapePlainText(item.question);
    assertNoReservedMarkers(item.answer, 'FAQ answer');
    bindings[`faq:${index}:answer`] = item.answer;
  }
  // Some legacy section arrangements place their explicit breadcrumbs here.
  // The page compositor resolves that placement after rendering every section.
  let html=renderSlots(container, bindings, 'FAQ', ['breadcrumbs']);
  // These private compatibility entries were formerly painted as one-heading /
  // one-sentence walls. Their useful subjects already have full work/education
  // sections. Keep the compact actual FAQs; never republish the old wall.
  html=html.replace(/<div class="service-information">[\s\S]*?<\/div>/g,'');
  if(pageFile&&serviceRelated[pageFile]){
    const targets=serviceRelated[pageFile];
    html=html.replace(/<ul class="intent-links">([\s\S]*?)<\/ul>/g,(_all,body:string)=>{
      const links=[...body.matchAll(/<li>[\s\S]*?<\/li>/g)].map(m=>m[0]);
      const selected=links.filter(li=>targets.includes(li.match(/href="([^"]+)"/)?.[1]??''));
      return selected.length?`<ul class="intent-links service-related-links">${selected.join('')}</ul>`:'';
    });
  }
  // Retain the existing urgent-attendance facts once, without resurrecting an
  // oversized hours/safety statement wall (the shared footer owns full hours).
  if(pageFile==='plumbing.html'||pageFile==='electrical.html'){
    const original=items.map(i=>i.answer).join(' ').replace(/<[^>]+>/g,' ');
    const fee=original.match(/Emergency repair fees follow the quoted work plan\./)?.[0];
    const urgent=original.match(/For urgent work, call rather than relying on an online enquiry\./)?.[0];
    if(fee&&urgent)html=html.replace(/(<h2\b[^>]*>[\s\S]*?<\/h2>)/,`$1<p class="service-attendance-note">${fee} ${urgent}</p>`);
  }
  return html;
}
