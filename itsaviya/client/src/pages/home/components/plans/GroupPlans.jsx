import React from "react";
import GroupCard from "./components/GroupCard";

const GroupPlans = () => {
  return (
    <section
      className="flex flex-col self-center items-center gap-14 sectiony justify-center"
      id="groups"
    >
      <div className="items-center text-center">
        <h1 className="text-4xl">תקבעו לעצמכן, עם החברות...</h1>
      </div>
      <div className="flex md:gap-60 gap-28 md:items-stretch items-center md:flex-row flex-col self-stretch">
        <GroupCard
          frontText="אימון זוגי"
          header="אימון זוגי"
          youGet={"2 מתאמנות"}
          youGive="160₪"
          link="https://wa.me/972533336864?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%94%2C%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%96%D7%95%D7%92%D7%99%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
          delay={500}
        />
        <GroupCard
          frontText="קבוצות גדולות"
          header="קבוצות גדולות"
          youGet={"3-5 מתאמנות"}
          youGive="300₪"
          link="https://wa.me/972533336864?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%94%2C%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%9C%D7%A7%D7%91%D7%95%D7%A6%D7%94%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
          delay={500}
        />
      </div>
    </section>
  );
};

export default GroupPlans;
