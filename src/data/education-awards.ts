
export type EducationAward = {
  title: string;
  detail: string;
  year: string;
};

export const educationAwards: Record<string, EducationAward[]> = {
  university: [
    {
      title: "🥈 Juara 2 — Capstone IoT Expo",
      detail: "Sistem Deteksi dan Monitoring E. coli Berbasis IoT, Universitas Diponegoro",
      year: "2026",
    },
    {
      title: "🏅 Hak Kekayaan Intelektual (HKI)",
      detail: "Sistem Deteksi dan Monitoring E. coli Berbasis IoT",
      year: "2025",
    },
    {
      title: "🏅 Publikasi Artikel Ilmiah",
      detail: "Dopamind+ Mental Health Application, IJSECS International",
      year: "2024",
    },
    {
      title: "🥇 Juara 1 — International Scientific Writing Competition",
      detail: "Malaysia",
      year: "2024",
    },
    {
      title: "🥉 Juara 3 — Kompetisi Desain UI/UX Nasional",
      detail: "UPN Veteran Jawa Timur",
      year: "2023",
    },
    {
      title: "🏅 Finalis — Kompetisi Desain UI/UX",
      detail: "Universitas Ahmad Dahlan",
      year: "2023",
    },
    {
      title: "🏅 Pembicara — Sesi Film in General",
      detail: "Kronik Film Media",
      year: "2024",
    },
    {
      title: "🏅 Juri — Udayana Film Festival 2.0",
      detail: "Universitas Udayana",
      year: "2023",
    },
    {
      title: "🏅 Juri — Kompetisi Film Pendek Dies Natalis ke-47",
      detail: "Politeknik Pariwisata Bali",
      year: "2025",
    },
  ],

  highSchool: [
    {
      title: "🥇 Juara Favorit Instagram Lomba Fotografi",
      detail: "Fakultas Ekonomi dan Bisnis, Universitas Udayana",
      year: "13 Oktober 2019",
    },
    {
      title: "🥉 Juara Favorite 3 Video Bebas Kreatif AMD Cup",
      detail: "AMD Cup DPD PDI Perjuangan Bali",
      year: "28 Oktober 2020",
    },
    {
      title: "🥇 1st Winner of Short Film, 18th Royal Bali International Film Festival 2020",
      detail: "Swadeshi Bali Foundation, Indonesian Institute of the Arts Denpasar",
      year: "29 November 2020",
    },
    {
      title: "🏅 Nomination for The Best Editing Video, National Short Movie Competition",
      detail: "Sadewa Theatre Bali Creative",
      year: "18 Juli 2021",
    },
    {
      title: "🥇 Juara 1 Lomba Film Pendek DPD KNPI Bali",
      detail: "DPD KNPI Bali",
      year: "2 Oktober 2021",
    },
    {
      title: "🥇 Juara 1 Open House Fakultas Ilmu Komputer, Universitas Indonesia",
      detail: "Universitas Indonesia",
      year: "2021",
    },
  ],
};
