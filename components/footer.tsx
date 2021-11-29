import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex-col w-full md:w-3/5 mt-6 mx-auto items-center">
        <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 mt-8 mb-4"></div>
        <div className="flex-col w-full p-4 space-y-8">
          <div className="flex">
            <span className="text-gray-700 dark:text-gray-300">
              Spotify Playing Media
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="block space-y-4">
              <li>Home</li>
              <li>Projects</li>
              <li>Snippets</li>
            </ul>
            <ul className="block space-y-4">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Mail</li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              2021 Copyright &copy; Carl Nolan
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
