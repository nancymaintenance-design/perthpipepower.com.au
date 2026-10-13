/** Canonical public identity and operating-hours records. Compatibility exports are views. */
export const business = {
  origin:'https://perthpipepower.com.au', id:'https://perthpipepower.com.au/#business',
  name:'Ellis Services Group',legalName:'ELLIS SERVICES GROUP PTY LTD',abn:'96 645 821 745',
  registration:'https://abr.business.gov.au/ABN/View?id=645821745',telephone:'+61413477667',email:'maxinemaintenance.au@outlook.com',
  address:{'@type':'PostalAddress',streetAddress:'140 St Georges Terrace',addressLocality:'Perth',addressRegion:'WA',postalCode:'6000',addressCountry:'AU'},
  logo:'https://perthpipepower.com.au/ellis-services-logo.png',instagram:'https://www.instagram.com/elliservices_group/',facebook:'https://www.facebook.com/p/Ellis-Services-Group-100082926022259/',linkedin:'https://www.linkedin.com/in/ellis-services-group-091541266/',maps:'https://www.google.com/maps?cid=4207134925924682021'
};
export const hours = {
  days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'09:00',closes:'21:00',
  get text():string {return `Routine service hours: ${this.opens}–${this.closes}, ${this.days.length===7?'seven days a week':this.days.join(', ')}. 24-hour emergency repairs are available; call to confirm attendance arrangements and the quoted emergency work. No arrival time is guaranteed.`;}
};
export function sharedValue(key:string):string {
  if(key==='business.addressLine')return `${business.address.streetAddress}, ${business.address.addressLocality} ${business.address.addressRegion} ${business.address.postalCode}`;
  if(key==='business.localTelephone')return business.telephone.replace(/^\+61/,'0');
  if(key==='business.displayTelephone'){const phone=sharedValue('business.localTelephone');return `${phone.slice(0,4)} ${phone.slice(4,7)} ${phone.slice(7)}`;}
  let value:unknown={business,hours};
  for(const part of key.split('.')){if(!value||typeof value!=='object'||!(part in value))throw Error(`Unknown shared content field: ${key}`);value=(value as Record<string,unknown>)[part];}
  if(typeof value!=='string')throw Error(`Shared content field is not text: ${key}`);return value;
}
const escape=(value:string):string=>value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
export function resolveSharedText(value:string):string {
  return value.replace(/\{\{ppp:shared:([\w.@]+):(raw|html|json)\}\}/g,(_all:string,key:string,encoding:string)=>{
    const text=sharedValue(key);return encoding==='html'?escape(text):encoding==='json'?JSON.stringify(text).slice(1,-1):text;
  });
}
export function materializeShared<T>(value:T):T {
  if(typeof value==='string')return resolveSharedText(value) as T;
  if(Array.isArray(value))return value.map(materializeShared) as T;
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,materializeShared(v)])) as T;
  return value;
}
/** Chrome template getters resolve shared fields at render time, including later canonical edits. */
export function sharedView<T extends object>(value:T):T {
  return new Proxy(value,{get(target,key,receiver){const item=Reflect.get(target,key,receiver) as unknown;if(typeof item==='string')return resolveSharedText(item);if(item&&typeof item==='object')return sharedView(item);return item;},set(){throw Error('Read-only shared view; edit site/content/shared.mts');}});
}
