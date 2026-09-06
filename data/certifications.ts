import type { Locale } from "@/lib/i18n";
import { certificationsEs } from "@/data/certifications.es";
import { certificationsEn } from "@/data/certifications.en";

export const certifications: Record<Locale, typeof certificationsEs> = {
  es: certificationsEs,
  en: certificationsEn,
};
