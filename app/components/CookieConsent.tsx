"use client";

import { useEffect, useState } from "react";

const storageKey = "evaMarineConsent.v1";
const openPreferencesEvent = "evaMarine:openCookiePreferences";

type StoredConsent = {
  version: 1;
  analytics: boolean;
  updatedAt: string;
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
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const savedConsent = readStoredConsent();

    if (savedConsent) {
      setAnalytics(savedConsent.analytics);
      updateGoogleConsent(savedConsent.analytics);
    } else {
      setIsVisible(true);
    }

    function openPreferences() {
      const currentConsent = readStoredConsent();
      setAnalytics(currentConsent?.analytics ?? false);
      setShowDetails(true);
      setIsVisible(true);
    }

    window.addEventListener(openPreferencesEvent, openPreferences);
    return () => window.removeEventListener(openPreferencesEvent, openPreferences);
  }, []);

  function saveConsent(allowAnalytics: boolean) {
    const consent: StoredConsent = {
      version: 1,
      analytics: allowAnalytics,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(storageKey, JSON.stringify(consent));
    } catch {}
    setAnalytics(allowAnalytics);
    setShowDetails(false);
    setIsVisible(false);
    updateGoogleConsent(allowAnalytics);

    if (!allowAnalytics) {
      deleteAnalyticsCookies();
    }
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
            <h2 className="mt-2 text-xl font-semibold text-navy">Cookies i analityka</h2>
            <p className="mt-2 text-sm leading-6 text-slate">
              Używamy niezbędnych mechanizmów strony oraz opcjonalnej analityki, która pomaga
              mierzyć odwiedziny. Analityka działa dopiero po Twojej zgodzie.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
            <button type="button" className="btn btn-primary" onClick={() => saveConsent(true)}>
              Akceptuję wszystkie
            </button>
            <button type="button" className="btn btn-outline bg-white" onClick={() => saveConsent(false)}>
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

            <label className="flex items-start justify-between gap-4 rounded-sm bg-white p-4">
              <span>
                <span className="block font-semibold text-navy">Analityczne</span>
                <span className="mt-1 block text-sm leading-6 text-slate">
                  Pomagają mierzyć ruch na stronie. Dla Google Consent Mode ustawiamy tylko
                  `analytics_storage`; zgody reklamowe pozostają wyłączone.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="mt-1 h-5 w-5 accent-ocean"
              />
            </label>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button type="button" className="btn btn-outline bg-white" onClick={() => saveConsent(false)}>
                Odrzuć opcjonalne
              </button>
              <button type="button" className="btn btn-primary" onClick={() => saveConsent(analytics)}>
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

function readStoredConsent() {
  try {
    const rawConsent = localStorage.getItem(storageKey);
    if (!rawConsent) return null;

    const parsed = JSON.parse(rawConsent) as Partial<StoredConsent>;
    if (parsed.version !== 1 || typeof parsed.analytics !== "boolean") {
      return null;
    }

    return parsed as StoredConsent;
  } catch {
    return null;
  }
}

function updateGoogleConsent(allowAnalytics: boolean) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtagFallback(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: allowAnalytics ? "granted" : "denied",
  });

  window.dispatchEvent(
    new CustomEvent("evaMarine:consentUpdated", {
      detail: { analytics: allowAnalytics },
    }),
  );
}

function deleteAnalyticsCookies() {
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
