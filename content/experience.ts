import type {
  EducationItem,
  AchievementItem,
  CertificateItem,
  Experience,
} from "@/types/portfolio";

/**
 * Academic Foundation
 * Audited per official status: Currently Pursuing (2025–2029 Expected)
 */
export const education: EducationItem = {
  id: "edu-btech-cse",
  degree: "B.Tech CSE (Cyber Security)",
  institution: "JD College of Engineering and Technology, Nagpur",
  location: "Nagpur, Maharashtra, India",
  period: "2025 — 2029 (Expected)",
  status: "Currently Pursuing",
  field: "Computer Science & Engineering (Cyber Security)",
  description:
    "Undergraduate degree program in Computer Science and Engineering with a focus on Cyber Security, studying foundational computing, network systems, and digital defense principles.",
  highlights: [
    "Foundational study in Computer Science, Data Structures, and Information Security principles.",
    "Understanding digital systems, network architecture, and security fundamentals.",
    "Connecting cybersecurity awareness with clean, human-centered UI/UX design.",
  ],
};

/**
 * Verified Milestones, Leadership & Competitive Achievements
 * Updated with verified organizer, hackathon count, and event context.
 */
export const achievements: readonly AchievementItem[] = [
  {
    id: "achieve-designathon-winner",
    index: "01",
    category: "Design Recognition",
    title: "Designathon Winner",
    organization: "JD College of Engineering and Technology — CSE Department Forum Club",
    role: "UI Designer",
    period: "Award Recipient",
    badge: "Winner",
    description:
      "Recognized as the Designathon Winner, organized by the JD College of Engineering and Technology CSE Department Forum Club, for creative problem-solving and user interface design execution.",
    highlights: [
      "Developed a user interface concept focusing on clear visual hierarchy, typography, and intuitive user flows.",
      "Created an organized component layout presenting the digital solution with visual clarity.",
    ],
  },
  {
    id: "achieve-wall-magazine-coordinator",
    index: "02",
    category: "Creative Coordination",
    title: "Wall Magazine Coordinator",
    organization: "Abhedhya Forum",
    role: "Wall Magazine Coordinator",
    period: "Coordinator",
    badge: "Coordinator",
    description:
      "Coordinated the visual presentation and creative curation for the Abhedhya Forum wall magazine, overseeing layout composition and visual communication.",
    highlights: [
      "Organized layout composition, content arrangement, and typography hierarchy for visual displays.",
      "Coordinated with student contributors on creative presentation standards.",
    ],
  },
  {
    id: "achieve-hackathon-participation",
    index: "03",
    category: "Collaborative Prototyping",
    title: "Hackathon Participation",
    organization: "Hackathons",
    role: "UI/UX Contributor",
    period: "5 Hackathons Participated",
    badge: "5 Hackathons",
    description:
      "Participated in five hackathons, gaining experience in teamwork, problem-solving, and collaborative project development.",
    highlights: [
      "Collaborated in multidisciplinary teams to design and prototype digital solutions.",
      "Contributed interface layout, wireframing, and user flow mapping under collaborative project conditions.",
    ],
  },
  {
    id: "achieve-ideathon-participant",
    index: "04",
    category: "Innovation & Ideation",
    title: "Ideathon Participant",
    organization: "Nagpur Yuva Manthan",
    role: "Participant",
    period: "Ideathon Participant",
    badge: "Participant",
    description:
      "Participated in the Nagpur Yuva Manthan Ideathon, associated with the youth empowerment initiative and presence of Maharashtra Chief Minister Devendra Fadnavis, presenting innovative project concepts and collaborative ideas.",
    highlights: [
      "Collaborated on project ideation addressing youth and regional development initiatives.",
      "Presented structured concept frameworks and collaborative problem-solving proposals.",
    ],
  },
];

/**
 * Future-Ready Certificate Gallery
 * Stays hidden until verified certificate images are added.
 */
export const certificates: readonly CertificateItem[] = [];

/**
 * Preserved for backward compatibility
 */
export const experiences: readonly Experience[] = [
  {
    id: "exp-abhedhya",
    role: "Wall Magazine Coordinator",
    company: "Abhedhya Forum",
    location: "Nagpur, India",
    period: "Coordinator",
    current: true,
    description:
      "Creative coordination and visual presentation for the Abhedhya Forum wall magazine.",
    highlights: [
      "Organized layout composition and visual presentation for forum displays.",
      "Curated student contributions for aesthetic and structural consistency.",
    ],
    technologies: ["Visual Design", "Layout Design", "Typography", "Creative Coordination"],
  },
];
