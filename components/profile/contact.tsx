"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { Contact } from "@/schemas/profile";
import { Icons } from "@/components/shared/icons";
import Link from "next/link";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { captialize } from "@/lib/string";
import { useLanguage } from "@/components/shared/language-provider";
import { dictionary } from "@/lib/i18n";

interface ContactSectionProps {
  contact?: Contact;
  index?: number;
}

export function ContactSection({ contact, index }: ContactSectionProps) {
  const { locale } = useLanguage();
  const t = dictionary[locale].sections.contact;

  if (!contact || contact.length === 0) return null;

  const handleCopy = (network: string, text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t.copiedToClipboard(captialize(network)));
  };

  return (
    <Section
      id="contact"
      index={index}
      title={t.title}
      description={t.description}
    >
      <div className="mx-auto grid max-w-md gap-3">
        {contact
          .filter((item) => item.type === "primary")
          .map((item, index) => {
            const Icon = Icons[item.network];
            return (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg border"
              >
                {item.url ? (
                  <Button
                    variant="outline"
                    className="group h-auto flex-1 justify-start gap-3 border-0 p-4"
                    asChild
                  >
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-8! w-8! shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex flex-col items-start gap-0.5 overflow-hidden">
                        <span className="text-xs font-medium text-muted-foreground">
                          {captialize(item.network)}
                        </span>
                        <span className="truncate text-sm font-semibold">
                          {item.username || item.url}
                        </span>
                      </div>
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="group h-auto flex-1 justify-between border-0 p-4 cursor-pointer"
                    onClick={() => handleCopy(item.network, item.username!)}
                  >
                    <div className="flex gap-3">
                      <Icon className="h-8! w-8! shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex flex-col items-start gap-0.5 overflow-hidden">
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.network}
                        </span>
                        <span className="truncate text-sm font-semibold">
                          {item.username}
                        </span>
                      </div>
                    </div>
                    <Copy className="h-5 w-5" />
                  </Button>
                )}
              </div>
            );
          })}
      </div>
    </Section>
  );
}
