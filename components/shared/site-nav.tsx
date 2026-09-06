"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "@/components/shared/language-toggle";

export interface NavItem {
  id: string;
  label: string;
}

interface SiteNavProps {
  name: string;
  items: NavItem[];
}

export function SiteNav({ name, items }: SiteNavProps) {
  const [activeId, setActiveId] = useState<string | null>(
    items[0]?.id ?? null
  );

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveId((prev) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length === 0) return prev;
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          return topmost.target.id;
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#top"
          className="text-base font-semibold tracking-tight"
        >
          {name}
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative py-1 transition-colors hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px bg-foreground transition-transform duration-300 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
