import type {PageData,SiteData,TrustedHtml} from '../types.mjs';
import type {LocaleBundle} from './types.mjs';
import {collectEditableFields,fragments,pageHash,textPositions} from './fields.mjs';
export function escapeText(value:string):string{return value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
export function applyLocaleOverlay(page:PageData,site:SiteData,bundle:LocaleBundle):PageData{
  if(bundle.schemaVersion!==1||!['en-AU','zh-Hans'].includes(bundle.locale)||bundle.baseHash!==pageHash(page))throw new Error('Stale source baseline');
  const fields=collectEditableFields(page,site),byId=new Map(fields.map(f=>[f.id,f]));
  for(const [id,value] of Object.entries(bundle.values)){
    const field=byId.get(id);if(!field||field.locked)throw new Error('Protected or unknown field');
    if(typeof value!=='string'||value.length>20000||value.includes('{{ppp:'))throw new Error('Invalid text');
  }
  if(!Object.keys(bundle.values).length)return page;
  const result=structuredClone(page);
  for(const fragment of fragments(page)){
    let html=fragment.html;
    for(const node of textPositions(fragment.html).reverse()){
      const field=fields.find(f=>f.sourcePath===fragment.path+node.path);
      if(field&&Object.hasOwn(bundle.values,field.id))html=html.slice(0,node.start)+escapeText(bundle.values[field.id])+html.slice(node.end);
    }
    if(fragment.path==='hero')result.hero=html as TrustedHtml;
    else {const section=result.sections[Number(fragment.path.split(':')[1])];if(section.kind==='rich')section.html=html as TrustedHtml;}
  }
  for(const field of fields)if(Object.hasOwn(bundle.values,field.id)){
    if(field.kind==='seoTitle')result.seo.title=bundle.values[field.id];
    if(field.kind==='seoDescription')result.seo.description=bundle.values[field.id];
  }
  return result;
}
