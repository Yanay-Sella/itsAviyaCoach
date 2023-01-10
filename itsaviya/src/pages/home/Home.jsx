import React from "react";

import NavBar from "../../general/navbar/NavBar.jsx";
import Hero from "./components/sections/Hero";
import Sale from "./components/Sale";
import PersonalPlans from "./components/plans/PersonalPlans";
import GroupPlans from "./components/plans/GroupPlans";
import Join from "./components/Join";
import aboutImg from "../../general/images/1x.jpg";
import personalImg from "../../general/images/4x.jpg";
import groupImg from "../../general/images/4x.jpg";

import InfoSection from "../../general/InfoSection.jsx"; //a section with an image and text next to it
import Footer from "../../general/footer/Footer";
const Home = () => {
  return (
    <main className="flex flex-col items-center bg-primary text-thirdy">
      <NavBar />
      <div className="flex flex-col mt-28 max-w-6xl md:gap-0 gap-20">
        <Hero />

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
    </main>
  );
};

export default Home;

const aboutP = (
  <p>
    היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני
    משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר
    גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום
    מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק
    ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!
  </p>
);

const personalP = (
  <p>
    היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני
    משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר
    גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום
    מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק
    ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!
  </p>
);

const groupP = (
  <p>
    היי לכן! שמי אביה, מתעמלת קרקע לשעבר, מאמנת כושר מוסמכת בהווה. מומחית אימוני
    משקולות, משקל גוף וגמישות. מאמנת בסטודיו וגינות כושר באוויר הפתוח. כושר
    גופני זורם אצלי בדם והוא התשוקה שלי! המקצוע לגמריי בחר בי ואני מתרגשת כל יום
    מחדש שיש בי את הכוח לגרום לשינוי. התהליך שבנות עוברות איתי ממלא אותי בסיפוק
    ואושר ואני יותר מאשמח שתהיי חלק מהמשפחה!
  </p>
);
