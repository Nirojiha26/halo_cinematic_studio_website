import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";

/**
 * Compact, aesthetic Direct Studio Channels card with dedicated icons
 * for every channel, branded social icons, and compact quick actions.
 */
export function StudioChannelsCard({ className }: { className?: string }) {
  const { contact } = siteConfig;

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#D8CFC1] bg-[#FAF7F1] p-5 sm:p-6 shadow-xs",
        className,
      )}
    >
      {/* Eyebrow & Status */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#D71920] bg-[#D71920]/10 px-2.5 py-0.5 border border-[#D71920]/20 rounded-none">
          Direct Studio Channels
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E7D32]">
          <span className="size-1.5 rounded-full bg-[#2E7D32] animate-pulse" />
          Open Daily
        </span>
      </div>

      {/* Studio Header */}
      <h2
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        className="text-xl sm:text-2xl font-normal text-[#171716] tracking-tight leading-snug"
      >
        {siteConfig.name}
      </h2>
      <p className="mt-1 text-xs text-[#716B64] leading-relaxed">
        {siteConfig.motto}
      </p>

      {/* Aesthetic Compact Channels with Icons */}
      <div className="mt-4 space-y-1.5 border-t border-[#D8CFC1]/70 pt-3">
        {/* Direct Phone */}
        <a
          href={`tel:${contact.phoneIntl}`}
          className="group flex items-center gap-3 p-2 rounded-xl transition-all duration-200 hover:bg-[#EEE9DF]/70"
        >
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#EEE9DF] text-[#D71920] border border-[#D8CFC1]/80 transition-colors group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920]">
            <Phone className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#716B64]">
              Direct Call
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#171716] group-hover:text-[#D71920] transition-colors truncate">
              {contact.phoneDisplay}
            </p>
          </div>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl("Hello HALO CINEMATIC STUDIO, I'd like to enquire about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 p-2 rounded-xl transition-all duration-200 hover:bg-[#25D366]/10"
        >
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 transition-colors group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366]">
            <WhatsAppIcon className="size-4 shrink-0" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#716B64]">
              WhatsApp Direct
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#171716] group-hover:text-[#25D366] transition-colors truncate">
              {contact.phoneDisplay}
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="group flex items-center gap-3 p-2 rounded-xl transition-all duration-200 hover:bg-[#EEE9DF]/70"
        >
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#EEE9DF] text-[#D71920] border border-[#D8CFC1]/80 transition-colors group-hover:bg-[#D71920] group-hover:text-white group-hover:border-[#D71920]">
            <Mail className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#716B64]">
              Studio Email
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#171716] group-hover:text-[#D71920] transition-colors truncate">
              {contact.email}
            </p>
          </div>
        </a>

        {/* Location */}
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#EEE9DF] text-[#D71920] border border-[#D8CFC1]/80">
            <MapPin className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#716B64]">
              Studio Location
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#171716] truncate">
              {contact.location}
            </p>
          </div>
        </div>

        {/* Consultation Hours */}
        <div className="flex items-center gap-3 p-2 rounded-xl">
          <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#EEE9DF] text-[#D71920] border border-[#D8CFC1]/80">
            <Clock className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#716B64]">
              Consultations
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#171716] truncate">
              Open Daily • 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Channels with Aesthetic Branded Icons */}
      <div className="mt-3.5 border-t border-[#D8CFC1]/70 pt-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#716B64] mb-2">
          Follow Our Work
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/share/18G3kQ7vff/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="grid size-8.5 place-items-center rounded-lg bg-[#EEE9DF] border border-[#D8CFC1] text-[#171716] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200 active:scale-95"
          >
            <FacebookIcon className="size-4 shrink-0" />
          </a>
          <a
            href="https://www.instagram.com/halo_cinematic_studio?psln=MWZ5cnQ4eGNmcGowaQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="grid size-8.5 place-items-center rounded-lg bg-[#EEE9DF] border border-[#D8CFC1] text-[#171716] hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-200 active:scale-95"
          >
            <InstagramIcon className="size-4 shrink-0" />
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vb9T6yaAYlUMkyyujH1P"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Channel"
            title="WhatsApp Channel"
            className="grid size-8.5 place-items-center rounded-lg bg-[#EEE9DF] border border-[#D8CFC1] text-[#171716] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200 active:scale-95"
          >
            <WhatsAppIcon className="size-4 shrink-0" />
          </a>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#D8CFC1]/70 pt-3.5">
        <a
          href={`tel:${contact.phoneIntl}`}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-[#D8CFC1] bg-white text-[#171716] text-xs font-semibold hover:border-[#D71920] hover:text-[#D71920] transition-colors shadow-2xs active:scale-95"
        >
          <Phone className="size-3.5 text-[#D71920]" />
          <span>Call Studio</span>
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#D71920] text-white text-xs font-semibold hover:bg-[#b5141a] transition-colors shadow-2xs active:scale-95"
        >
          <MessageCircle className="size-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

/** Legacy aliases preserved for compatibility */
export function ContactDetails({ className }: { className?: string }) {
  return <StudioChannelsCard className={className} />;
}

export function QuickContactActions() {
  return null;
}
