import { Award } from "lucide-react";
import { awards } from "@/data/achievements";

export default function Achievements() {
  return (
    <div className="recognition-block">
      <div className="recognition-heading">
        <div><p className="eyebrow">RECOGNITION</p><h3>Awards & milestones.</h3></div>
        <Award size={22}/>
      </div>
      {awards.map((award) => (
        <div className="award-row" key={award.title + award.year}>
          <div><strong>{award.title}</strong><span>{award.detail}</span></div>
          <time>{award.year}</time>
        </div>
      ))}
    </div>
  );
}
