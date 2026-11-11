import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/shared/PageHeader";
import { LogoPanel } from "@/components/shared/LogoPanel";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = createMetadata({
  title: "About",
  description:
    "HALO CINEMATIC STUDIO is a creative photography and film production studio focused on telling meaningful stories through powerful visuals.",
  path: "/about",
});

const pillars = [
  {
    step: "01",
    title: "Capture",
    body: "Unscripted emotions, quiet details and genuine moments preserved with intention from weddings to documentary shoots.",
  },
  {
    step: "02",
    title: "Create",
    body: "Cinematic framing, thoughtful storytelling and careful post-production across photography, film and music videos.",
  },
  {
    step: "03",
    title: "Inspire",
    body: "Polished films and custom photo frames built to stand the test of time and bring your memories back to life.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Who We Are"
        title="We make moments"
        highlight="timeless."
        description="HALO CINEMATIC STUDIO is a creative photography and film production studio focused on telling meaningful stories through powerful visuals."
      />

      {/* Brand story */}
      <Section tone="paper" labelledBy="story-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <LogoPanel />
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span aria-hidden className="h-[2px] w-8 bg-brand" />
                Our Story
              </p>
              <h2
                id="story-heading"
                className="text-[2rem] font-black uppercase leading-[1.03] tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl"
              >
                Your Moments. <span className="text-accent">Our Vision.</span> Your Story.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
                We capture the moments that matter and turn them into timeless memories. From weddings to music videos,
                every frame is created with passion.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                From the emotion of a wedding day to the energy of a music video, we bring creativity, care and
                cinematic detail to every project — working closely with every client from the first idea to the final
                delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href="/packages" icon={<ArrowRight className="size-4" />}>
                  View Packages
                </Button>
                <Button href="/photos" variant="outline">
                  Browse Photos
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission, Vision & Philosophy */}
      <Section tone="canvas" labelledBy="philosophy-heading">
        <Container>
          <SectionHeading
            id="philosophy-heading"
            eyebrow={siteConfig.tagline}
            title="Mission &"
            highlight="Philosophy"
            description="Three words guide how we shoot, edit and finish every commission."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} as="article">
                <div className="relative h-full rounded-card border border-line bg-paper p-7 sm:p-8">
                  <span aria-hidden className="absolute top-0 left-0 h-[3px] w-11 bg-brand" />
                  <p className="text-xs font-extrabold tracking-[0.2em] text-brand-deep uppercase">{p.step}</p>
                  <h3 className="mt-6 text-2xl font-black uppercase text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Craft Disciplines */}
      <Section tone="paper" labelledBy="craft-heading">
        <Container>
          <SectionHeading
            id="craft-heading"
            eyebrow="Studio Disciplines"
            title="What We"
            highlight="Craft"
            description="Every package is backed by in-house photographers, cinematographers, colourists, and album designers."
            action={
              <Button href="/packages" variant="outline" size="md" icon={<ArrowRight className="size-4" />}>
                Explore Packages
              </Button>
            }
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.2)}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </PageTransition>
  );
}
