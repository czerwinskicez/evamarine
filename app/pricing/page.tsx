import Link from "next/link";
import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { faq, pricing, staticRoutes } from "../data/site";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "../lib/seo";

const route = staticRoutes.find((item) => item.path === "/pricing")!;
export const metadata = pageMetadata({
  title: route.title,
  path: "/pricing",
  description: route.description,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Start", path: "/" },
  { name: "Cennik", path: "/pricing" },
]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPageJsonLd({ path: route.path, name: route.title, description: route.description })} />
      <JsonLd data={faqJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Cennik</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
            Przejrzysta wycena podłogi EVA
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            Kompleksowa realizacja kosztuje 1100 zł/m² i obejmuje materiał,
            indywidualny projekt, wykonanie podłogi na wymiar oraz profesjonalny montaż.
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
            personalizacji oraz lokalizacji jednostki. Szczegółową wycenę przygotowujemy po pomiarach
            na jachcie albo na podstawie prawidłowo wykonanych szablonów.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Poproś o wycenę
          </Link>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-3 text-center text-3xl font-semibold text-navy md:text-4xl">
            Najczęstsze pytania o wycenę i realizację
          </h2>
          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
              <details key={item.question} className="card p-6">
                <summary className="cursor-pointer text-lg font-semibold text-navy">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
