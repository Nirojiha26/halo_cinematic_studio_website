"use client";

import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  FileImage,
  Flower2,
  Gem,
  LayoutGrid,
  Maximize2,
  MessageCircle,
  PartyPopper,
  Sparkles,
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

const categoryIcons: Record<
  PackageCategorySlug,
  React.ComponentType<{ className?: string }>
> = {
  weddings: Sparkles,
  engagement: Gem,
  puberty: Flower2,
  events: PartyPopper,
};

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
    <div className="w-full space-y-6 sm:space-y-8">
      <QueryParamSync name="category" onValue={handleCategoryParam} />

      {/* ── Refined Studio Category Header & Filter (Obvious Selectable Tabs, No Counts, Tight Gaps) ── */}
      <div className="rounded-2xl border border-[#D8CFC1] bg-[#FAF7F1] p-4 sm:p-5 shadow-xs">
        {/* Row 1: Helper Eyebrow / Label + View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8CFC1]/70 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#D71920]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#171716]">
              Select Event Category
            </span>
            <span className="text-[#D8CFC1] hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span className="text-xs text-[#716B64] font-medium hidden sm:inline">
              Choose an event type to view packages &amp; investment
            </span>
          </div>

          {/* View Mode Toggle: Cards | Flyers using '|' */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#EEE9DF]/70 border border-[#D8CFC1] rounded-xl text-xs font-semibold self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer",
                viewMode === "cards"
                  ? "bg-white text-[#171716] font-bold shadow-xs border border-[#D8CFC1]/60"
                  : "text-[#716B64] hover:text-[#171716]",
              )}
            >
              <LayoutGrid className="size-3.5" />
              <span>Cards</span>
            </button>
            <span className="text-[#D8CFC1]" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={() => setViewMode("flyers")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer",
                viewMode === "flyers"
                  ? "bg-white text-[#D71920] font-bold shadow-xs border border-[#D8CFC1]/60"
                  : "text-[#716B64] hover:text-[#171716]",
              )}
            >
              <FileImage className="size-3.5 text-[#D71920]" />
              <span>Flyers</span>
            </button>
          </div>
        </div>

        {/* Row 2: Clearly Selectable Category Buttons (Tactile Cards, Icons, Red Accents, No Numbers) */}
        <div
          role="tablist"
          aria-label="Event Categories"
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 my-3.5"
        >
          {packageCategories.map((cat) => {
            const isActive = cat.slug === activeCategory;
            const Icon = categoryIcons[cat.slug] || Sparkles;

            return (
              <button
                key={cat.slug}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  "group relative flex items-center justify-between gap-2.5 p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-white border-[#D71920] shadow-sm ring-1 ring-[#D71920]/30 -translate-y-0.5"
                    : "bg-white/60 hover:bg-white border-[#D8CFC1] hover:border-[#D71920]/60 hover:shadow-xs hover:-translate-y-0.5",
                )}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span
                    className={cn(
                      "grid size-8 sm:size-9 shrink-0 place-items-center rounded-lg transition-colors",
                      isActive
                        ? "bg-[#D71920]/10 text-[#D71920]"
                        : "bg-[#EEE9DF] text-[#716B64] group-hover:bg-[#D71920]/10 group-hover:text-[#D71920]",
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-xs sm:text-sm font-bold leading-tight truncate",
                        isActive
                          ? "text-[#D71920]"
                          : "text-[#171716] group-hover:text-[#D71920]",
                      )}
                    >
                      {cat.label}
                    </p>
                    <p className="text-[10px] text-[#716B64] font-medium leading-none mt-1">
                      {isActive ? "Active View" : "Tap to view"}
                    </p>
                  </div>
                </div>

                <span
                  className={cn(
                    "size-2 shrink-0 rounded-full transition-all",
                    isActive
                      ? "bg-[#D71920] scale-125"
                      : "bg-transparent group-hover:bg-[#D8CFC1]",
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* Row 3: Category Context Strip (Tight Gaps, Differentiated with '|') */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#D8CFC1]/70 text-xs sm:text-sm">
          <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1">
            <span className="font-bold text-[#D71920] uppercase tracking-wider text-[11px] sm:text-xs">
              {currentMeta.eyebrow}
            </span>
            <span className="text-[#D8CFC1] select-none" aria-hidden="true">
              |
            </span>
            <span className="text-[#716B64] leading-relaxed">
              {currentMeta.description}
            </span>
          </div>

          <a
            href={whatsappUrl(
              [
                "📸 *HALO CINEMATIC STUDIO*",
                "*Custom Quote Enquiry*",
                "────────────────────────────",
                "",
                `🏷️ *Category:* ${currentMeta.label}`,
                `• *Event Scope:* ${currentMeta.eyebrow}`,
                "",
                "────────────────────────────",
                `Hello HALO Team! I would like to request a custom quote for our upcoming ${currentMeta.label} event. Could you please share available packages and options?`,
                "",
                "_Sent via halocinematicstudio.com_",
              ].join("\n"),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 font-semibold text-xs text-[#D71920] hover:text-[#b5141a] transition-colors"
          >
            <MessageCircle className="size-3.5" />
            <span>Custom Quote</span>
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>

      {/* ── View 1: 2 Cards Per Row (Spanning Full Page Horizontally) ── */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                    <span>{pkg.tierLabel}</span>
                    <span className="text-white/40" aria-hidden="true">
                      |
                    </span>
                    <span className="text-white/80">{currentMeta.shortLabel}</span>
                  </div>
                  <h4
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="text-base font-semibold leading-tight text-white mt-0.5"
                  >
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-[#FAF7F1] font-bold mt-1">
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
              <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-3 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-auto gap-2">
                <button
                  type="button"
                  onClick={() => setActiveFlyer(null)}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-black/60 hover:bg-[#D71920] text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95 group shrink-0"
                >
                  <ArrowLeft className="size-4 sm:size-5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>Back<span className="hidden sm:inline"> to Packages</span></span>
                </button>

                <h3
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="text-xs sm:text-sm md:text-base font-medium text-white tracking-tight truncate max-w-[180px] sm:max-w-md text-center"
                >
                  {activeFlyer.title}
                  <span className="text-white/40 mx-2 hidden sm:inline" aria-hidden="true">
                    |
                  </span>
                  <span className="text-xs text-[#D8CFC1] hidden sm:inline">Official Studio Flyer</span>
                </h3>

                <button
                  type="button"
                  onClick={() => setActiveFlyer(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-black/60 text-white/90 hover:bg-[#D71920] hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95 shrink-0"
                >
                  <X className="size-4 sm:size-5" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </header>

              {/* High-Resolution Flyer Stage */}
              <div
                className="relative w-full h-[calc(100vh-140px)] max-w-4xl flex items-center justify-center my-auto pt-14 pb-12 px-2"
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
              <footer className="absolute bottom-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-auto">
                <a
                  href={whatsappUrl(
                    [
                      "📸 *HALO CINEMATIC STUDIO*",
                      "*Official Studio Flyer Enquiry*",
                      "────────────────────────────",
                      "",
                      `📄 *Flyer:* ${activeFlyer.title}`,
                      "",
                      "────────────────────────────",
                      `Hello HALO Team! I am viewing your official studio brochure for "${activeFlyer.title}". Could you please share detailed inclusions, date availability, and booking steps?`,
                      "",
                      "_Sent via halocinematicstudio.com_",
                    ].join("\n"),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#D71920] text-white text-xs sm:text-sm font-semibold hover:bg-[#b5141a] transition-all shadow-lg active:scale-95 max-w-[95vw] truncate"
                >
                  <MessageCircle className="size-4 shrink-0" />
                  <span>Enquire Package on WhatsApp</span>
                </a>
              </footer>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
