"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  const t = dictionary[locale].languageToggle;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      aria-label={t.ariaLabel}
      className="gap-1.5"
    >
      <Languages className="h-4 w-4" />
      {t.switchTo}
    </Button>
  );
}
