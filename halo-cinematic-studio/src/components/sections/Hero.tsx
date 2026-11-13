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

  const nextIndex = clampIndex(active + 1, heroSlides.length);
  const nextSlide = heroSlides[nextIndex];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F9F7F2] border-b border-[#E2DAD0] pt-[100px] lg:pt-[116px] min-h-[calc(100vh-1rem)] lg:min-h-[680px] lg:h-[calc(100vh-0.5rem)] flex flex-col justify-center select-none"
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
      {/* Subtle organic warm light ambient sheen on #F9F7F2 (NO background images!) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(215,25,32,0.04)_0%,transparent_60%),radial-gradient(ellipse_at_15%_85%,rgba(23,23,22,0.03)_0%,transparent_50%)]"
      />

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 w-full py-8 sm:py-10 lg:py-12">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
            
            {/* ── Left Column: Editorial Typography & Actions ── */}
            <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
              {/* Eyebrow Label with Red Accent Bar */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-8 h-[2px] bg-[#D71920] shrink-0" aria-hidden="true" />
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3D3838]">
                  Photography · Cinematography · Creative Studio
                </p>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-[-0.035em] leading-[1.08] text-[#171716]"
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
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
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

              {/* Studio Trust Indicators */}
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

            {/* ── Right Column: Dual-Frame Layered Studio Composition (Physical Art Album Look) ── */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-[500px] pt-4 pb-8 pr-4">
                
                {/* Architectural Offset Background Card */}
                <div
                  className="absolute inset-x-2 top-2 bottom-6 rounded-[28px] xl:rounded-[32px] bg-[#EFE9DF] border border-[#D8CFC1] rotate-1.5 pointer-events-none transition-transform duration-700"
                  aria-hidden="true"
                />

                {/* ── 1. Main Large Hero Photograph Frame ── */}
                <div className="relative aspect-[3.4/4.5] max-h-[500px] xl:max-h-[540px] w-full overflow-hidden rounded-[24px] xl:rounded-[28px] border border-[#171716]/12 shadow-[0_24px_50px_rgba(23,23,22,0.18)] bg-[#E8E2D7] z-10">
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
                        quality={90}
                        sizes="(min-width: 1280px) 480px, (min-width: 1024px) 420px, 90vw"
                        className="object-cover object-center transition-transform duration-7000 ease-out"
                        style={{
                          transform: index === active ? "scale(1)" : "scale(1.04)",
                        }}
                      />
                      {/* Gradient overlay for bottom caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Editorial Caption on Image */}
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

                  {/* Top-Right Index Badge */}
                  <div className="absolute top-4 right-4 z-20 rounded-full border border-white/40 bg-black/40 px-3 py-1 backdrop-blur-md text-[10px] font-mono tracking-widest text-white/95">
                    0{active + 1} / 0{heroSlides.length}
                  </div>

                  {/* Sleek Floating Arrow Controls */}
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Previous photograph"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-25 size-8 sm:size-9 rounded-full bg-black/35 hover:bg-[#D71920] border border-white/30 hover:border-transparent text-white grid place-items-center transition-all duration-200 backdrop-blur-md cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Next photograph"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-25 size-8 sm:size-9 rounded-full bg-black/35 hover:bg-[#D71920] border border-white/30 hover:border-transparent text-white grid place-items-center transition-all duration-200 backdrop-blur-md cursor-pointer shadow-md"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* ── 2. Secondary Overlapping Accent Frame (Next Slide Preview) ── */}
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label={`Jump to next photo: ${nextSlide.title}`}
                  className="group absolute -left-6 sm:-left-8 -bottom-3 sm:-bottom-4 z-20 w-[140px] sm:w-[170px] xl:w-[185px] aspect-[3/3.8] rounded-xl sm:rounded-2xl overflow-hidden border-4 border-[#F9F7F2] shadow-[0_20px_40px_rgba(23,23,22,0.25)] -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer bg-[#D8D1C4]"
                >
                  <Image
                    src={nextSlide.image}
                    alt=""
                    fill
                    sizes="185px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[8px] sm:text-[9px] font-mono tracking-wider text-white backdrop-blur-sm">
                    NEXT →
                  </div>
                </button>

                {/* ── 3. Slide Dots Progress Indicator ── */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-label={`Jump to slide ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        idx === active
                          ? "h-1.5 w-6 bg-[#D71920]"
                          : "size-1.5 bg-[#171716]/25 hover:bg-[#171716]/60"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
