
type OrganizationExperience = {
  organization: string;
  position: string;
  period: string;
  type: string;
  logo: string;
  logoAlt: string;
  highlights: string[];
};

export const organizations: OrganizationExperience[] = [
  {
    organization: "Kronik Film Media",
    position: "Creative Team Member · Editor · Videographer · Speaker · Director",
    period: "2022 – 2024",
    type: "Campus organization",
    logo: "/images/experience/kronikfilmmedia.jpg",
    logoAlt: "Kronik Film Media logo",
    highlights: [],
  },
  {
    organization: "Google Developer Student Club Undip",
    position: "Member",
    period: "2023 – 2025",
    type: "Campus organization",
    logo: "/images/experience/googledeveloper.jpg",
    logoAlt: "Google Developer Student Club Undip logo",
    highlights: [],
  },
  {
    organization: "KMHD Undip",
    position: "Creative Team & Documenter",
    period: "2022 – 2024",
    type: "Campus organization",
    logo: "/images/experience/kmhd undip.jpg",
    logoAlt: "KMHD Undip logo",
    highlights: [],
  },
];


export const certifications = [
  {
    title: "English Proficiency Test (EPT) — SEU UNDIP | Skor: 534",
    provider: "undip",
    year: "2026",
  },
  {
    title: "Lab: Troubleshoot Your Code Using IBM Bob",
    provider: "ibm",
    year: "2026",
  },
  {
    title: "Intelligent by Design: Build an AI Agent",
    provider: "ibm",
    year: "2026",
  },
  {
    title: "Introduction to Large Language Models",
    provider: "ibm",
    year: "2026",
  },
  {
    title: "Digital Safety and Security Awareness",
    provider: "cisco",
    year: "2025",
  },
  {
    title: "CCNAv7 Introduction to Networks",
    provider: "cisco",
    year: "2024",
  },
  {
    title: "CCNAv7 Switching/Routing/Wireless Essentials",
    provider: "cisco",
    year: "2024",
  },
  {
    title: "Introduction to IoT",
    provider: "cisco",
    year: "2024",
  },
  {
    title: "IT Essentials",
    provider: "cisco",
    year: "2024",
  },
  {
    title: "Database Foundations",
    provider: "oracle",
    year: "2024",
  },
  {
    title: "Database Design",
    provider: "oracle",
    year: "2024",
  },
  {
    title: "HCIA-AI v3.5 Training",
    provider: "huawei",
    year: "2024",
  },
] as const;
