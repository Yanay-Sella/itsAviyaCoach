import React from "react";
import aboutImage from "../../images/1x.jpg";

const About = () => {
  return (
    <section
      className="flex items-center justify-between bg-primary sectiony"
      id="about"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">My story</h1>
        <p className="text-xl w-96">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae
          iusto cum iste eaque enim quidem, a quos rerum ratione recusandae
          repellat maxime temporibus! Sed id quasi maiores! Dolore provident
          ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam
          voluptatibus.
        </p>
      </div>
      <img src={aboutImage} alt="aviyaImage" className="h-96 w-96" />
    </section>
  );
};

export default About;
