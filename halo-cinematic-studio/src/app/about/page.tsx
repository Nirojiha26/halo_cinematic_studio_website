import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
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
      {/* ── Top Section: Editorial Photo Collage + Story (Matching Reference Design) ── */}
      <section className="bg-white pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
        <Container size="wide">
          
          {/* ── Dynamic Photo Collage (100% Genuine HALO Studio Photos) ── */}
          <div className="w-full">
            {/* Row 1: Staggered Bento Grid */}
            <div className="grid grid-cols-12 gap-3 sm:gap-5 items-end">
              {/* Card 1: Wide Landscape (Left) */}
              <div className="col-span-12 sm:col-span-5 md:col-span-4 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
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
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
                <Image
                  src="/images/home-selected/jewellery-portrait.webp"
                  alt="Traditional bridal gold jewellery and green bangles"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 3: Medium Horizontal */}
              <div className="col-span-6 sm:col-span-4 md:col-span-3 relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
                <Image
                  src="/images/home-selected/temple-connection.webp"
                  alt="Newlywed couple candid smile in temple courtyard"
                  fill
                  sizes="(min-width: 1024px) 25vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 4: Vertical Portrait (Right) */}
              <div className="col-span-12 sm:col-span-4 md:col-span-3 relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
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
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
                <Image
                  src="/images/home-selected/wedding-embrace.webp"
                  alt="Bride and groom leaning close together in wedding attire"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 6: Square */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
                <Image
                  src="/images/home-selected/couple-at-temple.webp"
                  alt="Couple smiling seated in front of carved temple doors"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 7: Vertical Booth Card */}
              <div className="col-span-6 sm:col-span-3 md:col-span-2 relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
                <Image
                  src="/images/hero/slide-03.jpg"
                  alt="Auspicious ceremony floral garlands and rituals"
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card 8: Large Wide Landscape (Right) */}
              <div className="col-span-12 sm:col-span-6 md:col-span-6 relative aspect-[16/9.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 group">
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

          {/* ── Editorial Story Text Block (Matching Reference Typography) ── */}
          <div className="mt-16 sm:mt-24 max-w-3xl">
            <Reveal>
              <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-[#B50812] mb-4">
                Our Vision
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141414] leading-[1.15]">
                We&apos;re making every moment timeless
              </h1>

              <div className="mt-8 space-y-6 text-base sm:text-[17px] leading-relaxed text-[#5F5A5A]">
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

              <div className="mt-10 flex flex-wrap gap-4">
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

      {/* ── Mission, Vision & Philosophy ── */}
      <Section tone="blush" labelledBy="philosophy-heading">
        <Container>
          <SectionHeading
            id="philosophy-heading"
            eyebrow={siteConfig.tagline}
            title="Vision &"
            highlight="Mission"
            description="Three guiding principles behind every frame, film edit, and keepsake we produce."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} as="article">
                <div className="card relative h-full rounded-[20px] bg-white p-7 shadow-[0_12px_32px_rgba(217,11,23,0.08)] sm:p-8">
                  <p className="text-xs font-semibold text-[#B50812]">{p.step}</p>
                  <h3
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                    className="mt-4 text-2xl font-semibold text-[#141414]"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5F5A5A]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── What We Craft — 4 Core Studio Disciplines ── */}
      <Section tone="white" labelledBy="craft-heading">
        <Container>
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={Math.min(i * 0.05, 0.2)}>
                <ServiceCard service={service} index={i} href="/contact" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </PageTransition>
  );
}
