"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Talks } from "@/schemas/profile";
import { formatDate } from "@/lib/date";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import { useHorizontalLenis } from "@/lib/use-horizontal-lenis";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mic,
  GraduationCap,
  Briefcase,
  Youtube,
} from "lucide-react";

interface TalksBlockProps {
  talks?: Talks;
}

const categoryIcons = {
  charla: Mic,
  congreso: GraduationCap,
  profesional: Briefcase,
} as const;

const DRAG_THRESHOLD = 6;
const AUTO_SCROLL_SPEED = 0.35; // px per frame — muy lento

export function TalksBlock({ talks }: TalksBlockProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const suppressClick = useRef(false);
  const paused = useRef(false);
  const drag = useRef({
    pointerId: -1,
    down: false,
    active: false,
    startX: 0,
    startScroll: 0,
  });
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.talks;

  useHorizontalLenis(scrollerRef);

  const sorted = [...(talks ?? [])].sort(
    (a, b) => (b.date ?? "").localeCompare(a.date ?? "")
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || sorted.length === 0) return;

    // Track position as a float outside the DOM: assigning fractional
    // sub-pixel values to scrollLeft gets rounded away by the browser, so
    // reading it back each frame would round progress down to zero forever.
    let position = el.scrollLeft;
    let frameId = 0;

    const step = () => {
      if (!paused.current && !drag.current.active) {
        // A manual drag (or anything else) may have moved the real
        // scrollLeft since our last frame — resync before advancing.
        if (Math.abs(el.scrollLeft - Math.round(position)) > 1) {
          position = el.scrollLeft;
        }

        const half = el.scrollWidth / 2;
        position += AUTO_SCROLL_SPEED;
        if (position >= half) position -= half;
        el.scrollLeft = position;
      } else {
        position = el.scrollLeft;
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [sorted.length]);

  if (!talks || talks.length === 0) return null;

  // Duplicated once so the auto-scroll can loop seamlessly.
  const loop = [...sorted, ...sorted];

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: dir * (scrollerRef.current.clientWidth * 0.85),
      behavior: "smooth",
    });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = {
      pointerId: e.pointerId,
      down: true,
      active: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;

    if (!drag.current.active) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      // Movement crossed the threshold: this is a drag, not a click. Only
      // now do we capture the pointer, so a plain click never loses its
      // native click-through to the link/button underneath.
      drag.current.active = true;
      try {
        el.setPointerCapture(drag.current.pointerId);
      } catch {
        // Some environments reject capture for synthetic pointer ids; dragging still works without it.
      }
    }

    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    if (drag.current.active) suppressClick.current = true;
    drag.current.down = false;
    drag.current.active = false;
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClick.current = false;
    }
  };

  return (
    <div>
      <p className="mb-8 max-w-2xl text-muted-foreground">{t.description}</p>
      <div className="relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-10">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={() => {
            endDrag();
            paused.current = false;
          }}
          onPointerCancel={endDrag}
          onPointerEnter={() => {
            paused.current = true;
          }}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className="flex cursor-grab gap-6 overflow-x-auto pb-4 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden [&_img]:pointer-events-none"
        >
          {loop.map((talk, i) => {
            const isDuplicate = i >= sorted.length;
            const categoryLabel = t.categories[talk.category];
            const Icon = categoryIcons[talk.category];
            const isYoutube = talk.description
              ?.toLowerCase()
              .includes("youtube");

            return (
              <div
                key={i}
                aria-hidden={isDuplicate || undefined}
                className="group flex w-90 shrink-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:border-border hover:shadow-2xl sm:w-130"
              >
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-muted">
                  {talk.image ? (
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <Icon className="h-8 w-8 text-primary/30" />
                    </div>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute left-3 top-3 gap-1"
                  >
                    <Icon className="h-3 w-3" />
                    {categoryLabel}
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                  <div className="space-y-0.5">
                    <h3 className="text-sm leading-snug font-semibold">
                      {talk.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {talk.event}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    {talk.date && <span>{formatDate(talk.date, locale)}</span>}
                    {talk.role && (
                      <>
                        <span>·</span>
                        <span>{talk.role}</span>
                      </>
                    )}
                  </div>

                  {talk.description && (
                    <p className="line-clamp-4 text-xs leading-relaxed text-muted-foreground">
                      {talk.description}
                    </p>
                  )}

                  {talk.url && (
                    <Link
                      href={talk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isDuplicate ? -1 : undefined}
                      className="mt-auto inline-flex items-center gap-1.5 pt-1 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {isYoutube ? (
                        <Youtube className="h-3.5 w-3.5" />
                      ) : (
                        <ExternalLink className="h-3.5 w-3.5" />
                      )}
                      {t.viewMore}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 flex justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => scrollBy(-1)}
            aria-label={t.prevAria}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => scrollBy(1)}
            aria-label={t.nextAria}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
