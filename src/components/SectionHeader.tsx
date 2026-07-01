type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
    </div>
  );
}
