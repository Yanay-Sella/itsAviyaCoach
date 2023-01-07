import React from "react";
import PlanCard from "./components/PlanCard";

const Plans = () => {
  return (
    <div className="flex flex-col self-stretch bg-secondary items-center gap-20 sectiony">
      <h1 className="text-4xl">Choose your plan then</h1>
      <div className="flex gap-40 items-center">
        <PlanCard
          frontText="SINGLE WORKOUT"
          header="single workout"
          youGet={"1 Workout"}
          youGive="100$"
          time="single use"
        />

        <PlanCard
          frontText="TRIPLE WORKOUT"
          header="Premuim plan"
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
    </div>
  );
};

export default Plans;
