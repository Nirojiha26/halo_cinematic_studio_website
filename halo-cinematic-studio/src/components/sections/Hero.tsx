"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { heroSlides, heroThumbnails } from "@/data/heroSlides";
import { whatsappUrl } from "@/config/site";

const AUTOPLAY_MS = 5500;

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
      className="relative overflow-hidden bg-[#FAF8F5] pt-[108px] lg:pt-[118px]"
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
      {/* ── Main Hero Content Area ──────────────────────────────── */}
      <div className="relative min-h-[calc(100vh-160px)] lg:min-h-[720px] flex items-center">
        {/* Desktop: Right-side Main Photo Layer with Left Fade Blend */}
        <div
          aria-hidden
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] z-0 overflow-hidden pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%, black 100%)",
          }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={85}
                sizes="(min-width: 1280px) 56vw, 60vw"
                className="object-cover object-center scale-[1.02] transition-transform duration-7000 ease-out"
                style={{
                  transform: index === active ? "scale(1)" : "scale(1.05)",
                }}
              />
            </div>
          ))}
          {/* Subtle top & bottom shadow gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 via-transparent to-transparent pointer-events-none" />
        </div>

        <Container size="wide" className="relative z-10 w-full py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* ── Left Column: Editorial Copy (Matching Image 1) ──── */}
            <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
              {/* Eyebrow with red accent line */}
              <div className="flex items-center gap-3 mb-5 sm:mb-7">
                <span className="w-8 h-[2px] bg-[#D90B17] shrink-0" aria-hidden />
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#3D3838]">
                  Photography · Cinematography · Creative Studio
                </p>
              </div>

              {/* Main Headline: Every Frame Tells a Feeling. */}
              <h1
                id="hero-heading"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-[clamp(2.75rem,5.4vw,5.4rem)] font-normal tracking-[-0.035em] leading-[1.04] text-[#141414]"
              >
                Every Frame
                <br />
                Tells a <span className="italic font-serif text-[#D90B17]">Feeling.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-medium tracking-tight text-[#1F1C1C]">
                Stories Worth Remembering.
              </p>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#5F5A5A] max-w-lg">
                We capture the moments that matter and turn them into timeless memories. From weddings to
                music videos, every frame is created with passion.
              </p>

              {/* CTA Buttons */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/photos"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#D90B17] px-7 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md shadow-[#D90B17]/20 transition-all duration-300 hover:bg-[#B50812] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-[#141414]/30 px-7 text-xs sm:text-sm font-semibold tracking-wider text-[#141414] transition-all duration-300 hover:border-[#141414] hover:bg-[#141414] hover:text-white hover:-translate-y-0.5"
                >
                  <span>Book Your Date</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>

              {/* Decorative Quote */}
              <p className="mt-7 sm:mt-8 text-xs font-normal tracking-wider text-[#8A8585]">
                — Honest moments. Thoughtfully framed. —
              </p>
            </div>

            {/* ── Mobile / Tablet: In-flow Main Photo Display ────── */}
            <div className="lg:hidden w-full relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl border border-black/5">
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
                      quality={85}
                      sizes="(max-width: 1024px) 95vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile Thumbnails Row */}
              <div className="flex items-center justify-center gap-3.5 mt-5 overflow-x-auto py-2">
                {heroThumbnails.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(idx % heroSlides.length)}
                    aria-label={`View photo ${idx + 1}`}
                    className={`relative size-12 sm:size-14 rotate-45 rounded-[10px] overflow-hidden border-2 transition-transform duration-300 shrink-0 ${
                      active === idx % heroSlides.length
                        ? "border-[#D90B17] scale-105 shadow-md"
                        : "border-white shadow-sm opacity-85 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="80px"
                      className="-rotate-45 scale-[1.45] object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Desktop: Far-Right Column with Diamond Thumbnails ──── */}
            <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 justify-end items-center relative z-20 pointer-events-auto pr-2 xl:pr-6">
              {/* Elegant curved red accent line connecting the diamonds */}
              <svg
                className="absolute right-7 xl:right-11 top-1/2 -translate-y-1/2 h-[460px] w-24 pointer-events-none"
                viewBox="0 0 100 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 15 Q 10 230 80 445"
                  stroke="#D90B17"
                  strokeWidth="1.5"
                  strokeOpacity="0.45"
                  fill="none"
                />
              </svg>

              {/* Vertical Column of Diamond Cards */}
              <div className="flex flex-col items-center gap-4 sm:gap-5 py-4">
                {heroThumbnails.map((item, idx) => {
                  const isActive = active === idx % heroSlides.length;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActive(idx % heroSlides.length)}
                      aria-label={`Select ${item.label}`}
                      className={`group relative size-16 xl:size-20 rotate-45 rounded-[14px] overflow-hidden border-2 bg-black transition-all duration-300 hover:scale-115 hover:border-[#D90B17] hover:shadow-2xl cursor-pointer ${
                        isActive
                          ? "border-[#D90B17] shadow-xl scale-110 ring-2 ring-[#D90B17]/30"
                          : "border-white/90 shadow-lg hover:border-[#D90B17]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="100px"
                        className="-rotate-45 scale-[1.48] object-cover transition-transform duration-500 group-hover:scale-[1.6]"
                      />
                      <span className="sr-only">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Bottom Controls & WhatsApp Bar (Matching Image 1) ────── */}
      <div className="relative z-20 border-t border-[rgba(20,20,20,0.08)] bg-[#FAF8F5]/95 backdrop-blur-sm">
        <Container size="wide">
          <div className="flex min-h-[58px] sm:min-h-[64px] items-center justify-between gap-4 py-3">
            {/* Left: CAPTURE | CREATE | INSPIRE */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#7A7575] uppercase">
              <span>Capture</span>
              <span className="text-[#D90B17]">|</span>
              <span>Create</span>
              <span className="text-[#D90B17]">|</span>
              <span>Inspire</span>
            </div>

            {/* Center: Slide Pagination Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous photo"
                className="grid size-7 sm:size-8 place-items-center rounded-full border border-[#141414]/20 text-[#141414] transition-colors hover:border-[#D90B17] hover:bg-[#D90B17] hover:text-white"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* 5 Slide Indicator Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2" aria-label="Slide indicators">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                    aria-current={idx === active ? "true" : undefined}
                    className={`transition-all duration-300 ${
                      idx === active
                        ? "h-2 w-6 sm:w-7 rounded-full bg-[#D90B17]"
                        : "size-2 rounded-full bg-[#141414]/25 hover:bg-[#141414]/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next photo"
                className="grid size-7 sm:size-8 place-items-center rounded-full border border-[#141414]/20 text-[#141414] transition-colors hover:border-[#D90B17] hover:bg-[#D90B17] hover:text-white"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Right: Green WhatsApp Us Button (matching Image 1) */}
            <div>
              <a
                href={whatsappUrl("Hello HALO Cinematic Studio, I would like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with HALO on WhatsApp"
                className="inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 sm:px-5 text-[11px] sm:text-xs font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#20BD5A] hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="size-3.5 sm:size-4 fill-white" aria-hidden />
                <span>WhatsApp Us →</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
