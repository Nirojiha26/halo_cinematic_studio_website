import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = createMetadata({
  title: "About",
  description:
    "HALO CINEMATIC STUDIO is a creative photography and film production studio focused on telling meaningful stories through powerful visuals in Nelliady, Sri Lanka.",
  path: "/about",
});

const pillars = [
  {
    step: "01",
    title: "Our Vision",
    body: "To preserve the feeling of every meaningful occasion in photographs and films that families return to for generations.",
  },
  {
    step: "02",
    title: "Our Mission",
    body: "To understand each client's story and capture it with creativity, care and thoughtful attention to every authentic detail.",
  },
  {
    step: "03",
    title: "Our Philosophy",
    body: "Polished films, handcrafted fine-art frames and bespoke 3D keepsakes built to stand the test of time.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* ── 1. First Part: "WHO WE ARE" (Warm Ivory #EEE9DF, Full Horizontal Layout) ── */}
      <section className="bg-[#EEE9DF] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 border-b border-[#D8CFC1]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Eyebrow, Main Headline & Subtitle */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#D71920] shrink-0" aria-hidden />
                <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#716B64]">
                  Who We Are
                </p>
              </div>

              {/* Main Headline */}
              <h1
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-normal tracking-[-0.03em] leading-[1.08] text-[#171716]"
              >
                We make moments{" "}
                <span className="italic font-serif text-[#D71920]">timeless.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-xl sm:text-2xl font-light tracking-tight text-[#171716]">
                Stories captured with emotion. Memories preserved forever.
              </p>
            </div>

            {/* Right Column: Studio Description & Horizontal Proof Badges */}
            <div className="lg:col-span-5 lg:border-l lg:border-[#D8CFC1] lg:pl-10 space-y-5">
              <p className="text-base sm:text-[17px] leading-relaxed text-[#716B64]">
                HALO CINEMATIC STUDIO is a creative photography and film production studio focused on
                telling meaningful stories through powerful visuals in Nelliady, Sri Lanka.
              </p>

              {/* Quick Proof Pills */}
              <div className="pt-4 border-t border-[#D8CFC1]/70 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#716B64]">
                <span className="flex items-center gap-1.5 text-[#171716]">
                  <Sparkles className="size-3.5 text-[#D71920]" />
                  <span>Nelliady &amp; Jaffna</span>
                </span>
                <span className="text-[#D8CFC1]">•</span>
                <span>Wedding &amp; Milestone Cinematography</span>
                <span className="text-[#D8CFC1]">•</span>
                <span>Bespoke 3D Keepsakes</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Second Part: "ABOUT US" (Soft Cream #FAF7F1, Centered) ── */}
      <section className="bg-[#FAF7F1] py-16 sm:py-24 border-b border-[#D8CFC1]">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              {/* Centered Eyebrow */}
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#D71920]" aria-hidden />
                <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#D71920]">
                  About Us
                </p>
                <span className="w-6 h-[2px] bg-[#D71920]" aria-hidden />
              </div>

              {/* Main Centered Heading */}
              <h2
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.025em] text-[#171716] leading-[1.18]"
              >
                Behind every frame is a story worth remembering
              </h2>

              {/* Story Narrative Paragraphs */}
              <div className="mt-8 space-y-6 text-base sm:text-[17px] leading-relaxed text-[#716B64] text-center">
                <p>
                  At HALO CINEMATIC STUDIO, our mission is to capture life&apos;s most meaningful occasions with
                  authenticity, emotion, and cinematic artistry. We want every family, couple, and client to relive their
                  cherished memories through photographs and films that are timeless, vibrant, and deeply heartfelt.
                </p>

                <p>
                  Great stories are built from real, unscripted moments — the quiet smiles, the sacred exchange of
                  garlands, the joyous laughter among loved ones, and the fine cultural details that make your day unique.
                  We craft our photography and cinematography with careful framing, natural lighting, and modern colour
                  grading so that every frame tells a feeling.
                </p>

                <p>
                  Based in Nelliady, Jaffna, our dedicated team of photographers, cinematographers, colourists, and album
                  designers works closely with every client from the first consultation to final delivery. Our long-term
                  goal is simple: to create heirloom visual stories that your family will treasure for generations.
                </p>
              </div>

              {/* Centered Action Buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/packages" icon={<ArrowRight className="size-4" />}>
                  Explore Packages
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Studio
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 3. Third Part: GALLERY (Warm Ivory #EEE9DF) ─────────────── */}
      <section className="bg-[#EEE9DF] py-16 sm:py-24 border-b border-[#D8CFC1]">
        <Container size="wide">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D71920] mb-2">
              Studio Gallery
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              className="text-3xl sm:text-4xl font-normal text-[#171716] tracking-tight"
            >
              Real Moments, Carefully Made
            </h2>
            <p className="mt-2 text-sm text-[#716B64]">
              Selected highlights from traditional wedding celebrations and intimate ceremonies in Jaffna.
            </p>
          </div>

          <div className="w-full">
            {/* Row 1: Staggered Bento Grid */}
            <div className="grid grid-cols-12 gap-3 sm:gap-5 items-end">
              {/* Card 1: Wide Landscape (Left) */}
              <div className="col-span-12 sm:col-span-5 md:col-span-4 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/traditional-wedding.webp"
                  alt="Bride and groom in traditional wedding dress before temple doors"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 2: Vertical Portrait */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/jewellery-portrait.webp"
                  alt="Traditional bridal gold jewellery and green bangles"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 3: Medium Horizontal */}
              <div className="col-span-6 sm:col-span-4 md:col-span-3 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/temple-connection.webp"
                  alt="Newlywed couple candid smile in temple courtyard"
                  fill
                  sizes="(min-width: 1024px) 25vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 4: Vertical Portrait (Right) */}
              <div className="col-span-12 sm:col-span-4 md:col-span-3 relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/garden-couple.webp"
                  alt="Couple holding hands in natural garden light"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Row 2: Staggered Bento Grid */}
            <div className="grid grid-cols-12 gap-3 sm:gap-5 items-start mt-3 sm:mt-5">
              {/* Card 5: Square */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/wedding-embrace.webp"
                  alt="Bride and groom leaning close together in wedding attire"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 6: Square */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/couple-at-temple.webp"
                  alt="Couple smiling seated in front of carved temple doors"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 7: Vertical Ritual Card */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/hero/slide-03.jpg"
                  alt="Auspicious ceremony floral garlands and rituals"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 8: Large Wide Landscape (Right) */}
              <div className="col-span-12 sm:col-span-6 md:col-span-6 relative aspect-[16/9.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#D8CFC1] bg-[#FAF7F1] group">
                <Image
                  src="/images/home-selected/garland-exchange.webp"
                  alt="Bride and groom exchanging flower garlands during ceremony"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Fourth Part: "CAPTURE EVERY PRECIOUS MOMENT" — VISION & MISSION (Soft Cream #FAF7F1) ── */}
      <section className="bg-[#FAF7F1] py-16 sm:py-24 border-b border-[#D8CFC1]">
        <Container size="wide">
          <SectionHeading
            id="philosophy-heading"
            eyebrow="Capture every precious moment"
            title="Vision &"
            highlight="Mission"
            description="Three guiding principles behind every frame, film edit, and keepsake we produce."
          />

          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} as="article">
                <div className="relative h-full rounded-[20px] bg-[#EEE9DF] border border-[#D8CFC1] p-7 sm:p-8 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#D71920]">{p.step}</p>
                  <h3
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    className="mt-4 text-2xl font-semibold text-[#171716]"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#716B64]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. What We Craft — 4 Core Studio Disciplines (Warm Ivory #EEE9DF) ── */}
      <section className="bg-[#EEE9DF] py-16 sm:py-24">
        <Container size="wide">
          <SectionHeading
            id="craft-heading"
            eyebrow="Studio Disciplines"
            title="What We"
            highlight="Craft"
            description="Specialized photography, cinematic films, and bespoke keepsakes for your most meaningful milestones."
            action={
              <Button href="/packages" variant="outline" size="md" icon={<ArrowRight className="size-4" />}>
                Explore Packages
              </Button>
            }
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {services.map((service, i) => {
              const link =
                service.slug === "3d-customised-gifts"
                  ? "/contact?service=3D%20Customised%20Gifts"
                  : service.slug === "puberty-photography-cinematography"
                  ? "/packages?category=puberty"
                  : service.slug === "registration-engagement-photography"
                  ? "/packages?category=engagement"
                  : "/packages?category=events";

              return (
                <Reveal key={service.slug} delay={Math.min(i * 0.05, 0.2)}>
                  <ServiceCard service={service} href={link} />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
