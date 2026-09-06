import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  id?: string;
  title: string;
  /** Optional subtitle shown below the title. */
  description?: string;
  /** 1-based position, rendered as a "01" style badge next to the title. */
  index?: number;
  children: ReactNode;
}

export function Section({
  title,
  description,
  index,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-20 border-t border-border py-16 md:py-24",
        className
      )}
      {...props}
    >
      <Reveal>
        <div className="mb-8 space-y-3">
          <div className="flex items-baseline gap-4">
            {index !== undefined && (
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                {String(index).padStart(2, "0")}
              </span>
            )}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-2xl text-muted-foreground">{description}</p>
          )}
        </div>
        <div>{children}</div>
      </Reveal>
    </section>
  );
}
