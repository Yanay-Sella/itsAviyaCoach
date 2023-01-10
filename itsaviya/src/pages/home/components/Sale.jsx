import React from "react";

const Sale = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-secondary py-6 gap-6 text-white w-screen self-center">
      <div className="flex flex-col items-center gap-4">
        <p className="md:text-lg text-md mb-2 text-center">
          אז למה את מחכה? הצטרפי אליי
        </p>
        <p className="md:text-5xl text-4xl text-center">
          אימון אישי <span className="header2">חינם</span>
        </p>
        <p className="md:text-xl text-lg text-center">
          התחילי את המסע שלך ותהפכי לגרסא הטובה ביותר{" "}
          <span className="header2">שלך</span>, איתי
        </p>
      </div>

      <div className="flex items-center p-3 border-2 border-white rounded-full w-30 h-10 hover:cursor-pointer transition-all  hover:-translate-y-0.7 hover:scale-105">
        <p>צרי קשר</p>
      </div>
    </div>
  );
};

export default Sale;
