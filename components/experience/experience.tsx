import React from "react";
import ExperienceBox from "@/components/experience/experienceBox";

const Experience = () => {
  return (
    <>
      <p className="font-bold text-xl text-gray-700 dark:text-gray-300 my-8">
        Experience
      </p>
      <div className="grid w-full grid-cols-1 gap-4">
        {[...Array(3)].map((e: any, i: number) => (
          <ExperienceBox key={i} />
        ))}
      </div>
    </>
  );
};

export default Experience;
