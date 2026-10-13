/** Explicit, one-time migration only. Emits apply_patch patches; never used by load/build. */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { parse, parseFragment, type DefaultTreeAdapterTypes as T } from 'parse5';
import type { BaselineManifest } from '../site/baseline.mjs';
import type { PageData, LayoutData, TrustedHtml, HeadSlot, ChromeTemplate, ContentSection, BreadcrumbItem, PageKind } from '../site/types.mjs';
type Node = T.Node;
type Element = T.Element;
const source = process.cwd();
const evidence = resolve(source, '../reports/typescript-migration-2026-10-13/baseline/public-evidence');
const baseline = JSON.parse(readFileSync(resolve(source, 'tests/fixtures/ts-migration/baseline.json'), 'utf8')) as BaselineManifest;
const html = (value: string): TrustedHtml => value as TrustedHtml;
const kids = (n: Node): Node[] => 'childNodes' in n ? n.childNodes : [];
const element = (n: Node): n is Element => 'tagName' in n;
const walk = (n: Node): Element[] => [...(element(n) ? [n] : []), ...kids(n).flatMap(walk)];
const attr = (n: Element, name: string): string | null => n.attrs.find(a => a.name === name)?.value ?? null;
const text = (n: Node): string => n.nodeName === '#text' ? (n as T.TextNode).value : kids(n).map(text).join('');
const loc = (n: Node) => { if (!n.sourceCodeLocation) throw new Error(`No source location: ${n.nodeName}`); return n.sourceCodeLocation; };
const eloc = (n: Element) => { const l = n.sourceCodeLocation; if (!l?.startTag || !l.endTag) throw new Error(`No element bounds: ${n.tagName}`); return l as typeof l & { startTag: NonNullable<typeof l.startTag>; endTag: NonNullable<typeof l.endTag> }; };
const esc = (v: string): string => v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const token = (name: string): string => `{{ppp:${name}}}`;
const digest = (v: unknown): string => createHash('sha256').update(JSON.stringify(v)).digest('hex').slice(0,12);
const modules: Record<string,string> = {};
const layouts: Record<string,LayoutData> = {};
const pages: PageData[] = [];
const rawChrome: {page: PageData; header: string; footer: string}[] = [];
function kind(file: string): PageKind {
  if(file==='index.html') return 'home'; if(file==='service-areas.html') return 'directory';
  if(file==='plumbing.html'||file==='electrical.html') return 'serviceHub';
  if(['news.html','insights.html'].includes(file)) return 'contentHub';
  if(/^(news|insights)-/.test(file)) return 'article';
  if(/^(eastern|western|northern|southern)-suburbs|^perth-(cbd|hills)/.test(file)) return 'region';
  for(const name of ['about','contact','faq','privacy'] as const) if(file===`${name}.html`) return name;
  return 'service';
}
function edits(raw: string, start: number, replacements: {start:number;end:number;value:string}[]): string {
  for(const r of replacements.sort((a,b)=>b.start-a.start)) raw=raw.slice(0,r.start-start)+r.value+raw.slice(r.end-start);
  return raw;
}
for (const file of Object.keys(baseline.pages).sort()) {
  const raw=readFileSync(resolve(evidence,file),'utf8').replace(/\r\n?/g,'\n');
  const document=parse(raw,{sourceCodeLocationInfo:true}); const all=walk(document);
  const get=(tag:string)=>{const n=all.find(n=>n.tagName===tag);if(!n)throw Error(`${file}: missing ${tag}`);return n;};
  const head=get('head'), body=get('body'), main=get('main'), header=get('header'), footer=get('footer');
  const hl=eloc(head), bl=eloc(body), ml=eloc(main), fl=eloc(footer);
  const seo: PageData['seo']={title:'',description:'',canonical:'',robots:null,social:[],jsonLd:[],jsonLdSource:[]};
  const social: {attribute:'name'|'property';key:string;value:string}[]=[]; const jsonLd: unknown[]=[]; const jsonLdSource:string[]=[];
  const headSlots: HeadSlot[]=[]; let cursor=hl.startTag.endOffset;
  for(const n of kids(head).filter(element)) {
    const l=loc(n); let key: Extract<HeadSlot,{kind:'seo'}>['key']|undefined;
    if(n.tagName==='title') {key='title';seo.title=text(n);}
    else if(n.tagName==='meta'&&attr(n,'name')==='description'){key='description';seo.description=attr(n,'content')??'';}
    else if(n.tagName==='meta'&&attr(n,'name')==='robots'){key='robots';seo.robots=attr(n,'content');}
    else if(n.tagName==='link'&&attr(n,'rel')==='canonical'){key='canonical';seo.canonical=attr(n,'href')??'';}
    else if(n.tagName==='meta'&&/^(og:|twitter:)/.test(attr(n,'property')??attr(n,'name')??'')){
      key='social';social.push({attribute:attr(n,'property')!==null?'property':'name',key:attr(n,'property')??attr(n,'name')??'',value:attr(n,'content')??''});
    } else if(n.tagName==='script'&&attr(n,'type')==='application/ld+json'){key='jsonLd';jsonLd.push(JSON.parse(text(n)) as unknown);jsonLdSource.push(text(n));}
    if(key){ if(l.startOffset>cursor)headSlots.push({kind:'static',html:html(raw.slice(cursor,l.startOffset))});headSlots.push({kind:'seo',key});cursor=l.endOffset; }
  }
  if(cursor<hl.endTag.startOffset)headSlots.push({kind:'static',html:html(raw.slice(cursor,hl.endTag.startOffset))});
  seo.social=social;seo.jsonLd=jsonLd;seo.jsonLdSource=jsonLdSource;
  const crumb=all.find(n=>attr(n,'class')?.split(' ').includes('breadcrumbs'));
  const breadcrumbs: BreadcrumbItem[]=[]; let breadcrumbContainer: TrustedHtml|null=null;
  if(crumb){
    const cl=eloc(crumb);const replacements:{start:number;end:number;value:string}[]=[];
    for(const n of kids(crumb)) {
      if(element(n)&&n.tagName==='a'){
        const i=breadcrumbs.length;breadcrumbs.push({label:text(n),href:attr(n,'href')});
        const nl=eloc(n);replacements.push({start:nl.startTag.endOffset,end:nl.endTag.startOffset,value:token(`breadcrumb:${i}:label`)});
        const al=nl.attrs?.href;if(!al)throw Error('breadcrumb href location');
        replacements.push({start:al.startOffset,end:al.endOffset,value:`href="${token(`breadcrumb:${i}:href`)}"`});
      } else if(n.nodeName==='#text'&&text(n).trim()){
        const value=text(n);const match=value.match(/^(\s*(?:\/|›|»|→)?\s*)([\s\S]*?)(\s*)$/)!;
        if(match[2]){const i=breadcrumbs.length;breadcrumbs.push({label:match[2],href:null});replacements.push({start:loc(n).startOffset,end:loc(n).endOffset,value:esc(match[1])+token(`breadcrumb:${i}:label`)+esc(match[3])});}
      } else if(element(n)&&n.tagName==='span'&&attr(n,'aria-current')){
        const i=breadcrumbs.length;breadcrumbs.push({label:text(n),href:null});const nl=eloc(n);replacements.push({start:nl.startTag.endOffset,end:nl.endTag.startOffset,value:token(`breadcrumb:${i}:label`)});
      }
    }
    breadcrumbContainer=html(edits(raw.slice(cl.startOffset,cl.endOffset),cl.startOffset,replacements));
  }
  const sections:ContentSection[]=[];let hero:TrustedHtml|null=null;let innerCursor=ml.startTag.endOffset;
  for(const [index,n] of kids(main).filter(element).entries()) {
    const nl=loc(n);const end=nl.endOffset;const slice=raw.slice(innerCursor,end);const replacements:{start:number;end:number;value:string}[]=[];
    if(crumb&&loc(crumb).startOffset>=innerCursor&&loc(crumb).endOffset<=end)replacements.push({start:loc(crumb).startOffset,end:loc(crumb).endOffset,value:token('breadcrumbs')});
    const details=walk(n).filter(e=>e.tagName==='details'); const items: {question:string;answer:TrustedHtml}[]=[];
    for(const [i,detail]of details.entries()){
      const summary=kids(detail).find(e=>element(e)&&e.tagName==='summary') as Element|undefined;if(!summary)throw Error('FAQ missing summary');
      const sl=eloc(summary),dl=eloc(detail);items.push({question:text(summary),answer:html(raw.slice(sl.endOffset,dl.endTag.startOffset))});
      replacements.push({start:sl.startTag.endOffset,end:sl.endTag.startOffset,value:token(`faq:${i}:question`)},{start:sl.endOffset,end:dl.endTag.startOffset,value:token(`faq:${i}:answer`)});
    }
    const content=html(edits(slice,innerCursor,replacements));innerCursor=end;
    if(index===0&&n.tagName==='section'&&/hero/.test(attr(n,'class')??'')){hero=content;}
    else sections.push(details.length?{id:attr(n,'id')??`section-${index}`,kind:'faq',container:content,items}:{id:attr(n,'id')??`section-${index}`,kind:'rich',html:content});
  }
  if(innerCursor<ml.endTag.startOffset)sections.push({id:'main-trailing-space',kind:'rich',html:html(raw.slice(innerCursor,ml.endTag.startOffset))});
  const tailScripts=kids(body).filter(element).filter(n=>n.tagName==='script'&&loc(n).startOffset>fl.endOffset);
  let scriptCursor=tailScripts[0]?loc(tailScripts[0]).startOffset:bl.endTag.startOffset;
  const footerEnd=scriptCursor;
  const scripts:TrustedHtml[]=[];
  for(const n of tailScripts){scripts.push(html(raw.slice(scriptCursor,loc(n).endOffset)));scriptCursor=loc(n).endOffset;}
  const layout:LayoutData={documentOpen:html(raw.slice(0,hl.startTag.endOffset)),bodyOpen:html(raw.slice(hl.endTag.startOffset,bl.startTag.endOffset)),headSlots,headerId:'pending',footerId:'pending',beforeMain:html(''),afterMain:html(raw.slice(ml.endOffset,fl.startOffset)),scripts,documentClose:html(raw.slice(scriptCursor))};
  const page:PageData={file,kind:kind(file),seo,layoutId:'pending',mainAttributes:Object.fromEntries(main.attrs.map(a=>[a.name,a.value])),hero,sections,breadcrumbs,breadcrumbContainer,chromeBindings:{}};
  // Header includes skip/utility bars; footer includes its existing mobile actions and gaps.
  rawChrome.push({page,header:raw.slice(bl.startTag.endOffset,ml.startOffset),footer:raw.slice(fl.startOffset,footerEnd)});
  layouts[file]=layout;pages.push(page);
}

const voidTags=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const headers:Record<string,ChromeTemplate>={},footers:Record<string,ChromeTemplate>={};
// Empty text gaps unify serialization-only variants without changing rendered whitespace.
function padText(n:Node):void {
  if(!('childNodes' in n))return;
  const output:Node[]=[];
  const gap=():T.TextNode=>({nodeName:'#text',value:'',parentNode:n as T.ParentNode});
  for(const child of n.childNodes){
    if(child.nodeName!=='#text'&&(output.length===0||output.at(-1)?.nodeName!=='#text'))output.push(gap());
    padText(child);output.push(child);
  }
  if(output.length===0||output.at(-1)?.nodeName!=='#text')output.push(gap());
  n.childNodes=output as T.ChildNode[];
}
function shape(n:Node):unknown {return element(n)?[n.tagName,n.attrs.map(a=>a.name).sort(),kids(n).map(shape)]:[n.nodeName,...(n.nodeName==='#comment'?[(n as T.CommentNode).data]:[])];}
for(const type of ['header','footer'] as const){
  const groups=new Map<string,{page:PageData;node:T.DocumentFragment}[]>();
  for(const entry of rawChrome){const node=parseFragment(entry[type]);padText(node);const key=digest(kids(node).map(shape));const group=groups.get(key)??[];group.push({page:entry.page,node});groups.set(key,group);}
  for(const [key,group]of groups){
    const id=`${type}-${key}`,slots:Record<string,'text'|'attribute'>={};let counter=0;
    function value(values:string[],kind:'text'|'attribute'):string {
      if(values.every(v=>v===values[0]))return esc(values[0]);
      const name=`chrome:${id}:${counter++}`;slots[name]=kind;
      group.forEach((entry,i)=>(entry.page.chromeBindings as Record<string,string>)[name]=values[i]);return token(name);
    }
    function render(nodes:Node[]):string {
      const n=nodes[0];
      if(element(n)){
        let out=`<${n.tagName}`;
        for(const a of [...n.attrs].sort((a,b)=>a.name.localeCompare(b.name)))out+=` ${a.name}="${value(nodes.map(v=>attr(v as Element,a.name)??''),'attribute')}"`;
        out+='>';out+=kids(n).map((_,i)=>render(nodes.map(v=>kids(v)[i]))).join('');return out+(voidTags.has(n.tagName)?'':`</${n.tagName}>`);
      }
      if(n.nodeName==='#text')return value(nodes.map(text),'text');
      if(n.nodeName==='#comment')return `<!--${(n as T.CommentNode).data}-->`;
      throw Error(`Unsupported chrome node ${n.nodeName}`);
    }
    const template={html:html(kids(group[0].node).map((_,i)=>render(group.map(g=>kids(g.node)[i]))).join('')),slots};
    (type==='header'?headers:footers)[id]=template;
    group.forEach(entry=>layouts[entry.page.file][type==='header'?'headerId':'footerId']=id);
  }
}
const sharedLayouts:Record<string,LayoutData>={};
for(const page of pages){const layout=layouts[page.file];const id=`layout-${digest(layout)}`;page.layoutId=id;sharedLayouts[id]=layout;}
function literal(value:unknown):string {return JSON.stringify(value,null,2);}
function trustedLiteral(value:unknown):string {
  const trusted=new Set(['html','container','answer','hero','breadcrumbContainer','documentOpen','bodyOpen','beforeMain','afterMain','documentClose']);
  function encode(v:unknown,key=''):string {
    if(typeof v==='string')return `${JSON.stringify(v)}${trusted.has(key)||key==='script'?' as TrustedHtml':''}`;
    if(Array.isArray(v))return `[\n${v.map(item=>encode(item,key==='scripts'?'script':'')).join(',\n')}\n]`;
    if(v&&typeof v==='object')return `{\n${Object.entries(v).map(([k,item])=>`${JSON.stringify(k)}: ${encode(item,k)}`).join(',\n')}\n}`;
    return JSON.stringify(v);
  }return encode(value);
}
for(const page of pages)modules[`site/content/pages/${page.file.replace('.html','.mts')}`]=`import type { PageData, TrustedHtml } from '../../types.mjs';\n// Candidate content extracted once; edit this typed record for future content changes.\nexport const page: PageData = ${trustedLiteral(page)};\n`;
modules['site/content/layouts.mts']=`import type { LayoutData, ChromeTemplate, TrustedHtml } from '../types.mjs';\nexport const layouts: Readonly<Record<string, LayoutData>> = ${trustedLiteral(sharedLayouts)};\nexport const headers: Readonly<Record<string, ChromeTemplate>> = ${trustedLiteral(headers)};\nexport const footers: Readonly<Record<string, ChromeTemplate>> = ${trustedLiteral(footers)};\n`;
modules['site/content/assets.mts']=`// Frozen public asset allowlist; nested HTML here is existing redirect evidence only.\nexport const assets: readonly string[] = ${literal(Object.keys(baseline.assets).sort())};\n`;
modules['site/content/artifacts.mts']=`export const artifacts: Readonly<Record<string,string>> = ${literal(baseline.artifacts)};\n`;
modules['site/content/pages.mts']=`import type { SiteData } from '../types.mjs';\nimport { layouts } from './layouts.mjs';\nimport { assets } from './assets.mjs';\nimport { artifacts } from './artifacts.mjs';\nimport { validateIdentityRecords } from './identity.mjs';\n${pages.map((p,i)=>`import { page as page${i} } from './pages/${p.file.replace('.html','.mjs')}';`).join('\n')}\nexport const expectedPageFiles: readonly string[] = ${literal(pages.map(p=>p.file))};\nexport function loadSiteData(): SiteData {\n  validateIdentityRecords();\n  return structuredClone({pages:[${pages.map((_,i)=>`page${i}`).join(',')}],layouts,assets,artifacts});\n}\n`;
// Mechanical CommonJS -> ESM conversion keeps the existing composition functions.
for(const name of ['business-entity','confirmed-content-expansion','editorial-summaries','expanded-services','keyword-gap-content','region-guides','region-service-content','seo-guide-expansions','seo-service-metadata','service-answers','service-commercial-copy','service-presentation','site-content-intent']){
  let code=readFileSync(resolve(source,`data/${name}.${name==='region-guides'?'js':'cjs'}`),'utf8').replace(/\r\n?/g,'\n');
  const imports:string[]=[];
  code=code.replace(/require\('\.\/(expanded-services|region-guides|region-service-content|keyword-gap-content|confirmed-content-expansion)(?:\.cjs)?'\)/g,(_all:string,dependency:string)=>{
    const id=dependency.replace(/-([a-z])/g,(_s:string,c:string)=>c.toUpperCase());
    const line=`import ${id} from './${dependency}.mjs';`;if(!imports.includes(line))imports.push(line);return id;
  });
  code=code.replace(/module\.exports\s*=\s*/, 'const legacy = ');
  if(name==='expanded-services')code=code.replace('service=(file,primary,title,parent,intro,scenes,scope,education,related)', 'service=(file:string,primary:string,title:string,parent:string,intro:string,scenes:string[][],scope:string[],education:string[][],related:string[][])');
  if(name==='site-content-intent'){
    imports.push("import type { IntentPage, IntentPages, IntentMetadata } from './types.mjs';");
    code=code.replace('p=(primary,owners,intent,heading,body,links,faq)', 'p=(primary:string,owners:string[],intent:string,heading:string,body:string,links:string[][],faq:string[][]):IntentPage');
    code=code.replace('const pages=', 'const pages:IntentPages=').replace('const safety=', 'const safety:Record<string,string>=').replace('const metadata=', 'const metadata:IntentMetadata=');
  }
  if(name==='keyword-gap-content'){
    imports.push("import type { IntentPages, IntentMetadata, IntentSection } from './types.mjs';");
    code=code.replace('section=(id,heading,body,bullets=[],links=[])', 'section=(id:string,heading:string,body:string[],bullets:string[]=[],links:string[][]=[]):IntentSection');
    code=code.replace('applyKeywordGapContent(pages,metadata)', 'applyKeywordGapContent(pages:IntentPages,metadata:IntentMetadata)');
  }
  if(name==='confirmed-content-expansion'){
    imports.push("import type { IntentPage, IntentPages, IntentMetadata } from './types.mjs';");
    code=code.replace('addLink=(p,href,label)', 'addLink=(p:IntentPage,href:string,label:string)').replace('applyConfirmedExpansion(pages,metadata)', 'applyConfirmedExpansion(pages:IntentPages,metadata:IntentMetadata)').replace('replaceFaq=(file,pattern,answer)', 'replaceFaq=(file:string,pattern:RegExp,answer:string)');
    for(const [key,type]of Object.entries({education:'string[][]',shortAnswers:'string[]',guidance:'string[]',educationTopics:'string[]'}))code=code.replace(`const ${key}=`,`const ${key}:Record<string,${type}>=`);
    code=code.replace(/\.sections(?=\.(?:push|filter))/g,'.sections!');
  }
  if(name==='region-guides'){
    imports.push("import type { RegionGuide } from './types.mjs';");
    code=code.replace('const regionGuides =', 'const regionGuides:RegionGuide[] =').replace('const shortTitles=', 'const shortTitles:Record<string,string>=');
    code=code.replace('serviceContent[guide.route]', 'serviceContent[guide.route as keyof typeof serviceContent]');
  }
  modules[`site/content/legacy/${name}.mts`]=`${imports.join('\n')}\n${code.trim()}\nexport default legacy;\n`;
}
if(process.argv[2]==='--list')process.stdout.write(JSON.stringify(Object.keys(modules)));
else if(process.argv[2]==='--stats')process.stdout.write(JSON.stringify({pages:pages.length,layouts:Object.keys(sharedLayouts).length,headers:Object.keys(headers).length,footers:Object.keys(footers).length,slots:Object.values(headers).concat(Object.values(footers)).map(t=>Object.keys(t.slots).length)}));
else if(process.argv[2]==='--emit-patch'&&modules[process.argv[3]]){
  if(existsSync(resolve(source,process.argv[3])))throw Error('Initial import is complete. Refusing to replace canonical content or compatibility views; edit the typed sources directly.');
  const file=process.argv[3];process.stdout.write(`*** Begin Patch\n*** Add File: ${resolve(source,file).replace(/\\/g,'/')}\n${modules[file].split('\n').filter((line,i,lines)=>i<lines.length-1||line).map(line=>'+'+line).join('\n')}\n*** End Patch`);
}else throw Error('Use --list, --stats, or --emit-patch <exact target>');
