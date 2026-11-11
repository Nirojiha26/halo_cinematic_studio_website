import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactDetails, QuickContactActions } from "@/components/shared/ContactDetails";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";

export function ContactCTA() {
  return (
    <Section tone="canvas" labelledBy="contact-cta-heading">
      <Container>
        <div className="relative grid items-start gap-10 overflow-hidden rounded-card border border-line-strong bg-paper p-7 shadow-[0_24px_60px_-38px_rgba(10,10,11,0.16)] sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-14">
          <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-brand" />

          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span aria-hidden className="h-[2px] w-8 bg-brand" />
              Let&apos;s Create Something
            </p>
            <h2
              id="contact-cta-heading"
              className="text-[2rem] font-black uppercase leading-[1.03] tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl"
            >
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Select a package and send us your event date directly on WhatsApp. We would love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href="/contact" size="lg" icon={<ArrowRight className="size-4" />}>
                Send WhatsApp Enquiry
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Studio
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-6">
            <ContactDetails />
            <QuickContactActions />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
