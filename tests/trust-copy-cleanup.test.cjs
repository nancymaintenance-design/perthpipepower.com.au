const {resolvePublicRoot}=require('./support/public-paths.cjs');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),{test}=require('node:test');
const root=resolvePublicRoot(),read=f=>fs.readFileSync(path.join(root,f),'utf8');
test('About presents company facts without registration-location or licence-doubt narratives',()=>{
 const html=read('about.html');
 for(const phrase of ['VIC 3030','does not verify this office address','Does an ABN record confirm','Why does ABN Lookup show VIC','Company registration and trade documentation'])assert(!html.includes(phrase),phrase);
 for(const phrase of ['ELLIS SERVICES GROUP PTY LTD','96 645 821 745','140 St Georges Terrace, Perth WA 6000','https://abr.business.gov.au/ABN/View?id=645821745','Current licensing and insurance evidence is available on request'])assert(html.includes(phrase),phrase);
 assert(!html.includes('"@type": "FAQPage"'),'removed About FAQ has no stale structured data');
});
test('whole-site copy avoids gratuitous trust disclaimers while retaining emergency and quote facts',()=>{
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){
  const html=read(file);
  for(const phrase of ['No arrival time is guaranteed.','an ABN alone does not verify trade authorisation','They are not documented Perth suburb case studies','they are not separate branches or a promise of an arrival time','They are not assigned to a particular suburb','These are illustrative situations, not customer case studies','There is no assumed free attendance','cannot be guaranteed from an enquiry or photograph'])assert(!html.includes(phrase),file+': '+phrase);
 }
 const home=read('index.html');
 assert(home.includes('https://www.google.com/maps?q='));
 assert(home.includes('https://www.google.com/maps?cid=4207134925924682021'));
 assert(home.includes('09:00–21:00'));
 assert(home.includes('24-hour emergency repairs'));
 assert(read('electrical.html').includes('tel:131351'));
 assert(read('blocked-drains-perth.html').includes('tel:131375'));
});
