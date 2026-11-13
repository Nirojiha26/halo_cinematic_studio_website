"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, Sparkles, X } from "lucide-react";
import {
  photoCollections,
  studioPhotos,
  type PhotoCollection,
  type StudioPhoto,
} from "@/data/photos";
import { useBodyScrollLock, useFocusTrap } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { QueryParamSync } from "@/components/shared/QueryParamSync";

const noopSubscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

export function PhotosGallery() {
  const isClient = useIsClient();
  const [activeCollection, setActiveCollection] =
    useState<PhotoCollection>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

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

      {/* ── Unified Single-Box Segmented Filter (No Individual Boxes, No Count Numbers) ── */}
      <div className="mb-10 sm:mb-12 flex justify-center">
        <div
          role="tablist"
          aria-label="Filter photo archive by collection"
          className="inline-flex items-center p-1 sm:p-1.5 bg-[#FAF7F1] border border-[#D8CFC1] rounded-full max-w-full overflow-x-auto no-scrollbar shadow-xs"
        >
          {photoCollections.map((collection) => {
            const isActive = collection === activeCollection;

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
                  "shrink-0 whitespace-nowrap cursor-pointer px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wide transition-all duration-200 rounded-full",
                  isActive
                    ? "bg-[#D71920] text-white font-semibold shadow-xs"
                    : "text-[#716B64] font-medium hover:text-[#171716] hover:bg-[#EEE9DF]/70",
                )}
              >
                {collection}
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

      {/* ── Fullscreen Immersive High-Resolution Lightbox Modal with Back Button ── */}
      {isClient && selectedPhoto
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selectedPhoto.title}
              ref={dialogRef}
              className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-2 sm:p-4 backdrop-blur-xl select-none"
              onClick={handleClose}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                const start = touchStartX.current;
                const end = e.changedTouches[0]?.clientX;
                if (start !== null && end !== undefined && Math.abs(end - start) > 40) {
                  stepPhoto(end < start ? 1 : -1);
                }
                touchStartX.current = null;
              }}
            >
              {/* Top Control Bar with Back Button, Counter, and Close Button */}
              <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-3 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-auto">
                {/* Back Button (Requested by User) */}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Back to photo gallery"
                  className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-black/60 hover:bg-[#D71920] text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95 group"
                >
                  <ArrowLeft className="size-4 sm:size-5 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>Back</span>
                </button>

                {/* Photo Counter */}
                <div className="px-3 py-1.5 bg-black/60 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs text-[#D8CFC1] tracking-widest uppercase font-mono">
                  {selectedIndex + 1} / {filtered.length}
                </div>

                {/* Close Button */}
                <button
                  ref={closeRef}
                  type="button"
                  onClick={handleClose}
                  aria-label="Close dialog"
                  className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-black/60 text-white/90 hover:bg-[#D71920] hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95"
                >
                  <X className="size-4 sm:size-5" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </header>

              {/* Prev / Next Navigation Buttons Floating on Sides */}
              {filtered.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      stepPhoto(-1);
                    }}
                    aria-label="Previous photo"
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 grid size-11 sm:size-12 place-items-center bg-black/60 text-white/90 hover:bg-[#D71920] hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none shadow-lg active:scale-95"
                  >
                    <ChevronLeft className="size-6 sm:size-7" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      stepPhoto(1);
                    }}
                    aria-label="Next photo"
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 grid size-11 sm:size-12 place-items-center bg-black/60 text-white/90 hover:bg-[#D71920] hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer rounded-none shadow-lg active:scale-95"
                  >
                    <ChevronRight className="size-6 sm:size-7" />
                  </button>
                </>
              ) : null}

              {/* Full Image Main Stage (Edge to Edge, High Resolution) */}
              <div
                className="relative w-full h-[calc(100vh-130px)] sm:h-[calc(100vh-140px)] max-w-[96vw] flex items-center justify-center my-auto pt-14 pb-14"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="96vw"
                />
              </div>

              {/* Floating Bottom Caption (No Enquire Button, No Nelliady) */}
              <footer className="absolute bottom-3 inset-x-0 z-50 mx-auto max-w-xl text-center px-4 py-2 sm:py-2.5 bg-black/70 backdrop-blur-md border border-white/10 pointer-events-none rounded-none shadow-lg">
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#D71920]">
                  {selectedPhoto.category}
                </p>
                <h3
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="text-sm sm:text-base md:text-lg font-normal text-[#FAF7F1] tracking-tight leading-snug"
                >
                  {selectedPhoto.title}
                </h3>
                {selectedPhoto.subtitle ? (
                  <p className="text-[11px] sm:text-xs text-[#D8CFC1]/80 mt-0.5">
                    {selectedPhoto.subtitle}
                  </p>
                ) : null}
              </footer>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
