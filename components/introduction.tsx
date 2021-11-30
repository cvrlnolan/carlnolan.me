import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse w-full justify-between items-center">
        <div className="flex-col w-full md:w-1/2 justify-center">
          <p className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-500 text-center md:text-justify">
            Carl Nolan
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-green-500 text-center md:text-justify">
            Writes clean code.
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-green-500 text-center md:text-justify">
            Fueled by simplicity.
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-green-500 text-center md:text-justify">
            Navigates the web like a pirate.
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-green-500 text-center md:text-justify">
            A free electron in a nuclear world.
          </p>
        </div>
        <div className="flex mx-auto md:mx-0 mb-4 md:mb-0">
          <div className="p-0.5 bg-gradient-to-tr from-green-300 to-purple-500 rounded-full">
            <img
              alt="Carl"
              src="./me.jpg"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
