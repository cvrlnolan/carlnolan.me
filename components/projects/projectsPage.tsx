import React from "react";
import ProjectCard from "@/components/projects/projectCard";

const ProjectsPage = () => {
  return (
    <>
      <div className="block w-full my-8 space-y-4">
        <p className="font-bold text-4xl text-gray-700 dark:text-gray-300">
          Projects
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          culpa nemo a illo, nobis eveniet eum laborum ratione. Deleniti rerum
          suscipit totam corporis perspiciatis voluptates necessitatibus quia ad
          nostrum enim.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(9)].map((e: any, i: number) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
