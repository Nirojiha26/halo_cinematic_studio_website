"use client";

import { useCallback, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
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
    <div className="space-y-10">
      <QueryParamSync name="category" onValue={handleCategoryParam} />

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Package categories"
        className="flex flex-wrap items-center gap-3 border-b border-[rgba(20,20,20,0.06)] pb-6"
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
                "inline-flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200",
                isActive
                  ? "btn-grad text-white shadow-md shadow-[rgba(217,11,23,0.28)]"
                  : "border border-[rgba(20,20,20,0.08)] bg-white text-[#141414] hover:border-[#D90B17] hover:text-[#B50812]",
              )}
            >
              <span>{category.label}</span>
              <span
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-full text-[10px] font-bold",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#FFF1F2] text-[#B50812]",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category context summary */}
      <div className="flex flex-col gap-5 rounded-[20px] border border-[rgba(217,11,23,0.14)] bg-[#FFF1F2] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-2xl">
          <p className="chip-eyebrow mb-2">{currentMeta.eyebrow}</p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl font-semibold text-[#141414] sm:text-3xl"
          >
            {currentMeta.label}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#5F5A5A]">
            {currentMeta.description}
          </p>
        </div>

        <a
          href={whatsappUrl(
            `Hello HALO CINEMATIC STUDIO! I would like to get a custom quote for ${currentMeta.label}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-5 text-xs font-semibold"
        >
          <span>Custom {currentMeta.shortLabel} Quote</span>
          <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Package cards grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.slug} pkg={pkg} index={i} />
        ))}
      </div>
    </div>
  );
}
