import React from "react";

const FootLink = ({ text, to, size }) => {
  return (
    <div
      className={`flex justify-center align-center text-center hover:underline text-${size}`}
    >
      <a href={`${to}`} className="text-center">{`${text}`}</a>
    </div>
  );
};

export default FootLink;
