import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf-8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf-8");
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}
