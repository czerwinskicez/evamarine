import type { Metadata } from "next";
import { siteUrl } from "../data/site";

const defaultDescription =
  "EVA Marine wykonuje profesjonalne podłogi jachtowe z pianki EVA: skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż w Giżycku.";

export const socialImage = {
  path: "/opengraph-image",
  alt: "EVA Marine - podłogi EVA i pokłady jachtowe na Mazurach",
  width: 1200,
  height: 630,
};

export function pageMetadata({
  title,
  description = defaultDescription,
  path,
}: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "EVA Marine",
      locale: "pl_PL",
      type: "website",
      images: [{ url: socialImage.path, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.path],
    },
  };
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  path,
  name,
  description = defaultDescription,
}: {
  path: string;
  name: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "EVA Marine",
      url: siteUrl,
    },
    inLanguage: "pl-PL",
  };
}
