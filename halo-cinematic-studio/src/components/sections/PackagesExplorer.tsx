"use client";

import { useCallback, useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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
import { Button } from "@/components/ui/Button";

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
        className="flex flex-wrap items-center gap-2.5 border-b border-line pb-6"
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
                "inline-flex cursor-pointer items-center gap-2.5 rounded-pill px-5 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition-all",
                isActive
                  ? "bg-ink text-on-ink shadow-sm"
                  : "border border-line-strong bg-canvas text-ink hover:border-ink",
              )}
            >
              <span>{category.label}</span>
              <span
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-full text-[10px] font-black",
                  isActive
                    ? "bg-brand text-on-ink"
                    : "bg-paper text-muted",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category context summary */}
      <div className="flex flex-col gap-4 rounded-card border border-line bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="max-w-2xl">
          <p className="eyebrow">{currentMeta.eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl font-black uppercase text-ink sm:text-3xl">
            {currentMeta.label}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body">
            {currentMeta.description}
          </p>
        </div>

        <Button
          href={`/contact?category=${activeCategory}`}
          variant="outline"
          size="md"
          icon={<ArrowRight className="size-4" />}
          className="shrink-0"
        >
          Custom {currentMeta.shortLabel} Quote
        </Button>
      </div>

      {/* Packages grid */}
      <div
        role="tabpanel"
        aria-label={currentMeta.label}
        className={cn(
          "grid gap-6 md:grid-cols-2",
          packages.length === 4 ? "xl:grid-cols-2" : "lg:grid-cols-3",
        )}
      >
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.slug} pkg={pkg} index={index} />
        ))}
      </div>

      {/* Custom package advisory note */}
      <div className="flex flex-col items-start justify-between gap-5 rounded-card border border-line-strong bg-ink p-7 text-on-ink sm:flex-row sm:items-center sm:p-9">
        <div className="flex items-start gap-4">
          <div className="grid size-11 shrink-0 place-items-center rounded-card bg-brand text-on-ink">
            <Sparkles className="size-5" aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-xl font-black uppercase">
              Tailored Multi-Day &amp; Destination Coverage
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm text-on-ink-muted">
              Want to add 4K drone coverage, extra album sheets, pre-shoots, or multi-day travel? Pick any package or
              request a tailored quote directly via WhatsApp.
            </p>
          </div>
        </div>
        <Button
          href="/contact"
          variant="primary"
          size="md"
          icon={<ArrowRight className="size-4" />}
          className="shrink-0"
        >
          Enquire via WhatsApp
        </Button>
      </div>
    </div>
  );
}

