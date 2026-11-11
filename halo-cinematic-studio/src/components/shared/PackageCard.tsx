import { ArrowRight, Check } from "lucide-react";
import type { StudioPackage } from "@/data/packages";
import { getCategoryMeta } from "@/data/packages";
import { cn, pad2 } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function PackageCard({
  pkg,
  index,
  showCategoryBadge = false,
}: {
  pkg: StudioPackage;
  index: number;
  showCategoryBadge?: boolean;
}) {
  const categoryMeta = getCategoryMeta(pkg.category);
  const enquireHref = `/contact?category=${pkg.category}&package=${pkg.slug}`;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-card bg-canvas p-6 transition-all duration-300 sm:p-7",
        pkg.featured
          ? "border-2 border-brand shadow-[0_24px_48px_-24px_rgba(237,23,31,0.22)]"
          : "border border-line-strong hover:-translate-y-0.5 hover:border-ink",
      )}
    >
      {/* Top editorial accent bar */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-[3px]",
          pkg.featured ? "bg-brand" : "bg-ink",
        )}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] text-muted uppercase">
          <span className="text-brand">{pad2(index + 1)}</span>
          <span aria-hidden className="text-line-strong">
            /
          </span>
          <span>{showCategoryBadge ? categoryMeta.shortLabel : pkg.tierLabel}</span>
        </div>

        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] uppercase",
            pkg.featured
              ? "bg-brand text-on-ink"
              : "border border-line bg-paper text-ink",
          )}
        >
          {pkg.tierLabel}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-black uppercase leading-tight text-ink">
        {pkg.name}
      </h3>

      {pkg.subline ? (
        <p className="mt-1.5 text-xs font-medium text-muted">{pkg.subline}</p>
      ) : null}

      <div className="mt-5 border-y border-line py-4">
        <p
          className={cn(
            "font-display text-3xl font-black tracking-tight",
            pkg.featured ? "text-brand" : "text-ink",
          )}
        >
          {pkg.priceDisplay}
        </p>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-relaxed text-body">
        {pkg.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-2">
        <Button
          href={enquireHref}
          variant={pkg.featured ? "primary" : "dark"}
          size="md"
          icon={<ArrowRight className="size-4" />}
          className="w-full"
        >
          Select &amp; Enquire
        </Button>
      </div>
    </article>
  );
}

