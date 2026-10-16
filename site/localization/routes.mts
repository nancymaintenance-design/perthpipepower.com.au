import type {Locale} from './types.mjs';
export const siteOrigin='https://perthpipepower.com.au';
export function localizedPath(pageFile:string,locale:Locale):string{
 if(!/^[a-z0-9][a-z0-9-]*\.html$/.test(pageFile))throw new Error('Invalid locale page');
 return (locale==='zh-Hans'?'/zh/':'/')+(pageFile==='index.html'?'':pageFile);
}
export function localizeInternalHref(href:string,locale:Locale,knownFiles:readonly string[]):string{
 if(!href||href.startsWith('#')||/^(?:tel:|mailto:|javascript:|data:|\/\/)/i.test(href))return href;
 let url:URL;
 try{url=new URL(href,siteOrigin+'/');}catch{return href;}
 if(url.origin!==siteOrigin)return href;
 const file=url.pathname.replace(/^\/(?:zh\/)?/,'')||'index.html';
 if(!knownFiles.includes(file))return href;
 return localizedPath(file,locale)+url.search+url.hash;
}
