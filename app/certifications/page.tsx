import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { CertificationsPageContent } from "@/components/certifications/certifications-page-content";

const title = "Certificaciones";
const description = `Listado completo de certificaciones, cursos y reconocimientos de ${profile.person.name} en agilidad, desarrollo de software, IA y liderazgo.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: `${title} - ${profile.person.name}`,
    description,
    url: "/certifications",
  },
  twitter: {
    title: `${title} - ${profile.person.name}`,
    description,
  },
};

export default function CertificationsPage() {
  return <CertificationsPageContent />;
}
