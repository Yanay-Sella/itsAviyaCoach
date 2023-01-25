import React from "react";
import { useState, useEffect } from "react";

import NavBar from "../../general/navbar/NavBar";
import Footer from "../../general/footer/Footer";
import BtnAvi from "../../general/BtnAvi";
import samplePostImg from "../../general/images/4x.jpg";
import InfoSection from "../../general/InfoSection";

const NewPost = () => {
  const url = process.env.REACT_APP_SERVER_URL;

  //forming a blogModel. (date will be added automatically)
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [article, setArticle] = useState([]); //content

  const typeName = (event) => {
    setName(event.target.value);
  };

  const typeTitle = (event) => {
    setTitle(event.target.value);
  };

  const typeIntro = (event) => {
    setIntro(event.target.value);
  };

  //adding empty paragraph
  const addPrgrph = () => {
    setArticle((prev) => {
      return [
        ...prev,
        {
          header: "",
          text: "",
        },
      ];
    });
  };

  const editPrgrph = (event) => {
    const { name, value, id } = event.target;
    setArticle((prev) => {
      return prev.map((element, index) => {
        if (index == id) {
          return {
            ...element,
            [name]: value,
          };
        }
        return element;
      });
    });
  };

  const sendPost = async () => {
    const post = { name, title, intro, content: article };

    if (!window.confirm("את בטוחה שאת רוצה להעלות את הפוסט?")) return;
    else {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-4 gap-20">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="שם פוסט באנגלית"
            value={name}
            onChange={typeName}
            dir="rtl"
            className="rounded-xl pr-2"
          />
          <input
            type="text"
            onChange={typeTitle}
            placeholder="שם פוסט"
            value={title}
            dir="rtl"
            className="rounded-xl pr-2"
          />
          <textarea
            type="text"
            onChange={typeIntro}
            placeholder="תיאור פוסט"
            value={intro}
            dir="rtl"
            className="rounded-xl pr-2"
          />
        </div>

        {/* adding content */}
        <div className="flex flex-col gap-4">
          {article.map((e, index) => {
            return (
              <div className="flex flex-col gap-4">
                <h1>כותרת</h1>
                <input
                  type="text"
                  name="header"
                  id={index}
                  onChange={editPrgrph}
                  dir="rtl"
                />
                <h1>טקסט</h1>
                <textarea
                  type="text"
                  name="text"
                  id={index}
                  onChange={editPrgrph}
                  dir="rtl"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-4" onClick={addPrgrph}>
          <BtnAvi text={"להוסיף פסקה"} />
        </div>

        {/* post preview */}
        <section className="flex flex-col items-center bg-primary text-thirdy border-2 pb-10">
          <div className="flex flex-col max-w-6xl md:gap-4 gap-20">
            <InfoSection
              leftImg={true}
              name={"newPost"}
              text={intro}
              header={title}
              imageSrc={samplePostImg}
              key={"newPost"}
            />

            <div className="flex flex-col gap-7 w-5/6 self-center">
              {article.map((e) => {
                return (
                  <div className="">
                    <h1 className="text-4xl mb-5">{e.header}</h1>
                    <p className="text-xl">{e.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="mt-4" onClick={sendPost}>
          <BtnAvi text={"לשלוח"} />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default NewPost;
