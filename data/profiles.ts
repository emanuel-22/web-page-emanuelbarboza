import type { Locale } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { profileEn } from "@/data/profile.en";

export const profiles: Record<Locale, typeof profile> = {
  es: profile,
  en: profileEn,
};
