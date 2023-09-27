const { User } = require("../../models/userModel.js");
const { transporter } = require("./email.js");

const sendVeriCode = async (req, res) => {
  let { email } = req.body;
  email = email.toLowerCase();

  const code = Math.floor(Math.random() * (9999 - 1000) + 1000);

  try {
    const foundUser = await User.findOne({ email });
    if (foundUser.verified === true)
      return res.status(404).json({ message: "user already verified" });
    foundUser.code = code; // setting the user's code to the generated code
    await foundUser.save();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "server error, check your input please" });
  }

  const mailOptionsVerify = {
    from: "testkipi233@gmail.com",
    to: `${email}`,
    subject: "קוד זיהוי חשבון קיפי!",
    html: `<div dir="rtl">
      <h1>תודה שנרשמת לאתר שלי 🥰</h1>
      <p>באופן חד פעמי על מנת לאמת את כתובת המייל שלך נדרש לבצע אימות.</p>
      </br>
      <p>יש להזין את הקוד הנ"ל בשדה המתאים לו בחלון ההתחברות לאתר</p>
      <h2>${code}</h2>
    </div>`,
  };

  //sending this code to the user if there were no errors
  transporter.sendMail(mailOptionsVerify, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return res
        .status(428)
        .json({ message: "need to verify with email code" });
    }
  });
};

const handleVefiry = async (req, res) => {
  let { email, code } = req.body;
  email = email.toLowerCase();

  //checking code validity
  if (!code || code === null)
    return res.status(404).json({ message: "code not valid" });

  try {
    const foundUser = await User.findOne({ email });
    if (foundUser.code.toString() !== code) {
      console.log(`wrong code by ${email}`);
      return res.status(404).json({ message: "wrong code" });
    }
    foundUser.verified = true; // now user is verified
    foundUser.code = null;
    await foundUser.save();
    console.log(`user ${foundUser.userName} is now verified`);
    return res.status(200).json({ message: "user now verified :)" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendVeriCode, handleVefiry };
