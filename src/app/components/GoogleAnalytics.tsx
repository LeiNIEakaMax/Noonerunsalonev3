import { useEffect } from "react";

const GA_ID = "G-0V67MNBCT3";

export function GoogleAnalytics() {
  useEffect(() => {
    const w = window as any;

    // Match Google's exact snippet: dataLayer.push(arguments)
    w.dataLayer = w.dataLayer || [];
    if (!w.gtag) {
      // Must use a regular function so `arguments` is available
      w.gtag = function gtag() {
        w.dataLayer.push(arguments);
      };
      w.gtag("js", new Date());
    }

    // Inject the gtag.js script once
    const scriptId = "google-analytics-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.insertBefore(script, document.head.firstChild);
    }

    w.gtag("config", GA_ID);
  }, []);

  return null;
}
