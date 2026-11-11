import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  highlightFirst?: boolean;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  action?: ReactNode;
  inverted?: boolean;
};

/** Eyebrow + crisp uppercase heading with red editorial accent. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  highlightFirst,
  description,
  align = "left",
  as: Tag = "h2",
  id,
  className,
  action,
  inverted,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-6 lg:mb-14",
        action != null && !centered && "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        <p className={cn("mb-3.5 flex items-center gap-3 text-[11px] font-extrabold tracking-[0.26em] uppercase sm:text-xs", inverted ? "text-brand-soft" : "text-brand-deep")}>
          <span aria-hidden className={cn("h-[2px] w-7 bg-brand", centered && "hidden")} />
          {eyebrow}
        </p>
        <Tag
          id={id}
          className={cn(
            "font-black uppercase leading-[1.02] tracking-[-0.025em]",
            inverted ? "text-white" : "text-ink",
            Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-[2rem] sm:text-4xl lg:text-5xl",
          )}
        >
          {highlightFirst && highlight ? <span className="text-accent">{highlight} </span> : null}
          {title}
          {!highlightFirst && highlight ? <span className="text-accent"> {highlight}</span> : null}
        </Tag>
        {description ? (
          <p className={cn("mt-4 text-base sm:text-lg", inverted ? "text-[#b8b8be]" : "text-body")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
