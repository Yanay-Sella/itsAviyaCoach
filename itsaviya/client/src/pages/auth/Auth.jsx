import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CircularProgress from "@mui/material/CircularProgress";

import "../../index.css";

import useAuth from "../../hooks/useAuth";

import axios from "../../api/axios.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

import Verification from "./Verification";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";

const Auth = ({ open, handleClose }) => {
  const { setAuth, auth } = useAuth();

  const urlLogIn = process.env.REACT_APP_SERVER_URL + "user/login";
  const urlSignUp = process.env.REACT_APP_SERVER_URL + "user/signup";

  const [signUp, setSignUp] = useState(false);

  //user info
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(auth?.email ? auth.email : "");
  const [password, setPassword] = useState("");

  //animation stuff
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [errorSignUpMsg, setErrorSignUpMsg] = useState(
    "פרטי משתמש לא תקינים, נסי שוב!"
  );

  //settings
  const [verified, setVerified] = useState(true);
  const [code, setCode] = useState("");
  const [wrongCode, setWrongCode] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [changePass, setChangePass] = useState(false);

  //validation
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //email
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // at least 8 characters and must include a-z,A-Z,0-9

  const [isValidEmail, setIsValidEmail] = useState(emailPattern.test(email));
  const [isValidPassword, setIsValidPassword] = useState(
    passwordPattern.test(password)
  );
  const [isValidUN, setIsValidUN] = useState(userName.length >= 3);

  const [isAttempted, setIsAttempted] = useState(false);

  useEffect(() => {
    setIsValidEmail(emailPattern.test(email));
  }, [email]);
  useEffect(() => {
    setIsValidPassword(passwordPattern.test(password));
  }, [password]);
  useEffect(() => {
    setIsValidUN(userName.length >= 3);
  }, [userName]);

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

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {isLoading ? (
          <div
            className={`w-80 h-80 bg-primary p-3 text-xl flex justify-center items-center text-thirdy`}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-4xl" />
                {signUp ? (
                  <div className="hebText text-center">
                    <p className="text-2xl">נרשמת בהצלחה!</p>
                    <p className="text-xl">יש להתחבר כעת...</p>
                  </div>
                ) : (
                  //log in
                  <p className="text-2xl">התחברת בהצלחה!</p>
                )}
              </div>
            ) : isFail ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircleXmark} className="text-4xl" />
                {signUp ? (
                  <h1>{errorSignUpMsg}</h1>
                ) : (
                  //log in
                  <h1>פרטי הזדהות שגויים, נסי שוב</h1>
                )}
              </div>
            ) : (
              <CircularProgress color="info" />
            )}
          </div>
        ) : (
          //regular sign up/in page
          <form
            className={`md:w-96 w-80 bg-primary p-3 text-xl`}
            onSubmit={
              verified ? (signUp ? handleSignUp : handleLogIn) : sendVeriCode
            }
          >
            <h1 className="text-thirdy">
              {signUp
                ? "הרשמה"
                : `${
                    auth?.userName
                      ? `היי ${auth.userName}! אנא בצעי אימות מחדש`
                      : "התחברות"
                  }`}
            </h1>
            {verified ? (
              !forgot ? (
                <div>
                  <DialogContent dir="rtl">
                    {/* userName input, only on sign up */}
                    {signUp && (
                      <TextField
                        error={isAttempted && !isValidUN}
                        color="info"
                        dir="ltr"
                        autoFocus
                        margin="dense"
                        label={`${
                          isAttempted && !isValidUN ? "*" : ""
                        } שם משתמש`}
                        helperText={`שם משתמש חייב לכלול לפחות 3 תווים`}
                        type="text"
                        fullWidth
                        variant="standard"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                    )}
                    {/* email input */}
                    <TextField
                      error={isAttempted && !isValidEmail}
                      color="info"
                      dir="ltr"
                      autoFocus
                      margin="dense"
                      label={`${
                        isAttempted && !isValidEmail ? "*" : ""
                      } אימייל`}
                      helperText={
                        isAttempted
                          ? !isValidEmail
                            ? "אימייל לא תקין!"
                            : "אימייל תקין!"
                          : "אנא הזיני אימייל חוקי"
                      }
                      type="email"
                      fullWidth
                      variant="standard"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    {/* password input */}
                    <TextField
                      error={isAttempted && !isValidPassword}
                      color="info"
                      dir="ltr"
                      margin="dense"
                      label={`${
                        isAttempted && !isValidPassword ? "*" : ""
                      } סיסמא`}
                      helperText={
                        signUp
                          ? !isValidPassword
                            ? "הסיסמא צריכה לכלול לפחות אות לטינית גדולה, קטנה ומספר"
                            : "סיסמא מהממת!! לא נספר לאף אחד 😜"
                          : !isValidPassword
                          ? "הסיסמא צריכה לכלול לפחות אות לטינית גדולה, קטנה ומספר"
                          : "סיסמא תקינה!"
                      }
                      type="password"
                      fullWidth
                      variant="standard"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    <div className="mt-4 text-lg text-thirdy">
                      {signUp ? (
                        <div>
                          רשומה כבר לאתר? התחברי{" "}
                          <span
                            onClick={() => {
                              setSignUp(false);
                            }}
                            className="hover:underline text-secondary hover:cursor-pointer"
                          >
                            כאן
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <div>
                            אין לך משתמש? הירשמי{" "}
                            <span
                              onClick={() => {
                                setSignUp(true);
                              }}
                              className="hover:underline text-secondary hover:cursor-pointer"
                            >
                              כאן
                            </span>
                          </div>
                          <div className="text-sm">
                            שכחת סיסמא? לחצי{" "}
                            <span
                              onClick={() => {
                                setForgot(true);
                              }}
                              className="hover:underline text-secondary hover:cursor-pointer"
                            >
                              כאן
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogContent>

                  <DialogActions>
                    <Button onClick={handleClose}>
                      <p className="text-thirdy">ביטול</p>
                    </Button>
                    <Button onClick={signUp ? handleSignUp : handleLogIn}>
                      <p className="text-thirdy">
                        {signUp ? "הרשמה" : "התחברות"}
                      </p>
                    </Button>
                  </DialogActions>
                </div>
              ) : changePass ? (
                <ChangePassword email={email} handleClose={handleClose} />
              ) : (
                <ForgotPassword
                  email={email}
                  setEmail={setEmail}
                  handleClose={handleClose}
                  setForgot={setForgot}
                  setChangePass={setChangePass}
                />
              )
            ) : (
              <Verification
                email={email}
                code={code}
                setCode={setCode}
                wrongCode={wrongCode}
                sendVeriCode={sendVeriCode}
              />
            )}
            <input type="submit" hidden />
          </form>
        )}
      </Dialog>
    </div>
  );
};

export default Auth;
