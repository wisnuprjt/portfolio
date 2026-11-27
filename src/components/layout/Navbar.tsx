"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  GraduationCap,
  House,
  type LucideIcon,
  Mail,
  UserRound,
} from "lucide-react";
import { navigation, profile } from "@/data/profile";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navigationIcons: Record<(typeof navigation)[number]["id"], LucideIcon> = {
  home: House,
  about: UserRound,
  expertise: Code2,
  projects: FolderKanban,
  experience: BriefcaseBusiness,
  education: GraduationCap,
  contact: Mail,
};

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let current = sections[0]?.id ?? "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id;
        } else {
          break;
        }
      }

      setActive(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="floating-nav-shell">
      <nav className="floating-nav" aria-label="Main navigation">
        <a className="dock-avatar" href="#home" aria-label="Wisnu home">
          <Image
            src={profile.profileImage}
            alt="Wisnu"
            width={36}
            height={36}
            priority
          />
        </a>

        <span className="dock-divider" aria-hidden="true" />

        <div className="dock-links">
          {navigation.map((item) => {
            const Icon = navigationIcons[item.id];
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`dock-link${isActive ? " active" : ""}`}
                aria-label={item.label}
                aria-current={isActive ? "location" : undefined}
                title={item.label}
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                <span className="dock-tooltip" aria-hidden="true">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        <span className="dock-divider" aria-hidden="true" />

        <div className="dock-theme">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
