import { ContactForm } from "../components/ContactForm";
import { JsonLd } from "../components/JsonLd";
import { company, siteUrl } from "../data/site";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt - darmowa wycena podłogi EVA",
  path: "/contact",
  description:
    "Skontaktuj się z EVA Marine w Giżycku. Wycena podłogi EVA, skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż.",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: `${siteUrl}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="section bg-sand/35">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Kontakt</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold text-navy md:text-6xl">
            Omówmy Twój następny projekt
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            Wypełnij formularz albo zadzwoń, aby omówić podłogę EVA do Twojej jednostki.
            Szczegółową wycenę przygotujemy po pomiarach na jachcie albo na podstawie prawidłowo wykonanych szablonów.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="grid h-fit gap-6">
            <aside className="card p-7">
              <h2 className="text-2xl font-semibold text-navy">Dane kontaktowe</h2>
              <address className="mt-6 space-y-4 not-italic text-slate">
                <p>
                  <span className="block text-sm font-semibold text-navy">Obszar działania</span>
                  {company.region}, {company.country}
                </p>
                <p>
                  <span className="block text-sm font-semibold text-navy">Adres</span>
                  {company.address}
                </p>
                <p>
                  <span className="block text-sm font-semibold text-navy">E-mail</span>
                  <a href={`mailto:${company.email}`} className="text-ocean hover:text-navy">
                    {company.email}
                  </a>
                </p>
                <p>
                  <span className="block text-sm font-semibold text-navy">Telefon</span>
                  <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="text-ocean hover:text-navy">
                    {company.phone}
                  </a>
                </p>
              </address>
            </aside>

            <div className="overflow-hidden rounded-sm border border-navy/10 bg-white shadow-sm">
              <iframe
                title="Mapa dojazdu do EVA Marine w Spytkowie"
                src="https://www.google.com/maps?q=54.06844442379344,21.812461652525865&z=11&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-navy">Formularz kontaktowy</h2>
            <p className="mt-3 text-sm leading-7 text-slate">
              Opisz jacht, lokalizację, oczekiwany zakres prac i preferowany termin realizacji.
              Jeżeli masz już szablony, zaznacz to w wiadomości.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
