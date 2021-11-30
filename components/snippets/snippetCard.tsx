import React from "react";

const SnippetCard = () => {
  return (
    <>
      <div className="w-full md:w-52 rounded shadow-md p-0.5 bg-gradient-to-tr from-green-300 to-purple-500">
        <div className="flex-col h-full bg-white dark:bg-gray-800 overflow-hidden rounded">
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-700 dark:text-gray-300">
              Snippet Title
            </div>
          </div>
          <div className="flex flex-wrap px-6 pb-2">
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnippetCard;
