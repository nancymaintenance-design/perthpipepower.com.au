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

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
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
