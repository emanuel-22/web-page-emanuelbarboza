import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { CursorSpotlight } from "@/components/shared/cursor-spotlight";
import { LanguageProvider } from "@/components/shared/language-provider";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/env";
import { SITE_NAME, SITE_DESCRIPTION, SITE_LOCALE } from "@/lib/seo";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} - ${profile.person.headline}`,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: profile.person.avatar,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    url: "/",
    title: `${SITE_NAME} - ${profile.person.headline}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${profile.person.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - ${profile.person.headline}`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <LanguageProvider>
          <CursorSpotlight />
          <main className="flex min-h-screen flex-col">{children}</main>
          <WhatsAppButton />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
