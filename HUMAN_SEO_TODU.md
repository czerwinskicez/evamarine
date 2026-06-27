# Human SEO TODO - EVA Marine

Ten plik zawiera zadania SEO poza kodem albo wymagające potwierdzenia danych firmowych. Agent AI nie powinien zgadywać tych informacji.

## Google Search Console

- Dodaj `evamarine.pl` jako Domain property w Google Search Console.
- Zweryfikuj domenę przez rekord DNS TXT.
- Dodaj sitemap:
  - `https://evamarine.pl/sitemap.xml`
- Po deployu sprawdź URL Inspection dla:
  - `https://evamarine.pl/`
  - `https://evamarine.pl/services`
  - `https://evamarine.pl/pricing`
  - `https://evamarine.pl/contact`
  - wszystkich URL-i `/services/[slug]`
- Poproś o indeksowanie po wdrożeniu zmian.
- Sprawdź raport indeksowania:
  - czy strony są indexed,
  - czy canonical wskazuje `https://evamarine.pl`,
  - czy sitemap ma status Success,
  - czy nie ma błędów duplicate canonical.

## Domena I Vercel

- Potwierdź jeden canonical host:
  - rekomendowany: `https://evamarine.pl`
- Ustaw przekierowanie 301 z `https://www.evamarine.pl` na `https://evamarine.pl`.
- Sprawdź SSL po propagacji DNS.
- Sprawdź publicznie:
  - `https://evamarine.pl/robots.txt`
  - `https://evamarine.pl/sitemap.xml`
  - `https://evamarine.pl/opengraph-image`
  - `https://evamarine.pl/twitter-image`

## Google Business Profile

- Utwórz albo uzupełnij profil firmy Google.
- Ustaw identyczne dane NAP jak na stronie:
  - EVA Marine
  - Spytkowo 2F, 11-500 Giżycko
  - +48 452 007 077
  - kontakt@evamarine.pl
- Dodaj adres strony: `https://evamarine.pl`.
- Dodaj zdjęcia realizacji i logo.
- Wybierz najbliższą prawdziwą kategorię działalności.
- Dodaj obszar działania: Mazury, Giżycko, Warmińsko-Mazurskie, Polska.
- Zbieraj opinie od realnych klientów.

## Dane Do Potwierdzenia Przed Dalszym SEO

- Czy firma ma stałe godziny otwarcia? Jeśli tak, podaj je do JSON-LD.
- Czy istnieją oficjalne profile social media? Jeśli tak, podaj URL-e do `sameAs`.
- Czy istnieje publiczny link do Google Business Profile albo Google Maps? Jeśli tak, podaj go zamiast zwykłego linku z koordynatami.
- Czy testimonials/opinie na stronie są zatwierdzone do publikacji?
- Czy cena `1100 zł/m²` i dojazd `3 zł/km` są finalne?
- Czy wszystkie zdjęcia w portfolio mogą być publicznie używane?

## Testy Social Preview

- Wyślij link `https://evamarine.pl` na WhatsApp i sprawdź:
  - miniaturkę,
  - tytuł,
  - opis.
- Sprawdź Facebook Sharing Debugger.
- Sprawdź LinkedIn Post Inspector.
- Jeśli preview pokazuje starą miniaturę, wymuś scrape/debug w narzędziu danej platformy.

## Rich Results I Dane Strukturalne

- Przetestuj w Google Rich Results Test:
  - strona główna,
  - `/services`,
  - przykładowa strona `/services/podlogi-eva`,
  - `/pricing`,
  - `/contact`.
- Sprawdź błędy JSON-LD.
- Ostrzeżenia o brakujących opcjonalnych polach są OK tylko wtedy, gdy danych realnie nie ma.

## Performance

- Uruchom PageSpeed Insights dla:
  - `/`,
  - `/services`,
  - `/portfolio`,
  - `/contact`.
- Sprawdź szczególnie:
  - LCP na zdjęciu hero,
  - CLS,
  - mobile performance,
  - rozmiar obrazów portfolio.

## Dalsze Treści SEO

- Przygotuj lub zatwierdź treść strony "Jak przygotować szablon pokładu".
- Przygotuj krótkie case studies do portfolio:
  - typ jednostki,
  - zakres prac,
  - efekt,
  - zdjęcia.
- Rozważ dodatkowe strony usługowe lub poradnikowe tylko wtedy, gdy mają realną treść:
  - podłogi EVA do jachtów czarterowych,
  - skanowanie pokładu jachtu na Mazurach,
  - zimowanie jachtów w Giżycku.

## Po Wdrożeniu

- Sprawdź `site:evamarine.pl` w Google po kilku dniach.
- Monitoruj zapytania w Search Console:
  - EVA Marine,
  - podłogi EVA Mazury,
  - podłogi EVA Giżycko,
  - pokłady jachtowe EVA,
  - pianka EVA do jachtu.
- Po 2-4 tygodniach sprawdź CTR i title links. Jeśli Google przepisuje tytuły, popraw title/H1 danej strony.
