import { ArrowRight, Check } from "lucide-react";
import type { StudioPackage } from "@/data/packages";
import { getCategoryMeta } from "@/data/packages";
import { cn, pad2 } from "@/lib/utils";
import { whatsappUrl } from "@/config/site";

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
  // Preview membership and visual emphasis are separate concerns: only the
  // package explicitly labelled "Most Popular" receives the red treatment.
  const isFeatured = pkg.tierLabel === "Most Popular";
  const whatsappEnquiryUrl = whatsappUrl(
    `Hello HALO CINEMATIC STUDIO! I am interested in the ${pkg.name} package (${pkg.priceDisplay}). Could you please share booking availability?`
  );

  return (
    <article
      className={cn(
        "relative flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[20px] p-6 transition-all duration-300 sm:p-8",
        isFeatured
          ? "bg-[#171716] text-[#FAF7F1] border border-[#D71920]/40 shadow-lg"
          : "bg-[#FAF7F1] border border-[#D8CFC1] shadow-xs hover:border-[#D71920]/50 hover:shadow-md",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className={isFeatured ? "text-white/80" : "text-[#D71920]"}>
            {pad2(index + 1)}
          </span>
          <span aria-hidden className={isFeatured ? "text-white/40" : "text-[#D8CFC1]"}>
            /
          </span>
          <span className={isFeatured ? "text-white/90" : "text-[#716B64]"}>
            {showCategoryBadge ? categoryMeta.shortLabel : pkg.tierLabel}
          </span>
        </div>

        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold",
            isFeatured
              ? "bg-[#D71920] text-white"
              : "bg-[#EEE9DF] text-[#D71920] border border-[#D8CFC1]",
          )}
        >
          {pkg.tierLabel}
        </span>
      </div>

      <h3
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        className={cn(
          "mt-4 text-2xl font-semibold leading-tight",
          isFeatured ? "text-white" : "text-[#171716]",
        )}
      >
        {pkg.name}
      </h3>

      {pkg.subline ? (
        <p className={cn("mt-1.5 text-xs font-normal", isFeatured ? "text-white/80" : "text-[#716B64]")}>
          {pkg.subline}
        </p>
      ) : null}

      <div
        className={cn(
          "my-5 border-y py-4",
          isFeatured ? "border-white/20" : "border-[#D8CFC1]",
        )}
      >
        <p
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className={cn(
            "text-3xl font-semibold tracking-tight",
            isFeatured ? "text-white" : "text-[#D71920]",
          )}
        >
          {pkg.priceDisplay}
        </p>
      </div>

      <ul className="mb-5 flex-1 space-y-3 text-sm leading-relaxed">
        {pkg.highlights.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-2.5",
              isFeatured ? "text-white/95" : "text-[#716B64]",
            )}
          >
            <Check
              className={cn("mt-0.5 size-4 shrink-0", isFeatured ? "text-[#D71920]" : "text-[#D71920]")}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {pkg.notes ? (
        <p className={cn("mb-5 text-xs leading-relaxed", isFeatured ? "text-white/80" : "text-[#716B64]")}>
          {pkg.notes}
        </p>
      ) : null}

      <div className="mt-auto pt-2">
        <a
          href={whatsappEnquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all",
            isFeatured
              ? "bg-[#D71920] text-white hover:bg-[#B31218]"
              : "btn-grad text-white shadow-xs",
          )}
        >
          <span>Enquire on WhatsApp</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
