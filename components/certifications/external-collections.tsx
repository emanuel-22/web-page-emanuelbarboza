"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Icons } from "@/components/shared/icons";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import {
  LINKEDIN_LEARNING_COLLECTION_URL,
  PLATZI_PROFILE_URL,
} from "@/lib/external-links";

export function ExternalCollections() {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.formation;

  const LinkedInLearningIcon = Icons.LinkedInLearning;
  const PlatziIcon = Icons.Platzi;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Link
        href={LINKEDIN_LEARNING_COLLECTION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/10">
          <LinkedInLearningIcon className="h-5 w-5 text-[#0A66C2]" />
        </div>
        <div className="flex-1">
          <p className="font-medium">{t.linkedinLearning.label}</p>
          <p className="text-sm text-muted-foreground">
            {t.linkedinLearning.description}
          </p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
      </Link>
      <Link
        href={PLATZI_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#98CA3F]/10">
          <PlatziIcon className="h-5 w-5 text-[#98CA3F]" />
        </div>
        <div className="flex-1">
          <p className="font-medium">{t.platzi.label}</p>
          <p className="text-sm text-muted-foreground">
            {t.platzi.description}
          </p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
      </Link>
    </div>
  );
}
