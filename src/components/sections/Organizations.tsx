import { organizations } from "@/data/achievements";

export default function Organizations() {
  return (
    <div className="org-block">
      <div><p className="eyebrow">BEYOND PROFESSIONAL ROLES</p><h3>Organizational experience</h3></div>
      <div className="org-list">
        {organizations.map((item) => (
          <div className="org-row" key={item.organization}>
            <div><strong>{item.position}</strong><span>{item.organization}</span></div>
            <small>{item.period}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
