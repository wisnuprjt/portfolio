export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "colivera", number: "01", name: "COLIVERA",
    category: "IoT · Full-Stack Development · System Integration",
    period: "2025", role: "Project Manager & Full-Stack Developer",
    summary: "An IoT-based water quality monitoring system designed to support the detection and monitoring of Escherichia coli indicators through connected sensors, data processing, and a web dashboard.",
    problem: "Water quality monitoring requires connected data collection and a clear interface for reviewing sensor readings, historical records, and analysis results.",
    approach: [
      "Developed a web dashboard for monitoring water quality parameters.",
      "Integrated IoT sensor data with backend endpoints and database storage.",
      "Implemented data visualization, historical records, and notification flows.",
      "Integrated an AI-assisted analysis workflow using an external API."
    ],
    outcome: "Delivered an integrated prototype combining IoT data collection, web-based monitoring, and supporting analysis features. The project also received an award at the Capstone Expo and an intellectual property registration, as documented in the supplied portfolio materials.",
    technologies: ["Next.js", "Node.js", "Express.js", "MySQL", "ESP32", "IoT", "REST API"],
    featured: true, image: "/images/projects/colivera/cover-placeholder.svg",
    links: [{ label: "Repository", url: "#" }, { label: "Live demo", url: "#" }]
  },
  {
    id: "ihealth-edu", number: "02", name: "iHealth Edu",
    category: "Web Application · Health Technology",
    period: "2025", role: "Project Manager & Full-Stack Developer",
    summary: "A web-based mental health screening application using the DASS-21 questionnaire to support screening and result management.",
    problem: "Screening activities need a structured way to collect questionnaire responses, calculate scores, and manage screening results.",
    approach: [
      "Developed the web application flow for DASS-21 screening.",
      "Implemented automated score calculation and result presentation.",
      "Supported screening history and result management."
    ],
    outcome: "The CV documents project activity from June to September 2025 and use in a community activity involving up to 400 participants.",
    technologies: ["Web Development", "JavaScript", "Database", "UI Development"],
    featured: true, image: "/images/projects/ihealth-edu/cover-placeholder.svg",
    links: [{ label: "Repository", url: "#" }, { label: "Project details", url: "#" }]
  },
  {
    id: "dopamind", number: "03", name: "Dopamind+",
    category: "UI/UX Design · Mental Health",
    period: "2023–2024", role: "Project Manager & UI/UX Designer",
    summary: "A mental health mobile application concept developed through a user-centered design process.",
    problem: "The concept explores how a mobile experience can make mental health resources and support easier to access.",
    approach: [
      "Applied Design Thinking methodology.",
      "Conducted user research and empathy mapping.",
      "Created wireframes and high-fidelity prototypes."
    ],
    outcome: "The supplied portfolio reports an 82% usability result and a satisfaction score of 4.26/5. The project also received a first-winner recognition and a publication, as documented in the source materials.",
    technologies: ["Figma", "UI/UX Design", "Design Thinking", "Prototyping"],
    featured: false, image: "/images/projects/dopamind/cover-placeholder.svg",
    links: [{ label: "Prototype", url: "#" }, { label: "Publication", url: "#" }]
  },
  {
    id: "nourish", number: "04", name: "Nourish+",
    category: "UI/UX Design · Health & Nutrition",
    period: "2023", role: "Project Manager & UI/UX Designer",
    summary: "A nutrition and pregnancy monitoring mobile application concept focused on maternal and child health information.",
    problem: "The concept addresses the need for accessible nutrition information and supportive maternal health features.",
    approach: [
      "Designed the user experience and application structure.",
      "Explored nutrition information, appointment booking, and emergency support flows.",
      "Created interface concepts and prototypes."
    ],
    outcome: "The project received third place in a national UI/UX design competition, according to the supplied portfolio materials.",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    featured: false, image: "/images/projects/nourish/cover-placeholder.svg",
    links: [{ label: "Prototype", url: "#" }]
  },
  {
    id: "racingcar", number: "05", name: "RacingCar 3D",
    category: "Game Development · 3D",
    period: "2024", role: "Solo Game Developer",
    summary: "A 3D racing game project developed with Unity, covering environment setup, vehicle movement, and gameplay implementation.",
    problem: "The project explored the fundamentals of building an interactive 3D driving experience.",
    approach: [
      "Created a 3D environment and terrain.",
      "Prepared game assets and scene components.",
      "Implemented car movement, camera control, and gameplay logic."
    ],
    outcome: "The supplied portfolio describes the project as achieving the highest score in its cohort.",
    technologies: ["Unity", "C#", "3D Design", "Game Development"],
    featured: false, image: "/images/projects/racingcar/cover-placeholder.svg",
    links: [{ label: "Gameplay", url: "#" }]
  }
];
