import React from "react";

import NavBar from "../../general/navbar/NavBar";
import Footer from "../../general/footer/Footer";
import InfoSection from "../../general/InfoSection";

import samplePostImg from "../../general/images/1x.jpg";

import { useParams } from "react-router-dom"; //to fetch the room info

const PostPage = () => {
  const postName = useParams().blogName;

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~DUMMY STUFF~~~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const dummyBlog = {
    engName: "how-to-start-working-out",
    name: "איך להתחיל להתאמן?",
    intro:
      "איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט ",
    content: [
      {
        header: "קודם כל תתחילו להתאמן",
        text: "היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!",
      },
      {
        header: "second header",
        text: "lorem20",
      },
      {
        header: "third header",
        text: "lorem30",
      },
    ],
    date: "today",
    imageSrc: samplePostImg,
  };

  const dummyBlog2 = {
    engName: "how-to-avoid-injuries",
    name: "איך להימנע מפציעות ספורט?",
    intro:
      "איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פיר",
    content: [
      {
        header: "קודם כל תתחילו להיזהר",
        text: "היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!",
      },
      {
        header: "second header",
        text: "lorem20",
      },
      {
        header: "third header",
        text: "lorem30",
      },
    ],
    date: "today",
    imageSrc: samplePostImg,
  };

  const dummyBlog3 = {
    engName: "how-to-eat-healthy",
    name: "איך לאכול בריא?",
    intro:
      "איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירוט איך לאכול בריא פירו",
    content: [
      {
        header: "קודם כל תתחילו לאכול",
        text: "היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!",
      },
      {
        header: "second header",
        text: "lorem20",
      },
      {
        header: "third header",
        text: "lorem30",
      },
    ],
    date: "today",
    imageSrc: samplePostImg,
  };

  const blogArr = [dummyBlog, dummyBlog2, dummyBlog3];

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~End~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  const post = blogArr.find((e) => e.engName === postName);

  const { engName, name, intro, content, date, imageSrc } = post;

  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20">
        <InfoSection
          name={name}
          text={intro}
          imageSrc={imageSrc}
          header={name}
        />

        <Footer />
      </div>
    </main>
  );
};

export default PostPage;
