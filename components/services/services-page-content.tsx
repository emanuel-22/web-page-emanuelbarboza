"use client";

import Image from "next/image";
import { Code2, RefreshCw, ClipboardList, GraduationCap, Check, type LucideIcon } from "lucide-react";
import { DetailPageHeader } from "@/components/shared/detail-page-header";
import { profiles } from "@/data/profiles";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  RefreshCw,
  ClipboardList,
  GraduationCap,
};

export function ServicesPageContent() {
  const { locale } = useLanguage();
  const profile = profiles[locale];
  const t = dictionary[locale].servicesPage;
  const services = profile.services ?? [];

  return (
    <>
      <DetailPageHeader
        name={profile.person.name}
        backHref="/#services"
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

        <div className="space-y-12">
          {services.map((service, i) => {
            const Icon = service.icon ? iconMap[service.icon] : undefined;
            const imageOnRight = i % 2 === 1;

            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card/80 shadow-xl shadow-black/5 backdrop-blur"
              >
                <div
                  className={`grid gap-0 md:grid-cols-2 ${
                    imageOnRight ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {service.image && (
                    <div className="relative h-56 w-full md:h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-4 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <h2 className="text-xl font-semibold tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    {service.description && (
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    )}

                    {service.details && service.details.length > 0 && (
                      <ul className="space-y-2">
                        {service.details.map((detail, di) => (
                          <li
                            key={di}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
