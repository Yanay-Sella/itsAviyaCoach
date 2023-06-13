import React from "react";
import { useState } from "react";

import DialogContent from "@mui/material/DialogContent";
import { TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import axios from "../../api/axios.js";

const ChangePassword = ({ email, handleClose, setSignUp, setForgot }) => {
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [code, setCode] = useState();

  const resetPassword = async () => {
    if (password !== password2) {
      //passwords should match
      return;
    }
    const response = axios.post("/user/forgot", { email, password, password2 });
    if (response.status === 404) {
      setForgot(false);
      setSignUp(true);
    }
    if (response.status === 500) {
      //server error
    }
    if (response.ok) {
      //TODO: add animation
      handleClose();
    }
  };

  return (
    <div>
      <DialogContent dir="rtl">
        <p>{`נשלח אלייך ברגעים אלו קוד למייל, הזיני את הקוד ביחד עם הסיסמא על מנת לאפס אותה`}</p>
        <TextField
          color="info"
          dir="ltr"
          autoFocus
          margin="dense"
          label={`קוד אימות`}
          helperText={"הזיני את קוד האימות"}
          type="text"
          fullWidth
          variant="standard"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        {/* password input */}
        <TextField
          color="info"
          dir="ltr"
          autoFocus
          margin="dense"
          label={`סיסמא חדשה`}
          helperText={"הזיני סיסמא חדשה"}
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {/* password validation */}
        <TextField
          color="info"
          dir="ltr"
          autoFocus
          margin="dense"
          label={`אימות סיסמא חדשה`}
          helperText={"הזיני את הסיסמא שנית לצורך אימות"}
          type="password"
          fullWidth
          value={password2}
          variant="standard"
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          <p className="text-thirdy">ביטול</p>
        </Button>
        <Button onClick={resetPassword}>
          <p className="text-thirdy">{"אפסי סיסמא"}</p>
        </Button>
      </DialogActions>
    </div>
  );
};

export default ChangePassword;
