import React from "react";
import heroImage from "../../../../general/images/3.jpg";
import "../../../../index.css";
const Hero = () => {
  const header = "גלי את העוצמה שבתוכך";
  const content = "ברוכה הבאה לאני החדש שלך";

  return (
    <section
      className="flex md:flex-row flex-col md:gap-20 gap-10 self-stretch content-center items-center justify-between bg-primary md:hero"
      id="me"
    >
      <img
        src={heroImage}
        alt="aviyaImage"
        className="md:h-auto md:w-2/5 h-auto w-4/6 shrink"
      />
      <div className="flex flex-col gap-10 shrink md:items-end items-center">
        <h1 className="md:text-7xl text-5xl md:text-right text-center header">
          {header}
        </h1>
        <p className="md:text-4xl text-3xl text-center header2">{content}</p>
      </div>
    </section>
  );
};

export default Hero;
