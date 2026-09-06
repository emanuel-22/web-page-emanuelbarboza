"use client";

import { Education } from "@/schemas/profile";
import { formatDate } from "@/lib/date";
import { renderRichText } from "@/lib/rich-text";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface EducationBlockProps {
  education?: Education;
}

export function EducationBlock({ education }: EducationBlockProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.education;

  if (!education || education.length === 0) return null;

  return (
    <div className="space-y-8">
      {education.map((edu, i) => {
        const paragraphs = (edu.description ?? "")
          .split(/\n\s*\n/)
          .filter(Boolean);

        return (
          <div
            key={i}
            className="group -mx-3 flex gap-4 rounded-xl px-3 transition-colors duration-300 hover:bg-accent/40 sm:gap-6"
          >
            {edu.logo ? (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : null}
            <div className="flex-1 space-y-1.5 border-b border-border pb-8 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-semibold">{edu.degree}</h4>
                {(edu.start || edu.end !== undefined) && (
                  <p className="text-sm whitespace-nowrap text-muted-foreground">
                    {formatDate(edu.start, locale)} –{" "}
                    {edu.end ? formatDate(edu.end, locale) : t.present}
                  </p>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{edu.school}</p>

              {paragraphs.length > 1 ? (
                <ul className="list-outside list-disc space-y-2 pt-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {paragraphs.map((paragraph, pi) => (
                    <li key={pi}>{renderRichText(paragraph)}</li>
                  ))}
                </ul>
              ) : (
                paragraphs.length === 1 && (
                  <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                    {renderRichText(paragraphs[0])}
                  </p>
                )
              )}

              {edu.url && (
                <Link
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 pt-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t.viewCertificate}
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
