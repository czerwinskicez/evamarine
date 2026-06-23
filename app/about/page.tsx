import Image from "next/image";
import { CtaBand } from "../components/CtaBand";
import { JsonLd } from "../components/JsonLd";
import { SectionHeader } from "../components/SectionHeader";
import { differentiators, processSteps, siteUrl } from "../data/site";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "O nas - doświadczenie jachtowe na Mazurach",
  path: "/about",
  description:
    "Poznaj EVA Marine z Giżycka. Ponad 10 lat pracy z jachtami, skanowanie pokładów, projektowanie podłóg EVA, CNC i praktyczne podejście do montażu.",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "O nas", item: `${siteUrl}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">O EVA Marine</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold text-navy md:text-6xl">
              Jachty znamy z codziennej pracy, nie tylko z katalogów
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate">
              Jachtami zajmujemy się od ponad 10 lat. Działamy na Mazurach,
              prowadzimy czarter i opiekujemy się flotą jednostek, dlatego dobrze
              rozumiemy realia eksploatacji łodzi w sezonie, w porcie i podczas intensywnego użytkowania.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate">
              Specjalizujemy się w skanowaniu, projektowaniu, wykonaniu i montażu podłóg z pianki EVA.
              Łączymy CAD/CAM, frezowanie CNC i praktyczną wiedzę żeglarską, aby pokład był
              trwały, bezpieczny, wygodny i dopasowany wizualnie do konkretnej jednostki.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/about1.avif"
              alt="Zespół i realizacja EVA Marine przy jachcie na Mazurach"
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
            eyebrow="Jak działamy"
            title="Od pierwszej rozmowy do gotowej podłogi na jachcie"
            description="Pracujemy transparentnie i etapowo, aby klient znał projekt, koszt i zakres realizacji."
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/images/about2.avif" alt="Skanowanie i pomiary przy pokładzie jachtu" fill sizes="50vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/images/about3.avif" alt="Detal projektu i wykonania podłogi EVA" fill sizes="50vw" className="object-cover" />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Co nas wyróżnia"
              title="Technologia, precyzja i lokalna znajomość Mazur"
              description="Projektujemy pokłady tak, aby dobrze wyglądały, ale przede wszystkim działały w realnych warunkach wodnych."
            />
            <div className="mt-8 grid gap-4">
              {differentiators.map((item) => (
                <div key={item} className="border-l-4 border-ocean bg-white p-5 text-slate shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
