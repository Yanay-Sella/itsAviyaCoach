import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// components
import NavBtn from "./NavBtn.jsx";
import Auth from "../../pages/auth/Auth";
import Logo from "../images/onlyHedge.png";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

// custom hooks
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { context } = useAuth();
  const {
    isLogged,
    auth,
    openAuth,
    setOpenAuth,
    handleLogOut,
    isLoadingLogOut,
  } = context;

  const url = useLocation().pathname;
  const isHome = url === "/home";

  // const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const handleClickOpen = () => {
    setOpenAuth(true);
  };
  const handleClose = () => {
    setOpenAuth(false);
  };

  //user info snack bar
  const openTheSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    setOpenSnack(false);
  };

  const getUserInfo = async () => {
    openTheSnack();
  };

  return (
    <div className="flex items-center self-stretch bg-primary h-22 justify-around md:px-20 mb-2 pt-2 fixed top-0 left-0 right-0 z-10 gap-5 shadow-xl">
      <div className="flex flex-wrap md:gap-14 gap-5">
        <div dir="rtl">
          {/* TODO: use different popup */}
          <Snackbar
            color="info"
            open={openSnack}
            autoHideDuration={4000}
            onClose={handleCloseSnack}
            message={`אימייל: ${auth.email} שם משתמש: ${auth.userName}`}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
          {isLogged ? (
            !isLoadingLogOut ? (
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
              <CircularProgress color="info" size={32} />
            )
          ) : (
            <div onClick={handleClickOpen}>
              <NavBtn text={"להתחבר"} size="lg" key={"logIn"} />
            </div>
          )}
          <Auth open={openAuth} handleClose={handleClose} key={openAuth} />
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

      <div className="transition-all hover:scale-105 hover:cursor-pointer">
        {isHome ? (
          <a href="/home">
            <img
              src={Logo}
              alt="logo"
              className="md:w-24 w-32 justify-self-start"
            />
          </a>
        ) : (
          <Link to="/home">
            {/* maybe use an svg? */}
            <img
              src={Logo}
              alt="logo"
              className="md:w-24 w-32 justify-self-start"
            />
          </Link>
        )}
      </div>

      <div className="flex flex-wrap md:gap-14 gap-5 justify-end">
        <NavBtn text="בלוג" to="/blog" size="lg" key={"blog"} />
        <NavBtn
          text="צרי קשר"
          // to="https://api.whatsapp.com/message/DUMPMY75L6YRC1?autoload=1&app_absent=0"
          size="lg"
          newTab={true}
          key={"contact"}
        />
      </div>
    </div>
  );
};

export default NavBar;
