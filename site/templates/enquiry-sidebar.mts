import type { PageData } from '../types.mjs';
import { sharedValue } from '../content/shared.mjs';
import { escapePlainText as escape } from './document.mjs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
// Compiled templates live under .build/site/templates; the public UMD is the
// canonical allowlist consumed by both this renderer and the browser.
const booking=createRequire(import.meta.url)(fileURLToPath(new URL('../../../booking-context.js',import.meta.url))) as {
  serviceFromRoute(path:string):{route:string;type:string;label:string}|null;
};

export function hasEnquirySidebar(page:PageData):boolean {
  return ['service','serviceHub','region','about','article'].includes(page.kind);
}

/** Reuse the existing endpoint and field contract; no client-side content loading. */
export function renderEnquiryLayout(page:PageData,content:string):string {
  if(!hasEnquirySidebar(page))return content;
  const existing=content.match(/<form\b[^>]*data-enquiry-form[\s\S]*?<\/form>/)?.[0];
  const context=booking.serviceFromRoute(page.file);
  const topic=(context?.label??(page.kind==='article'?page.seo.title.split(' | ')[0]:page.breadcrumbs.at(-1)?.label??page.seo.title.split(' | ')[0])).replace(/\s+/g,' ').trim();
  const line=context?.type??'Not sure';
  const service=`${line} — ${topic}`;
  const form=(existing??`<form class="contact-card" data-enquiry-form novalidate>
<h2>Request a repair</h2>
<div class="honeypot" aria-hidden="true"><label for="sidebar-company">Company</label><input id="sidebar-company" name="company" tabindex="-1" autocomplete="off"></div>
<label for="sidebar-name">Name</label><input id="sidebar-name" name="name" autocomplete="name" required>
<label for="sidebar-phone">Phone</label><input id="sidebar-phone" name="phone" type="tel" autocomplete="tel" required>
<label for="sidebar-email">Email</label><input id="sidebar-email" name="email" type="email" autocomplete="email" required>
<label for="sidebar-address">Property address or suburb</label><input id="sidebar-address" name="address" autocomplete="street-address" required>
<label for="sidebar-type">Service</label><select id="sidebar-type" name="type"><option value="${escape(service)}" selected>${escape(line==='Not sure'?'Not sure':topic)}</option><option>Plumbing</option><option>Electrical</option><option>Not sure</option></select>
<label for="sidebar-message">Repair or installation details</label><textarea id="sidebar-message" name="message" rows="3" required></textarea>
<p class="form-note">By submitting, you agree to our <a href="privacy.html">Privacy Policy</a>.</p>
<p id="form-status" class="form-status" aria-live="polite"></p>
<button class="button" type="submit">Send enquiry</button>
</form>`).replace('<form ','<form id="enquiry" tabindex="-1" ');
  const call=`<a class="enquiry-sidebar__call" href="tel:${escape(sharedValue('business.localTelephone'))}">Call ${escape(sharedValue('business.displayTelephone'))}</a>`;
  return `<div class="enquiry-layout shell"><div class="enquiry-content">${existing?content.replace(existing,''):content}</div><aside class="enquiry-sidebar" aria-label="Contact our repair team"><div class="enquiry-sidebar__sticky">${call}${form}</div></aside></div>`;
}
