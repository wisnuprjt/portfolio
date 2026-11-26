
export type EducationAward = {
  title: string;
  detail: string;
  year: string;
};

export const educationAwards: Record<string, EducationAward[]> = {
  university: [
    {
      title: "2nd Place — Capstone IoT Expo",
      detail: "COLIVERA",
      year: "2026",
    },
    {
      title: "Intellectual Property Rights (IPR)",
      detail: "COLIVERA",
      year: "2025",
    },
    {
      title: "1st Winner",
      detail: "Dopamind+ project recognition",
      year: "2024",
    },
    {
      title: "1st Place — International Scientific Writing Competition",
      detail: "Malaysia",
      year: "2024",
    },
    {
      title: "3rd Place — National UI/UX Design Competition",
      detail: "UPN Veteran Jawa Timur",
      year: "2023",
    },
    {
      title: "Finalist — UI/UX Design Competition",
      detail: "Universitas Ahmad Dahlan",
      year: "2023",
    },
  ],

  highSchool: [
    {
      title: "Sample Achievement — Film Competition",
      detail: "SMAN 4 Denpasar · Dummy data",
      year: "2022",
    },
    {
      title: "Sample Recognition — International Film Festival",
      detail: "SMAN 4 Denpasar · Dummy data",
      year: "2021",
    },
    {
      title: "Sample Award — National Student Film Competition",
      detail: "SMAN 4 Denpasar · Dummy data",
      year: "2021",
    },
  ],
};
