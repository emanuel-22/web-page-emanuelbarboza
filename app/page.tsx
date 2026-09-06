import { ProfilePage } from "@/components/profile/profile-page";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/env";

export const metadata: Metadata = {
  icons: {
    icon: `${profile.person.avatar}`,
  },
  title: `${profile.person.name} - ${profile.person.headline}`,
  description: profile.about?.bio,
  keywords: [
    profile.person.name,
    ...(profile.skills?.map((skill) => skill.text) || []),
  ],
  authors: [{ name: profile.person.name }],
  openGraph: {
    title: `${profile.person.name} - ${profile.person.headline}`,
    description: profile.about?.bio,
    url: BASE_URL,
    siteName: profile.person.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.person.name} - ${profile.person.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.person.name} - ${profile.person.headline}`,
    description: profile.about?.bio,
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return <ProfilePage />;
}
