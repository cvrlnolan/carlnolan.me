import React from "react";
import type { Experience } from "@/assets/types";

const ExperienceBox = (props: Experience) => {
  return (
    <>
      <div className="w-full bg-white dark:bg-gray-800 overflow-hidden rounded shadow-md transition duration-300">
        <div className="flex px-6 py-4 mb-2 justify-between items-center">
          <div className="block">
            <p className="font-bold text-xl text-gray-700 dark:text-gray-300">
              {props.companyName}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{props.title}</p>
          </div>
          <div className="block">
            <p className="text-gray-700 dark:text-gray-300 italic">
              {props.period}
            </p>
            <span className="px-2 bg-gray-300 dark:bg-gray-600 rounded text-xs uppercase">
              {props.jobType}
            </span>
          </div>
        </div>
        <div className="flex px-6 py-4">
          <p className="text-gray-700 dark:text-gray-300">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExperienceBox;
