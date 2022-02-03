import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";

const FeaturedProjects = dynamic(
  () => import("@/components/projects/featuredProjects")
);

const Skills = dynamic(() => import("@/components/skills/skillTable"));

const ExperienceTimeline = dynamic(
  () => import("@/components/experience/experience")
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar>
        <Introduction />
        <FeaturedProjects />
        <Skills />
        <ExperienceTimeline />
      </Navbar>
    </>
  );
};

export default Home;
