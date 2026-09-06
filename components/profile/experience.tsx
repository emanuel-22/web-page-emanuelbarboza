"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { Work } from "@/schemas/profile";
import { formatDate } from "@/lib/date";
import Image from "next/image";

interface ExperienceSectionProps {
  work?: Work;
  index?: number;
}

const VISIBLE_COUNT = 3;

export function ExperienceSection({ work, index }: ExperienceSectionProps) {
  const [expanded, setExpanded] = useState(false);

  if (!work || work.length === 0) return null;

  const sorted = [...work].sort((a, b) => b.start.localeCompare(a.start));
  const visible = expanded ? sorted : sorted.slice(0, VISIBLE_COUNT);
  const hasMore = sorted.length > VISIBLE_COUNT;

  return (
    <Section id="experience" index={index} title="Experiencia">
      <div className="space-y-8">
        {visible.map((job, i) => (
          <div
            key={i}
            className="flex gap-4 border-b border-border pb-8 last:border-0 last:pb-0 sm:gap-6"
          >
            {job.logo ? (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-white sm:h-20 sm:w-20">
                <Image
                  src={job.logo}
                  alt={job.org}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : null}
            <div className="flex-1 space-y-3">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-muted-foreground">{job.org}</p>
                  {job.location && (
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  )}
                </div>
                <p className="text-sm whitespace-nowrap text-muted-foreground">
                  {formatDate(job.start)} –{" "}
                  {job.end ? formatDate(job.end) : "Actualidad"}
                </p>
              </div>

              {job.summary && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>
              )}

              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <Button variant="outline" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Ver menos" : "Ver más experiencia"}
          </Button>
        </div>
      )}
    </Section>
  );
}
