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
  return <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizes[size], className)}>{children}</Tag>;
}

const sectionTones = {
  canvas: "bg-canvas text-ink",
  paper: "bg-paper text-ink border-y border-line",
  ink: "bg-ink text-white",
};

/** Consistent section spacing and white/paper/ink editorial rhythm. */
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
      className={cn("relative py-20 sm:py-24 lg:py-28", sectionTones[tone], className)}
    >
      {children}
    </section>
  );
}
