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
  
  const whatsappEnquiryUrl = whatsappUrl(
    `Hello HALO CINEMATIC STUDIO! I would like to book the "${pkg.name}" (${categoryMeta.label}) package for ${pkg.priceDisplay}. Could you please check date availability?`
  );

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
        {/* Tier & Feature Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D71920] bg-[#D71920]/10 border border-[#D71920]/25">
            {isFeatured ? <Sparkles className="size-3 text-[#D71920]" /> : null}
            <span>{pkg.tierLabel}</span>
          </span>

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
          className="mt-4 text-2xl sm:text-[28px] font-medium text-[#171716] tracking-tight leading-snug group-hover:text-[#D71920] transition-colors"
        >
          {pkg.name}
        </h3>

        {/* Subline / Coverage */}
        {pkg.subline ? (
          <p className="mt-1.5 text-xs text-[#716B64] font-medium leading-relaxed">
            {pkg.subline}
          </p>
        ) : null}

        {/* Price Section — Red Color Text (No Solid Red Background) */}
        <div className="my-5 border-y border-[#D8CFC1]/70 py-3.5">
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

        <div className="flex items-center justify-between gap-2 pt-1 text-xs">
          {pkg.flyerImage && onViewFlyer ? (
            <button
              type="button"
              onClick={() => onViewFlyer(pkg.flyerImage!, pkg.name)}
              className="text-[#716B64] hover:text-[#D71920] font-medium transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <FileImage className="size-3 text-[#D71920]" />
              <span>Studio Flyer</span>
            </button>
          ) : (
            <span />
          )}

          <Link
            href={`/contact?category=${pkg.category}&package=${pkg.slug}#booking`}
            className="text-[#D71920] hover:underline font-semibold inline-flex items-center gap-1"
          >
            <span>Book via Form</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
