"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { DetailPageHeader } from "@/components/shared/detail-page-header";
import { ExternalCollections } from "@/components/certifications/external-collections";
import { certifications } from "@/data/certifications";
import { profiles } from "@/data/profiles";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import { formatDate } from "@/lib/date";
import type { CertificationCategory } from "@/schemas/profile";

const CATEGORY_ORDER: CertificationCategory[] = [
  "agile-management",
  "software-development",
  "ai-data",
  "leadership",
];

export function CertificationsPageContent() {
  const { locale } = useLanguage();
  const profile = profiles[locale];
  const list = certifications[locale];
  const t = dictionary[locale].certificationsPage;
  const categories = dictionary[locale].certificationCategories;

  return (
    <>
      <DetailPageHeader
        name={profile.person.name}
        backHref="/#formacion"
        backLabel={t.backLink}
      />
      <div className="h-16" aria-hidden="true" />

      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <div className="mb-12 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.title}
          </h1>
          <p className="max-w-2xl text-muted-foreground">{t.intro}</p>
        </div>

        <div className="mb-14">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            {t.otherPlatforms}
          </h2>
          <ExternalCollections />
        </div>

        <div className="space-y-14">
          {CATEGORY_ORDER.map((category) => {
            const items = list.filter((c) => c.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="mb-6 text-xl font-semibold tracking-tight">
                  {categories[category]}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((cert, i) => {
                    const href =
                      cert.url ?? (cert.file ? encodeURI(cert.file) : undefined);
                    const content = (
                      <div className="flex h-full flex-col gap-2 rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md">
                        <h3 className="font-semibold leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                        <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-muted-foreground">
                          {cert.date && (
                            <span>{formatDate(cert.date, locale)}</span>
                          )}
                          {href && <ExternalLink className="h-3.5 w-3.5" />}
                        </div>
                      </div>
                    );

                    return href ? (
                      <Link
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div key={i}>{content}</div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
