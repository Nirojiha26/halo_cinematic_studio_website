"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { MusicToggle } from "@/components/shared/MusicToggle";
import { buttonClasses } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="fixed inset-x-0 top-0 z-[1000] h-[72px] border-b border-line bg-canvas/92 backdrop-blur-md lg:h-[82px]"
    >
      <div className="mx-auto flex h-full w-full max-w-[92rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group -ml-1 flex shrink-0 items-center gap-3 rounded-card p-1 outline-none focus-visible:outline-2 focus-visible:outline-brand"
          aria-label={`${siteConfig.name} — Home`}
        >
          <Logo sizes="96px" eager alt="" className="h-[46px] w-auto sm:h-[52px]" />
          <span className="hidden h-7 w-px bg-line sm:block" aria-hidden />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-black tracking-[0.16em] text-ink uppercase">
              Halo <span className="text-brand">Cinematic</span>
            </span>
            <span className="mt-1 text-[9px] font-bold tracking-[0.26em] text-muted uppercase">
              Creative Studio
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-8">
          <ul className="flex items-center gap-6 xl:gap-8">
            {siteConfig.nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-xs font-bold uppercase tracking-[0.13em] outline-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-brand after:transition-transform after:duration-300",
                      active
                        ? "text-brand after:scale-x-100"
                        : "text-ink/80 after:scale-x-0 hover:text-brand hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5 border-l border-line pl-5">
            <MusicToggle />
            <Link href={siteConfig.cta.href} className={buttonClasses({ className: "h-10 px-5" })}>
              {siteConfig.cta.label}
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <MusicToggle compact />
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
