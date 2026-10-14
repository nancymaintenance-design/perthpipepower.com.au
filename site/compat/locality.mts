import * as fs from 'node:fs';
import * as path from 'node:path';
import {projectRoot,assertNoLinks} from '../build/copy-assets.mjs';
import {fixtureRoot} from '../compat.mjs';
interface Service {href:string;title:string;copy:string}
interface Priority {title:string;description:string;h1:string;intro:string;quote:string;services:Service[];process:string[];faqs:{q:string;a:string}[]}
export interface Locality {name:string;slug:string;region:string;regionHub:string;caseStatus:string;nearby:string[];priority?:Priority}

const ROOT = projectRoot;
const REGIONS = [
  { name: "CBD & Inner Perth", hub: "perth-cbd-inner-suburbs.html" },
  { name: "Northern Suburbs", hub: "northern-suburbs.html" },
  { name: "Southern Suburbs", hub: "southern-suburbs.html" },
  { name: "Eastern Suburbs", hub: "eastern-suburbs.html" },
  { name: "Western Suburbs", hub: "western-suburbs.html" },
  { name: "Perth Hills & Swan Valley", hub: "perth-hills-swan-valley.html" },
];
const GA_TRACKING_ID = "G-HZ6PKHKGWH";
const VALID_REGIONS = new Set(REGIONS.map(({ name }) => name));
const VALID_CASE_STATUSES = new Set(["pending", "ready"]);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const serviceHrefPattern = /^\.\.\/[a-z0-9]+(?:-[a-z0-9]+)*\.html$/;
const escapeHtml = (value: string) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      } as Record<string,string>)[character],
  );

function renderTrackingHead(title:string, description:string, canonicalUrl:string) {
  return `<meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonicalUrl}"><meta property="og:type" content="website"><meta name="twitter:card" content="summary"><script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}');</script>`;
}

export function addGeneratedPageMetadata(html:string) {
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)">/i)?.[1];
  const canonicalUrl = html.match(/<link rel="canonical" href="([^"]+)">/i)?.[1];
  if (!title || !description || !canonicalUrl)
    throw new Error("Generated locality page is missing title, description or canonical URL");
  return html.replace(
    "</head>",
    `${renderTrackingHead(title, description, canonicalUrl)}</head>`,
  );
}

function assertPriorityRecord(priority:Priority, slug:string) {
  if (!priority || typeof priority !== "object")
    throw new Error(`Priority locality requires a record: ${slug}`);
  for (const field of ["title", "description", "h1", "intro", "quote"] as const)
    if (typeof priority[field] !== "string" || !priority[field].trim())
      throw new Error(`Priority locality requires ${field}: ${slug}`);
  if (!Array.isArray(priority.services) || priority.services.length < 2)
    throw new Error(`Priority locality requires at least two services: ${slug}`);
  for (const service of priority.services)
    if (
      !service ||
      !serviceHrefPattern.test(service.href || "") ||
      !service.title ||
      !service.copy
    )
      throw new Error(`Priority locality has an invalid service link: ${slug}`);
  if (!Array.isArray(priority.process) || priority.process.length < 3)
    throw new Error(`Priority locality requires a three-step process: ${slug}`);
  if (!Array.isArray(priority.faqs) || priority.faqs.length < 2)
    throw new Error(`Priority locality requires at least two FAQs: ${slug}`);
  for (const faq of priority.faqs)
    if (!faq || !faq.q || !faq.a)
      throw new Error(`Priority locality has an invalid FAQ: ${slug}`);
}

export function loadLocalities(
  datasetPath = path.join(ROOT, "data", "perth-suburbs.json"),
) {
  const localities = JSON.parse(fs.readFileSync(datasetPath, "utf8")) as Locality[];
  if (!Array.isArray(localities) || localities.length === 0)
    throw new Error(
      "Perth locality dataset must contain at least one locality.",
    );
  const slugs = new Set();
  for (const locality of localities) {
    if (!locality || typeof locality !== "object")
      throw new Error("Each locality must be an object.");
    if (!locality.name || !slugPattern.test(locality.slug || ""))
      throw new Error("Each locality requires a URL-safe name and slug.");
    if (slugs.has(locality.slug))
      throw new Error(`Duplicate locality slug: ${locality.slug}`);
    if (!VALID_REGIONS.has(locality.region))
      throw new Error(`Unknown locality region: ${locality.region}`);
    if (!VALID_CASE_STATUSES.has(locality.caseStatus))
      throw new Error(`Unknown case status: ${locality.caseStatus}`);
    if (locality.priority) assertPriorityRecord(locality.priority, locality.slug);
    if (!Array.isArray(locality.nearby) || locality.nearby.length < 2)
      throw new Error(`Locality requires two nearby areas: ${locality.slug}`);
    slugs.add(locality.slug);
  }
  const knownSlugs = new Set(localities.map(({ slug }) => slug));
  for (const locality of localities) {
    for (const nearbySlug of locality.nearby)
      if (!knownSlugs.has(nearbySlug))
        throw new Error(`Unknown nearby locality: ${nearbySlug}`);
  }
  return localities
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "en-AU"));
}

export function buildDirectoryData(localities:readonly Locality[]) {
  return {
    regions: REGIONS.map((region) => {
      const regionalLocalities = localities.filter(
        (locality) => locality.region === region.name,
      );
      return {
        ...region,
        localities: regionalLocalities,
        featuredLocalities: regionalLocalities.filter(({ priority }) => priority),
      };
    }),
    localities,
  };
}

export function renderLocalityPage(locality:Locality, _allLocalities:readonly Locality[] = []) {
  {
    const contactPath = `../contact.html?suburb=${encodeURIComponent(locality.name)}#enquiry`;
    const name = escapeHtml(locality.name);
    return `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Contact Ellis Services Group for ${name}</title><meta name="description" content="Contact Ellis Services Group for plumbing and electrical repairs in ${name}, Perth."><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=${contactPath}"><link rel="canonical" href="https://perthpipepower.com.au/contact.html"><script>window.location.replace(${JSON.stringify(contactPath)});</script></head><body><p>Taking you to the <a href="${contactPath}">Ellis Services Group enquiry form for ${name}</a>.</p></body></html>\n`;
  }
}
export function updateSitemap(_localities:readonly Locality[], sitemapPath:string) {
  fixtureRoot(path.dirname(sitemapPath));
  assertNoLinks(sitemapPath);
  const existing = fs.readFileSync(sitemapPath, "utf8");
  const withoutGeneratedPages = existing.replace(
    /\s*<url><loc>https:\/\/perthpipepower\.com\.au\/service-areas\/[^<]+<\/loc><\/url>/g,
    "",
  );
  fs.writeFileSync(
    sitemapPath,
    withoutGeneratedPages.replace(
      /\s*<\/urlset>\s*$/,
      "\n</urlset>",
    ),
  );
}
