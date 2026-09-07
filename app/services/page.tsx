import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ServicesPageContent } from "@/components/services/services-page-content";

const title = "Servicios";
const description = `Desarrollo de software a medida, consultoría y coaching ágil, gestión de proyectos y capacitaciones. Conocé en detalle los servicios que ofrece ${profile.person.name}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} - ${profile.person.name}`,
    description,
    url: "/services",
  },
  twitter: {
    title: `${title} - ${profile.person.name}`,
    description,
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
