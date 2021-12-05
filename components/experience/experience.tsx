import React from "react";
import ExperienceBox from "@/components/experience/experienceBox";
import { experiences } from "@/assets/experiences";
import type { Experience } from "@/assets/types";
import { motion, AnimatePresence } from "framer-motion";
import { variants, transition } from "@/assets/animations";

const ExperienceTimeline = () => {
  return (
    <>
      <p className="font-bold text-xl text-gray-700 dark:text-gray-300 my-8">
        Experience
      </p>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={transition}
        layout
        className="grid w-full grid-cols-1 gap-4"
      >
        <AnimatePresence>
          {experiences.map((experience: Experience, i: number) => (
            <ExperienceBox
              key={i}
              id={experience.id}
              companyName={experience.companyName}
              title={experience.title}
              period={experience.period}
              jobType={experience.jobType}
              description={experience.description}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ExperienceTimeline;
