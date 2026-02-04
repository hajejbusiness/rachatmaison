import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import MobileStickyBar from "@/components/MobileStickyBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rachatmaison.ca'),
  title: "Vendez Votre Propriété Rapidement au Québec | RachatMaison.ca",
  description: "Recevez une offre d'achat cash en 24h pour votre maison, condo ou plex. Aucune commission, aucune visite, aucun ménage. On achète tel quel.",
  keywords: "vendre maison rapide, achat propriété Québec, vente sans courtier, rachat immobilier, vente rapide maison, succession, divorce, reprise de finance",
  authors: [{ name: "RachatMaison.ca" }],
  creator: "RachatMaison.ca",
  publisher: "RachatMaison.ca",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vendez Votre Propriété Rapidement au Québec | RachatMaison.ca",
    description: "Recevez une offre d'achat cash en 24h. On achète tel quel.",
    url: 'https://rachatmaison.ca',
    siteName: 'RachatMaison.ca',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RachatMaison.ca - Rachat immobilier rapide au Québec',
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vendez Votre Propriété Rapidement au Québec | RachatMaison.ca",
    description: "Sans commission. Sans stress. Offre en 24h.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1A4D5C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
