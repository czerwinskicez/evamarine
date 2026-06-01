import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "./components/CtaBand";
import { JsonLd } from "./components/JsonLd";
import { SectionHeader } from "./components/SectionHeader";
import { company, portfolioImages, processSteps, services, testimonials, values } from "./data/site";
import { pageMetadata } from "./lib/seo";

export const metadata = pageMetadata({
  title: "Podłogi EVA i pokłady jachtowe Mazury",
  path: "/",
  description:
    "EVA Marine z Giżycka projektuje, produkuje i montuje personalizowane podłogi EVA do jachtów i łodzi. Pokłady jachtowe, CNC, Mazury i cała Polska.",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: company.name,
      },
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <section className="relative isolate min-h-[calc(100vh-74px)] overflow-hidden bg-navy text-white">
        <Image
          src="/images/hero.avif"
          alt="Pokład jachtu z personalizowaną podłogą EVA wykonaną przez EVA Marine"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy/62" />
        <div className="mx-auto flex min-h-[calc(100vh-74px)] max-w-7xl flex-col justify-end px-5 pb-16 pt-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-wood">Podłogi EVA do jachtów i łodzi</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-tight md:text-7xl">
              Wyjątkowe pokłady idealnie dobrane do Twojego jachtu
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/82">
              Projektujemy, produkujemy i montujemy trwałe podłogi EVA z serca Mazur.
              Łączymy doświadczenie żeglarskie, precyzję CNC i indywidualne podejście do każdej jednostki.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn bg-white text-navy hover:bg-sand">
                Nasze usługi
              </Link>
              <Link href="/portfolio" className="btn border border-white/40 text-white hover:bg-white/10">
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Nasze usługi"
            title="Pełny proces od pomiaru po gotowy pokład"
            description="Obsługujemy produkcję podłóg EVA, projektowanie CAD/CAM, frezowanie CNC, montaż oraz zimowanie jednostek. Dobieramy zakres prac do konkretnej jednostki, sposobu użytkowania i oczekiwanego efektu wizualnego."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href="/services" className="group card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="card p-6">
                <h2 className="text-xl font-semibold text-navy">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand/45">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Jak pracujemy"
            title="Transparentny proces i precyzja na każdym etapie"
            description="Każdy projekt prowadzimy tak, aby klient znał zakres, koszt i efekt jeszcze przed rozpoczęciem produkcji."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="card p-6">
                <p className="text-sm font-semibold text-ocean">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Portfolio"
              title="Realizacje pokładów EVA"
              description="Zobacz przykłady wykonanych podłóg i detali, które pokazują dopasowanie do różnych jednostek."
            />
            <Link href="/portfolio" className="btn btn-outline">
              Całe portfolio
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {portfolioImages.slice(0, 3).map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Opinie klientów"
            title="Sprawdzone na wodzie, nie tylko na ekranie"
            description="Klienci doceniają jasną komunikację, szybkie tempo realizacji i trwały efekt końcowy."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="rounded-sm border border-white/15 bg-white/8 p-6">
                <blockquote className="text-sm leading-7 text-white/82">„{testimonial.quote}”</blockquote>
                <figcaption className="mt-5 font-semibold text-wood">{testimonial.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
