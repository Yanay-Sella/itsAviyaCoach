import React from "react";
import PlanCard from "./components/PlanCard";

const PersonalPlans = () => {
  return (
    <section
      className="flex flex-col self-center items-center gap-14 sectiony justify-center "
      id="personal-plans"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl">אז מה הכי מתאים לך?</h1>
      </div>
      <div className="flex md:gap-32 gap-10 items-center md:flex-row flex-col self-stretch">
        <PlanCard
          frontText="אימון יחיד"
          header="אימון יחיד"
          youGet={"אימון אחד"}
          youGive="100₪"
          time="חד פעמי"
          link="https://wa.link/uymtt4"
          delay={700}
        />

        <PlanCard
          frontText="שלושה אימונים"
          header="שלושה אימונים"
          youGet={"3 אימונים"}
          youGive="250₪"
          time="חד פעמי"
          link="https://wa.link/uymtt4"
          delay={500}
        />

        <PlanCard
          frontText="מנוי חודשי"
          header="מנוי חודשי"
          youGet={"8 אימונים"}
          youGive="600₪"
          time="חודשי"
          link="https://wa.link/uymtt4"
          delay={300}
        />
      </div>
    </section>
  );
};

export default PersonalPlans;
