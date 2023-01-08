import React from "react";
import NavBtn from "./NavBtn.jsx";
import Logo from "./../../images/aviyaLogo.png";

const NavBar = () => {
  return (
    <div className="flex items-center self-stretch bg-secondary h-28 justify-around px-20 fixed top-0 left-0 right-0 z-10 gap-5">
      <div className="flex flex-wrap md:gap-14 gap-5">
        <NavBtn text="About" to="#about" size="lg" />
        <NavBtn text="Plans" to="#plans" size="lg" />
      </div>

      <img src={Logo} alt="" className="h-28 w-28 justify-self-start" />

      <div className="flex flex-wrap md:gap-14 gap-5 justify-end">
        <NavBtn text="Blog" to="#" size="lg" />
        <NavBtn text="Contact" to="#" size="lg" />
      </div>
    </div>
  );
};

export default NavBar;
