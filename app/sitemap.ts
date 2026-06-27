import type { MetadataRoute } from "next";
import { portfolioImages, services, siteUrl, staticRoutes } from "./data/site";

const lastModified = new Date("2026-06-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.82,
    images: [`${siteUrl}${service.image}`],
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images:
        route.path === "/portfolio"
          ? portfolioImages.map((image) => `${siteUrl}${image.src}`)
          : [`${siteUrl}/images/hero.avif`],
    })),
    ...serviceRoutes,
  ];
}
