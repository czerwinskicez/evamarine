import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
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
    "Profesjonalne podłogi jachtowe z pianki EVA: skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż w Giżycku oraz na Mazurach.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "EVA Marine | Podłogi EVA i pokłady jachtowe Mazury",
    description:
      "Kompleksowe podłogi EVA do jachtów i łodzi: materiał, projekt, wykonanie na wymiar oraz profesjonalny montaż. Giżycko i okolice.",
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
      "Personalizowane pokłady jachtowe EVA, skanowanie, CNC i profesjonalny montaż na Mazurach.",
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
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var analyticsStorage = 'denied';

                try {
                  var storedConsent = window.localStorage.getItem('evaMarineConsent.v1');
                  if (storedConsent) {
                    var parsedConsent = JSON.parse(storedConsent);
                    if (parsedConsent && parsedConsent.version === 1 && typeof parsedConsent.analytics === 'boolean') {
                      analyticsStorage = parsedConsent.analytics ? 'granted' : 'denied';
                    }
                  }
                } catch (error) {}

                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
                window.gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: analyticsStorage
                });
              })();
            `,
          }}
        />
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
