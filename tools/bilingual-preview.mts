/** Loopback-only read-only candidate preview. Never serves admin or sends enquiries. */
import {createServer} from 'node:http';
import {readFileSync} from 'node:fs';
import {resolve,extname} from 'node:path';
import {loadSiteData} from '../site/content/pages.mjs';
import {renderLocalizedPage} from '../site/localization/render.mjs';
import type {ApprovedLocaleBundle} from '../site/localization/approved.mjs';
import {projectRoot,publicPath} from '../site/build/copy-assets.mjs';
const site=loadSiteData();
const candidate=JSON.parse(readFileSync(resolve(projectRoot,'.superpowers/sdd/2026-10-16-bilingual-local-editor/translations/candidate.json'),'utf8')) as {bundles:ApprovedLocaleBundle[]};
const html=new Map<string,string>();
for(const page of site.pages){
 html.set('/'+(page.file==='index.html'?'':page.file),renderLocalizedPage(page,site,{locale:'en-AU',preview:true}));
 const bundle=candidate.bundles.find(b=>b.pageId===page.file);
 if(bundle)html.set('/zh/'+(page.file==='index.html'?'':page.file),renderLocalizedPage(page,site,{locale:'zh-Hans',bundle,preview:true}));
}
const mime:Record<string,string>={'.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2','.html':'text/html; charset=utf-8'};
const server=createServer((request,response)=>{
 response.setHeader('Cache-Control','no-store');response.setHeader('X-Content-Type-Options','nosniff');
 response.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com https://maps.google.com; connect-src 'none'; form-action 'none'; object-src 'none'");
 if(!/^127\.0\.0\.1:\d+$/.test(request.headers.host??'')){response.writeHead(403);return response.end('Loopback only');}
 if(!['GET','HEAD'].includes(request.method??'')){response.writeHead(403);return response.end('Read-only preview');}
 const pathname=new URL(request.url??'/','http://127.0.0.1').pathname;
 if(html.has(pathname)){response.setHeader('content-type','text/html; charset=utf-8');return response.end(html.get(pathname));}
 const file=pathname.slice(1);if(!site.assets.includes(file)){response.writeHead(404);return response.end('Not found');}
 response.setHeader('content-type',mime[extname(file)]??'application/octet-stream');return response.end(readFileSync(publicPath(projectRoot,file)));
});
server.listen(4210,'127.0.0.1',()=>console.log('Read-only bilingual candidate http://127.0.0.1:4210/'));
