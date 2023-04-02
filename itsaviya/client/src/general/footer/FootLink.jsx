import React from "react";

const FootLink = ({ text, to, size, action }) => {
  return (
    <div
      className={`flex justify-center align-center text-center hover:underline text-${size} hover:cursor-pointer`}
      onClick={action}
    >
      {to ? (
        <a href={`${to}`} className="text-center">{`${text}`}</a>
      ) : (
        <a className="text-center">{`${text}`}</a>
      )}
    </div>
  );
};

export default FootLink;
