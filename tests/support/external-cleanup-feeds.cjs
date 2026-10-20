const assert=require('node:assert/strict'),{parseFragment}=require('parse5');
const fixture=require('../fixtures/external-links-cleanup-20261020.json');
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const plain=s=>text(parseFragment(s)).replace(/\s+/g,' ').trim();
const escape=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
const encoded=s=>escape(s.split('\n\n').map(p=>'<p>'+escape(p)+'</p>').join('\n'));
module.exports=function reviewedFeeds(feeds){
 const next={...feeds};
 for(const prefix of ['','zh/']){
  const j=JSON.parse(next[prefix+'feed.json']);let rss=next[prefix+'feed.xml'];
  for(const item of j.items){
   const original=item.content_text;
   for(const e of fixture.publicEdits.filter(e=>'https://perthpipepower.com.au/'+e.file===item.url)){
    const blocks=item.content_text.split('\n\n'),before=plain(e.before),after=plain(e.after),index=blocks.indexOf(before);
    assert(index>=0,item.url+': exact feed paragraph');blocks.splice(index,1,...(after?[after]:[]));item.content_text=blocks.join('\n\n');
   }
   if(original!==item.content_text){const old=encoded(original);assert(rss.includes(old),item.url+': exact RSS content');rss=rss.replace(old,encoded(item.content_text));}
  }
  next[prefix+'feed.json']=JSON.stringify(j,null,2)+'\n';next[prefix+'feed.xml']=rss;
 }
 return next;
};
