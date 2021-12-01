export type Project = {
  id: number;
  title: string;
  tools: string[];
  link: string;
};

export type Experience = {
  id: number;
  companyName: string;
  title: string;
  period: string;
  jobType: string;
  description: string;
};

export type SkillProps = {
  skill: string;
  technologies: string[];
};

export type SnippetData = {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
};

export type SnippetPost = {
  content: string;
  data: SnippetData;
  filePath: string;
};

export type SnippetProps = {
  posts: SnippetPost[];
};
