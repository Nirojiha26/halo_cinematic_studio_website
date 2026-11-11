import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[92rem]",
};

export function Container({ as: Tag = "div", className, children, size = "default" }: ContainerProps) {
  return <Tag className={cn("site-container", sizes[size], className)}>{children}</Tag>;
}

const sectionTones = {
  canvas: "section-white",
  paper: "section-blush",
  ink: "section-blush",
  white: "section-white",
  blush: "section-blush",
};

/** Consistent section spacing and white/blush editorial rhythm. */
export function Section({
  id,
  className,
  children,
  tone = "canvas",
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: keyof typeof sectionTones;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-[var(--space-section)]", sectionTones[tone], className)}
    >
      {children}
    </section>
  );
}
