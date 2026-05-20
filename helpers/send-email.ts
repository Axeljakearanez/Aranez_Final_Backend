import nodemailer from 'nodemailer';

export default async function sendEmail({
  to,
  subject,
  html,
  from = process.env.EMAIL_FROM || 'admin@example.com'
}: any) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === 'true';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log('⚠️ SMTP environment variables are missing. Email not sent.');
    console.log({ to, subject, html });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    html
  });
}