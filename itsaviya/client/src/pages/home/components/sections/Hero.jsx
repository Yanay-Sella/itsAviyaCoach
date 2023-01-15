import React from "react";
import heroImage from "../../../../general/images/3x.jpg";
import "../../../../index.css";
const Hero = () => {
  const header = "גלי את העוצמה שבתוכך";
  const content = "ברוכה הבאה לאני החדש שלך";

  return (
    <section
      className="flex md:flex-row flex-col gap-20 self-stretch content-center items-center justify-between bg-primary sectiony"
      id="me"
    >
      <img
        src={heroImage}
        alt="aviyaImage"
        className="md:h-96 md:w-96 h-80 w-80 shrink"
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
