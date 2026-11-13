"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  heightClass: string;
}

// 7 exact client-selected studio photos from /images/
const concaveMoments: ConcaveMoment[] = [
  {
    id: "concave-1",
    src: "/images/moments/moment-01.jpg", // 08.jpg.jpeg
    title: "Golden Hour Ocean Intimacy",
    category: "Sunset Preshoot",
    collection: "Engagements",
    alt: "HALO Cinematic Studio - Sunset beach preshoot couple",
    angle: 34,
    origin: "right center",
    heightClass: "h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[400px]",
  },
  {
    id: "concave-2",
    src: "/images/moments/moment-02.jpg", // 13.jpg.jpeg
    title: "A Day Held in Colour",
    category: "Wedding Portraits",
    collection: "Weddings",
    alt: "HALO Cinematic Studio - Newlywed couple portrait in ceremonial silk",
    angle: 22,
    origin: "right center",
    heightClass: "h-[195px] sm:h-[245px] md:h-[290px] lg:h-[335px] xl:h-[355px]",
  },
  {
    id: "concave-3",
    src: "/images/moments/moment-03.jpg", // 09.jpg.jpeg
    title: "Sacred Ring Ceremony",
    category: "Ceremony & Details",
    collection: "Ceremony & Details",
    alt: "HALO Cinematic Studio - Macro detail of ring exchange and handfasting",
    angle: 11,
    origin: "right center",
    heightClass: "h-[175px] sm:h-[215px] md:h-[255px] lg:h-[295px] xl:h-[310px]",
  },
  {
    id: "concave-4",
    src: "/images/moments/moment-04.jpg", // 2 copy.jpg.jpeg
    title: "Temple Sanctuary Devotion",
    category: "Heritage Collection",
    collection: "Portraits",
    alt: "HALO Cinematic Studio - Intimate couple portrait framed by temple doors",
    angle: 0,
    origin: "center center",
    heightClass: "h-[155px] sm:h-[190px] md:h-[225px] lg:h-[260px] xl:h-[275px]",
  },
  {
    id: "concave-5",
    src: "/images/moments/moment-05.jpg", // Dila-3 (2).JPG.jpeg
    title: "Joyous Sacred Blessing",
    category: "Traditional Weddings",
    collection: "Weddings",
    alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil wedding garland ceremony",
    angle: -11,
    origin: "left center",
    heightClass: "h-[175px] sm:h-[215px] md:h-[255px] lg:h-[295px] xl:h-[310px]",
  },
  {
    id: "concave-6",
    src: "/images/moments/moment-06.jpg", // 8.jpg.jpeg
    title: "Radiance in Bloom",
    category: "Fine-Art Portraits",
    collection: "Portraits",
    alt: "HALO Cinematic Studio - Bride in radiant pink silk saree by natural garden blossoms",
    angle: -22,
    origin: "left center",
    heightClass: "h-[195px] sm:h-[245px] md:h-[290px] lg:h-[335px] xl:h-[355px]",
  },
  {
    id: "concave-7",
    src: "/images/moments/moment-07.jpg", // DSC05900.jpg.jpeg
    title: "Sacred Garland Exchange",
    category: "Auspicious Vows",
    collection: "Weddings",
    alt: "HALO Cinematic Studio - Sacred temple altar ceremony rituals",
    angle: -34,
    origin: "left center",
    heightClass: "h-[220px] sm:h-[280px] md:h-[330px] lg:h-[380px] xl:h-[400px]",
  },
];

export function EditorialPortfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className="relative py-14 sm:py-18 lg:py-24 bg-[#111113] border-y border-[#262428] overflow-hidden select-none"
      id="selected-moments"
      aria-labelledby="portfolio-heading"
    >
      {/* Cinematic Studio Spotlight Gradient (Soft Ambient Red Center Halo) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.18)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.03)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[98rem] 2xl:max-w-[108rem] mx-auto px-3 sm:px-6 lg:px-8">
        {/* ── Section Header (Darkroom Cinema Mode, Crisp Off-White & Red) ── */}
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
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] leading-[1.15] text-[#FAF7F1]"
            >
              Stories We&apos;ve{" "}
              <span className="italic text-[#D71920] font-normal">Captured.</span>
            </h2>
          </div>

          <div className="self-end">
            <Link
              href="/photos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FAF7F1]/90 hover:text-[#D71920] transition-colors border-b border-white/20 hover:border-[#D71920] pb-1 group"
            >
              <span>View Full Gallery</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D71920]" />
            </Link>
          </div>
        </div>

        {/* ── 3D Concave Cylindrical Arc (Mobile horizontal snap scroll, Desktop 3D arc) ── */}
        <div className="relative w-full py-4 sm:py-8 flex items-center justify-center sm:[perspective:1200px]">
          <div className="w-full flex items-center justify-start sm:justify-center gap-3 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 px-4 sm:px-2 overflow-x-auto sm:overflow-visible no-scrollbar snap-x sm:snap-none">
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
                    transform: isMobile
                      ? isHovered
                        ? "scale(1.04)"
                        : undefined
                      : `rotateY(${rotationY}deg) ${isHovered ? "scale(1.08) translateY(-8px)" : ""}`,
                    transformOrigin: isHovered ? "center center" : moment.origin,
                    zIndex,
                    transformStyle: isMobile ? undefined : "preserve-3d",
                  }}
                  className={cn(
                    "group relative w-[160px] xs:w-[175px] sm:w-[12.8%] md:w-[12.5%] max-w-[195px] xl:max-w-[215px] shrink-0 rounded-xl sm:rounded-2xl lg:rounded-[20px] overflow-hidden border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.55)] transition-all duration-500 ease-out cursor-pointer bg-[#1A1A1E] snap-center sm:snap-align-none",
                    moment.heightClass,
                    isHovered
                      ? "ring-2 sm:ring-4 ring-[#D71920] border-transparent shadow-[0_22px_50px_rgba(215,25,32,0.35)]"
                      : "hover:border-white/50",
                    isCenter && !hoveredId ? "shadow-[0_10px_25px_rgba(0,0,0,0.45)]" : "",
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
                      "absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300",
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

        {/* Mobile Swipe Cue */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#FAF7F1]/60 sm:hidden">
          <span className="size-1.5 rounded-full bg-[#D71920] animate-pulse" />
          <span>Swipe horizontally to explore all 7 moments</span>
        </div>
      </div>
    </section>
  );
}
