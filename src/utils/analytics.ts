export type AnalyticsEventName =
  | "project_demo_click"
  | "project_code_click"
  | "project_detail_view"
  | "contact_form_submit_success";

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEventName, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  const eventData = {
    event: name,
    ...payload,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }
}
