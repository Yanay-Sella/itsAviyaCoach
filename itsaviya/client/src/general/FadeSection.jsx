import React, { useEffect } from "react";
import useIntersect from "../hooks/useIntersect";
import "../index.css";

const FadeSection = ({ children, isDelay = false, isShort = false }) => {
  let [isVisible, domRef] = useIntersect();

  return (
    <div
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity ${
        isShort ? "duration-500" : "duration-1000"
      } ease-in ${isDelay && "delay-500"}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeSection;
