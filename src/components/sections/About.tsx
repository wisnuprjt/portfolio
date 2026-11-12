import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Engineering mindset, practical outcomes." note="A short introduction to the person behind the work."/>
      <div className="about-grid">
        <div className="about-lead"><span className="large-index">01</span><p>{profile.about}</p></div>
        <div className="about-details">
          <div className="detail-row"><span>Education</span><strong>{profile.degree}</strong></div>
          <div className="detail-row"><span>Institution</span><strong>{profile.university}</strong></div>
          <div className="detail-row"><span>Academic result</span><strong>{profile.gpa} · Cum Laude</strong></div>
          <div className="detail-row"><span>Graduated</span><strong>{profile.graduation}</strong></div>
        </div>
      </div>
    </section>
  );
}
