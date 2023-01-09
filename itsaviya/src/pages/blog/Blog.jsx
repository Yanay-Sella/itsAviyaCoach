import React from "react";

import NavBar from "../../general/navbar/NavBar";
import InfoSection from "../../general/InfoSection";
import Footer from "../../general/footer/Footer";

import blogImg from "../../general/images/1x.jpg";

const Blog = () => {
  const smapleText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae iusto cum iste eaque enim quidem, a quos rerum ratione recusandae repellat maxime temporibus! Sed id quasi maiores! Dolore provident ipsam vitae ab nemo nihil delectus necessitatibus tempora ullam voluptatibus.";

  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20">
        <InfoSection
          header="My blog"
          name="blog"
          text={smapleText}
          imageSrc={blogImg}
        />
        <Footer />
      </div>
    </main>
  );
};

export default Blog;
