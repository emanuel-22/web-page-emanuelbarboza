import { Section } from "@/components/shared/section";
import { Services } from "@/schemas/profile";
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
  if (!services || services.length === 0) return null;

  return (
    <Section id="services" index={index} title="Servicios">
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = service.icon ? iconMap[service.icon] : undefined;

          return (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-border/50 bg-card/80 p-5 shadow-xl shadow-black/5 backdrop-blur"
            >
              {Icon && (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
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
          );
        })}
      </div>
    </Section>
  );
}
