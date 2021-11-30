import React from "react";
import Link from "next/link";
import type { Project } from "@/assets/types";

const ProjectCard = (props: Project) => {
  return (
    <>
      <Link href={props.link} passHref>
        <div className="w-full md:w-52 bg-white dark:bg-gray-800 overflow-hidden rounded border dark:border-gray-700 shadow-md cursor-pointer transform motion-safe:hover:scale-110 transition-transform duration-150">
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
      </Link>
    </>
  );
};

export default ProjectCard;
