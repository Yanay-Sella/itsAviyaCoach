import React from "react";

const InfoSection = ({ name, text, imageSrc, header, leftImg }) => {
  return (
    <section
      className="flex md:flex-row flex-col gap-20 self-stretch content-center items-center justify-between bg-primary sectiony"
      id={name}
    >
      <div
        className={`flex flex-col gap-10 md:items-start items-center ${
          leftImg && `md:order-2 order-1 md:items-end`
        }`}
      >
        <h1
          className={`md:text-5xl text-3xl md:text-left hebText text-bold header ${
            leftImg && ` md:text-right`
          } text-center`}
        >
          {header}
        </h1>

        <div
          className={`md:text-2xl text-lg md:text-left md:leading-8 hebText  ${
            leftImg && `md:text-right`
          } text-center`}
          style={{ maxWidth: "37rem" }}
        >
          {text}
        </div>
      </div>

      <img
        src={imageSrc}
        alt="aviyaImage"
        className={`md:h-96 md:w-96 h-80 w-80 shrink ${
          leftImg && `md:order-1 order-2`
        }`}
      />
    </section>
  );
};

export default InfoSection;
