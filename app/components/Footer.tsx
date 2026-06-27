import Link from "next/link";
import { CookieSettingsLink } from "./CookieConsent";
import { company, navigation, services } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.65fr_0.9fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">{company.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
            Profesjonalne podłogi jachtowe z pianki EVA: skanowanie pokładu,
            indywidualny projekt, wykonanie na wymiar i montaż na Mazurach.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wood">
            Nawigacja
          </p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wood">
            Usługi
          </p>
          <div className="mt-4 grid gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-white/75 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-wood">
            Kontakt
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/75">
            <p>{company.address}</p>
            <p>{company.region}, {company.country}</p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </p>
            <p>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="hover:text-white">
                {company.phone}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} EVA Marine. Wszystkie prawa zastrzeżone.</p>
          <CookieSettingsLink />
        </div>
      </div>
    </footer>
  );
}
