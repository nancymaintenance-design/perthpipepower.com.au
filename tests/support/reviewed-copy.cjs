// Apply only the explicit reviewed text changes to historical navigation expectations.
const fixture=require('../fixtures/customer-copy-20261021.json');
function reviewedCopy(value,file){
 const language=file.startsWith('zh/')?'chinese':'english',id=file.replace(/^zh\//,'');
 const entries=fixture[language].filter(e=>e.pages.includes(id)&&e.before!==e.after).sort((a,b)=>b.before.length-a.before.length);
 const values=new Map(entries.map(e=>[e.before,e.after]));
 const escape=s=>RegExp.escape(s);
 const pattern=entries.length?new RegExp(entries.map(e=>escape(e.before)).join('|'),'g'):null;
 function walk(v,key=''){if(typeof v==='string'){if(key==='abstract'&&fixture.abstractEdits?.[file]?.before===v)return fixture.abstractEdits[file].after;return pattern?v.replace(pattern,s=>values.get(s)):v;}if(Array.isArray(v)){if(key==='keywords'){const edit=(fixture.keywordEdits?.[file]??[]).find(e=>JSON.stringify(e.before)===JSON.stringify(v));if(edit)return edit.after;}return v.map(x=>walk(x,key));}if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,v])=>[k,walk(v,k)]));return v;}
 return walk(value);
}
module.exports={reviewedCopy};
