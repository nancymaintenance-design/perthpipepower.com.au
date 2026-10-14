function safeSuburbFromSearch(search) {
  const rawMatch = String(search).match(/(?:^|[?&])suburb=([^&]*)/);
  if (!rawMatch || /%(?![0-9a-f]{2})/i.test(rawMatch[1])) return null;

  const values = new URLSearchParams(search).getAll('suburb');
  const suburb = values.length === 1 ? values[0].trim() : '';
  return suburb && suburb.length <= 240 && !/[\uFFFD\x00-\x1f\x7f]/.test(values[0]) ? suburb : null;
}

const prefilledFields = new WeakSet();
const editedFields = new WeakSet();

function prefillContactSuburb() {
  const suburb = safeSuburbFromSearch(window.location.search);
  const address = document.querySelector('input[name="address"]');
  const context = window.EllisBookingContext?.serviceFromSearch(window.location.search);
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
    if(type && !existingRequest && !editedFields.has(type) && !prefilledFields.has(type) && type.value===(initialType || 'Not sure')){
      type.value=context.type;prefilledFields.add(type);
    }
    fill(message,'Service requested: '+context.label+'\n\n');
  }
  if(suburb && fill(address,suburb) && (!document.activeElement || document.activeElement===document.body))address.focus();
}

if (typeof window !== 'undefined') {
  window.prefillContactSuburb = prefillContactSuburb;
  for(const event of ['input','change'])document.addEventListener?.(event, e=>editedFields.add(e.target),true);
  window.addEventListener('DOMContentLoaded', prefillContactSuburb, { once: true });
}

if (typeof module !== 'undefined') module.exports = { safeSuburbFromSearch, prefillContactSuburb };
