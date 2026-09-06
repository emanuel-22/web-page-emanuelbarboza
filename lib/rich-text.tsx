import { Fragment, ReactNode } from "react";

/** Parses **bold** and *italic* markdown-style emphasis into React nodes. */
export function renderRichText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((chunk, i) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {chunk.slice(2, -2)}
        </strong>
      );
    }
    if (chunk.startsWith("*") && chunk.endsWith("*")) {
      return (
        <em key={i} className="italic text-foreground">
          {chunk.slice(1, -1)}
        </em>
      );
    }
    return <Fragment key={i}>{chunk}</Fragment>;
  });
}
