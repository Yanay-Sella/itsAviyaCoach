import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// components
import NavBtn from "./NavBtn.jsx";
import Auth from "../../pages/auth/Auth";
import Logo from "../images/aviyaLogo2Small.png";
import Snackbar from "@mui/material/Snackbar";

// custom hooks
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios.js";
import UseAxiosPrivate from "../../hooks/useAxiosPrivate.jsx";

const NavBar = () => {
  const { isLogged, setAuth, auth } = useAuth();
  const axiosPrivate = UseAxiosPrivate();
  const url = useLocation().pathname;
  const isHome = url === "/home";

  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "please log in",
    userName: undefined,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //user info snack bar
  const openTheSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    setOpenSnack(false);
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

  const getUserInfo = async () => {
    let response;
    if (!auth) {
      // try {
      //   response = await axiosPrivate.get("user/");
      //   console.log(response);
      // } catch (error) {
      //   console.log(error);
      // }
      // if (response.statusText !== "OK") return;
      // setUserInfo({ ...response.data });
    }
    openTheSnack();
  };

  return (
    <div className="flex items-center self-stretch bg-primary h-22 justify-around px-20 fixed top-0 left-0 right-0 z-10 gap-5">
      <div className="flex flex-wrap md:gap-14 gap-5">
        <div>
          <Snackbar
            color="info"
            open={openSnack}
            autoHideDuration={4000}
            onClose={handleCloseSnack}
            message={`אימייל: ${auth.email} שם משתמש: ${auth.userName}`}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
          {isLogged ? (
            <div dir="rtl">
              <NavBtn
                text={`שלום ${auth.userName}!`}
                size="lg"
                dropdown={true}
                dropdownArr={[
                  { hebName: "מידע", action: getUserInfo },
                  { hebName: "להתנתק", action: handleLogOut },
                ]}
                key={"user"}
              />
            </div>
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
