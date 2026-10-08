(() => {
  const form = document.querySelector('[data-enquiry-form]');
  if (!form) return;
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  let submitting = false;
  const update = (message, state) => { status.textContent = message; status.className = `form-status ${state || ''}`; };
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting) return;
    const data = Object.fromEntries(new FormData(form));
    let invalid = null;
    for (const name of ['name', 'phone', 'email', 'address', 'message']) {
      const field = form.elements.namedItem(name);
      const valid = !!data[name]?.trim() && (name !== 'email' || field.validity.valid);
      field.setAttribute('aria-invalid', String(!valid));
      field.setAttribute('aria-describedby', 'form-status');
      if (!valid && !invalid) invalid = field;
    }
    if (invalid) { update('Please complete each required field and enter a valid email address.', 'is-error'); invalid.focus(); return; }
    submitting = true;
    button.disabled = true; button.setAttribute('aria-busy', 'true'); update('Sending your enquiry…');
    try {
      const response = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Your enquiry could not be sent.');
      form.reset(); update('Thanks — your enquiry has been sent. Ellis Services Group will respond using the details provided.', 'is-success');
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { method: 'enquiry_form', page_path: location.pathname });
    } catch (error) { update(error.message || 'Your enquiry could not be sent. Please call or email Ellis Services Group.', 'is-error'); }
    finally { submitting = false; button.disabled = false; button.removeAttribute('aria-busy'); }
  });
})();
