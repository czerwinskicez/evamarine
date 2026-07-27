export const siteUrl = "https://evamarine.pl";

export const company = {
  name: "EVA Marine",
  legalName: "EVA Marine",
  email: "kontakt@evamarine.pl",
  phone: "+48 452 007 077",
  address: "Spytkowo 2F, 11-500 Giżycko",
  region: "Warmińsko-Mazurskie",
  country: "Polska",
  contactRecipients: ["kontakt@evamarine.pl", "root.woozie@gmail.com"],
};

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/about", label: "O nas" },
  { href: "/services", label: "Usługi" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Cennik" },
  { href: "/contact", label: "Kontakt" },
];

export const staticRoutes = [
  {
    path: "/",
    label: "Start",
    title: "Podłogi EVA i pokłady jachtowe Mazury",
    description:
      "EVA Marine z Giżycka wykonuje profesjonalne podłogi jachtowe z pianki EVA: skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "O nas",
    title: "O nas - doświadczenie jachtowe na Mazurach",
    description:
      "Poznaj EVA Marine z Giżycka. Ponad 10 lat pracy z jachtami, skanowanie pokładów, projektowanie podłóg EVA, CNC i praktyczne podejście do montażu.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    label: "Usługi",
    title: "Usługi - podłogi EVA, skanowanie i montaż",
    description:
      "Usługi EVA Marine: skanowanie pokładu, indywidualny projekt, wykonanie podłogi EVA na wymiar oraz profesjonalny montaż i wklejenie w Giżycku.",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    title: "Portfolio - realizacje podłóg EVA",
    description:
      "Portfolio EVA Marine: realizacje personalizowanych podłóg EVA, frezowanych pokładów jachtowych i detali wykonanych dla jachtów oraz łodzi.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/pricing",
    label: "Cennik",
    title: "Cennik - projekt, pokład i montaż EVA",
    description:
      "Cennik EVA Marine: projekt 499 zł, pokład EVA 799 zł/m² oraz montaż 199 zł/m². Sprawdź elementy wyceny podłogi EVA.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    label: "Kontakt",
    title: "Kontakt - darmowa wycena podłogi EVA",
    description:
      "Skontaktuj się z EVA Marine w Giżycku. Wycena podłogi EVA, skanowanie pokładu, indywidualny projekt, wykonanie na wymiar i montaż.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
] as const;

export const values = [
  {
    title: "Bezpłatna wycena",
    description:
      "Szczegółową wycenę przygotowujemy po dokładnych pomiarach na jachcie albo na podstawie szablonów wykonanych według instrukcji.",
  },
  {
    title: "Wysoka jakość",
    description:
      "Pracujemy na sprawdzonych piankach EVA odpornych na wodę, UV i codzienne użytkowanie.",
  },
  {
    title: "Sprawna realizacja",
    description:
      "Prowadzimy projekt od skanowania pokładu po profesjonalny montaż i wklejenie pianki.",
  },
  {
    title: "Indywidualny projekt",
    description:
      "Dopasowujemy kolor, wzór, frezowanie i personalizację do charakteru jednostki.",
  },
];

export const services = [
  {
    title: "Kompleksowe podłogi z pianki EVA",
    slug: "podlogi-eva",
    image: "/images/podloga1.avif",
    alt: "Dopasowana podłoga EVA na pokładzie jachtu",
    description:
      "Wykonujemy nowoczesne, trwałe i estetyczne podłogi jachtowe z pianki EVA. Kompleksowa realizacja obejmuje materiał, projekt, wykonanie na wymiar oraz profesjonalny montaż.",
  },
  {
    title: "Skanowanie pokładu",
    slug: "skanowanie-pokladu",
    image: "/images/about2.avif",
    alt: "Skanowanie i pomiary pokładu pod podłogę EVA",
    description:
      "Dokładnie skanujemy i mierzymy pokład, aby przygotować projekt dopasowany do konkretnej jednostki. Szczegółowa wycena wymaga pomiaru na jachcie albo szablonów przesłanych według instrukcji.",
  },
  {
    title: "Indywidualny projekt",
    slug: "projektowanie-cad-cam",
    image: "/images/about3.avif",
    alt: "Projekt CAD podłogi EVA przygotowany do produkcji",
    description:
      "Na podstawie skanu, pomiarów lub szablonów tworzymy projekt dopasowany do kształtu pokładu, wybranego wzoru, koloru i personalizacji.",
  },
  {
    title: "Frezowanie CNC",
    slug: "frezowanie-cnc",
    image: "/images/cnc1.avif",
    alt: "Frezowanie CNC elementów podłogi EVA",
    description:
      "Wycinamy i frezujemy elementy na obrabiarkach numerycznych, zapewniając powtarzalność, równe krawędzie i dokładne odwzorowanie indywidualnego projektu.",
  },
  {
    title: "Profesjonalny montaż",
    slug: "montaz-podlogi",
    image: "/images/floor2.avif",
    alt: "Montaż podłogi EVA na jachcie",
    description:
      "Przygotowujemy powierzchnię, dopasowujemy elementy i wykonujemy profesjonalne wklejenie pianki EVA na pokładzie jachtu.",
  },
  {
    title: "Zimowanie jachtów",
    slug: "zimowanie-jachtow",
    image: "/images/zimowanie1.avif",
    alt: "Jacht przygotowany do zimowania na Mazurach",
    description:
      "Zapewniamy zimowanie jednostek na monitorowanym placu, wraz z transportem, załadunkiem, slipowaniem i ponownym wodowaniem po sezonie. Orientacyjna cena usługi to około 1000 zł.",
  },
];

export const processSteps = [
  {
    title: "Rozmowa i koncepcja",
    description:
      "Poznajemy jednostkę, oczekiwania użytkownika, styl pokładu oraz zakres prac.",
  },
  {
    title: "Skanowanie i projekt",
    description:
      "Skanujemy pokład lub pracujemy na szablonach klienta, a następnie przygotowujemy indywidualny projekt.",
  },
  {
    title: "Wykonanie na wymiar",
    description:
      "Frezujemy elementy EVA zgodnie z zatwierdzonym projektem, wzorem i konfiguracją materiału.",
  },
  {
    title: "Montaż i odbiór",
    description:
      "Wklejamy gotową podłogę na pokładzie i dbamy o prawidłowe przygotowanie powierzchni.",
  },
];

export const differentiators = [
  "Ponad 10 lat pracy z jachtami i codzienna znajomość potrzeb żeglarzy.",
  "Połączenie skanowania, technologii CAD/CAM i CNC z praktycznym doświadczeniem na wodzie.",
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
    title: "Projekt",
    price: "499 zł",
    description:
      "Przygotowanie indywidualnego projektu podłogi EVA na podstawie pomiarów, skanu pokładu albo prawidłowo wykonanych szablonów.",
    highlighted: false,
  },
  {
    title: "Pokład EVA",
    price: "799 zł/m²",
    description:
      "Wykonanie elementów podłogi EVA na wymiar, z wybranym kolorem, wzorem, frezowaniem i dopasowaniem do konkretnej jednostki.",
    highlighted: true,
  },
  {
    title: "Montaż",
    price: "199 zł/m²",
    description:
      "Profesjonalne przygotowanie powierzchni, dopasowanie gotowych elementów i montaż pianki EVA na pokładzie jachtu.",
    highlighted: false,
  },
  {
    title: "Realizacja na miejscu",
    price: "3 zł/km",
    description:
      "Przy usłudze u klienta doliczamy dojazd liczony w obie strony. Należy przyjąć zwykle trzy wizyty: pomiar, digitalizację i korektę oraz wklejenie pianki.",
    highlighted: false,
  },
  {
    title: "Szablony klienta",
    price: "wg ustaleń",
    description:
      "Możemy przygotować projekt na podstawie przesłanych szablonów, jednak trwałość wklejenia zależy od prawidłowego przygotowania i montażu na pokładzie.",
    highlighted: false,
  },
  {
    title: "Zimowanie jachtów",
    price: "ok. 1000 zł",
    description:
      "Zimowanie jednostki na monitorowanym placu wraz z transportem, załadunkiem, slipowaniem i ponownym wodowaniem po sezonie.",
    highlighted: false,
  },
];

export const faq = [
  {
    question: "Czy możecie zrobić wycenę na podstawie zdjęcia jachtu?",
    answer:
      "Zdjęcie pomaga w rozmowie, ale szczegółową wycenę przygotowujemy tylko na podstawie dokładnych pomiarów na jachcie albo szablonów przesłanych według naszej instrukcji.",
  },
  {
    question: "Czy muszę przyprowadzić jacht do EVA Marine?",
    answer:
      "Najlepiej tak, ponieważ możemy wtedy wykonać pomiar, sprawdzić projekt i profesjonalnie wkleić piankę. Możliwa jest też praca na szablonach klienta, ale samo wklejenie wymaga specjalistycznego przygotowania.",
  },
  {
    question: "Czy wykonujecie usługę u klienta na miejscu?",
    answer:
      "Tak. Przy realizacji poza naszą lokalizacją doliczamy dojazd 3 zł/km liczony w obie strony. Zwykle trzeba przyjąć trzy przyjazdy: pomiar, digitalizację ze sprawdzeniem szablonów oraz wklejenie pianki.",
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
