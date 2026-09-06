"use client";

import { Section } from "@/components/shared/section";
import { EducationBlock } from "@/components/profile/education";
import { CertificationsBlock } from "@/components/profile/certifications-block";
import type { Education, Certification } from "@/schemas/profile";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

interface FormationSectionProps {
  education?: Education;
  certifications?: Certification[];
  index?: number;
}

export function FormationSection({
  education,
  certifications,
  index,
}: FormationSectionProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.formation;

  const hasEducation = Boolean(education?.length);
  const hasCertifications = Boolean(certifications?.length);

  if (!hasEducation && !hasCertifications) return null;

  return (
    <Section id="formacion" index={index} title={t.title}>
      <div className="space-y-16">
        {hasEducation && (
          <div>
            <h3 className="mb-8 text-xl font-semibold tracking-tight">
              {t.studiesHeading}
            </h3>
            <EducationBlock education={education} />
          </div>
        )}

        {hasCertifications && (
          <div>
            <h3 className="mb-8 text-xl font-semibold tracking-tight">
              {t.certificationsHeading}
            </h3>
            <CertificationsBlock certifications={certifications} />
          </div>
        )}
      </div>
    </Section>
  );
}
