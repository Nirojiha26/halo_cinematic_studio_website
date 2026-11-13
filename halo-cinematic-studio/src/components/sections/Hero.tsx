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
      title: "DILA & KAJAN",
      date: "JAFFNA, 2026",
      alt: "HALO Cinematic Studio - Newlywed Couple Intimate Portrait",
    },
    middle: {
      image: "/images/hero/slide-01.jpg",
      title: "TRADITIONAL CEREMONY",
      date: "SACRED VOWS · NELLIADY",
      alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Mandapam Couple",
    },
    bottom: {
      image: "/images/moments/moment-03.jpg",
      title: "SARA & DANIEL",
      date: "JUL, 2026",
      alt: "HALO Cinematic Studio - Close-up of Ring Exchange and Handfasting",
    },
  },
  {
    id: "collection-2",
    top: {
      image: "/images/hero/cover-10.jpg",
      title: "COASTAL INTIMACY",
      date: "SUNSET PRESHOOT · 2026",
      alt: "HALO Cinematic Studio - Sunset Beach Preshoot",
    },
    middle: {
      image: "/images/hero/slide-03.jpg",
      title: "TEMPLE BLESSING",
      date: "AUSPICIOUS RITUALS · JAFFNA",
      alt: "HALO Cinematic Studio - Auspicious Temple Rituals",
    },
    bottom: {
      image: "/images/hero/slide-04.jpg",
      title: "JOYOUS CELEBRATION",
      date: "CANDID MOMENTS · 2026",
      alt: "HALO Cinematic Studio - Wedding Celebration and Joy",
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
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%] pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/hero/hero-floral-backdrop.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center lg:object-[center_right] opacity-90"
        />
        {/* Smooth horizontal gradient to blend seamlessly into left column #F9F7F2 */}
        <div
          className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/90 via-15% md:via-25% lg:via-[#F9F7F2]/40 lg:via-45% to-transparent"
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

            {/* Studio Trust Credentials */}
            <div className="mt-8 pt-6 border-t border-[#D8CFC1]/70 flex items-center gap-6 sm:gap-8 text-[#716B64]">
              <div>
                <p className="text-xl sm:text-2xl font-serif text-[#171716] leading-none">10+</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#716B64] mt-1">Years Experience</p>
              </div>
              <div className="w-[1px] h-8 bg-[#D8CFC1]" aria-hidden="true" />
              <div>
                <p className="text-xl sm:text-2xl font-serif text-[#171716] leading-none">500+</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#716B64] mt-1">Weddings Captured</p>
              </div>
              <div className="w-[1px] h-8 bg-[#D8CFC1]" aria-hidden="true" />
              <div>
                <p className="text-xl sm:text-2xl font-serif text-[#D71920] leading-none">4K</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#716B64] mt-1">Cinematic Quality</p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Cascading 3-Polaroid Composition (Exact Reference Alignment) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] xl:max-w-[540px] h-[490px] sm:h-[530px] xl:h-[570px]">
              
              {/* ── POLAROID 1: Top (Couple Intimate Embrace) ── */}
              <div
                className="absolute top-2 sm:top-4 left-6 sm:left-10 w-[215px] sm:w-[250px] xl:w-[270px] -rotate-[4deg] hover:rotate-0 hover:scale-105 z-10 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2.5 sm:p-3 pb-7 sm:pb-8 rounded-sm shadow-[0_18px_38px_rgba(23,23,22,0.18)] border border-[#E8E2D7]">
                  <div className="relative aspect-[1/1.06] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.top.image}
                      alt={current.top.alt}
                      fill
                      sizes="270px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  {/* Bottom Caption */}
                  <div className="pt-2 sm:pt-2.5 text-center">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#171716] leading-tight"
                    >
                      {current.top.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#716B64] mt-0.5">
                      {current.top.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── POLAROID 2: Middle (Traditional Mandapam Stage / Full Body) ── */}
              <div
                className="absolute top-24 sm:top-28 right-3 sm:right-6 w-[235px] sm:w-[275px] xl:w-[295px] rotate-[5deg] hover:rotate-0 hover:scale-105 z-20 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-3 sm:p-3.5 pb-8 sm:pb-9 rounded-sm shadow-[0_24px_48px_rgba(23,23,22,0.22)] border border-[#E8E2D7]">
                  <div className="relative aspect-[1/1.08] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.middle.image}
                      alt={current.middle.alt}
                      fill
                      priority
                      sizes="295px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  {/* Bottom Caption */}
                  <div className="pt-2 sm:pt-2.5 text-center">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#171716] leading-tight"
                    >
                      {current.middle.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#716B64] mt-0.5">
                      {current.middle.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── POLAROID 3: Bottom (Close-Up Rings & Hands / Prominent Foreground) ── */}
              <div
                className="absolute bottom-4 sm:bottom-6 left-12 sm:left-16 w-[205px] sm:w-[245px] xl:w-[265px] rotate-[9deg] hover:rotate-0 hover:scale-108 z-30 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 rounded-sm shadow-[0_30px_60px_rgba(23,23,22,0.28)] border border-[#E8E2D7]">
                  <div className="relative aspect-[1/1] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.bottom.image}
                      alt={current.bottom.alt}
                      fill
                      sizes="265px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  {/* Bottom Caption matching reference SARA & DANIEL style */}
                  <div className="pt-2 sm:pt-2.5 text-center">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#171716] leading-tight"
                    >
                      {current.bottom.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-wider text-[#716B64] mt-0.5">
                      {current.bottom.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Slide Collection Arrows Controls ── */}
              <div className="absolute -bottom-8 inset-x-0 flex items-center justify-center gap-3 z-30">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous photograph collection"
                  className="size-7 rounded-full border border-[#171716]/25 bg-white/90 hover:bg-[#D71920] hover:text-white hover:border-transparent text-[#171716] grid place-items-center transition-colors cursor-pointer shadow-sm"
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
                  className="size-7 rounded-full border border-[#171716]/25 bg-white/90 hover:bg-[#D71920] hover:text-white hover:border-transparent text-[#171716] grid place-items-center transition-colors cursor-pointer shadow-sm"
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
