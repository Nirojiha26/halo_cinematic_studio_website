import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/shared/FloatingActions";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Logo } from "@/components/shared/Logo";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  variable: "--font-archivo",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Capture • Create • Inspire`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "wedding photography",
    "wedding cinematography",
    "documentary filming",
    "music videos",
    "video editing",
    "custom photo frames",
    "Sri Lanka",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Capture • Create • Inspire`,
    description: siteConfig.description,
    images: [{ url: siteConfig.logo.src, width: siteConfig.logo.width, height: siteConfig.logo.height }],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {/* Intro loader — pure CSS white slate, fades out on its own */}
        <div
          aria-hidden
          className="intro-loader pointer-events-none fixed inset-0 z-[9999] grid place-items-center bg-canvas"
        >
          <div className="text-center">
            <Logo sizes="300px" alt="" eager className="mx-auto w-[min(300px,70vw)]" />
            <div className="intro-loader-bar mx-auto my-5 h-[2px] w-44 overflow-hidden bg-line" />
            <small className="text-[11px] font-bold tracking-[0.3em] text-muted uppercase">{siteConfig.tagline}</small>
          </div>
        </div>

        <a
          href="#main"
          className="sr-only z-[2000] rounded-card bg-brand px-4 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>

        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
