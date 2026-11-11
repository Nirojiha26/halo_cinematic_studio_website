"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  photoCollections,
  studioPhotos,
  type PhotoCollection,
  type StudioPhoto,
} from "@/data/photos";
import { useBodyScrollLock, useFocusTrap } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { PhotoCard } from "@/components/shared/PhotoCard";
import { QueryParamSync } from "@/components/shared/QueryParamSync";
import { Button } from "@/components/ui/Button";

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
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto, stepPhoto]);

  return (
    <div>
      <QueryParamSync name="collection" onValue={handleCollectionParam} />

      {/* Filter pills */}
      <div
        role="tablist"
        aria-label="Filter photo archive by collection"
        className="mb-10 flex flex-wrap items-center gap-2.5 border-b border-line pb-6"
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
                "inline-flex cursor-pointer items-center gap-2 rounded-pill px-4 py-2 text-xs font-bold tracking-[0.14em] uppercase transition-all",
                isActive
                  ? "bg-ink text-on-ink shadow-sm"
                  : "border border-line-strong bg-canvas text-ink hover:border-ink",
              )}
            >
              <span>{collection}</span>
              <span
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-full text-[10px] font-black",
                  isActive ? "bg-brand text-on-ink" : "bg-paper text-muted",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onSelect={(p) => setSelectedId(p.id)}
          />
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedPhoto ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-xs sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-card border border-white/15 bg-canvas shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-brand" aria-hidden />
                <span className="text-[11px] font-bold tracking-[0.2em] text-ink uppercase">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-muted">
                  ({selectedIndex + 1} / {filtered.length})
                </span>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                aria-label="Close photo lightbox"
                className="grid size-9 cursor-pointer place-items-center rounded-pill border border-line-strong bg-canvas text-ink transition-colors hover:border-ink hover:bg-ink hover:text-on-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Matte darkroom image stage */}
            <div className="relative min-h-[340px] flex-1 bg-ink sm:min-h-[480px]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(min-width: 1024px) 896px, 95vw"
                className="object-contain p-3 sm:p-6"
              />

              {filtered.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => stepPhoto(-1)}
                    aria-label="Previous image"
                    className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-pill border border-white/20 bg-ink/80 text-white transition-colors hover:border-brand hover:bg-brand"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepPhoto(1)}
                    aria-label="Next image"
                    className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-pill border border-white/20 bg-ink/80 text-white transition-colors hover:border-brand hover:bg-brand"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              ) : null}
            </div>

            {/* Bottom info & WhatsApp enquiry link */}
            <div className="flex flex-col gap-4 border-t border-line bg-canvas p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-black uppercase text-ink">
                  {selectedPhoto.title}
                </h2>
                <p className="mt-0.5 text-xs font-medium text-muted">
                  {selectedPhoto.subtitle}
                </p>
              </div>

              <Button
                href={
                  selectedPhoto.packageSlug
                    ? `/contact?category=${selectedPhoto.packageCategory}&package=${selectedPhoto.packageSlug}`
                    : `/contact?category=${selectedPhoto.packageCategory}`
                }
                variant="primary"
                size="md"
                icon={<ArrowRight className="size-4" />}
              >
                Enquire This Package
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

