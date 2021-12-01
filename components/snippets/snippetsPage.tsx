import React from "react";
import SnippetCard from "@/components/snippets/snippetCard";

type Data = {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
};

type BlogProps = {
  content: string;
  data: Data;
  filePath: string;
};

type Props = {
  posts: BlogProps[];
};

const SnippetsPage = (props: Props) => {
  return (
    <>
      <div className="block w-full my-8 space-y-4">
        <p className="font-bold text-4xl text-gray-700 dark:text-gray-300">
          Snippets
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Here is the snippetyard, a piece of area where I share some tricks or
          blocks of code which have been helpful during development & production
          stages of projects I worked on.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I personally resolve to this, over blog writing 😝
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* {[...Array(6)].map((e: any, i: number) => (
          <SnippetCard key={i} />
        ))} */}
        {props.posts.map((post: BlogProps) => (
          <SnippetCard
            key={post.data.title}
            title={post.data.title}
            publishedAt={post.data.publishedAt}
            summary={post.data.summary}
            slug={post.data.slug}
          />
        ))}
      </div>
    </>
  );
};

export default SnippetsPage;
