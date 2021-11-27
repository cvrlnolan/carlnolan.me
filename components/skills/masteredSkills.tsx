import React from "react";
import { frontEnd } from "@/assets/skillStack";

const Skills = () => {
  return (
    <>
      <p className="font-bold text-xl text-gray-700 dark:text-gray-300 my-8">
        Skill Stack
      </p>
      <table className="table-auto bg-white dark:bg-gray-800 rounded shadow-md">
        <thead>
          <tr>
            <th className="px-6 py-2 text-gray-700 dark:text-gray-300">
              Skill
            </th>
            <th className="px-6 py-2 text-gray-700 dark:text-gray-300">
              Mastered Technologies
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="whitespace-normal">
            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
              Frontend Development
            </td>
            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
              {frontEnd.map((skill: string, i: number) => (
                <span
                  key={i}
                  className="inline-flex px-2 ml-2 rounded-full font-semibold text-sm text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-gray-600"
                >
                  {skill}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Skills;
