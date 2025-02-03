const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.SMTP_MAIL, 
    pass: process.env.SMTP_PASSWORD, 
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, name, number, message } = req.body;
  console.log(email, name, number, message);

  var mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: "Inquiry Mail from" + name,
    text: 
    `
    Name : ${name.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} 
    Email : ${email}
    Number : ${number}
    Message : ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.json({ msg: "Message Sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error sending email" });
  }
});

module.exports = { sendEmail };