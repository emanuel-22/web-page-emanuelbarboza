"use client";

import { useEffect, useRef } from "react";

/**
 * A soft glow that follows the cursor across the whole page, à la
 * brittanychiang.com. Mutates the DOM directly via a ref instead of React
 * state so it doesn't trigger a re-render on every mousemove.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${event.clientX}px ${event.clientY}px, rgba(125, 249, 255, 0.06), transparent 80%)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
    />
  );
}
