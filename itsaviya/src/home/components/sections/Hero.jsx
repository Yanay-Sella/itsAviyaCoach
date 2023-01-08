import React from "react";
import heroImage from "../../images/3x.jpg";
import "../../../index.css";
const Hero = () => {
  return (
    <section
      className="flex items-center justify-between bg-primary sectiony"
      id="me"
    >
      <img src={heroImage} alt="aviyaImage" className="h-96 w-96" />
      <div className="flex flex-col gap-10">
        <h1 className="text-7xl">Aviya Shechtman</h1>
        <p className="text-2xl">Workouts made fun</p>
      </div>
    </section>
  );
};

export default Hero;
