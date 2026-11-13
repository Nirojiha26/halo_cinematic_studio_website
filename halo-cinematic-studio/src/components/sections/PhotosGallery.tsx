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
        className="mb-10 flex flex-wrap items-center gap-3 border-b border-[rgba(20,20,20,0.06)] pb-6"
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
                "inline-flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200",
                isActive
                  ? "btn-grad text-white shadow-md shadow-[rgba(217,11,23,0.28)]"
                  : "border border-[rgba(20,20,20,0.08)] bg-white text-[#141414] hover:border-[#E50919] hover:text-[#B50812]",
              )}
            >
              <span>{collection}</span>
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

      {/* Photos Grid */}
      <div className="photo-masonry">
        {filtered.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onSelect={(p) => setSelectedId(p.id)}
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 94vw"
          />
        ))}
      </div>

      {/* Accessible Fullscreen Modal Lightbox */}
      {selectedPhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          ref={dialogRef}
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={handleClose}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[rgba(20,20,20,0.08)] px-6 py-4">
              <div>
                <p className="text-xs font-semibold text-[#B50812]">
                  {selectedPhoto.category}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                  className="text-lg font-semibold text-[#141414]"
                >
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="grid size-10 place-items-center rounded-full border border-[rgba(20,20,20,0.08)] bg-white text-[#141414] transition-colors hover:border-[#E50919] hover:text-[#E50919]"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Image viewer */}
            <div className="relative min-h-[380px] max-h-[65vh] flex-1 bg-[#141414]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                priority
                className="object-contain p-2"
                sizes="(min-width: 1024px) 896px, 94vw"
              />

              {/* Prev / Next buttons */}
              {filtered.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => stepPhoto(-1)}
                    aria-label="Previous photo"
                    className="absolute left-4 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-white/90 text-[#141414] shadow-md backdrop-blur-sm transition-transform hover:scale-110 hover:text-[#E50919]"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepPhoto(1)}
                    aria-label="Next photo"
                    className="absolute right-4 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-white/90 text-[#141414] shadow-md backdrop-blur-sm transition-transform hover:scale-110 hover:text-[#E50919]"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </>
              ) : null}
            </div>

            {/* Bottom info & WhatsApp enquiry bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(20,20,20,0.08)] bg-[#FFF1F2] px-6 py-4">
              <p className="text-sm text-[#625C5D]">{selectedPhoto.subtitle}</p>
              <a
                href={whatsappUrl(
                  `Hello HALO CINEMATIC STUDIO! I am enquiring about the ${selectedPhoto.title} (${selectedPhoto.category}) shown in your gallery.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grad inline-flex h-10 items-center gap-2 rounded-xl px-5 text-xs font-semibold text-white"
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
