"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

// Curated collections matching the exact album collage template (reference media_1794592101754_d9962176.png)
// Every photo in each collection is 100% distinct, authentic, and high quality with zero duplicates.
const collageCollections = [
  {
    id: "collection-1",
    signature: "HALO Cinematic Studio · 2026",
    topRight: {
      image: "/images/gallery/halo-1-51.jpg",
      alt: "HALO Cinematic Studio - Royal Garland Exchange Newlywed Couple",
    },
    topLeft: {
      image: "/images/baby/miththu-05.jpg",
      alt: "HALO Cinematic Studio - Radiant Baby Miththu Milestone Portrait",
    },
    center: {
      image: "/images/home-selected/couple-at-temple.webp",
      alt: "HALO Cinematic Studio - Newlyweds Smiling Seated in Front of Carved Temple Doors",
    },
    bottomLeft: {
      image: "/images/moments/moment-03.jpg",
      alt: "HALO Cinematic Studio - Intimate Bridal Gold Jewelry & Earring Portrait",
    },
    bottomRight: {
      image: "/images/hero/slide-01.jpg",
      alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple in Mandapam",
    },
  },
  {
    id: "collection-2",
    signature: "HALO · Sacred Ceremonies",
    topRight: {
      image: "/images/home-selected/garden-couple.webp",
      alt: "HALO Cinematic Studio - Newlywed Couple in Natural Outdoor Garden Light",
    },
    topLeft: {
      image: "/images/hero/slide-02.jpg",
      alt: "HALO Cinematic Studio - Newlywed Bride Candid Joy & Intimate Jewelry Portrait",
    },
    center: {
      image: "/images/home-selected/garland-exchange.webp",
      alt: "HALO Cinematic Studio - Auspicious Garland Exchange Ceremony at Mandapam",
    },
    bottomLeft: {
      image: "/images/moments/moment-07.jpg",
      alt: "HALO Cinematic Studio - Bride Golden Hour Candid Smile",
    },
    bottomRight: {
      image: "/images/hero/cover-10.jpg",
      alt: "HALO Cinematic Studio - Newlywed Couple Radiant Smile & Shoulder Lean",
    },
  },
  {
    id: "collection-3",
    signature: "HALO · Timeless Memories",
    topRight: {
      image: "/images/home-selected/traditional-wedding.webp",
      alt: "HALO Cinematic Studio - Traditional Wedding Couple in Silk Saree Before Temple Doors",
    },
    topLeft: {
      image: "/images/moments/moment-06.jpg",
      alt: "HALO Cinematic Studio - Bride on Vintage Garden Bench Portrait",
    },
    center: {
      image: "/images/home-selected/temple-connection.webp",
      alt: "HALO Cinematic Studio - Newlyweds Walking in Temple Courtyard Holding Hands",
    },
    bottomLeft: {
      image: "/images/hero/slide-05.jpg",
      alt: "HALO Cinematic Studio - Heritage Courtyard Bride in Traditional Jewelry",
    },
    bottomRight: {
      image: "/images/home-selected/wedding-embrace.webp",
      alt: "HALO Cinematic Studio - Intimate Wedding Couple Close Embrace",
    },
  },
];

const AUTOPLAY_MS = 10000;

export function Hero() {
  const [activeSet, setActiveSet] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    const onVisibility = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || !visible) return;
    const timer = window.setInterval(() => {
      setActiveSet((curr) => (curr + 1) % collageCollections.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible]);

  const move = useCallback((direction: number) => {
    setActiveSet((curr) => (curr + direction + collageCollections.length) % collageCollections.length);
  }, []);

  const current = collageCollections[activeSet];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F9F7F2] border-b border-[#E2DAD0] pt-[112px] sm:pt-[124px] lg:pt-[138px] pb-8 sm:pb-6 lg:h-[calc(100vh-1rem)] lg:min-h-[580px] lg:max-h-[820px] flex items-center select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        const end = e.changedTouches[0]?.clientX;
        if (start !== null && end !== undefined && Math.abs(end - start) > 40) {
          move(end < start ? 1 : -1);
        }
        touchStartX.current = null;
        setPaused(false);
      }}
    >
      {/* ── Right Half Background Image (Silk & Delicate White Floral Backdrop) ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%] pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/hero/hero-floral-backdrop-clean.jpg"
          alt=""
          fill
          priority
          quality={92}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center lg:object-[center_right] opacity-40 sm:opacity-60 lg:opacity-80"
        />
        {/* Smooth horizontal gradient to blend seamlessly into left column #F9F7F2 */}
        <div
          className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/90 via-20% md:via-30% lg:via-[#F9F7F2]/30 lg:via-40% to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="w-full relative z-10 py-1 sm:py-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          
          {/* ── Left Column: Editorial Headline & Actions (Prominent Size, Balanced Breathing Room) ── */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
              <span className="w-8 h-[2px] bg-[#D71920] shrink-0" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#55504A]">
                Photography · Cinematography · Creative Studio
              </p>
            </div>

            {/* Main Display Headline (Capture Every Precious Moment) */}
            <h1
              id="hero-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-[34px] xs:text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-normal tracking-[-0.035em] leading-[1.08] text-[#171716]"
            >
              Capture Every
              <br />
              Precious <span className="italic font-serif text-[#D71920]">Moment.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-4 text-base sm:text-lg lg:text-xl font-medium tracking-tight text-[#221F1F]">
              Stories Worth Remembering.
            </p>

            {/* Description Paragraph */}
            <p className="mt-2.5 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#5F5A5A] max-w-lg font-normal">
              We capture the moments that matter and turn them into timeless memories. From traditional
              ceremonies to cinematic films, every frame is created with passion and care.
            </p>

            {/* 2 Primary Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/photos"
                className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#D71920] px-7 sm:px-8 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md shadow-[#D71920]/25 transition-all duration-300 hover:bg-[#b81219] hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-[#171716]/30 bg-transparent hover:bg-[#171716] hover:text-white px-7 sm:px-8 text-xs sm:text-sm font-semibold tracking-wider text-[#171716] transition-all duration-300 hover:border-[#171716] hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <span>Book Your Date</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

          </div>

          {/* ── Right Column: Magazine Editorial Album Layout (Brought Down to Clear Navbar, Well-Organized Space) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center pt-1.5 sm:pt-2 lg:pt-3">
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[450px] lg:max-w-[470px] xl:max-w-[500px]">
              
              {/* Stepped 2-Column Album Frame */}
              <div className="flex gap-2.5 sm:gap-3 items-end">
                
                {/* ── Left Column: Stepped 3-Photo Wing ── */}
                <div className="flex-1 flex flex-col gap-2.5 sm:gap-3 justify-end">
                  
                  {/* Photo 2 (Top-Center: Inset Vertical Slender Portrait) */}
                  <div className="flex justify-end">
                    <div
                      className="relative w-[70%] aspect-[3/3.35] overflow-hidden rounded-[2px] bg-white p-1.5 sm:p-2 shadow-[0_6px_22px_rgba(23,23,22,0.09)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_28px_rgba(23,23,22,0.15)]"
                      onClick={() => move(1)}
                    >
                      <div className="relative w-full h-full overflow-hidden bg-[#EAE4D9]">
                        <Image
                          src={current.topLeft.image}
                          alt={current.topLeft.alt}
                          fill
                          sizes="(min-width: 1280px) 200px, (min-width: 640px) 180px, 140px"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Photo 3 (Middle-Left: Full-Width Horizontal Landscape Rectangle) */}
                  <div
                    className="relative w-full aspect-[16/9.6] overflow-hidden rounded-[2px] bg-white p-1.5 sm:p-2 shadow-[0_6px_22px_rgba(23,23,22,0.09)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_28px_rgba(23,23,22,0.15)]"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden bg-[#EAE4D9]">
                      <Image
                        src={current.center.image}
                        alt={current.center.alt}
                        fill
                        sizes="(min-width: 1280px) 260px, (min-width: 640px) 230px, 190px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 4 (Bottom-Center: Inset Vertical Slender Portrait) */}
                  <div className="flex justify-end">
                    <div
                      className="relative w-[70%] aspect-[3/3.35] overflow-hidden rounded-[2px] bg-white p-1.5 sm:p-2 shadow-[0_6px_22px_rgba(23,23,22,0.09)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_28px_rgba(23,23,22,0.15)]"
                      onClick={() => move(1)}
                    >
                      <div className="relative w-full h-full overflow-hidden bg-[#EAE4D9]">
                        <Image
                          src={current.bottomLeft.image}
                          alt={current.bottomLeft.alt}
                          fill
                          sizes="(min-width: 1280px) 200px, (min-width: 640px) 180px, 140px"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* ── Right Column: 2-Photo Pillar + Signature ── */}
                <div className="w-[49%] sm:w-[50%] flex flex-col gap-2.5 sm:gap-3">
                  
                  {/* Photo 1 (Top-Right: Tall Vertical Portrait) */}
                  <div
                    className="relative w-full aspect-[3/3.35] overflow-hidden rounded-[2px] bg-white p-1.5 sm:p-2 shadow-[0_6px_22px_rgba(23,23,22,0.09)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_28px_rgba(23,23,22,0.15)]"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden bg-[#EAE4D9]">
                      <Image
                        src={current.topRight.image}
                        alt={current.topRight.alt}
                        fill
                        priority
                        sizes="(min-width: 1280px) 260px, (min-width: 640px) 230px, 190px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 5 (Bottom-Right: Tall Vertical Portrait) */}
                  <div
                    className="relative w-full aspect-[3/3.35] overflow-hidden rounded-[2px] bg-white p-1.5 sm:p-2 shadow-[0_6px_22px_rgba(23,23,22,0.09)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_28px_rgba(23,23,22,0.15)]"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden bg-[#EAE4D9]">
                      <Image
                        src={current.bottomRight.image}
                        alt={current.bottomRight.alt}
                        fill
                        sizes="(min-width: 1280px) 260px, (min-width: 640px) 230px, 190px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Signature under Photo 5 (matching "The Larsons 2015" from reference) */}
                  <div className="pt-1 sm:pt-1.5 text-right">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[11px] sm:text-xs italic text-[#6B655E] tracking-wider"
                    >
                      {current.signature}
                    </p>
                  </div>

                </div>

              </div>

              {/* ── Slide Collection Arrows Controls (Cleanly Below Collage, 100% In View) ── */}
              <div className="mt-3.5 sm:mt-4 flex items-center justify-center gap-3 z-30">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous photograph collection"
                  className="size-7 sm:size-8 rounded-full border border-[#171716]/20 bg-white/95 hover:bg-[#D71920] hover:text-white hover:border-[#D71920] text-[#171716] grid place-items-center transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                  <ChevronLeft className="size-3.5 sm:size-4" />
                </button>

                <div className="flex items-center gap-1.5">
                  {collageCollections.map((set, idx) => (
                    <button
                      key={set.id}
                      type="button"
                      onClick={() => setActiveSet(idx)}
                      aria-label={`Switch to gallery collection ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        idx === activeSet
                          ? "h-1.5 w-5 bg-[#D71920]"
                          : "size-1.5 bg-[#171716]/25 hover:bg-[#171716]/60"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next photograph collection"
                  className="size-7 sm:size-8 rounded-full border border-[#171716]/20 bg-white/95 hover:bg-[#D71920] hover:text-white hover:border-[#D71920] text-[#171716] grid place-items-center transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                >
                  <ChevronRight className="size-3.5 sm:size-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
