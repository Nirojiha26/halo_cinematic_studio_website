"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { heroSlides } from "@/data/heroSlides";
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
      className="relative overflow-hidden bg-[#ECE5DA] pt-[104px] lg:pt-[118px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 90% 15%, rgba(217, 11, 23, 0.05) 0%, transparent 60%), radial-gradient(ellipse at 10% 85%, rgba(20, 20, 20, 0.03) 0%, transparent 55%)",
      }}
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
      {/* Subtle organic studio grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Main Hero Editorial Stage ───────────────────────────────── */}
      <div className="relative min-h-[calc(100vh-175px)] lg:min-h-[680px] flex items-center">
        <Container size="wide" className="w-full py-8 sm:py-12 lg:py-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            
            {/* ── Left Column: Editorial Copy ───────────────────────── */}
            <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
              {/* Eyebrow Studio Tag */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="w-8 h-[2px] bg-[#D90B17] shrink-0" aria-hidden />
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3D3838]">
                  Photography · Cinematography · Creative Studio
                </p>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-[clamp(2.75rem,5.3vw,5.5rem)] font-normal tracking-[-0.035em] leading-[1.04] text-[#141414]"
              >
                Every Frame
                <br />
                Tells a <span className="italic font-serif text-[#D90B17]">Feeling.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-medium tracking-tight text-[#201D1D]">
                Stories Worth Remembering.
              </p>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#5F5A5A] max-w-lg">
                We capture the moments that matter and turn them into timeless memories. From traditional
                ceremonies to cinematic films, every frame is created with passion and care.
              </p>

              {/* CTA Buttons */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/photos"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#D90B17] px-7 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md shadow-[#D90B17]/25 transition-all duration-300 hover:bg-[#B50812] hover:shadow-lg hover:-translate-y-0.5"
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

              {/* Editorial Proof Points */}
              <div className="mt-8 pt-6 border-t border-[#141414]/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B6565]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="size-3.5 text-[#D90B17]" />
                  <span>Jaffna &amp; Nelliady</span>
                </span>
                <span className="text-[#141414]/25">•</span>
                <span>Signature Weddings</span>
                <span className="text-[#141414]/25">•</span>
                <span>Cinematic 4K Films</span>
              </div>
            </div>

            {/* ── Right Column: High-Aesthetic Unified Showcase ─────── */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-[500px]">
                
                {/* Main Viewfinder Masterpiece Frame */}
                <div className="relative aspect-[3.7/4.8] w-full overflow-hidden rounded-[26px] xl:rounded-[32px] border border-[#141414]/15 shadow-[0_28px_60px_-15px_rgba(20,20,20,0.25)] bg-[#D8D1C4]">
                  {/* Viewfinder Camera Brackets (Image 2 style) */}
                  <div className="absolute top-4 left-4 size-4 border-t-2 border-l-2 border-white/80 pointer-events-none z-20" aria-hidden />
                  <div className="absolute top-4 right-4 size-4 border-t-2 border-r-2 border-white/80 pointer-events-none z-20" aria-hidden />
                  <div className="absolute bottom-4 left-4 size-4 border-b-2 border-l-2 border-white/80 pointer-events-none z-20" aria-hidden />
                  <div className="absolute bottom-4 right-4 size-4 border-b-2 border-r-2 border-white/80 pointer-events-none z-20" aria-hidden />

                  {/* Top-Right Index Pill */}
                  <div className="absolute top-4 right-10 z-20 rounded-full border border-white/40 bg-black/40 px-3 py-1 backdrop-blur-md text-[10px] font-mono tracking-widest text-white/95">
                    HALO / {String(active + 1).padStart(2, "0")}
                  </div>

                  {/* The 5 Masterpiece Slides (smooth crossfade) */}
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
                        sizes="(min-width: 1280px) 500px, (min-width: 1024px) 460px, 90vw"
                        className="object-cover object-top transition-transform duration-7000 ease-out"
                        style={{
                          transform: index === active ? "scale(1)" : "scale(1.04)",
                        }}
                      />
                      {/* Filmic gradient shade for editorial caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                      {/* Overlaid Editorial Caption (matching Image 2) */}
                      <div className="absolute bottom-6 left-7 right-7 text-white pointer-events-none z-20">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F51420]">
                          {slide.category}
                        </p>
                        <h2
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                          className="text-2xl sm:text-3xl font-normal leading-tight text-white drop-shadow-md mt-1"
                        >
                          {slide.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── 5-Photo Proof Sheet Dock (Directly Synchronized!) ── */}
                {/* Each thumbnail corresponds 1:1 with one of the 5 slides */}
                <div className="mt-4 w-full rounded-2xl border border-[#141414]/12 bg-[#DFD8CC]/80 p-2.5 backdrop-blur-md shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A5454] px-1">
                      Curated Frames ({active + 1}/{heroSlides.length})
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => move(-1)}
                        aria-label="Previous slide"
                        className="grid size-6 place-items-center rounded-full text-[#141414] hover:bg-black/10 transition-colors"
                      >
                        <ChevronLeft className="size-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => move(1)}
                        aria-label="Next slide"
                        className="grid size-6 place-items-center rounded-full text-[#141414] hover:bg-black/10 transition-colors"
                      >
                        <ChevronRight className="size-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* 5 Synchronized Miniature Cards */}
                  <div className="grid grid-cols-5 gap-2 mt-2" role="tablist" aria-label="Featured frames">
                    {heroSlides.map((slide, idx) => {
                      const isActive = idx === active;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-label={`Show ${slide.title}`}
                          onClick={() => setActive(idx)}
                          className={`group relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "border-[#D90B17] shadow-md scale-[1.03] ring-2 ring-[#D90B17]/25"
                              : "border-white/70 opacity-70 hover:opacity-100 hover:border-[#141414]/40"
                          }`}
                        >
                          <Image
                            src={slide.image}
                            alt=""
                            fill
                            sizes="120px"
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                          />
                          {/* Active red indicator dot */}
                          {isActive ? (
                            <span className="absolute top-1 right-1 size-1.5 rounded-full bg-[#D90B17] ring-2 ring-white" />
                          ) : null}
                          <span className="absolute bottom-0 inset-x-0 bg-black/60 py-0.5 text-[8px] font-mono text-center text-white/90">
                            0{idx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* ── Bottom Controls & WhatsApp Bar ────────────────────────── */}
      <div className="relative z-20 border-t border-[#141414]/10 bg-[#E0D8CB]/95 backdrop-blur-sm">
        <Container size="wide">
          <div className="flex min-h-[58px] sm:min-h-[64px] items-center justify-between gap-4 py-3">
            {/* Left: CAPTURE | CREATE | INSPIRE */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#5C5656] uppercase">
              <span>Capture</span>
              <span className="text-[#D90B17]">|</span>
              <span>Create</span>
              <span className="text-[#D90B17]">|</span>
              <span>Inspire</span>
            </div>

            {/* Center: Slide Progress & Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous photo"
                className="grid size-7 sm:size-8 place-items-center rounded-full border border-[#141414]/25 text-[#141414] transition-colors hover:border-[#D90B17] hover:bg-[#D90B17] hover:text-white"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* 5 Dots Indicator */}
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
                className="grid size-7 sm:size-8 place-items-center rounded-full border border-[#141414]/25 text-[#141414] transition-colors hover:border-[#D90B17] hover:bg-[#D90B17] hover:text-white"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Right: WhatsApp Us CTA */}
            <div>
              <a
                href={whatsappUrl("Hello HALO Cinematic Studio, I would like to enquire about your photography & cinematography services.")}
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
