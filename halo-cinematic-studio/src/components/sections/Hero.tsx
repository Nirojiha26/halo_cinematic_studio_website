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
      className="relative overflow-hidden bg-[#F9F7F2] border-b border-[#E2DAD0] pt-[92px] lg:pt-[104px] min-h-[calc(100vh-1rem)] lg:h-[calc(100vh-0.5rem)] flex flex-col justify-between select-none"
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
      {/* ── Full-Bleed Photograph Background (Spanning Entire Screen Width Seamlessly) ── */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={92}
              sizes="100vw"
              className="object-cover object-[72%_center] lg:object-[80%_center] transition-transform duration-7000 ease-out"
              style={{
                transform: index === active ? "scale(1)" : "scale(1.04)",
              }}
            />
          </div>
        </div>
      ))}

      {/* ── Seamless Horizontal Gradient Mask (Soft #F9F7F2 on left fading naturally into photo) ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t lg:bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/95 via-35% md:via-45% lg:via-[#F9F7F2]/50 lg:via-60% to-transparent"
        aria-hidden="true"
      />

      {/* ── Soft Romantic Ambient Glow ── */}
      <div
        className="absolute top-1/4 -left-8 size-32 rounded-full bg-[#D71920]/6 blur-3xl pointer-events-none z-15"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-1/3 size-48 rounded-full bg-[#D71920]/4 blur-3xl pointer-events-none z-15"
        aria-hidden="true"
      />

      {/* ── Editorial Copy Content ── */}
      <div className="relative z-20 w-full flex-1 flex items-center py-6 sm:py-8 lg:py-10">
        <Container size="wide" className="w-full relative">
          <div className="max-w-xl lg:max-w-2xl">
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
              className="text-[clamp(2.75rem,5.5vw,5.5rem)] font-normal tracking-[-0.035em] leading-[1.04] text-[#171716]"
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
              We capture the moments that matter and turn them into timeless memories. From weddings to
              music videos, every frame is created with passion.
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

            {/* Thoughtfully Framed Footer Tagline (from reference screenshot) */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4 text-xs text-[#716B64]">
              <span className="font-normal text-[#5F5A5A]">Real moments. Thoughtfully framed.</span>
              <span className="h-[1px] w-24 sm:w-36 bg-[#D8CFC1]" aria-hidden="true" />
            </div>
          </div>
        </Container>
      </div>

      {/* ── Bottom Controls Bar (Exact Match to Reference Screenshot) ── */}
      <div className="relative z-20 border-t border-[#D8CFC1]/60 bg-[#F9F7F2]/90 backdrop-blur-md">
        <Container size="wide">
          <div className="flex min-h-[56px] sm:min-h-[62px] items-center justify-between gap-4 py-2.5">
            {/* Left: CAPTURE | CREATE | INSPIRE */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#5C5656] uppercase">
              <span>Capture</span>
              <span className="text-[#D71920]">|</span>
              <span>Create</span>
              <span className="text-[#D71920]">|</span>
              <span>Inspire</span>
            </div>

            {/* Center: Slide Progress & Arrows (from reference screenshot) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous photo"
                className="grid size-7 sm:size-8 place-items-center rounded-full border border-[#171716]/25 text-[#171716] transition-colors hover:border-[#D71920] hover:bg-[#D71920] hover:text-white cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* 6 Dots Indicator (Active is elongated red pill) */}
              <div className="flex items-center gap-1.5 sm:gap-2" aria-label="Slide indicators">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                    aria-current={idx === active ? "true" : undefined}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === active
                        ? "h-2 w-6 sm:w-7 bg-[#D71920]"
                        : "size-2 bg-[#171716]/25 hover:bg-[#171716]/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next photo"
                className="grid size-7 sm:size-8 place-items-center rounded-full border border-[#171716]/25 text-[#171716] transition-colors hover:border-[#D71920] hover:bg-[#D71920] hover:text-white cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Right: Slide Counter */}
            <div className="text-[11px] font-mono tracking-widest text-[#716B64]">
              <span className="font-bold text-[#171716]">0{active + 1}</span> / 0{heroSlides.length}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
