import React from "react";
import "../../../../../index.css";

import BtnAvi from "../../../../../general/BtnAvi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMoneyBill1,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

const GroupCard = ({ header, youGet, youGive, time, frontText, link }) => {
  return (
    <div className="flip-card2 shrink">
      <div className="flip-card-inner2">
        <div className="flip-card-front2 bg-secondary rounded-lg shadow-lg">
          <p className="text-3xl mt-4">{frontText}</p>
        </div>
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
