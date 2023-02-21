import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Auth = ({ open, handleClose }) => {
  const [signUp, setSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const urlLogIn = process.env.REACT_APP_SERVER_URL + "user/login";
  const urlSignUp = process.env.REACT_APP_SERVER_URL + "user/signup";

  const handleSignUp = async () => {
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
    handleClose();
  };

  const handleLogIn = async () => {
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
    } catch (error) {
      console.log(error);
    }
    handleClose();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <div className="w-96 bg-primary p-3 text-xl">
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
      </Dialog>
    </div>
  );
};

export default Auth;
