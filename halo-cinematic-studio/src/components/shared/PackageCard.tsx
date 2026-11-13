import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
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
  const isFeatured = pkg.featured || pkg.tierLabel.toLowerCase().includes("popular") || pkg.tierLabel.toLowerCase().includes("golden");
  
  const whatsappEnquiryUrl = whatsappUrl(
    `Hello HALO CINEMATIC STUDIO! I am interested in booking the "${pkg.name}" (${categoryMeta.label}) priced at ${pkg.priceDisplay}. Could you please check availability?`
  );

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[#FAF7F1] p-6 transition-all duration-300 sm:p-7 shadow-xs hover:-translate-y-1 hover:shadow-xl",
        isFeatured
          ? "border-[#D71920]/60 ring-1 ring-[#D71920]/20"
          : "border-[#D8CFC1] hover:border-[#D71920]/60",
      )}
    >
      <div>
        {/* Top Header: Index & Tier Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#716B64]">
            {showCategoryBadge
              ? categoryMeta.shortLabel.toUpperCase()
              : `${pad2(index + 1)} / ${categoryMeta.shortLabel.toUpperCase()}`}
          </span>

          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
              isFeatured
                ? "bg-[#D71920]/10 text-[#D71920] border border-[#D71920]/30"
                : "bg-[#EEE9DF] text-[#716B64] border border-[#D8CFC1]",
            )}
          >
            {isFeatured ? <Sparkles className="size-3 text-[#D71920]" /> : null}
            <span>{pkg.tierLabel}</span>
          </span>
        </div>

        {/* Package Title */}
        <h3
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="mt-4 text-2xl sm:text-[26px] font-medium text-[#171716] tracking-tight leading-snug group-hover:text-[#D71920] transition-colors"
        >
          {pkg.name}
        </h3>

        {/* Subline / Coverage info */}
        {pkg.subline ? (
          <p className="mt-1 text-xs font-medium text-[#716B64] leading-relaxed">
            {pkg.subline}
          </p>
        ) : null}

        {/* Price Section with Red Text (No Solid Red Background) */}
        <div className="my-5 border-y border-[#D8CFC1]/70 py-3.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#716B64]">
            Investment
          </p>
          <p
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="mt-0.5 text-2xl sm:text-3xl font-bold tracking-tight text-[#D71920]"
          >
            {pkg.priceDisplay}
          </p>
        </div>

        {/* Feature Highlights from Flyers */}
        <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#171716] leading-relaxed mb-6">
          {pkg.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                className="mt-0.5 size-4 shrink-0 text-[#D71920]"
                aria-hidden="true"
              />
              <span className="text-[#2B2927]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto border-t border-[#D8CFC1]/70 pt-4 space-y-2">
        <a
          href={whatsappEnquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#D71920] text-white text-xs sm:text-sm font-semibold hover:bg-[#b5141a] transition-all shadow-xs active:scale-[0.99] cursor-pointer"
        >
          <MessageCircle className="size-4" />
          <span>Enquire on WhatsApp</span>
        </a>

        <Link
          href={`/contact?category=${pkg.category}&package=${pkg.slug}`}
          className="w-full inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[#D8CFC1] bg-white text-[#171716] text-xs font-semibold hover:border-[#D71920] hover:text-[#D71920] transition-colors shadow-2xs active:scale-[0.99]"
        >
          <span>Book via Form</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
