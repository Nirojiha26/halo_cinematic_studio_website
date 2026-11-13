import { Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";

const defaultWhatsAppMessage = [
  "📸 *HALO CINEMATIC STUDIO*",
  "────────────────────────────",
  "Hello HALO Team! I am visiting your website and would like to enquire about your photography and cinematography services.",
  "",
  "_Sent via halocinematicstudio.com_",
].join("\n");

export function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Cinematic Red circle with official WhatsApp icon) */}
      <div
        className="fixed bottom-6 right-6 z-[900] hidden sm:block"
        style={{ viewTransitionName: "floating-ui" }}
      >
        <a
          href={whatsappUrl(defaultWhatsAppMessage)}
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
      <div className="fixed inset-x-0 bottom-0 z-[900] border-t border-[#D8CFC1]/80 bg-[#FAF7F1]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md sm:hidden">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <a
            href={`tel:${siteConfig.contact.phoneIntl}`}
            className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#171716]/25 bg-white text-[#171716] text-xs font-semibold hover:border-[#D71920] hover:text-[#D71920] transition-colors shadow-xs active:scale-[0.98]"
          >
            <Phone className="size-4 text-[#D71920]" />
            <span>Call Us</span>
          </a>
          <a
            href={whatsappUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#D71920] text-white text-xs font-semibold hover:bg-[#b51219] transition-all shadow-xs active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-4 shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
