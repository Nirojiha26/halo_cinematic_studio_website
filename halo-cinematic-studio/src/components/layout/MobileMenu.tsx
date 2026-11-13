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
        className="grid size-10 place-items-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:border-[#E50919] hover:text-[#E50919]"
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
                  className="fixed inset-0 z-[1100] flex flex-col bg-[#090909] text-white lg:hidden"
                >
                  {/* Header bar */}
                  <div className="flex h-[92px] shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-8">
                    <Link href="/" onClick={close} className="flex items-center" aria-label="Home">
                      <Logo sizes="140px" alt="" className="h-auto w-[128px] object-contain" />
                    </Link>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close menu"
                      className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-[#E50919] hover:text-[#E50919]"
                    >
                      <X className="size-5" aria-hidden />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
                    <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E50919]">Navigation</p>
                    <nav aria-label="Mobile menu links">
                      <ul className="space-y-1">
                        {siteConfig.nav.map((item, i) => {
                          const active = isActivePath(pathname, item.href);
                          return (
                            <li key={item.href}>
                              <Link
                                ref={i === 0 ? firstLinkRef : undefined}
                                href={item.href}
                                onClick={close}
                                className={cn(
                                  "flex items-center justify-between border-b border-white/10 px-0 py-4 text-[clamp(1.7rem,7vw,2.7rem)] font-serif transition-colors",
                                  active
                                    ? "text-[#E50919]"
                                    : "text-white hover:text-[#E50919]",
                                )}
                              >
                                <span>{item.label}</span>
                                {active ? (
                                  <span className="size-2 rounded-full bg-[#E50919]" />
                                ) : null}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>

                    {/* CTAs */}
                    <div className="mt-auto space-y-3 border-t border-white/10 pt-6">
                      <Link
                        href={siteConfig.cta.href}
                        onClick={close}
                        className="hero-nav-cta flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold uppercase tracking-[0.14em] text-white"
                      >
                        {siteConfig.cta.label}
                      </Link>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <a
                          href={`tel:${siteConfig.contact.phoneIntl}`}
                          className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/20 text-xs font-medium text-white transition-colors hover:border-[#D90B17]"
                        >
                          <Phone className="size-3.5" />
                          <span>Call</span>
                        </a>
                        <a
                          href="https://www.facebook.com/share/18G3kQ7vff/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/20 text-xs font-medium text-white transition-colors hover:border-[#D90B17]"
                        >
                          <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden>
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>Facebook</span>
                        </a>
                        <a
                          href={whatsappUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/20 text-xs font-medium text-white transition-colors hover:border-[#D90B17]"
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
