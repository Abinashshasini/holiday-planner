import { ReactNode } from "react";

interface SectionHeaderProps {
  overline?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-14 ${alignClass} ${className}`}>
      {overline && (
        <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-gold-400">
          <span className="w-2 h-2 rounded-full bg-gold-400" />
          {overline}
        </span>
      )}

      <h2 className="font-[family-name:var(--font-display)] font-extrabold tracking-tight leading-[1.1] text-text-primary [font-size:var(--text-display)]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-text-secondary leading-relaxed max-w-xl [font-size:var(--text-body-lg)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
