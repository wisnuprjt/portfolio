import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home">
          <Image
            className="footer-avatar"
            src={profile.profileImage}
            alt={`${profile.shortName} profile photo`}
            width={50}
            height={50}
          />
          <span className="brand-name">Wisnu Parijata</span>
        </a>
        <p>Engineering ideas into practical digital systems.</p>
        <a href="#home" className="back-top">Back to top <ArrowUpRight size={14}/></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed with intention. Built with care.</span>
      </div>
    </footer>
  );
}
