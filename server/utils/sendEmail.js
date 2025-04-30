const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
    port: process.env.EMAIL_PORT || 2525,
    auth: {
      user: process.env.EMAIL_USERNAME || 'your_mailtrap_username',
      pass: process.env.EMAIL_PASSWORD || 'your_mailtrap_password'
    }
  });

  // Define email options
  const mailOptions = {
    from: 'Auth System <auth@example.com>',
    to: options.to,
    subject: options.subject,
    html: options.text
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;