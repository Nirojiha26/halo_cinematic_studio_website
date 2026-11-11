import { siteConfig, whatsappUrl } from "@/config/site";

export function ContactCTA() {
  return (
    <section
      aria-label="Contact studio call to action"
      className="relative overflow-hidden py-20 px-6 text-center text-white"
      style={{ background: "var(--grad-btn)" }}
    >
      {/* Soft white halo glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.25)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
          className="text-4xl font-semibold sm:text-5xl"
        >
          Let&apos;s create something.
        </h2>
        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="mt-4 text-base font-normal text-white/90 sm:text-lg"
        >
          Tell us about your event or creative project. We would love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappUrl("Hello! I would like to enquire about your photography and film services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-medium text-[#DC3530] shadow-sm transition-all hover:bg-[#FFF5F4] hover:shadow-md"
          >
            Send WhatsApp Enquiry
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneIntl}`}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/60 bg-transparent px-7 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white"
          >
            Call {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
