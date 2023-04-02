import React from "react";
import logo from "../images/aviyaLogo2Small.png";
import FootLink from "./FootLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

//custom hooks
import useAuth from "../../hooks/useAuth";

const Footer = () => {
  const { isLogged, setOpenAuth } = useAuth();

  return (
    <div className="flex justify-between items-center self-stretch py-14 md:px-0 px-5 max-w-7xl">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" className="h-28 w-28" />
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.tiktok.com/@aviyafit"
            className="transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="https://www.instagram.com/itsaviyacoach/"
            className="transition-all hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="transition-all hover:scale-110">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-between self-stretch ">
        <h1 className="text-xl">Header</h1>
        {isLogged ? (
          <FootLink text={`להתנתק`} size="md" />
        ) : (
          <FootLink text={`להתחבר`} size="md" action={setOpenAuth} />
        )}
        <FootLink text="contact" to="#" size="md" />
      </section>

      <section className="flex flex-col justify-between self-stretch">
        <h1 className="text-xl">Header</h1>
        <FootLink text="contact" to="#" size="md" />
        <FootLink text="contact" to="#" size="md" />
      </section>
    </div>
  );
};

export default Footer;
