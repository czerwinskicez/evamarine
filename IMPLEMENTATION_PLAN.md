# Plan wdrożenia witryny evamarine

## Cel
Stworzyć prostą, nowoczesną witrynę Next.js opartą na istniejących treściach z katalogu `legacy` oraz zasobach graficznych z `legacy/images`. Strona ma mieć 6 podstron, dobraną paletę kolorów w stylistyce marinistycznej oraz pełną optymalizację pod SEO.

## Zakres
- Strona główna `/`
- O nas `/about`
- Usługi `/services`
- Portfolio `/portfolio`
- Cennik `/pricing`
- Kontakt `/contact`
- Layout i nawigacja
- Optymalizacja SEO i performance
- Responsywność mobile/tablet/desktop
- Obsługa assetów graficznych z `legacy/images`

## Paleta kolorów
- Navy: `#1a3a52`
- Sky Blue: `#4a90c4`
- Beż piaskowy: `#e8dcc8`
- Ciepły beż/drewno: `#d4b8a0`
- Off-white: `#f9f7f4`
- Szary akcent: `#6b7280`

## Struktura treści

### Strona główna
- Hero z tytułem, krótkim opisem i CTA „Darmowa wycena"
- Kluczowe wartości: jakość, szybki czas realizacji, indywidualne podejście
- Referencje / opinie klientów
- CTA do formularza kontaktowego
- Nawigacja do podstron

### O nas
- Historia i doświadczenie: 10+ lat, Mazury, pasja do jachtów
- Jak działamy: projekt, pomiar, montaż, obsługa klienta
- Co nas wyróżnia: technologia, praktyczne podejście, lokalny charakter

### Usługi
- Produkcja podłóg EVA
- Pomiary i szablony
- Projektowanie CAD/CAM
- Frezowanie CNC
- Montaż podłogi
- Zimowanie jachtów

### Portfolio
- Galeria realizacji ze wszystkich dostępnych zdjęć
- Układ siatki 2-3 kolumny
- Podgląd lub lightbox na kliknięcie

### Cennik
- Przejrzyste karty cenowe
- Wycena na podstawie indywidualnych danych
- Wyróżnione kluczowe usługi i ceny

### Kontakt
- Formularz kontaktowy z polami: imię, nazwisko, email, telefon, adres, temat, wiadomość
- Dane firmy: email, telefon, adres, obszar działania
- Ewentualnie mapa lokalizacji

## SEO i treść

### Cele SEO
- Ustalić meta title i description dla każdej strony
- Dopasować opisy do lokalnych słów kluczowych: Mazury, Giżycko, jacht, podłogi EVA, pokłady jachtowe
- Zapewnić semanticzne nagłówki: jedno H1 na stronie, logiczne H2/H3
- Użyć altów dla wszystkich obrazów
- Wdrożyć wewnętrzne linkowanie między stronami
- Dbać o szybkość ładowania i optymalizację obrazów

### Elementy SEO
- `metadata` w `app/layout.tsx` i w każdej stronie route
- `og:title`, `og:description`, `og:image` dla udostępniania społecznościowego
- Canonical URL dla każdej podstrony
- Użycie lokalnych słów kluczowych w nagłówkach i akapitach
- Minimalne i semantyczne HTML + aria-labels dla elementów nawigacji
- Możliwość dodania `sitemap.xml` i `robots.txt` jako rozszerzenie

## Architektura

### Konfiguracja
- `tailwind.config.ts`: custom colors, utility classes
- `app/globals.css`: globalne style, typografia, layout
- `next.config.ts`: obsługa obrazów i optymalizacja

### Struktura aplikacji
- `app/layout.tsx`: wspólny layout, fonty i body
- `app/components/`: komponenty reusable
  - `Navigation`
  - `Footer`
  - `Hero`
  - `ValueProposition`
  - `ServiceCard`
  - `PortfolioGrid`
  - `Testimonial`
  - `PricingCard`
  - `ContactForm`
- `app/data/`: dane treściowe
  - `services.ts` / `services.json`
  - `testimonials.ts`
  - `pricing.ts`
  - `portfolio.ts`

### Routing
- `app/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/portfolio/page.tsx`
- `app/pricing/page.tsx`
- `app/contact/page.tsx`

## Zasoby graficzne
- Przenieść obrazy z `legacy/images` do `public/images`
- Użyć `next/image` do optymalizacji i lazy loadingu
- Wybrać główne zdjęcie hero oraz zdjęcia do sekcji „O nas” i „Usługi”
- Galeria portfolio powinna korzystać ze wszystkich obrazów

## Fazy wdrożenia

### Faza 1: Przygotowanie i konfiguracja
1. Zaktualizować metadane i layout w `app/layout.tsx`
2. Skonfigurować Tailwind custom colors i globalne style
3. Utworzyć strukturę danych i komponentów
4. Skopiować obrazy do `public/images`

### Faza 2: Layout i struktura
1. Stworzyć nagłówek z nawigacją i stopkę
2. Zaimplementować wspólny layout aplikacji
3. Zapewnić responsywność w podstawowym układzie

### Faza 3: Strony i treść
1. Strona główna z hero, wartościami, referencjami i CTA
2. Podstrona O nas z etapami działania i wartościami
3. Podstrona Usługi z kartami ofertowymi
4. Podstrona Portfolio z galerią obrazów
5. Podstrona Cennik z jasno zorganizowanymi cenami
6. Podstrona Kontakt z formularzem i danymi kontaktowymi

### Faza 4: SEO i optymalizacja treści
1. Dostosować title / description / og tags dla każdej strony
2. Zapewnić semantyczne nagłówki i alt teksty do obrazów
3. Ustawić wewnętrzne linkowanie pomiędzy sekcjami i stronami
4. Wdrożyć optymalizację obrazów i lazy loading
5. Przejrzeć i dopracować copy pod lokalne SEO

### Faza 5: Testy i weryfikacja
1. Sprawdzić działanie wszystkich 6 stron
2. Przetestować responsywność na mobile, tablet i desktop
3. Zweryfikować, czy wszystkie obrazy ładują się poprawnie
4. Upewnić się, że nawigacja, CTA i formularz działają bez błędów
5. Ocenić page speed i poprawić LCP/CLS, jeśli potrzeba

## Kryteria sukcesu
- Wszystkie podstrony działają i renderują poprawnie
- Strona wygląda i działa responsywnie
- Treść i nagłówki są zoptymalizowane pod SEO
- Meta dane są ustawione dla każdej podstrony
- Obrazy są zoptymalizowane i lazy-loaded
- Nawigacja jest czytelna i spójna
- Wizualnie design jest zgodny z marine/beżowo-drewnianą estetyką

## Dodatkowe uwagi
- Możliwe rozszerzenia później: `sitemap.xml`, `robots.txt`, obsługa formularza z backendem, animacje interakcyjne.
- Formularz kontaktowy może pozostać klient-side w pierwszej wersji, z opcją dodania wysyłki mailowej później.
- SEO może zostać rozbudowane o struktury danych JSON-LD w kolejnym etapie.
