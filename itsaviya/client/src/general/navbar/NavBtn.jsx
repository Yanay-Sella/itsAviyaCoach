import React from "react";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

const NavBtn = ({ text, to, size, dropdown, dropdownArr, newTab }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      className={`flex justify-center self-center align-center rounded-full text-center hover:underline hover:cursor-pointer dropdown text-${size} md:w-20 w-32`}
      onMouseOver={() => {
        setChecked(true);
      }}
      onMouseLeave={() => {
        setChecked(false);
      }}
    >
      {to ? (
        newTab ? (
          <a
            href={`${to}`}
            target="_blank"
            className="text-center"
          >{`${text}`}</a>
        ) : (
          <Link to={`${to}`} className="text-center">{`${text}`}</Link>
        )
      ) : (
        <div className="text-center">{`${text}`}</div>
      )}
      {dropdown && (
        <Fade in={checked}>
          <div className="dropdown-content bg-secondary rounded-md">
            <div className="flex flex-col gap-2 py-2 justify-around">
              {dropdownArr.map((e) => {
                return (
                  <div
                    className="hover:bg-fourthy"
                    onClick={e.action}
                    key={e.hebName}
                  >
                    {e.link ? (
                      <a className="mx-3" href={`#${e.link}`}>
                        {e.hebName}
                      </a>
                    ) : (
                      <p className="mx-3">{e.hebName}</p>
                    )}
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
