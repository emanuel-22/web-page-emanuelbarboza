"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { ExperienceList } from "@/components/experience/experience-list";
import { Work } from "@/schemas/profile";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

interface ExperienceSectionProps {
  work?: Work;
  index?: number;
}

const VISIBLE_COUNT = 2;

export function ExperienceSection({ work, index }: ExperienceSectionProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.experience;

  if (!work || work.length === 0) return null;

  const sorted = [...work].sort((a, b) => b.start.localeCompare(a.start));
  const visible = sorted.slice(0, VISIBLE_COUNT);
  const hasMore = sorted.length > VISIBLE_COUNT;

  return (
    <Section id="experience" index={index} title={t.title}>
      <ExperienceList work={visible} />

      {hasMore && (
        <div className="mt-6 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/experience">{t.viewAll}</Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
