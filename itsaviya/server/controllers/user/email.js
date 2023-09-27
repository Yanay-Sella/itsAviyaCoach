const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testkipi233@gmail.com",
    pass: "gbbipumuvknsnljw",
  },
});

module.exports = { transporter };
