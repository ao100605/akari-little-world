export default function SectionKicker({
  number,
  japanese,
  children,
}: {
  number: string;
  japanese: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-kicker">
      <span>{number}</span>
      <div>
        <p>{children}</p>
        <small>{japanese}</small>
      </div>
    </div>
  );
}
