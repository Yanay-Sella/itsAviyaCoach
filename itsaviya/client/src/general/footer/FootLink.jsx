import React from "react";

const FootLink = ({ text, to, size, action = () => {}, newTab = false }) => {
  return (
    <div
      className={`flex justify-center align-center text-center hover:underline text-${size} hover:cursor-pointer`}
      onClick={action}
    >
      {to ? (
        <a
          href={`${to}`}
          className="text-center"
          target={`${newTab ? "_blank" : ""}`}
        >
          {`${text}`}{" "}
        </a>
      ) : (
        <a className="text-center">{`${text}`}</a>
      )}
    </div>
  );
};

export default FootLink;
