(() => {
  if (window.__ellisConversionEventsInstalled) return;
  window.__ellisConversionEventsInstalled = true;
  // Public routes from ai-content.json servicePages plus the three service hubs.
  // Tests check every published service so route additions cannot silently drift.
  const services = new Set([
    'plumbing.html',
    'electrical.html',
    'property-management.html',
    'hot-water-problems-perth.html',
    'blocked-drains-perth.html',
    'water-leak-detection-perth.html',
    'burst-pipe-repair-perth.html',
    'tap-mixer-repairs-perth.html',
    'toilet-repairs-perth.html',
    'power-faults-perth.html',
    'safety-switch-tripping-perth.html',
    'lighting-power-points-perth.html',
    'smoke-alarm-maintenance-perth.html',
    'fixtures-appliances-perth.html',
    'renewables-smart-home-perth.html',
    'lighting-installation-perth.html',
    'power-points-perth.html',
    'dishwasher-installation-perth.html',
    'toilet-installation-perth.html',
    'shower-plumbing-repairs-perth.html',
    'water-pressure-perth.html',
    'ceiling-fans-perth.html',
    'exhaust-fans-perth.html',
    'switchboard-upgrades-perth.html',
    'rcd-testing-perth.html',
    'emergency-plumber-perth.html',
    'emergency-electrician-perth.html',
  ]);
  document.addEventListener('click', event => {
    const link = event.target?.closest?.('a[href]');
    if (!link || typeof window.gtag !== 'function') return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('tel:')) {
      window.gtag('event', 'phone_click', { page_path: location.pathname });
      return;
    }
    let url;
    try { url = new URL(href, document.baseURI); } catch { return; }
    if (url.origin !== location.origin) return;
    const breadcrumb = link.closest?.('[data-customer-breadcrumb]');
    if (breadcrumb) {
      window.gtag('event', 'breadcrumb_click', {
        source_path: location.pathname,
        target_path: url.pathname,
        locale: document.documentElement.lang,
        position: Number(link.getAttribute('data-breadcrumb-position')),
        owner_id: breadcrumb.getAttribute('data-owner-id') || ''
      });
      return;
    }
    const route = url.pathname.replace(/^\/zh\//, '/').replace(/\/$/, '').slice(1);
    if (services.has(route)) {
      window.gtag('event', 'service_click', { service_page: route, page_path: location.pathname });
    }
  });
})();
