import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import FeaturedProjects from "@/components/projects/featuredProjects";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/masteredSkills";

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
        <Experience />
      </Navbar>
    </>
  );
};

export default Home;
