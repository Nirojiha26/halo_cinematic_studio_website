"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, Sparkles, X } from "lucide-react";
import {
  photoCollections,
  studioPhotos,
  type PhotoCollection,
  type StudioPhoto,
} from "@/data/photos";
import { useBodyScrollLock, useFocusTrap } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { QueryParamSync } from "@/components/shared/QueryParamSync";
import { whatsappUrl } from "@/config/site";

export function PhotosGallery() {
  const [activeCollection, setActiveCollection] =
    useState<PhotoCollection>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleCollectionParam = useCallback((value: string) => {
    const match = photoCollections.find(
      (c) => c.toLowerCase() === value.toLowerCase(),
    );
    if (match) setActiveCollection(match);
  }, []);

  const filtered = useMemo(() => {
    if (activeCollection === "All") return studioPhotos;
    return studioPhotos.filter((p) => p.category === activeCollection);
  }, [activeCollection]);

  const selectedIndex = useMemo(
    () =>
      selectedId ? filtered.findIndex((p) => p.id === selectedId) : -1,
    [filtered, selectedId],
  );

  const selectedPhoto: StudioPhoto | null =
    selectedIndex >= 0 ? filtered[selectedIndex] : null;

  const handleClose = useCallback(() => setSelectedId(null), []);

  const stepPhoto = useCallback(
    (delta: number) => {
      if (selectedIndex < 0 || filtered.length === 0) return;
      const next = (selectedIndex + delta + filtered.length) % filtered.length;
      setSelectedId(filtered[next].id);
    },
    [filtered, selectedIndex],
  );

  useBodyScrollLock(Boolean(selectedPhoto));
  useFocusTrap(dialogRef, Boolean(selectedPhoto), handleClose, closeRef);

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        stepPhoto(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stepPhoto(1);
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto, stepPhoto, handleClose]);

  return (
    <div>
      <QueryParamSync name="collection" onValue={handleCollectionParam} />

      {/* ── Single-Row Category Filter Bar (Strictly 1 Row, Horizontal Scrollable on Mobile) ── */}
      <div className="mb-10 sm:mb-12 border-b border-[#D8CFC1] pb-6">
        <div
          role="tablist"
          aria-label="Filter photo archive by collection"
          className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 flex-nowrap overflow-x-auto no-scrollbar py-1 px-1 -mx-1"
        >
          {photoCollections.map((collection) => {
            const isActive = collection === activeCollection;
            const count =
              collection === "All"
                ? studioPhotos.length
                : studioPhotos.filter((p) => p.category === collection).length;

            return (
              <button
                key={collection}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCollection(collection);
                  setSelectedId(null);
                }}
                className={cn(
                  "inline-flex shrink-0 whitespace-nowrap cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-[#D71920] text-white shadow-sm hover:bg-[#b5141a]"
                    : "border border-[#D8CFC1] bg-[#FAF7F1] text-[#171716] hover:border-[#D71920] hover:text-[#D71920]",
                )}
              >
                <span>{collection}</span>
                <span
                  className={cn(
                    "inline-flex size-5 items-center justify-center rounded-full text-[10px] font-bold transition-colors",
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

      {/* ── Editorial 3-Column Photography Grid (Sample SS Style) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {filtered.map((photo, i) => (
          <div
            key={photo.id}
            onClick={() => setSelectedId(photo.id)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-none border border-[#D8CFC1] bg-[#171716] shadow-xs transition-all duration-500 hover:-translate-y-1 hover:border-[#D71920] hover:shadow-xl cursor-pointer"
          >
            {/* The Authentic Photography Frame */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i < 6}
              sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 95vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Cinematic Gradient Vignette Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Top Bar Badges */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold uppercase tracking-wider text-white bg-[#D71920] px-2.5 py-1 rounded-none shadow-sm">
                {photo.category}
              </span>
              <span
                aria-hidden
                className="grid size-8 place-items-center rounded-none bg-white/90 text-[#171716] opacity-0 shadow-md backdrop-blur-xs transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              >
                <Maximize2 className="size-4 text-[#D71920]" />
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-left opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <h3
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-base sm:text-lg font-medium text-white tracking-tight leading-snug line-clamp-1 drop-shadow-sm"
              >
                {photo.title}
              </h3>
              <p className="mt-1 text-xs text-[#D8CFC1]/90 flex items-center gap-1.5">
                <Sparkles className="size-3 text-[#D71920]" />
                <span>{photo.subtitle}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Fullscreen High-Resolution Lightbox Modal ── */}
      {selectedPhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          ref={dialogRef}
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
          onClick={handleClose}
        >
          <div
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-none bg-[#FAF7F1] border border-[#D8CFC1] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#D8CFC1] px-6 py-4 bg-[#FAF7F1]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D71920]">
                  {selectedPhoto.category}
                </p>
                <h3
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="text-lg sm:text-xl font-normal text-[#171716]"
                >
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="grid size-10 place-items-center rounded-none border border-[#D8CFC1] bg-[#EEE9DF] text-[#171716] transition-colors hover:border-[#D71920] hover:text-[#D71920] cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* High-Resolution Image Viewer */}
            <div className="relative min-h-[380px] max-h-[68vh] flex-1 bg-[#171716]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                priority
                className="object-contain p-2 sm:p-4"
                sizes="(min-width: 1280px) 1100px, 95vw"
              />

              {/* Prev / Next buttons */}
              {filtered.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => stepPhoto(-1)}
                    aria-label="Previous photo"
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-none bg-white/90 text-[#171716] shadow-lg backdrop-blur-xs transition-transform hover:scale-110 hover:text-[#D71920] cursor-pointer"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepPhoto(1)}
                    aria-label="Next photo"
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-none bg-white/90 text-[#171716] shadow-lg backdrop-blur-xs transition-transform hover:scale-110 hover:text-[#D71920] cursor-pointer"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </>
              ) : null}
            </div>

            {/* Bottom info & direct WhatsApp enquiry action */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#D8CFC1] bg-[#EEE9DF] px-6 py-4">
              <p className="text-xs sm:text-sm text-[#716B64] flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-[#D71920]" />
                <span>{selectedPhoto.subtitle}</span>
              </p>
              <a
                href={whatsappUrl(
                  `Hello HALO CINEMATIC STUDIO! I am viewing your photo gallery and would like to enquire about a photography session inspired by "${selectedPhoto.title}" (${selectedPhoto.category}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grad inline-flex h-10 items-center gap-2 rounded-none px-5 text-xs font-semibold text-white shadow-xs"
              >
                <span>Enquire About This Frame</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
