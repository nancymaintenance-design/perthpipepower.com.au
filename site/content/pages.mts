import type { SiteData } from '../types.mjs';
import { layouts } from './layouts.mjs';
import { assets } from './assets.mjs';
import { artifacts } from './artifacts.mjs';
import { validatePublishedDates } from './identity.mjs';
import { materializeShared } from './shared.mjs';
import { canonicalPages } from './records.mjs';
import { materializePage } from './page-values.mjs';
export const expectedPageFiles: readonly string[] = [
  "about.html",
  "blocked-drains-perth.html",
  "burst-pipe-repair-perth.html",
  "ceiling-fans-perth.html",
  "contact.html",
  "dishwasher-installation-perth.html",
  "eastern-suburbs.html",
  "electrical.html",
  "emergency-electrician-perth.html",
  "emergency-plumber-perth.html",
  "exhaust-fans-perth.html",
  "faq.html",
  "fixtures-appliances-perth.html",
  "hot-water-problems-perth.html",
  "index.html",
  "insights-hot-water-plumbing-or-electrical.html",
  "insights-reporting-a-plumbing-leak.html",
  "insights-safety-switch-keeps-tripping.html",
  "insights-tenant-property-manager-maintenance-handover.html",
  "insights.html",
  "lighting-installation-perth.html",
  "lighting-power-points-perth.html",
  "news-clearer-property-maintenance-enquiry.html",
  "news-keeping-access-information-together.html",
  "news-useful-property-work-order.html",
  "news.html",
  "northern-suburbs.html",
  "perth-cbd-inner-suburbs.html",
  "perth-hills-swan-valley.html",
  "plumbing.html",
  "power-faults-perth.html",
  "power-points-perth.html",
  "privacy.html",
  "property-management.html",
  "rcd-testing-perth.html",
  "renewables-smart-home-perth.html",
  "safety-switch-tripping-perth.html",
  "service-areas.html",
  "shower-plumbing-repairs-perth.html",
  "smoke-alarm-maintenance-perth.html",
  "southern-suburbs.html",
  "switchboard-upgrades-perth.html",
  "tap-mixer-repairs-perth.html",
  "toilet-installation-perth.html",
  "toilet-repairs-perth.html",
  "water-leak-detection-perth.html",
  "water-pressure-perth.html",
  "western-suburbs.html"
];
export function loadSiteData(): SiteData {
  const site = {pages:canonicalPages.map(materializePage),layouts:materializeShared(layouts),assets:[...assets],artifacts:materializeShared(artifacts)};
  validatePublishedDates(site);
  return site;
}
