import React, { useState, useEffect } from "react";
import useValidate from "../../hooks/useValidate";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";

import "../../index.css";

import useAuth from "../../hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

import Verification from "./Verification";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import useSendCode from "../../hooks/useSendCode";

const Auth = ({ open, handleClose }) => {
  const [signUp, setSignUp] = useState(false);

  //user info
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //animation stuff
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isFail, setIsFail] = useState(false);

  //settings
  const [errorSignUpMsg, setErrorSignUpMsg] = useState(
    "פרטי משתמש לא תקינים, נסי שוב!"
  );
  const [errorLogInMsg, setErrorLogInMsg] = useState(
    `אופס, קרתה שגיאה, נסי שנית!`
  );

  const [forgot, setForgot] = useState(false);
  const [changePass, setChangePass] = useState(false);
  const [password2, setPassword2] = useState();

  const { isValidEmail, isValidPassword, isValidUN } = useValidate(
    email,
    password,
    userName
  );
  const { handleLogIn, handleSignUp, context, isAttempted, verified } = useAuth(
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
  );
  const { auth } = context;

  const {
    sendVeriCode,
    getForgotCode,
    resetPassword,
    code,
    setCode,
    wrongCode,
  } = useSendCode(
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
  );

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
                    <p className="text-2xl">{successMsg}</p>
                    <p className="text-xl">יש להתחבר כעת...</p>
                  </div>
                ) : (
                  //log in
                  <p className="text-2xl">{successMsg}</p>
                )}
              </div>
            ) : isFail ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircleXmark} className="text-4xl" />
                {signUp ? (
                  <h1>{errorSignUpMsg}</h1>
                ) : (
                  //log in
                  <h1>{errorLogInMsg}</h1>
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
              forgot
                ? getForgotCode
                : verified
                ? signUp
                  ? handleSignUp
                  : handleLogIn
                : sendVeriCode
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
                <ChangePassword
                  email={email}
                  handleClose={handleClose}
                  password={password}
                  setPassword={setPassword}
                  password2={password2}
                  setPassword2={setPassword2}
                  code={code}
                  setCode={setCode}
                  resetPassword={resetPassword}
                />
              ) : (
                <ForgotPassword
                  email={email}
                  setEmail={setEmail}
                  handleClose={handleClose}
                  setForgot={setForgot}
                  getForgotCode={getForgotCode}
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
