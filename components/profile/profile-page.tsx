"use client";

import { Hero } from "@/components/profile/hero";
import { AboutSection } from "@/components/profile/about";
import { SkillsSection } from "@/components/profile/skills";
import { ServicesSection } from "@/components/profile/services";
import { CommunityEventsSection } from "@/components/profile/community-events";
import { ExperienceSection } from "@/components/profile/experience";
import { FormationSection } from "@/components/profile/formation";
import { PublicationsSection } from "@/components/profile/publications";
import { ContactSection } from "@/components/profile/contact";
import { SiteNav, type NavItem } from "@/components/shared/site-nav";
import { profiles } from "@/data/profiles";
import { certifications } from "@/data/certifications";
import { getCurrentYear } from "@/lib/date";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import Link from "next/link";
import { Icons } from "@/components/shared/icons";

export function ProfilePage() {
  const { locale } = useLanguage();
  const profile = profiles[locale];
  const t = dictionary[locale].sections;

  // Ordered like an editorial CV. Each entry renders only when it has content,
  // and the visible position drives the "01 / 02 / …" badge in <Section>.
  const sections: {
    id: string;
    label: string;
    show: boolean;
    render: (index: number) => React.ReactNode;
  }[] = [
    {
      id: "about",
      label: t.about.title,
      show: Boolean(profile.about),
      render: (i) => (
        <AboutSection
          about={profile.about}
          person={profile.person}
          contact={profile.contact}
          cta={profile.cta}
          index={i}
        />
      ),
    },
    {
      id: "experience",
      label: t.experience.title,
      show: Boolean(profile.work?.length),
      render: (i) => <ExperienceSection work={profile.work} index={i} />,
    },
    {
      id: "services",
      label: t.services.title,
      show: Boolean(profile.services?.length),
      render: (i) => <ServicesSection services={profile.services} index={i} />,
    },
    {
      id: "skills",
      label: t.skills.title,
      show: Boolean(profile.skills?.length),
      render: (i) => <SkillsSection skills={profile.skills} index={i} />,
    },
    {
      id: "comunidad-eventos",
      label: t.communityEvents.title,
      show: Boolean(profile.talks?.length || profile.communities?.length),
      render: (i) => (
        <CommunityEventsSection
          talks={profile.talks}
          communities={profile.communities}
          index={i}
        />
      ),
    },
    {
      id: "formacion",
      label: t.formation.title,
      show: Boolean(profile.education?.length || certifications[locale]?.length),
      render: (i) => (
        <FormationSection
          education={profile.education}
          certifications={certifications[locale]}
          index={i}
        />
      ),
    },
    {
      id: "publications",
      label: t.publications.title,
      show: Boolean(profile.publications?.length),
      render: (i) => (
        <PublicationsSection publications={profile.publications} index={i} />
      ),
    },
    {
      id: "contact",
      label: t.contact.title,
      show: Boolean(profile.contact?.length),
      render: (i) => <ContactSection contact={profile.contact} index={i} />,
    },
  ];

  const visible = sections.filter((s) => s.show);

  const navItems: NavItem[] = visible.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <SiteNav name={profile.person.name} items={navItems} />
      <div className="h-16" aria-hidden="true" />

      <Hero name={profile.person.name} headline={profile.person.headline} />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {visible.map((section, i) => (
          <div key={section.id}>{section.render(i + 1)}</div>
        ))}
      </div>

      <footer className="mt-16 border-t border-border py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {getCurrentYear()} {profile.person.name}
          </p>
          <div className="flex items-center gap-4">
            {profile.contact
              ?.filter((c) => c.type === "social" && c.url)
              .map((c) => {
                const Icon = Icons[c.network];
                return (
                  <Link
                    key={c.network}
                    href={c.url!}
                    target="_blank"
                    aria-label={c.network}
                    className="transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
          </div>
        </div>
      </footer>
    </>
  );
}
