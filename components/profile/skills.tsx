"use client";

import { Skills, SkillCategory } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Icons } from "@/components/shared/icons";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

interface SkillsSectionProps {
  skills?: Skills;
  index?: number;
}

const CATEGORY_ORDER: SkillCategory[] = [
  "language",
  "framework",
  "database",
  "tool",
];

export function SkillsSection({ skills, index }: SkillsSectionProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.skills;

  if (!skills || skills.length === 0) return null;

  return (
    <Section
      id="skills"
      index={index}
      title={t.title}
      description={t.description}
    >
      <div className="space-y-10">
        {CATEGORY_ORDER.map((category, ci) => {
          const items = skills.filter((skill) => skill.category === category);
          if (items.length === 0) return null;

          return (
            <Reveal key={category} delay={ci * 80}>
              <h3 className="mb-4 text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {t.categories[category]}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill, i) => {
                  const Icon = skill.icon ? Icons[skill.icon] : null;
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md"
                    >
                      {Icon && <Icon className="h-6 w-6 text-muted-foreground" />}
                      {skill.text}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
