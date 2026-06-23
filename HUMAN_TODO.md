# HUMAN TODO po wdrożeniu kodu

## Vercel i domena
- Podepnij domenę `evamarine.pl` do projektu na Vercel.
- Ustaw przekierowanie z `www.evamarine.pl` na `evamarine.pl` albo odwrotnie, ale wybierz jeden canonical host.
- Sprawdź certyfikat SSL po propagacji DNS.

## Resend i formularz kontaktowy
- Załóż lub skonfiguruj konto Resend.
- Zweryfikuj domenę wysyłkową `evamarine.pl` w Resend.
- Dodaj w Vercel zmienne środowiskowe:
  - `RESEND_API_KEY`
  - `RESEND_FROM`, np. `EVA Marine <kontakt@evamarine.pl>`
  - opcjonalnie `CONTACT_TO`, jeśli odbiorca ma być inny niż `root.woozie@gmail.com`
- Po deployu wyślij testową wiadomość z formularza i potwierdź odbiór.

## Treści i dane firmy
- Zweryfikuj finalnie numer telefonu, adres, e-mail i obszar działania.
- Potwierdź cenę kompleksowej realizacji podłogi EVA: `1100 zł/m²` oraz dojazd `3 zł/km` liczony w obie strony.
- Przejrzyj wszystkie opisy usług i portfolio pod kątem zgodności z ofertą.

## SEO i analityka
- Dodaj domenę do Google Search Console.
- Wyślij sitemapę: `https://evamarine.pl/sitemap.xml`.
- Sprawdź `https://evamarine.pl/robots.txt`.
- Zweryfikuj dane strukturalne w Google Rich Results Test.
- Jeśli ma działać Google Analytics, dodaj w Vercel zmienną `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Po wdrożeniu sprawdź Google Consent Mode w Tag Assistant i zweryfikuj, że analityka uruchamia się dopiero po zgodzie.

## Odbiór wizualny
- Sprawdź stronę na telefonie, tablecie i desktopie.
- Przejrzyj zdjęcia w hero oraz portfolio i podmień każde, które nie powinno być publiczne.
- Wykonaj finalny test formularza, linków telefonu, linków e-mail i nawigacji.
