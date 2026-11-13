import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn, pad2 } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  href,
  className,
}: {
  service: Service;
  index: number;
  href?: string;
  className?: string;
}) {
  const Icon = service.icon;
  const body = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold text-[#B50812]">
          {pad2(index + 1)} · {service.category}
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#FFF1F2] text-[#E50919] transition-colors duration-300 group-hover:bg-[#E50919] group-hover:text-white">
          <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden />
        </span>
      </div>

      <h3
        style={{ fontFamily: "var(--font-playfair), serif" }}
        className="mt-5 text-xl font-semibold text-[#141414] transition-colors group-hover:text-[#E50919]"
      >
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#625C5D]">{service.description}</p>

      {href ? (
        <span className="mt-auto flex items-center justify-between border-t border-[rgba(20,20,20,0.06)] pt-4 text-xs font-medium text-[#141414] transition-colors group-hover:text-[#E50919]">
          <span>Explore Service</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[20px] border border-[rgba(20,20,20,0.08)] bg-white p-6 shadow-xs",
    "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(217,11,23,0.14)] hover:border-[rgba(217,11,23,0.28)]",
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
