# SEO Plan - EVA Marine

Dokument jest przeznaczony dla człowieka i dla agenta AI pracującego w tym repo. Celem jest wyłącznie poprawa SEO, widoczności w Google, jakości podglądów linków w komunikatorach oraz uporządkowanie technicznej prezentacji strony.

## Status Realizacji W Repo

- Wykonano: generowany obraz Open Graph `app/opengraph-image.tsx`.
- Wykonano: generowany obraz Twitter `app/twitter-image.tsx`.
- Wykonano: favicon jest obsługiwany przez Next file convention jako `app/favicon.ico`.
- Wykonano: wspólne helpery SEO w `app/lib/seo.ts`.
- Wykonano: spójne metadata i WebPage JSON-LD dla głównych stron.
- Wykonano: BreadcrumbList JSON-LD ujednolicony helperem.
- Wykonano: bogatszy LocalBusiness/WebSite JSON-LD w `app/layout.tsx`.
- Wykonano: osobne strony usługowe `/services/[slug]`.
- Wykonano: sitemap z trasami usługowymi i obrazami.
- Wykonano: robots z canonical hostem.
- Wykonano: stopka linkuje wszystkie strony usługowe.
- Do wykonania przez człowieka: zadania z `HUMAN_SEO_TODU.md`.

## Stan Obecny

- Projekt działa na Next.js App Router.
- Główne trasy: `/`, `/about`, `/services`, `/portfolio`, `/pricing`, `/contact`.
- Dane firmy i treści są w `app/data/site.ts`.
- Metadata stron są ustawiane w `app/layout.tsx` oraz przez `pageMetadata()` z `app/lib/seo.ts`.
- Istnieje `app/sitemap.ts`.
- Istnieje `app/robots.ts`.
- Istnieje JSON-LD dla LocalBusiness/WebSite w `app/layout.tsx`, ItemList usług na stronie głównej i usługach, BreadcrumbList na części stron oraz FAQPage na cenniku.
- Open Graph i Twitter metadata używają generowanych obrazów PNG przez `app/opengraph-image.tsx` i `app/twitter-image.tsx`.
- Strona używa `app/favicon.ico` przez Next file convention.
- Sitelinks w Google nie da się ręcznie wymusić. Google generuje je automatycznie na podstawie struktury, tytułów, nagłówków i linkowania wewnętrznego.

## Priorytety

1. Wysoki: uporządkować canonical host, metadata, social preview image, sitemap, robots i Search Console.
2. Wysoki: poprawić strukturę linkowania wewnętrznego pod profesjonalne sitelinks.
3. Średni: rozbudować JSON-LD i dane lokalnej firmy.
4. Średni: dopracować treści pod konkretne frazy lokalne i usługowe.
5. Średni: zweryfikować Core Web Vitals, obrazy i indeksowalność.
6. Niski: rozważyć dodatkowe landing pages dopiero po uporządkowaniu podstaw.

## Zadania Dla Agenta AI

### 1. Audyt Technicznego SEO

- Sprawdzić wygenerowany HTML każdej trasy pod kątem:
  - jednego H1 na stronę,
  - unikalnego title,
  - unikalnego description,
  - canonical URL,
  - `og:title`, `og:description`, `og:image`,
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`,
  - poprawnego `lang="pl"`,
  - braku `noindex`,
  - braku przypadkowych pustych metadata.
- Sprawdzić, czy wszystkie publiczne trasy są w sitemap.
- Sprawdzić, czy robots wskazuje właściwy sitemap.
- Sprawdzić, czy canonicale używają jednego hosta: `https://evamarine.pl`.
- Sprawdzić, czy `www.evamarine.pl` przekierowuje 301 na `https://evamarine.pl` albo odwrotnie. Wybrać jeden canonical host i konsekwentnie go stosować.
- Kryterium akceptacji: lista tras ma kompletne i unikalne metadata, sitemap i robots są spójne z canonical hostem.

### 2. Social Preview Dla WhatsApp, Facebook, Messenger, LinkedIn

- Używać generowanego obrazu preview:
  - `app/opengraph-image.tsx`,
  - `app/twitter-image.tsx`,
  - rozmiar `1200x630`,
  - format PNG,
  - czytelny branding EVA Marine,
  - bez drobnego tekstu, który będzie nieczytelny w komunikatorach.
- Utrzymać `app/lib/seo.ts` i `app/layout.tsx` spięte z generowanymi obrazami.
- Utrzymać alt dla OG image.
- Przetestować podgląd linku:
  - WhatsApp,
  - Facebook Sharing Debugger,
  - LinkedIn Post Inspector,
  - zwykły SMS/iMessage, jeśli dostępne.
- Kryterium akceptacji: link `https://evamarine.pl` i każda ważna podstrona pokazuje profesjonalną miniaturę, tytuł i opis.

### 3. Metadata Dla Wszystkich Stron

- Utrzymać osobne metadata dla:
  - `/` - marka + główna usługa + Mazury/Giżycko,
  - `/about` - doświadczenie i lokalność,
  - `/services` - lista usług: podłogi EVA, skanowanie, projekt, CNC, montaż, zimowanie,
  - `/portfolio` - realizacje pokładów EVA,
  - `/pricing` - cena i warunki wyceny,
  - `/contact` - kontakt i darmowa wycena.
- Dla każdej strony:
  - title powinien być opisowy, zwięzły i unikalny,
  - description powinien realnie streszczać stronę, bez upychania fraz,
  - H1 powinien być spójny z title, ale nie identyczny na siłę,
  - `og:title` i `og:description` mogą być takie same jak metadata albo lekko bardziej sprzedażowe.
- Rozważyć helper danych metadata w `app/data/site.ts`, żeby utrzymać tytuły i opisy w jednym miejscu.
- Kryterium akceptacji: brak powielonych title/description i brak ogólników typu "Strona główna".

### 4. Profesjonalne Sitelinks W Google

Nie da się ręcznie ustawić sitelinks. Trzeba poprawić sygnały, które Google może wykorzystać.

- Upewnić się, że główna nawigacja ma jasne anchor texty:
  - Start,
  - O nas,
  - Usługi,
  - Portfolio,
  - Cennik,
  - Kontakt.
- Dodać mocne linkowanie wewnętrzne z treści:
  - z hero do `/services` i `/portfolio`,
  - z usług do `/contact`,
  - z cennika do `/contact`,
  - z portfolio do `/services` i `/contact`,
  - z O nas do `/services` i `/portfolio`.
- Dodać sekcję "Najważniejsze strony" albo lepiej kontekstowe CTA w stopce, bez nadmiaru linków.
- Utrzymać tytuły i H1 zwarte oraz odróżnialne, bo Google bierze pod uwagę title, nagłówki i linki.
- Unikać duplikacji podobnych sekcji na wielu stronach.
- Kryterium akceptacji: każda ważna podstrona jest linkowana z menu, stopki i co najmniej jednej kontekstowej sekcji treści.

### 5. Sitemap

- Obecny `app/sitemap.ts` powinien zawierać wszystkie publiczne trasy.
- Zmienić `lastModified`, jeśli potrzebne:
  - dla małej statycznej strony można zostawić build-time `new Date()`,
  - lepiej docelowo użyć stałej daty aktualizacji treści albo dat per strony, jeśli będą utrzymywane.
- Sprawdzić wynik pod `https://evamarine.pl/sitemap.xml`.
- Dodać wszystkie przyszłe landing pages do sitemap automatycznie lub przez jedną tablicę tras.
- Nie dodawać URL-i testowych, draftów ani nieistniejących stron.
- Kryterium akceptacji: Search Console akceptuje sitemap bez błędów.

### 6. Robots

- Obecny `app/robots.ts` powinien:
  - pozwalać na crawlowanie `/`,
  - wskazywać `https://evamarine.pl/sitemap.xml`.
- Nie blokować `/images`, bo obrazy mogą wspierać wyniki i preview.
- Nie blokować tras publicznych.
- Jeżeli pojawią się trasy techniczne lub testowe, rozważyć `noindex` w metadata zamiast agresywnego `Disallow`, zależnie od celu.
- Kryterium akceptacji: `https://evamarine.pl/robots.txt` zwraca poprawny sitemap i nie blokuje publicznych stron.

### 7. Structured Data JSON-LD

- Utrzymać i zweryfikować `LocalBusiness` / `ProfessionalService`:
  - `name`,
  - `url`,
  - `image`,
  - `email`,
  - `telephone`,
  - `address`,
  - `areaServed`,
  - `makesOffer`.
- Rozważyć dodanie:
  - `priceRange`,
  - `openingHoursSpecification`, jeśli firma ma realne godziny,
  - `geo`, jeśli lokalizacja jest potwierdzona,
  - `sameAs`, jeśli istnieją profile social/Google Business/Profile firmy,
  - `hasMap`, jeśli jest stały link do mapy.
- Dodać `BreadcrumbList` na stronach, które go nie mają, albo ujednolicić generowanie breadcrumbów.
- Dodać `Service` JSON-LD per usługa, jeśli powstaną osobne strony usługowe.
- Dodać `ImageObject` albo dopracować `Portfolio` tylko jeśli ma to sens i dane są prawdziwe.
- Przetestować w Rich Results Test.
- Kryterium akceptacji: brak błędów walidacji JSON-LD, ostrzeżenia świadomie zaakceptowane albo naprawione.

### 8. Favicon I Nazwa Strony W Google

- Zweryfikować `app/favicon.ico`.
- Jeśli favicon okaże się nieczytelny w wynikach Google, przygotować poprawioną wersję brandową EVA Marine:
  - prosty znak,
  - czytelny w 16x16 i 32x32,
  - bez małego tekstu.
- Rozważyć dodanie `app/apple-icon.png`, jeśli potrzebna będzie osobna ikona dla urządzeń Apple.
- Dodać lub zweryfikować WebSite/Organization structured data z nazwą `EVA Marine`.
- Kryterium akceptacji: wynik Google ma poprawny favicon i nazwę strony po ponownym crawlu.

### 9. Treści I Frazy

- Uporządkować główne frazy:
  - podłogi EVA Mazury,
  - podłogi EVA Giżycko,
  - pokłady jachtowe EVA,
  - pianka EVA do jachtu,
  - skanowanie pokładu jachtu,
  - frezowanie CNC pianki EVA,
  - montaż podłogi EVA na jachcie,
  - zimowanie jachtów Giżycko / Mazury.
- Nie upychać fraz. Każda fraza powinna wynikać z naturalnej treści.
- Dopisać krótkie sekcje wyjaśniające:
  - jak wygląda pomiar,
  - kiedy potrzebny jest skan,
  - jak przygotować szablony,
  - jak działa montaż,
  - co wpływa na cenę,
  - ile orientacyjnie trwa realizacja, jeśli wiadomo.
- Rozważyć osobne landing pages dla najważniejszych usług:
  - `/services/podlogi-eva`,
  - `/services/skanowanie-pokladu`,
  - `/services/frezowanie-cnc`,
  - `/services/zimowanie-jachtow`.
- Kryterium akceptacji: każda kluczowa usługa ma jasny opis, CTA i link do kontaktu.

### 10. Lokalny SEO I Dane Firmy

- Sprawdzić spójność NAP:
  - Name: EVA Marine,
  - Address: Spytkowo 2F, 11-500 Giżycko,
  - Phone: +48 452 007 077.
- Ujednolicić dane na stronie, Google Business Profile, Facebooku, mapach i katalogach branżowych.
- Dodać link do Google Maps / Google Business Profile, jeśli profil istnieje.
- Rozważyć osadzenie opinii tylko wtedy, gdy są prawdziwe i zgodne z regulaminem źródła.
- Kryterium akceptacji: nazwa, adres i telefon są identyczne we wszystkich głównych miejscach.

### 11. Performance I Core Web Vitals

- Sprawdzić PageSpeed Insights dla:
  - `/`,
  - `/services`,
  - `/portfolio`,
  - `/contact`.
- Zweryfikować:
  - LCP hero image,
  - rozmiar i kompresję zdjęć,
  - CLS przy obrazach,
  - ciężar JS klienta,
  - działanie cookie banneru na mobile.
- Utrzymać `next/image` dla wszystkich istotnych obrazów.
- Dla portfolio rozważyć miniatury, jeśli pełne obrazy są za ciężkie.
- Kryterium akceptacji: brak oczywistych regresji LCP/CLS, strona działa dobrze na mobile.

### 12. Dostępność Wspierająca SEO

- Sprawdzić semantykę:
  - nagłówki w logicznej kolejności,
  - linki mają zrozumiałe teksty,
  - przyciski mają sensowne `aria-label`, jeśli nie mają tekstu,
  - obrazy dekoracyjne mają pusty alt,
  - obrazy merytoryczne mają konkretny alt.
- Poprawić menu mobile, jeśli `<details>` powoduje problemy UX lub indeksowania nieistotnych treści.
- Kryterium akceptacji: treść jest czytelna bez JS i ma logiczną strukturę nagłówków.

## Zadania Dla Człowieka

### Google Search Console

- Dodać usługę domenową dla `evamarine.pl`, najlepiej jako Domain property.
- Zweryfikować domenę rekordem DNS TXT.
- Dodać i sprawdzić sitemap:
  - `https://evamarine.pl/sitemap.xml`.
- Po deployu użyć URL Inspection dla:
  - `https://evamarine.pl/`,
  - `https://evamarine.pl/services`,
  - `https://evamarine.pl/contact`.
- Poprosić o indeksowanie po większych zmianach.
- Sprawdzić raport Pages/Indexing:
  - czy strony są indexed,
  - czy nie ma duplicate without user-selected canonical,
  - czy canonical jest zgodny z `https://evamarine.pl`.
- Sprawdzić raport Sitemaps:
  - status Success,
  - liczba odkrytych URL-i zgodna z oczekiwaniem.
- Sprawdzić Experience/Core Web Vitals po zebraniu danych.
- Monitorować Performance:
  - zapytania brandowe `EVA Marine`,
  - zapytania lokalne `podłogi EVA Mazury`, `podłogi EVA Giżycko`,
  - CTR dla strony głównej i usług.

### Google Business Profile

- Utworzyć albo uzupełnić profil firmy.
- Ustawić identyczne dane NAP jak na stronie.
- Dodać kategorię możliwie bliską usługom jachtowym / szkutniczym / wyposażeniu łodzi.
- Dodać zdjęcia realizacji.
- Dodać link do strony.
- Zachęcić realnych klientów do opinii.

### Vercel I Domena

- Upewnić się, że działa jeden canonical host:
  - preferowany: `https://evamarine.pl`.
- Ustawić 301 z `www.evamarine.pl` na `evamarine.pl` albo odwrotnie.
- Sprawdzić SSL.
- Sprawdzić, czy `https://evamarine.pl/sitemap.xml` i `https://evamarine.pl/robots.txt` działają publicznie.

### Narzędzia Do Testów

- Google Search Console.
- Rich Results Test.
- PageSpeed Insights.
- Facebook Sharing Debugger.
- LinkedIn Post Inspector.
- WhatsApp test przez wysłanie linku w rozmowie.
- `site:evamarine.pl` w Google po indeksacji.

## Proponowana Kolejność Prac

1. Utrzymać generowany `opengraph-image` / `twitter-image` i sprawdzić preview po deployu.
2. Zweryfikować i poprawić metadata wszystkich stron.
3. Ujednolicić breadcrumbs i JSON-LD.
4. Poprawić linkowanie wewnętrzne pod sitelinks.
5. Zweryfikować favicon i site name.
6. Sprawdzić sitemap/robots na produkcji.
7. Wykonać checklistę Google Search Console.
8. Dodać treści FAQ/usługowe tam, gdzie realnie pomagają użytkownikowi.
9. Rozważyć osobne landing pages dla usług.
10. Wykonać testy PageSpeed i poprawki obrazów.

## Sugestie Dalsze

- Dodać stronę albo sekcję "Jak przygotować szablon pokładu", jeśli firma obsługuje klientów zdalnych.
- Dodać stronę albo sekcję "Podłogi EVA do jachtów czarterowych", jeśli to realny segment klientów.
- Dodać lokalne treści dla Mazur i Giżycka, ale tylko naturalnie, bez tworzenia pustych stron pod frazy.
- Dodać krótkie case studies do portfolio: problem, zakres, efekt, zdjęcia.
- Dodać daty aktualizacji treści w danych, jeśli sitemap ma pokazywać rzeczywiste `lastModified`.
- Rozważyć Bing Webmaster Tools po ukończeniu Google Search Console.

## Źródła Referencyjne

- Google: Title links - https://developers.google.com/search/docs/appearance/title-link
- Google: Snippets/meta descriptions - https://developers.google.com/search/docs/appearance/snippet
- Google: Favicons in Search - https://developers.google.com/search/docs/appearance/favicon-in-search
- Google: Sitelinks - https://developers.google.com/search/docs/appearance/sitelinks
- Google: Site names - https://developers.google.com/search/docs/appearance/site-names
- Google: Build and submit a sitemap - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Console verification - https://support.google.com/webmasters/answer/9008080

## Notatki Dla Agenta

- Nie wymyślać danych firmy, godzin otwarcia, social links ani opinii. Dodać tylko po potwierdzeniu przez człowieka.
- Nie dodawać sztucznych stron lokalnych bez realnej treści.
- Nie obiecywać, że Google pokaże sitelinks. Można tylko poprawić sygnały.
- Przy pracy z Next.js 16 czytać właściwe docs z `node_modules/next/dist/docs/` przed zmianami API.
- Każdą zmianę SEO kończyć sprawdzeniem wygenerowanego HTML albo przynajmniej przeglądem metadata w kodzie.
