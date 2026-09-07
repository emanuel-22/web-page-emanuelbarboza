import { ProfilePage } from "@/components/profile/profile-page";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/env";

export const metadata: Metadata = {
  // Title, description, canonical, Open Graph and Twitter are inherited from
  // the root layout (app/layout.tsx). Only page-specific extras go here.
  keywords: [
    profile.person.name,
    ...(profile.skills?.map((skill) => skill.text) || []),
  ],
};

function PersonJsonLd() {
  const sameAs = (profile.contact ?? [])
    .filter((c) => c.type === "social" && c.url)
    .map((c) => c.url as string);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.person.name,
    url: BASE_URL,
    image: `${BASE_URL}${profile.person.avatar ?? ""}`,
    jobTitle: profile.person.headline,
    address: profile.person.location
      ? { "@type": "PostalAddress", addressCountry: profile.person.location }
      : undefined,
    knowsAbout: profile.skills?.map((skill) => skill.text),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <PersonJsonLd />
      <ProfilePage />
    </>
  );
}
