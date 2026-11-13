import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  href,
  className,
}: {
  service: Service;
  index?: number;
  href?: string;
  className?: string;
}) {
  const Icon = service.icon;
  const body = (
    <>
      {/* Top Row: Clean Category Heading & Discipline Icon (No Border Boxes) */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#716B64] transition-colors duration-300 group-hover:text-[#171716]">
          {service.category}
        </span>
        <span className="text-[#D71920] transition-all duration-300 group-hover:text-[#171716] group-hover:scale-110">
          <Icon className="size-6" strokeWidth={1.8} aria-hidden />
        </span>
      </div>

      {/* Title: Red Color Text by default, transitions to Rich Charcoal on hover */}
      <h3
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        className="mt-6 text-2xl font-normal leading-[1.22] text-[#D71920] transition-colors duration-300 group-hover:text-[#171716]"
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3.5 text-sm leading-relaxed text-[#716B64]">{service.description}</p>

      {/* Bottom Action: Rich Charcoal on hover */}
      {href ? (
        <div className="mt-auto pt-7 border-t border-[#D8CFC1] flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#716B64] transition-colors duration-300 group-hover:text-[#171716]">
          <span>Explore Discipline</span>
          <span className="grid size-8 place-items-center rounded-full bg-[#EEE9DF] border border-[#D8CFC1] text-[#171716] transition-all duration-300 group-hover:bg-[#171716] group-hover:text-[#FAF7F1] group-hover:border-[#171716] group-hover:translate-x-1">
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      ) : null}
    </>
  );

  const classes = cn(
    "group relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-[24px] border border-[#D8CFC1] bg-[#FAF7F1] p-7 shadow-xs",
    "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#171716]/40",
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {body}
    </Link>
  ) : (
    <article className={classes}>{body}</article>
  );
}
