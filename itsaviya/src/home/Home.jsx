import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/sections/Hero";
import Plans from "./components/sections/plans/Plans";
import About from "./components/sections/About";
import Footer from "./components/sections/footer/Footer";

const Home = () => {
  return (
    <main className="flex justify-center bg-primary">
      <NavBar />
      <div className="flex flex-col items-center mt-28">
        <Hero />
        <About />
        <Plans />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
