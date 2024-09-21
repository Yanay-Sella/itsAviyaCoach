import React from "react";
import FadeSection from "../../../general/FadeSection.jsx";

const Sale = () => {
  return (
    <div
      className="flex flex-col justify-between items-center bg-secondary py-6 gap-6 text-white self-center"
      style={{ width: "99vw" }}
    >
      <div className="flex flex-col shrink items-center gap-4">
        <p className="md:text-lg text-md mb-2 text-center">
          אז למה את מחכה? הצטרפי אליי
        </p>

        <FadeSection
          children={
            <p className="md:text-5xl text-4xl text-center">
              אימון אישי <span className="header2">חינם</span>
            </p>
          }
          isDelay={false}
          isShort={true}
        />

        <p className="md:text-xl text-lg text-center">
          התחילי את המסע שלך ותהפכי לגרסא הטובה ביותר{" "}
          <span className="header2">שלך</span>, איתי
        </p>
      </div>

      <a target="_blank" href="https://wa.link/uymtt4">
        <div className="flex items-center p-3 border-2 border-white rounded-full w-30 h-10 hover:cursor-pointer transition-all  hover:-translate-y-0.7 hover:scale-105">
          <p>צרי קשר</p>
        </div>
      </a>
    </div>
  );
};

export default Sale;
