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
        <h1 className="text-4xl">Group Workouts</h1>
      </div>
      <div className="flex md:gap-60 gap-28 items-center md:flex-row flex-col">
        <GroupCard
          frontText="DUO WORKOUT"
          header="duo workout"
          youGet={"2 people"}
          youGive="100$"
        />
        <GroupCard
          frontText="LARGE GROUPS"
          header="large groups"
          youGet={"3-5 people"}
          youGive="200$"
        />
      </div>
    </section>
  );
};

export default GroupPlans;
