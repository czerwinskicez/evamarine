import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { JsonLd } from "./components/JsonLd";
import { Navigation } from "./components/Navigation";
import { company, services, siteUrl } from "./data/site";
import { socialImage } from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "EVA Marine",
  category: "marine services",
  title: {
    default: "EVA Marine | Podłogi EVA i pokłady jachtowe Mazury",
    template: "%s | EVA Marine",
  },
  description:
    "Profesjonalne podłogi jachtowe z pianki EVA: skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż w Giżycku oraz na Mazurach.",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "podłogi EVA Mazury",
    "podłogi EVA Giżycko",
    "pokłady jachtowe EVA",
    "pianka EVA do jachtu",
    "skanowanie pokładu jachtu",
    "frezowanie CNC pianki EVA",
    "montaż podłogi EVA",
    "zimowanie jachtów Giżycko",
  ],
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
        url: socialImage.path,
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVA Marine | Podłogi EVA i pokłady jachtowe Mazury",
    description:
      "Personalizowane pokłady jachtowe EVA, skanowanie, CNC i profesjonalny montaż na Mazurach.",
    images: [socialImage.path],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}#localbusiness`,
  name: company.name,
  legalName: company.legalName,
  url: siteUrl,
  image: `${siteUrl}/images/hero.avif`,
  logo: `${siteUrl}/images/logo.avif`,
  email: company.email,
  telephone: company.phone,
  priceRange: "od 199 zł/m²",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Spytkowo 2F",
    postalCode: "11-500",
    addressLocality: "Giżycko",
    addressRegion: company.region,
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.06844442379344,
    longitude: 21.812461652525865,
  },
  hasMap: "https://www.google.com/maps?q=54.06844442379344,21.812461652525865",
  areaServed: ["Mazury", "Giżycko", "Warmińsko-Mazurskie", "Polska"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: company.phone,
    email: company.email,
    areaServed: "PL",
    availableLanguage: ["pl"],
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    url: `${siteUrl}/services/${service.slug}`,
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
  "@id": `${siteUrl}#website`,
  name: "EVA Marine",
  alternateName: "EVA Marine Giżycko",
  url: siteUrl,
  inLanguage: "pl-PL",
  publisher: {
    "@id": `${siteUrl}#localbusiness`,
  },
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
                var adStorage = 'denied';
                var adUserData = 'denied';
                var adPersonalization = 'denied';

                try {
                  var storedConsent = window.localStorage.getItem('evaMarineConsent.v2');
                  if (storedConsent) {
                    var parsedConsent = JSON.parse(storedConsent);
                    if (parsedConsent && parsedConsent.version === 2) {
                      analyticsStorage = parsedConsent.analyticsStorage ? 'granted' : 'denied';
                      adStorage = parsedConsent.adStorage ? 'granted' : 'denied';
                      adUserData = parsedConsent.adUserData ? 'granted' : 'denied';
                      adPersonalization = parsedConsent.adPersonalization ? 'granted' : 'denied';
                    }
                  } else {
                    var legacyConsent = window.localStorage.getItem('evaMarineConsent.v1');
                    if (legacyConsent) {
                      var parsedLegacyConsent = JSON.parse(legacyConsent);
                      if (parsedLegacyConsent && parsedLegacyConsent.version === 1 && typeof parsedLegacyConsent.analytics === 'boolean') {
                        analyticsStorage = parsedLegacyConsent.analytics ? 'granted' : 'denied';
                      }
                    }
                  }
                } catch (error) {}

                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
                window.gtag('consent', 'default', {
                  ad_storage: adStorage,
                  ad_user_data: adUserData,
                  ad_personalization: adPersonalization,
                  analytics_storage: analyticsStorage,
                  wait_for_update: 500
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
