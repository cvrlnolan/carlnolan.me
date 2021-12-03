import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import FeaturedProjects from "@/components/projects/featuredProjects";
import ExperienceTimeline from "@/components/experience/experience";
import Skills from "@/components/skills/skillTable";

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
