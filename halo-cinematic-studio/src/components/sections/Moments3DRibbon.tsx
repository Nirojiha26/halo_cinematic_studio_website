"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface RibbonMoment {
  id: string;
  src: string;
  title: string;
  category: string;
  collection: string;
  alt: string;
  angle: number; // Y-axis rotation in degrees
  scale: number;
  zIndex: number;
}

const ribbonMoments: RibbonMoment[] = [
  {
    id: "ribbon-1",
    src: "/images/gallery/halo-07.jpg",
    title: "Garden Sunset Promenade",
    category: "Engagements",
    collection: "Engagements",
    alt: "Couple in golden sunset glow during outdoor preshoot by HALO Cinematic Studio",
    angle: 30,
    scale: 0.88,
    zIndex: 10,
  },
  {
    id: "ribbon-2",
    src: "/images/gallery/halo-1-51.jpg",
    title: "Royal Garland Exchange",
    category: "Weddings",
    collection: "Weddings",
    alt: "Joyful bride and groom exchanging floral garlands in traditional ceremony",
    angle: 20,
    scale: 0.93,
    zIndex: 12,
  },
  {
    id: "ribbon-3",
    src: "/images/gallery/halo-13.jpg",
    title: "Reflective Bridal Radiance",
    category: "Portraits",
    collection: "Portraits",
    alt: "Bridal portrait showcasing gold temple ornaments and emerald bangles",
    angle: 10,
    scale: 0.97,
    zIndex: 14,
  },
  {
    id: "ribbon-4",
    src: "/images/gallery/halo-dsc05907.jpg",
    title: "Eternal Sacred Vows",
    category: "Weddings",
    collection: "Weddings",
    alt: "Newlyweds standing proudly before grand temple architecture in Nelliady",
    angle: 0,
    scale: 1.05,
    zIndex: 20,
  },
  {
    id: "ribbon-5",
    src: "/images/gallery/halo-dila-3-2-.jpg",
    title: "Puberty Milestone Grace",
    category: "Cultural Ceremony",
    collection: "Portraits",
    alt: "Traditional puberty ceremony portrait with sacred jasmine garland",
    angle: -10,
    scale: 0.97,
    zIndex: 14,
  },
  {
    id: "ribbon-6",
    src: "/images/gallery/halo-10.jpg",
    title: "Candid Laughter Together",
    category: "Engagements",
    collection: "Engagements",
    alt: "Spontaneous intimate laughter between couple during outdoor preshoot",
    angle: -20,
    scale: 0.93,
    zIndex: 12,
  },
  {
    id: "ribbon-7",
    src: "/images/gallery/halo-2-copy.jpg",
    title: "Henna & Gold Bangles",
    category: "Ceremony & Details",
    collection: "Ceremony & Details",
    alt: "Intricate bridal mehndi and traditional gold wedding jewellery details",
    angle: -30,
    scale: 0.88,
    zIndex: 10,
  },
];

export function EditorialPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="relative py-14 sm:py-18 lg:py-20 bg-[#FAF7F1] border-b border-[#D8CFC1] overflow-hidden select-none"
      id="selected-moments"
      aria-labelledby="portfolio-heading"
    >
      <div className="w-full max-w-[98rem] 2xl:max-w-[106rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Removed 'real emotions' text as requested) ── */}
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-12">
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

        {/* ── 3D Curved Perspective Ribbon (Expanded Horizontal Width, zero horizontal scroll) ── */}
        <div className="relative w-full py-4 sm:py-6 flex items-center justify-center [perspective:1400px]">
          <div className="w-full flex items-center justify-center -space-x-1 sm:-space-x-2.5 lg:-space-x-3.5 px-1 sm:px-2">
            {ribbonMoments.map((moment, idx) => {
              const isHovered = hoveredId === moment.id;
              const isCenter = idx === 3;

              // Calculate active rotation and scale
              const rotationY = isHovered ? 0 : moment.angle;
              const scale = isHovered ? 1.1 : moment.scale;
              const zIndex = isHovered ? 40 : isCenter ? 25 : moment.zIndex;

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
                    "group relative w-[18.5%] sm:w-[17%] lg:w-[15.5%] xl:w-[15%] max-w-[260px] aspect-[3/4.2] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-white/80 shadow-md transition-all duration-500 ease-out cursor-pointer",
                    isHovered
                      ? "ring-2 ring-[#D71920] shadow-2xl"
                      : "hover:border-[#D71920]/80",
                    isCenter && !hoveredId ? "shadow-xl ring-1 ring-black/10" : "",
                  )}
                >
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(min-width: 1280px) 16vw, (min-width: 768px) 22vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Glass highlight / sheen */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300",
                      isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  />

                  {/* Hover Caption Overlay */}
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white transition-all duration-300 flex flex-col justify-end",
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
                      className="text-xs sm:text-sm font-medium leading-tight text-white mt-0.5 line-clamp-1"
                    >
                      {moment.title}
                    </h4>
                    <p className="mt-1 text-[10px] text-white/80 inline-flex items-center gap-1 font-semibold">
                      <Maximize2 className="size-2.5 text-[#D71920]" />
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
