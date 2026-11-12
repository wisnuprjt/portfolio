
export type SkillItem = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: SkillItem[];
};

export const skills: SkillGroup[] = [
  {
    title: "Software Development",
    description:
      "Building web applications and application interfaces.",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    title: "Backend & Data",
    description:
      "Working with APIs, databases, and application data.",
    items: [
      { name: "REST API" },
      { name: "Express.js", icon: "express" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL" },
      { name: "Database Design" },
    ],
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Connecting devices, sensors, and software platforms.",
    items: [
      { name: "ESP32", icon: "espressif" },
      { name: "Arduino", icon: "arduino" },
      { name: "Sensor Integration" },
      { name: "IoT Communication" },
    ],
  },
  {
    title: "AI & Integration",
    description:
      "Integrating external services into practical applications.",
    items: [
      { name: "API Integration" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Data Visualization" },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Tools used across development and collaboration.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Figma", icon: "figma" },
    ],
  },
];
