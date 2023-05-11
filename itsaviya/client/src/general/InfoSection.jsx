import React from "react";
import FadeSection from "./FadeSection";

const InfoSection = ({
  name,
  text,
  imageSrc,
  header,
  leftImg,
  date,
  categories,
}) => {
  return (
    <section
      className="flex md:flex-row flex-col md:gap-20 gap-10 self-stretch content-center items-center justify-between bg-primary sectiony"
      id={name}
    >
      <div className={`${leftImg && `md:order-2 order-1`}`}>
        <FadeSection
          children={
            <div
              className={`flex flex-col md:gap-10 gap-4 md:items-start items-center ${
                leftImg && "md:items-end"
              }`}
            >
              <div
                dir="rtl"
                className="flex flex-col md:gap-4 gap-2 md:items-start items-center"
              >
                <div className="flex flex-col md:gap-0 gap-1">
                  {categories && categories.length !== 0 && (
                    <p className="leading-3 text-xl md:text-right text-center">{`${categories[0]}, ${categories[1]}`}</p>
                  )}
                  <h1
                    className={`${
                      date ? "md:text-6xl" : "md:text-5xl"
                    } text-3xl md:text-left hebText text-bold header ${
                      leftImg && ` md:text-right`
                    } text-center`}
                    style={{ maxWidth: "37rem" }}
                  >
                    {header}
                  </h1>
                </div>
                {date && (
                  <p className="hover:underline w-fit hover:cursor-pointer opacity-80">
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
              className={`max-w-full h-auto md:w-96 w-80 shrink `}
            />
          }
        />
      </div>
    </section>
  );
};

export default InfoSection;
