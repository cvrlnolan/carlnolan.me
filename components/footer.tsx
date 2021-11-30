import React from "react";
import Link from "next/link";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ul className="block space-y-4">
              <Link href="/" passHref>
                <li className="link">Home</li>
              </Link>
              <Link href="/projects" passHref>
                <li className="link">Projects</li>
              </Link>
              <Link href="/snippets" passHref>
                <li className="link">Snippetyard</li>
              </Link>
            </ul>
            <ul className="block space-y-4">
              <Link href="https://github.com/cvrlnolan" passHref>
                <li className="link">GitHub</li>
              </Link>
              <Link href="https://twitter.com" passHref>
                <li className="link">Twitter</li>
              </Link>
              <Link href="mailto:georgecvrl@gmail.com" passHref>
                <li className="link">Mail</li>
              </Link>
            </ul>
            <ul className="block space-y-4">
              <Link href="#" passHref>
                <li className="link">Resume</li>
              </Link>
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
