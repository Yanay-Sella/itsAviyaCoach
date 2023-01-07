import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/sections/Hero";
import Plans from "./components/sections/plans/Plans";
import About from "./components/sections/About";

const Home = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center">
        <NavBar />
        <Hero />
        <About />
        <Plans />
      </div>
    </main>
  );
};

export default Home;
