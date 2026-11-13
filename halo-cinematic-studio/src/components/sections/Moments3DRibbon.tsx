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
  angle: number;
  origin: string;
  // Specific height classes to form the exact concave "V" arc of the reference screenshot
  heightClass: string;
}

// 7 completely fresh, authentic HALO Cinematic Studio photos (0 occurrences elsewhere on home page)
const concaveMoments: ConcaveMoment[] = [
  {
    id: "concave-1",
    src: "/images/gallery/halo-08.jpg",
    title: "Golden Hour Ocean Intimacy",
    category: "Preshoot & Sunset",
    collection: "Engagements",
    alt: "Couple in soft golden coastal light during an outdoor sunset preshoot",
    angle: 34,
    origin: "right center",
    heightClass: "h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[400px]",
  },
  {
    id: "concave-2",
    src: "/images/gallery/halo-06.jpg",
    title: "Bridal Splendour & Silk",
    category: "Fine-Art Portraits",
    collection: "Portraits",
    alt: "South Asian bride in ceremonial silk saree and bridal jewellery",
    angle: 22,
    origin: "right center",
    heightClass: "h-[195px] sm:h-[245px] md:h-[290px] lg:h-[335px] xl:h-[355px]",
  },
  {
    id: "concave-3",
    src: "/images/gallery/halo-09.jpg",
    title: "Sacred Ring Ceremony",
    category: "Ceremony & Details",
    collection: "Ceremony & Details",
    alt: "Macro detail of ring exchange and traditional handfasting ceremony",
    angle: 11,
    origin: "right center",
    heightClass: "h-[175px] sm:h-[215px] md:h-[255px] lg:h-[295px] xl:h-[310px]",
  },
  {
    id: "concave-4",
    src: "/images/gallery/halo-12.jpg",
    title: "Bridal Crown & Adornments",
    category: "South Asian Heritage",
    collection: "Weddings",
    alt: "Detailed fine-art South Asian bridal jewellery and headpiece portrait",
    angle: 0,
    origin: "center center",
    heightClass: "h-[155px] sm:h-[190px] md:h-[225px] lg:h-[260px] xl:h-[275px]",
  },
  {
    id: "concave-5",
    src: "/images/gallery/halo-dila-6-1-.jpg",
    title: "Jasmine Garland Blessing",
    category: "Traditional Weddings",
    collection: "Weddings",
    alt: "Couple sharing joyous laughter during garland blessing ceremony",
    angle: -11,
    origin: "left center",
    heightClass: "h-[175px] sm:h-[215px] md:h-[255px] lg:h-[295px] xl:h-[310px]",
  },
  {
    id: "concave-6",
    src: "/images/gallery/halo-07.jpg",
    title: "Temple Courtyard Vows",
    category: "Heritage Weddings",
    collection: "Weddings",
    alt: "Newlywed couple in traditional silk standing before sacred temple pillars",
    angle: -22,
    origin: "left center",
    heightClass: "h-[195px] sm:h-[245px] md:h-[290px] lg:h-[335px] xl:h-[355px]",
  },
  {
    id: "concave-7",
    src: "/images/gallery/halo-10.jpg",
    title: "Sunset Shoreline Silhouette",
    category: "Outdoor Preshoot",
    collection: "Engagements",
    alt: "Couple in silhouette walking along the Jaffna coastline at dusk",
    angle: -34,
    origin: "left center",
    heightClass: "h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[400px]",
  },
];

export function EditorialPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative py-14 sm:py-18 lg:py-24 bg-[#FFFFFF] border-y border-[#E2DAD0] overflow-hidden select-none"
      id="selected-moments"
      aria-labelledby="portfolio-heading"
    >
      {/* Subtle Warm Gallery Spotlight Background */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,1)_0%,rgba(250,247,241,0.65)_70%,rgba(244,239,230,0.4)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[98rem] 2xl:max-w-[108rem] mx-auto px-3 sm:px-6 lg:px-8">
        {/* ── Section Header (Clean, Refined, Matching Reference Layout) ── */}
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14 lg:mb-16">
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
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D71920]" />
            </Link>
          </div>
        </div>

        {/* ── 3D Concave Cylindrical Arc (7 cards, zero overlap, visible gaps, pure sample match) ── */}
        <div className="relative w-full py-4 sm:py-8 flex items-center justify-center [perspective:1200px]">
          <div className="w-full flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 px-1 sm:px-2">
            {concaveMoments.map((moment, idx) => {
              const isHovered = hoveredId === moment.id;
              const isCenter = idx === 3;

              // When hovered, straighten and subtly elevate towards camera
              const rotationY = isHovered ? 0 : moment.angle;
              const zIndex = isHovered ? 40 : 10;

              return (
                <Link
                  key={moment.id}
                  href={`/photos?collection=${encodeURIComponent(moment.collection)}`}
                  onMouseEnter={() => setHoveredId(moment.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    transform: `rotateY(${rotationY}deg) ${isHovered ? "scale(1.08) translateY(-8px)" : ""}`,
                    transformOrigin: isHovered ? "center center" : moment.origin,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  className={cn(
                    "group relative w-[13.2%] sm:w-[12.8%] md:w-[12.5%] max-w-[195px] xl:max-w-[215px] shrink-0 rounded-xl sm:rounded-2xl lg:rounded-[20px] overflow-hidden border border-[#171716]/10 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out cursor-pointer bg-[#EEE9DF]",
                    moment.heightClass,
                    isHovered
                      ? "ring-2 sm:ring-4 ring-[#D71920] border-transparent shadow-[0_22px_45px_rgba(215,25,32,0.28)]"
                      : "hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]",
                    isCenter && !hoveredId ? "shadow-[0_8px_20px_rgba(0,0,0,0.08)]" : "",
                  )}
                >
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(min-width: 1280px) 14vw, (min-width: 768px) 16vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Dark Vignette Sheen on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300",
                      isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  />

                  {/* Hover Caption Details */}
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-2.5 sm:p-4 text-white transition-all duration-300 flex flex-col justify-end",
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none",
                    )}
                  >
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                      {moment.category}
                    </p>
                    <h4
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[11px] sm:text-xs lg:text-sm font-medium leading-tight text-white mt-0.5 line-clamp-1"
                    >
                      {moment.title}
                    </h4>
                    <p className="mt-1 text-[10px] sm:text-[11px] text-white/90 hidden sm:inline-flex items-center gap-1 font-semibold">
                      <Maximize2 className="size-2.5 sm:size-3 text-[#D71920]" />
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
