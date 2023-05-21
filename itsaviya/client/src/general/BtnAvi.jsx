import React from "react";

const BtnAvi = ({ text, size = "lg" }) => {
  return (
    <div
      className={`transition-all max-w-fit shadow-md hover:shadow-2xl hover:-translate-y-0.7 hover:scale-105 p-2 basis-40 rounded-full text-center hover:cursor-pointer bg-primary text-${size}`}
    >
      {text}
    </div>
  );
};

export default BtnAvi;
