import { Hero } from "@/components/profile/hero";
import { AboutSection } from "@/components/profile/about";
import { SkillsSection } from "@/components/profile/skills";
import { ServicesSection } from "@/components/profile/services";
import { CommunitiesSection } from "@/components/profile/communities";
import { TalksSection } from "@/components/profile/talks";
import { ExperienceSection } from "@/components/profile/experience";
import { EducationSection } from "@/components/profile/education";
import { PublicationsSection } from "@/components/profile/publications";
import { ContactSection } from "@/components/profile/contact";
import { SiteNav, type NavItem } from "@/components/shared/site-nav";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import { getCurrentYear } from "@/lib/date";
import Link from "next/link";
import { Icons } from "@/components/shared/icons";
import { BASE_URL } from "@/lib/env";

export const metadata: Metadata = {
  icons: {
    icon: `${profile.person.avatar}`,
  },
  title: `${profile.person.name} - ${profile.person.headline}`,
  description: profile.about?.bio,
  keywords: [
    profile.person.name,
    ...(profile.skills?.map((skill) => skill.text) || []),
  ],
  authors: [{ name: profile.person.name }],
  openGraph: {
    title: `${profile.person.name} - ${profile.person.headline}`,
    description: profile.about?.bio,
    url: BASE_URL,
    siteName: profile.person.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.person.name} - ${profile.person.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.person.name} - ${profile.person.headline}`,
    description: profile.about?.bio,
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
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
      label: "Sobre mí",
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
      id: "services",
      label: "Servicios",
      show: Boolean(profile.services?.length),
      render: (i) => <ServicesSection services={profile.services} index={i} />,
    },
    {
      id: "skills",
      label: "Habilidades",
      show: Boolean(profile.skills?.length),
      render: (i) => <SkillsSection skills={profile.skills} index={i} />,
    },
    {
      id: "talks",
      label: "Charlas y Eventos",
      show: Boolean(profile.talks?.length),
      render: (i) => <TalksSection talks={profile.talks} index={i} />,
    },
    {
      id: "education",
      label: "Estudios",
      show: Boolean(profile.education?.length),
      render: (i) => <EducationSection education={profile.education} index={i} />,
    },
    {
      id: "experience",
      label: "Experiencia",
      show: Boolean(profile.work?.length),
      render: (i) => <ExperienceSection work={profile.work} index={i} />,
    },
    {
      id: "publications",
      label: "Publicaciones",
      show: Boolean(profile.publications?.length),
      render: (i) => (
        <PublicationsSection publications={profile.publications} index={i} />
      ),
    },
    {
      id: "communities",
      label: "Comunidades",
      show: Boolean(profile.communities?.length),
      render: (i) => (
        <CommunitiesSection communities={profile.communities} index={i} />
      ),
    },
    {
      id: "contact",
      label: "Contacto",
      show: Boolean(profile.contact?.length),
      render: (i) => <ContactSection contact={profile.contact} index={i} />,
    },
  ];

  const visible = sections.filter((s) => s.show);

  const navItems: NavItem[] = visible.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <SiteNav name={profile.person.name} items={navItems} />

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
