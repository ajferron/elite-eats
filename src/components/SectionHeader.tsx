interface SectionHeaderProps {
  label: string;
  heading: string;
  headingColor?: string;
  labelColor?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  label,
  heading,
  headingColor = "text-text-primary",
  labelColor = "text-text-tertiary",
  children,
}: SectionHeaderProps) {
  return (
    <div className={`flex items-end justify-between ${children ? "" : ""}`}>
      <div>
        <p className={`mb-3 label-section ${labelColor}`}>{label}</p>
        <h2 className={`heading-section ${headingColor}`}>{heading}</h2>
      </div>
      {children}
    </div>
  );
}
