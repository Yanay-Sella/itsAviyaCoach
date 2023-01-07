import React from "react";
import heroImage from "../../images/3x.jpg";
const Hero = () => {
  return (
    <div
      className="flex items-center justify-center bg-primary"
      style={{ height: "500px" }}
    >
      <div className="flex gap-28">
        <img src={heroImage} alt="aviyaImage" className="h-96 w-96" />
        <div className="flex flex-col gap-10">
          <h1 className="text-8xl">Aviya Shechtman</h1>
          <p className="text-2xl">Workouts made fun</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
