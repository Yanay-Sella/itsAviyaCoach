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

      <a
        target="_blank"
        href="https://wa.me/972533336864?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%94%2C%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%90%D7%99%D7%9E%D7%95%D7%9F%201%2B1%20%D7%9C%D7%9E%D7%A6%D7%98%D7%A8%D7%A4%D7%95%D7%AA%20%D7%97%D7%93%D7%A9%D7%95%D7%AA%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
      >
        <div className="flex items-center p-3 border-2 border-white rounded-full w-30 h-10 hover:cursor-pointer transition-all  hover:-translate-y-0.7 hover:scale-105">
          <p>צרי קשר</p>
        </div>
      </a>
    </div>
  );
};

export default Sale;
