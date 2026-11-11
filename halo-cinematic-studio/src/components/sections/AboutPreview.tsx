import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

const pillars = [
  { no: "01", title: "Capture", detail: "Genuine emotions and unscripted wedding or event details." },
  { no: "02", title: "Create", detail: "Cinematic framing, music video concepts and visual storytelling." },
  { no: "03", title: "Inspire", detail: "Polished film colour and custom photo frames built to last." },
];

export function AboutPreview() {
  return (
    <Section tone="paper" labelledBy="about-preview-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* High-contrast black manifesto card anchoring the Black pillar on light paper */}
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-card bg-ink p-8 text-white sm:p-10">
              <span aria-hidden className="absolute top-0 left-0 h-[3px] w-20 bg-brand" />
              <p className="text-[11px] font-extrabold tracking-[0.26em] text-brand-soft uppercase">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                Your Moments. <span className="text-brand">Our Vision.</span> Your Story.
              </p>

              <ul className="mt-8 divide-y divide-white/12 border-t border-white/12">
                {pillars.map((item) => (
                  <li key={item.no} className="flex gap-4 py-4 first:pt-5 last:pb-0">
                    <span className="text-xs font-extrabold tracking-[0.18em] text-brand">{item.no}</span>
                    <div>
                      <h3 className="text-sm font-black tracking-[0.12em] text-white uppercase">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/70">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span aria-hidden className="h-[2px] w-8 bg-brand" />
              Who We Are
            </p>
            <h2
              id="about-preview-heading"
              className="text-[2rem] font-black uppercase leading-[1.03] tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl"
            >
              We make moments <span className="text-accent">timeless.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              HALO CINEMATIC STUDIO is a creative photography and film production studio focused on telling meaningful
              stories through powerful visuals.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
              From the emotion of a wedding day to the energy of a music video, we bring creativity, care and cinematic
              detail to every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href="/about" icon={<ArrowRight className="size-4" />}>
                Our Story
              </Button>
              <Button href="/contact" variant="outline">
                Talk to Our Team
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
