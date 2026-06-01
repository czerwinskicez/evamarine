import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { Navigation } from "./components/Navigation";
import { company, services, siteUrl } from "./data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EVA Marine | Podłogi EVA i pokłady jachtowe Mazury",
    template: "%s | EVA Marine",
  },
  description:
    "Personalizowane podłogi EVA, pokłady jachtowe, projektowanie CAD/CAM, frezowanie CNC i zimowanie jachtów w Giżycku oraz na Mazurach.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "EVA Marine | Podłogi EVA i pokłady jachtowe Mazury",
    description:
      "Produkcja i montaż personalizowanych podłóg EVA do jachtów i łodzi. Mazury, Giżycko, realizacje w całej Polsce.",
    url: siteUrl,
    siteName: "EVA Marine",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/hero.avif",
        width: 1200,
        height: 630,
        alt: "Personalizowana podłoga EVA na jachcie od EVA Marine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVA Marine | Podłogi EVA i pokłady jachtowe Mazury",
    description:
      "Personalizowane pokłady jachtowe EVA, CNC, montaż i zimowanie jachtów na Mazurach.",
    images: ["/images/hero.avif"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: company.name,
  url: siteUrl,
  image: `${siteUrl}/images/hero.avif`,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Spytkowo 2F",
    postalCode: "11-500",
    addressLocality: "Giżycko",
    addressRegion: company.region,
    addressCountry: "PL",
  },
  areaServed: ["Mazury", "Giżycko", "Warmińsko-Mazurskie", "Polska"],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EVA Marine",
  url: siteUrl,
  inLanguage: "pl-PL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
