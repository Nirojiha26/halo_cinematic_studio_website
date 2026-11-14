import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { packageCategories } from "@/data/packages";
import { Logo } from "@/components/shared/Logo";
import { CurrentYear } from "@/components/shared/CurrentYear";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="relative border-t border-[#2A2926] bg-[#171716] text-[#FAF7F1]">
      {/* Soft top gradient accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.12)_0%,transparent_70%)]"
      />

      <Container className="relative z-10 grid gap-8 pt-10 pb-7 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.05fr_1.3fr] lg:gap-10">
        {/* Brand identity column */}
        <div className="max-w-sm">
          <Link href="/" aria-label={`${siteConfig.name} — Home`} className="inline-block transition-opacity hover:opacity-90">
            <Logo sizes="180px" alt="" className="h-auto w-[145px]" />
          </Link>
          <p
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="mt-3.5 text-lg sm:text-xl font-normal leading-snug text-[#FAF7F1]"
          >
            Your Moments. <span className="text-[#D71920] italic font-serif">Our Vision.</span> Your Story.
          </p>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#A39E96]">
            Wedding photography, puberty milestones, engagement coverage, cinematography, and bespoke 3D keepsakes in Nelliady, Sri Lanka.
          </p>
        </div>

        {/* Explore Links */}
        <nav aria-label="Footer navigation" className="lg:pl-6 xl:pl-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D71920] mb-3">Explore</h2>
          <ul className="space-y-2 text-sm font-medium">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#A39E96] transition-colors hover:text-[#D71920]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Packages Links */}
        <div className="lg:pl-2 xl:pl-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D71920] mb-3">Packages</h2>
          <ul className="space-y-2 text-sm font-medium">
            {packageCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/packages?category=${c.slug}`}
                  className="text-[#A39E96] transition-colors hover:text-[#D71920]"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="lg:pl-4 xl:pl-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D71920] mb-3">Contact &amp; Connect</h2>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <a
                href={`tel:${contact.phoneIntl}`}
                className="flex items-center gap-2.5 text-[#FAF7F1] transition-colors hover:text-[#D71920]"
              >
                <Phone className="size-[18px] shrink-0 text-[#D71920]" aria-hidden />
                <span>{contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl(
                  "Hello HALO CINEMATIC STUDIO! I would like to enquire about your photography and film services in Nelliady.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#FAF7F1] transition-colors hover:text-[#D71920]"
              >
                <WhatsAppIcon className="size-[18px] shrink-0 text-[#D71920]" />
                <span>WhatsApp: Direct Chat</span>
              </a>
            </li>
            {contact.email ? (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-[#A39E96] transition-colors hover:text-[#D71920]"
                >
                  <Mail className="size-[18px] shrink-0 text-[#D71920]" aria-hidden />
                  <span>{contact.email}</span>
                </a>
              </li>
            ) : null}
            {contact.location ? (
              <li className="flex items-center gap-2.5 text-[#A39E96]">
                <MapPin className="size-[18px] shrink-0 text-[#D71920]" aria-hidden />
                <span>{contact.location}</span>
              </li>
            ) : null}
          </ul>

          {/* Social Media Accounts with Clickable Red Icons (Text Removed) */}
          <div className="mt-4 pt-3.5 border-t border-[#2A2926]">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#716B64] mb-2.5">
              Follow Our Work
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/18G3kQ7vff/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="grid size-10 place-items-center rounded-xl bg-[#22211F] border border-[#2E2D2B] text-[#D71920] transition-all duration-200 hover:border-[#D71920] hover:bg-[#D71920]/15 hover:scale-105 active:scale-95"
              >
                <FacebookIcon className="size-5 shrink-0" />
              </a>
              <a
                href="https://www.instagram.com/halo_cinematic_studio?psln=MWZ5cnQ4eGNmcGowaQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="grid size-10 place-items-center rounded-xl bg-[#22211F] border border-[#2E2D2B] text-[#D71920] transition-all duration-200 hover:border-[#D71920] hover:bg-[#D71920]/15 hover:scale-105 active:scale-95"
              >
                <InstagramIcon className="size-5 shrink-0" />
              </a>
              <a
                href="https://www.tiktok.com/@tharsan_offcl?_r=1&_t=ZS-9BOC640Df3U"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="grid size-10 place-items-center rounded-xl bg-[#22211F] border border-[#2E2D2B] text-[#D71920] transition-all duration-200 hover:border-[#D71920] hover:bg-[#D71920]/15 hover:scale-105 active:scale-95"
              >
                <TikTokIcon className="size-5 shrink-0" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb9T6yaAYlUMkyyujH1P"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
                className="grid size-10 place-items-center rounded-xl bg-[#22211F] border border-[#2E2D2B] text-[#D71920] transition-all duration-200 hover:border-[#D71920] hover:bg-[#D71920]/15 hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="size-5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Sub-footer copyright with mobile bottom bar clearance */}
      <div className="border-t border-[#2A2926] pt-4 pb-24 sm:py-4">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs sm:text-[13px] text-[#A39E96] md:flex-row">
          <p>© <CurrentYear /> {siteConfig.name}. All rights reserved.</p>

          {/* Solution by Nexora Labs */}
          <div className="flex items-center gap-1.5 text-sm sm:text-[14px]">
            <span className="font-medium text-[#FAF7F1]">Solution by</span>
            <a
              href="https://nexoralabs.lk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nexora Labs"
              className="font-bold text-[#F29947] hover:text-[#FFA857] transition-colors underline-offset-4 hover:underline"
            >
              Nexora Labs
            </a>
          </div>

          <p className="flex items-center gap-2 text-xs sm:text-[13px] text-[#716B64]">
            <span>Capture</span>
            <span className="text-[#D8CFC1]/30">•</span>
            <span className="font-semibold text-[#D71920]">Create</span>
            <span className="text-[#D8CFC1]/30">•</span>
            <span>Inspire</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
