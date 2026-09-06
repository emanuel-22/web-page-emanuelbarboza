"use client";

import { cn } from "@/lib/utils";
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection = "up" | "left" | "right";

interface RevealProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  /** Which side the content animates in from. @default "up" */
  direction?: RevealDirection;
  /** Extra delay in ms, for staggering a group of Reveals. */
  delay?: number;
}

const hiddenClasses: Record<RevealDirection, string> = {
  up: "opacity-0 translate-y-4",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
};

/**
 * Reveals content as it scrolls into view — and hides it again as it scrolls
 * out — so it replays whether you're scrolling down or back up, à la
 * lenis.dev. Safe by construction: the element renders fully visible by
 * default (matching SSR output), and `ready`/`revealed` only flip inside the
 * IntersectionObserver's callback — an async notification, never a direct
 * call in the effect body — so content never depends on hydration succeeding
 * to become visible.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // threshold: 0 + a bottom-anchored rootMargin means "reveal as soon as
    // any part enters the lower ~90% of the viewport" — unlike a ratio-based
    // threshold, this doesn't depend on the element's own height, so very
    // tall sections (an entire long Section) behave the same as a small card.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setReady(true);
        setRevealed(reduceMotion || entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        ready && !revealed && hiddenClasses[direction],
        className
      )}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        ...(style as CSSProperties),
      }}
      {...props}
    >
      {children}
    </div>
  );
}
