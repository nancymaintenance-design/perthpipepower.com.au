(() => {
  const form = document.querySelector('[data-enquiry-form]');
  if (!form) return;
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  const update = (message, state) => { status.textContent = message; status.className = `form-status ${state || ''}`; };
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!data.name?.trim() || !data.phone?.trim() || !data.email?.trim() || !data.address?.trim() || !data.message?.trim()) { update('Please complete the required fields before sending your enquiry.', 'is-error'); return; }
    button.disabled = true; button.setAttribute('aria-busy', 'true'); update('Sending your enquiry…');
    try {
      const response = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Your enquiry could not be sent.');
      form.reset(); update('Thanks — your enquiry has been sent. Ellis Services will respond using the details provided.', 'is-success');
    } catch (error) { update(error.message || 'Your enquiry could not be sent. Please call or email Ellis Services.', 'is-error'); }
    finally { button.disabled = false; button.removeAttribute('aria-busy'); }
  });
})();
