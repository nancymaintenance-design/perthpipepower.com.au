export type PageKind = 'home' | 'serviceHub' | 'service' | 'region' | 'directory' | 'article' | 'contentHub' | 'about' | 'contact' | 'faq' | 'privacy';
export type TrustedHtml = string & { readonly __trustedHtml: unique symbol };
export interface FaqItem { question: string; answer: TrustedHtml }
export interface BreadcrumbItem { label: string; href: string | null }
export interface SeoData {
  title: string; description: string; canonical: string; robots: string | null;
  social: readonly { attribute: 'name' | 'property'; key: string; value: string }[];
  jsonLd: readonly unknown[];
  /** Formatting companion only: same count and parsed values as authoritative jsonLd. */
  jsonLdSource?: readonly string[];
}
export type HeadSlot = { kind: 'seo'; key: 'title' | 'description' | 'canonical' | 'robots' | 'social' | 'jsonLd' } | { kind: 'static'; html: TrustedHtml };
export interface LayoutData {
  documentOpen: TrustedHtml; bodyOpen: TrustedHtml; headSlots: readonly HeadSlot[];
  headerId: string; footerId: string; beforeMain: TrustedHtml; afterMain: TrustedHtml;
  scripts: readonly TrustedHtml[]; documentClose: TrustedHtml;
}
/** Tokens occupy text or quoted attribute values only; every binding must be escaped. */
export interface ChromeTemplate {
  html: TrustedHtml;
  slots: Readonly<Record<string, 'text' | 'attribute'>>;
}
export type ContentSection = { id: string; kind: 'rich'; html: TrustedHtml } | { id: string; kind: 'faq'; container: TrustedHtml; items: readonly FaqItem[] };
export interface PageData {
  file: string; kind: PageKind; seo: SeoData; layoutId: string;
  mainAttributes: Readonly<Record<string, string>>;
  hero: TrustedHtml | null; sections: readonly ContentSection[];
  breadcrumbs: readonly BreadcrumbItem[]; breadcrumbContainer: TrustedHtml | null;
  chromeBindings?: Readonly<Record<string, string>>;
}
export interface SiteData {
  pages: readonly PageData[]; layouts: Readonly<Record<string, LayoutData>>;
  assets: readonly string[]; artifacts: Readonly<Record<string, string>>;
}
