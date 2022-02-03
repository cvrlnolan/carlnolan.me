import { LazyMotion, m } from "framer-motion";
import React from "react";

import {
  backEnd,
  database,
  dependencies,
  frontEnd,
  mobileDev,
  unitTest,
  versionControl,
} from "@/assets/skillStack";
import SkillRow from "@/components/skills/skillRow";

const animationFeatures = import("@/lib/features").then((res) => res.default);

const Skills = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <p className="font-bold text-xl text-gray-700 dark:text-gray-300 my-8">
        Skill Stack
      </p>
      <LazyMotion features={() => animationFeatures}>
        <m.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          layout
          className="w-full rounded p-0.5 bg-gradient-to-tr from-green-300 to-purple-500 shadow-md"
        >
          <table className="table-auto rounded bg-white dark:bg-gray-800">
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
              <SkillRow
                skill="Dependency Managers"
                technologies={dependencies}
              />
              <SkillRow skill="Mobile Development" technologies={mobileDev} />
              <SkillRow
                skill="Version Control Systems"
                technologies={versionControl}
              />
            </tbody>
          </table>
        </m.div>
      </LazyMotion>
    </>
  );
};

export default Skills;
