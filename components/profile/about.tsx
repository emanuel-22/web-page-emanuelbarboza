"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { About, Contact, Person, CTA } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Icons } from "@/components/shared/icons";
import { renderRichText } from "@/lib/rich-text";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import Link from "next/link";

interface AboutSectionProps {
  about?: About;
  person: Person;
  contact?: Contact;
  cta?: CTA;
  index?: number;
}

export function AboutSection({
  about,
  person,
  contact,
  cta,
  index,
}: AboutSectionProps) {
  const { locale } = useLanguage();

  if (!about) return null;

  const paragraphs = (about.bio ?? "").split(/\n\s*\n/).filter(Boolean);
  const socials = contact?.filter((item) => item.type === "social" && item.url) ?? [];

  return (
    <Section id="about" index={index} title={dictionary[locale].sections.about.title}>
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16">
        <Reveal direction="left" className="space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {renderRichText(paragraph)}
            </p>
          ))}
        </Reveal>

        {person.avatar && (
          <Reveal
            direction="right"
            delay={120}
            className="relative overflow-hidden rounded-2xl border border-border shadow-lg"
          >
            <img
              src={person.avatar}
              alt={person.name}
              className="aspect-3/4 w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </Reveal>
        )}
      </div>

      {about.keywords && about.keywords.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {about.keywords.map((keyword, i) => (
            <Badge key={i} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>
      )}

      {(cta?.length || socials.length > 0) && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {cta?.map((action, i) => (
            <Button
              key={i}
              variant={action.style === "primary" ? "default" : "outline"}
              asChild
            >
              <Link
                href={action.url}
                target={action.url.startsWith("http") ? "_blank" : undefined}
              >
                {action.label}
              </Link>
            </Button>
          ))}

          {socials.map((social) => {
            const Icon = Icons[social.network];
            return (
              <Button key={social.network} variant="ghost" size="icon" asChild>
                <Link href={social.url!} target="_blank" aria-label={social.network}>
                  <Icon className="h-5! w-5!" />
                </Link>
              </Button>
            );
          })}
        </div>
      )}
    </Section>
  );
}
