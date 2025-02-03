const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
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
    Name :${name} 
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