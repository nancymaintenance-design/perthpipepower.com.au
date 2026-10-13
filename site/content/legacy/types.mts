export interface IntentSection { id:string; heading:string; body:string[]; bullets:string[]; links:string[][]; topics?:string[] }
export interface IntentPage { primary:string; owners:string[]; intent:string; heading:string; body:string; links:string[][]; faq:string[][]; sections?:IntentSection[] }
export type IntentPages = Record<string,IntentPage>;
export type IntentMetadata = Record<string,{title?:string;h1?:string;description?:string}>;
export interface RegionGuide {route:string;name:string;title:string;description:string;intro:string;localFocus:string;plumbing:string[];electrical:string[];property:string[];quote:string[];services:string[][];faqs:string[][];seoTitle?:string}
