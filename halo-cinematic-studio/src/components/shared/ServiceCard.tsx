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
      {/* Top accent hairline that lights up on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2.5px] bg-transparent transition-colors duration-300 group-hover:bg-[#D71920]"
      />

      {/* Top Row: Category Pill & Discipline Icon */}
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-[#EEE9DF] border border-[#D8CFC1] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#716B64] transition-colors group-hover:border-[#D71920]/40 group-hover:text-[#171716]">
          {service.category}
        </span>
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#EEE9DF] text-[#D71920] border border-[#D8CFC1] transition-all duration-300 group-hover:bg-[#171716] group-hover:text-[#FAF7F1] group-hover:border-[#171716] group-hover:scale-105">
          <Icon className="size-5" strokeWidth={1.8} aria-hidden />
        </span>
      </div>

      {/* Title */}
      <h3
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        className="mt-6 text-xl sm:text-[21px] font-normal leading-[1.28] text-[#171716] transition-colors group-hover:text-[#D71920]"
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-[#716B64]">{service.description}</p>

      {/* Key Inclusions / Highlights */}
      {service.highlights && service.highlights.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.highlights.map((h) => (
            <span
              key={h}
              className="rounded-md bg-[#EEE9DF]/70 border border-[#D8CFC1]/50 px-2.5 py-1 text-[11px] font-medium text-[#716B64] transition-colors group-hover:border-[#D8CFC1]"
            >
              {h}
            </span>
          ))}
        </div>
      ) : null}

      {/* Bottom Action */}
      {href ? (
        <div className="mt-auto pt-6 border-t border-[#D8CFC1]/70 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#171716] transition-colors group-hover:text-[#D71920]">
          <span>Explore Discipline</span>
          <span className="grid size-8 place-items-center rounded-full bg-[#EEE9DF] border border-[#D8CFC1] text-[#171716] transition-all duration-300 group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920] group-hover:translate-x-1">
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      ) : null}
    </>
  );

  const classes = cn(
    "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-[#D8CFC1] bg-[#FAF7F1] p-7 shadow-xs",
    "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#D71920]/40",
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
