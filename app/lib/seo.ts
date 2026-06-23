import type { Metadata } from "next";
import { siteUrl } from "../data/site";

const defaultDescription =
  "EVA Marine wykonuje profesjonalne podłogi jachtowe z pianki EVA: skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż w Giżycku.";

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
      title,
      description,
      images: ["/images/hero.avif"],
    },
  };
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}
