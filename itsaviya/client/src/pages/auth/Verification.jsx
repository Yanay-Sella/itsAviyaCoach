import React from "react";

import DialogContent from "@mui/material/DialogContent";

const Verification = ({ email, code, setCode, wrongCode, sendVeriCode }) => {
  return (
    <div>
      <DialogContent>
        <div className="flex flex-col items-center gap-3 text-thirdy">
          <p className="text-2xl text-center">משתמש לא אומת!</p>
          <p className="text-lg text-center">
            דרוש אימות חד פעמי, יש להזין קוד בעל 4 ספרות שהתקבל בכתובת מייל{" "}
            {email.toLowerCase()}
          </p>

          <input
            type="text"
            className="text-center border border-thirdy rounded-full py-2"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <div
            className="flex items-center bg-secondary p-3 border-2 border-secondary text-white rounded-full w-30 h-10 hover:cursor-pointer transition-all  hover:drop-shadow-md"
            onClick={sendVeriCode}
          >
            <p>שלחי קוד</p>
          </div>
          {wrongCode && (
            <p className="text-sm text-red-600">
              קוד אימות לא תקין, יש להזין את הקוד שהתקבל במייל
            </p>
          )}
        </div>
      </DialogContent>
    </div>
  );
};

export default Verification;
