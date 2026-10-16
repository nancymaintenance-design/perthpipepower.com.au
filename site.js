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
  const chinese = document.documentElement?.lang === 'zh-Hans';
  const status = document.querySelector('.carousel-status');
  if (!slides.length) return;

  const loadSlideImage = (slide) => {
    const image = slide.dataset.backgroundImage;
    if (!image) return;
    const candidates = (slide.dataset.backgroundSrcset || '').split(',').map(item => item.trim().split(/\s+/));
    const width = innerWidth * devicePixelRatio;
    const selected = candidates.find(([, size]) => parseInt(size, 10) >= width) || candidates[candidates.length - 1];
    const responsive = selected?.[1] ? `image-set(url("${selected[0]}") type("image/webp"), url("${image}") type("image/jpeg"))` : '';
    // The browser selects one supported format; the original JPEG remains a
    // fallback without an unnecessary simultaneous background download.
    slide.style.backgroundImage = responsive && CSS.supports('background-image', responsive) ? responsive : `url("${image}")`;
  };

  let current = 0;
  let timer;
  const show = (index) => {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    loadSlideImage(slides[current]);
    slides[current].classList.add('is-active');
    if (status) status.textContent = chinese ? `第 ${current + 1} 张，共 ${slides.length} 张` : `${current + 1} of ${slides.length}`;
  };

  document.querySelector('[data-prev]')?.addEventListener('click', () => show(current - 1));
  document.querySelector('[data-next]')?.addEventListener('click', () => show(current + 1));

  const hero = document.querySelector('.hero');
  if (hero) {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const pause = hero.querySelector('[data-carousel-pause]');
    let visible = false, hovering = false, focused = false, paused = false;
    const reconcile = () => {
      const play = visible && !document.hidden && !motion.matches && !hovering && !focused && !paused;
      if (play && timer === undefined) timer = setInterval(() => show(current + 1), 6500);
      if (!play && timer !== undefined) { clearInterval(timer); timer = undefined; }
      if (pause) {
        pause.disabled = motion.matches;
        pause.setAttribute('aria-pressed', String(paused || motion.matches));
        pause.textContent = chinese ? (motion.matches ? '轮播已暂停' : paused ? '继续轮播' : '暂停轮播') : (motion.matches ? 'Slideshow paused' : paused ? 'Resume slideshow' : 'Pause slideshow');
      }
      if (status) status.setAttribute('aria-live', play ? 'off' : 'polite');
    };
    pause?.addEventListener('click', () => { paused = !paused; reconcile(); });
    hero.addEventListener('mouseenter', () => { hovering = true; reconcile(); });
    hero.addEventListener('mouseleave', () => { hovering = false; reconcile(); });
    hero.addEventListener('focusin', () => { focused = true; reconcile(); });
    hero.addEventListener('focusout', () => queueMicrotask(() => { focused = hero.contains(document.activeElement); reconcile(); }));
    document.addEventListener('visibilitychange', reconcile);
    motion.addEventListener('change', reconcile);
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; reconcile(); }).observe(hero);
    addEventListener('resize', () => slides.filter(slide => slide.style.backgroundImage).forEach(loadSlideImage));
    reconcile();
  }
})();
