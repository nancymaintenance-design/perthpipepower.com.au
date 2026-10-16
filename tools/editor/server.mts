import {createServer,type IncomingMessage,type ServerResponse} from 'node:http';
import {readFile,realpath} from 'node:fs/promises';
import {resolve,join,extname,sep} from 'node:path';
import {randomBytes} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {loadSiteData} from '../../site/content/pages.mjs';
import {collectEditableFields,pageHash,fragments,textPositions} from '../../site/localization/fields.mjs';
import {applyLocaleOverlay,escapeText} from '../../site/localization/overlay.mjs';
import type {PageData,TrustedHtml} from '../../site/types.mjs';
import {renderPage} from '../../site/templates/page.mjs';
import {authorized,sameOrigin} from './security.mjs';
import {seedHomepage} from './seed.mjs';
import {readDraft,saveDraft,assertPageId,EditorError} from './store.mjs';

export async function startEditor(options:{host:'127.0.0.1';port:number;sourceRoot:string;draftRoot?:string}):Promise<{url:string;close():Promise<void>}>{
 if(options.host!=='127.0.0.1')throw new Error('Loopback only');
 const sourceRoot=resolve(options.sourceRoot),draftRoot=options.draftRoot??join(sourceRoot,'.local-editor','drafts'),site=loadSiteData(),token=randomBytes(32).toString('hex');
 let origin='';
 const json=(response:ServerResponse,status:number,value:unknown)=>{response.writeHead(status,{'content-type':'application/json; charset=utf-8'});response.end(JSON.stringify(value));};
 async function body(request:IncomingMessage):Promise<any>{let text='';for await(const chunk of request){text+=chunk;if(Buffer.byteLength(text)>1024*1024)throw new EditorError(413,'草稿过大');}try{return JSON.parse(text);}catch{throw new EditorError(400,'草稿格式无效');}}
 async function preview(page:PageData,chinese:boolean,editable:boolean):Promise<string>{
  const draft=chinese?await readDraft(draftRoot,page.file):null;
  const changes=draft?.changes??{};
  const edited=chinese?applyLocaleOverlay(page,site,{schemaVersion:1,locale:'zh-Hans',baseHash:draft?.baseHash??pageHash(page),values:changes}):page;
  let effective=edited;
  if(editable){
   effective=structuredClone(edited);const fields=collectEditableFields(page,site);
   for(const original of fragments(page)){
    // Translate and annotate from original offsets in one pass, preserving the source identity.
    let html=original.html;
    for(const node of textPositions(original.html).reverse()){
     const field=fields.find(f=>f.sourcePath===original.path+node.path);if(!field||field.locked)continue;
     const value=changes[field.id]??node.value;
     const wrapped=`<span data-editor-field="${escapeText(field.id)}" tabindex="0" role="button" aria-label="编辑：${escapeText(field.value.slice(0,60))}">${escapeText(value)}</span>`;
     html=html.slice(0,node.start)+wrapped+html.slice(node.end);
    }
    if(original.path==='hero')effective.hero=html as TrustedHtml;else{const section=effective.sections[Number(original.path.split(':')[1])];if(section.kind==='rich')section.html=html as TrustedHtml;}
   }
  }
  let html=renderPage(effective,site).replace(/<script\b(?![^>]*type=["']application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi,'');
  html=html.replace(/<head>/i,`<head><base href="${origin}/"><meta name="robots" content="noindex,nofollow">`);
  if(chinese)html=html.replace(/<html([^>]*)lang="[^"]*"/i,'<html$1lang="zh-Hans"');
  const bridge=`const editorOrigin=new URL(document.baseURI).origin;document.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation()},true);document.addEventListener('click',e=>{const n=e.target.closest('[data-editor-field]');if(n){e.preventDefault();e.stopImmediatePropagation();parent.postMessage({type:'editor-field',id:n.dataset.editorField},editorOrigin);return}if(e.target.closest('a,button,input,select,textarea')){e.preventDefault();e.stopImmediatePropagation()}},true);document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.isComposing&&e.target.matches('[data-editor-field]')){e.preventDefault();parent.postMessage({type:'editor-field',id:e.target.dataset.editorField},editorOrigin)}});`;
  if(chinese&&!editable)html=html.replace(/(<body\b[^>]*>)/i,'$1<div style="background:#fff4d6;color:#102b3a;padding:10px 20px;text-align:center" role="status">本地中文草稿 · 尚未完成全站翻译 · 未发布</div>');
  return html.replace('</head>','<style>[data-editor-field]{cursor:text}[data-editor-field]:hover,[data-editor-field]:focus-visible{outline:2px solid #075873;outline-offset:3px}</style></head>').replace('</body>',`<script>${bridge}</script></body>`);
 }
 const server=createServer(async(request,response)=>{
  response.setHeader('Cache-Control','no-store');response.setHeader('X-Content-Type-Options','nosniff');response.setHeader('Referrer-Policy','no-referrer');
  response.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src 'self' https://www.google.com https://maps.google.com; connect-src 'self'; form-action 'none'; object-src 'none'; frame-ancestors 'self'");
  try{
   if(!sameOrigin(request,origin))throw new EditorError(403,'仅允许本地同源访问');
   const url=new URL(request.url??'/',origin),pathname=decodeURIComponent(url.pathname);
   if(pathname.startsWith('/api/'))throw new EditorError(403,'本地预览不发送咨询或邮件');
   if(pathname==='/__editor/api/session'&&request.method==='GET')return json(response,200,{token});
   if(pathname.startsWith('/__editor/api/')){
    if(!authorized(request,origin,token,request.method!=='GET'))throw new EditorError(403,'本地会话无效，请刷新后台');
    if(pathname==='/__editor/api/pages'&&request.method==='GET')return json(response,200,site.pages.map(p=>({pageId:p.file,title:p.seo.title,kind:p.kind})));
    const match=pathname.match(/^\/__editor\/api\/(draft|preview)\/([^/]+)$/);if(!match)throw new EditorError(404,'页面不存在');
    const pageId=match[2];assertPageId(pageId);const page=site.pages.find(p=>p.file===pageId)!;
    if(match[1]==='preview'&&request.method==='GET'){response.setHeader('content-type','text/html; charset=utf-8');return response.end(await preview(page,true,true));}
    if(match[1]==='draft'&&request.method==='GET')return json(response,200,{pageId,baseHash:pageHash(page),fields:collectEditableFields(page,site),draft:await readDraft(draftRoot,pageId)});
    if(match[1]==='draft'&&request.method==='PUT'){
     const input=await body(request);if(!input||typeof input!=='object')throw new EditorError(400,'草稿格式无效');
     applyLocaleOverlay(page,site,{schemaVersion:1,locale:'zh-Hans',baseHash:input.baseHash,values:input.changes??{}});
     return json(response,200,await saveDraft(draftRoot,{pageId,expectedRevision:input.expectedRevision,baseHash:input.baseHash,changes:input.changes}));
    }throw new EditorError(405,'方法不可用');
   }
   if(request.method!=='GET'&&request.method!=='HEAD')throw new EditorError(403,'本地预览禁止提交');
   const staticUi:Record<string,string>={'/__editor/':'editor/ui/index.html','/__editor/editor.css':'editor/ui/editor.css','/__editor/client.js':'.build/editor/ui/client.js'};
   let file=staticUi[pathname];
   if(!file){
    const chinese=pathname.startsWith('/zh/'),name=(chinese?pathname.slice(4):pathname.slice(1))||'index.html';
    const page=site.pages.find(p=>p.file===name);
    if(page){response.setHeader('content-type','text/html; charset=utf-8');return response.end(await preview(page,chinese,false));}
    if(!site.assets.includes(name))throw new EditorError(404,'页面不存在');file=name;
   }
   const target=await realpath(join(sourceRoot,file));if(!target.startsWith(sourceRoot+sep))throw new EditorError(403,'路径不可访问');
   const mime:Record<string,string>={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2'};
   response.setHeader('content-type',mime[extname(target)]??'application/octet-stream');response.end(await readFile(target));
  }catch(error){json(response,error instanceof EditorError?error.status:400,{error:error instanceof EditorError?error.message:'无法读取或保存，请保留当前文字并重试'});}
 });
 let port=options.port;
 for(let attempt=0;;attempt++){
  try{await new Promise<void>((done,reject)=>{server.once('error',reject);server.listen(port,options.host,()=>{server.removeListener('error',reject);done();});});break;}
  catch(error){if((error as NodeJS.ErrnoException).code!=='EADDRINUSE'||attempt>=20)throw error;port++;}
 }
 const address=server.address();if(!address||typeof address==='string')throw new Error('No address');origin=`http://127.0.0.1:${address.port}`;
 return {url:origin+'/__editor/',close:()=>new Promise<void>((done,reject)=>server.close(error=>error?reject(error):done()))};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){await seedHomepage(process.cwd());const server=await startEditor({host:'127.0.0.1',port:4200,sourceRoot:process.cwd()});console.log('本地中文草稿编辑器 '+server.url);}
