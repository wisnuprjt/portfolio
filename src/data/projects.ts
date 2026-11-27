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
  galleryImages?: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "colivera",
    number: "01",
    name: "COLIVERA",
    category: "IoT · Full-Stack Development · System Integration",
    period: "Jan 2025 – Dec 2025",
    role: "Project Manager & Full-Stack Developer",
    summary:
      "COLIVERA is an IoT-based E. coli Detection and Monitoring System: a portable water-quality monitoring solution developed to detect Escherichia coli bacteria in real time. It integrates hardware sensors, network communication, AI-based analysis, and a web monitoring dashboard to help stakeholders monitor potential water contamination more efficiently.",
    problem:
      "Water-quality monitoring in mining areas can be slow, particularly when identifying potential E. coli contamination. Stakeholders need a more efficient way to collect water-quality data, review detection results, and monitor potential contamination in real time.",
    approach: [
      "Worked as Project Manager and Full-Stack Developer in a team, helping coordinate the development process and deliver the integrated system.",
      "Developed the web-based monitoring dashboard, including water-quality data visualization and E. coli detection results.",
      "Integrated hardware sensors, network communication, AI-based detection, and the web dashboard into an IoT monitoring workflow.",
      "Implemented role-based access control (RBAC) to distinguish Super Admin and User access.",
      "Built sensor alert notifications to inform users about monitoring conditions and sensor activity.",
      "Participated in hardware integration, system coding, and prototype testing to ensure detection data could be processed and displayed in real time."
    ],
    outcome:
      "COLIVERA was successfully tested to detect E. coli in real time and display the results through its web monitoring dashboard. The project was registered as an Intellectual Property Right (IPR/HKI) trademark and received the 2nd Favorite Group award at the Capstone Expo.",
    technologies: [
      "IoT",
      "Hardware Sensors",
      "AI-Based Detection",
      "Web Dashboard",
      "Full-Stack Development",
      "Role-Based Access Control",
      "System Integration"
    ],
    featured: true,
    image: "/images/projects/colivera/colivera.jpg",
    galleryImages: [
      "/images/projects/colivera/colivera (1).jpg",
      "/images/projects/colivera/colivera (2).png",
      "/images/projects/colivera/colivera (3).jpg",
      "/images/projects/colivera/colivera (4).jpg",
      "/images/projects/colivera/colivera (5).svg"
    ],
    links: [
      { label: "Portfolio Video", url: "https://drive.google.com/file/d/1hYJNukPOWR3oNyB-g3aSp1OLZe4pQlSi/view?usp=sharing" },
    ]
  },
  {
    id: "ihealth-edu",
    number: "02",
    name: "iHealth Edu",
    category: "Web Application · Health Technology · Mental Health Screening",
    period: "Jun 2025 – Present",
    role: "Project Manager & Full-Stack Developer",
    summary:
      "iHealth Edu is a web-based mental-health screening system that helps local residents assess depression, anxiety, and stress levels through a digital DASS-21 questionnaire. It was designed especially to support screening for residents living with diabetes and hypertension.",
    problem:
      "Psychological distress among residents with diabetes and hypertension can go undetected because mental-health screening is not always available in community health programs. Community facilitators also need a structured way to collect responses, calculate DASS-21 scores, and review screening results.",
    approach: [
      "Worked as Project Manager and Full-Stack Developer, contributing to the development and implementation of the screening system.",
      "Built the digital DASS-21 screening flow, from questionnaire completion through score calculation and result presentation.",
      "Implemented data management so screening results and participant histories could be reviewed more clearly.",
      "Tested and used the screening flow during seminar and door-to-door activities in Banyumanik, Semarang.",
      "Assisted residents as they completed the digital screening form and supported facilitators in reviewing the resulting data."
    ],
    outcome:
      "The system was implemented during community seminar and door-to-door activities in Banyumanik, Semarang, reaching up to 400 participants. It helped facilitators review screening results more clearly and efficiently. The portfolio lists the project publication website as ihealthedu.com.",
    technologies: [
      "Web Application",
      "DASS-21",
      "Full-Stack Development",
      "Score Calculation",
      "Screening Workflow",
      "Data Management"
    ],
    featured: true,
    image: "/images/projects/ihealth-edu/cover.jpg",
    galleryImages: [
      "/images/projects/ihealth-edu/ihealth (1).svg",
      "/images/projects/ihealth-edu/ihealth (2).svg",
      "/images/projects/ihealth-edu/ihealth (3).svg",
      "/images/projects/ihealth-edu/ihealth (4).svg",
      "/images/projects/ihealth-edu/ihealth (5).svg"
    ],
    links: [
      { label: "Visit iHealth Edu", url: "https://www.ihealthedu.com/" }
    ]
  },
  {
    id: "dopamind",
    number: "03",
    name: "Dopamind+",
    category: "UI/UX Design · Mental Health · Mobile App Design",
    period: "Oct 2023 – Dec 2024",
    role: "Project Manager & UI/UX Designer",
    summary:
      "Dopamind+ is a mobile-based mental-health application prototype designed to help adolescents manage stress, emotional pressure, daily activities, sleep quality, and menstrual cycles, while making mental-health support easier to access through a simple and supportive digital experience.",
    problem:
      "Many teenagers experience stress, anxiety, and emotional pressure but may struggle to find accessible mental-health support that fits their daily needs. The project explored how a mobile application could make self-monitoring, counseling, and emergency support easier to reach.",
    approach: [
      "Worked as Project Manager and UI/UX Designer, helping lead the design process using the Design Thinking method.",
      "Conducted user research to understand adolescents' mental-health needs, including stress, lack of rest, difficulty finding support, and daily activity challenges.",
      "Created empathy maps to identify what users say, think, do, and feel, along with their pain points and support opportunities.",
      "Developed low-fidelity wireframes to structure the application's main features, layout, and navigation.",
      "Designed high-fidelity mobile screens and an interactive prototype covering the community, menstrual-cycle tracker, articles and counseling, homepage, emergency SOS, calendar, and payment for counseling.",
      "Validated the prototype through usability testing and user feedback."
    ],
    outcome:
      "The prototype achieved an 82% usability test result and a 4.26/5 user satisfaction score. Dopamind+ received 1st Winner recognition and was published as a journal article.",
    technologies: [
      "Figma",
      "Design Thinking",
      "User Research",
      "Empathy Mapping",
      "Wireframing",
      "High-Fidelity Prototyping",
      "Usability Testing"
    ],
    featured: false,
    image: "/images/projects/dopamind/dopamind.jpg",
    galleryImages: [
      "/images/projects/dopamind/dopamind.svg",
      "/images/projects/dopamind/dopamind (2).svg",
      "/images/projects/dopamind/dopamind (3).svg",
      "/images/projects/dopamind/dopamind (4).svg",
      "/images/projects/dopamind/dopamind (5).svg"
    ],
    links: [
      { label: "View Figma Design", url: "https://www.figma.com/design/BdUBNCMuIA8Sp7mLCAz4HH/Dopamind-?node-id=0-1&p=f" },
      { label: "Interactive Prototype", url: "https://www.figma.com/proto/BdUBNCMuIA8Sp7mLCAz4HH/Dopamind-?page-id=0%3A1&node-id=1-1740&p=f&viewport=493%2C278%2C0.09&t=tOFHzJxqRRxOdhnK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1740" },
      { label: "Journal Publication", url: "https://journal.lembagakita.com/ijsecs/article/view/2391" }
    ]
  },
  {
    id: "nourish",
    number: "04",
    name: "Nourish+",
    category: "UI/UX Design · Health & Nutrition · Pregnancy Monitoring",
    period: "Jun 2023 – Sep 2023",
    role: "Project Manager & UI/UX Designer",
    summary:
      "Nourish+ is a mobile application design concept that helps pregnant women and parents access maternal and child-health guidance through a practical, accessible digital experience. It focuses on nutrition awareness, pregnancy care, child-health information, and emergency support for families in Indonesia.",
    problem:
      "Pregnant women and parents need easier access to nutrition guidance, maternal-health information, and emergency support. The project also considered child-health challenges such as stunting and the need to make relevant information and services easier to access.",
    approach: [
      "Worked as Project Manager and UI/UX Designer, helping lead the design process using the Design Thinking method.",
      "Identified health issues and user needs related to maternal health, child nutrition, and stunting.",
      "Analyzed target users, including pregnant women, parents, and healthcare workers.",
      "Created wireframes to define the main screens, layout, and user interaction flow.",
      "Designed user flows and high-fidelity mobile screens for login, booking tickets, schedule control, dashboard, date details, maps, emergency services, and SOS support.",
      "Developed the final mobile application prototype and prepared it for design evaluation."
    ],
    outcome:
      "Nourish+ became a maternal and child-health application prototype featuring nutrition monitoring, health information, appointment booking, maps, and emergency support. The project was recognized as 3rd Winner in a UI/UX Design Competition.",
    technologies: [
      "Figma",
      "Design Thinking",
      "User Research",
      "Target User Analysis",
      "Wireframing",
      "User Flow",
      "High-Fidelity Prototyping"
    ],
    featured: false,
    image: "/images/projects/nourish/nourish.jpg",
    galleryImages: [
      "/images/projects/nourish/nourish.svg",
      "/images/projects/nourish/nourish (2).svg",
      "/images/projects/nourish/nourish (3).svg",
      "/images/projects/nourish/nourish (4).svg",
      "/images/projects/nourish/nourish (5).svg"
    ],
    links: [
      { label: "View Figma Design", url: "https://www.figma.com/design/gOmYZuMwu4ufL31Am9enhf/Nourish-?node-id=0-1&p=f" },
      { label: "Interactive Prototype", url: "https://www.figma.com/proto/gOmYZuMwu4ufL31Am9enhf/Nourish-?page-id=0%3A1&node-id=1-346&p=f&viewport=569%2C281%2C0.36&t=jKuOMlwpU4oYqs1N-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A346" }
    ]
  },
  {
    id: "racingcar",
    number: "05",
    name: "RacingCar 3D",
    category: "Game Development · Unity · 3D",
    period: "Apr 2024 – May 2024",
    role: "Solo Game Developer",
    summary:
      "RacingCar 3D is my first 3D game project, developed independently using Unity for a Multimedia course. It became my starting point in learning game development from scratch and turning that learning into a playable racing experience.",
    problem:
      "As a first experience in 3D game development, the challenge was to learn an unfamiliar tool and combine environment design, 3D assets, vehicle controls, and gameplay logic into a working interactive project despite having no prior Unity experience.",
    approach: [
      "Learned the Unity workspace and basic game-development workflow through tutorials and trial-and-error practice.",
      "Created a gameplay storyboard covering the start countdown, driving through the track, avoiding obstacles, and reaching the finish line.",
      "Prepared car models, environment objects, materials, and other game assets.",
      "Built terrain, designed racing tracks, arranged environment elements, and added a water plane.",
      "Implemented car movement, camera control, and gameplay flow to create a playable racing experience.",
      "Worked with both a custom-built racing map and an imported racing map inspired by a Mario Kart-style track."
    ],
    outcome:
      "RacingCar 3D became a playable 3D racing game built from scratch for the Multimedia course. It was a major learning milestone and achieved the highest score in the cohort.",
    technologies: [
      "Unity",
      "C#",
      "3D Game Development",
      "3D Assets",
      "Terrain & Track Design",
      "Gameplay Logic",
      "Camera Control"
    ],
    featured: false,
    image: "/images/projects/racingcar/racing.png",
    galleryImages: [
      "/images/projects/racingcar/racingcar.svg",
      "/images/projects/racingcar/racingcar (2).svg",
      "/images/projects/racingcar/racingcar (3).svg",
      "/images/projects/racingcar/racingcar (4).svg",
      "/images/projects/racingcar/racingcar (5).svg"
    ],
    links: [
      { label: "View Video Game", url: "https://drive.google.com/file/d/17n0Qolai210lALfkvEVqqZbSa8zlQZeQ/view" },
      { label: "Prototype Link", url: "https://canva.link/580j902gcznzrlz" }
    ]
  }
];
