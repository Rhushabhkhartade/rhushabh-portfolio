import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "UI Design & Creative",
    skills: [
      { name: "UI Design", tag: "Specialization" },
      { name: "Figma", tag: "Primary Tool" },
      { name: "Canva", tag: "Visual Creation" },
      { name: "Poster Design", tag: "Graphic Editorial" },
      { name: "Banner Design", tag: "Brand Presentation" },
      { name: "Visual Design", tag: "Aesthetics & Hierarchy" },
      { name: "Layout & Typography", tag: "Spatial Systems" },
    ],
  },
  {
    category: "Cyber Security & Technology",
    skills: [
      { name: "Cyber Security Fundamentals", tag: "Academic Core" },
      { name: "Linux", tag: "Operating System" },
      { name: "Kali Linux", tag: "Security Platform" },
      { name: "Bash", tag: "Shell Scripting" },
      { name: "PowerShell", tag: "Automation" },
      { name: "Networking Fundamentals", tag: "Protocols & Topology" },
      { name: "C++", tag: "Programming" },
      { name: "HTML", tag: "Web Markup" },
      { name: "CSS", tag: "Styling & Responsive" },
      { name: "JavaScript", tag: "Interactive Logic" },
    ],
  },
];
