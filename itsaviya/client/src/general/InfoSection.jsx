import React from "react";
import FadeSection from "./FadeSection";

const InfoSection = ({ name, text, imageSrc, header, leftImg, date }) => {
  return (
    <section
      className="flex md:flex-row flex-col md:gap-20 gap-10 self-stretch content-center items-center justify-between bg-primary sectiony"
      id={name}
    >
      <div className={`${leftImg && `md:order-2 order-1`}`}>
        <FadeSection
          children={
            <div
              className={`flex flex-col gap-10 md:items-start items-center ${
                leftImg && "md:items-end"
              }`}
            >
              <div dir="rtl" className="flex flex-col gap-2">
                <h1
                  className={`md:text-5xl text-3xl md:text-left hebText text-bold header ${
                    leftImg && ` md:text-right`
                  } text-center`}
                >
                  {header}
                </h1>
                {date && (
                  <p className="hover:underline w-fit hover:cursor-pointer">
                    {date}
                  </p>
                )}
              </div>
              <div
                className={`md:text-2xl text-lg md:text-left md:leading-8 hebText  ${
                  leftImg && `md:text-right`
                } text-center`}
                style={{ maxWidth: "37rem" }}
              >
                {text}
              </div>
            </div>
          }
          isDelay={true}
        />
      </div>

      <div className={`${leftImg && `md:order-1 order-2`}`}>
        <FadeSection
          children={
            <img
              src={imageSrc}
              alt="aviyaImage"
              className={`md:h-96 md:w-96 h-80 w-80 shrink `}
            />
          }
        />
      </div>
    </section>
  );
};

export default InfoSection;
