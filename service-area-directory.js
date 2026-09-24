(() => {
  const data = window.PERTH_SERVICE_AREAS;
  if (!data) return;

  const input = document.querySelector('#area-search-input');
  const clear = document.querySelector('.area-search-clear');
  const status = document.querySelector('#area-search-status[aria-live="polite"]');
  const results = document.querySelector('#area-search-results');
  const regions = document.querySelector('#area-regions');
  const createLink = (locality) => {
    const link = document.createElement('a');
    link.href = `service-areas/${locality.slug}.html`;
    link.textContent = locality.name;
    return link;
  };
  const renderRegionGroups = () => {
    regions.replaceChildren(...data.regions.map((region) => {
      const section = document.createElement('section');
      section.className = 'area-region';
      section.dataset.areaRegion = region.name;
      const heading = document.createElement('h2');
      const hub = document.createElement('a');
      hub.href = region.hub;
      hub.textContent = region.name;
      heading.append(hub);
      const list = document.createElement('div');
      list.className = 'area-link-list';
      list.append(...region.localities.map(createLink));
      section.append(heading, list);
      return section;
    }));
  };
  const filterLocalities = (query) => {
    const normalized = query.trim().toLocaleLowerCase('en-AU');
    return normalized ? data.localities.filter(({ name }) => name.toLocaleLowerCase('en-AU').includes(normalized)) : [];
  };
  const renderSearch = () => {
    const query = input.value.trim();
    const matches = filterLocalities(query);
    clear.hidden = !query;
    results.replaceChildren();
    if (!query) {
      status.textContent = '';
      regions.hidden = false;
      return;
    }
    regions.hidden = true;
    if (!matches.length) {
      status.textContent = 'No matching Perth locality.';
      const message = document.createElement('p');
      message.textContent = 'Cannot see your area? ';
      const contact = document.createElement('a');
      contact.href = 'contact.html';
      contact.textContent = 'Send us your property address';
      message.append(contact, '.');
      results.append(message);
      return;
    }
    status.textContent = `${matches.length} matching ${matches.length === 1 ? 'locality' : 'localities'}.`;
    const list = document.createElement('div');
    list.className = 'area-link-list';
    list.append(...matches.map(createLink));
    results.append(list);
  };
  input.addEventListener('input', renderSearch);
  clear.addEventListener('click', () => {
    input.value = '';
    renderSearch();
    input.focus();
  });
  renderRegionGroups();
  renderSearch();
})();
