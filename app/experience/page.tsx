import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ExperiencePageContent } from "@/components/experience/experience-page-content";

export const metadata: Metadata = {
  title: `Experiencia - ${profile.person.name}`,
  description: `Historial completo de experiencia laboral y docente de ${profile.person.name}.`,
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
