import { ReactNode } from "react";

type BgVariant = "base" | "elevated" | "deepest";

interface SectionProps {
  children: ReactNode;
  bg?: BgVariant;
  className?: string;
  glow?: "gold" | "ocean" | "mesh" | "none";
  id?: string;
}

const bgMap: Record<BgVariant, string> = {
  base: "bg-bg-base",
  elevated: "bg-bg-elevated",
  deepest: "bg-bg-deepest",
};

const glowMap: Record<string, string> = {
  gold: "bg-[radial-gradient(600px_circle_at_50%_80%,rgba(212,162,84,0.06),transparent_70%)]",
  ocean:
    "bg-[radial-gradient(800px_circle_at_30%_20%,rgba(59,130,246,0.05),transparent_70%)]",
  mesh: "bg-[radial-gradient(600px_at_10%_90%,rgba(212,162,84,0.05),transparent_60%),radial-gradient(500px_at_90%_20%,rgba(59,130,246,0.04),transparent_60%)]",
};

export default function Section({
  children,
  bg = "base",
  className = "",
  glow = "none",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgMap[bg]} py-20 md:py-28 lg:py-32 relative ${className}`}
    >
      {glow !== "none" && (
        <div
          className={`absolute inset-0 pointer-events-none ${glowMap[glow]}`}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        {children}
      </div>
    </section>
  );
}
