import React from "react";
import PlanCard from "./components/PlanCard";

const PersonalPlans = () => {
  return (
    <section
      className="flex flex-col self-center items-center gap-14 sectiony py-8 justify-center "
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
          link="https://wa.me/972533336864?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%94%2C%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%90%D7%99%D7%A9%D7%99%20%D7%91%D7%95%D7%93%D7%93%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
        />

        <PlanCard
          frontText="שלושה אימונים"
          header="שלושה אימונים"
          youGet={"3 אימונים"}
          youGive="250₪"
          time="חד פעמי"
          link="https://wa.me/972533336864?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%94%2C%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%97%D7%91%D7%99%D7%9C%D7%AA%20%D7%A9%D7%9C%D7%95%D7%A9%D7%94%20%D7%90%D7%99%D7%9E%D7%95%D7%A0%D7%99%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
        />

        <PlanCard
          frontText="מנוי חודשי"
          header="מנוי חודשי"
          youGet={"8 אימונים"}
          youGive="600₪"
          time="חודשי"
          link="https://wa.me/972533336864?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%94%2C%0A%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%9E%D7%A0%D7%95%D7%99%20%D7%97%D7%95%D7%93%D7%A9%D7%99%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D."
        />
      </div>
    </section>
  );
};

export default PersonalPlans;
