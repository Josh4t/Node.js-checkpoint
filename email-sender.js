const nodemailer = require('nodemailer');

// Create a transporter using your email service provider details
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service you want (e.g., 'gmail', 'yahoo', etc.)
  auth: {
    user: '', // The User email
    pass: ''   // The user email password
  }
});

// Setup email data
const mailOptions = {
  from: '',   // Sender address
  to: '',     // List of receivers (you can add more separated by commas)
  subject: 'This is a test run of email-sender code',  // Subject line
  text: 'This is a test email sent from a Node.js application.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
