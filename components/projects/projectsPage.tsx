import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { transition, variants } from "@/assets/animations";
import { projects } from "@/assets/projects";
import type { Project } from "@/assets/types";
import ProjectCard from "@/components/projects/projectCard";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="block w-full my-8 space-y-4">
        <p className="font-bold text-4xl text-gray-700 dark:text-gray-300">
          Projects
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Welcome to my open-source project gallery where I showcase hobby &
          experimental projects with regards to my skill set.
        </p>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        layout
        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence>
          {projects.map((project: Project, i: number) => (
            <ProjectCard key={i} props={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
