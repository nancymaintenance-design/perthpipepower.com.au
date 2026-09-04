const recipient = process.env.RESEND_TO_EMAIL || 'maxinemaintenance.au@outlook.com';

function clean(value, limit) { return String(value || '').trim().slice(0, limit); }
function escapeHtml(value) { return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  const input = req.body || {};
  if (input.company) return res.status(200).json({ ok: true });

  const enquiry = {
    name: clean(input.name, 120), phone: clean(input.phone, 60), email: clean(input.email, 160),
    address: clean(input.address, 240), type: clean(input.type, 60), message: clean(input.message, 4000),
  };

  if (!enquiry.name || !enquiry.phone || !enquiry.email || !enquiry.address || !enquiry.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return res.status(400).json({ error: 'Please provide your name, phone, email, property location and a short description.' });
  }
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return res.status(503).json({ error: 'Email delivery is not configured yet. Please call or email Ellis Services Group directly.' });
  }

  const html = '<h1>New website enquiry</h1><p><strong>Name:</strong> ' + escapeHtml(enquiry.name) + '</p><p><strong>Phone:</strong> ' + escapeHtml(enquiry.phone) + '</p><p><strong>Email:</strong> ' + escapeHtml(enquiry.email) + '</p><p><strong>Property:</strong> ' + escapeHtml(enquiry.address) + '</p><p><strong>Service:</strong> ' + escapeHtml(enquiry.type) + '</p><p><strong>Message:</strong><br>' + escapeHtml(enquiry.message).replace(/\n/g, '<br>') + '</p>';

  try {
    const resend = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + process.env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL, to: [recipient], reply_to: enquiry.email, subject: 'Website enquiry: ' + enquiry.type + ' — ' + enquiry.name, html }),
    });
    if (!resend.ok) throw new Error('Resend returned ' + resend.status);
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Your enquiry could not be sent. Please call or email Ellis Services Group.' });
  }
};
