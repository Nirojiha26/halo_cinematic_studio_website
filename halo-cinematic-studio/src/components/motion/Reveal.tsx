"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds — use small values for staggering siblings. */
  delay?: number;
  /** Vertical offset in px. */
  y?: number;
  as?: "div" | "li" | "article" | "figure";
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

/**
 * Gentle fade-and-rise when the element scrolls into view.
 * Replaces the original IntersectionObserver ".reveal" script.
 * Transform is dropped automatically for users who prefer reduced motion
 * (see <MotionConfig reducedMotion="user"> in MotionProvider).
 */
export function Reveal({ children, className, delay = 0, y = 24, as = "div", ...rest }: RevealProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

