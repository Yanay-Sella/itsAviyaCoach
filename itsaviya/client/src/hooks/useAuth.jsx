import { useContext, useState } from "react";
import React from "react";
import AuthContext from "../contexts/AuthProvider";
import useValidate from "./useValidate";

const useAuth = (
  userName,
  email,
  password,
  setIsLoading,
  setIsSuccess,
  setSignUp,
  setPassword,
  setIsFail,
  setUserName,
  setEmail,
  handleClose,
  setSuccessMsg,
  setErrorSignUpMsg,
  setErrorLogInMsg
) => {
  const urlLogIn = process.env.REACT_APP_SERVER_URL + "user/login";
  const urlSignUp = process.env.REACT_APP_SERVER_URL + "user/signup";

  const { isValidEmail, isValidPassword, isValidUN } = useValidate(
    email,
    password,
    userName
  );
  const context = useContext(AuthContext);
  const { setAuth, auth } = context;

  const [isAttempted, setIsAttempted] = useState(false);
  const [verified, setVerified] = useState(true);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isValidEmail || !isValidPassword || !isValidUN) {
      setIsAttempted(true);
      return;
    }
    setIsLoading(true);
    const user = { userName, email, password };
    try {
      const response = await fetch(urlSignUp, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      //animation
      if (response.ok) {
        setIsSuccess(true);
        setSuccessMsg("נרשמת בהצלחה!");
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(false);
          setSignUp(false);
          setIsAttempted(false);
          setPassword("");
        }, 1500);
      } else {
        setIsFail(true);

        if (response.status === 409) {
          const msg = await response.json();

          if (msg.entry === "userName") {
            setErrorSignUpMsg("שם משתמש תפוס 🙁 נסי אחד אחר");
            setUserName("");
          }
          if (msg.entry === "email") {
            setErrorSignUpMsg("כתובת מייל כבר בשימוש 📪");
            setEmail("");
          }
        } else {
          setErrorSignUpMsg("פרטי משתמש לא תקינים, נסי שוב!");
        }
        //animation
        setTimeout(() => {
          setIsLoading(false);
          setIsFail(false);
          setEmail("");
          setPassword("");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async (e) => {
    if (e) e.preventDefault();
    if (!isValidEmail || !isValidPassword) {
      setIsAttempted(true);
      return;
    }
    setIsLoading(true);
    const user = { email, password };

    try {
      const response = await fetch(urlLogIn, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });

      //some animation and cleaning values at the end
      if (response.ok) {
        const resUser = await response.json(); // the user object, contains: {id, username, email, accessToken}
        setAuth(resUser);
        setIsSuccess(true);
        setSuccessMsg("התחברת בהצלחה!");
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(false);
          handleClose();
        }, 1500);
      } else {
        if (response.status === 428) {
          setVerified(false);
          setIsLoading(false);
          return;
        }
        if (response.status === 404) {
          setErrorLogInMsg(`פרטי הזדהות שגויים, נסי שוב`);
        }
        setIsFail(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsFail(false);
          setEmail("");
          setPassword("");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogIn,
    handleSignUp,
    context,
    isAttempted,
    verified,
  };
};

export default useAuth;
