import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse w-full justify-between items-center">
        <div className="flex-col w-full md:w-1/2 justify-center">
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-justify">
            Writes clean code.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-justify">
            Fueled by simplicity.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-justify">
            Navigates the web like a pirate.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-justify">
            Welcome aboard.
          </p>
        </div>
        <div className="flex mx-auto md:mx-0 mb-4 md:mb-0">
          <img
            alt="Carl"
            src="./me.jpg"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
