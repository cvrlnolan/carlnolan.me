import { motion } from "framer-motion";
import React from "react";

import { item } from "@/assets/animations";
import type { Project } from "@/assets/types";

const ProjectCard: React.FC<{ props: Project }> = ({ props }) => {
  return (
    <>
      <motion.a
        variants={item}
        layout
        exit={{ opacity: 0 }}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-52 rounded p-0.5 bg-gradient-to-tr from-green-300 to-purple-500 shadow-md cursor-pointer transform motion-safe:hover:scale-105 md:motion-safe:hover:scale-110 transition-transform duration-150"
      >
        <div className="flex-col h-full bg-white rounded dark:bg-gray-800 overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-700 dark:text-gray-300">
              {props.title}
            </div>
          </div>
          <div className="flex flex-wrap px-4 pb-2">
            {props.tools.map((tool: string, i: number) => (
              <span
                key={i}
                className="inline-flex bg-gray-300 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </>
  );
};

export default ProjectCard;
