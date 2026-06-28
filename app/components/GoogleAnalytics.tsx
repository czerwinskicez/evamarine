"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const storageKey = "evaMarineConsent.v1";
const defaultMeasurementId = "G-S8EFCXMQ3J";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || defaultMeasurementId;

type ConsentUpdatedEvent = CustomEvent<{ analytics: boolean }>;

export function GoogleAnalytics() {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    setCanLoadAnalytics(hasAnalyticsConsent());

    function onConsentUpdated(event: Event) {
      const consentEvent = event as ConsentUpdatedEvent;
      setCanLoadAnalytics(Boolean(consentEvent.detail.analytics));
    }

    window.addEventListener("evaMarine:consentUpdated", onConsentUpdated);
    return () => window.removeEventListener("evaMarine:consentUpdated", onConsentUpdated);
  }, []);

  if (!measurementId || !canLoadAnalytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

function hasAnalyticsConsent() {
  try {
    const rawConsent = localStorage.getItem(storageKey);
    if (!rawConsent) return false;

    const parsed = JSON.parse(rawConsent) as { version?: number; analytics?: boolean };
    return parsed.version === 1 && parsed.analytics === true;
  } catch {
    return false;
  }
}
