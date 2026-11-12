import SectionHeading from "@/components/ui/SectionHeading";
import Organizations from "@/components/sections/Organizations";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section-wrap experience-section" id="experience">
      <SectionHeading eyebrow="WHERE I HAVE CONTRIBUTED" title="Professional experience." note="Selected roles and project-based contributions."/>
      <div className="timeline">
        {experiences.map((item, index) => (
          <article className="timeline-item" key={item.organization}>
            <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
            <div className="timeline-main">
              <div className="timeline-heading">
                <div><p className="eyebrow">{item.type}</p><h3>{item.position}</h3><p className="timeline-org">{item.organization}</p></div>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <Organizations />
    </section>
  );
}
