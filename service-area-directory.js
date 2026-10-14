(() => {
  const data = window.PERTH_SERVICE_AREAS;
  if (!data) return;

  const regionsByName = new Map(data.regions.map((region) => [region.name, region]));
  document.querySelectorAll('[data-region-localities]').forEach((list) => {
    const card = list.closest('[data-region-name]');
    const region = card && regionsByName.get(card.dataset.regionName);
    if (!region) return;

    list.replaceChildren(...region.localities.map((locality) => {
      const link = document.createElement('a');
      link.className = 'area-region__locality-link';
      link.href = `contact.html?suburb=${encodeURIComponent(locality.name)}#enquiry`;
      link.textContent = locality.name;
      return link;
    }));
  });
})();
