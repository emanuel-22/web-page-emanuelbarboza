"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { Talks } from "@/schemas/profile";
import { formatDate } from "@/lib/date";
import { cn } from "@/lib/utils";
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

interface TalksSectionProps {
  talks?: Talks;
  index?: number;
}

const categoryMeta = {
  charla: { label: "Charla", icon: Mic },
  congreso: { label: "Congreso", icon: GraduationCap },
  profesional: { label: "Presentación", icon: Briefcase },
} as const;

const DRAG_THRESHOLD = 6;

export function TalksSection({ talks, index }: TalksSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const suppressClick = useRef(false);
  const drag = useRef({
    pointerId: -1,
    down: false,
    active: false,
    startX: 0,
    startScroll: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  if (!talks || talks.length === 0) return null;

  const sorted = [...talks].sort(
    (a, b) => (b.date ?? "").localeCompare(a.date ?? "")
  );

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
      setIsDragging(true);
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
    setIsDragging(false);
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClick.current = false;
    }
  };

  return (
    <Section
      id="talks"
      index={index}
      title="Charlas y Eventos"
      description="Charlas, talleres, conversatorios y eventos en los que participé como speaker, facilitador u organizador, compartiendo experiencias y aprendizajes."
    >
      <div className="relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-10">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className={cn(
            "flex cursor-grab gap-6 overflow-x-auto pb-4 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden [&_img]:pointer-events-none",
            isDragging ? "snap-none" : "snap-x snap-mandatory"
          )}
        >
          {sorted.map((talk, i) => {
            const meta = categoryMeta[talk.category];
            const Icon = meta.icon;
            const isYoutube = talk.description
              ?.toLowerCase()
              .includes("youtube");

            return (
              <div
                key={i}
                className="flex w-90 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 shadow-xl shadow-black/5 backdrop-blur sm:w-130"
              >
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-muted">
                  {talk.image ? (
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      className="object-cover"
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
                    {meta.label}
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
                    {talk.date && <span>{formatDate(talk.date)}</span>}
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
                      className="mt-auto inline-flex items-center gap-1.5 pt-1 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {isYoutube ? (
                        <Youtube className="h-3.5 w-3.5" />
                      ) : (
                        <ExternalLink className="h-3.5 w-3.5" />
                      )}
                      Ver más
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
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => scrollBy(1)}
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
