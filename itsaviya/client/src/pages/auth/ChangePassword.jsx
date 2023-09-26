import React from "react";
import { useState } from "react";

import DialogContent from "@mui/material/DialogContent";
import { TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import useValidate from "../../hooks/useValidate";

import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const ChangePassword = ({
  password,
  setPassword,
  handleClose,
  resetPassword,
  code,
  setCode,
  isAttempted,
}) => {
  const { isValidPassword } = useValidate(undefined, password, undefined);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          error={isAttempted && !isValidPassword}
          dir="ltr"
          margin="dense"
          label={`${isAttempted && !isValidPassword ? "*" : ""} סיסמא חדשה`}
          helperText={`${
            !isValidPassword
              ? "הסיסמא צריכה לכלול לפחות אות לטינית גדולה, קטנה ומספר"
              : "סיסמא מהממת! לא לשכוח אותה הפעם 😉 "
          }`}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="הצג סיסמא"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
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
