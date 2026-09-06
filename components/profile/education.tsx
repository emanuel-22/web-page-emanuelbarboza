import { Education } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { formatDate } from "@/lib/date";
import { renderRichText } from "@/lib/rich-text";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface EducationSectionProps {
  education?: Education;
  index?: number;
}

export function EducationSection({ education, index }: EducationSectionProps) {
  if (!education || education.length === 0) return null;

  return (
    <Section id="education" index={index} title="Estudios">
      <div className="space-y-8">
        {education.map((edu, i) => {
          const paragraphs = (edu.description ?? "")
            .split(/\n\s*\n/)
            .filter(Boolean);

          return (
            <div key={i} className="flex gap-4 sm:gap-6">
              {edu.logo ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-white sm:h-20 sm:w-20">
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
                  <h3 className="font-semibold">{edu.degree}</h3>
                  {(edu.start || edu.end !== undefined) && (
                    <p className="text-sm whitespace-nowrap text-muted-foreground">
                      {formatDate(edu.start)} –{" "}
                      {edu.end ? formatDate(edu.end) : "Actualidad"}
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
                    Ver certificado
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
