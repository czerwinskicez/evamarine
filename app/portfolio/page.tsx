import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { PortfolioGallery } from "../components/PortfolioGallery";
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
          <PortfolioGallery images={portfolioImages} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
