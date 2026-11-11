"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { MusicToggle } from "@/components/shared/MusicToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] h-[72px] bg-white/85 backdrop-blur-md transition-all lg:h-[80px]">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left: Logo & Links together */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${siteConfig.name} — Home`}
          >
            <Logo sizes="120px" eager alt="" className="h-[38px] w-auto sm:h-[42px]" />
          </Link>

          <span className="hidden h-5 w-px bg-[rgba(20,20,20,0.08)] lg:block" aria-hidden />

          {/* Desktop Links directly beside logo */}
          <nav aria-label="Main navigation" className="hidden lg:flex">
            <ul className="flex items-center gap-7">
              {siteConfig.nav.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-1 text-sm font-medium transition-colors duration-200",
                        active
                          ? "text-[#DC3530] font-semibold"
                          : "text-[#5F5A5A] hover:text-[#DC3530]",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-0 -bottom-2 h-[2px] rounded-full bg-[#DC3530]"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right: Music toggle + Book Now CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <MusicToggle />
          <Link
            href={siteConfig.cta.href}
            className="btn-grad inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-medium text-white shadow-sm transition-all"
          >
            {siteConfig.cta.label}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <MusicToggle compact />
          <MobileMenu pathname={pathname} />
        </div>
      </div>

      {/* Inset thin divider line under nav */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-[rgba(20,20,20,0.08)]" />
      </div>
    </header>
  );
}
