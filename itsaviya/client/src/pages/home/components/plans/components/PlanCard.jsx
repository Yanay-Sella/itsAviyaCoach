import React from "react";
import "../../../../../index.css";

import BtnAvi from "../../../../../general/BtnAvi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMoneyBill1,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const PlanCard = ({ header, youGet, youGive, time, frontText, link }) => {
  return (
    <div className="flip-card shrink">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-secondary rounded-lg shadow-md">
          <p className="text-3xl mt-4">{frontText}</p>
        </div>
        <div className="flip-card-back bg-white flex flex-col justify-between items-center rounded-lg py-2 shadow-md">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl w-full">{header}</h1>
            <div className="flex flex-col items-end gap-3 self-center">
              <div className="flex items-center gap-2 text-lg">
                <p>{youGet}</p>
                <FontAwesomeIcon icon={faDumbbell} className="w-7" />
              </div>

              <div className="flex items-center gap-2 text-lg">
                <p>{youGive}</p>
                <FontAwesomeIcon icon={faMoneyBill1} className="w-7" />
              </div>

              <div className="flex items-center gap-2 text-lg">
                <p>{time}</p>
                <FontAwesomeIcon icon={faHourglassHalf} className="w-7" />
              </div>
            </div>
          </div>
          <div className="justify-self-end mb-3">
            <a href={`${link}`} target="_blank" rel="noreferrer">
              <BtnAvi text="אני אקח את זה" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
