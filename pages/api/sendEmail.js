import nodemailer from 'nodemailer';

const LOGO_URL =
  'https://raw.githubusercontent.com/abhishakejutur/monizen_ai/refs/heads/main/public/logo.png';

const ORG = {
  name: 'Monizen AI',
  tagline: 'Internet that moves.',
  email: 'hello@monizen.example', 
  phone: '+91 00000 00000',
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM',
  location: 'India',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, email, service, message } = req.body || {};

  if (!name || !phone || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const nameParts = String(name).trim().split(/\s+/);
  const firstname = nameParts[0] || '';
  const lastname = nameParts.slice(1).join(' ') || '';

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.error(
      'SMTP credentials missing: set SMTP_USER and SMTP_PASS in .env.local'
    );
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const header = `
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="${LOGO_URL}" alt="${ORG.name} logo" style="max-width: 160px; height: auto; border-radius: 8px;"/>
      <h2 style="color: #0f172a; margin: 12px 0 4px;">${ORG.name}</h2>
      <p style="color: #0891b2; margin: 0; font-size: 13px; letter-spacing: 1px;">${ORG.tagline}</p>
    </div>
  `;

  const adminMail = {
    from: `"${ORG.name}" <${smtpUser}>`,
    // to: ORG.email,
    to: `"${ORG.name}" <abhishakejutur@gmail.com>`,
    subject: `${ORG.name} — New enquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
        <div style="background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          ${header}
          <h3 style="color: #0f172a;">You received a new enquiry</h3>
          <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
            <tr style="background:#f1f5f9;"><th style="border:1px solid #e2e8f0; padding:8px; text-align:left;">Field</th><th style="border:1px solid #e2e8f0; padding:8px; text-align:left;">Details</th></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Name</td><td style="border:1px solid #e2e8f0; padding:8px;">${name}</td></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Email</td><td style="border:1px solid #e2e8f0; padding:8px;">${email}</td></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Phone</td><td style="border:1px solid #e2e8f0; padding:8px;">${phone}</td></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Service required</td><td style="border:1px solid #e2e8f0; padding:8px;">${service}</td></tr>
          </table>
          <div style="background:#f1f5f9; margin-top:16px; padding:12px; border-radius:8px;">
            <strong style="color:#0f172a;">Message:</strong>
            <p style="color:#334155; line-height:1.6; margin:8px 0 0;">${message}</p>
          </div>
          <p style="margin-top:16px; color:#94a3b8; font-size:12px;">Sent via the ${ORG.name} contact form.</p>
        </div>
      </div>
    `,
  };

  const replyMail = {
    from: `"${ORG.name}" <${smtpUser}>`,
    to: email,
    subject: `Thank you for contacting ${ORG.name}, ${firstname}!`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
        <div style="background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          ${header}
          <h3 style="color:#0f172a;">Hello ${firstname}${lastname ? ' ' + lastname : ''},</h3>
          <p style="color:#334155; line-height:1.7;">Thank you for reaching out to ${ORG.name}. We have received your enquiry about <strong>${service}</strong> and our team will get back to you shortly.</p>
          <p style="color:#334155; line-height:1.7;">Here is a summary of what you sent us:</p>
          <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
            <tr style="background:#f1f5f9;"><th style="border:1px solid #e2e8f0; padding:8px; text-align:left;">Field</th><th style="border:1px solid #e2e8f0; padding:8px; text-align:left;">Details</th></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Name</td><td style="border:1px solid #e2e8f0; padding:8px;">${name}</td></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Phone</td><td style="border:1px solid #e2e8f0; padding:8px;">${phone}</td></tr>
            <tr><td style="border:1px solid #e2e8f0; padding:8px;">Service required</td><td style="border:1px solid #e2e8f0; padding:8px;">${service}</td></tr>
          </table>
          <div style="background:#f1f5f9; margin-top:16px; padding:12px; border-radius:8px;">
            <strong style="color:#0f172a;">Your message:</strong>
            <p style="color:#334155; line-height:1.6; margin:8px 0 0;">${message}</p>
          </div>
          <div style="background:#ecfeff; margin-top:20px; padding:16px; border-radius:8px; border:1px solid #cffafe;">
            <p style="margin:0 0 8px; color:#0f172a; font-weight:bold;">${ORG.name}</p>
            <p style="margin:2px 0; color:#334155; font-size:13px;">Email: ${ORG.email}</p>
            <p style="margin:2px 0; color:#334155; font-size:13px;">Phone: ${ORG.phone}</p>
            <p style="margin:2px 0; color:#334155; font-size:13px;">Business Hours: ${ORG.hours}</p>
            <p style="margin:2px 0; color:#334155; font-size:13px;">Location: ${ORG.location}</p>
          </div>
          <p style="margin-top:20px; color:#94a3b8; font-size:12px;">— The ${ORG.name} team · ${ORG.tagline}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(replyMail);
    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return res
      .status(500)
      .json({ error: 'Failed to send your enquiry. Please try again later.' });
  }
}

