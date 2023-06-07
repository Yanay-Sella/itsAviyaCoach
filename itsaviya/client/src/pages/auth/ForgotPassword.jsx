import React from "react";

import DialogContent from "@mui/material/DialogContent";
import { TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const ForgotPassword = ({ email, setEmail, isValidEmail, handleClose }) => {
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
              onClick={() => {}}
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
        <Button onClick={() => {}}>
          <p className="text-thirdy">{"אפסי סיסמא"}</p>
        </Button>
      </DialogActions>
    </div>
  );
};

export default ForgotPassword;
