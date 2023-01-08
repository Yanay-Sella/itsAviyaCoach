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
        <h1 className="text-4xl">Private workouts</h1>
        {/* <h1 className="text-2xl">Personal attention</h1>
        <h1 className="text-lg">Focus on your own goals</h1> */}
      </div>
      <div className="flex gap-10 md:gap-32 items-center sm:flex-row flex-col self-stretch">
        <PlanCard
          frontText="SINGLE WORKOUT"
          header="single workout"
          youGet={"1 Workout"}
          youGive="100$"
          time="single use"
        />

        <PlanCard
          frontText="TRIPLE WORKOUT"
          header="Triple workout"
          youGet={"3 Workouts"}
          youGive="200$"
          time="single use"
        />

        <PlanCard
          frontText="MONTHLY PARTNERSHIP"
          header="partnership"
          youGet={"2 Workouts"}
          youGive="50$"
          time="one month"
        />
      </div>
    </section>
  );
};

export default PersonalPlans;
