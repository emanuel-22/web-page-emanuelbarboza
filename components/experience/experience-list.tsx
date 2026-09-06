"use client";

import { Work } from "@/schemas/profile";
import { formatDate } from "@/lib/date";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import Image from "next/image";

interface ExperienceListProps {
  work: NonNullable<Work>;
}

export function ExperienceList({ work }: ExperienceListProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.experience;

  return (
    <div className="space-y-8">
      {work.map((job, i) => (
        <div
          key={i}
          className="group -mx-3 flex gap-4 rounded-xl border-b border-border px-3 pb-8 transition-colors duration-300 last:border-0 last:pb-0 hover:bg-accent/40 sm:gap-6"
        >
          {job.logo ? (
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
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
                {formatDate(job.start, locale)} –{" "}
                {job.end ? formatDate(job.end, locale) : t.present}
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
  );
}
