import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar>
        <Introduction />
      </Navbar>
    </>
  );
};

export default Home;
