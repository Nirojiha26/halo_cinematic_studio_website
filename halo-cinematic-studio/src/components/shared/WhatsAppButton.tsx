import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

/**
 * Floating WhatsApp shortcut anchored cleanly at bottom-right.
 * Uses the studio's black-and-white palette with a green icon dot so it stays
 * identifiable without fighting red primary CTAs.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
      className="pointer-events-auto group flex h-12 items-center gap-2.5 rounded-full border border-ink bg-ink pr-4 pl-2.5 text-xs font-bold tracking-wide text-white shadow-[0_12px_28px_-8px_rgba(10,10,11,0.45)] transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-ink-soft sm:h-12"
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#1dbb62] text-white transition-transform duration-300 group-hover:scale-105">
        <MessageCircle className="size-4" aria-hidden />
      </span>
      <span className="hidden sm:inline">WhatsApp Studio</span>
      <span className="sm:hidden">Chat</span>
    </a>
  );
}
