import React from "react";
import NavBtn from "./NavBtn.jsx";
import Logo from "../images/aviyaLogo2Small.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const url = useLocation().pathname;
  const isHome = url === "/home";
  return (
    <div className="flex items-center self-stretch bg-primary h-22 justify-around px-20 fixed top-0 left-0 right-0 z-10 gap-5">
      <div className="flex flex-wrap md:gap-14 gap-5">
        <NavBtn
          text="אודות"
          to={`${isHome ? "#about" : "/home#about"}`}
          size="lg"
        />
        <NavBtn
          text="אימונים"
          to={`${isHome ? "#" : "/home#personal"}`}
          size="lg"
          dropdown={isHome}
          dropdownArr={[
            { name: "personal", hebName: "אישיים" },
            { name: "group", hebName: "קבוצתיים" },
          ]}
        />
      </div>

      <div className="transition-all hover:scale-105">
        <a href="/home">
          <img src={Logo} alt="" className="h-28 w-28 justify-self-start" />
        </a>
      </div>

      <div className="flex flex-wrap md:gap-14 gap-5 justify-end">
        <NavBtn text="בלוג" to="/blog" size="lg" />
        <NavBtn
          text="צרי קשר"
          to="https://api.whatsapp.com/message/DUMPMY75L6YRC1?autoload=1&app_absent=0"
          size="lg"
          newTab={true}
        />
      </div>
    </div>
  );
};

export default NavBar;
