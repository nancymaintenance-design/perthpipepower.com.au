import { parseFragment, type DefaultTreeAdapterTypes as T } from 'parse5';
import { canonicalPages } from './records.mjs';
import { resolveSharedText, sharedValue } from './shared.mjs';
import { resolvePageText } from './page-values.mjs';
export type ContentRef =
  | {readonly $source:'join';readonly parts:readonly ContentRef[];readonly separator:string}
  | {readonly $source:'shared';readonly key:string}
  | {readonly $source:'page';readonly file:string;readonly path:readonly (string|number)[]}
  | {readonly $source:'fragment';readonly file:string;readonly path:readonly (string|number)[];readonly node:readonly number[];readonly mode:'text'|'inner'|'outer'|'attribute';readonly attribute?:string;readonly trim?:boolean};
type Resolved<T> = T extends ContentRef ? string : T extends readonly unknown[] ? {[K in keyof T]:Resolved<T[K]>} : T extends object ? {[K in keyof T]:Resolved<T[K]>} : T;
function valueAt(file:string,path:readonly (string|number)[]):unknown {
  let value:unknown=canonicalPages.find(p=>p.file===file);if(!value)throw Error(`Canonical page missing: ${file}`);
  for(const key of path){if(value===null||typeof value!=='object'||!(key in value))throw Error(`Canonical field missing: ${file}:${path.join('.')}`);value=(value as Record<string|number,unknown>)[key];}return value;
}
export function readContent(ref:ContentRef):string {
  if(ref.$source==='join')return ref.parts.map(readContent).join(ref.separator);
  if(ref.$source==='shared')return sharedValue(ref.key);
  const source=valueAt(ref.file,ref.path);if(typeof source!=='string')throw Error(`Canonical text missing: ${ref.file}:${ref.path.join('.')}`);
  const page=canonicalPages.find(p=>p.file===ref.file)!;
  const raw=resolvePageText(page,source);if(ref.$source==='page')return raw;
  let node:T.Node=parseFragment(raw,{sourceCodeLocationInfo:true});
  for(const index of ref.node){if(!('childNodes' in node)||!node.childNodes[index])throw Error(`Canonical fragment structure changed: ${ref.file}:${ref.path.join('.')}; update its compatibility node reference`);node=node.childNodes[index];}
  const text=(n:T.Node):string=>n.nodeName==='#text'?(n as T.TextNode).value:'childNodes' in n?n.childNodes.map(text).join(''):'';
  let value:string;
  if(ref.mode==='text')value=text(node);
  else if(ref.mode==='attribute'){if(!('attrs' in node))throw Error('Canonical attribute node missing');const attr=node.attrs.find(a=>a.name===ref.attribute);if(!attr)throw Error('Canonical attribute missing');value=attr.value;}
  else {const location=node.sourceCodeLocation;if(!location)throw Error('Canonical fragment bounds missing');if(ref.mode==='inner'&&'tagName' in node){const l=node.sourceCodeLocation;if(!l?.startTag||!l.endTag)throw Error('Canonical inner bounds missing');value=raw.slice(l.startTag.endOffset,l.endTag.startOffset);}else value=raw.slice(location.startOffset,location.endOffset);}
  return ref.trim?value.trim():value;
}
/** Legacy-only values are retained for read compatibility; published values are references. */
export function compatibilityView<T extends object>(template:T):Resolved<T> {
  function resolve(value:unknown):unknown {
    if(value&&typeof value==='object'){
      if('$source' in value)return readContent(value as ContentRef);
      return new Proxy(value,{get(target,key,receiver){return resolve(Reflect.get(target,key,receiver));},set(){throw Error('Read-only compatibility content. Edit the canonical site/content/pages record or site/content/shared.mts.');},deleteProperty(){throw Error('Read-only compatibility content. Edit the canonical typed source.');},defineProperty(){throw Error('Read-only compatibility content. Edit the canonical typed source.');}});
    }
    return typeof value==='string'?resolveSharedText(value):value;
  }return resolve(template) as Resolved<T>;
}
