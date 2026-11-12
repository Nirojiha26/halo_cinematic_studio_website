"use client";

import { AnimatePresence, motion } from "motion/react";
import { Music2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type Status = "off" | "loading" | "on";

/**
 * Header-integrated studio music toggle (avoids overlapping page or footer copy).
 * Audio is created lazily on click; add a licensed MP3 at public/audio/background.mp3.
 */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<Status>("off");
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(t);
  }, [notice]);

  useEffect(() => () => audioRef.current?.pause(), []);

  async function toggle() {
    if (status === "on") {
      audioRef.current?.pause();
      setStatus("off");
      return;
    }
    if (!audioRef.current) {
      const audio = new Audio(siteConfig.backgroundMusic);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }
    setStatus("loading");
    try {
      await audioRef.current.play();
      setStatus("on");
    } catch {
      audioRef.current = null;
      setStatus("off");
      setNotice("Background track not uploaded yet.");
    }
  }

  const on = status === "on";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? "Turn background music off" : "Turn background music on"}
        title="Studio audio"
        disabled={status === "loading"}
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-200 disabled:opacity-60",
          on
            ? "border-[#D90B17] bg-[#D90B17]/15 text-[#F51420]"
            : "border-white/15 bg-transparent text-white/60 hover:border-white/50 hover:text-white",
        )}
      >
        {on ? (
          <span className="flex h-3.5 items-end gap-[2.5px]" aria-hidden>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-[2.5px] rounded-full bg-brand"
                animate={{ height: ["35%", "100%", "50%", "85%", "35%"] }}
                transition={{ duration: 1.05, repeat: Infinity, delay: i * 0.16, ease: "easeInOut" }}
              />
            ))}
          </span>
        ) : status === "loading" ? (
          <Music2 className="size-3.5 animate-pulse" aria-hidden />
        ) : (
          <VolumeX className="size-3.5" aria-hidden />
        )}
        <span className="sr-only">Music: {on ? "On" : "Off"}</span>
      </button>

      <AnimatePresence>
        {notice ? (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full right-0 z-50 mt-2 w-56 rounded-xl border border-[rgba(20,20,20,0.15)] bg-white px-3 py-2 text-xs font-medium text-[#141414] shadow-[0_12px_30px_-10px_rgba(10,10,11,0.2)]"
          >
            {notice}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
