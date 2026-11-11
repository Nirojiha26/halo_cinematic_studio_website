"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";
import { useBodyScrollLock, useFocusTrap } from "@/lib/hooks";
import { Logo } from "@/components/shared/Logo";

const noopSubscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useBodyScrollLock(open);
  useFocusTrap(panelRef, open, close, firstLinkRef);

  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus({ preventScroll: true });
    wasOpen.current = open;
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label="Open menu"
        className="grid size-10 place-items-center rounded-xl border border-[rgba(20,20,20,0.08)] bg-white text-[#141414] shadow-xs transition-colors hover:border-[#D90B17] hover:text-[#D90B17]"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      {isClient
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  ref={panelRef}
                  id={panelId}
                  key="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site navigation"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-[1100] flex flex-col bg-white/98 backdrop-blur-xl lg:hidden"
                >
                  {/* Header bar */}
                  <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[rgba(20,20,20,0.08)] px-5 sm:px-8">
                    <Link href="/" onClick={close} className="flex items-center gap-3" aria-label="Home">
                      <Logo sizes="100px" alt="" className="h-[38px] w-auto" />
                    </Link>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close menu"
                      className="grid size-10 place-items-center rounded-xl border border-[rgba(20,20,20,0.08)] bg-white text-[#141414] transition-colors hover:border-[#D90B17] hover:text-[#D90B17]"
                    >
                      <X className="size-5" aria-hidden />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto px-6 py-8">
                    <p className="chip-eyebrow mb-6">Navigation</p>
                    <nav aria-label="Mobile menu links">
                      <ul className="space-y-4">
                        {siteConfig.nav.map((item, i) => {
                          const active = isActivePath(pathname, item.href);
                          return (
                            <li key={item.href}>
                              <Link
                                ref={i === 0 ? firstLinkRef : undefined}
                                href={item.href}
                                onClick={close}
                                className={cn(
                                  "flex items-center justify-between rounded-xl p-3 text-lg font-medium transition-colors",
                                  active
                                    ? "bg-[#FFF1F2] text-[#D90B17] font-semibold"
                                    : "text-[#141414] hover:bg-[#FFF1F2] hover:text-[#D90B17]",
                                )}
                              >
                                <span>{item.label}</span>
                                {active ? (
                                  <span className="size-2 rounded-full bg-[#D90B17]" />
                                ) : null}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>

                    {/* CTAs */}
                    <div className="mt-8 space-y-3 pt-6 border-t border-[rgba(20,20,20,0.08)]">
                      <Link
                        href={siteConfig.cta.href}
                        onClick={close}
                        className="btn-grad flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium text-white shadow-sm"
                      >
                        {siteConfig.cta.label}
                      </Link>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <a
                          href={`tel:${siteConfig.contact.phoneIntl}`}
                          className="btn-outline flex h-11 items-center justify-center gap-2 rounded-xl text-xs font-medium"
                        >
                          <Phone className="size-3.5" />
                          <span>Call Studio</span>
                        </a>
                        <a
                          href={whatsappUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline flex h-11 items-center justify-center gap-2 rounded-xl text-xs font-medium"
                        >
                          <MessageCircle className="size-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
