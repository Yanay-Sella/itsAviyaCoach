const bcrypt = require("bcryptjs");
const { transporter } = require("./email.js");
const { User } = require("../../models/userModel.js");

const sendVerifyForgot = async (req, res) => {
  let { email } = req.body;
  if (!email) return res.status(400).json({ message: "no input provided" });
  email = email.toLowerCase();

  const code = Math.floor(Math.random() * (9999 - 1000) + 1000);

  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser)
      return res
        .status(404)
        .json({ message: "user does not exist, please log in" });
    foundUser.code = code; // attaching the code to the user
    await foundUser.save();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "server error, check your input please" });
  }

  const mailOptionsForgot = {
    from: "testkipi233@gmail.com",
    to: `${email}`,
    subject: "קוד זיהוי לשינוי סיסמא",
    html: `<div dir="rtl">
      <h1>שכחת את הסיסמא? 😔</h1>
      <p>לא נורא! זה לא סוף העולם!</p>
      </br>
      <p>על מנת לאמת את זהותך, הזיני את הקוד הנ"ל בשדה המתאים ביחד עם הסיסמא החדשה שלך!</p>
      </br>
      <p>שאותה כמובן, לא תשכחי 😉</p>
      <h2>${code}</h2>
    </div>`,
  };

  //sending this code to the user if there were no errors
  transporter.sendMail(mailOptionsForgot, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return res
        .status(200) //Ok, need to pick password (not error)
        .json({ message: "need to verify with email code" });
    }
  });
};

const changePassword = async (req, res) => {
  let { email, password, code } = req.body;
  if (!email || !password || !code)
    return res.status(400).json({ message: "no input provided" });
  email = email.toLowerCase();
  console.log(`changing password to ${email}`);

  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      console.log(`user with email ${email} not found!`);
      return res.status(404).json({ message: "user not found" });
    }
    if (!foundUser.code || code.toString() !== foundUser.code.toString()) {
      console.log("wrong code!!");
      return res.status(400).json({ message: "wrong verification code" });
    }

    //code valid, creating new password
    let hashedPassword;
    hashedPassword = await bcrypt.hash(password, 14); //hashing the password

    //changing password to the user and saving
    foundUser.password = hashedPassword;
    await foundUser.save();
    return res.status(200).json({ message: "password changed!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "server error, please check your input" });
  }
};

module.exports = {
  sendVerifyForgot,
  changePassword,
};
