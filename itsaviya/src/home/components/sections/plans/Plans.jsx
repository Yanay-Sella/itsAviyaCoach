import React from "react";
import PlanCard from "./components/PlanCard";

const Plans = () => {
  return (
    <section
      className="flex flex-col self-stretch bg-secondary items-center gap-20 sectiony"
      id="plans"
      style={{ width: "100vw" }}
    >
      <h1 className="text-4xl">Choose your plan then</h1>
      <div className="flex gap-52 items-center justify-between">
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

export default Plans;
