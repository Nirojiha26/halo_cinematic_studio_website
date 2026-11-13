"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  FileImage,
  LayoutGrid,
  Maximize2,
  MessageCircle,
  X,
} from "lucide-react";
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
import { useBodyScrollLock } from "@/lib/hooks";

export function PackagesExplorer() {
  const [activeCategory, setActiveCategory] =
    useState<PackageCategorySlug>("weddings");
  const [viewMode, setViewMode] = useState<"cards" | "flyers">("cards");
  const [activeFlyer, setActiveFlyer] = useState<{
    src: string;
    title: string;
  } | null>(null);

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

  useBodyScrollLock(Boolean(activeFlyer));

  return (
    <div className="space-y-10 sm:space-y-12">
      <QueryParamSync name="category" onValue={handleCategoryParam} />

      {/* ── Top Controls: Category Segmented Filter & View Switcher ── */}
      <div className="flex flex-col items-center gap-4">
        {/* Unified Single-Box Segmented Category Filter (No Numbers) */}
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

        {/* View Mode Toggle: Detailed Cards vs Original Flyers */}
        <div className="inline-flex items-center gap-1 p-1 bg-[#FAF7F1] border border-[#D8CFC1] rounded-xl text-xs font-semibold text-[#716B64]">
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer",
              viewMode === "cards"
                ? "bg-[#171716] text-white shadow-xs"
                : "hover:text-[#171716]",
            )}
          >
            <LayoutGrid className="size-3.5" />
            <span>Package Cards</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("flyers")}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer",
              viewMode === "flyers"
                ? "bg-[#171716] text-white shadow-xs"
                : "hover:text-[#171716]",
            )}
          >
            <FileImage className="size-3.5 text-[#D71920]" />
            <span>Official Flyers</span>
          </button>
        </div>
      </div>

      {/* ── Category Context Card (Clean Soft Ivory Surface, Red Accents) ── */}
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

      {/* ── View 1: Detailed Package Cards (2 Per Row as Requested) ── */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              pkg={pkg}
              onViewFlyer={(src, title) => setActiveFlyer({ src, title })}
            />
          ))}
        </div>
      ) : (
        /* ── View 2: Official Studio Flyers Gallery ── */
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages
            .filter((p) => Boolean(p.flyerImage))
            .map((pkg) => (
              <div
                key={pkg.slug}
                onClick={() =>
                  setActiveFlyer({ src: pkg.flyerImage!, title: pkg.name })
                }
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#D8CFC1] bg-[#171716] shadow-sm transition-all duration-300 hover:border-[#D71920] hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={pkg.flyerImage!}
                  alt={pkg.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                    {pkg.tierLabel}
                  </p>
                  <h4
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="text-base font-semibold leading-tight text-white"
                  >
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-[#FAF7F1]/90 font-bold mt-1">
                    {pkg.priceDisplay}
                  </p>
                  <p className="mt-2 text-[11px] text-[#FAF7F1]/80 inline-flex items-center gap-1 font-medium">
                    <Maximize2 className="size-3 text-[#D71920]" /> Click to zoom flyer
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* ── Fullscreen High-Resolution Flyer Lightbox Modal ── */}
      {activeFlyer && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={activeFlyer.title}
              className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-3 sm:p-5 backdrop-blur-xl select-none"
              onClick={() => setActiveFlyer(null)}
            >
              {/* Top Controls Bar */}
              <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setActiveFlyer(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 hover:bg-[#D71920] text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95 group"
                >
                  <ArrowLeft className="size-4 sm:size-5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>Back to Packages</span>
                </button>

                <h3
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="text-sm sm:text-base font-medium text-white tracking-tight"
                >
                  {activeFlyer.title} — Official Studio Flyer
                </h3>

                <button
                  type="button"
                  onClick={() => setActiveFlyer(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-black/60 text-white/90 hover:bg-[#D71920] hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95"
                >
                  <X className="size-4 sm:size-5" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </header>

              {/* High-Resolution Flyer Stage */}
              <div
                className="relative w-full h-[calc(100vh-120px)] max-w-4xl flex items-center justify-center my-auto pt-14 pb-10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeFlyer.src}
                  alt={activeFlyer.title}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Bottom Quick Action */}
              <footer className="absolute bottom-4 inset-x-0 z-50 flex justify-center pointer-events-auto">
                <a
                  href={whatsappUrl(
                    `Hello HALO CINEMATIC STUDIO! I am looking at the "${activeFlyer.title}" package flyer. Could you please share booking steps?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D71920] text-white text-xs sm:text-sm font-semibold hover:bg-[#b5141a] transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="size-4" />
                  <span>Enquire This Package on WhatsApp</span>
                </a>
              </footer>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
