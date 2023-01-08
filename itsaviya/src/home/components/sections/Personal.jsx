import React from "react";
import personalImg from "../../images/4x.jpg";

const Personal = () => {
  return (
    <section
      className="flex md:flex-row flex-col gap-20 self-stretch content-center items-center justify-between bg-primary sectiony"
      id="personal"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">Personal Training</h1>
        <p className="text-xl w-96">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae
          iusto cum iste eaque enim quidem, a quos rerum ratione recusandae
          repellat maxime temporibus! Sed id quasi maiores! Dolore provident
          ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam
          voluptatibus.
        </p>
      </div>
      <img
        src={personalImg}
        alt="aviyaImage"
        className="md:h-96 md:w-96 h-80 w-80 shrink"
      />
    </section>
  );
};

export default Personal;
