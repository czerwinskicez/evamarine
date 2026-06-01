import Link from "next/link";
import { company, navigation } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold">{company.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
            Personalizowane podłogi EVA, pokłady jachtowe, projektowanie CAD/CAM,
            frezowanie CNC i zimowanie jachtów na Mazurach.
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
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} EVA Marine. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
