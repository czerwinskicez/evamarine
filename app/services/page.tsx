import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { SectionHeader } from "../components/SectionHeader";
import { company, services, siteUrl, staticRoutes } from "../data/site";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "../lib/seo";

const route = staticRoutes.find((item) => item.path === "/services")!;
export const metadata = pageMetadata({
  title: route.title,
  path: "/services",
  description: route.description,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Start", path: "/" },
  { name: "Usługi", path: "/services" },
]);

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
      url: `${siteUrl}/services/${service.slug}`,
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
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPageJsonLd({ path: route.path, name: route.title, description: route.description })} />
      <JsonLd data={servicesJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Usługi</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
            Podłogi EVA od skanowania pokładu po profesjonalny montaż
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            Pomagamy zrealizować kompletny projekt pokładu jachtowego: od skanowania,
            przez indywidualny projekt i wykonanie na wymiar, po wklejenie pianki na jednostce.
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
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={`/services/${service.slug}`} className="btn btn-outline w-fit">
                      Szczegóły usługi
                    </Link>
                    <Link href="/contact" className="btn btn-primary w-fit">
                      Zapytaj o usługę
                    </Link>
                  </div>
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
            description="Projektujemy rozwiązania dla właścicieli jednostek, armatorów i firm czarterowych, które chcą poprawić komfort, bezpieczeństwo oraz wygląd pokładu."
            align="center"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
