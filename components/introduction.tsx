import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse w-full justify-between items-center">
        <div className="flex w-full md:w-1/2 justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            necessitatibus, ullam possimus corporis vel est pariatur veritatis,
            blanditiis provident eum ducimus sunt amet odio fugit, architecto
            ipsum ad eveniet minus!
          </p>
        </div>
        <div className="flex mx-auto md:mx-0 mb-4 md:mb-0">
          <img
            alt="Carl"
            src="./me.jpg"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
