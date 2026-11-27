
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Lanyard from "@/components/Lanyard";
import LetterGlitch from "@/components/LetterGlitch";
import { contact, profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-letter-glitch" aria-hidden="true">
        <LetterGlitch
          glitchAmount={0.38}
          speed={0.7}
          flow={0.35}
          baseOpacity={0.11}
          density={0.76}
          fontSize={14}
          spacing={0.65}
          interactive={true}
          cursorRadius={160}
          clickEffect="tear"
          edgeFade={0.22}
          centerFade={0.38}
          intro={true}
        />
      </div>

      <div className="hero-copy">
        <p className="availability">
          {/* <span className="availability-dot" />
          COMPUTER ENGINEERING · CLASS OF 2026 */}
        </p>

        <p className="hero-kicker">
          Hello, I&apos;m {profile.shortName}.
        </p>

        <h1>{profile.headline}</h1>

        <p className="hero-description">
          A Computer Engineering graduate from Diponegoro University,
          passionate about building intelligent digital solutions.
          Experienced in{" "}
          <strong>full-stack development</strong>,{" "}
          <strong>AI Agent engineering</strong>,{" "}
          <strong>IoT integration</strong>, and  <strong>designing practical
          systems that connect software, data, and hardware </strong>.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore Projects
            <ArrowUpRight size={16} />
          </a>

          <a
            className="button button-quiet"
            href={contact.resume}
            download
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            className="button button-quiet"
            href={contact.portfolio}
            download
          >
            <Download size={16} />
            Download Portfolio
          </a>
        </div>

        <div className="hero-links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} />
            LinkedIn
            <ArrowUpRight size={12} />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} />
            GitHub
            <ArrowUpRight size={12} />
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Chat on WhatsApp: ${contact.whatsappDisplay}`}
          >
            <Phone size={15} />
            {contact.whatsappDisplay}
            <ArrowUpRight size={12} />
          </a>

          <div className="hero-contact-details">
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} />
              {contact.email}
            </a>

            <span>
              <MapPin size={15} />
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-lanyard-stage">
          <Lanyard
            frontImage={profile.profileImage}
            backImage={profile.profileImage}
            orientation="portrait"
            imageFit="cover"
            finish="glossy"
            metal="silver"
            cardColor="#ffffff"
            strapColor="#171717"
            anchor="center"
            strapLength={0.5}
            strapWidth={0.65}
            size={0.6}
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive={true}
            intro={true}
          />
        </div>

        <div className="hero-index">
          <span>01 / 08</span>
          <ArrowDownRight size={20} />
        </div>
      </div>

      <div className="hero-bottomline">
        <span>SOFTWARE · IOT · SYSTEM INTEGRATION</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
