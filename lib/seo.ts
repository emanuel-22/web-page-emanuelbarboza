import { profile } from "@/data/profile";

/** Canonical site name used across metadata. */
export const SITE_NAME = profile.person.name;

/**
 * Short meta description (~150 chars). Search engines truncate around 160,
 * so keep this tight rather than reusing the full multi-paragraph bio.
 */
export const SITE_DESCRIPTION =
  "Emanuel Barboza — Ingeniero de software especializado en agilidad, gestión de proyectos e inteligencia artificial aplicada. Salta, Argentina.";

/** BCP-47 / Open Graph locale for the site's default language. */
export const SITE_LOCALE = "es_AR";
