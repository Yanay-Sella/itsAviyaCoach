import React from "react";
import NavBar from "../general/navbar/NavBar";
import Footer from "../general/footer/Footer"; // no need i guess

const Page = ({ children }) => {
  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      {children}
    </main>
  );
};

export default Page;
