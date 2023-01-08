import React from "react";

import NavBar from "./components/navbar/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Sale from "./components/sections/Sale";
import Personal from "./components/sections/Personal";
import PersonalPlans from "./components/sections/plans/PersonalPlans";
import Group from "./components/sections/Group";
import GroupPlans from "./components/sections/plans/GroupPlans";
import Join from "./components/sections/Join";

import aboutImg from "./images/1x.jpg";
import personalImg from "./images/4x.jpg";
import groupImg from "./images/4x.jpg";

import Footer from "./components/sections/footer/Footer";
const Home = () => {
  return (
    <main className="flex justify-center bg-primary">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20">
        <Hero />
        <Info
          header="My Story"
          name="about"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae
          iusto cum iste eaque enim quidem, a quos rerum ratione recusandae
          repellat maxime temporibus! Sed id quasi maiores! Dolore provident
          ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam
          voluptatibus."
          imageSrc={aboutImg}
        />
        <Sale />
        <Info
          header="Personal Training"
          name="personal"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae
          iusto cum iste eaque enim quidem, a quos rerum ratione recusandae
          repellat maxime temporibus! Sed id quasi maiores! Dolore provident
          ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam
          voluptatibus."
          imageSrc={personalImg}
        />
        <PersonalPlans />
        <Info
          header="Group Training"
          name="group"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae
          iusto cum iste eaque enim quidem, a quos rerum ratione recusandae
          repellat maxime temporibus! Sed id quasi maiores! Dolore provident
          ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam
          voluptatibus."
          imageSrc={groupImg}
          leftImg={true}
        />
        <GroupPlans />
        <Join />

        <Footer />
      </div>
    </main>
  );
};

const Info = ({ name, text, imageSrc, header, leftImg }) => {
  return (
    <section
      className="flex md:flex-row flex-col gap-20 self-stretch content-center items-center justify-between bg-primary sectiony"
      id={name}
    >
      <div
        className={`flex flex-col gap-10 md:items-start items-center ${
          leftImg && `md:order-2 order-1 md:items-end`
        }`}
      >
        <h1
          className={`md:text-5xl text-3xl md:text-left ${
            leftImg && `md:text-right`
          } text-center`}
        >
          {header}
        </h1>
        <p
          className={`md:text-xl text-lg max-w-3xl md:text-left ${
            leftImg && `md:text-right`
          } text-center`}
        >
          {text}
        </p>
      </div>
      <img
        src={imageSrc}
        alt="aviyaImage"
        className={`md:h-96 md:w-96 h-80 w-80 shrink ${
          leftImg && `md:order-1 order-2`
        }`}
      />
    </section>
  );
};

export default Home;
