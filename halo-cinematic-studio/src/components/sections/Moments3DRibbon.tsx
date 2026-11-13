"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Camera, Maximize2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
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
    angle: 36,
    scale: 0.86,
    zIndex: 10,
  },
  {
    id: "ribbon-2",
    src: "/images/gallery/halo-1-51.jpg",
    title: "Royal Garland Exchange",
    category: "Weddings",
    collection: "Weddings",
    alt: "Joyful bride and groom exchanging floral garlands in traditional ceremony",
    angle: 24,
    scale: 0.92,
    zIndex: 12,
  },
  {
    id: "ribbon-3",
    src: "/images/gallery/halo-13.jpg",
    title: "Reflective Bridal Radiance",
    category: "Portraits",
    collection: "Portraits",
    alt: "Bridal portrait showcasing gold temple ornaments and emerald bangles",
    angle: 12,
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
    angle: -12,
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
    angle: -24,
    scale: 0.92,
    zIndex: 12,
  },
  {
    id: "ribbon-7",
    src: "/images/gallery/halo-2-copy.jpg",
    title: "Henna & Gold Bangles",
    category: "Ceremony & Details",
    collection: "Ceremony & Details",
    alt: "Intricate bridal mehndi and traditional gold wedding jewellery details",
    angle: -36,
    scale: 0.86,
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
      <Container size="wide">
        {/* ── Section Header matching User Spec ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
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

          <div className="flex items-center gap-4 self-start sm:self-end">
            <p className="text-xs sm:text-sm text-[#716B64] font-medium hidden md:block max-w-xs text-right leading-relaxed">
              Real emotions. Beautiful connections. Memories that stay forever.
            </p>
            <Link
              href="/photos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#171716] hover:text-[#D71920] transition-colors border-b border-[#D8CFC1] hover:border-[#D71920] pb-1 group"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ── 3D Curved Perspective Ribbon (matching sample screenshot, zero horizontal scroll) ── */}
        <div className="relative w-full py-4 sm:py-8 flex items-center justify-center [perspective:1200px]">
          <div className="w-full flex items-center justify-center -space-x-3 sm:-space-x-5 lg:-space-x-6 px-2">
            {ribbonMoments.map((moment, idx) => {
              const isHovered = hoveredId === moment.id;
              const isCenter = idx === 3;

              // Calculate active rotation and scale
              const rotationY = isHovered ? 0 : moment.angle;
              const scale = isHovered ? 1.12 : moment.scale;
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
                    "group relative w-[17%] sm:w-[15%] lg:w-[13.8%] max-w-[220px] aspect-[3/4.4] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-white/80 shadow-md transition-all duration-500 ease-out cursor-pointer",
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
                    sizes="(min-width: 1280px) 15vw, (min-width: 768px) 20vw, 30vw"
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

        {/* ── Subtitle Footnote / Gallery Pill ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 pt-6 border-t border-[#D8CFC1]/70 text-xs text-[#716B64]">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#D71920]" />
            <span className="font-semibold text-[#171716]">
              Interactive 3D Perspective Gallery
            </span>
            <span className="text-[#D8CFC1]" aria-hidden="true">
              |
            </span>
            <span className="text-[#716B64]">
              Hover any frame to view details &amp; collection
            </span>
          </div>

          <Link
            href="/photos"
            className="inline-flex items-center gap-1.5 font-semibold text-xs text-[#D71920] hover:text-[#b5141a] transition-colors"
          >
            <Camera className="size-3.5" />
            <span>Explore 30+ Authentic Studio Frames</span>
            <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
