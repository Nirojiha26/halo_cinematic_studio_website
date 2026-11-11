import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
  action?: ReactNode;
};

/** Eyebrow + Playfair heading with optional gradient highlight. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  id,
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 lg:mb-14",
        action != null && !centered && "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow ? (
          <p className="chip-eyebrow">{eyebrow}</p>
        ) : null}
        <h2
          id={id}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 4vw, 48px)",
            color: "var(--ink)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
          {highlight ? <span className="grad-text"> {highlight}</span> : null}
        </h2>
        {description ? (
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: 17,
              color: "var(--muted)",
              maxWidth: "42rem",
              marginTop: 16,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
