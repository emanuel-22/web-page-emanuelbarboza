"use client";

import Link from "next/link";
import { Icons } from "@/components/shared/icons";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5493874659911&text&type=phone_number&app_absent=0";

export function WhatsAppButton() {
  const Icon = Icons.WhatsApp;
  const { locale } = useLanguage();

  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dictionary[locale].whatsapp.ariaLabel}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <Icon className="h-7 w-7" />
    </Link>
  );
}
