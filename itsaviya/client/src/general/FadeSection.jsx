import React, { useEffect } from "react";
import "../index.css";

const FadeSection = ({ children, isDelay, isShort }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
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
