"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Services } from "@/schemas/profile";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";
import { Code2, RefreshCw, ClipboardList, GraduationCap, type LucideIcon } from "lucide-react";

interface ServicesSectionProps {
  services?: Services;
  index?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Code2,
  RefreshCw,
  ClipboardList,
  GraduationCap,
};

export function ServicesSection({ services, index }: ServicesSectionProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.services;

  if (!services || services.length === 0) return null;

  return (
    <Section id="services" index={index} title={t.title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = service.icon ? iconMap[service.icon] : undefined;

          return (
            <Reveal
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={Math.floor(i / 2) * 120}
            >
              <div className="group flex gap-4 rounded-2xl border border-border/50 bg-card/80 p-5 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-2xl">
                {Icon && (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div className="space-y-1.5">
                  <h3 className="font-semibold">{service.title}</h3>
                  {service.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/services">{t.viewAll}</Link>
        </Button>
      </div>
    </Section>
  );
}
