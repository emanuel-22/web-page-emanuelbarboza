import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { CertificationsPageContent } from "@/components/certifications/certifications-page-content";

export const metadata: Metadata = {
  title: `Certificaciones - ${profile.person.name}`,
  description: `Listado completo de certificaciones, cursos y reconocimientos de ${profile.person.name}.`,
};

export default function CertificationsPage() {
  return <CertificationsPageContent />;
}
