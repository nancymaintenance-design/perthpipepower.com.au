const fs=require('node:fs'),path=require('node:path');
const {hours}=require('../data/expanded-services.cjs');
function applyConfirmedHours(root){
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html')&&f!=='privacy.html')){
  const target=path.join(root,file),old=fs.readFileSync(target,'utf8');
  let h=old.replace(/Ellis Services Group is available for Perth plumbing and\s+electrical enquiries every day from 00:00 to 23:59\./g,hours.text);
  h=h.replace(/<p class="shell" data-confirmed-hours>[\s\S]*?<\/p>/g,'');
  h=h.replace('</footer>',`<p class="shell" data-confirmed-hours>${hours.text}</p></footer>`);
  h=h.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/,(_,json)=>{
   const data=JSON.parse(json);for(const node of data['@graph'])if(node['@type']==='LocalBusiness')node.openingHoursSpecification={'@type':'OpeningHoursSpecification',dayOfWeek:hours.days,opens:hours.opens,closes:hours.closes};
   return '<script type="application/ld+json">\n'+JSON.stringify(data,null,2)+'\n</script>';
  });
  const next=h.replace(/\r\n/g,'\n').replace(/\n/g,'\r\n');if(old!==next)fs.writeFileSync(target,next);
 }
}
if(require.main===module)applyConfirmedHours(path.resolve(__dirname,'..'));
module.exports={applyConfirmedHours};
