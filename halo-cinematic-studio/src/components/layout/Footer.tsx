import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { packageCategories } from "@/data/packages";
import { Logo } from "@/components/shared/Logo";
import { CurrentYear } from "@/components/shared/CurrentYear";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { contact, socials } = siteConfig;

  return (
    <footer className="relative border-t border-[rgba(20,20,20,0.08)] bg-[#FFF1F2] text-[#141414]">
      {/* Soft top gradient accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,11,23,0.10)_0%,transparent_70%)]"
      />

      <Container className="relative z-10 grid gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10">
        {/* Brand identity column */}
        <div className="max-w-sm">
          <Link href="/" aria-label={`${siteConfig.name} — Home`} className="inline-block transition-opacity hover:opacity-90">
            <Logo sizes="180px" alt="" className="h-auto w-[160px]" />
          </Link>
          <p
            style={{ fontFamily: "var(--font-playfair), serif" }}
            className="mt-5 text-xl font-semibold leading-snug text-[#141414]"
          >
            Your Moments. <span className="grad-text">Our Vision.</span> Your Story.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#625C5D]">
            Wedding photography, puberty milestones, engagement coverage, cinematography, and handcrafted fine-art albums.
          </p>
        </div>

        {/* Explore Links */}
        <nav aria-label="Footer navigation">
          <h2 className="chip-eyebrow mb-4">Explore</h2>
          <ul className="space-y-3 text-sm font-medium">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#625C5D] transition-colors hover:text-[#E50919]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Packages Links */}
        <div>
          <h2 className="chip-eyebrow mb-4">Packages</h2>
          <ul className="space-y-3 text-sm font-medium">
            {packageCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/packages?category=${c.slug}`}
                  className="text-[#625C5D] transition-colors hover:text-[#E50919]"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h2 className="chip-eyebrow mb-4">Contact Studio</h2>
          <ul className="space-y-3.5 text-sm font-medium">
            <li>
              <a
                href={`tel:${contact.phoneIntl}`}
                className="flex items-center gap-2.5 text-[#141414] transition-colors hover:text-[#E50919]"
              >
                <Phone className="size-4 text-[#E50919]" aria-hidden />
                <span>{contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#141414] transition-colors hover:text-[#E50919]"
              >
                <MessageCircle className="size-4 text-[#E50919]" aria-hidden />
                <span>WhatsApp Us</span>
              </a>
            </li>
            {contact.email ? (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-[#625C5D] transition-colors hover:text-[#E50919]"
                >
                  <Mail className="size-4 text-[#E50919]" aria-hidden />
                  <span>{contact.email}</span>
                </a>
              </li>
            ) : null}
            {contact.location ? (
              <li className="flex items-center gap-2.5 text-[#625C5D]">
                <MapPin className="size-4 shrink-0 text-[#E50919]" aria-hidden />
                <span>{contact.location}</span>
              </li>
            ) : null}
            <li className="text-xs font-semibold text-[#B50812]">{contact.bookingStatus}</li>
            {socials.length > 0 ? (
              <li className="flex flex-wrap gap-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#625C5D] transition-colors hover:text-[#E50919]"
                  >
                    {s.label}
                  </a>
                ))}
              </li>
            ) : null}
          </ul>
        </div>
      </Container>

      {/* Sub-footer copyright */}
      <div className="border-t border-[rgba(20,20,20,0.06)] py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-[#625C5D] sm:flex-row">
          <p>© <CurrentYear /> {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Capture</span>
            <span>•</span>
            <span className="font-semibold text-[#B50812]">Create</span>
            <span>•</span>
            <span>Inspire</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
