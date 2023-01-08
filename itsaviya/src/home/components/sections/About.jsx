import React from "react";
import aboutImage from "../../images/1x.jpg";

const About = () => {
  return (
    <section
      className="flex md:flex-row flex-col gap-20 self-stretch content-center items-center justify-between bg-primary sectiony"
      id="about"
    >
      <div className="flex flex-col gap-10 md:items-start items-center">
        <h1 className="text-5xl">My story</h1>
        <p className="text-xl max-w-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae
          iusto cum iste eaque enim quidem, a quos rerum ratione recusandae
          repellat maxime temporibus! Sed id quasi maiores! Dolore provident
          ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam
          voluptatibus.
        </p>
      </div>
      <img
        src={aboutImage}
        alt="aviyaImage"
        className="md:h-96 md:w-96 h-80 w-80 shrink"
      />
    </section>
  );
};

export default About;
