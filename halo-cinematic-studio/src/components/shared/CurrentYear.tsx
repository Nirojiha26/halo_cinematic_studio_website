"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Renders the current year without reading `new Date()` during prerendering
 * (required when Next.js Cache Components is enabled).
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    noopSubscribe,
    () => String(new Date().getFullYear()),
    () => "2026",
  );
  return <span suppressHydrationWarning>{year}</span>;
}
