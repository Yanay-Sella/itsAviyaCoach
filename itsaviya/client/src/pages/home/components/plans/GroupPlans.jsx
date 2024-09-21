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
          link="https://wa.link/uymtt4"
          delay={500}
        />
        <GroupCard
          frontText="קבוצות גדולות"
          header="קבוצות גדולות"
          youGet={"3-5 מתאמנות"}
          youGive="300₪"
          link="https://wa.link/uymtt4"
          delay={500}
        />
      </div>
    </section>
  );
};

export default GroupPlans;
