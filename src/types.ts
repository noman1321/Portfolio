export type SocialLinks = {
  email?: string;
  phone?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  resume?: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
};

export type ArchitectureDiagram = {
  title: string;
  layers: ArchitectureNode[][];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  overview: string;
  whatIBuilt: string[];
  howItWorks: string[];
  architecture: ArchitectureDiagram;
  technicalDecisions: { title: string; detail: string }[];
  aiWorkflow?: string[];
  challenges: { challenge: string; decision: string; result: string }[];
  learned: string[];
  impact: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  skills: string[];
  domains: string[];
  featured: boolean;
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  pipeline: string[];
  context: string;
  businessProblem: string;
  requirements: string[];
  architecture: string;
  modelSelection: string;
  ragOrAgent: string;
  integration: string;
  deployment: string;
  monitoring: string;
  iteration: string;
  challenge: { challenge: string; decision: string; result: string };
};

export type LabExperiment = {
  slug: string;
  title: string;
  subtitle: string;
  status: "active" | "ongoing" | "notes";
  summary: string;
  focus: string[];
  notes: string[];
  takeaways: string[];
};

export type BuildStep = {
  number: string;
  title: string;
  detail: string;
};

export type TimelineItem = {
  year: string;
  label: string;
  detail: string;
};

export type Experience = {
  company: string;
  title: string;
  dateRange: string;
  location?: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  dateRange: string;
  location?: string;
  achievements: string[];
};
