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
  scale: number;
  origin: string;
}

// 5 completely fresh, diverse, unused authentic studio photos (0 occurrences elsewhere on site)
const concaveMoments: ConcaveMoment[] = [
  {
    id: "concave-1",
    src: "/images/gallery/halo-10-jpg-1-.jpg",
    title: "Gentle Embrace by the Sea",
    category: "Engagements & Preshoot",
    collection: "Engagements",
    alt: "Couple in soft natural coastal light during an outdoor preshoot",
    angle: 30,
    scale: 1.15,
    origin: "right center",
  },
  {
    id: "concave-2",
    src: "/images/gallery/halo-12.jpg",
    title: "Bridal Crown & Adornments",
    category: "Fine-Art Portraits",
    collection: "Portraits",
    alt: "Detailed fine-art South Asian bridal jewellery and headpiece portrait",
    angle: 15,
    scale: 1.04,
    origin: "right center",
  },
  {
    id: "concave-3",
    src: "/images/gallery/halo-15.jpg",
    title: "Temple Courtyard Radiance",
    category: "Weddings & Sacred Vows",
    collection: "Weddings",
    alt: "Newlywed couple framed in grand ancient temple stone courtyard with sunlight",
    angle: 0,
    scale: 0.94,
    origin: "center center",
  },
  {
    id: "concave-4",
    src: "/images/gallery/halo-dila-8-3-.jpg",
    title: "Family Milestone Celebration",
    category: "Traditional Milestones",
    collection: "Portraits",
    alt: "Joyful family celebration around traditional puberty ceremony in Jaffna",
    angle: -15,
    scale: 1.04,
    origin: "left center",
  },
  {
    id: "concave-5",
    src: "/images/gallery/halo-4-copy.jpg",
    title: "Jasmine Blooms & Temple Gold",
    category: "Ceremony & Details",
    collection: "Ceremony & Details",
    alt: "Macro focus on fresh white jasmine garlands and handcrafted temple gold ornaments",
    angle: -30,
    scale: 1.15,
    origin: "left center",
  },
];

export function EditorialPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#141416] border-y border-[#262428] overflow-hidden select-none"
      id="selected-moments"
      aria-labelledby="portfolio-heading"
    >
      {/* Ambient Red Studio Glow in the background */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.15)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[98rem] 2xl:max-w-[108rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Darkroom Cinema Mode, Crisp White & Red) ── */}
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-16">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] leading-[1.15] text-[#FAF7F1]"
            >
              Stories We&apos;ve{" "}
              <span className="italic text-[#D71920] font-normal">Captured.</span>
            </h2>
          </div>

          <div className="self-end">
            <Link
              href="/photos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-[#D71920] transition-colors border-b border-white/20 hover:border-[#D71920] pb-1 group"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D71920]" />
            </Link>
          </div>
        </div>

        {/* ── Concave 3D Panoramic Amphitheater (With clear gaps, zero overlap, matching sample screenshot) ── */}
        <div className="relative w-full py-6 sm:py-10 flex items-center justify-center [perspective:1100px]">
          <div className="w-full flex items-center justify-center gap-3.5 sm:gap-5 lg:gap-7 px-1 sm:px-2">
            {concaveMoments.map((moment, idx) => {
              const isHovered = hoveredId === moment.id;
              const isCenter = idx === 2;

              // When hovered, straighten and pop towards camera
              const rotationY = isHovered ? 0 : moment.angle;
              const scale = isHovered ? 1.25 : moment.scale;
              const zIndex = isHovered ? 50 : isCenter ? 20 : 10;

              return (
                <Link
                  key={moment.id}
                  href={`/photos?collection=${encodeURIComponent(moment.collection)}`}
                  onMouseEnter={() => setHoveredId(moment.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    transform: `rotateY(${rotationY}deg) scale(${scale})`,
                    transformOrigin: isHovered ? "center center" : moment.origin,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  className={cn(
                    "group relative w-[19%] sm:w-[18%] lg:w-[17%] max-w-[275px] aspect-[3/4.2] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/25 shadow-2xl transition-all duration-500 ease-out cursor-pointer bg-[#0A0A0C]",
                    isHovered
                      ? "ring-4 ring-[#D71920] border-transparent shadow-[0_20px_50px_rgba(215,25,32,0.35)] z-50"
                      : "hover:border-white/60",
                    isCenter && !hoveredId ? "shadow-[0_15px_35px_rgba(0,0,0,0.6)]" : "",
                  )}
                >
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, 35vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Glass highlight / sheen */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300",
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
