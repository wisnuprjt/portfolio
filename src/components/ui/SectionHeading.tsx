type Props = {
  eyebrow: string;
  title: string;
  note?: string;
};

export default function SectionHeading({ eyebrow, title, note }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="heading-row">
        <h2>{title}</h2>
        {note && <p className="section-note">{note}</p>}
      </div>
    </div>
  );
}
