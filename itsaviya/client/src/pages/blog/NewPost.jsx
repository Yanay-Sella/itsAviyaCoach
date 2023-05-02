import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../general/footer/Footer";
import BtnAvi from "../../general/BtnAvi";
import samplePostImg from "../../general/images/4x.jpg";
import InfoSection from "../../general/InfoSection";

import axios from "axios";

import UseAxiosPrivate from "../../hooks/useAxiosPrivate";

const NewPost = () => {
  const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY_URL;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;

  const axiosPrivate = UseAxiosPrivate();
  const navigate = useNavigate();

  //forming a blogModel. (date will be added automatically)
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [article, setArticle] = useState([]); //content

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(samplePostImg);

  const typeName = (event) => {
    setName(event.target.value);
  };

  const typeTitle = (event) => {
    setTitle(event.target.value);
  };

  const typeIntro = (event) => {
    setIntro(event.target.value);
  };

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const chooseFile = async (event) => {
    const pickedFile = event.target.files[0];
    if (!pickedFile) return;
    setFile(pickedFile);
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
    let post;
    if (!window.confirm("את בטוחה שאת רוצה להעלות את הפוסט?")) return;
    else {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        const { data } = await axios.post(
          `${cloudinaryUrl}/image/upload`,
          formData
        );

        post = {
          name,
          title,
          intro,
          content: article,
          imageUrl: data.secure_url,
        };

        const response = await axiosPrivate.post("blog", post); // sending the post
        if (response.statusText === "OK") {
          navigate("/blog");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col mt-28 max-w-6xl md:gap-4 gap-20">
      <div dir="rtl" className="flex flex-col">
        <label htmlFor="post-image">
          בחרי תמונה ריבועית עם אורך ורוחב שווים!
        </label>
        <input
          id="post-image"
          type="file"
          onChange={chooseFile}
          text="כדאי מאוד לבחור תמונת ריבוע!"
        />
      </div>

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
            <div className="flex flex-col gap-4" key={index}>
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

      {/*@@@@@ post preview @@@@@*/}

      <section className="flex flex-col items-center bg-primary text-thirdy border-2 pb-10">
        <div className="md:pl-10 transition-all flex md:flex-row flex-col md:justify-end md:gap-16 gap-4 border-2 border-fourthy rounded-lg hover:-translate-y-1 hover:cursor-pointer shadow-md hover:shadow-xl md:h-64">
          <div className="flex flex-col gap-4 md:items-stretch items-center order-1 md:order-2 py-4">
            <h1 className="header md:text-3xl text-xl md:text-right text-center">
              {title}
            </h1>
            <div className="hidden md:inline">
              <p className="text-xl post-prev-text">{intro}</p>
            </div>
          </div>

          <img
            src={previewUrl}
            alt="post-image"
            className="md:w-64 h-auto w-full md:rounded-r-lg rounded-b-lg order-2"
          />
        </div>

        <div className="flex flex-col max-w-6xl md:gap-4 gap-20">
          <InfoSection
            leftImg={true}
            name={"newPost"}
            text={intro}
            header={title}
            imageSrc={previewUrl}
            key={"newPost"}
            alt="preview"
          />

          <div className="flex flex-col gap-7 w-5/6 self-center">
            {article.map((e, index) => {
              return (
                <div key={index}>
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
  );
};

export default NewPost;
