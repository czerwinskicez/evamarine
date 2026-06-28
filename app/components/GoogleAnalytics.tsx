"use client";

import Script from "next/script";
import { useEffect } from "react";

const storageKey = "evaMarineConsent.v2";
const legacyStorageKey = "evaMarineConsent.v1";
const defaultMeasurementId = "G-S8EFCXMQ3J";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || defaultMeasurementId;

type ConsentUpdatedEvent = CustomEvent<{ analytics?: boolean; analyticsStorage?: boolean }>;

export function GoogleAnalytics() {
  useEffect(() => {
    function onConsentUpdated(event: Event) {
      const consentEvent = event as ConsentUpdatedEvent;
      const hasAnalyticsConsent = consentEvent.detail.analyticsStorage ?? consentEvent.detail.analytics;
      if (!hasAnalyticsConsent) return;

      window.gtag?.("config", measurementId, {
        anonymize_ip: true,
        page_path: `${window.location.pathname}${window.location.search}`,
      });
    }

    window.addEventListener("evaMarine:consentUpdated", onConsentUpdated);
    return () => window.removeEventListener("evaMarine:consentUpdated", onConsentUpdated);
  }, []);

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

          var hasAnalyticsConsent = false;

          try {
            var storedConsent = window.localStorage.getItem('${storageKey}');
            if (storedConsent) {
              var parsedConsent = JSON.parse(storedConsent);
              hasAnalyticsConsent = Boolean(
                parsedConsent &&
                parsedConsent.version === 2 &&
                parsedConsent.analyticsStorage === true
              );
            }

            if (!storedConsent) {
              var legacyConsent = window.localStorage.getItem('${legacyStorageKey}');
              if (legacyConsent) {
                var parsedLegacyConsent = JSON.parse(legacyConsent);
                hasAnalyticsConsent = Boolean(
                  parsedLegacyConsent &&
                  parsedLegacyConsent.version === 1 &&
                  parsedLegacyConsent.analytics === true
                );
              }
            }
          } catch (error) {}

          window.gtag('config', '${measurementId}', {
            anonymize_ip: true,
            send_page_view: hasAnalyticsConsent
          });
        `}
      </Script>
    </>
  );
}
