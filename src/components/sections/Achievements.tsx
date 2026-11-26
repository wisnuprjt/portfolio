
"use client";

import { Award } from "lucide-react";

import { educationAwards } from "@/data/education-awards";
import styles from "./AcademicBackground.module.css";

type AchievementsProps = {
  activeEducationIndex: number;
};

export default function Achievements({
  activeEducationIndex,
}: AchievementsProps) {
  const isUniversity = activeEducationIndex === 0;

  const currentAwards = isUniversity
    ? educationAwards.university
    : educationAwards.highSchool;

  const heading = isUniversity
    ? "University recognition"
    : "High school recognition";

  return (
    <div className="recognition-block">
      <div className="recognition-heading">
        <div>
          <p className="eyebrow">
            RECOGNITION
          </p>
          <h3>Awards & milestones.</h3>
        </div>

        <Award size={22} />
      </div>

      <div
        className={styles.awardViewport}
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          key={activeEducationIndex}
          className={styles.awardGroup}
        >
          <p className={styles.awardGroupLabel}>
            {heading}
          </p>

          {currentAwards.map((award) => (
            <div
              className="award-row"
              key={`${award.title}-${award.year}`}
            >
              <div>
                <strong>{award.title}</strong>
                <span>{award.detail}</span>
              </div>

              <time>{award.year}</time>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
