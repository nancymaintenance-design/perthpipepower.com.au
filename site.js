(function () {
  const faviconHref = '/ellis-services-logo.png';
  if (!document.head.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.sizes = '512x512';
    favicon.href = faviconHref;
    document.head.append(favicon);
  }
  if (!document.head.querySelector('link[rel="apple-touch-icon"]')) {
    const touchIcon = document.createElement('link');
    touchIcon.rel = 'apple-touch-icon';
    touchIcon.href = faviconHref;
    document.head.append(touchIcon);
  }

  const nav = document.querySelector('.site-nav');

  // Keep safety guidance and in-flow booking actions clear on small screens.
  const mobileActions = document.querySelector('.mobile-ctas');
  if (mobileActions) {
    const hero = document.querySelector('main .page-hero, main .hero');
    const inlineActions = [...document.querySelectorAll('main a.button[href="contact.html"], main a.button[href^="contact.html?"], main a.button[href="#enquiry"], main a.button[href^="tel:"]')];
    const inView = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < innerHeight;
    };
    let scheduled = false;
    const updateActions = () => {
      scheduled = false;
      const menuOpen = document.querySelector('.site-nav.open, .nav-group.is-open');
      const form=document.querySelector('[data-enquiry-form]');
      mobileActions.hidden = !!menuOpen || !!(hero && hero.getBoundingClientRect().bottom > 0) || inlineActions.some(inView) || !!(form&&inView(form));
    };
    const scheduleActions = () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(updateActions); }
    };
    addEventListener('scroll', scheduleActions, {passive:true});
    addEventListener('resize', scheduleActions);
    if (nav) new MutationObserver(scheduleActions).observe(nav, {attributes:true, subtree:true, attributeFilter:['class']});
    updateActions();
  }

  const slides = [...document.querySelectorAll('.slide')];
  const status = document.querySelector('.carousel-status');
  if (!slides.length) return;

  const loadSlideImage = (slide) => {
    const image = slide.dataset.backgroundImage;
    if (image && !slide.style.backgroundImage) slide.style.backgroundImage = `url("${image}")`;
  };

  let current = 0;
  let timer;
  const show = (index) => {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    loadSlideImage(slides[current]);
    slides[current].classList.add('is-active');
    if (status) status.textContent = `${current + 1} of ${slides.length}`;
  };

  document.querySelector('[data-prev]')?.addEventListener('click', () => show(current - 1));
  document.querySelector('[data-next]')?.addEventListener('click', () => show(current + 1));

  const hero = document.querySelector('.hero');
  const start = () => { timer = setInterval(() => show(current + 1), 6500); };
  if (hero && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    start();
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', start);
  }
})();
