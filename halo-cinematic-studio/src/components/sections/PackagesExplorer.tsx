"use client";

import { useCallback, useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  getCategoryMeta,
  getPackagesByCategory,
  isPackageCategorySlug,
  packageCategories,
  type PackageCategorySlug,
} from "@/data/packages";
import { cn } from "@/lib/utils";
import { QueryParamSync } from "@/components/shared/QueryParamSync";
import { PackageCard } from "@/components/shared/PackageCard";
import { whatsappUrl } from "@/config/site";

export function PackagesExplorer() {
  const [activeCategory, setActiveCategory] =
    useState<PackageCategorySlug>("weddings");

  const handleCategoryParam = useCallback((value: string) => {
    const normalized = value.toLowerCase();
    if (isPackageCategorySlug(normalized)) {
      setActiveCategory(normalized);
    }
  }, []);

  const currentMeta = useMemo(
    () => getCategoryMeta(activeCategory),
    [activeCategory],
  );
  
  const packages = useMemo(
    () => getPackagesByCategory(activeCategory),
    [activeCategory],
  );

  return (
    <div className="space-y-10 sm:space-y-12">
      <QueryParamSync name="category" onValue={handleCategoryParam} />

      {/* ── Single-Box Segmented Category Filter (Clean & User-Friendly) ── */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Filter packages by event category"
          className="inline-flex items-center p-1 sm:p-1.5 bg-[#FAF7F1] border border-[#D8CFC1] rounded-full max-w-full overflow-x-auto no-scrollbar shadow-xs"
        >
          {packageCategories.map((category) => {
            const isActive = category.slug === activeCategory;
            const count = getPackagesByCategory(category.slug).length;

            return (
              <button
                key={category.slug}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  "shrink-0 whitespace-nowrap cursor-pointer px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wide transition-all duration-200 rounded-full flex items-center gap-2",
                  isActive
                    ? "bg-[#D71920] text-white font-semibold shadow-xs"
                    : "text-[#716B64] font-medium hover:text-[#171716] hover:bg-[#EEE9DF]/70",
                )}
              >
                <span>{category.label}</span>
                <span
                  className={cn(
                    "inline-grid size-5 place-items-center rounded-full text-[10px] font-bold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#EEE9DF] text-[#D71920]",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Category Context Card (Light Surface, Red Text Details) ── */}
      <div className="flex flex-col gap-5 rounded-2xl border border-[#D8CFC1] bg-[#FAF7F1] p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between shadow-xs">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#D71920]" aria-hidden />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D71920]">
              {currentMeta.eyebrow}
            </p>
          </div>
          <h2
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-2xl sm:text-3xl font-medium text-[#171716] tracking-tight leading-snug"
          >
            {currentMeta.label}
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#716B64]">
            {currentMeta.description}
          </p>
        </div>

        <a
          href={whatsappUrl(
            `Hello HALO CINEMATIC STUDIO! I would like to enquire about ${currentMeta.label}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#D71920] bg-white px-5 text-xs font-semibold text-[#D71920] hover:bg-[#D71920] hover:text-white transition-all shadow-xs active:scale-95"
        >
          <MessageCircle className="size-4" />
          <span>Ask Custom Quote</span>
          <ArrowRight className="size-3.5" />
        </a>
      </div>

      {/* ── Package Cards Grid (Clean Ivory Cards, Red Accents, Easy to Read) ── */}
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.slug} pkg={pkg} index={i} />
        ))}
      </div>
    </div>
  );
}
