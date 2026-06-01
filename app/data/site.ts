export const siteUrl = "https://evamarine.pl";

export const company = {
  name: "EVA Marine",
  legalName: "EVA Marine",
  email: "evamarine@info.pl",
  phone: "+48 452 007 077",
  address: "Spytkowo 2F, 11-500 Giżycko",
  region: "Warmińsko-Mazurskie",
  country: "Polska",
  contactRecipient: "root.woozie@gmail.com",
};

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/about", label: "O nas" },
  { href: "/services", label: "Usługi" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Cennik" },
  { href: "/contact", label: "Kontakt" },
];

export const values = [
  {
    title: "Bezpłatna wycena",
    description:
      "Przygotujemy ofertę dopasowaną do Twojej łodzi szybko i bez zobowiązań.",
  },
  {
    title: "Wysoka jakość",
    description:
      "Pracujemy na sprawdzonych piankach EVA odpornych na wodę, UV i codzienne użytkowanie.",
  },
  {
    title: "Sprawna realizacja",
    description:
      "Prowadzimy projekt od pomiaru po montaż, dbając o terminy i jasną komunikację.",
  },
  {
    title: "Indywidualny projekt",
    description:
      "Dopasowujemy kolor, wzór, frezowanie i personalizację do charakteru jednostki.",
  },
];

export const services = [
  {
    title: "Produkcja podłóg z pianki EVA",
    slug: "podlogi-eva",
    image: "/images/podloga1.avif",
    alt: "Dopasowana podłoga EVA na pokładzie jachtu",
    description:
      "Wykonujemy trwałe, estetyczne i antypoślizgowe pokłady z pianki EVA do jachtów i łodzi. Oferujemy różne kolory, frezowania oraz personalizację, w tym logo, nazwę jachtu i numery rejestracyjne.",
  },
  {
    title: "Pomiary i szablony",
    slug: "pomiary-szablony",
    image: "/images/about2.avif",
    alt: "Przygotowanie pomiarów pokładu pod podłogę EVA",
    description:
      "Wykonujemy pomiary ręczne, szablony oraz pomiary na jednostce klienta. Precyzyjny start pozwala uniknąć poprawek na etapie montażu.",
  },
  {
    title: "Projektowanie CAD/CAM",
    slug: "projektowanie-cad-cam",
    image: "/images/about3.avif",
    alt: "Projekt CAD podłogi EVA przygotowany do produkcji",
    description:
      "Na podstawie pomiarów lub plików klienta tworzymy projekt dopasowany do kształtu pokładu, wybranego wzoru, koloru i personalizacji.",
  },
  {
    title: "Frezowanie CNC",
    slug: "frezowanie-cnc",
    image: "/images/cnc1.avif",
    alt: "Frezowanie CNC elementów podłogi EVA",
    description:
      "Wycinamy i frezujemy elementy na obrabiarkach numerycznych, zapewniając powtarzalność, równe krawędzie i dokładne odwzorowanie projektu.",
  },
  {
    title: "Montaż podłogi",
    slug: "montaz-podlogi",
    image: "/images/floor2.avif",
    alt: "Montaż podłogi EVA na jachcie",
    description:
      "Przygotowujemy powierzchnię, dopasowujemy elementy i wykonujemy profesjonalne klejenie paneli EVA na pokładzie jachtu.",
  },
  {
    title: "Zimowanie jachtów",
    slug: "zimowanie-jachtow",
    image: "/images/zimowanie1.avif",
    alt: "Jacht przygotowany do zimowania na Mazurach",
    description:
      "Zapewniamy zimowanie jednostek na monitorowanym placu, wraz z transportem, załadunkiem, slipowaniem i ponownym wodowaniem po sezonie.",
  },
];

export const processSteps = [
  {
    title: "Rozmowa i koncepcja",
    description:
      "Poznajemy jednostkę, oczekiwania użytkownika, styl pokładu oraz zakres prac.",
  },
  {
    title: "Pomiar i projekt",
    description:
      "Przygotowujemy szablony lub dokumentację CAD/CAM, a następnie wycenę bez ukrytych kosztów.",
  },
  {
    title: "Produkcja CNC",
    description:
      "Frezujemy elementy EVA zgodnie z zatwierdzonym projektem i wybraną konfiguracją.",
  },
  {
    title: "Montaż i odbiór",
    description:
      "Instalujemy gotową podłogę na jachcie albo przygotowujemy zestaw do samodzielnego montażu.",
  },
];

export const differentiators = [
  "Ponad 10 lat pracy z jachtami i codzienna znajomość potrzeb żeglarzy.",
  "Połączenie technologii CAD/CAM i CNC z praktycznym doświadczeniem na wodzie.",
  "Lokalna obsługa Mazur oraz możliwość realizacji projektów dla klientów z całej Polski.",
];

export const testimonials = [
  {
    quote:
      "Profesjonalne podejście od pierwszego kontaktu. Pomiar, projekt i montaż wykonane sprawnie i zgodnie z ustaleniami. Pokład wygląda świetnie i sprawdza się w codziennym użytkowaniu.",
    author: "Marek",
  },
  {
    quote:
      "Bardzo dobry kontakt, szybka realizacja i świetna jakość wykonania. Pianka EVA wygląda nowocześnie, jest wygodna i łatwa do utrzymania w czystości.",
    author: "Amelia Banach",
  },
  {
    quote:
      "Zdecydowaliśmy się na wersję z własnym logo i wszystko wyszło idealnie. Pełne wsparcie na każdym etapie, od projektu po montaż w porcie.",
    author: "Robert R-surf",
  },
];

export const pricing = [
  {
    title: "Wstępna wycena",
    price: "indywidualnie",
    description:
      "Przygotowanie orientacyjnej wyceny na podstawie danych, zdjęć i wymiarów dostarczonych przez klienta.",
    highlighted: false,
  },
  {
    title: "Szablony pod podłogę EVA",
    price: "1500 zł",
    description:
      "Pobranie pomiarów na jachcie klienta i przygotowanie precyzyjnych szablonów do produkcji. Cena nie zawiera dojazdu powyżej 10 km od Giżycka.",
    highlighted: true,
  },
  {
    title: "Produkcja podłogi EVA",
    price: "700 zł/m²",
    description:
      "Produkcja indywidualnej podłogi jachtowej z pianki EVA według zatwierdzonego projektu.",
    highlighted: false,
  },
  {
    title: "Zimowanie jachtów",
    price: "1000 zł",
    description:
      "Zimowanie jachtu na monitorowanym placu wraz z przywozem, rozładunkiem i ponownym zwodowaniem po zimie.",
    highlighted: false,
  },
];

export const portfolioImages = [
  {
    src: "/images/portfolio1.avif",
    alt: "Realizacja podłogi EVA na pokładzie jachtu",
  },
  {
    src: "/images/portfolio2.avif",
    alt: "Jacht z jasną podłogą EVA wykonaną na wymiar",
  },
  {
    src: "/images/portfolio3.avif",
    alt: "Detal frezowania podłogi EVA na łodzi",
  },
  {
    src: "/images/portfolio4.avif",
    alt: "Gotowe panele EVA zamontowane na pokładzie",
  },
  {
    src: "/images/portfolio5.avif",
    alt: "Realizacja pokładu jachtowego EVA na Mazurach",
  },
  {
    src: "/images/portoflio6.avif",
    alt: "Personalizowana podłoga EVA dopasowana do jednostki",
  },
  {
    src: "/images/podloga2.avif",
    alt: "Podłoga EVA z frezowanym wzorem na jachcie",
  },
  {
    src: "/images/podloga3.avif",
    alt: "Kompletny pokład jachtowy wykończony pianką EVA",
  },
  {
    src: "/images/hero.avif",
    alt: "Precyzyjne wycinanie paneli EVA",
  },
];
