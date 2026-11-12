"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "hero-navbar fixed inset-x-0 top-0 z-[1000] transition-all duration-500",
        scrolled
          ? "hero-navbar--scrolled bg-[#090909]/95 backdrop-blur-xl"
          : "bg-[#090909]",
      )}
    >
      <Container size="wide">
        <div className="flex min-h-[92px] items-center justify-between gap-6 lg:min-h-[108px]">
          <div className="flex min-w-0 items-center">
            <Link
              href="/"
              className="flex shrink-0 items-center transition-transform hover:-translate-y-0.5"
              aria-label={`${siteConfig.name} — Home`}
            >
              <Logo sizes="180px" eager alt="" className="h-auto w-[138px] sm:w-[158px] lg:w-[176px]" />
            </Link>
          </div>

          <nav aria-label="Main navigation" className="hidden lg:flex">
            <ul className="flex items-center gap-6 xl:gap-9">
              {siteConfig.nav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative inline-flex items-center py-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 xl:text-[13px]",
                        active
                          ? "text-[#F51420]"
                          : "text-white/65 hover:text-white",
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 -bottom-1 h-px origin-left bg-[#F51420] transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={siteConfig.cta.href}
              className="hero-nav-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5"
            >
              {siteConfig.cta.label}
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with HALO on WhatsApp"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-[#F51420] hover:text-white"
            >
              <MessageCircle className="size-4" aria-hidden />
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </Container>
    </header>
  );
}
