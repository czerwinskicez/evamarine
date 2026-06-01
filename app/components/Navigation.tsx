import Image from "next/image";
import Link from "next/link";
import { company, navigation } from "../data/site";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur">
      <nav
        aria-label="Główna nawigacja"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="EVA Marine - strona główna">
          <Image
            src="/images/logo.avif"
            alt=""
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-lg font-semibold tracking-[0.08em] text-navy">
            {company.name}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate hover:text-ocean"
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="btn btn-primary">
            {company.phone}
          </a>
        </div>

        <details className="relative lg:hidden">
          <summary className="btn btn-outline list-none cursor-pointer select-none">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-sm border border-navy/10 bg-white p-3 shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-sm px-3 py-3 text-sm font-medium text-navy hover:bg-sand/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
