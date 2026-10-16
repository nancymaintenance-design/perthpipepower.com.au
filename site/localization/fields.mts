import {createHash} from 'node:crypto';
import {parseFragment, type DefaultTreeAdapterMap} from 'parse5';
import type {PageData,SiteData} from '../types.mjs';
import type {EditableField} from './types.mjs';
export const hash=(value:string):string=>createHash('sha256').update(value).digest('hex');
export const pageHash=(page:PageData):string=>hash(JSON.stringify(page));
type Node=DefaultTreeAdapterMap['node'];
export interface TextPosition {start:number;end:number;value:string;path:string}
const protectedText=/(?:\{\{ppp:|0413|\+?61413477667|@|\bABN\b|\bACN\b|\bAUD\b|\$\s*\d|St Georges|09:00|21:00|\b000\b|13 13 75|13 13 51)/i;
export function textPositions(html:string):TextPosition[]{
  const output:TextPosition[]=[];
  function visit(node:Node,path:string,blocked=false):void{
    const tag='tagName' in node?node.tagName:'';
    const excluded=blocked||['script','style','noscript','svg','iframe'].includes(tag);
    if(node.nodeName==='#text'&&!excluded&&'value' in node&&node.value.trim()&&node.sourceCodeLocation){
      const loc=node.sourceCodeLocation;output.push({start:loc.startOffset,end:loc.endOffset,value:node.value,path});
    }
    if('childNodes' in node)node.childNodes.forEach((child,index)=>visit(child,`${path}/${index}`,excluded));
  }
  visit(parseFragment(html,{sourceCodeLocationInfo:true}),'');return output;
}
export function fragments(page:PageData):{path:string;html:string}[]{
  return [...(page.hero===null?[]:[{path:'hero',html:page.hero}]),...page.sections.flatMap((section,index)=>section.kind==='rich'?[{path:`section:${index}`,html:section.html}]:[])];
}
export function collectEditableFields(page:PageData,_site:SiteData):readonly EditableField[]{
  const fields:EditableField[]=[];
  for(const fragment of fragments(page))for(const node of textPositions(fragment.html)){
    const sourcePath=fragment.path+node.path,sourceHash=hash(node.value);
    fields.push({id:`${page.file}:${sourcePath}:${sourceHash.slice(0,12)}`,pageId:page.file,kind:'text',sourcePath,sourceHash,value:node.value.trim(),locked:protectedText.test(node.value),shared:false});
  }
  for(const [key,kind] of [['title','seoTitle'],['description','seoDescription']] as const){
    const value=page.seo[key],sourceHash=hash(value);
    fields.push({id:`${page.file}:seo.${key}:${sourceHash.slice(0,12)}`,pageId:page.file,kind,sourcePath:`seo.${key}`,sourceHash,value,locked:false,shared:false});
  }
  return fields;
}
