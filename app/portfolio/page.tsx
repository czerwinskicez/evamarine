import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { portfolioImages, staticRoutes } from "../data/site";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "../lib/seo";

const route = staticRoutes.find((item) => item.path === "/portfolio")!;
export const metadata = pageMetadata({
  title: route.title,
  path: "/portfolio",
  description: route.description,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Start", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
]);

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPageJsonLd({ path: route.path, name: route.title, description: route.description })} />
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
