import React from "react";
import PlanCard from "./components/PlanCard";

const PersonalPlans = () => {
  return (
    <section
      className="flex flex-col self-center items-center gap-14 sectiony py-8 justify-center "
      id="personal-plans"
      // style={{ width: "100vw" }}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">אז מה הכי מתאים לך?</h1>
        {/* <h1 className="text-2xl">Personal attention</h1>
        <h1 className="text-lg">Focus on your own goals</h1> */}
      </div>
      <div className="flex gap-10 md:gap-32 items-center sm:flex-row flex-col self-stretch">
        <PlanCard
          frontText="אימון יחיד"
          header="אימון יחיד"
          youGet={"אימון אחד"}
          youGive="120₪"
          time="חד פעמי"
        />

        <PlanCard
          frontText="שלושה אימונים"
          header="שלושה אימונים"
          youGet={"3 אימונים"}
          youGive="300₪"
          time="חד פעמי"
        />

        <PlanCard
          frontText="מנוי חודשי"
          header="מנוי חודשי"
          youGet={"8 אימונים"}
          youGive="600₪"
          time="חודשי"
        />
      </div>
    </section>
  );
};

export default PersonalPlans;
