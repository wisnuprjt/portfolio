
import { Code2 } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import LogoLoop from "@/components/ui/LogoLoop";
import SkillIcon from "@/components/ui/SkillIcon";
import { skills } from "@/data/skills";

const skillColors: Record<string, string> = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextdotjs: "#000000",
  nodedotjs: "#5FA04E",
  html5: "#E34F26",
  css3: "#663399",
  restapi: "#FF6C37",
  express: "#000000",
  mysql: "#4479A1",
  sql: "#00758F",
  databasedesign: "#4479A1",
  espressif: "#E7352C",
  arduino: "#008184",
  sensorintegration: "#8A2BE2",
  iotcommunication: "#1565C0",
  apiintegration: "#7E57C2",
  huggingface: "#FFD21E",
  datavisualization: "#E4A11B",
  git: "#F05032",
  github: "#181717",
  postman: "#FF6C37",
  visualstudiocode: "#007ACC",
};

const technologyLogos = skills.flatMap((group) =>
  group.items.map((item) => ({
    node: <SkillIcon name={item.name} icon={item.icon} />,
    title: item.name,
    ariaLabel: `${item.name} logo`,
    hoverColor: skillColors[item.icon],
  })),
);

export default function Expertise() {
  return (
    <section
      className="section-wrap expertise-section"
      id="expertise"
    >
      <SectionHeading
        eyebrow="WHAT I WORK WITH"
        title="Technical expertise."
        note="A practical toolkit shaped by academic work and hands-on projects."
      />

      <div className="expertise-logo-loop">
        <LogoLoop
          logos={technologyLogos}
          speed={100}
          direction="left"
          logoHeight={32}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technologies and tools"
        />
      </div>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <article
            className="skill-card"
            key={group.title}
          >
            <div className="skill-card-top">
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <Code2 size={18} />
            </div>

            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <div className="tag-list skill-tag-list">
              {group.items.map((item) => (
                <span
                  className="tag skill-tag"
                  key={item.name}
                >
                  <SkillIcon
                    name={item.name}
                    icon={item.icon}
                  />

                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
