(() => {
  const ELECTRICAL_WORK_GALLERY = [
    { id: 'kitchen-lighting-progress', image: 'images/electrical-work/kitchen-lighting-in-progress.jpg', alt: 'Kitchen ceiling with recessed lights being fitted', label: 'Kitchen lighting work', caption: 'Lighting work in progress.' },
    { id: 'kitchen-lighting-wide', image: 'images/electrical-work/kitchen-lighting-wide.jpg', alt: 'Wide view of a kitchen with recessed lights', label: 'Kitchen lighting work', caption: 'Kitchen lighting presentation.' },
    { id: 'kitchen-lighting-finished', image: 'images/electrical-work/kitchen-lighting-finished.jpg', alt: 'Kitchen with illuminated recessed ceiling lights', label: 'Kitchen lighting work', caption: 'Completed lighting presentation.' },
    { id: 'cabinet-cabling', image: 'images/electrical-work/cabinet-cabling.jpg', alt: 'Electrical cabinet with cabling and conduit', label: 'Cabling work', caption: 'Cabling installation-stage work.' },
    { id: 'underground-conduit', image: 'images/electrical-work/underground-electrical-conduit.jpg', alt: 'Underground trench with electrical conduit', label: 'Conduit work', caption: 'Underground conduit installation-stage work.' },
    { id: 'renovation-rewiring', image: 'images/electrical-work/renovation-rewiring.jpg', alt: 'Open renovation wall with electrical wiring', label: 'Renovation wiring', caption: 'Electrical rough-in during renovation work.' },
    { id: 'residential-switchboard', image: 'images/electrical-work/residential-switchboard.jpg', alt: 'Residential electrical switchboard with its cover open', label: 'Switchboard work', caption: 'Residential switchboard work example.' },
    { id: 'safety-switch-closeup', image: 'images/electrical-work/safety-switch-closeup.jpg', alt: 'Close-up of a safety switch and circuit breakers', label: 'Safety-switch work', caption: 'Safety-switch work example.' },
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);

  const renderElectricalWorkGallery = () => `<div class="electrical-work-gallery"><div class="electrical-work-gallery__heading"><span class="eyebrow">Real work imagery</span><h2>Electrical work examples</h2><p>Examples of electrical work completed by our team.</p></div><div class="electrical-work-gallery__grid">${ELECTRICAL_WORK_GALLERY.map((record) => `<figure class="electrical-work-gallery__card"><img class="electrical-work-gallery__image" src="/${escapeHtml(record.image)}" alt="${escapeHtml(record.alt)}" loading="lazy" decoding="async"><figcaption><strong>${escapeHtml(record.label)}</strong><span>${escapeHtml(record.caption)}</span></figcaption></figure>`).join('')}</div></div>`;

  const mountElectricalWorkGalleries = (documentRef) => {
    const targets = documentRef.querySelectorAll('[data-electrical-work-gallery]');
    targets.forEach((target) => { target.innerHTML = renderElectricalWorkGallery(); });
    return targets.length;
  };

  const api = { ELECTRICAL_WORK_GALLERY, renderElectricalWorkGallery, mountElectricalWorkGalleries };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') {
    window.ELECTRICAL_WORK_GALLERY = ELECTRICAL_WORK_GALLERY;
    window.mountElectricalWorkGalleries = mountElectricalWorkGalleries;
    mountElectricalWorkGalleries(window.document);
  }
})();
