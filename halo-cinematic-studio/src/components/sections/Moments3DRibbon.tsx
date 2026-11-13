"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConcaveMoment {
  id: string;
  src: string;
  title: string;
  category: string;
  collection: string;
  alt: string;
  angle: number; // Y-axis rotation in degrees
  scale: number; // Scale to produce the concave amphitheater curve from sample screenshot
  zIndex: number;
}

// 5 completely fresh, unused authentic studio photos (checked: 0 occurrences elsewhere on the site)
const concaveMoments: ConcaveMoment[] = [
  {
    id: "concave-1",
    src: "/images/gallery/halo-08.jpg",
    title: "Warm Horizon Intimacy",
    category: "Engagements",
    collection: "Engagements",
    alt: "Couple in golden sunset glow during outdoor preshoot by HALO Cinematic Studio",
    angle: 40,
    scale: 1.18,
    zIndex: 10,
  },
  {
    id: "concave-2",
    src: "/images/gallery/halo-11.jpg",
    title: "Bridal Silk Saree Elegance",
    category: "Portraits",
    collection: "Portraits",
    alt: "Bridal fine-art portrait showcasing traditional Kanchipuram silk saree",
    angle: 20,
    scale: 1.05,
    zIndex: 14,
  },
  {
    id: "concave-3",
    src: "/images/gallery/halo-16.jpg",
    title: "Carved Temple Doorways",
    category: "Weddings",
    collection: "Weddings",
    alt: "Newlywed couple standing peacefully before carved Hindu temple doors",
    angle: 0,
    scale: 0.94,
    zIndex: 20,
  },
  {
    id: "concave-4",
    src: "/images/gallery/halo-dila-6-1-.jpg",
    title: "Ritual Garland Blessing",
    category: "Cultural Ceremony",
    collection: "Portraits",
    alt: "Traditional milestone ceremony with ceremonial floral garland and temple blessings",
    angle: -20,
    scale: 1.05,
    zIndex: 14,
  },
  {
    id: "concave-5",
    src: "/images/gallery/halo-17.jpg",
    title: "Candid Celebration Joy",
    category: "Weddings",
    collection: "Weddings",
    alt: "Spontaneous laughter and joyous family celebration during traditional wedding",
    angle: -40,
    scale: 1.18,
    zIndex: 10,
  },
];

export function EditorialPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F1] border-b border-[#D8CFC1] overflow-hidden select-none"
      id="selected-moments"
      aria-labelledby="portfolio-heading"
    >
      <div className="w-full max-w-[98rem] 2xl:max-w-[108rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Concise & Focused, No Subtitle as requested) ── */}
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2.5">
              <span className="w-5 h-[2px] bg-[#D71920]" aria-hidden="true" />
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                Selected moments
              </p>
            </div>
            <h2
              id="portfolio-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] leading-[1.15] text-[#171716]"
            >
              Stories We&apos;ve{" "}
              <span className="italic text-[#D71920] font-normal">Captured.</span>
            </h2>
          </div>

          <div className="self-end">
            <Link
              href="/photos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#171716] hover:text-[#D71920] transition-colors border-b border-[#D8CFC1] hover:border-[#D71920] pb-1 group"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ── Concave 3D Panoramic Amphitheater (exact match to sample screenshot) ── */}
        <div className="relative w-full py-6 sm:py-10 flex items-center justify-center [perspective:1000px]">
          <div className="w-full flex items-center justify-center -space-x-2 sm:-space-x-3 lg:-space-x-5 px-1 sm:px-2">
            {concaveMoments.map((moment, idx) => {
              const isHovered = hoveredId === moment.id;
              const isCenter = idx === 2;

              // When hovered, flatten towards camera and elevate
              const rotationY = isHovered ? 0 : moment.angle;
              const scale = isHovered ? 1.25 : moment.scale;
              const zIndex = isHovered ? 50 : isCenter ? 25 : moment.zIndex;

              return (
                <Link
                  key={moment.id}
                  href={`/photos?collection=${encodeURIComponent(moment.collection)}`}
                  onMouseEnter={() => setHoveredId(moment.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    transform: `rotateY(${rotationY}deg) scale(${scale})`,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  className={cn(
                    "group relative w-[22%] sm:w-[19%] lg:w-[17.5%] max-w-[280px] aspect-[3/4.2] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-xl transition-all duration-500 ease-out cursor-pointer",
                    isHovered
                      ? "ring-4 ring-[#D71920]/40 shadow-2xl z-50"
                      : "hover:border-[#D71920]",
                    isCenter && !hoveredId ? "shadow-2xl ring-1 ring-black/10" : "",
                  )}
                >
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, 35vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Glass Sheen */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300",
                      isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  />

                  {/* Hover Caption Overlay */}
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-3 sm:p-5 text-white transition-all duration-300 flex flex-col justify-end",
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none",
                    )}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                      {moment.category}
                    </p>
                    <h4
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-xs sm:text-sm lg:text-base font-medium leading-tight text-white mt-0.5 line-clamp-1"
                    >
                      {moment.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-white/85 inline-flex items-center gap-1 font-semibold">
                      <Maximize2 className="size-3 text-[#D71920]" />
                      <span>View in Gallery</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
