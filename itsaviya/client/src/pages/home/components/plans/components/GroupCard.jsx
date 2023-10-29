import React from "react";
import { useEffect, useState } from "react";
import "../../../../../index.css";

import BtnAvi from "../../../../../general/BtnAvi";
import useIntersect from "../../../../../hooks/useIntersect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMoneyBill1,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../../general/images/onlyHedge.png";

const GroupCard = ({
  header,
  youGet,
  youGive,
  time,
  frontText,
  link,
  delay,
}) => {
  const [isVisible, domRef] = useIntersect();
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    setTimeout(() => {
      setFlip(true);
    }, delay);
  }, [isVisible]);
  return (
    <div className="flip-card2 shrink" ref={domRef}>
      <div
        className="flip-card-inner2"
        style={!flip ? { transform: "rotateX(180deg)" } : null}
      >
        {/* card unrevealed */}
        <div className="flip-card-front2 bg-secondary rounded-lg shadow-lg flex flex-col items-center gap-5">
          <p className="text-3xl mt-4">{frontText}</p>
          <img src={logo} alt="logo" className="w-28 opacity-70" />
          {/* <div className="flex items-center">
            <img src={logo} alt="logo" className="w-16 opacity-70" />
            <img src={logo} alt="logo" className="w-24 opacity-70" />
            <img src={logo} alt="logo" className="w-16 opacity-70" />
          </div> */}
        </div>

        {/* card revealed */}
        <div className="flip-card-back2 bg-white flex flex-col justify-between items-center rounded-lg py-2 shadow-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl w-full">{header}</h1>
            <div className="flex flex-col items-end gap-3 self-center">
              <div className="flex items-center gap-2 text-lg">
                <p>{youGet}</p>
                <FontAwesomeIcon icon={faUsers} className="w-7" />
              </div>

              <div className="flex items-center gap-2 text-lg">
                <p>{youGive}</p>
                <FontAwesomeIcon icon={faMoneyBill1} className="w-7" />
              </div>
            </div>
          </div>
          <div className="justify-self-end mb-3">
            <a href={`${link}`} target="_blank" rel="noreferrer">
              <BtnAvi text="בא לנו את זה" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
