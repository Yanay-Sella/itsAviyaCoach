import { useState } from "react";
import axios from "../api/axios.js";

import useValidate from "./useValidate";

const useSendCode = (
  email,
  password,
  setIsLoading,
  handleLogIn,
  setChangePass,
  setIsFail,
  setErrorLogInMsg,
  setSignUp,
  setForgot,
  setIsSuccess,
  setSuccessMsg,
  setPassword
) => {
  const [code, setCode] = useState("");
  const [wrongCode, setWrongCode] = useState(false);

  const sendVeriCode = async (e) => {
    if (e) e.preventDefault();
    setWrongCode(false);
    setIsLoading(true);
    try {
      const response = await axios.post("user/verify", { email, code });
      if (response.status === 200) await handleLogIn();
    } catch (error) {
      if (error.response.status === 404) setWrongCode(true);
      console.log(error);
      if (error.response.status === 404) {
        setWrongCode(true);
      }
      setIsLoading(false);
    }
  };

  const getForgotCode = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("user/forgot", { email }); // attaching code to {email}
      if (response.status === 200) {
        setChangePass(true); // going to ChangePassword screen
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsFail(true);
      const res = error.response;

      if (res.status === 404) {
        setErrorLogInMsg("משתמש לא קיים, אנא הירשמי");
        setTimeout(() => {
          setSignUp(true); // go to sign up page
          setForgot(false);
          setIsFail(false);
          setIsLoading(false);
        }, 1500);
      } else {
        setErrorLogInMsg(`אופס! קרתה שגיאה, אנא נסי שנית...`);
        setTimeout(() => {
          setForgot(false);
          setIsFail(false);
          setIsLoading(false);
        }, 1500);
      }
    }
  };

  const resetPassword = async (e) => {
    if (e) e.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post("/user/password", {
        email,
        password,
        code,
      });

      if (response.status === 200) {
        setIsSuccess(true);
        setSuccessMsg("סיסמא שונתה בהצלחה");
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(false);
          //back to log in
          setForgot(false);
          setChangePass(false);
          setPassword("");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      const { response } = error;
      console.log(response);
      setIsFail(true);
      if (response.status === 400) {
        setErrorLogInMsg("קוד זיהוי שגוי, אנא בדקי את תיבת המייל");
        setTimeout(() => {
          setIsFail(false);
          setIsLoading(false);
        }, 1800);
      }
      if (response.status === 404) {
        setErrorLogInMsg("משתמש לא קיים, נסי שוב");
        setTimeout(() => {
          setForgot(false);
          setIsFail(false);
          setIsLoading(false);
        }, 1500);
      }
      if (response.status === 500) {
        setErrorLogInMsg("אופס קרתה שגיאה, נסי שוב");
        setTimeout(() => {
          setForgot(false);
          setIsFail(false);
          setIsLoading(false);
        }, 1500);
      }
    }
  };
  return {
    sendVeriCode,
    getForgotCode,
    resetPassword,
    code,
    setCode,
    wrongCode,
  };
};

export default useSendCode;
