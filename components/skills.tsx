import React from "react";

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              quisquam cupiditate non quam laudantium voluptates provident
              suscipit in voluptate, esse ut ullam fugit! Quod aliquam impedit,
              cumque doloremque explicabo voluptate!
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Skills;
