import React, { useEffect, useState } from "react";
// import * as dotenv from "dotenv";
// dotenv.config();
import "../../index.css";
import FadeSection from "../../general/FadeSection";

import Page from "../Page";
import NavBar from "../../general/navbar/NavBar";
import InfoSection from "../../general/InfoSection";
import Footer from "../../general/footer/Footer";
import PostPrev from "./components/PostPrev";
import { CircularProgress } from "@mui/material";

import blogImg from "../../general/images/1x.jpg";
import samplePostImg from "../../general/images/3x.jpg";

const Blog = () => {
  const [blogArr, setBlogArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = process.env.REACT_APP_SERVER_URL + "blog";
  const blogP = (
    <p>
      היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית
      אימוני משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח.
      כושר גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת
      כל יום מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא
      אותי בסיפוק ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!
    </p>
  );

  useEffect(() => {
    const getBlogsArr = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: "GET",
        });
        const resData = await response.json();
        setBlogArr(resData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogsArr();
  }, []);

  return (
    <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20 md:items-stretch items-center">
      <InfoSection
        leftImg={true}
        header="הבלוג שלי"
        name="blog"
        text={blogP}
        imageSrc={blogImg}
      />
      {isLoading ? (
        <div className="flex justify-center">
          <CircularProgress color="info" />
        </div>
      ) : (
        <div className="mt-16 md:flex md:flex-col grid grid-cols-2 md:gap-12 gap-5 md:max-w-full px-7">
          {/*{id, name, title, content, date} */}
          {blogArr.reverse().map((element) => (
            <FadeSection
              children={<PostPrev blogSummary={element} key={element._id} />}
              isShort={true}
            /> //here, the posts preview page will get a *summary* about the posts
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
