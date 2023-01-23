import React from "react";

const BtnAvi = ({ text }) => {
  return (
    <div className="transition-all max-w-fit shadow-md hover:shadow-2xl hover:-translate-y-0.7 hover:scale-105 p-2 h-10 basis-40 rounded-full text-center hover:cursor-pointer bg-primary text-lg">{`${text}`}</div>
  );
};

export default BtnAvi;
