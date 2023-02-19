import React, { useEffect } from "react";

import Logo from "../images/aviyaLogo2Small.png";
import { useLocation } from "react-router-dom";

import NavBtn from "./NavBtn.jsx";
import Auth from "../../pages/auth/Auth";

const NavBar = () => {
  const url = useLocation().pathname;
  const isHome = url === "/home";
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center self-stretch bg-primary h-22 justify-around px-20 fixed top-0 left-0 right-0 z-10 gap-5">
      <div className="flex flex-wrap md:gap-14 gap-5">
        <div>
          <div onClick={handleClickOpen}>
            <NavBtn text="להתחבר" size="lg" key={"להתחבר"} />
          </div>
          <Auth open={open} handleClose={handleClose} key={open} />
        </div>
        <NavBtn
          text="אימונים"
          to={`${isHome ? "#" : "/home#personal"}`}
          size="lg"
          dropdown={isHome}
          dropdownArr={[
            { name: "personal", hebName: "אישיים" },
            { name: "group", hebName: "קבוצתיים" },
          ]}
          key={"אימונים"}
        />
      </div>

      <div
        className="transition-all hover:scale-105"
        onClick={async () => {
          await fetch(process.env.REACT_APP_SERVER_URL + "user/refresh");
        }}
      >
        {/* <a href="/home"> */}
        <img src={Logo} alt="" className="h-28 w-28 justify-self-start" />
        {/* </a> */}
      </div>

      <div className="flex flex-wrap md:gap-14 gap-5 justify-end">
        <NavBtn text="בלוג" to="/blog" size="lg" key={"בלוג"} />
        <NavBtn
          text="צרי קשר"
          to="https://api.whatsapp.com/message/DUMPMY75L6YRC1?autoload=1&app_absent=0"
          size="lg"
          newTab={true}
          key={"צרי קשר"}
        />
      </div>
    </div>
  );
};

export default NavBar;
