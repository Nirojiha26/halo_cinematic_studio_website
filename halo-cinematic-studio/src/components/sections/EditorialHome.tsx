import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Camera,
  CheckCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
export { EditorialServices } from "./ServicesShowcase";
export { EditorialPortfolio } from "./Moments3DRibbon";

export function StudioStory() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F1] border-b border-[#D8CFC1]"
      id="our-story"
      aria-labelledby="story-heading"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Editorial Typography & Story (matching screenshot) ── */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920] mb-2">
              About Us
            </p>

            {/* Main Title (clean, elegant, spaced serif like screenshot) */}
            <h2
              id="story-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-[0.08em] uppercase text-[#171716] leading-none"
            >
              HALO
            </h2>

            {/* Horizontal accent line under title (matching screenshot) */}
            <div className="w-16 sm:w-20 h-[2px] bg-[#D71920] mt-3.5 mb-6" aria-hidden="true" />

            {/* Sub-headline in spaced uppercase */}
            <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#716B64] leading-relaxed mb-4">
              Passion in Every Detail. Purpose in Every Story.
            </h3>

            {/* Polished, engaging body copy */}
            <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-[#2B2927]">
              <p>
                Based in Nelliady, Jaffna, HALO Cinematic Studio is a premier creative photography and cinematography collective dedicated to documenting life’s most cherished celebrations. We believe every genuine glance, auspicious blessing, and spontaneous burst of joy deserves to be captured with authentic cinematic elegance.
              </p>
              <p>
                From sacred garland exchanges and intimate pre-shoots to traditional puberty milestones and vibrant family festivities, our team crafts visuals that endure across generations. We don’t just capture frames — we preserve heirlooms to hold close, and timeless films to relive forever.
              </p>
            </div>

            {/* Bottom Signature & Explore Link (matching signature in screenshot) */}
            <div className="mt-8 pt-6 border-t border-[#D8CFC1]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  className="italic text-2xl sm:text-3xl text-[#171716] font-normal tracking-wide"
                >
                  Halo Cinematic Studio
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#716B64] mt-0.5">
                  Lead Storyteller &amp; Cinematographer
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#171716] hover:text-[#D71920] transition-colors border-b border-[#D8CFC1] hover:border-[#D71920] pb-1 group self-start sm:self-auto"
              >
                <span>Explore Our Story</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ── Right Column: Photo with Dot Grid & Terracotta/Red Offset Block (exact match to screenshot) ── */}
          <div className="relative flex justify-center lg:justify-end pt-4 sm:pt-6 pr-4 sm:pr-6">
            <div className="relative w-full max-w-[440px]">
              {/* 1. Subtle Dot Matrix Texture Pattern on Top-Left */}
              <div
                className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none opacity-40 bg-[radial-gradient(#716B64_1.5px,transparent_1.5px)] [background-size:16px_16px] z-0"
                aria-hidden="true"
              />

              {/* 2. Offset Terracotta / Studio Red Accent Block on Bottom-Right (exact match to screenshot) */}
              <div
                className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 w-2/3 h-2/3 bg-[#9E2A2B] z-0 pointer-events-none shadow-md"
                aria-hidden="true"
              />

              {/* 3. High-Quality Photo in Foreground (Cinematographer in golden hour) */}
              <div className="relative z-10 aspect-[4/4.8] overflow-hidden bg-[#171716] shadow-xl">
                <Image
                  src="/images/about/behind-the-scenes.jpg"
                  alt="HALO Cinematic Studio cinematographer capturing couple in golden hour"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle bottom tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 sm:p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D71920]">
                    Authentic Cinematic Craft
                  </p>
                  <p className="text-xs text-white/90 font-medium">
                    Nelliady, Jaffna &amp; Island-Wide Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}





const approachSteps = [
  {
    phase: "PHASE 01 | DISCOVERY",
    title: "Understand the Story",
    description:
      "We take time to understand your vision, cultural customs, and what matters most to your family before any shutter clicks.",
    feature: "Personalized Ceremony Consultation",
    icon: HeartHandshake,
  },
  {
    phase: "PHASE 02 | THE CELEBRATION",
    title: "Capture the Emotion",
    description:
      "Unobtrusive, multi-camera coverage focusing on authentic emotions, sacred vows, spontaneous laughter, and quiet intimate glances.",
    feature: "Dual 4K Cameras & Candid Storytellers",
    icon: Camera,
  },
  {
    phase: "PHASE 03 | HEIRLOOMS",
    title: "Preserve the Memories",
    description:
      "Handcrafted fine-art leatherette albums, custom wooden couple frames, and colour-graded 4K cinematic films delivered in high-speed USB boxes.",
    feature: "Handcrafted Flush-Mount Albums",
    icon: BookOpen,
  },
];

export function StudioApproach() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF7F1] border-b border-[#D8CFC1]"
      aria-labelledby="approach-heading"
    >
      <Container size="wide">
        {/* ── Top Split: Narrative & Framed Temple Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-2.5">
              <span className="w-5 h-[2px] bg-[#D71920]" aria-hidden="true" />
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                The HALO Experience
              </p>
            </div>

            <h2
              id="approach-heading"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] leading-[1.15] text-[#171716]"
            >
              More Than Just
              <br />
              <span className="italic text-[#D71920] font-normal">
                Photography.
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-[#716B64] leading-relaxed max-w-xl">
              We believe every sacred occasion has a heartbeat. Beyond technical camera mastery, we bring genuine care, calm guidance, and cultural reverence to your celebrations — so you can live fully in the moment while we turn it into timeless art.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#D71920]">
                <CheckCheck className="size-4" />
                <span>Traditional &amp; Candid Coverage</span>
              </span>
              <span className="text-[#D8CFC1]" aria-hidden="true">
                |
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#171716]">
                <Sparkles className="size-3.5 text-[#D71920]" />
                <span>4K Aerial Cinematography</span>
              </span>
              <span className="text-[#D8CFC1]" aria-hidden="true">
                |
              </span>
              <span className="text-[#716B64]">Nelliady, Jaffna</span>
            </div>
          </div>

          {/* Right Column (5 cols) — Framed Photograph with Offset Shadow */}
          <div className="lg:col-span-5 relative pt-3 pr-3">
            {/* Offset backdrop frame */}
            <div
              className="absolute top-0 right-0 left-3 bottom-0 bg-[#EFEAE1] border border-[#D8CFC1] rounded-2xl z-0"
              aria-hidden="true"
            />

            {/* Main Photo */}
            <div className="relative z-10 aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden rounded-2xl bg-[#171716] shadow-md border border-[#D8CFC1]">
              <Image
                src="/images/home-selected/temple-connection.webp"
                alt="Couple holding hands in front of temple in Nelliady"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 inline-flex items-center gap-2 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-[11px] text-white border border-white/15">
                <span className="size-1.5 rounded-full bg-[#D71920] animate-pulse" />
                <span className="font-semibold">Authentic Cultural Moments</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom 3 Luxury Process Pillar Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {approachSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#D8CFC1] bg-white p-6 sm:p-7 shadow-xs hover:border-[#D71920] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#D71920]/10 text-[#D71920] group-hover:bg-[#D71920] group-hover:text-white transition-colors duration-300">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D71920]">
                      {step.phase}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="mt-5 text-xl sm:text-2xl font-medium text-[#171716] group-hover:text-[#D71920] transition-colors leading-snug"
                  >
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-[#716B64] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8CFC1]/70 flex items-center gap-2 text-xs font-semibold text-[#171716]">
                  <CheckCheck className="size-3.5 text-[#D71920] shrink-0" />
                  <span className="text-[11px] text-[#716B64] group-hover:text-[#171716] transition-colors">
                    {step.feature}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
