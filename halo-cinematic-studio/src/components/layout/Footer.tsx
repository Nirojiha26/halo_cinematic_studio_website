import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { packageCategories } from "@/data/packages";
import { Logo } from "@/components/shared/Logo";
import { CurrentYear } from "@/components/shared/CurrentYear";

export function Footer() {
  const { contact, socials } = siteConfig;

  return (
    <footer className="relative border-t-2 border-ink bg-paper text-ink">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pt-16 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:gap-10 lg:px-12">
        <div className="max-w-sm">
          <Link href="/" aria-label={`${siteConfig.name} — Home`} className="inline-block rounded-card">
            <Logo sizes="190px" alt="" className="h-auto w-[176px]" />
          </Link>
          <p className="mt-5 font-display text-lg font-black uppercase leading-snug text-ink">
            Your Moments. <span className="text-brand">Our Vision.</span> Your Story.
          </p>
          <p className="mt-3 text-sm text-body">
            Wedding photography, puberty milestones, engagement coverage, cinematography, and handcrafted fine-art albums.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow mb-5">Explore</h2>
          <ul className="space-y-2.5 text-sm font-medium">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-body transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow mb-5">Packages</h2>
          <ul className="space-y-2.5 text-sm font-medium">
            {packageCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/packages?category=${c.slug}`} className="text-body transition-colors hover:text-brand">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5">Contact</h2>
          <ul className="space-y-3.5 text-sm font-medium">
            <li>
              <a
                href={`tel:${contact.phoneIntl}`}
                className="flex items-center gap-3 text-ink transition-colors hover:text-brand"
              >
                <Phone className="size-4 text-brand" aria-hidden />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink transition-colors hover:text-brand"
              >
                <MessageCircle className="size-4 text-brand" aria-hidden />
                WhatsApp Us
              </a>
            </li>
            {contact.email ? (
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-body transition-colors hover:text-brand"
                >
                  <Mail className="size-4 text-brand" aria-hidden />
                  {contact.email}
                </a>
              </li>
            ) : null}
            {contact.location ? <li className="text-body">{contact.location}</li> : null}
            <li className="text-muted">{contact.bookingStatus}</li>
            {socials.length > 0 ? (
              <li className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline-offset-4 hover:text-brand hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-line bg-canvas">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 pt-6 pb-20 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-6 lg:px-12">
          <p>
            <b className="text-ink">{siteConfig.name}</b> <span className="text-brand">©</span> <CurrentYear />
          </p>
          <p className="font-semibold tracking-[0.28em] text-subtle uppercase">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
