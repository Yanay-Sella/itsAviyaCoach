import React, { useEffect, useState } from "react";
// import * as dotenv from "dotenv";
// dotenv.config();

import NavBar from "../../general/navbar/NavBar";
import InfoSection from "../../general/InfoSection";
import Footer from "../../general/footer/Footer";
import PostPrev from "./components/PostPrev";

import blogImg from "../../general/images/1x.jpg";
import samplePostImg from "../../general/images/3x.jpg";

const Blog = () => {
  const [blogArr, setBlogArr] = useState([]);
  const url = process.env.REACT_APP_SERVER_URL;
  const blogP = (
    <p>
      היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית
      אימוני משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח.
      כושר גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת
      כל יום מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא
      אותי בסיפוק ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!
    </p>
  );

  //on load
  useEffect(() => {
    const getBlogsArr = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const resData = await response.json();
        console.log(resData);
        setBlogArr(resData);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogsArr();
  }, []);

  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20">
        <InfoSection
          leftImg={true}
          header="הבלוג שלי"
          name="blog"
          text={blogP}
          imageSrc={blogImg}
        />
        <div className="mt-16 flex flex-col gap-12">
          {blogArr.map((element) => (
            <PostPrev blogSummary={element} /> //here, the posts preview page will get a *summary* about the posts
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Blog;
