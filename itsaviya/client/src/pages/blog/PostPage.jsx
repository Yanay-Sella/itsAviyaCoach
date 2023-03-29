import React, { useEffect, useState } from "react";

import Footer from "../../general/footer/Footer";
import InfoSection from "../../general/InfoSection";

import samplePostImg from "../../general/images/1x.jpg";

import { useParams } from "react-router-dom"; //to fetch the room info

const PostPage = () => {
  const postName = useParams().blogName;
  const url = `${process.env.REACT_APP_SERVER_URL}blog/${postName}`;
  const [post, setPost] = useState(undefined);
  const { name, title, intro, content } = post || {};

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(url, { method: "GET" });
        const resData = await response.json();
        setPost(resData.blog); // the frontend post
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  return (
    <>
      {post && (
        <div className="flex flex-col mt-28 max-w-6xl md:gap-4 gap-20">
          <InfoSection
            leftImg={true}
            name={name}
            text={intro}
            header={title}
            imageSrc={samplePostImg}
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

export default PostPage;
