"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

// Curated collections for the 3 layered Polaroids
const polaroidCollections = [
  {
    id: "collection-1",
    top: {
      image: "/images/hero/slide-02.jpg",
      alt: "HALO Cinematic Studio - Newlywed Couple Intimate Portrait",
    },
    middle: {
      image: "/images/hero/slide-01.jpg",
      alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple in Mandapam",
    },
    bottom: {
      image: "/images/moments/moment-03.jpg",
      alt: "HALO Cinematic Studio - Close-up of Ring Exchange and Sacred Handfasting",
    },
  },
  {
    id: "collection-2",
    top: {
      image: "/images/hero/cover-10.jpg",
      alt: "HALO Cinematic Studio - Bride and Groom Joyous Smile",
    },
    middle: {
      image: "/images/moments/moment-04.jpg",
      alt: "HALO Cinematic Studio - Auspicious Heritage Wedding Ceremony",
    },
    bottom: {
      image: "/images/moments/moment-05.jpg",
      alt: "HALO Cinematic Studio - Bride in Traditional Silk Saree Portrait",
    },
  },
  {
    id: "collection-3",
    top: {
      image: "/images/hero/slide-03.jpg",
      alt: "HALO Cinematic Studio - Temple Rituals & Blessings",
    },
    middle: {
      image: "/images/moments/moment-02.jpg",
      alt: "HALO Cinematic Studio - Candid Joy & Laughter",
    },
    bottom: {
      image: "/images/moments/moment-07.jpg",
      alt: "HALO Cinematic Studio - Bride Candid Golden Hour Portrait",
    },
  },
];

const AUTOPLAY_MS = 7000;

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
      setActiveSet((curr) => (curr + 1) % polaroidCollections.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible]);

  const move = useCallback((direction: number) => {
    setActiveSet((curr) => (curr + direction + polaroidCollections.length) % polaroidCollections.length);
  }, []);

  const current = polaroidCollections[activeSet];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F9F7F2] border-b border-[#E2DAD0] pt-[92px] lg:pt-[104px] min-h-[calc(100vh-1rem)] lg:min-h-[720px] lg:h-[calc(100vh-0.5rem)] flex items-center select-none"
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
      {/* ── Right Half Background Image (Silk & Floral Backdrop from Reference) ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[58%] pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/hero/hero-floral-backdrop-v3.jpg"
          alt=""
          fill
          priority
          quality={92}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-center lg:object-[center_right] opacity-90"
        />
        {/* Smooth horizontal gradient to blend seamlessly into left column #F9F7F2 */}
        <div
          className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/85 via-15% md:via-25% lg:via-[#F9F7F2]/30 lg:via-45% to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="w-full relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* ── Left Column: Editorial Headline & Actions (matching reference screenshot) ── */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#D71920] shrink-0" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#55504A]">
                Photography · Cinematography · Creative Studio
              </p>
            </div>

            {/* Main Display Headline (matching CAPTURE LOVE / Every Frame) */}
            <h1
              id="hero-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-normal tracking-[-0.035em] leading-[1.08] text-[#171716]"
            >
              Every Frame
              <br />
              Tells a <span className="italic font-serif text-[#D71920]">Feeling.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-medium tracking-tight text-[#221F1F]">
              Stories Worth Remembering.
            </p>

            {/* Description Paragraph */}
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#5F5A5A] max-w-lg font-normal">
              We capture the moments that matter and turn them into timeless memories. From traditional
              ceremonies to cinematic films, every frame is created with passion and care.
            </p>

            {/* 2 Primary Action Buttons */}
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/photos"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#D71920] px-7 sm:px-8 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-lg shadow-[#D71920]/25 transition-all duration-300 hover:bg-[#b81219] hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#171716]/30 bg-transparent hover:bg-[#171716] hover:text-white px-7 sm:px-8 text-xs sm:text-sm font-semibold tracking-wider text-[#171716] transition-all duration-300 hover:border-[#171716] hover:-translate-y-0.5"
              >
                <span>Book Your Date</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>


          </div>

          {/* ── Right Column: Cascading 3-Polaroid Composition (Steep Left-Side Diagonal Angle) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] xl:max-w-[540px] h-[590px] sm:h-[650px] xl:h-[680px]">
              
              {/* ── POLAROID 1: Top-Right (Bride Intimate Portrait) ── */}
              <div
                className="absolute top-1 sm:top-2 right-2 sm:right-4 xl:right-6 w-[205px] sm:w-[240px] xl:w-[265px] rotate-[9deg] hover:rotate-0 hover:scale-105 z-10 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-[2px] shadow-[0_18px_40px_rgba(23,23,22,0.18)] border border-[#E8E2D7] transition-all duration-500 group-hover:shadow-[0_26px_52px_rgba(23,23,22,0.25)]">
                  <div className="relative aspect-[1/1.08] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.top.image}
                      alt={current.top.alt}
                      fill
                      sizes="(min-width: 1280px) 265px, (min-width: 640px) 240px, 205px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-106"
                    />
                  </div>
                </div>
              </div>

              {/* ── POLAROID 2: Middle-Left (Traditional Mandapam Ceremony - Shifted Far Left) ── */}
              <div
                className="absolute top-[175px] sm:top-[200px] xl:top-[215px] left-1 sm:left-3 xl:left-4 w-[215px] sm:w-[250px] xl:w-[275px] -rotate-[6deg] hover:rotate-0 hover:scale-105 z-20 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-[2px] shadow-[0_24px_48px_rgba(23,23,22,0.22)] border border-[#E8E2D7] transition-all duration-500 group-hover:shadow-[0_32px_60px_rgba(23,23,22,0.28)]">
                  <div className="relative aspect-[1/1.08] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.middle.image}
                      alt={current.middle.alt}
                      fill
                      priority
                      sizes="(min-width: 1280px) 275px, (min-width: 640px) 250px, 215px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-106"
                    />
                  </div>
                </div>
              </div>

              {/* ── POLAROID 3: Bottom-Left (Sacred Ritual & Hands - Flowing Down Along Left Angle) ── */}
              <div
                className="absolute top-[375px] sm:top-[420px] xl:top-[445px] left-[30px] sm:left-[50px] xl:left-[60px] w-[210px] sm:w-[245px] xl:w-[270px] rotate-[7deg] hover:rotate-0 hover:scale-106 z-30 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-[2px] shadow-[0_28px_56px_rgba(23,23,22,0.26)] border border-[#E8E2D7] transition-all duration-500 group-hover:shadow-[0_36px_68px_rgba(23,23,22,0.32)]">
                  <div className="relative aspect-[1/1.08] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.bottom.image}
                      alt={current.bottom.alt}
                      fill
                      sizes="(min-width: 1280px) 270px, (min-width: 640px) 245px, 210px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-106"
                    />
                  </div>
                </div>
              </div>

              {/* ── Slide Collection Arrows Controls ── */}
              <div className="absolute -bottom-8 sm:-bottom-9 inset-x-0 flex items-center justify-center gap-3 z-30">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous photograph collection"
                  className="size-7 rounded-full border border-[#171716]/25 bg-white/95 hover:bg-[#D71920] hover:text-white hover:border-transparent text-[#171716] grid place-items-center transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="size-3.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {polaroidCollections.map((set, idx) => (
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
                  className="size-7 rounded-full border border-[#171716]/25 bg-white/95 hover:bg-[#D71920] hover:text-white hover:border-transparent text-[#171716] grid place-items-center transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronRight className="size-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
