"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { heroSlides } from "@/data/heroSlides";

const AUTOPLAY_MS = 6000;

function clampIndex(index: number, total: number) {
  return (index + total) % total;
}

export function Hero() {
  const [active, setActive] = useState(0);
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
      setActive((curr) => clampIndex(curr + 1, heroSlides.length));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible]);

  const move = useCallback((direction: number) => {
    setActive((curr) => clampIndex(curr + direction, heroSlides.length));
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#EEE9DF] border-b border-[#D8CFC1] pt-[92px] lg:pt-[104px] min-h-[calc(100vh-1rem)] lg:h-[calc(100vh-0.5rem)] flex flex-col justify-center select-none"
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
      {/* Subtle Warm Studio Ambient Light on #EEE9DF */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_25%,rgba(215,25,32,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_15%_85%,rgba(23,23,22,0.04)_0%,transparent_55%)]"
      />

      {/* ── Main Hero Content (Single Viewport Fit, Zero Scroll Needed) ── */}
      <div className="relative z-10 w-full py-6 sm:py-8 lg:py-10">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            
            {/* ── Left Column: Editorial Text & 2 Clean CTAs (WhatsApp removed) ── */}
            <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
              {/* Eyebrow Studio Tag */}
              <div className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <span className="w-6 h-[2px] bg-[#D71920]" aria-hidden="true" />
                <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                  Studio Gallery
                </p>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-[-0.035em] leading-[1.08] text-[#171716]"
              >
                Real Moments,
                <br />
                <span className="italic font-serif text-[#D71920]">Carefully Made.</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-[#55504A] max-w-lg font-normal">
                Selected highlights from traditional wedding celebrations and intimate ceremonies in Nelliady.
              </p>

              {/* ── 2 Action Buttons (WhatsApp button removed as requested) ── */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* 1. Explore Our Work */}
                <Link
                  href="/photos"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#D71920] px-7 sm:px-8 text-xs sm:text-[13px] font-semibold tracking-wider text-white shadow-lg shadow-[#D71920]/25 transition-all duration-300 hover:bg-[#b81219] hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>

                {/* 2. Book Your Date */}
                <Link
                  href="/contact"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-[#171716]/30 bg-transparent hover:bg-[#171716] hover:text-white px-7 sm:px-8 text-xs sm:text-[13px] font-semibold tracking-wider text-[#171716] transition-all duration-300 hover:border-[#171716] hover:-translate-y-0.5"
                >
                  <span>Book Your Date</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ── Right Column: Masterpiece Photo Stage (Tabs removed, clean presentation) ── */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-[500px]">
                
                {/* Main Viewfinder Masterpiece Frame */}
                <div className="relative aspect-[3.6/4.7] max-h-[520px] xl:max-h-[560px] w-full overflow-hidden rounded-[26px] xl:rounded-[30px] border border-[#171716]/12 shadow-[0_24px_50px_-12px_rgba(23,23,22,0.22)] bg-[#D8D1C4]">
                  
                  {/* Camera Viewfinder Corner Accents */}
                  <div className="absolute top-4 left-4 size-3.5 border-t-2 border-l-2 border-white/80 pointer-events-none z-20" aria-hidden="true" />
                  <div className="absolute top-4 right-4 size-3.5 border-t-2 border-r-2 border-white/80 pointer-events-none z-20" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4 size-3.5 border-b-2 border-l-2 border-white/80 pointer-events-none z-20" aria-hidden="true" />
                  <div className="absolute bottom-4 right-4 size-3.5 border-b-2 border-r-2 border-white/80 pointer-events-none z-20" aria-hidden="true" />

                  {/* Top-Right Frame Index Pill */}
                  <div className="absolute top-4 right-10 z-20 rounded-full border border-white/35 bg-black/45 px-3 py-1 backdrop-blur-md text-[10px] font-mono tracking-widest text-white/95">
                    {active === 0 ? "COVER" : `0${active} / 05`}
                  </div>

                  {/* Sleek Floating Arrow Controls on hover/touch */}
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous photograph"
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 z-25 size-9 rounded-full bg-black/40 hover:bg-[#D71920] border border-white/25 hover:border-transparent text-white grid place-items-center transition-all duration-200 backdrop-blur-md cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next photograph"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 z-25 size-9 rounded-full bg-black/40 hover:bg-[#D71920] border border-white/25 hover:border-transparent text-white grid place-items-center transition-all duration-200 backdrop-blur-md cursor-pointer shadow-md"
                  >
                    <ChevronRight className="size-4" />
                  </button>

                  {/* The 6 Masterpiece Slides (Cover + 5 Client Photos) */}
                  {heroSlides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        quality={88}
                        sizes="(min-width: 1280px) 500px, (min-width: 1024px) 460px, 90vw"
                        className="object-cover object-center transition-transform duration-7000 ease-out"
                        style={{
                          transform: index === active ? "scale(1)" : "scale(1.04)",
                        }}
                      />
                      {/* Gradient overlay for bottom caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                      {/* Editorial Caption at bottom of frame */}
                      <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none z-20">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D71920]">
                          {slide.category}
                        </p>
                        <h2
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                          className="text-xl sm:text-2xl font-normal leading-tight text-white drop-shadow-md mt-0.5 line-clamp-1"
                        >
                          {slide.title}
                        </h2>
                      </div>
                    </div>
                  ))}

                  {/* Discreet Slide Progress Dots inside bottom of frame */}
                  <div className="absolute bottom-2.5 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActive(idx)}
                        aria-label={`Jump to slide ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          idx === active
                            ? "h-1.5 w-5 bg-[#D71920] shadow-sm"
                            : "size-1.5 bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
