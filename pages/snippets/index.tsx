import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import SnippetsPage from "@/components/snippets/snippetsPage";
import { root, getFiles } from "@/lib/getMDX";
import type { SnippetProps } from "@/assets/types";

function Snippets(props: SnippetProps) {
  return (
    <>
      <Head>
        <title>Snippets</title>
      </Head>
      <Navbar>
        <SnippetsPage posts={props.posts} />
      </Navbar>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getFiles("snippets")).map((filePath: string) => {
    const source = fs.readFileSync(
      path.join(root, "data", "snippets", filePath)
    );
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });

  return {
    props: { posts },
  };
};

export default Snippets;
