const validate = (email, password, userName) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //email
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // at least 8 characters and must include a-z,A-Z,0-9

  const isValidPassword = passwordPattern.test(password);
  const isValidEmail = emailPattern.test(email);

  let isValidUserName = true;
  if (userName) {
    isValidUserName = userName.length >= 3;
  }

  if (!isValidPassword || !isValidEmail || !isValidUserName) return false;
  return true;
};

module.exports = { validate };
