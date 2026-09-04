(() => {
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
