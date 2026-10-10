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

  // Intrinsic dimensions of the default responsive 4:3 preview resources.
  const dimensions = {
    'kitchen-lighting-progress': [480, 360],
    'kitchen-lighting-wide': [480, 360],
    'kitchen-lighting-finished': [480, 360],
    'cabinet-cabling': [480, 360],
    'underground-conduit': [480, 360],
    'renovation-rewiring': [480, 360],
    'residential-switchboard': [480, 360],
    'safety-switch-closeup': [480, 360],
  };

  const renderElectricalWorkGallery = () => `<div class="electrical-work-gallery"><div class="electrical-work-gallery__heading"><span class="eyebrow">Real work imagery</span><h2>Electrical work examples</h2><p>Electrical switchboard, lighting and power-point work.</p></div><div class="electrical-work-gallery__grid">${ELECTRICAL_WORK_GALLERY.map((record) => `<figure class="electrical-work-gallery__card"><img class="electrical-work-gallery__image" src="/${escapeHtml(record.image.replace(/\.jpg$/, '-480.webp'))}" srcset="/${escapeHtml(record.image.replace(/\.jpg$/, '-480.webp'))} 480w, /${escapeHtml(record.image.replace(/\.jpg$/, '-960.webp'))} 960w" sizes="(max-width:700px) 50vw, (max-width:980px) 33vw, 25vw" width="${dimensions[record.id][0]}" height="${dimensions[record.id][1]}" alt="${escapeHtml(record.alt)}" loading="lazy" decoding="async"><figcaption><strong>${escapeHtml(record.label)}</strong><span>${escapeHtml(record.caption)}</span></figcaption></figure>`).join('')}</div></div>`;

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
