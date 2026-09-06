"use client";

import { useEffect, type RefObject } from "react";
import Lenis from "lenis";

/**
 * Adds Lenis's smooth, inertial deceleration to a horizontally-scrolling
 * element — plain vertical wheel/trackpad input scrolls it sideways, same
 * feel as lenis.dev. Doesn't touch touch or pointer-drag scrolling (Lenis
 * only takes over wheel input unless `syncTouch` is enabled).
 */
export function useHorizontalLenis(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lenis = new Lenis({
      wrapper: el,
      content: el,
      orientation: "horizontal",
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [ref]);
}
