import React, { useEffect, useState } from "react";

import Footer from "../../general/footer/Footer";
import InfoSection from "../../general/InfoSection";

import { CircularProgress } from "@mui/material";

import samplePostImg from "../../general/images/1x.jpg";
import Logo from "../../general/images/aviyaLogo2Small.png";

import { useParams, Link } from "react-router-dom"; //to fetch the room info

const PostPage = () => {
  const postName = useParams().blogName;
  const url = `${process.env.REACT_APP_SERVER_URL}blog/${postName}`;
  const [post, setPost] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { name, title, intro, content, imageUrl } = post || {};

  useEffect(() => {
    const getPost = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { method: "GET" });
        const resData = await response.json();
        setPost(resData.blog); // the frontend post
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  return (
    <>
      {!post ? (
        <div className="flex flex-col mt-60 max-w-6xl md:gap-4 gap-20">
          {isLoading ? <CircularProgress color="info" /> : <PostNotFound />}
        </div>
      ) : (
        <div className="flex flex-col mt-28 max-w-6xl md:gap-4 gap-20">
          <InfoSection
            leftImg={true}
            name={name}
            text={intro}
            header={title}
            imageSrc={imageUrl}
            key={name}
          />

          <div className="flex flex-col gap-7 w-5/6 self-center">
            {content.map((e) => {
              return (
                <div key={e._id}>
                  <h1 className="text-4xl mb-5">{e.header}</h1>
                  <p className="text-xl">{e.text}</p>
                </div>
              );
            })}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

const PostNotFound = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="hebText text-6xl">שגיאה!</p>
      <p className="hebText text-4xl">פוסט לא נמצא...</p>

      <Link to="/home">
        <div className="flex flex-col items-center hover:underline transition-all hover:scale-105">
          <img src={Logo} alt="logo" />
          <p className="hebText text-xl">חזרה לדף הבית</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPage;
