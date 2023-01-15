import React from "react";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";

const NavBtn = ({ text, to, size, dropdown, dropdownArr, newTab }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      className={`flex justify-center align-center rounded-full text-center hover:underline dropdown text-${size}`}
      onMouseOver={() => {
        setChecked(true);
      }}
      onMouseLeave={() => {
        setChecked(false);
      }}
    >
      <a
        href={`${to}`}
        target={`${newTab ? "_blank" : ""}`}
        className="text-center"
      >{`${text}`}</a>
      {dropdown && (
        <Fade in={checked}>
          <div className="dropdown-content bg-secondary rounded-md">
            <div className="flex flex-col gap-2 py-2 justify-around">
              {dropdownArr.map((e) => {
                return (
                  <div className="hover:bg-fourthy">
                    <a className="mx-3" href={`#${e.name}`}>
                      {e.hebName}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default NavBtn;
