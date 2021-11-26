import React from "react";

const ExperienceBox = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-gray-800 overflow-hidden rounded shadow-md transition duration-300">
        <div className="flex px-6 py-4 mb-2 justify-between items-center">
          <div className="block">
            <p className="font-bold text-xl text-gray-700 dark:text-gray-300">
              Experience Title
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Frontend Developer
            </p>
          </div>
          <div className="block">
            <p className="text-gray-700 dark:text-gray-300 italic">
              2018 - Present day
            </p>
            <span className="px-2 bg-gray-300 dark:bg-gray-600 rounded text-xs uppercase">
              Freelancing
            </span>
          </div>
        </div>
        <div className="flex px-6 py-4">
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            laboriosam magnam magni rerum dolorum quis, enim in delectus porro
            neque reiciendis eaque consequuntur id soluta placeat eveniet
            reprehenderit quasi expedita.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExperienceBox;
