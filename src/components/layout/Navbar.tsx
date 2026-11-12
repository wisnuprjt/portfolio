"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, contact } from "@/data/profile";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const nodes = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35, 0.6] });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Wisnu home">
          <span className="brand-mark">W.</span>
          <span className="brand-name">Wisnu<span className="brand-period">.</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <div className="mobile-theme"><ThemeToggle /></div>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={14}/></a>
          <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={19}/> : <Menu size={19}/>}
          </button>
        </div>
      </div>
    </header>
  );
}
