
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME"
        title="Engineering mindset, practical outcomes."
      />

      <div className="about-full">
        <span className="large-index">01</span>

        <div className="about-content">
          <p>
            I'm a <strong>Computer Engineering</strong> based in{" "}
            <strong>{profile.location}</strong>, and a graduate of{" "}
            <strong>{profile.university}</strong>. I'm passionate
            about building practical digital solutions through
            software engineering, artificial intelligence, and
            connected technologies.
          </p>

          <p>
            My expertise spans <strong>full-stack web development</strong>,
            from building responsive applications using{" "}
            <strong>Next.js, React.js, and Express.js</strong> to
            designing system architectures, integrating REST APIs,
            and managing relational databases. I also have experience
            developing <strong>AI Agents using Retrieval-Augmented
            Generation (RAG)</strong>, integrating IoT sensor data
            with vector databases, and <strong>building IoT-based monitoring
            systems</strong>. One of my notable projects,{" "}
            <strong>COLIVERA</strong>, received 2nd Place at the
            Capstone IoT Expo and obtained Intellectual Property
            Rights (HKI).
          </p>

          <p>
            Beyond development, I have hands-on experience in{" "}
            <strong>IT systems and secure data management </strong>
            through my internship at <strong>NTMC Korlantas Polri</strong>.
            My background also includes software testing, SDLC
            implementation, technical documentation, and IT
            infrastructure fundamentals, including Windows and
            Linux administration, networking, and troubleshooting.
            I enjoy exploring emerging technologies and turning
            complex engineering concepts into reliable, meaningful
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
