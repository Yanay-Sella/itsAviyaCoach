import React from "react";

const NavBtn = ({ text }) => {
  return (
    <div className="flex align-center p-2 h-10 basis-40 rounded-full text-center hover:underline text-lg">
      <p>{`${text}`}</p>
    </div>
  );
};

export default NavBtn;
