import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { weddingPortraits } from "@/data/photos";
import { LogoPanel } from "@/components/shared/LogoPanel";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * White-background Red / White / Black Editorial Hero:
 *  - Bright gallery backdrop with subtle concentric red aperture ring
 *  - Asymmetric 12-col split: crisp condensed black & red display copy on left,
 *    framed studio logo plate + real wedding portrait filmstrip on right
 */
export function Hero() {
  const previewFrames = weddingPortraits.slice(0, 3);

  return (
    <section
      aria-labelledby="hero-heading"
      className="gallery-backdrop relative flex min-h-[calc(100svh-1rem)] items-center overflow-hidden border-b border-line pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-34 lg:pb-22"
    >
      {/* Subtle architectural concentric aperture ring on bright ground */}
      <div
        aria-hidden
        className="lens-ring top-[14%] -right-32 size-[380px] sm:size-[500px] lg:-right-24 lg:size-[580px]"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Editorial copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="eyebrow animate-(--animate-rise) flex items-center gap-3">
              <span aria-hidden className="h-[2px] w-8 bg-brand" />
              Photography • Cinematography • Creative Studio
            </p>

            <h1
              id="hero-heading"
              style={{ animationDelay: "80ms" }}
              className="animate-(--animate-rise) mt-5 text-[clamp(2.85rem,6.5vw,5.4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink"
            >
              Your story.
              <span className="block text-brand">Our vision.</span>
            </h1>

            <p
              style={{ animationDelay: "160ms" }}
              className="animate-(--animate-rise) mt-6 max-w-[35rem] text-base leading-relaxed text-body sm:text-lg"
            >
              We capture the moments that matter and turn them into timeless memories. From weddings and engagements to
              puberty ceremonies and curated events, every frame is crafted with passion.
            </p>

            <div
              style={{ animationDelay: "240ms" }}
              className="animate-(--animate-rise) mt-8 flex flex-wrap gap-3.5"
            >
              <Button href="/packages" size="lg" icon={<ArrowRight className="size-4" />}>
                View Packages
              </Button>
              <Button href="/photos" variant="outline" size="lg">
                View Photos
              </Button>
            </div>

            {/* Architectural studio spec bar inside document flow */}
            <div
              style={{ animationDelay: "310ms" }}
              className="animate-(--animate-rise) mt-10 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-line pt-5 text-[11px] font-bold tracking-[0.22em] text-muted uppercase"
            >
              <span className="text-ink">{siteConfig.tagline.replaceAll(" • ", "  |  ")}</span>
              <span aria-hidden className="hidden text-line-strong sm:inline">
                /
              </span>
              <a
                href={`tel:${siteConfig.contact.phoneIntl}`}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-brand"
              >
                <Phone className="size-3.5 text-brand" aria-hidden />
                {siteConfig.contact.phoneDisplay}
              </a>
              {siteConfig.contact.email ? (
                <>
                  <span aria-hidden className="hidden text-line-strong sm:inline">
                    /
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-2 text-ink lowercase transition-colors hover:text-brand"
                  >
                    <Mail className="size-3.5 text-brand" aria-hidden />
                    {siteConfig.contact.email}
                  </a>
                </>
              ) : null}
            </div>
          </div>

          {/* Right studio showcase plate + real wedding filmstrip */}
          <div style={{ animationDelay: "140ms" }} className="animate-(--animate-rise) space-y-4 lg:col-span-6 xl:col-span-5">
            <LogoPanel
              preload
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="mx-auto max-w-lg lg:max-w-none"
            />

            <div className="mx-auto grid max-w-lg grid-cols-3 gap-3 lg:max-w-none">
              {previewFrames.map((frame, index) => (
                <Link
                  key={frame.id}
                  href="/photos"
                  aria-label={`View ${frame.title} in Photos`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-card border border-line-strong bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand"
                >
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(min-width: 1024px) 13vw, 30vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/82 px-2.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-on-ink uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span>0{index + 1}</span>
                    <span className="text-brand">View</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
