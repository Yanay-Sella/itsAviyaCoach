import React from "react";

const NavBtn = ({ text, to, size }) => {
  return (
    <div
      className={`flex justify-center align-center basis-40 rounded-full text-center hover:underline text-${size}`}
    >
      <a href={`${to}`} className="text-center">{`${text}`}</a>
    </div>
  );
};

export default NavBtn;
