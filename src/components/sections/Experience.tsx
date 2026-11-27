import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Organizations from "@/components/sections/Organizations";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <>
      <section className="section-wrap experience-section professional-experience-section" id="experience">
        <SectionHeading eyebrow="WHERE I HAVE CONTRIBUTED" title="Professional experience." note="Selected roles and project-based contributions."/>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-item" key={item.organization}>
              <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline-main">
                <div className="timeline-heading">
                  <div className="timeline-identity">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      width={48}
                      height={48}
                      className="timeline-logo"
                    />
                    <div className="timeline-identity-copy">
                      <p className="eyebrow">{item.type}</p>
                      <h3>{item.position}</h3>
                      <p className="timeline-org">
                        <span className="timeline-org-name">{item.organization}</span>
                        <span className="timeline-location">{item.location}</span>
                      </p>
                    </div>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <ul className="timeline-description">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Organizations />
    </>
  );
}
