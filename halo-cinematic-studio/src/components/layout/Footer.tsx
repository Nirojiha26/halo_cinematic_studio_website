import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Radio } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { packageCategories } from "@/data/packages";
import { Logo } from "@/components/shared/Logo";
import { CurrentYear } from "@/components/shared/CurrentYear";
import { Container } from "@/components/ui/Container";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="relative border-t border-[#2A2926] bg-[#171716] text-[#FAF7F1]">
      {/* Soft top gradient accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_50%_0%,rgba(215,25,32,0.12)_0%,transparent_70%)]"
      />

      <Container className="relative z-10 grid gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1.3fr] lg:gap-10">
        {/* Brand identity column */}
        <div className="max-w-sm">
          <Link href="/" aria-label={`${siteConfig.name} — Home`} className="inline-block transition-opacity hover:opacity-90">
            <Logo sizes="180px" alt="" className="h-auto w-[160px]" />
          </Link>
          <p
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="mt-5 text-xl font-normal leading-snug text-[#FAF7F1]"
          >
            Your Moments. <span className="text-[#D71920] italic font-serif">Our Vision.</span> Your Story.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#A39E96]">
            Wedding photography, puberty milestones, engagement coverage, cinematography, and bespoke 3D keepsakes in Nelliady, Sri Lanka.
          </p>
        </div>

        {/* Explore Links */}
        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D71920] mb-4">Explore</h2>
          <ul className="space-y-3 text-sm font-medium">
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
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D71920] mb-4">Packages</h2>
          <ul className="space-y-3 text-sm font-medium">
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
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D71920] mb-4">Contact &amp; Connect</h2>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a
                href={`tel:${contact.phoneIntl}`}
                className="flex items-center gap-2.5 text-[#FAF7F1] transition-colors hover:text-[#D71920]"
              >
                <Phone className="size-4 text-[#D71920]" aria-hidden />
                <span>{contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#FAF7F1] transition-colors hover:text-[#D71920]"
              >
                <MessageCircle className="size-4 text-[#D71920]" aria-hidden />
                <span>WhatsApp: Direct Chat</span>
              </a>
            </li>
            <li>
              <a
                href="https://whatsapp.com/channel/0029Vb9T6yaAYlUMkyyujH1P"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#FAF7F1] transition-colors hover:text-[#D71920]"
              >
                <Radio className="size-4 text-[#D71920]" aria-hidden />
                <span>WhatsApp: Official Channel</span>
              </a>
            </li>
            {contact.email ? (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-[#A39E96] transition-colors hover:text-[#D71920]"
                >
                  <Mail className="size-4 text-[#D71920]" aria-hidden />
                  <span>{contact.email}</span>
                </a>
              </li>
            ) : null}
            {contact.location ? (
              <li className="flex items-center gap-2.5 text-[#A39E96]">
                <MapPin className="size-4 shrink-0 text-[#D71920]" aria-hidden />
                <span>{contact.location}</span>
              </li>
            ) : null}
          </ul>

          {/* Social Media Pills */}
          <div className="mt-5 pt-4 border-t border-[#2A2926]">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#716B64] mb-2.5">
              Follow Our Work
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.facebook.com/share/18G3kQ7vff/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#22211F] px-3 py-1.5 text-xs font-medium text-[#FAF7F1] border border-[#2E2D2B] transition-colors hover:border-[#D71920] hover:text-[#D71920]"
              >
                <FacebookIcon className="size-3.5 text-[#D71920]" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/halo_cinematic_studio?psln=MWZ5cnQ4eGNmcGowaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#22211F] px-3 py-1.5 text-xs font-medium text-[#FAF7F1] border border-[#2E2D2B] transition-colors hover:border-[#D71920] hover:text-[#D71920]"
              >
                <InstagramIcon className="size-3.5 text-[#D71920]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb9T6yaAYlUMkyyujH1P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#22211F] px-3 py-1.5 text-xs font-medium text-[#FAF7F1] border border-[#2E2D2B] transition-colors hover:border-[#D71920] hover:text-[#D71920]"
              >
                <Radio className="size-3.5 text-[#D71920]" />
                <span>WA Channel</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Sub-footer copyright */}
      <div className="border-t border-[#2A2926] py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-[#A39E96] sm:flex-row">
          <p>© <CurrentYear /> {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Capture</span>
            <span className="text-[#D8CFC1]/40">•</span>
            <span className="font-semibold text-[#D71920]">Create</span>
            <span className="text-[#D8CFC1]/40">•</span>
            <span>Inspire</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
