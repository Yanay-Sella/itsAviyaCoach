import React from "react";
import "../../../../../index.css";

import BtnAvi from "../../../../../general/BtnAvi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMoneyBill1,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

const PlanCard = ({ header, youGet, youGive, time, frontText }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-primary rounded-lg">
          <p className="text-3xl mt-4">{frontText}</p>
        </div>
        <div className="flip-card-back bg-blue-300 flex flex-col justify-between items-center rounded-lg py-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl w-full">{header}</h1>
            <div className="flex flex-col items-start gap-3 self-center">
              <div className="flex items-center self-stretch gap-2 text-lg">
                <FontAwesomeIcon icon={faDumbbell} className="w-7" />
                <p>{youGet}</p>
              </div>

              <div className="flex items-center self-stretch gap-2 text-lg">
                <FontAwesomeIcon icon={faMoneyBill1} className="w-7" />
                <div className="">
                  <p>{youGive}</p>
                </div>
              </div>

              <div className="flex items-center self-stretch gap-2 text-lg">
                <FontAwesomeIcon icon={faHourglassHalf} className="w-7" />
                <div className="">
                  <p>{time}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-end mb-3">
            <BtnAvi text="Get deal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
