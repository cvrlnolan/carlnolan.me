import React from "react";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "@/lib/getMDX";
import SnippetLayout from "layouts/snippetLayout";
import MDXComponents from "@/components/snippets/mdxComponents";

type Props = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: any;
};

export default function Snippet({ mdxSource, frontMatter }: Props) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <SnippetLayout>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </SnippetLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getFiles("snippets"))
    .map((path: string) => path.replace(/\.mdx?$/, ""))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getFileBySlug("snippets", params?.slug as string);

  return {
    props: posts,
  };
};
