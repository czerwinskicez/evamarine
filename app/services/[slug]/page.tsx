import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "../../components/CtaBand";
import { JsonLd } from "../../components/JsonLd";
import { SectionHeader } from "../../components/SectionHeader";
import { company, processSteps, services, siteUrl } from "../../data/site";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "../../lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return pageMetadata({
    title: `${service.title} - EVA Marine Mazury`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const path = `/services/${service.slug}`;
  const title = `${service.title} - EVA Marine Mazury`;
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Start", path: "/" },
    { name: "Usługi", path: "/services" },
    { name: service.title, path },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: service.title,
    description: service.description,
    url: `${siteUrl}${path}`,
    image: `${siteUrl}${service.image}`,
    areaServed: ["Mazury", "Giżycko", "Warmińsko-Mazurskie", "Polska"],
    provider: {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: company.name,
      url: siteUrl,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Spytkowo 2F",
        postalCode: "11-500",
        addressLocality: "Giżycko",
        addressRegion: company.region,
        addressCountry: "PL",
      },
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={webPageJsonLd({ path, name: title, description: service.description })} />
      <JsonLd data={serviceJsonLd} />

      <section className="section bg-sand/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">Usługa EVA Marine</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Poproś o wycenę
              </Link>
              <Link href="/portfolio" className="btn btn-outline bg-white">
                Zobacz realizacje
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-sm">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Proces"
            title="Jak prowadzimy realizację"
            description="Każdy projekt prowadzimy etapowo: od rozmowy i pomiarów, przez projekt, po wykonanie oraz montaż na jednostce."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="card p-6">
                <p className="text-sm font-semibold text-ocean">0{index + 1}</p>
                <h2 className="mt-4 text-xl font-semibold text-navy">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Powiązane usługi"
            title="Zobacz też inne etapy pracy nad pokładem"
            description="Kompleksowa realizacja podłogi EVA zwykle łączy pomiar, projekt, frezowanie i profesjonalny montaż."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="group card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
