"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalCollections } from "@/components/certifications/external-collections";
import type { Certification } from "@/schemas/profile";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import { formatDate } from "@/lib/date";

interface CertificationsBlockProps {
  certifications?: Certification[];
}

export function CertificationsBlock({
  certifications,
}: CertificationsBlockProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.formation;
  const categories = dictionary[locale].certificationCategories;

  if (!certifications || certifications.length === 0) return null;

  const curated = certifications.filter((c) => c.curated);

  return (
    <div className="space-y-6">
      <p className="max-w-2xl text-muted-foreground">
        {t.certificationsIntro}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {curated.map((cert, i) => {
          const href = cert.url ?? (cert.file ? encodeURI(cert.file) : undefined);
          const content = (
            <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border/50 bg-card/80 p-5 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-2xl">
              <Badge variant="secondary" className="w-fit">
                {categories[cert.category]}
              </Badge>
              <h4 className="font-semibold leading-snug">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-2 text-xs text-muted-foreground">
                {cert.date && <span>{formatDate(cert.date, locale)}</span>}
                {href && (
                  <span className="inline-flex items-center gap-1 transition-colors group-hover:text-foreground">
                    {t.viewCertificate}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </div>
          );

          return href ? (
            <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
              {content}
            </Link>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>

      <ExternalCollections />

      <div className="flex justify-center pt-2">
        <Button variant="outline" asChild>
          <Link href="/certifications">{t.viewAllCertifications}</Link>
        </Button>
      </div>
    </div>
  );
}
