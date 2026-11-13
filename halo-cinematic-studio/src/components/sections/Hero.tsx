"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

// Two curated sets of 3 Polaroids each, using authentic HALO Studio photography
const polaroidSets = [
  {
    id: "set-1",
    top: {
      image: "/images/hero/slide-02.jpg",
      title: "DILA & KAJAN",
      subtitle: "WEDDING PORTRAITS · JAFFNA",
      alt: "HALO Cinematic Studio - Newlywed Couple Portrait",
    },
    middle: {
      image: "/images/hero/slide-01.jpg",
      title: "TRADITIONAL VOWS",
      subtitle: "SIGNATURE CEREMONY · NELLIADY",
      alt: "HALO Cinematic Studio - Traditional Sri Lankan Tamil Wedding Couple with Garland",
    },
    bottom: {
      image: "/images/moments/moment-03.jpg",
      title: "HALO CINEMATIC STUDIO",
      subtitle: "SACRED BLESSINGS · 2026",
      alt: "HALO Cinematic Studio - Macro detail of ring exchange and traditional handfasting",
    },
  },
  {
    id: "set-2",
    top: {
      image: "/images/hero/cover-10.jpg",
      title: "COASTAL INTIMACY",
      subtitle: "SUNSET PRESHOOT · JAFFNA",
      alt: "HALO Cinematic Studio - Sunset beach preshoot couple",
    },
    middle: {
      image: "/images/hero/slide-03.jpg",
      title: "TEMPLE SANCTUARY",
      subtitle: "AUSPICIOUS RITUALS · NELLIADY",
      alt: "HALO Cinematic Studio - Sacred Temple Altar Ceremony",
    },
    bottom: {
      image: "/images/hero/slide-04.jpg",
      title: "CELEBRATION OF JOY",
      subtitle: "CANDID MOMENTS · 2026",
      alt: "HALO Cinematic Studio - Wedding Celebration and Family Joy",
    },
  },
];

const AUTOPLAY_MS = 6500;

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
      setActiveSet((curr) => (curr + 1) % polaroidSets.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible]);

  const move = useCallback((direction: number) => {
    setActiveSet((curr) => (curr + direction + polaroidSets.length) % polaroidSets.length);
  }, []);

  const current = polaroidSets[activeSet];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F9F7F2] border-b border-[#E2DAD0] pt-[96px] lg:pt-[110px] min-h-[calc(100vh-1rem)] lg:min-h-[700px] lg:h-[calc(100vh-0.5rem)] flex items-center select-none"
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
      {/* ── Soft Warm Silk Sheen & Ambient Light on #F9F7F2 ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(215,25,32,0.05)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(216,207,193,0.35)_0%,transparent_50%)]"
      />

      <Container size="wide" className="w-full relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* ── Left Column: Editorial Display Typography & Actions ── */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
            {/* Eyebrow Label with Signature Red Accent Bar */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#D71920] shrink-0" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#55504A]">
                Photography · Cinematography · Creative Studio
              </p>
            </div>

            {/* Main Display Headline */}
            <h1
              id="hero-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-normal tracking-[-0.035em] leading-[1.06] text-[#171716]"
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

          {/* ── Right Column: Cascading Polaroid Prints & 35mm Filmstrip (Exact Reference Match!) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] xl:max-w-[560px] h-[480px] sm:h-[530px] xl:h-[570px]">
              
              {/* ── Realistic 35mm Vintage Filmstrip Ribbon weaving behind Polaroids ── */}
              <div
                className="absolute top-2 left-6 sm:left-12 w-20 sm:w-24 h-[440px] pointer-events-none z-0 opacity-85 -rotate-12 transition-transform duration-700"
                aria-hidden="true"
              >
                <div className="w-full h-full bg-[#111113] rounded-md shadow-lg border border-black/40 flex flex-col justify-between py-2 px-1">
                  {/* Sprocket perforations on sides */}
                  <div className="flex justify-between items-center px-1 mb-1">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="size-1.5 sm:size-2 rounded-[2px] bg-white/70" />
                    ))}
                  </div>
                  {/* Miniature film frame snapshots */}
                  <div className="flex-1 flex flex-col justify-between gap-2.5 py-1">
                    <div className="relative w-full h-24 rounded-sm overflow-hidden bg-[#222] border border-white/20">
                      <Image
                        src="/images/hero/slide-03.jpg"
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover opacity-80"
                      />
                    </div>
                    <div className="relative w-full h-24 rounded-sm overflow-hidden bg-[#222] border border-white/20">
                      <Image
                        src="/images/hero/slide-04.jpg"
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover opacity-80"
                      />
                    </div>
                    <div className="relative w-full h-24 rounded-sm overflow-hidden bg-[#222] border border-white/20">
                      <Image
                        src="/images/hero/slide-05.jpg"
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover opacity-80"
                      />
                    </div>
                  </div>
                  {/* Bottom sprocket perforations */}
                  <div className="flex justify-between items-center px-1 mt-1">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="size-1.5 sm:size-2 rounded-[2px] bg-white/70" />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Soft Baby's Breath & Romantic Florals Bokeh Accents ── */}
              <div
                className="absolute -top-4 right-12 size-36 rounded-full bg-[#EFE7DA] blur-2xl pointer-events-none z-0"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 left-16 size-44 rounded-full bg-[#D71920]/6 blur-3xl pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* ── POLAROID 1: Top Right (Romantic Forehead Touch / Intimacy Portrait) ── */}
              <div
                className="absolute top-2 sm:top-4 right-3 sm:right-6 w-[210px] sm:w-[250px] xl:w-[275px] rotate-[7deg] hover:rotate-0 hover:scale-105 z-10 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 rounded-sm shadow-[0_18px_40px_rgba(23,23,22,0.18)] border border-[#E8E2D7]">
                  <div className="relative aspect-[1/1.05] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.top.image}
                      alt={current.top.alt}
                      fill
                      sizes="280px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  {/* Polaroid Handwritten / Serif Style Bottom Caption */}
                  <div className="pt-2 sm:pt-2.5 text-center">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#171716] leading-tight"
                    >
                      {current.top.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#716B64] mt-0.5">
                      {current.top.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── POLAROID 2: Middle Left (Traditional Mandapam / Wedding Vows in Red Silk) ── */}
              <div
                className="absolute top-20 sm:top-24 left-2 sm:left-6 w-[230px] sm:w-[275px] xl:w-[305px] -rotate-[5deg] hover:rotate-0 hover:scale-105 z-20 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-3 sm:p-3.5 pb-9 sm:pb-10 rounded-sm shadow-[0_24px_50px_rgba(23,23,22,0.22)] border border-[#E8E2D7]">
                  <div className="relative aspect-[1/1.08] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.middle.image}
                      alt={current.middle.alt}
                      fill
                      priority
                      sizes="310px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  {/* Polaroid Bottom Caption */}
                  <div className="pt-2.5 sm:pt-3 text-center">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#171716] leading-tight"
                    >
                      {current.middle.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#716B64] mt-0.5">
                      {current.middle.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── POLAROID 3: Bottom Right / Foreground (Sacred Rings & Handfasting Close-Up) ── */}
              <div
                className="absolute bottom-3 sm:bottom-4 right-6 sm:right-12 w-[190px] sm:w-[230px] xl:w-[255px] rotate-[8deg] hover:rotate-0 hover:scale-108 z-30 transition-all duration-500 cursor-pointer group"
                onClick={() => move(1)}
              >
                <div className="bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 rounded-sm shadow-[0_28px_55px_rgba(23,23,22,0.26)] border border-[#E8E2D7]">
                  <div className="relative aspect-[1/1] w-full overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={current.bottom.image}
                      alt={current.bottom.alt}
                      fill
                      sizes="260px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  {/* Polaroid Bottom Caption (matching sample screenshot style: SARA & DANIEL / JUL, 2026) */}
                  <div className="pt-2 sm:pt-2.5 text-center">
                    <p
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#171716] leading-tight"
                    >
                      {current.bottom.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#716B64] mt-0.5">
                      {current.bottom.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Slide Navigation Toggle (Subtle dots & arrows to browse both collections) ── */}
              <div className="absolute -bottom-8 inset-x-0 flex items-center justify-center gap-3 z-30">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous photograph collection"
                  className="size-7 rounded-full border border-[#171716]/25 bg-white/80 hover:bg-[#D71920] hover:text-white hover:border-transparent text-[#171716] grid place-items-center transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="size-3.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {polaroidSets.map((set, idx) => (
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
                  className="size-7 rounded-full border border-[#171716]/25 bg-white/80 hover:bg-[#D71920] hover:text-white hover:border-transparent text-[#171716] grid place-items-center transition-colors cursor-pointer shadow-sm"
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
