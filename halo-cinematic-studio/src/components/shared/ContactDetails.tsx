import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

type Line = { label: string; value: string; href?: string };

/** High-contrast contact details list for light surfaces. */
export function ContactDetails({ className }: { className?: string }) {
  const { contact, socials } = siteConfig;

  const lines: Line[] = [
    { label: "Call / WhatsApp", value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    ...(contact.email ? [{ label: "Email", value: contact.email, href: `mailto:${contact.email}` }] : []),
    ...(contact.location ? [{ label: "Location", value: contact.location }] : []),
    { label: "Packages", value: contact.servicesSummary },
    { label: "Bookings", value: contact.bookingStatus },
  ];

  return (
    <div className={className}>
      <dl>
        {lines.map((line) => (
          <div key={line.label} className="border-b border-line py-4 first:pt-0">
            <dt className="text-[10px] font-extrabold tracking-[0.22em] text-brand-deep uppercase">{line.label}</dt>
            <dd className="mt-1 text-[15px] font-semibold text-ink">
              {line.href ? (
                <a href={line.href} className="transition-colors hover:text-brand">
                  {line.value}
                </a>
              ) : (
                line.value
              )}
            </dd>
          </div>
        ))}
        {socials.length > 0 ? (
          <div className="border-b border-line py-4">
            <dt className="text-[10px] font-extrabold tracking-[0.22em] text-brand-deep uppercase">Follow</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-[15px] font-semibold">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink transition-colors hover:text-brand"
                >
                  {s.label}
                </a>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}

/** Two crisp quick actions: call and WhatsApp. */
export function QuickContactActions({ className }: { className?: string }) {
  const btn =
    "flex min-h-12 items-center justify-center gap-2.5 rounded-card border border-line-strong bg-canvas px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white";
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      <a href={`tel:${siteConfig.contact.phoneIntl}`} className={btn}>
        <Phone className="size-4 text-brand" aria-hidden />
        Call {siteConfig.contact.phoneDisplay}
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={btn}>
        <MessageCircle className="size-4 text-brand" aria-hidden />
        Chat on WhatsApp
      </a>
    </div>
  );
}
