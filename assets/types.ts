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
