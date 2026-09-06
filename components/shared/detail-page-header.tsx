"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LanguageToggle } from "@/components/shared/language-toggle";

interface DetailPageHeaderProps {
  name: string;
  backHref: string;
  backLabel: string;
}

export function DetailPageHeader({
  name,
  backHref,
  backLabel,
}: DetailPageHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="hidden text-base font-semibold tracking-tight sm:block"
          >
            {name}
          </Link>
          <span
            className="hidden h-4 w-px bg-border sm:block"
            aria-hidden="true"
          />
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
        <LanguageToggle />
      </div>
    </header>
  );
}
