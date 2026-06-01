import Image from "next/image";
import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { portfolioImages, siteUrl } from "../data/site";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio - realizacje podłóg EVA",
  path: "/portfolio",
  description:
    "Portfolio EVA Marine: realizacje personalizowanych podłóg EVA, frezowanych pokładów jachtowych i detali wykonanych dla jachtów oraz łodzi.",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/portfolio` },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
            Realizacje pokładów jachtowych EVA
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            Przejrzyj przykłady ostatnich projektów: gotowe pokłady, detale frezowania,
            personalizacje i elementy wykonane na wymiar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <a
                key={image.src}
                href={image.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-sand"
                aria-label={`Otwórz zdjęcie realizacji ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-navy/70 px-4 py-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                  Realizacja {index + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
