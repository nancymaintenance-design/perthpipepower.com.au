(() => {
  const form = document.querySelector('[data-enquiry-form]');
  if (!form) return;
  const status = form.querySelector('.form-status');
  if (!status) return;
  if (!status.id) status.id = 'form-status';
  const button = form.querySelector('button[type="submit"]');
  let submitting = false;
  const chinese = document.documentElement?.lang === 'zh-Hans';
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
      field.setAttribute('aria-describedby', status.id);
      if (!valid && !invalid) invalid = field;
    }
    if (invalid) { update(chinese ? '请填写全部必填项，并输入有效的邮箱地址。' : 'Please complete each required field and enter a valid email address.', 'is-error'); invalid.focus(); return; }
    submitting = true;
    button.disabled = true; button.setAttribute('aria-busy', 'true'); update(chinese ? '正在发送咨询…' : 'Sending your enquiry…');
    try {
      const response = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(chinese ? '咨询未能发送，请致电或发送邮件联系 Ellis Services Group。' : result.error || 'Your enquiry could not be sent.');
      form.reset(); update(chinese ? '感谢联系，咨询已发送。Ellis Services Group 将通过您提供的联系方式回复。' : 'Thanks — your enquiry has been sent. Ellis Services Group will respond using the details provided.', 'is-success');
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { method: 'enquiry_form', page_path: location.pathname });
    } catch (error) { update(chinese ? '咨询未能发送，请致电或发送邮件联系 Ellis Services Group。' : error.message || 'Your enquiry could not be sent. Please call or email Ellis Services Group.', 'is-error'); }
    finally { submitting = false; button.disabled = false; button.removeAttribute('aria-busy'); }
  });
})();
