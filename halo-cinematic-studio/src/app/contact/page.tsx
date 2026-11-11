import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactDetails, QuickContactActions } from "@/components/shared/ContactDetails";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Container, Section } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact HALO CINEMATIC STUDIO on 077 532 1978, halostudio18@gmail.com, or select a package to send a direct WhatsApp enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Let's Create Something"
        title="Get In"
        highlight="Touch"
        description="Select your preferred package category and send us your event date directly on WhatsApp."
      />

      <Section tone="paper" labelledBy="contact-heading">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <Reveal className="rounded-card border border-line bg-canvas p-7 sm:p-8">
              <p className="eyebrow mb-3">Direct Channels</p>
              <h2 id="contact-heading" className="text-2xl font-black uppercase text-ink sm:text-3xl">
                {siteConfig.name}
              </h2>
              <p className="mt-2 text-base text-body">{siteConfig.motto}</p>

              <ContactDetails className="mt-7" />
              <QuickContactActions className="mt-7" />
            </Reveal>

            <Reveal delay={0.08}>
              <EnquiryForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
