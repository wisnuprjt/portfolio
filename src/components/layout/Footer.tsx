import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand" href="#home">
          <span className="brand-mark">W.</span>
          <span className="brand-name">Wisnu<span className="brand-period">.</span></span>
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
