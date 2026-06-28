"use client";

import { useEffect, useState } from "react";

const storageKey = "evaMarineConsent.v2";
const legacyStorageKey = "evaMarineConsent.v1";
const openPreferencesEvent = "evaMarine:openCookiePreferences";

type ConsentPreferences = {
  analyticsStorage: boolean;
  adStorage: boolean;
  adUserData: boolean;
  adPersonalization: boolean;
};

type StoredConsent = ConsentPreferences & {
  version: 2;
  updatedAt: string;
};

const deniedConsent: ConsentPreferences = {
  analyticsStorage: false,
  adStorage: false,
  adUserData: false,
  adPersonalization: false,
};

const grantedConsent: ConsentPreferences = {
  analyticsStorage: true,
  adStorage: true,
  adUserData: true,
  adPersonalization: true,
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(deniedConsent);

  useEffect(() => {
    const savedConsent = readStoredConsent();

    if (savedConsent) {
      setPreferences(savedConsent);
      updateGoogleConsent(savedConsent);
    } else {
      setIsVisible(true);
    }

    function openPreferences() {
      setPreferences(readStoredConsent() ?? deniedConsent);
      setShowDetails(true);
      setIsVisible(true);
    }

    window.addEventListener(openPreferencesEvent, openPreferences);
    return () => window.removeEventListener(openPreferencesEvent, openPreferences);
  }, []);

  function saveConsent(nextPreferences: ConsentPreferences) {
    const consent: StoredConsent = {
      version: 2,
      ...nextPreferences,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(storageKey, JSON.stringify(consent));
      localStorage.removeItem(legacyStorageKey);
    } catch {}

    setPreferences(nextPreferences);
    setShowDetails(false);
    setIsVisible(false);
    updateGoogleConsent(nextPreferences);

    if (!nextPreferences.analyticsStorage || !nextPreferences.adStorage) {
      deleteGoogleCookies();
    }
  }

  function updatePreference(name: keyof ConsentPreferences, value: boolean) {
    setPreferences((current) => ({ ...current, [name]: value }));
  }

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6">
      <section
        className="cookie-consent pointer-events-auto mx-auto max-w-4xl rounded-sm border border-navy/10 bg-ivory/95 p-4 shadow-[0_24px_80px_rgb(23_56_79_/_0.22)] backdrop-blur md:p-5"
        role="dialog"
        aria-label="Ustawienia plików cookies"
      >
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="eyebrow">Prywatność</p>
            <h2 className="mt-2 text-xl font-semibold text-navy">Cookies i zgody Google</h2>
            <p className="mt-2 text-sm leading-6 text-slate">
              Korzystamy z niezbędnych mechanizmów strony oraz opcjonalnych danych telemetrycznych,
              które pomagają nam rozumieć, co warto poprawić. Możesz wybrać, na co się zgadzasz.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
            <button type="button" className="btn btn-primary" onClick={() => saveConsent(grantedConsent)}>
              Akceptuję wszystkie
            </button>
            <button type="button" className="btn btn-outline bg-white" onClick={() => saveConsent(deniedConsent)}>
              Tylko niezbędne
            </button>
            <button
              type="button"
              className="btn text-slate hover:text-ocean"
              onClick={() => setShowDetails((current) => !current)}
              aria-expanded={showDetails}
            >
              Dostosuj
            </button>
          </div>
        </div>

        {showDetails ? (
          <div className="mt-4 grid gap-3 border-t border-navy/10 pt-4">
            <label className="flex items-start justify-between gap-4 rounded-sm bg-white p-4">
              <span>
                <span className="block font-semibold text-navy">Niezbędne</span>
                <span className="mt-1 block text-sm leading-6 text-slate">
                  Wymagane do działania strony i zapamiętania wyboru prywatności.
                </span>
              </span>
              <input type="checkbox" checked disabled className="mt-1 h-5 w-5 accent-ocean" />
            </label>

            <ConsentToggle
              title="Analityka"
              description="Pomaga nam sprawdzać, które treści są przydatne, ile osób odwiedza stronę i gdzie warto ją usprawnić."
              checked={preferences.analyticsStorage}
              onChange={(value) => updatePreference("analyticsStorage", value)}
            />
            <ConsentToggle
              title="Pomiar kampanii"
              description="Pozwala ocenić, czy działania promocyjne skutecznie prowadzą do kontaktu z EVA Marine."
              checked={preferences.adStorage}
              onChange={(value) => updatePreference("adStorage", value)}
            />
            <ConsentToggle
              title="Lepsze dopasowanie komunikacji"
              description="Pomaga lepiej rozumieć zainteresowanie ofertą i dopasowywać komunikaty do osób szukających usług jachtowych."
              checked={preferences.adUserData}
              onChange={(value) => updatePreference("adUserData", value)}
            />
            <ConsentToggle
              title="Spersonalizowane treści promocyjne"
              description="Pozwala pokazywać bardziej trafne informacje o usługach, zamiast ogólnych komunikatów reklamowych."
              checked={preferences.adPersonalization}
              onChange={(value) => updatePreference("adPersonalization", value)}
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button type="button" className="btn btn-outline bg-white" onClick={() => saveConsent(deniedConsent)}>
                Odrzuć opcjonalne
              </button>
              <button type="button" className="btn btn-primary" onClick={() => saveConsent(preferences)}>
                Zapisz wybór
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export function CookieSettingsLink() {
  function openPreferences() {
    window.dispatchEvent(new Event(openPreferencesEvent));
  }

  return (
    <button type="button" onClick={openPreferences} className="text-xs text-white/60 hover:text-white">
      Ustawienia cookies
    </button>
  );
}

function ConsentToggle({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-sm bg-white p-4">
      <span>
        <span className="block font-semibold text-navy">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-slate">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 accent-ocean"
      />
    </label>
  );
}

function readStoredConsent(): ConsentPreferences | null {
  try {
    const rawConsent = localStorage.getItem(storageKey);

    if (rawConsent) {
      const parsed = JSON.parse(rawConsent) as Partial<StoredConsent>;

      if (
        parsed.version === 2 &&
        typeof parsed.analyticsStorage === "boolean" &&
        typeof parsed.adStorage === "boolean" &&
        typeof parsed.adUserData === "boolean" &&
        typeof parsed.adPersonalization === "boolean"
      ) {
        return {
          analyticsStorage: parsed.analyticsStorage,
          adStorage: parsed.adStorage,
          adUserData: parsed.adUserData,
          adPersonalization: parsed.adPersonalization,
        };
      }
    }

    const legacyConsent = localStorage.getItem(legacyStorageKey);
    if (!legacyConsent) return null;

    const parsedLegacy = JSON.parse(legacyConsent) as { version?: number; analytics?: boolean };
    if (parsedLegacy.version !== 1 || typeof parsedLegacy.analytics !== "boolean") {
      return null;
    }

    return {
      ...deniedConsent,
      analyticsStorage: parsedLegacy.analytics,
    };
  } catch {
    return null;
  }
}

function updateGoogleConsent(preferences: ConsentPreferences) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtagFallback(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "update", {
    analytics_storage: preferences.analyticsStorage ? "granted" : "denied",
    ad_storage: preferences.adStorage ? "granted" : "denied",
    ad_user_data: preferences.adUserData ? "granted" : "denied",
    ad_personalization: preferences.adPersonalization ? "granted" : "denied",
  });

  window.dispatchEvent(
    new CustomEvent("evaMarine:consentUpdated", {
      detail: {
        analytics: preferences.analyticsStorage,
        analyticsStorage: preferences.analyticsStorage,
        adStorage: preferences.adStorage,
        adUserData: preferences.adUserData,
        adPersonalization: preferences.adPersonalization,
      },
    }),
  );
}

function deleteGoogleCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name.startsWith("_gat"));

  const hostname = window.location.hostname;
  const hostnameParts = hostname.split(".");
  const domains = new Set(["", hostname, `.${hostname}`]);

  if (hostnameParts.length > 2) {
    domains.add(`.${hostnameParts.slice(-2).join(".")}`);
  }

  for (const name of cookieNames) {
    for (const domain of domains) {
      document.cookie = [
        `${name}=`,
        "Max-Age=0",
        "path=/",
        "SameSite=Lax",
        domain ? `domain=${domain}` : "",
      ]
        .filter(Boolean)
        .join("; ");
    }
  }
}
