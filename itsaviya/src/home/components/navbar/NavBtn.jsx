import React from "react";

const NavBtn = ({ text, right }) => {
  return (
    <div
      className={`flex justify-center align-center p-2 h-10 basis-40 rounded-full text-center text-center hover:underline text-lg`}
    >
      <p className="text-center">{`${text}`}</p>
    </div>
  );
};

export default NavBtn;
