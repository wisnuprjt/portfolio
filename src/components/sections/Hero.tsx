import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { contact, profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="availability"><span className="availability-dot"/> COMPUTER ENGINEERING · CLASS OF 2026</p>
        <p className="hero-kicker">Hello, I&apos;m {profile.shortName}.</p>
        <h1>{profile.headline}</h1>
        <p className="hero-description">{profile.introduction}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore selected work <ArrowUpRight size={16}/></a>
          <a className="button button-quiet" href={contact.resume} download><Download size={16}/> Download CV</a>
        </div>
        <div className="hero-links">
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a>
          <a href={contact.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a>
          <span><MapPin size={15}/> {profile.location}</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          {profile.profileImage ? (
            <Image src={profile.profileImage} alt={`${profile.name} portrait`} fill priority sizes="(max-width: 760px) 80vw, 38vw" className="portrait-image"/>
          ) : (
            <div className="portrait-placeholder">
              <div className="portrait-monogram">WP</div>
              <span>PROFILE PHOTOGRAPH</span>
              <small>Add your portrait in <code>src/data/profile.ts</code></small>
            </div>
          )}
          <div className="portrait-caption"><span>BASED IN</span><strong>Denpasar, Indonesia</strong></div>
        </div>
        <div className="hero-index"><span>01 / 08</span><ArrowDownRight size={20}/></div>
      </div>
      <div className="hero-bottomline"><span>SOFTWARE · IOT · SYSTEM INTEGRATION</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}
