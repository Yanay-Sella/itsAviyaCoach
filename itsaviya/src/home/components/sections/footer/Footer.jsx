import React from "react";
import NavBtn from "../../navbar/NavBtn";
import logo from "../../../images/aviyaLogo.png";
import FootLink from "./FootLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex justify-between items-center self-stretch py-14 md:px-0 px-5">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <div className="flex gap-4 text-xl">
          <a href="https://www.tiktok.com/@aviyafit">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com/itsaviyacoach/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </section>

      <section className="flex flex-col justify-between self-stretch ">
        <h1 className="text-xl">Header</h1>
        <FootLink text="contact" to="#" size="md" />
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
