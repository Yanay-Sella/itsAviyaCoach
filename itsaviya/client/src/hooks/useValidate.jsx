import React from "react";
import { useState, useEffect } from "react";

const useValidate = (email, password, userName) => {
  //validation
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //email
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // at least 8 characters and must include a-z,A-Z,0-9

  const [isValidEmail, setIsValidEmail] = useState(emailPattern.test(email));
  const [isValidPassword, setIsValidPassword] = useState(
    passwordPattern.test(password)
  );
  const [isValidUN, setIsValidUN] = useState(userName.length >= 3);

  useEffect(() => {
    setIsValidEmail(emailPattern.test(email));
  }, [email]);
  useEffect(() => {
    setIsValidPassword(passwordPattern.test(password));
  }, [password]);
  useEffect(() => {
    setIsValidUN(userName.length >= 3);
  }, [userName]);

  return { isValidEmail, isValidPassword, isValidUN };
};

export default useValidate;
