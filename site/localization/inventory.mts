import {createHash} from 'node:crypto';
import {parse} from 'parse5';
export const normalizeText=(text:string):string=>text.replace(/\s+/g,' ').trim();
export const translationKey=(text:string):string=>createHash('sha256').update(normalizeText(text)).digest('hex').slice(0,20);
export interface TranslationPosition {key:string;source:string;start:number;end:number;attribute?:string}
const hidden=new Set(['script','style','noscript','svg','iframe']);
const translatedAttributes=new Set(['alt','aria-label','title','placeholder']);
const humanSchemaKeys=new Set(['name','description','headline','abstract','articleBody','text','caption','serviceType']);
export function schemaStrings(value:unknown,key=''):string[]{
 if(typeof value==='string')return humanSchemaKeys.has(key)&&/[A-Za-z]/.test(value)&&!/^https?:/.test(value)?[normalizeText(value)]:[];
 if(Array.isArray(value))return value.flatMap(v=>schemaStrings(v,key));
 if(value&&typeof value==='object')return Object.entries(value).flatMap(([k,v])=>schemaStrings(v,k));
 return [];
}
export function translationPositions(html:string):TranslationPosition[]{
 const doc:any=parse(html,{sourceCodeLocationInfo:true}),positions:TranslationPosition[]=[];
 function add(text:string,start:number,end:number,attribute?:string){
  const source=normalizeText(text);if(/[A-Za-z]/.test(source))positions.push({key:translationKey(source),source,start,end,attribute});
 }
 function walk(node:any){
  if(hidden.has(node.tagName))return;
  const loc=node.sourceCodeLocation;
  if(node.nodeName==='#text'&&loc)add(node.value,loc.startOffset,loc.endOffset);
  for(const attr of node.attrs??[]){
   const meta=node.tagName==='meta'&&attr.name==='content'&&(node.attrs.some((a:any)=>['description','og:title','og:description','twitter:title','twitter:description','og:site_name'].includes(a.value)));
   if(translatedAttributes.has(attr.name)||meta){const al=loc?.attrs?.[attr.name];if(al){const raw=html.slice(al.startOffset,al.endOffset),match=raw.match(/^[^=]+=(["'])([\s\S]*)\1$/);if(match)add(attr.value,al.startOffset+raw.indexOf(match[1])+1,al.endOffset-1,attr.name);}}
  }
  for(const child of node.childNodes??[])walk(child);
 }
 walk(doc);return positions;
}
