(() => {
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || typeof window.gtag !== 'function') return;
    const href = link.getAttribute('href');
    if (href.startsWith('tel:')) window.gtag('event', 'phone_click', { page_path: location.pathname });
    else if (/^(plumbing|electrical|property-management|(?:blocked-drains|burst-pipe-repair|water-leak-detection|hot-water-problems|tap-mixer-repairs|toilet-repairs|power-faults|safety-switch-tripping|lighting-power-points|smoke-alarm-maintenance|fixtures-appliances|renewables-smart-home)-perth)\.html$/.test(href)) window.gtag('event', 'service_click', { service_page: href, page_path: location.pathname });
  });
})();
