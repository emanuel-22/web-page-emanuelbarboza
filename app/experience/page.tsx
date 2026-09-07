import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ExperiencePageContent } from "@/components/experience/experience-page-content";

const title = "Experiencia";
const description = `Historial completo de experiencia laboral y docente de ${profile.person.name}: desarrollo de software, agilidad, gestión de proyectos e investigación.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: {
    title: `${title} - ${profile.person.name}`,
    description,
    url: "/experience",
  },
  twitter: {
    title: `${title} - ${profile.person.name}`,
    description,
  },
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
