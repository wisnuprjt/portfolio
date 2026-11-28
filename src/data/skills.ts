
export type SkillItem = {
  name: string;
  icon: string;
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
      { name: "REST API", icon: "restapi" },
      { name: "Express.js", icon: "express" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL", icon: "sql" },
      { name: "Database Design", icon: "databasedesign" },
    ],
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Connecting devices, sensors, and software platforms.",
    items: [
      { name: "ESP32", icon: "espressif" },
      { name: "Arduino", icon: "arduino" },
      { name: "Sensor Integration", icon: "sensorintegration" },
      { name: "IoT Communication", icon: "iotcommunication" },
    ],
  },
  {
    title: "AI & Integration",
    description:
      "Integrating external services into practical applications.",
    items: [
      { name: "API Integration", icon: "apiintegration" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Data Visualization", icon: "datavisualization" },
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
  {
    title: "IT Infrastructure",
    description:
      "Managing server environments, deployment, and IT infrastructure.",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Ubuntu", icon: "ubuntu" },
      { name: "Docker", icon: "docker" },
      { name: "VirtualBox", icon: "virtualbox" },
      { name: "CI/CD", icon: "githubactions" },
    ],
  },
  {
    title: "Networking & Security",
    description:
      "Configuring networks and managing system security.",
    items: [
      { name: "TCP/IP", icon: "network" },
      { name: "VLAN", icon: "network" },
      { name: "Routing & Switching", icon: "cisco" },
      { name: "VPN", icon: "openvpn" },
      { name: "RBAC", icon: "auth0" },
    ],
  },
  {
    title: "Monitoring & Testing",
    description:
      "Monitoring system performance and conducting technical testing.",
    items: [
      { name: "Apache JMeter", icon: "apachejmeter" },
      { name: "System Monitoring", icon: "grafana" },
      { name: "Troubleshooting", icon: "linux" },
    ],
  },
];
