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
    "Contact HALO CINEMATIC STUDIO in Nelliady, Sri Lanka on 077 532 1978, halostudio18@gmail.com, or select a package to send a direct WhatsApp enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Let's Create Something"
        title="Tell Us"
        highlight="Your Story."
        description="A wedding, a celebration, or an idea you can't wait to bring to life. Share your plans and event date with us."
      />

      <Section tone="blush" labelledBy="contact-heading">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal className="rounded-[24px] border border-[#D8CFC1] bg-[#FAF7F1] p-7 shadow-xs sm:p-9">
              <p className="chip-eyebrow mb-4">Direct Studio Channels</p>
              <h2
                id="contact-heading"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                className="text-2xl font-normal text-[#171716] sm:text-3xl"
              >
                {siteConfig.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#716B64]">{siteConfig.motto}</p>

              <ContactDetails className="mt-8" />
              <QuickContactActions className="mt-8" />
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
