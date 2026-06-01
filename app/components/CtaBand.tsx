import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-ocean text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Darmowa konsultacja
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Omówmy Twój projekt pokładu</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Wyślij zdjęcia, wymiary lub opisz jednostkę. Przygotujemy kolejne kroki i wstępną wycenę.
          </p>
        </div>
        <Link href="/contact" className="btn bg-white text-navy hover:bg-sand">
          Przejdź do kontaktu
        </Link>
      </div>
    </section>
  );
}
