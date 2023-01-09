import React from "react";

const Join = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-secondary py-6 gap-6 text-white w-screen self-center w-screen">
      <div className="flex flex-col shrink items-center gap-4">
        <p className="text-lg mb-2"></p>
        <p
          className="md:text-6xl text-4xl text-center"
          style={{ "max-width": "900px" }}
        >
          Book your session and face everyday physical and mental challenges
        </p>
        <p className="md:text-xl text-md text-center">
          start your journey and become the best version of yourslef, with me
        </p>
      </div>

      <div className="flex items-center p-3 border-2 border-white rounded-full w-30 h-10 hover:cursor-pointer transition-all  hover:-translate-y-0.7 hover:scale-105">
        <p>book now</p>
      </div>
    </div>
  );
};

export default Join;
