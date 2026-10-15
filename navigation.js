(() => {
  const addServiceLink = (menuId, href, title, description) => {
    const menu = document.getElementById(menuId);
    if (!menu || menu.querySelector('[href="' + href + '"]')) return;
    const item = document.createElement('li');
    item.innerHTML = '<a class="mega-link" href="' + href + '"><span class="mega-copy"><strong>' + title + '</strong><small>' + description + '</small></span></a>';
    menu.append(item);
  };
  addServiceLink('plumbing-menu', 'fixtures-appliances-perth.html', 'Fixtures & appliances', 'Kitchen, laundry and bathroom fitting enquiries.');
  addServiceLink('electrical-menu', 'renewables-smart-home-perth.html', 'Smart lighting & controls', 'Smart lighting, switches, sensors and basic controls.');
  const groups = [...document.querySelectorAll('.nav-group')];
  document.documentElement.classList.add('nav-enhanced');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const closeGroups = () => groups.forEach(group => {
    group.classList.remove('is-open');group.querySelector('button')?.setAttribute('aria-expanded','false');
  });
  const closeNavigation = (returnFocus=false) => {
    closeGroups();nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');
    if(returnFocus)toggle?.focus();
  };
  toggle?.addEventListener('click',()=>{
    const open=!nav.classList.contains('open');closeGroups();
    nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));
  });
  const measureHeader = () => {
    if (header) {
      const bounds = header.getBoundingClientRect();
      document.documentElement.style.setProperty('--site-header-height', bounds.height + 'px');
      document.documentElement.style.setProperty('--site-header-bottom', bounds.bottom + 'px');
    }
  };
  measureHeader();
  if (header && window.ResizeObserver) new ResizeObserver(measureHeader).observe(header);
  window.addEventListener('resize', () => {
    if(window.innerWidth>800)closeNavigation();measureHeader();
  });
  window.addEventListener('scroll', measureHeader, {passive:true});
  groups.forEach((group) => {
    const button = group.querySelector('button');
    if (!button) return;
    button.addEventListener('click', () => {
      const willOpen = !group.classList.contains('is-open');
      groups.forEach((item) => { item.classList.remove('is-open'); item.querySelector('button')?.setAttribute('aria-expanded', 'false'); });
      group.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', (event) => {
    if(event.target.closest('a[href="#enquiry"]')){
      closeNavigation();
      const form=document.getElementById('enquiry');
      form?.focus({preventScroll:true});
    }
    if(!event.target.closest('.site-header'))closeNavigation();
    if (event.target.closest('.nav-group')) return;
    closeGroups();
  });
  document.addEventListener('focusin', (event) => {
    // A non-modal disclosure must uncover content when Tab leaves the header.
    if(nav?.classList.contains('open')&&!header?.contains(event.target))closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const active = groups.find(group => group.classList.contains('is-open') && group.contains(document.activeElement));
    closeGroups();
    if(active)active.querySelector('button')?.focus();
    else if(nav?.classList.contains('open'))closeNavigation(true);
  });
})();
