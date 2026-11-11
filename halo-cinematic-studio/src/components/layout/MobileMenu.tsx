"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn, isActivePath, pad2 } from "@/lib/utils";
import { useBodyScrollLock, useFocusTrap } from "@/lib/hooks";
import { buttonClasses } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";

const noopSubscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Accessible full-screen mobile/tablet navigation (< 1024px) on bright gallery canvas.
 * Portaled into document.body so it stays independent of header backdrop-filter.
 */
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
        className="grid size-10 place-items-center rounded-card border border-line-strong bg-canvas text-ink transition-colors hover:border-ink hover:text-brand"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.22 } }}
                  transition={{ duration: 0.28 }}
                  className="gallery-backdrop fixed inset-0 z-[1100] flex flex-col overflow-y-auto lg:hidden"
                >
                  <div className="lens-ring -right-40 top-1/3 size-[420px] opacity-70" aria-hidden />

                  <div className="relative flex h-[72px] shrink-0 items-center justify-between border-b border-line bg-canvas/90 px-5 sm:px-8">
                    <Link href="/" onClick={close} className="-ml-1 flex items-center gap-3 rounded-card p-1" aria-label="Home">
                      <Logo sizes="96px" alt="" className="h-[46px] w-auto" />
                      <span className="font-display text-sm font-black tracking-[0.16em] text-ink uppercase">
                        Halo <span className="text-brand">Cinematic</span>
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close menu"
                      className="grid size-10 place-items-center rounded-card border border-line-strong bg-canvas text-ink transition-colors hover:border-brand hover:text-brand"
                    >
                      <X className="size-5" aria-hidden />
                    </button>
                  </div>

                  <nav aria-label="Mobile" className="relative flex flex-1 flex-col px-6 pt-6 pb-10 sm:px-10">
                    <ul className="flex flex-col">
                      {siteConfig.nav.map((item, i) => {
                        const active = isActivePath(pathname, item.href);
                        return (
                          <motion.li
                            key={item.href}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease }}
                            className="border-b border-line"
                          >
                            <Link
                              ref={i === 0 ? firstLinkRef : undefined}
                              href={item.href}
                              onClick={close}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "flex items-baseline gap-4 py-4 font-display text-3xl font-black uppercase tracking-tight transition-colors sm:text-4xl",
                                active ? "text-brand" : "text-ink hover:text-brand",
                              )}
                            >
                              <span className="text-[11px] font-bold tracking-[0.2em] text-subtle">
                                {pad2(i + 1)}
                              </span>
                              {item.label}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.32, duration: 0.35, ease }}
                      className="mt-auto flex flex-col gap-3 pt-10"
                    >
                      <Link
                        href={siteConfig.cta.href}
                        onClick={close}
                        className={buttonClasses({ size: "lg", className: "w-full" })}
                      >
                        {siteConfig.cta.label}
                      </Link>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`tel:${siteConfig.contact.phoneIntl}`}
                          className={buttonClasses({ variant: "outline", className: "w-full px-3" })}
                        >
                          <Phone className="size-4" aria-hidden />
                          Call
                        </a>
                        <a
                          href={whatsappUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClasses({ variant: "outline", className: "w-full px-3" })}
                        >
                          <MessageCircle className="size-4" aria-hidden />
                          WhatsApp
                        </a>
                      </div>
                      <p className="pt-4 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted">
                        {siteConfig.tagline}
                      </p>
                    </motion.div>
                  </nav>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
