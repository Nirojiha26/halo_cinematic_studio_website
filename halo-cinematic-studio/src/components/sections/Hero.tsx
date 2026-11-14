"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

// Curated collections with 12 authentic photographs per collection in an expansive luxury 4-column album mosaic.
// Every photo in each collection is 100% distinct, authentic, and high quality with zero duplicates.
interface CollagePhoto {
  image: string;
  alt: string;
}

interface CollageCollection {
  id: string;
  signature: string;
  photos: [
    CollagePhoto, // 0: Col 1 Top
    CollagePhoto, // 1: Col 1 Mid Landscape
    CollagePhoto, // 2: Col 1 Bottom
    CollagePhoto, // 3: Col 2 Top Landscape
    CollagePhoto, // 4: Col 2 Mid Signature Portrait
    CollagePhoto, // 5: Col 2 Bottom Detail
    CollagePhoto, // 6: Col 3 Top Signature Portrait
    CollagePhoto, // 7: Col 3 Mid Landscape
    CollagePhoto, // 8: Col 3 Bottom Detail
    CollagePhoto, // 9: Col 4 Top
    CollagePhoto, // 10: Col 4 Mid Landscape
    CollagePhoto, // 11: Col 4 Bottom
  ];
}

const collageCollections: CollageCollection[] = [
  {
    id: "collection-1",
    signature: "HALO Cinematic Studio · 2026",
    photos: [
      // Column 1 (3 photos)
      {
        image: "/images/baby/miththu-05.jpg",
        alt: "HALO Cinematic Studio - Radiant Baby Miththu Milestone Portrait",
      },
      {
        image: "/images/home-selected/garden-couple.webp",
        alt: "HALO Cinematic Studio - Newlywed Couple in Natural Outdoor Garden Light",
      },
      {
        image: "/images/moments/moment-03.jpg",
        alt: "HALO Cinematic Studio - Intimate Bridal Gold Jewelry & Earring Portrait",
      },
      // Column 2 (3 photos)
      {
        image: "/images/home-selected/garland-exchange.webp",
        alt: "HALO Cinematic Studio - Auspicious Garland Exchange Ceremony at Mandapam",
      },
      {
        image: "/images/gallery/halo-1-51.jpg",
        alt: "HALO Cinematic Studio - Royal Garland Exchange Newlywed Couple",
      },
      {
        image: "/images/hero/slide-02.jpg",
        alt: "HALO Cinematic Studio - Newlywed Bride Candid Joy & Jewelry Portrait",
      },
      // Column 3 (3 photos)
      {
        image: "/images/hero/slide-01.jpg",
        alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple in Mandapam",
      },
      {
        image: "/images/home-selected/couple-at-temple.webp",
        alt: "HALO Cinematic Studio - Newlyweds Smiling Seated in Front of Carved Temple Doors",
      },
      {
        image: "/images/baby/miththu-01.jpg",
        alt: "HALO Cinematic Studio - Baby Miththu Joyful First Milestone Smile",
      },
      // Column 4 (3 photos)
      {
        image: "/images/hero/cover-10.jpg",
        alt: "HALO Cinematic Studio - Newlywed Couple Radiant Smile & Shoulder Lean",
      },
      {
        image: "/images/home-selected/temple-connection.webp",
        alt: "HALO Cinematic Studio - Newlyweds Walking in Temple Courtyard Holding Hands",
      },
      {
        image: "/images/home-selected/pink-saree-portrait.webp",
        alt: "HALO Cinematic Studio - Traditional Silk Saree Milestone Celebration",
      },
    ],
  },
  {
    id: "collection-2",
    signature: "HALO · Sacred Ceremonies",
    photos: [
      // Column 1 (3 photos)
      {
        image: "/images/baby/miththu-03.jpg",
        alt: "HALO Cinematic Studio - Sweet Baby Milestone Fine-Art Studio Framing",
      },
      {
        image: "/images/moments/moment-01.jpg",
        alt: "HALO Cinematic Studio - Golden Hour Beach Preshoot Couple Session",
      },
      {
        image: "/images/moments/moment-07.jpg",
        alt: "HALO Cinematic Studio - Bride Golden Hour Candid Smile",
      },
      // Column 2 (3 photos)
      {
        image: "/images/home-selected/traditional-wedding.webp",
        alt: "HALO Cinematic Studio - Traditional Wedding Couple in Silk Saree Before Temple Doors",
      },
      {
        image: "/images/gallery/halo-11.jpg",
        alt: "HALO Cinematic Studio - Classical Bridal Red Silk Saree Elegance",
      },
      {
        image: "/images/gallery/halo-13.jpg",
        alt: "HALO Cinematic Studio - Serene Morning Bridal Preparation Portrait",
      },
      // Column 3 (3 photos)
      {
        image: "/images/home-selected/wedding-embrace.webp",
        alt: "HALO Cinematic Studio - Intimate Wedding Couple Close Embrace",
      },
      {
        image: "/images/moments/moment-05.jpg",
        alt: "HALO Cinematic Studio - Joyous Sacred Mandapam Blessing Ceremony",
      },
      {
        image: "/images/baby/miththu-02.jpg",
        alt: "HALO Cinematic Studio - Playful Baby Expressions and Candid Smile",
      },
      // Column 4 (3 photos)
      {
        image: "/images/hero/slide-05.jpg",
        alt: "HALO Cinematic Studio - Heritage Courtyard Bride in Traditional Jewelry",
      },
      {
        image: "/images/gallery/halo-dila-8-3-.jpg",
        alt: "HALO Cinematic Studio - Cherished Family Milestone Ceremony Celebration",
      },
      {
        image: "/images/gallery/halo-1-12.jpg",
        alt: "HALO Cinematic Studio - Bride & Groom Temple Vows in Auspicious Attire",
      },
    ],
  },
  {
    id: "collection-3",
    signature: "HALO · Timeless Memories",
    photos: [
      // Column 1 (3 photos)
      {
        image: "/images/baby/miththu-04.jpg",
        alt: "HALO Cinematic Studio - Curious Bright Eyes Baby Milestone Portrait",
      },
      {
        image: "/images/moments/moment-04.jpg",
        alt: "HALO Cinematic Studio - Temple Sanctuary Devotion Couple Portrait",
      },
      {
        image: "/images/gallery/halo-10.jpg",
        alt: "HALO Cinematic Studio - Auspicious Ceremony Floral Exchange Ritual",
      },
      // Column 2 (3 photos)
      {
        image: "/images/gallery/halo-1-10.jpg",
        alt: "HALO Cinematic Studio - Sacred Mandapam Union and Temple Framing",
      },
      {
        image: "/images/gallery/halo-11-copy.jpg",
        alt: "HALO Cinematic Studio - Classical Poise and Serene Bridal Smile",
      },
      {
        image: "/images/gallery/halo-12.jpg",
        alt: "HALO Cinematic Studio - Traditional South Asian Bridal Jewellery and Headpiece",
      },
      // Column 3 (3 photos)
      {
        image: "/images/gallery/halo-1-6.jpg",
        alt: "HALO Cinematic Studio - Newlywed Couple Candid Laughter and Joy",
      },
      {
        image: "/images/moments/moment-02.jpg",
        alt: "HALO Cinematic Studio - Newlywed Couple in Ceremonial Silk Attire",
      },
      {
        image: "/images/baby/miththu-06.jpg",
        alt: "HALO Cinematic Studio - Golden First Memories Baby Keepsake",
      },
      // Column 4 (3 photos)
      {
        image: "/images/gallery/halo-dila-6-1-.jpg",
        alt: "HALO Cinematic Studio - Ritual Garland Ceremonial Milestone Blessing",
      },
      {
        image: "/images/gallery/halo-1-79.jpg",
        alt: "HALO Cinematic Studio - Outdoor Garden Couple Romance",
      },
      {
        image: "/images/gallery/halo-dila-3-2-.jpg",
        alt: "HALO Cinematic Studio - Traditional Puberty Ceremony Half-Saree Grace",
      },
    ],
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
          <div className="lg:col-span-5 xl:col-span-5 max-w-xl">
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

          {/* ── Right Column: 4-Column Luxury Editorial Album Mosaic (12 Curated Photos, Floating & Short Distance) ── */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center justify-center pt-1 sm:pt-1.5 lg:pt-2">
            <div className="relative w-full max-w-[390px] xs:max-w-[460px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[820px]">
              
              {/* 4-Column Floating Luxury Photobook Album Mosaic (12 Photos, No Overlap, Tight/Short Distance) */}
              <div className="flex gap-1.5 xs:gap-2 sm:gap-2 lg:gap-2 xl:gap-2.5 items-center justify-center">
                
                {/* ── Column 1: 3 Photos (Portrait - Landscape - Portrait) · Floating Wave 1 ── */}
                <div className="hero-float-1 w-[24%] sm:w-[24%] flex flex-col gap-1.5 xs:gap-2 sm:gap-2 lg:gap-2 justify-center translate-y-2 sm:translate-y-3 lg:translate-y-4">
                  {/* Photo 0 */}
                  <div
                    className="relative w-full aspect-[3/3.2] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[0].image}
                        alt={current.photos[0].alt}
                        fill
                        sizes="(min-width: 1280px) 190px, (min-width: 640px) 140px, 95px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 1 */}
                  <div
                    className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[1].image}
                        alt={current.photos[1].alt}
                        fill
                        sizes="(min-width: 1280px) 190px, (min-width: 640px) 140px, 95px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 2 */}
                  <div
                    className="relative w-full aspect-[3/3.3] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[2].image}
                        alt={current.photos[2].alt}
                        fill
                        sizes="(min-width: 1280px) 190px, (min-width: 640px) 140px, 95px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Column 2: 3 Photos (Landscape - Signature Portrait - Square) · Floating Wave 2 ── */}
                <div className="hero-float-2 w-[25%] sm:w-[25%] flex flex-col gap-1.5 xs:gap-2 sm:gap-2 lg:gap-2 justify-center -translate-y-2 sm:-translate-y-2.5 lg:-translate-y-3.5">
                  {/* Photo 3 */}
                  <div
                    className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[3].image}
                        alt={current.photos[3].alt}
                        fill
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 100px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 4 (Signature Wedding Portrait Centerpiece) */}
                  <div
                    className="relative w-full aspect-[3/3.7] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_10px_26px_-3px_rgba(23,23,22,0.16),0_4px_10px_-2px_rgba(23,23,22,0.08)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_36px_-4px_rgba(23,23,22,0.24)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[4].image}
                        alt={current.photos[4].alt}
                        fill
                        priority
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 100px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 5 */}
                  <div
                    className="relative w-full aspect-[3/3.0] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[5].image}
                        alt={current.photos[5].alt}
                        fill
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 100px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Column 3: 3 Photos (Signature Portrait - Landscape - Square) · Floating Wave 3 ── */}
                <div className="hero-float-3 w-[25%] sm:w-[25%] flex flex-col gap-1.5 xs:gap-2 sm:gap-2 lg:gap-2 justify-center translate-y-1.5 sm:translate-y-2 lg:translate-y-2.5">
                  {/* Photo 6 (Signature Mandapam Portrait Centerpiece) */}
                  <div
                    className="relative w-full aspect-[3/3.7] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_10px_26px_-3px_rgba(23,23,22,0.16),0_4px_10px_-2px_rgba(23,23,22,0.08)] border border-[#E5DFD5] cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_36px_-4px_rgba(23,23,22,0.24)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[6].image}
                        alt={current.photos[6].alt}
                        fill
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 100px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 7 */}
                  <div
                    className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[7].image}
                        alt={current.photos[7].alt}
                        fill
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 100px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 8 */}
                  <div
                    className="relative w-full aspect-[3/3.0] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[8].image}
                        alt={current.photos[8].alt}
                        fill
                        sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 100px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Column 4: 3 Photos (Portrait - Landscape - Portrait) · Floating Wave 4 ── */}
                <div className="hero-float-4 w-[24%] sm:w-[24%] flex flex-col gap-1.5 xs:gap-2 sm:gap-2 lg:gap-2 justify-center -translate-y-1.5 sm:-translate-y-2 lg:-translate-y-3">
                  {/* Photo 9 */}
                  <div
                    className="relative w-full aspect-[3/3.3] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[9].image}
                        alt={current.photos[9].alt}
                        fill
                        sizes="(min-width: 1280px) 190px, (min-width: 640px) 140px, 95px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 10 */}
                  <div
                    className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[10].image}
                        alt={current.photos[10].alt}
                        fill
                        sizes="(min-width: 1280px) 190px, (min-width: 640px) 140px, 95px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Photo 11 */}
                  <div
                    className="relative w-full aspect-[3/3.2] overflow-hidden rounded-[5px] sm:rounded-md bg-white p-[3px] sm:p-1 shadow-[0_8px_22px_-3px_rgba(23,23,22,0.12),0_3px_8px_-2px_rgba(23,23,22,0.06)] border border-[#E5DFD5]/90 cursor-pointer group transition-all duration-300 hover:shadow-[0_18px_32px_-4px_rgba(23,23,22,0.20)] hover:-translate-y-1.5 hover:scale-[1.025] hover:z-20"
                    onClick={() => move(1)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[3px] sm:rounded-[4px] bg-[#EAE4D9]">
                      <Image
                        src={current.photos[11].image}
                        alt={current.photos[11].alt}
                        fill
                        sizes="(min-width: 1280px) 190px, (min-width: 640px) 140px, 95px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Signature below Album */}
              <div className="pt-2 sm:pt-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-[#8C827A]">
                  <span className="size-1.5 rounded-full bg-[#D71920]" />
                  <span>Curated Album</span>
                </div>
                <p
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="text-[11px] sm:text-xs italic text-[#6B655E] tracking-wider"
                >
                  {current.signature}
                </p>
              </div>

              {/* ── Slide Collection Arrows Controls (Cleanly Below Collage, 100% In View) ── */}
              <div className="mt-3 sm:mt-3.5 flex items-center justify-center gap-3 z-30">
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
