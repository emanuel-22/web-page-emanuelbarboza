"use client";

import { DetailPageHeader } from "@/components/shared/detail-page-header";
import { ExperienceList } from "@/components/experience/experience-list";
import { profiles } from "@/data/profiles";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

export function ExperiencePageContent() {
  const { locale } = useLanguage();
  const profile = profiles[locale];
  const t = dictionary[locale].experiencePage;

  const sorted = [...(profile.work ?? [])].sort((a, b) =>
    b.start.localeCompare(a.start)
  );

  return (
    <>
      <DetailPageHeader
        name={profile.person.name}
        backHref="/#experience"
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

        <ExperienceList work={sorted} />
      </div>
    </>
  );
}
