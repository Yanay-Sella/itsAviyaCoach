import React from "react";
import NavBtn from "./NavBtn.jsx";
import Logo from "./../../images/aviyaLogo.png";

const NavBar = () => {
  return (
    <div className="flex items-center self-stretch bg-secondary h-16 justify-between">
      <div className="flex gap-2 basis-60">
        <NavBtn text="About" />
        <NavBtn text="Prices" />
      </div>
      <img src={Logo} alt="" className="h-14 w-14 justify-self-start" />

      <div className="flex gap-2 basis-60 justify-end">
        <NavBtn text="Blog" />
        <NavBtn text="Contact" />
      </div>
    </div>
  );
};

export default NavBar;
