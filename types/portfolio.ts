export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  projectType?: "Concept Design" | "Functional Application";
  contribution: string;
  year: string;
  technologies: readonly string[];
  featured?: boolean;
  image?: string;
  gallery?: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
  layoutSpan?: "full" | "wide" | "normal";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  field: string;
  description: string;
  highlights: readonly string[];
}

export interface AchievementItem {
  id: string;
  index: string;
  category: string;
  title: string;
  organization?: string;
  role?: string;
  period?: string;
  badge?: string;
  metrics?: string;
  description: string;
  highlights: readonly string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  tag?: string;
  description?: string;
  level?: "Expert" | "Proficient" | "Specialized";
}

export interface SkillGroup {
  category: string;
  skills: readonly SkillItem[];
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  handle: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  identity: string;
  tagline: string;
  bio: string;
  aboutParagraphs: readonly string[];
  philosophy: readonly PhilosophyPrinciple[];
  contactHeading: string;
  contactSupportingText: string;
  location: string;
  availability: {
    status: "available" | "limited" | "unavailable";
    label: string;
  };
  contactEmail: string;
  socials: readonly SocialLink[];
  navLinks: readonly {
    label: string;
    href: string;
  }[];
}
