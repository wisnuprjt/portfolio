import { ArrowUpRight, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import { contact, profile } from "@/data/profile";
import GradientASCII from "@/components/backgrounds/GradientASCII";

export default function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-panel">
        <GradientASCII
          className="contact-gradient-ascii"
          aria-hidden="true"
          shape="horizon"
          cellSize={16}
          density={0.6}
          glyphOpacity={0.7}
          glow={0.35}
          gradientOpacity={0.75}
          flow={0.25}
          speed={0.35}
          mouseInteraction
          clickEffect="none"
        />
        <div className="contact-copy">
          <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
          <h2>Let&apos;s build something <span>meaningful.</span></h2>
          <p>I&apos;m open to conversations about engineering, software development, and opportunities to contribute to practical technology projects.</p>
          <a className="button button-light" href={`mailto:${contact.email}`}>Get in touch <ArrowUpRight size={16}/></a>
        </div>
        <div className="contact-details">
          <div><span>EMAIL</span><strong>{contact.email}</strong></div>
          <div><span>LOCATION</span><strong>{profile.location}</strong></div>
          <div>
            <span>WHATSAPP</span>
            <a
              className="contact-whatsapp-link"
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp: ${contact.whatsappDisplay}`}
            >
              <span className="contact-whatsapp-mark" aria-hidden="true">
                <MessageCircle size={19} />
                <Phone size={9} />
              </span>
              <strong>{contact.whatsappDisplay}</strong>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-socials">
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
