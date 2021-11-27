import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import SnippetsPage from "@/components/snippets/snippetsPage";

const Snippets: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snippets</title>
      </Head>
      <Navbar>
        <SnippetsPage />
      </Navbar>
    </>
  );
};

export default Snippets;
