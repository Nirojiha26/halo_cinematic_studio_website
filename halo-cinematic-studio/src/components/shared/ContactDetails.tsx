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
          <div key={line.label} className="border-b border-[rgba(20,20,20,0.06)] py-3.5 first:pt-0">
            <dt className="text-xs font-semibold text-[#DC3530]">{line.label}</dt>
            <dd className="mt-1 text-sm font-medium text-[#141414]">
              {line.href ? (
                <a href={line.href} className="transition-colors hover:text-[#DC3530]">
                  {line.value}
                </a>
              ) : (
                line.value
              )}
            </dd>
          </div>
        ))}
        {socials.length > 0 ? (
          <div className="border-b border-[rgba(20,20,20,0.06)] py-3.5">
            <dt className="text-xs font-semibold text-[#DC3530]">Social Media</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141414] transition-colors hover:text-[#DC3530]"
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
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      <a
        href={`tel:${siteConfig.contact.phoneIntl}`}
        className="btn-outline flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium"
      >
        <Phone className="size-4 text-[#DC3530]" aria-hidden />
        <span>Call {siteConfig.contact.phoneDisplay}</span>
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-grad flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium text-white shadow-xs"
      >
        <MessageCircle className="size-4" aria-hidden />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
