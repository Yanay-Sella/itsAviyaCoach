import React from "react";
import { useState } from "react";

import DialogContent from "@mui/material/DialogContent";
import { TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import axios from "../../api/axios.js";

const ForgotPassword = ({
  email,
  setEmail,
  handleClose,
  setForgot,
  setSignUp,
  setChangePass,
  setIsLoading,
  setIsFail,
  setErrorLogInMsg,
}) => {
  const getMail = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("user/forgot", { email });
      if (response.status === 200) {
        setChangePass(true); // going to ChangePassword screen
      }
    } catch (error) {
      console.log(error);
      setIsFail(true);
      setErrorLogInMsg("משתמש לא קיים, אנא הירשמי");
      const res = error.response;
      if (res.status === 404) {
        setTimeout(() => {
          setSignUp(true); // go to sign up page
          setForgot(false);
          setIsFail(false);
          setIsLoading(false);
        }, 1500);
      }
    }
  };

  return (
    <div>
      <DialogContent dir="rtl">
        {/* email input */}
        <TextField
          color="info"
          dir="ltr"
          autoFocus
          margin="dense"
          label={`אימייל`}
          helperText={"אנא הזיני את כתובת המייל שלך"}
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <div className="mt-4 text-lg text-thirdy">
          <div>
            נזכרת בסיסמא? יופי! לחצי{" "}
            <span
              onClick={() => {
                setForgot(false);
              }}
              className="hover:underline text-secondary hover:cursor-pointer"
            >
              כאן
            </span>
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          <p className="text-thirdy">ביטול</p>
        </Button>
        <Button onClick={getMail}>
          <p className="text-thirdy">{"אפסי סיסמא"}</p>
        </Button>
      </DialogActions>
    </div>
  );
};

export default ForgotPassword;
