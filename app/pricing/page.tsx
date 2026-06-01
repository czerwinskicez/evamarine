import Link from "next/link";
import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { pricing, siteUrl } from "../data/site";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Cennik - wycena podłóg EVA i zimowania jachtów",
  path: "/pricing",
  description:
    "Cennik EVA Marine: szablony podłóg EVA, produkcja pokładów jachtowych za m², zimowanie jachtów oraz indywidualna wycena projektów na Mazurach.",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Cennik", item: `${siteUrl}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Cennik</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
            Przejrzysta wycena podłogi EVA i usług jachtowych
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            Każdy projekt wyceniamy indywidualnie, uwzględniając wielkość pokładu,
            złożoność wzoru, personalizację, pomiary i sposób montażu.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {pricing.map((item) => (
            <article
              key={item.title}
              className={item.highlighted ? "card border-ocean bg-sky/55 p-6" : "card p-6"}
            >
              <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-5 text-3xl font-semibold text-ocean">{item.price}</p>
              <p className="mt-5 text-sm leading-7 text-slate">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl px-5 text-center lg:px-8">
          <p className="text-sm leading-7 text-slate">
            Finalny koszt zależy od powierzchni, liczby elementów, wzoru, kolorystyki,
            personalizacji oraz lokalizacji jednostki. Przed rozpoczęciem prac otrzymasz szczegółową ofertę.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Poproś o wycenę
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
