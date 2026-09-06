import Link from "next/link";

export interface NavItem {
  id: string;
  label: string;
}

interface SiteNavProps {
  name: string;
  items: NavItem[];
}

export function SiteNav({ name, items }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="text-base font-semibold tracking-tight"
        >
          {name}
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="group relative py-1 transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
