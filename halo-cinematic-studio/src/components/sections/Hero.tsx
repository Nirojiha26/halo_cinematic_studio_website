"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { heroSlides } from "@/data/heroSlides";

const AUTOPLAY_MS = 6500;

function clampIndex(index: number) {
  return (index + heroSlides.length) % heroSlides.length;
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const slide = heroSlides[active];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    const onVisibilityChange = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || !visible) return;
    const timer = window.setInterval(() => setActive((current) => clampIndex(current + 1)), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible]);

  const move = useCallback((direction: number) => {
    setActive((current) => clampIndex(current + direction));
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-editorial relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        if (start !== null && end !== undefined && Math.abs(end - start) > 45) move(end < start ? 1 : -1);
        touchStartX.current = null;
        setPaused(false);
      }}
    >
      <div className="hero-grain" aria-hidden />
      <div className="hero-halo-word" aria-hidden>Halo</div>

      <Container size="wide" className="hero-container">
        <div className="hero-layout">
          {/* ── Left: Copy ─────────────────────────────── */}
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden />
              Photography · Cinematography · Creative Studio
            </p>

            <h1 id="hero-heading" className="hero-heading">
              Capture every
              <br />
              <span className="hero-heading-script">precious moment.</span>
            </h1>

            <p className="hero-description">
              Honest photographs and cinematic films for the days you never want to forget — from
              wedding celebrations to the quiet details in between.
            </p>

            <div className="hero-actions">
              <Link href="/booking" className="hero-button hero-button--primary">
                Start your story <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/photos" className="hero-button hero-button--secondary">
                Explore our work
              </Link>
            </div>
          </div>

          {/* ── Right: Image Slider ────────────────────── */}
          <div className="hero-visual" aria-label="Featured studio work">
            <div className="hero-visual-backdrop" aria-hidden />

            <div className="hero-frame-wrap">
              <div className="hero-viewfinder hero-viewfinder--tl" aria-hidden />
              <div className="hero-viewfinder hero-viewfinder--tr" aria-hidden />
              <div className="hero-viewfinder hero-viewfinder--bl" aria-hidden />
              <div className="hero-viewfinder hero-viewfinder--br" aria-hidden />

              <div className="hero-frame">
                {heroSlides.map((item, index) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    quality={75}
                    sizes="(min-width: 1280px) 35vw, (min-width: 768px) 42vw, 90vw"
                    className={`hero-slide-image ${index === active ? "is-active" : ""}`}
                  />
                ))}
                <div className="hero-frame-shade" aria-hidden />
                <div className="hero-frame-caption">
                  <p>{slide.category}</p>
                  <h2>{slide.caption}</h2>
                </div>
              </div>
            </div>

            <div className="hero-visual-footer">
              <div className="hero-slide-meta">
                <span className="hero-slide-counter">{String(active + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span>
                <div className="hero-progress" aria-label="Choose featured image">
                  {heroSlides.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      aria-current={index === active ? "true" : undefined}
                      onClick={() => setActive(index)}
                      className={index === active ? "is-active" : ""}
                    />
                  ))}
                </div>
                <div className="hero-slide-arrows">
                  <button type="button" onClick={() => move(-1)} aria-label="Previous slide"><ChevronLeft className="size-4" /></button>
                  <button type="button" onClick={() => move(1)} aria-label="Next slide"><ChevronRight className="size-4" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="hero-bottom-bar">
        <div className="hero-ticker" aria-label="HALO services">
          <div className="hero-ticker-track">
            <span>Weddings</span><b>·</b><span>Puberty ceremonies</span><b>·</b><span>Engagements</span><b>·</b><span>Events</span><b>·</b><span>Cinematic films</span><b>·</b>
            <span>Weddings</span><b>·</b><span>Puberty ceremonies</span><b>·</b><span>Engagements</span><b>·</b><span>Events</span><b>·</b><span>Cinematic films</span><b>·</b>
          </div>
        </div>
        <span className="hero-scroll-cue"><i />Scroll to explore</span>
      </div>
    </section>
  );
}
