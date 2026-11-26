
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { TouchEvent, KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import styles from "@/components/sections/AcademicBackground.module.css";

const educationSlides = [
  {
    eyebrow: "UNDERGRADUATE EDUCATION",
    degree: "Bachelor of Computer Engineering",
    institution: "Universitas Diponegoro",
    period: "August 2022 – March 2026",
    location: "Semarang, Indonesia",
    resultLabel: "FINAL GPA",
    result: "3.73 / 4.00",
    honors: "Cum Laude",
    logo: "/images/education/undip.png",
    logoAlt: "Universitas Diponegoro logo",
  },
  {
    eyebrow: "SENIOR HIGH SCHOOL",
    degree: "Senior High School – Science",
    institution: "SMAN 4 Denpasar",
    period: "",
    location: "",
    resultLabel: "FINAL SCORE",
    result: "95.80 / 100",
    honors: "International & National Film Achievements",
    logo: "/images/education/sma4dps.jpg",
    logoAlt: "SMAN 4 Denpasar logo",
  },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = educationSlides.length;

  const goToSlide = (index: number) => {
    setActiveIndex((index + totalSlides) % totalSlides);
  };

  const handlePrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const handleNext = () => {
    goToSlide(activeIndex + 1);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    touchStartX.current = null;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrevious();
    }
  };

  return (
    <section className="section-wrap education-section" id="education">
      <SectionHeading
        eyebrow="ACADEMIC BACKGROUND"
        title="Built on a foundation of learning."
        note="Formal education and selected recognition."
      />

      <div className="education-grid">
        <div className={styles.educationColumn}>
          <div
            className={styles.educationSlider}
            tabIndex={0}
            role="region"
            aria-label="Education history slider"
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.educationTrack}
              style={{
                transform: `translateX(-${activeIndex * 50}%)`,
              }}
            >
              {educationSlides.map((item, index) => (
                <div
                  className={styles.educationSlide}
                  key={item.institution}
                  aria-hidden={activeIndex !== index}
                >
                  <article className={`education-card ${styles.educationCard}`}>
                    <div className={styles.educationLogo}>
                      <Image
                        src={item.logo}
                        alt={item.logoAlt}
                        width={160}
                        height={160}
                        className={styles.educationLogoImage}
                        priority={index === 0}
                      />
                    </div>

                    <p className="eyebrow">{item.eyebrow}</p>

                    <h3>{item.degree}</h3>

                    <p className="education-institution">
                      {item.institution}
                    </p>

                    <div className="education-meta">
                      {item.period && <span>{item.period}</span>}
                      {item.location && <span>{item.location}</span>}
                    </div>

                    <div className="education-result">
                      <div>
                        <span>{item.resultLabel}</span>
                        <strong>{item.result}</strong>
                      </div>

                      <div>
                        <span>HONORS</span>
                        <strong>{item.honors}</strong>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationControls}>
            <div
              className={styles.educationIndicators}
              aria-label="Choose education slide"
            >
              {educationSlides.map((item, index) => (
                <button
                  key={item.institution}
                  type="button"
                  className={`${styles.educationIndicator} ${
                    activeIndex === index
                      ? styles.educationIndicatorActive
                      : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${item.institution}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <div className={styles.educationNavigation}>
              <span className={styles.educationCounter}>
                {String(activeIndex + 1).padStart(2, "0")}
                <span>/</span>
                {String(totalSlides).padStart(2, "0")}
              </span>

              <button
                type="button"
                className={styles.educationNavButton}
                onClick={handlePrevious}
                aria-label="Previous education"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                className={styles.educationNavButton}
                onClick={handleNext}
                aria-label="Next education"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>

        <Achievements activeEducationIndex={activeIndex} />
      </div>

      <Certifications />
    </section>
  );
}
