import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Navbar from "@/components/navbar";
import ProjectsPage from "@/components/projects/projectsPage";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar>
        <ProjectsPage />
      </Navbar>
    </>
  );
};

export default Projects;
