// Independent, reviewed old-to-new copy policy. Hero resources, structure,
// controls and all attributes outside the authorised text remain byte-exact.
const {translationPositions,translationKey}=require('../../.build/site/localization/inventory.mjs');
const {escapePlainText}=require('../../.build/site/templates/document.mjs');
exports.applyReviewedHomeHero=html=>{
 const edits=require('../fixtures/copy-cleanup-draft-sync-20261019.json').filter(e=>e.page==='index.html'&&e.id.includes(':hero/'));
 const copy=new Map(edits.map(e=>[translationKey(e.before),e.en]));
 for(const pos of translationPositions(html).reverse())if(copy.has(pos.key)){
  const raw=html.slice(pos.start,pos.end),value=escapePlainText(copy.get(pos.key));
  html=html.slice(0,pos.start)+(pos.attribute?value:(raw.match(/^\s*/)?.[0]??'')+value+(raw.match(/\s*$/)?.[0]??''))+html.slice(pos.end);
 }
 return html;
};
