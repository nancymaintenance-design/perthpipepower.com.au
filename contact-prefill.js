(() => {
  function prefillContactSuburb() {
    const suburb = new URLSearchParams(window.location.search).get('suburb')?.trim();
    const address = document.querySelector('input[name="address"]');
    if (!suburb || !address) return;

    address.value = suburb;
    address.focus();
  }

  window.addEventListener('DOMContentLoaded', prefillContactSuburb, { once: true });
})();
