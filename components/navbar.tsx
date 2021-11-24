import React, { useState, useEffect, ReactNode } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

type Props = {
  children?: ReactNode;
};

const Navbar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeButton = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <>
          <button className="btn-theme" onClick={() => setTheme("light")}>
            <SunIcon className="w-5 h-5" />
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="btn-theme" onClick={() => setTheme("dark")}>
            <MoonIcon className="w-5 h-5" />
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div className="flex-col p-4 mx-auto w-full min-h-screen antialiased bg-gray-100 dark:bg-gray-900 transition duration-300">
        <nav className="hidden md:flex w-full p-4 h-24 justify-center">
          <div className="flex w-1/2 mx-auto justify-between items-center">
            <div className="flex">
              <ul className="inline-flex space-x-4">
                <li>Home</li>
                <li>Projects</li>
                <li>Snippets</li>
              </ul>
            </div>
            <div className="flex">{renderThemeButton()}</div>
          </div>
        </nav>
        <nav className="flex md:hidden w-full p-4 h-24 justify-center">
          <div className="flex px-2 w-full mx-auto justify-between items-center">
            <div className="flex">
              <button onClick={() => setOpened(!opened)}>
                {opened ? (
                  <XIcon className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="flex">{renderThemeButton()}</div>
          </div>
        </nav>
        <div
          className={`${
            opened ? "flex" : "hidden"
          } w-full mx-auto justify-center md:hidden`}
        >
          <ul className="block space-y-4">
            <li>Home</li>
            <li>Projects</li>
            <li>Snippets</li>
          </ul>
        </div>
        <div className="flex flex-grow w-full md:w-1/2 mt-6 mx-auto justify-between items-center">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Navbar;
