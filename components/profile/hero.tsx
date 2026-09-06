"use client";

import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
  () =>
    import("@/components/profile/particles-background").then(
      (m) => m.ParticlesBackground
    ),
  { ssr: false }
);

interface HeroProps {
  name: string;
  headline?: string;
}

export function Hero({ name, headline }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1
            className="animate-fade-in-up text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0ms" }}
          >
            {name}
          </h1>

          {headline && (
            <p
              className="animate-fade-in-up text-lg text-muted-foreground sm:text-xl md:text-2xl"
              style={{ animationDelay: "120ms" }}
            >
              {headline}
            </p>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border/70 p-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
