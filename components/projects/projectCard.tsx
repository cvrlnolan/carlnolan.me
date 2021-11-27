import React from "react";

const ProjectCard = () => {
  return (
    <>
      <div className="w-full md:w-52 bg-white dark:bg-gray-800 overflow-hidden rounded shadow-md">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-700 dark:text-gray-300">
            Project Title
          </div>
        </div>
        <div className="flex flex-wrap px-6 pb-2">
          <span className="inline-flex bg-gray-300 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
            #nextjs
          </span>
          <span className="inline-flex bg-gray-300 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
            #react
          </span>
          <span className="inline-flex bg-gray-300 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
            #tailwindcss
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
