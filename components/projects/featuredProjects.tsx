import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/projects/projectCard";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { projects } from "@/assets/projects";
import type { Project } from "@/assets/types";
import { motion } from "framer-motion";
import { variants, transition } from "@/assets/animations";

const FeaturedProjects = () => {
  return (
    <>
      <p className="font-bold text-xl text-gray-700 dark:text-gray-300 my-8">
        Featured Projects
      </p>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={transition}
        className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.slice(0, 3).map((project: Project, i: number) => (
          <ProjectCard
            key={i}
            id={project.id}
            title={project.title}
            tools={project.tools}
            link={project.link}
          />
        ))}
      </motion.div>
      <div className="flex w-full mt-4 justify-end">
        <Link href="/projects" passHref>
          <button className="btn-projects">
            All Projects <ArrowCircleRightIcon className="w-4 h-4 ml-2" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedProjects;
