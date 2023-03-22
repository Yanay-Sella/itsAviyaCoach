import React from "react";
import { useLocation } from "react-router-dom";

// components
import NavBtn from "./NavBtn.jsx";
import Auth from "../../pages/auth/Auth";
import Logo from "../images/aviyaLogo2Small.png";

// custom hooks
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios.js";

const NavBar = () => {
  const { isLogged, setAuth, userInfo } = useAuth();
  const url = useLocation().pathname;
  const isHome = url === "/home";
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogOut = async () => {
    try {
      //sending a logout request to clear the cookie and delete the AT from DB
      await axios.get("user/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
      return; // not clearing the auth if logout failed
    }
    setAuth({}); // clearing the auth state, also clears the local storage.
  };

  return (
    <div className="flex items-center self-stretch bg-primary h-22 justify-around px-20 fixed top-0 left-0 right-0 z-10 gap-5">
      <div className="flex flex-wrap md:gap-14 gap-5">
        <div>
          {isLogged ? (
            <NavBtn
              text="משתמש"
              size="lg"
              dropdown={true}
              dropdownArr={[
                { link: "info", hebName: "מידע" },
                { hebName: "להתנתק", action: handleLogOut },
              ]}
              key={"user"}
            />
          ) : (
            <div onClick={handleClickOpen}>
              <NavBtn text={"להתחבר"} size="lg" key={"logIn"} />
            </div>
          )}
          <Auth open={open} handleClose={handleClose} key={open} />
        </div>

        <NavBtn
          text="אימונים"
          to={`${isHome ? "#" : "/home#personal"}`}
          size="lg"
          dropdown={isHome}
          dropdownArr={[
            { link: "personal", hebName: "אישיים" },
            { link: "group", hebName: "קבוצתיים" },
          ]}
          key={"plans"}
        />
      </div>

      <div
        className="transition-all hover:scale-105 hover:cursor-pointer"
        // onClick={async () => {
        //   await axiosPrivate("test", { signal: AbortController.signal });
        // }}
      >
        <a href="/home">
          <img src={Logo} alt="" className="h-28 w-28 justify-self-start" />
        </a>
      </div>

      <div className="flex flex-wrap md:gap-14 gap-5 justify-end">
        <NavBtn text="בלוג" to="/blog" size="lg" key={"blog"} />
        <NavBtn
          text="צרי קשר"
          to="https://api.whatsapp.com/message/DUMPMY75L6YRC1?autoload=1&app_absent=0"
          size="lg"
          newTab={true}
          key={"contact"}
        />
      </div>
    </div>
  );
};

export default NavBar;
