"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Communities } from "@/schemas/profile";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import { useHorizontalLenis } from "@/lib/use-horizontal-lenis";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface CommunitiesBlockProps {
  communities?: Communities;
}

const DRAG_THRESHOLD = 6;
const AUTO_SCROLL_SPEED = 0.35; // px per frame — muy lento

export function CommunitiesBlock({ communities }: CommunitiesBlockProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.communities;
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

  useHorizontalLenis(scrollerRef);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !communities || communities.length === 0) return;

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
  }, [communities]);

  if (!communities || communities.length === 0) return null;

  // Duplicated once so the auto-scroll can loop seamlessly.
  const loop = [...communities, ...communities];

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
          {loop.map((community, i) => {
            const content = (
              <Card
                className={cn(
                  "group flex h-full w-80 shrink-0 flex-col gap-4 p-5 transition-all duration-300 sm:w-96",
                  community.url && "hover:-translate-y-1 hover:shadow-lg"
                )}
              >
                <CardHeader className="flex-row items-center gap-4 p-0">
                  {community.logo && (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                      <Image
                        src={community.logo}
                        alt={community.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <h3 className="font-semibold leading-tight">
                      {community.name}
                    </h3>
                    <Badge variant="secondary">{community.role}</Badge>
                  </div>
                  {community.url && (
                    <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  )}
                </CardHeader>
                {community.description && (
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">
                      {community.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            );

            return community.url ? (
              <Link
                key={i}
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                tabIndex={i >= communities.length ? -1 : undefined}
                aria-hidden={i >= communities.length || undefined}
              >
                {content}
              </Link>
            ) : (
              <div key={i} className="shrink-0">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
