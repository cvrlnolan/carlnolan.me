import React from "react";

import type { SkillProps } from "@/assets/types";

const SkillRow = (props: SkillProps) => {
  return (
    <>
      <tr className="whitespace-normal">
        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
          {props.skill}
        </td>
        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
          {props.technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="inline-flex px-2 py-1.5 ml-2 mt-2 rounded-full font-semibold text-sm text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-gray-600"
            >
              {tech}
            </span>
          ))}
        </td>
      </tr>
    </>
  );
};

export default SkillRow;
