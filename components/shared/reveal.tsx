import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface RevealProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

/**
 * Fades content in via a pure-CSS animation on paint. Deliberately not
 * JS/IntersectionObserver-based: content must never depend on hydration
 * succeeding to become visible.
 */
export function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <div className={cn("animate-fade-in-up", className)} {...props}>
      {children}
    </div>
  );
}
