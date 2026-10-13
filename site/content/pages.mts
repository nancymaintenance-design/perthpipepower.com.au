import type { SiteData } from '../types.mjs';
import { layouts } from './layouts.mjs';
import { assets } from './assets.mjs';
import { artifacts } from './artifacts.mjs';
import { validateIdentityRecords } from './identity.mjs';
import { page as page0 } from './pages/about.mjs';
import { page as page1 } from './pages/blocked-drains-perth.mjs';
import { page as page2 } from './pages/burst-pipe-repair-perth.mjs';
import { page as page3 } from './pages/ceiling-fans-perth.mjs';
import { page as page4 } from './pages/contact.mjs';
import { page as page5 } from './pages/dishwasher-installation-perth.mjs';
import { page as page6 } from './pages/eastern-suburbs.mjs';
import { page as page7 } from './pages/electrical.mjs';
import { page as page8 } from './pages/emergency-electrician-perth.mjs';
import { page as page9 } from './pages/emergency-plumber-perth.mjs';
import { page as page10 } from './pages/exhaust-fans-perth.mjs';
import { page as page11 } from './pages/faq.mjs';
import { page as page12 } from './pages/fixtures-appliances-perth.mjs';
import { page as page13 } from './pages/hot-water-problems-perth.mjs';
import { page as page14 } from './pages/index.mjs';
import { page as page15 } from './pages/insights-hot-water-plumbing-or-electrical.mjs';
import { page as page16 } from './pages/insights-reporting-a-plumbing-leak.mjs';
import { page as page17 } from './pages/insights-safety-switch-keeps-tripping.mjs';
import { page as page18 } from './pages/insights-tenant-property-manager-maintenance-handover.mjs';
import { page as page19 } from './pages/insights.mjs';
import { page as page20 } from './pages/lighting-installation-perth.mjs';
import { page as page21 } from './pages/lighting-power-points-perth.mjs';
import { page as page22 } from './pages/news-clearer-property-maintenance-enquiry.mjs';
import { page as page23 } from './pages/news-keeping-access-information-together.mjs';
import { page as page24 } from './pages/news-useful-property-work-order.mjs';
import { page as page25 } from './pages/news.mjs';
import { page as page26 } from './pages/northern-suburbs.mjs';
import { page as page27 } from './pages/perth-cbd-inner-suburbs.mjs';
import { page as page28 } from './pages/perth-hills-swan-valley.mjs';
import { page as page29 } from './pages/plumbing.mjs';
import { page as page30 } from './pages/power-faults-perth.mjs';
import { page as page31 } from './pages/power-points-perth.mjs';
import { page as page32 } from './pages/privacy.mjs';
import { page as page33 } from './pages/property-management.mjs';
import { page as page34 } from './pages/rcd-testing-perth.mjs';
import { page as page35 } from './pages/renewables-smart-home-perth.mjs';
import { page as page36 } from './pages/safety-switch-tripping-perth.mjs';
import { page as page37 } from './pages/service-areas.mjs';
import { page as page38 } from './pages/shower-plumbing-repairs-perth.mjs';
import { page as page39 } from './pages/smoke-alarm-maintenance-perth.mjs';
import { page as page40 } from './pages/southern-suburbs.mjs';
import { page as page41 } from './pages/switchboard-upgrades-perth.mjs';
import { page as page42 } from './pages/tap-mixer-repairs-perth.mjs';
import { page as page43 } from './pages/toilet-installation-perth.mjs';
import { page as page44 } from './pages/toilet-repairs-perth.mjs';
import { page as page45 } from './pages/water-leak-detection-perth.mjs';
import { page as page46 } from './pages/water-pressure-perth.mjs';
import { page as page47 } from './pages/western-suburbs.mjs';
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
  validateIdentityRecords();
  return structuredClone({pages:[page0,page1,page2,page3,page4,page5,page6,page7,page8,page9,page10,page11,page12,page13,page14,page15,page16,page17,page18,page19,page20,page21,page22,page23,page24,page25,page26,page27,page28,page29,page30,page31,page32,page33,page34,page35,page36,page37,page38,page39,page40,page41,page42,page43,page44,page45,page46,page47],layouts,assets,artifacts});
}
