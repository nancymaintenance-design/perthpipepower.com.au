(() => {
  const addServiceLink = (menuId, href, title, description) => {
    const menu = document.getElementById(menuId);
    if (!menu || menu.querySelector('[href="' + href + '"]')) return;
    const item = document.createElement('li');
    item.innerHTML = '<a class="mega-link" href="' + href + '"><span class="mega-copy"><strong>' + title + '</strong><small>' + description + '</small></span></a>';
    menu.append(item);
  };
  addServiceLink('plumbing-menu', 'fixtures-appliances-perth.html', 'Fixtures & appliances', 'Kitchen, laundry and bathroom fitting enquiries.');
  addServiceLink('electrical-menu', 'renewables-smart-home-perth.html', 'Renewables & smart home', 'Energy equipment, automation and electrical upgrade enquiries.');
  const groups = [...document.querySelectorAll('.nav-group')];
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
    if (event.target.closest('.nav-group')) return;
    groups.forEach((group) => { group.classList.remove('is-open'); group.querySelector('button')?.setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    groups.forEach((group) => { group.classList.remove('is-open'); group.querySelector('button')?.setAttribute('aria-expanded', 'false'); });
  });
})();
