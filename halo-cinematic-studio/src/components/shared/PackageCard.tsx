import Link from "next/link";
import { ArrowRight, Check, FileImage, MessageCircle, Sparkles } from "lucide-react";
import type { StudioPackage } from "@/data/packages";
import { getCategoryMeta } from "@/data/packages";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/config/site";

export function PackageCard({
  pkg,
  onViewFlyer,
}: {
  pkg: StudioPackage;
  index?: number;
  showCategoryBadge?: boolean;
  onViewFlyer?: (flyerImage: string, title: string) => void;
}) {
  const categoryMeta = getCategoryMeta(pkg.category);
  const isFeatured = pkg.featured;
  
  const whatsappEnquiryLines = [
    "📸 *HALO CINEMATIC STUDIO*",
    "*Package Booking Enquiry*",
    "────────────────────────────",
    "",
    "📦 *Selected Package Details*",
    `• *Package:* ${pkg.name}`,
    `• *Category:* ${categoryMeta.label}`,
    `• *Investment:* ${pkg.priceDisplay}`,
    ...(pkg.subline ? [`• *Coverage:* ${pkg.subline}`] : []),
    "",
    "────────────────────────────",
    "Hello HALO Team! I am interested in booking this package for our upcoming event. Could you please check availability and guide me through the booking process?",
    "",
    "_Sent via halocinematicstudio.com_",
  ];

  const whatsappEnquiryUrl = whatsappUrl(whatsappEnquiryLines.join("\n"));

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between rounded-2xl border bg-[#FAF7F1] p-6 sm:p-7 transition-all duration-300 shadow-xs hover:-translate-y-1 hover:shadow-xl",
        isFeatured
          ? "border-[#D71920] ring-1 ring-[#D71920]/30"
          : "border-[#D8CFC1] hover:border-[#D71920]",
      )}
    >
      <div>
        {/* Tier & Category with '|' separator */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
            <span className="inline-flex items-center gap-1 text-[#D71920]">
              {isFeatured ? <Sparkles className="size-3 text-[#D71920]" /> : null}
              <span>{pkg.tierLabel}</span>
            </span>
            <span className="text-[#D8CFC1]" aria-hidden="true">
              |
            </span>
            <span className="text-[#716B64] font-medium">
              {categoryMeta.shortLabel}
            </span>
          </div>

          {pkg.flyerImage && onViewFlyer ? (
            <button
              type="button"
              onClick={() => onViewFlyer(pkg.flyerImage!, pkg.name)}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#716B64] hover:text-[#D71920] transition-colors cursor-pointer"
            >
              <FileImage className="size-3.5 text-[#D71920]" />
              <span>View Flyer</span>
            </button>
          ) : null}
        </div>

        {/* Package Name */}
        <h3
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="mt-3.5 text-2xl sm:text-[28px] font-medium text-[#171716] tracking-tight leading-snug group-hover:text-[#D71920] transition-colors"
        >
          {pkg.name}
        </h3>

        {/* Subline / Coverage */}
        {pkg.subline ? (
          <p className="mt-1 text-xs text-[#716B64] font-medium leading-relaxed">
            {pkg.subline}
          </p>
        ) : null}

        {/* Price Section — Red Color Text (No Solid Red Background) */}
        <div className="my-4 border-y border-[#D8CFC1]/70 py-3">
          <p
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-3xl sm:text-[34px] font-bold tracking-tight text-[#D71920]"
          >
            {pkg.priceDisplay}
          </p>
        </div>

        {/* Highlights List — Readable, Crisp Typography */}
        <ul className="space-y-3 text-xs sm:text-[13px] text-[#171716] leading-relaxed mb-6">
          {pkg.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#D71920]/10 mt-0.5">
                <Check className="size-3 text-[#D71920]" aria-hidden="true" />
              </span>
              <span className="text-[#2B2927] font-normal leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto border-t border-[#D8CFC1]/70 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <a
          href={whatsappEnquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#D71920] text-white text-xs sm:text-sm font-semibold hover:bg-[#b5141a] transition-all shadow-xs active:scale-[0.99] cursor-pointer"
        >
          <MessageCircle className="size-4" />
          <span>Enquire on WhatsApp</span>
        </a>

        {pkg.flyerImage && onViewFlyer ? (
          <button
            type="button"
            onClick={() => onViewFlyer(pkg.flyerImage!, pkg.name)}
            className="inline-flex h-11 items-center justify-center gap-1.5 px-3.5 rounded-xl border border-[#D8CFC1] bg-white text-[#716B64] hover:text-[#D71920] hover:border-[#D71920] text-xs font-semibold transition-colors cursor-pointer"
          >
            <FileImage className="size-3.5 text-[#D71920]" />
            <span>Flyer</span>
          </button>
        ) : null}

        <Link
          href={`/contact?category=${pkg.category}&package=${pkg.slug}#booking`}
          className="inline-flex h-11 items-center justify-center gap-1.5 px-3.5 rounded-xl border border-[#D8CFC1] bg-white text-[#171716] hover:text-[#D71920] hover:border-[#D71920] text-xs font-semibold transition-colors"
        >
          <span>Book</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
