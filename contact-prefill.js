function safeSuburbFromSearch(search) {
  const rawMatch = String(search).match(/(?:^|[?&])suburb=([^&]*)/);
  if (!rawMatch || /%(?![0-9a-f]{2})/i.test(rawMatch[1])) return null;

  const suburb = new URLSearchParams(search).get('suburb')?.trim();
  return suburb && !suburb.includes('\uFFFD') ? suburb : null;
}

function prefillContactSuburb() {
  const suburb = safeSuburbFromSearch(window.location.search);
  const address = document.querySelector('input[name="address"]');
  if (!suburb || !address) return;

  address.value = suburb;
  address.focus();
}

if (typeof window !== 'undefined') {
  window.prefillContactSuburb = prefillContactSuburb;
  window.addEventListener('DOMContentLoaded', prefillContactSuburb, { once: true });
}

if (typeof module !== 'undefined') module.exports = { safeSuburbFromSearch, prefillContactSuburb };
