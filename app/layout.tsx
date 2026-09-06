import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { CursorSpotlight } from "@/components/shared/cursor-spotlight";
import { LanguageProvider } from "@/components/shared/language-provider";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/env";
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
