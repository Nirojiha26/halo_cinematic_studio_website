import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn, pad2 } from "@/lib/utils";

/**
 * Editorial service card on crisp white ground with uniform heading alignment,
 * animated red top accent bar, and clear ink badge hover feedback.
 */
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
      <span
        aria-hidden
        className="absolute top-0 left-0 h-[3px] w-11 bg-brand transition-[width] duration-500 ease-(--ease-cinema) group-hover:w-full"
      />
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-extrabold tracking-[0.2em] text-brand-deep uppercase">
          {pad2(index + 1)} / {service.category}
        </p>
        <span className="grid size-10 shrink-0 place-items-center rounded-card border border-line bg-paper text-ink transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
          <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
        </span>
      </div>

      {/* Uniform two-line minimum slot prevents row-to-row body stagger */}
      <h3 className="mt-6 text-lg font-black uppercase leading-snug text-ink sm:min-h-[3.1rem] sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-body">{service.description}</p>

      {href ? (
        <span className="mt-auto flex items-center justify-between border-t border-line pt-4 text-[11px] font-bold tracking-[0.16em] text-ink uppercase transition-colors group-hover:text-brand">
          <span>Explore Service</span>
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group relative flex h-full min-h-[255px] flex-col overflow-hidden rounded-card border border-line bg-canvas p-7",
    "transition-[transform,border-color,box-shadow] duration-300 ease-(--ease-cinema)",
    "hover:-translate-y-1 hover:border-ink hover:shadow-[0_22px_40px_-26px_rgba(10,10,11,0.25)]",
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
