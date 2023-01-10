import React from "react";
import GroupCard from "./components/GroupCard";

const GroupPlans = () => {
  return (
    <section
      className="flex flex-col self-center items-center gap-14 sectiony py-8 md:px-0 justify-center "
      id="groups"
      style={{ width: "100vw" }}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">תקבעו לעצמכן, עם החברות...</h1>
      </div>
      <div className="flex md:gap-60 gap-28 items-center md:flex-row flex-col">
        <GroupCard
          frontText="אימון זוגי"
          header="אימון זוגי"
          youGet={"2 מתאמנות"}
          youGive="200₪"
        />
        <GroupCard
          frontText="קבוצות גדולות"
          header="קבוצות גדולות"
          youGet={"3-5 מתאמנות"}
          youGive="300₪"
        />
      </div>
    </section>
  );
};

export default GroupPlans;
