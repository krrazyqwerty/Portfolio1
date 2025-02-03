const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controller/contact");

router.post("/sendEmail", sendEmail);

module.exports = router;