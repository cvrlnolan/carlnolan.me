import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { variants, transition, item } from "@/assets/animations";

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

  const mobileVariants = {
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      height: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const mobileItem = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <div className="flex-col p-4 mx-auto w-full min-h-screen antialiased bg-gray-50 dark:bg-gray-900 transition duration-300">
        <nav className="hidden md:flex w-full p-4 h-24 justify-center sticky top-0 z-50 bg-gray-50 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-70">
          <div className="flex w-3/5 mx-auto justify-between items-center">
            <div className="flex">
              <motion.ul
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transition}
                className="inline-flex space-x-4"
              >
                <Link href="/" passHref>
                  <motion.li variants={item} className="link">
                    Home
                  </motion.li>
                </Link>
                <Link href="/projects" passHref>
                  <motion.li variants={item} className="link">
                    Projects
                  </motion.li>
                </Link>
                <Link href="/snippets" passHref>
                  <motion.li variants={item} className="link">
                    Snippetyard
                  </motion.li>
                </Link>
              </motion.ul>
            </div>
            <div className="flex">{renderThemeButton()}</div>
          </div>
        </nav>
        <nav className="flex-col md:hidden w-full p-4 justify-center sticky top-0 z-50 bg-gray-50 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-70">
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
          <motion.div
            variants={mobileVariants}
            animate={opened ? "open" : "closed"}
            transition={transition}
            layout
            className={`${
              opened ? "flex" : "hidden"
            } w-full mx-auto justify-center md:hidden`}
          >
            <ul className="block space-y-4">
              <Link href="/" passHref>
                <motion.li variants={mobileItem} className="link">
                  Home
                </motion.li>
              </Link>
              <Link href="/projects" passHref>
                <motion.li variants={mobileItem} className="link">
                  Projects
                </motion.li>
              </Link>
              <Link href="/snippets" passHref>
                <motion.li variants={mobileItem} className="link">
                  Snippetyard
                </motion.li>
              </Link>
            </ul>
          </motion.div>
        </nav>
        <div className="flex-col flex-grow w-full md:w-3/5 mt-8 mx-auto items-center">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
