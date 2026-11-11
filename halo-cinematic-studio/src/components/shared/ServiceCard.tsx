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
        <span className="text-xs font-semibold text-[#DC3530]">
          {pad2(index + 1)} · {service.category}
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#FFF5F4] text-[#DC3530] transition-colors duration-300 group-hover:bg-[#DC3530] group-hover:text-white">
          <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden />
        </span>
      </div>

      <h3
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="mt-5 text-xl font-semibold text-[#141414] transition-colors group-hover:text-[#DC3530]"
      >
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5F5A5A]">{service.description}</p>

      {href ? (
        <span className="mt-auto flex items-center justify-between border-t border-[rgba(20,20,20,0.06)] pt-4 text-xs font-medium text-[#141414] transition-colors group-hover:text-[#DC3530]">
          <span>Explore Service</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[20px] border border-[rgba(20,20,20,0.08)] bg-white p-6 shadow-xs",
    "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(220,53,48,0.12)] hover:border-[rgba(220,53,48,0.25)]",
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
