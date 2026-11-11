"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";

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
        "fixed inset-x-0 top-0 z-[1000] transition-all duration-300",
        scrolled
          ? "bg-white/88 backdrop-blur-md shadow-[0_4px_24px_rgba(20,20,20,0.04)]"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-[80px] items-center justify-between lg:h-[88px]">
          {/* Left: Logo + Nav Links aligned cleanly side-by-side */}
          <div className="flex items-center gap-10 xl:gap-12">
            <Link
              href="/"
              className="flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label={`${siteConfig.name} — Home`}
            >
              <Logo sizes="128px" eager alt="" className="h-auto w-[104px] sm:w-[120px]" />
            </Link>

            <nav aria-label="Main navigation" className="hidden lg:flex">
              <ul className="flex items-center gap-8">
                {siteConfig.nav.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <li key={item.href} className="flex items-center">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative inline-flex items-center py-1.5 text-[15px] font-medium leading-none transition-colors duration-200",
                          active
                            ? "font-semibold text-[#D90B17]"
                            : "text-[#141414]/85 hover:text-[#D90B17]",
                        )}
                      >
                        <span>{item.label}</span>
                        {active ? (
                          <span
                            aria-hidden
                            className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-[#D90B17]"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right: Gradient Book Now CTA only */}
          <div className="hidden items-center lg:flex">
            <Link
              href={siteConfig.cta.href}
              className="btn-grad inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-medium text-white shadow-[0_8px_20px_rgba(217,11,23,0.28)] transition-all hover:shadow-[0_10px_24px_rgba(217,11,23,0.38)]"
            >
              {siteConfig.cta.label}
            </Link>
          </div>

          {/* Mobile Menu Trigger (No sound icon) */}
          <div className="flex items-center lg:hidden">
            <MobileMenu pathname={pathname} />
          </div>
        </div>

        {/* Inset container-width divider line matching Lime reference */}
        <div
          aria-hidden
          className={cn(
            "h-px w-full transition-colors duration-300",
            scrolled ? "bg-transparent" : "bg-[rgba(20,20,20,0.08)]",
          )}
        />
      </Container>
    </header>
  );
}
