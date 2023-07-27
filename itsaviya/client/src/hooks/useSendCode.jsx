import { useState } from "react";
import axios from "../api/axios.js";

const useSendCode = (
  email,
  password,
  password2,
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
  const resetPassword = async () => {
    setIsLoading(true);
    if (password !== password2) {
      //passwords should match message
      return;
    }
    try {
      const response = await axios.post("/user/password", {
        email,
        password,
        password2,
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
      //TODO: add animation and message
      const response = { error };
      if (response.status === 404) {
        setForgot(false);
        setSignUp(true);
      }
      if (response.status === 500) {
        //server error
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
