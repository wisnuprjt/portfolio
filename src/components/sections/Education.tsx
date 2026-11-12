import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="section-wrap education-section" id="education">
      <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Built on a foundation of learning." note="Formal education and selected recognition."/>
      <div className="education-grid">
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={23}/></div>
          <p className="eyebrow">UNDERGRADUATE EDUCATION</p>
          <h3>{education.degree}</h3>
          <p className="education-institution">{education.institution}</p>
          <div className="education-meta"><span>{education.period}</span><span>{education.location}</span></div>
          <div className="education-result">
            <div><span>FINAL GPA</span><strong>{education.gpa}</strong></div>
            <div><span>HONORS</span><strong>{education.distinction}</strong></div>
          </div>
        </article>
        <Achievements />
      </div>
      <Certifications />
    </section>
  );
}
