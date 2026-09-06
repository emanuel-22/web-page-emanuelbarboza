"use client";

import { Section } from "@/components/shared/section";
import { TalksBlock } from "@/components/profile/talks";
import { CommunitiesBlock } from "@/components/profile/communities";
import type { Talks, Communities } from "@/schemas/profile";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

interface CommunityEventsSectionProps {
  talks?: Talks;
  communities?: Communities;
  index?: number;
}

export function CommunityEventsSection({
  talks,
  communities,
  index,
}: CommunityEventsSectionProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections;

  const hasTalks = Boolean(talks?.length);
  const hasCommunities = Boolean(communities?.length);

  if (!hasTalks && !hasCommunities) return null;

  return (
    <Section id="comunidad-eventos" index={index} title={t.communityEvents.title}>
      <div className="space-y-16">
        {hasTalks && (
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-tight">
              {t.talks.title}
            </h3>
            <TalksBlock talks={talks} />
          </div>
        )}

        {hasCommunities && (
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-tight">
              {t.communities.title}
            </h3>
            <CommunitiesBlock communities={communities} />
          </div>
        )}
      </div>
    </Section>
  );
}
