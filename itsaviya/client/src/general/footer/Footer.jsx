import React from "react";
import logo from "../images/onlyHedge.png";
import FootLink from "./FootLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CircularProgress from "@mui/material/CircularProgress";

//custom hooks
import useAuth from "../../hooks/useAuth";

const Footer = () => {
  const { context } = useAuth();
  const { isLogged, setOpenAuth, handleLogOut, isLoadingLogOut } = context;
  return (
    <div className="flex justify-between items-center self-stretch py-14 md:px-0 px-5 max-w-7xl">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-28" />
        <div className="flex gap-4 text-xl">
          <a
            href="#"
            className="transition-all hover:scale-110"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="#"
            className="transition-all hover:scale-110"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="transition-all hover:scale-110">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-between self-stretch items-end">
        <h1 className="text-xl font-semibold">משתמש</h1>
        {isLogged ? (
          !isLoadingLogOut ? (
            <FootLink text={`להתנתק`} size="md" action={handleLogOut} />
          ) : (
            <CircularProgress color="info" size={25} />
          )
        ) : (
          <FootLink text={`להתחבר`} size="md" action={setOpenAuth} />
        )}
        <FootLink text="מידע אישי" to="#" size="md" />
      </section>

      <section className="flex flex-col justify-between self-stretch items-end">
        <h1 className="text-xl font-semibold">כושר</h1>
        <FootLink
          text="צרי קשר"
          to="https://wa.link/uymtt4"
          size="md"
          newTab={true}
        />
        <FootLink text="בלוג" to="/blog" size="md" />
      </section>
    </div>
  );
};

export default Footer;
