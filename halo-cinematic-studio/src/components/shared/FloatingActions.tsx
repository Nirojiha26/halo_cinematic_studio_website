import { Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";

export function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Cinematic Red circle with official WhatsApp icon) */}
      <div
        className="fixed bottom-6 right-6 z-[900] hidden sm:block"
        style={{ viewTransitionName: "floating-ui" }}
      >
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative flex size-14 items-center justify-center rounded-full bg-[#D71920] text-white shadow-[0_12px_28px_rgba(215,25,32,0.42)] transition-all duration-300 hover:scale-108 hover:bg-[#B31218] hover:shadow-[0_16px_36px_rgba(215,25,32,0.55)]"
        >
          <WhatsAppIcon className="size-7 transition-transform duration-300 group-hover:scale-110" />
          <span className="sr-only">WhatsApp Enquiry</span>
        </a>
      </div>

      {/* Mobile Bottom Glass Bar [Call] [WhatsApp] */}
      <div className="fixed inset-x-0 bottom-0 z-[900] border-t border-[rgba(20,20,20,0.08)] bg-white/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneIntl}`}
            className="btn-outline flex h-11 items-center justify-center gap-2 rounded-xl text-xs font-semibold"
          >
            <Phone className="size-4" />
            <span>Call Us</span>
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad flex h-11 items-center justify-center gap-2 rounded-xl text-xs font-semibold text-white"
          >
            <WhatsAppIcon className="size-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
