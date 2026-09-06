import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ServicesPageContent } from "@/components/services/services-page-content";

export const metadata: Metadata = {
  title: `Servicios - ${profile.person.name}`,
  description: `Detalle de los servicios que ofrece ${profile.person.name}.`,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
