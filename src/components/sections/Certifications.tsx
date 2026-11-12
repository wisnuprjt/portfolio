import { Check, FileText } from "lucide-react";
import { certifications } from "@/data/achievements";

export default function Certifications() {
  return (
    <div className="certification-block">
      <div><p className="eyebrow">CONTINUOUS LEARNING</p><h3>Certifications & credentials.</h3></div>
      <div className="certification-list">
        {certifications.map((item) => (
          <div className="certification-item" key={item}><FileText size={17}/><span>{item}</span><Check size={15}/></div>
        ))}
      </div>
    </div>
  );
}
