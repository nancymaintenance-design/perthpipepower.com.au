(() => {
  const input = document.querySelector('#suburb-search');
  if (!input) return;
  const clear = document.querySelector('#suburb-clear');
  const status = document.querySelector('#suburb-results');
  const cards = [...document.querySelectorAll('[data-region-name]')];
  const update = () => {
    const query = input.value.trim().toLocaleLowerCase('en-AU');
    let total = 0;
    cards.forEach(card => {
      const regionMatch = card.dataset.regionName.toLocaleLowerCase('en-AU').includes(query);
      let matches = 0;
      card.querySelectorAll('.area-region__locality-link').forEach(link => {
        link.hidden = !!query && !regionMatch && !link.textContent.toLocaleLowerCase('en-AU').includes(query);
        if (!link.hidden) matches++;
      });
      card.hidden = matches === 0;
      total += matches;
    });
    clear.hidden = !query;
    status.textContent = query ? (total ? `${total} suburbs found. Select a suburb to prefill your enquiry.` : 'No matching suburb. Contact our Perth team with your address.') : 'Choose a suburb to prefill your enquiry, or open a region for service information.';
  };
  input.addEventListener('input', update);
  clear.addEventListener('click', () => { input.value = ''; update(); input.focus(); });
  update();
})();
