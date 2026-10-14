// Test utility: assert the destination, not a query-free spelling of the link.
function hasLocalLink(html,target){
 const base='https://perthpipepower.com.au/';
 const wanted=new URL(target,base);
 return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)].some(([,href])=>{
  try{const url=new URL(href.replace(/&amp;/g,'&'),base);return url.origin===wanted.origin&&url.pathname===wanted.pathname;}catch{return false;}
 });
}
module.exports={hasLocalLink};
