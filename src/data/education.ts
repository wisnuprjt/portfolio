
export type EducationItem = {
  eyebrow: string;
  degree: string;
  institution: string;
  period?: string;
  location?: string;
  resultLabel: string;
  result: string;
  distinction: string;
};

export const education = {
  institution: "Universitas Diponegoro",
  degree: "Bachelor of Computer Engineering",
  period: "August 2022 – March 2026",
  location: "Semarang, Indonesia",
  gpa: "3.73 / 4.00",
  distinction: "Cum Laude",
};

export const educationSlides: EducationItem[] = [
  {
    eyebrow: "UNDERGRADUATE EDUCATION",
    degree: "Bachelor of Computer Engineering",
    institution: "Universitas Diponegoro",
    period: "August 2022 – March 2026",
    location: "Semarang, Indonesia",
    resultLabel: "FINAL GPA",
    result: "3.73 / 4.00",
    distinction: "Cum Laude",
  },
  {
    eyebrow: "SENIOR HIGH SCHOOL",
    degree: "Senior High School – Science",
    institution: "SMAN 4 Denpasar",
    resultLabel: "FINAL SCORE",
    result: "95.80 / 100",
    distinction: "International & National Film Achievements",
  },
];
