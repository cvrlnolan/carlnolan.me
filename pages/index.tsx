import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";

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
