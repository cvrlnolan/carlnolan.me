import React from "react";
import {
  frontEnd,
  backEnd,
  database,
  unitTest,
  dependencies,
  mobileDev,
  versionControl,
} from "@/assets/skillStack";
import SkillRow from "@/components/skills/skillRow";

const Skills = () => {
  return (
    <>
      <p className="font-bold text-xl text-gray-700 dark:text-gray-300 my-8">
        Skill Stack
      </p>
      <table className="table-auto bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-md">
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
          <SkillRow skill="Frontend Development" technologies={frontEnd} />
          <SkillRow skill="Back-end Development" technologies={backEnd} />
          <SkillRow skill="Database Management" technologies={database} />
          <SkillRow skill="Unit Testing" technologies={unitTest} />
          <SkillRow skill="Dependency Managers" technologies={dependencies} />
          <SkillRow skill="Mobile Development" technologies={mobileDev} />
          <SkillRow
            skill="Version Control Systems"
            technologies={versionControl}
          />
        </tbody>
      </table>
    </>
  );
};

export default Skills;
