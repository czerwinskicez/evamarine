import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { SectionHeader } from "../components/SectionHeader";
import { company, services, siteUrl } from "../data/site";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Usługi - podłogi EVA, CAD/CAM, CNC i montaż",
  path: "/services",
  description:
    "Usługi EVA Marine: produkcja podłóg EVA, pomiary, szablony, projektowanie CAD/CAM, frezowanie CNC, montaż pokładów i zimowanie jachtów na Mazurach.",
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Mazury, Giżycko, Polska",
      provider: {
        "@type": "ProfessionalService",
        name: company.name,
        url: siteUrl,
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Usługi</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
            Podłogi EVA i obsługa jachtów od projektu po montaż
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            Pomagamy zrealizować kompletny projekt pokładu jachtowego: od pomiarów,
            przez dokumentację CAD/CAM i frezowanie CNC, po gotowy montaż na jednostce.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="grid overflow-hidden rounded-sm border border-navy/10 bg-white shadow-sm lg:grid-cols-2"
                id={service.slug}
              >
                <div className={index % 2 ? "relative aspect-[4/3] lg:order-2" : "relative aspect-[4/3]"}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="eyebrow">0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold text-navy">{service.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate">{service.description}</p>
                  <Link href="/contact" className="btn btn-outline mt-7 w-fit">
                    Zapytaj o usługę
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Dla kogo"
            title="Jachty prywatne, czarterowe i łodzie użytkowane sezonowo"
            description="Projektujemy rozwiązania dla właścicieli jednostek, armatorów, firm czarterowych i osób przygotowujących jacht do sezonu na Mazurach."
            align="center"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
