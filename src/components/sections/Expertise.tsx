
import { Code2 } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillIcon from "@/components/ui/SkillIcon";
import { skills } from "@/data/skills";

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
