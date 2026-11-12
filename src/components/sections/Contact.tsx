import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { contact, profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
          <h2>Let&apos;s build something <span>meaningful.</span></h2>
          <p>I&apos;m open to conversations about engineering, software development, and opportunities to contribute to practical technology projects.</p>
          <a className="button button-light" href={`mailto:${contact.email}`}>Get in touch <ArrowUpRight size={16}/></a>
        </div>
        <div className="contact-details">
          <div><span>EMAIL</span><strong>{contact.email}</strong></div>
          <div><span>LOCATION</span><strong>{profile.location}</strong></div>
          <div className="contact-socials">
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
