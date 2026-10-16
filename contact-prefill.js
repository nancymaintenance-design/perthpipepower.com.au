function safeSuburbFromSearch(search) {
  const api=typeof window!=='undefined'&&window.EllisBookingContext || (typeof require==='function'?require('./booking-context.js'):null);
  return api?.safeSuburbFromSearch(search)??null;
}

const prefilledFields = new WeakSet();
const editedFields = new WeakSet();

function prefillContactSuburb() {
  const suburb = safeSuburbFromSearch(window.location.search);
  const address = document.querySelector('input[name="address"]');
  const booking = window.EllisBookingContext?.resolveBookingContext(window.location.pathname,window.location.search);
  const context = booking?.service;
  const type = document.querySelector('select[name="type"]');
  const message = document.querySelector('textarea[name="message"]');
  const fill = (field,value) => {
    if(!field || editedFields.has(field) || prefilledFields.has(field) || field.value.trim())return false;
    field.value=value;prefilledFields.add(field);return true;
  };
  if(context){
    const initialType = type && Array.from(type.options).find(option=>option.defaultSelected)?.value;
    // A restored neutral selection cannot be distinguished from a new default.
    // Existing request data is a reason to preserve it rather than infer a trade.
    const existingRequest = !!address?.value.trim() || !!message?.value.trim();
    const contextualDefault=type?.value.startsWith(context.type+' — ');
    if(type && !contextualDefault && !existingRequest && !editedFields.has(type) && !prefilledFields.has(type) && type.value===(initialType || 'Not sure')){
      type.value=context.type;prefilledFields.add(type);
    }
    const chinese=window.EllisLocale?.locale==='zh-Hans';
    fill(message,chinese?'所需服务：'+(window.EllisLocale.serviceLabels[context.route]||context.label)+'\n\n':'Service requested: '+context.label+'\n\n');
  }
  if(suburb && fill(address,suburb) && (!window.location.hash || window.location.hash!=='#enquiry') && (!document.activeElement || document.activeElement===document.body))address.focus();
  // Carry only allowlisted service and valid suburb context across contact links.
  // Trade-menu links retain their own service rather than inheriting this page.
  for(const link of document.querySelectorAll?.('a[href]')||[]){
    const href=link.getAttribute('href');
    if(!/^(?:\/zh\/|\/)?contact\.html(?:[?#]|$)/.test(href))continue;
    const url=new URL(href,window.location.href);
    if(context&&!url.searchParams.has('service'))url.searchParams.set('service',context.route);
    if(suburb&&!url.searchParams.has('suburb'))url.searchParams.set('suburb',suburb);
    link.setAttribute('href',href.split(/[?#]/)[0]+url.search+url.hash);
  }
}

if (typeof window !== 'undefined') {
  window.prefillContactSuburb = prefillContactSuburb;
  for(const event of ['input','change'])document.addEventListener?.(event, e=>editedFields.add(e.target),true);
  window.addEventListener('DOMContentLoaded', prefillContactSuburb, { once: true });
}

if (typeof module !== 'undefined') module.exports = { safeSuburbFromSearch, prefillContactSuburb };
