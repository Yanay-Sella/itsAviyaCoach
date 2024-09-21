import React from "react";
import FadeSection from "../../../general/FadeSection";

const Join = () => {
  return (
    <div
      className="flex flex-col justify-between items-center bg-secondary py-6 gap-6 text-white self-center"
      style={{ width: "99vw" }}
    >
      <div className="flex flex-col shrink items-center gap-4">
        <p className="text-lg mb-2"></p>
        <FadeSection
          children={
            <p
              className="md:text-6xl text-4xl text-center"
              style={{ maxWidth: "900px" }}
            >
              קשה לבחור? צרי קשר לייעוץ והתחילי להתמודד עם אתגרים פיזיים
              ומנטליים בשגרה שלך
            </p>
          }
          isShort={true}
        />

        <p className="md:text-xl text-md text-center">
          התחילי במסע יום-יומי, ביחד איתי
        </p>
      </div>

      <a
        // href="https://api.whatsapp.com/message/DUMPMY75L6YRC1?autoload=1&app_absent=0"
        target="_blank"
      >
        <div className="flex items-center p-3 border-2 border-white rounded-full w-30 h-10 hover:cursor-pointer transition-all  hover:-translate-y-0.7 hover:scale-105">
          <p>שרייני לי אימון</p>
        </div>
      </a>
    </div>
  );
};

export default Join;
