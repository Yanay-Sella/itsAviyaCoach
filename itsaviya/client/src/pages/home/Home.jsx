import React from "react";
import { useEffect } from "react";

import Hero from "./components/sections/Hero";
import Sale from "./components/Sale";
import PersonalPlans from "./components/plans/PersonalPlans";
import GroupPlans from "./components/plans/GroupPlans";
import Join from "./components/Join";
import aboutImg from "../../general/images/1x.jpg";
import personalImg from "../../general/images/5.jpg";
import groupImg from "../../general/images/4.jpg";

import InfoSection from "../../general/InfoSection.jsx"; //a section with an image and text next to it
import Footer from "../../general/footer/Footer";
import FadeSection from "../../general/FadeSection";

import axios from "../../api/axios";

const Home = () => {
  useEffect(() => {
    //sending a request to the server to wake it up
    // because "Render" free option puts it to sleep when not in use
    const sayHello = async () => {
      try {
        const response = await axios.get("/");
        console.log(response.data.msg);
      } catch (error) {
        console.log(error);
      }
    };
    sayHello();
  }, []);

  return (
    <div
      className="flex flex-col md:mt-28 mt-32 md:gap-20 gap-20"
      style={{ maxWidth: "75rem" }}
    >
      <FadeSection children={<Hero />} />

      <InfoSection
        header="הסיפור שלי"
        name="about"
        text={aboutP}
        imageSrc={aboutImg}
      />

      <Sale />

      <InfoSection
        header="אימונים אישיים"
        name="personal"
        text={personalP}
        imageSrc={personalImg}
      />

      <PersonalPlans />

      <InfoSection
        header="אימונים בקבוצות"
        name="group"
        text={groupP}
        imageSrc={groupImg}
        leftImg={true}
      />

      <GroupPlans />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;

const aboutP = (
  <p>
    היי לכן! שמי רוני, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני
    משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר
    גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום
    מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק
    ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!
  </p>
);

const personalP = (
  <p>
    חושבת שניסית הכל ונמצאת במבוי סתום? תרשי לי לספר לך קצת על האימונים שלי. אני
    מעניקה לך חוויה יוצאת דופן של אימון לכל מטרה שתרצי, האימון מותאם בדיוק אלייך
    ולצרכים שלך ללא פשרות. אימון הוא המקום שבו תוכלי לפרוק את כל מה שיושב עלייך
    והמקום בו הנפש עושה "ריסטארסט". ביחד נוכל לתת לך את תחושת הסיפוק של לעבור את
    האתגרים בדרך למטרות שלך.
  </p>
);

const groupP = (
  <p>
    למה אולי תעדיפי אימון קבוצתי? כי אין כמו להתאמן עם חברות! באימון קבוצתי
    איתי, תקבלי יחס זהה כמו שאר המשתתפות. בנוסף, אין צורך לחשוש שאולי תישארי
    מאחור מכיוון שהאימון הקבוצתי שלי מותאם לכל הרמות. אימון עם חברות מקנה לכן
    זמן כיף ומגבש ואחלה הזדמנות לזרום לכוס קפה אחר כך. אז קדימה, תרימי טלפון
    לחברה.
  </p>
);
