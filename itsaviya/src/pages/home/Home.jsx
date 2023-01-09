import React from "react";

import NavBar from "../../general/navbar/NavBar.jsx";
import Hero from "./components/sections/Hero";
import Sale from "./components/Sale";
import PersonalPlans from "./components/plans/PersonalPlans";
import GroupPlans from "./components/plans/GroupPlans";
import Join from "./components/Join";
import aboutImg from "../../general/images/1x.jpg";
import personalImg from "../../general/images/4x.jpg";
import groupImg from "../../general/images/4x.jpg";

import InfoSection from "../../general/InfoSection.jsx"; //a section with an image and text next to it
import Footer from "../../general/footer/Footer";
const Home = () => {
  const smapleText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae iusto cum iste eaque enim quidem, a quos rerum ratione recusandae repellat maxime temporibus! Sed id quasi maiores! Dolore provident ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam voluptatibus.";

  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20">
        <Hero />
        <InfoSection
          header="My Story"
          name="about"
          text={smapleText}
          imageSrc={aboutImg}
        />
        <Sale />
        <InfoSection
          header="Personal Training"
          name="personal"
          text={smapleText}
          imageSrc={personalImg}
        />
        <PersonalPlans />
        <InfoSection
          header="Group Training"
          name="group"
          text={smapleText}
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

export default Home;
