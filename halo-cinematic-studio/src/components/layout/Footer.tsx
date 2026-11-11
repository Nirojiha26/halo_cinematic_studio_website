import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { packageCategories } from "@/data/packages";
import { Logo } from "@/components/shared/Logo";
import { CurrentYear } from "@/components/shared/CurrentYear";

export function Footer() {
  const { contact, socials } = siteConfig;

  return (
    <footer className="relative border-t border-[rgba(20,20,20,0.08)] bg-[#FFF5F4] text-[#141414]">
      {/* Soft top gradient accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,53,48,0.08)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 pt-16 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-10 lg:px-12">
        {/* Brand identity column */}
        <div className="max-w-sm">
          <Link href="/" aria-label={`${siteConfig.name} — Home`} className="inline-block transition-opacity hover:opacity-90">
            <Logo sizes="180px" alt="" className="h-auto w-[160px]" />
          </Link>
          <p
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="mt-5 text-xl font-semibold leading-snug text-[#141414]"
          >
            Your Moments. <span className="grad-text">Our Vision.</span> Your Story.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5F5A5A]">
            Wedding photography, puberty milestones, engagement coverage, cinematography, and handcrafted fine-art albums.
          </p>
        </div>

        {/* Explore Links */}
        <nav aria-label="Footer navigation">
          <h2 className="chip-eyebrow mb-4">Explore</h2>
          <ul className="space-y-3 text-sm font-medium">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#5F5A5A] transition-colors hover:text-[#DC3530]">
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
                  className="text-[#5F5A5A] transition-colors hover:text-[#DC3530]"
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
                className="flex items-center gap-2.5 text-[#141414] transition-colors hover:text-[#DC3530]"
              >
                <Phone className="size-4 text-[#DC3530]" aria-hidden />
                <span>{contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#141414] transition-colors hover:text-[#DC3530]"
              >
                <MessageCircle className="size-4 text-[#DC3530]" aria-hidden />
                <span>WhatsApp Us</span>
              </a>
            </li>
            {contact.email ? (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-[#5F5A5A] transition-colors hover:text-[#DC3530]"
                >
                  <Mail className="size-4 text-[#DC3530]" aria-hidden />
                  <span>{contact.email}</span>
                </a>
              </li>
            ) : null}
            <li className="text-xs font-semibold text-[#DC3530]">{contact.bookingStatus}</li>
            {socials.length > 0 ? (
              <li className="flex flex-wrap gap-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#5F5A5A] transition-colors hover:text-[#DC3530]"
                  >
                    {s.label}
                  </a>
                ))}
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div className="border-t border-[rgba(20,20,20,0.06)] py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs text-[#5F5A5A] sm:flex-row sm:px-8 lg:px-12">
          <p>© <CurrentYear /> {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Capture</span>
            <span>•</span>
            <span className="text-[#DC3530]">Create</span>
            <span>•</span>
            <span>Inspire</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
