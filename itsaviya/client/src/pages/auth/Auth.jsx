import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/AuthProvider";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CircularProgress from "@mui/material/CircularProgress";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

const Auth = ({ open, handleClose }) => {
  const { setAuth } = useContext(AuthContext);

  const [signUp, setSignUp] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);

  const urlLogIn = process.env.REACT_APP_SERVER_URL + "user/login";
  const urlSignUp = process.env.REACT_APP_SERVER_URL + "user/signup";

  useEffect(() => {
    console.log("succ: " + isSuccess);
  }, [isSuccess]);

  const handleSignUp = async () => {
    setIsLoading(true);
    const user = { userName, email, password };
    try {
      const response = await fetch(urlSignUp, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.log(error);
    }
    setUserName("");
    setEmail("");
    setPassword("");
    setIsLoading(false);
    handleClose();
  };

  const handleLogIn = async () => {
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

      const resData = await response.json();

      console.log(resData);

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(false);
          handleClose();
        }, 1500);
      } else {
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

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {isLoading ? (
          <div className="w-96 h-80 bg-primary p-3 text-xl flex justify-center items-center text-thirdy">
            {isSuccess ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-4xl" />
                <h1>התחברת בהצלחה!</h1>
              </div>
            ) : isFail ? (
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircleXmark} className="text-4xl" />
                <h1>פרטי הזדהות שגויים, נסי שוב</h1>
              </div>
            ) : (
              <CircularProgress color="info" />
            )}
          </div>
        ) : (
          <div className="w-96 h-80 bg-primary p-3 text-xl">
            <h1 className="text-thirdy">{signUp ? "הרשמה" : "התחברות"}</h1>
            <DialogContent dir="rtl">
              <DialogContentText></DialogContentText>
              {signUp && (
                <TextField
                  color="info"
                  dir="ltr"
                  autoFocus
                  margin="dense"
                  label="שם משתמש"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              )}
              <TextField
                color="info"
                dir="ltr"
                autoFocus
                margin="dense"
                label="אימייל"
                type="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                color="info"
                dir="ltr"
                margin="dense"
                label="סיסמא"
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
                )}
              </div>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>
                <p className="text-thirdy">ביטול</p>
              </Button>
              <Button onClick={signUp ? handleSignUp : handleLogIn}>
                <p className="text-thirdy">{signUp ? "הרשמה" : "התחברות"}</p>
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Auth;
