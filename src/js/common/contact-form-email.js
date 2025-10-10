// contact-form-email.js
// Sends contact form data to an email using SMTPJS (client-side)
// Docs: https://smtpjs.com/

export function setupContactFormEmail() {
  const form = document.querySelector('form[action="/index.html"]');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('fullname');
    const number = formData.get('number');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // SMTPJS config
    const smtpConfig = {
      SecureToken: "YOUR_SECURE_TOKEN_HERE", // Replace with your token from smtpjs.com
      To: "contact@seytuu.com",
      From: email,
      Subject: `Contact Form: ${subject}`,
      Body: `Name: ${name}<br>Number: ${number}<br>Email: ${email}<br>Message: ${message}`
    };

    window.Email && window.Email.send(smtpConfig)
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
  });
}
